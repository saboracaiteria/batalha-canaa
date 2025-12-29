import * as THREE from 'three';
import { BotState, BotAI, Weapon, ArmorLevel } from '../types';
import { createWeapon, WeaponType } from './WeaponSystem';

export function createBotAI(difficulty: 'easy' | 'normal' | 'hard'): BotAI {
    let awareness = 0.5;
    let aggression = 0.5;

    switch (difficulty) {
        case 'easy':
            awareness = 0.3;
            aggression = 0.3;
            break;
        case 'normal':
            awareness = 0.6;
            aggression = 0.6;
            break;
        case 'hard':
            awareness = 0.9;
            aggression = 0.8;
            break;
    }

    // Random weapon for bot
    const weaponTypes = [WeaponType.RIFLE, WeaponType.SMG, WeaponType.SHOTGUN, WeaponType.PISTOL];
    const randomWeapon = weaponTypes[Math.floor(Math.random() * weaponTypes.length)];

    return {
        state: BotState.PATROL,
        target: null,
        lastSeenPlayerPos: null,
        health: 100,
        armor: {
            level: Math.random() > 0.5 ? ArmorLevel.LEVEL1 : ArmorLevel.NONE,
            durability: 50,
            maxDurability: 50
        },
        weapon: createWeapon(randomWeapon),
        awareness,
        aggression,
        coverPosition: null
    };
}

export function updateBotAI(
    bot: THREE.Group,
    playerPosition: THREE.Vector3,
    obstacles: THREE.Object3D[],
    deltaTime: number
): void {
    const ai: BotAI = bot.userData.ai;
    if (!ai) return;

    const botPosition = bot.position;
    const distanceToPlayer = botPosition.distanceTo(playerPosition);
    const visionRange = 100 * ai.awareness;

    // Check if player is visible
    const canSeePlayer = distanceToPlayer < visionRange;

    // Update state machine
    switch (ai.state) {
        case BotState.IDLE:
        case BotState.PATROL:
            if (canSeePlayer) {
                ai.state = BotState.CHASE;
                ai.lastSeenPlayerPos = playerPosition.clone();
            } else {
                // Random patrol movement
                if (Math.random() < 0.01) {
                    const randomDir = new THREE.Vector3(
                        (Math.random() - 0.5) * 50,
                        0,
                        (Math.random() - 0.5) * 50
                    );
                    bot.position.add(randomDir.normalize().multiplyScalar(0.1));
                }
            }
            break;

        case BotState.CHASE:
            if (canSeePlayer) {
                ai.lastSeenPlayerPos = playerPosition.clone();

                // If close enough, engage in combat
                if (distanceToPlayer < 50) {
                    ai.state = BotState.COMBAT;
                } else {
                    // Move towards player
                    const direction = playerPosition.clone().sub(botPosition).normalize();
                    bot.position.add(direction.multiplyScalar(0.2));
                    bot.lookAt(playerPosition);
                }
            } else if (ai.lastSeenPlayerPos) {
                // Move to last seen position
                const distToLastSeen = botPosition.distanceTo(ai.lastSeenPlayerPos);
                if (distToLastSeen < 5) {
                    ai.state = BotState.PATROL;
                    ai.lastSeenPlayerPos = null;
                } else {
                    const direction = ai.lastSeenPlayerPos.clone().sub(botPosition).normalize();
                    bot.position.add(direction.multiplyScalar(0.15));
                }
            }
            break;

        case BotState.COMBAT:
            if (!canSeePlayer) {
                ai.state = BotState.CHASE;
                break;
            }

            bot.lookAt(playerPosition);

            // Decide whether to take cover or fight
            if (ai.health < 40 && Math.random() < 0.3) {
                ai.state = BotState.SEEK_COVER;
                ai.coverPosition = findCoverPosition(botPosition, playerPosition, obstacles);
            } else {
                // Strafe and shoot
                const strafeDir = new THREE.Vector3(
                    Math.sin(Date.now() * 0.001) * 0.2,
                    0,
                    Math.cos(Date.now() * 0.001) * 0.2
                );
                bot.position.add(strafeDir);

                // Maintain combat distance
                if (distanceToPlayer < 20) {
                    const backOff = playerPosition.clone().sub(botPosition).normalize().multiplyScalar(-0.1);
                    bot.position.add(backOff);
                } else if (distanceToPlayer > 40) {
                    const approach = playerPosition.clone().sub(botPosition).normalize().multiplyScalar(0.1);
                    bot.position.add(approach);
                }
            }
            break;

        case BotState.SEEK_COVER:
            if (ai.coverPosition) {
                const distToCover = botPosition.distanceTo(ai.coverPosition);
                if (distToCover < 2) {
                    ai.state = BotState.HEALING;
                } else {
                    const direction = ai.coverPosition.clone().sub(botPosition).normalize();
                    bot.position.add(direction.multiplyScalar(0.25));
                }
            } else {
                ai.state = BotState.COMBAT;
            }
            break;

        case BotState.HEALING:
            // Simulate healing
            if (ai.health < 100) {
                ai.health = Math.min(100, ai.health + 15 * deltaTime);
            } else {
                ai.state = BotState.COMBAT;
                ai.coverPosition = null;
            }
            break;

        case BotState.LOOTING:
            // TODO: Implement looting behavior
            ai.state = BotState.PATROL;
            break;
    }
}

function findCoverPosition(
    botPosition: THREE.Vector3,
    playerPosition: THREE.Vector3,
    obstacles: THREE.Object3D[]
): THREE.Vector3 | null {
    const playerDirection = playerPosition.clone().sub(botPosition).normalize();
    const perpendicular = new THREE.Vector3(-playerDirection.z, 0, playerDirection.x);

    // Try to find obstacle in perpendicular direction
    for (const offset of [1, -1]) {
        const searchPos = botPosition.clone().add(perpendicular.clone().multiplyScalar(20 * offset));

        // Check if there's an obstacle nearby
        for (const obstacle of obstacles) {
            if (obstacle.position.distanceTo(searchPos) < 10) {
                return searchPos;
            }
        }
    }

    // Fallback: move away from player
    return botPosition.clone().sub(playerDirection.multiplyScalar(15));
}

export function shouldBotFire(bot: THREE.Group, playerPosition: THREE.Vector3): boolean {
    const ai: BotAI = bot.userData.ai;
    if (!ai || ai.state !== BotState.COMBAT) return false;

    const distance = bot.position.distanceTo(playerPosition);
    const inRange = distance < ai.weapon.range;

    // Fire rate based on aggression and weapon fire rate
    const fireChance = ai.aggression * 0.05;

    return inRange && Math.random() < fireChance;
}
