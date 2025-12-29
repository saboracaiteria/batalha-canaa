import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GameState, GameSettings, PlayerStats } from '../types';

interface Props {
    gameState: GameState;
    settings: GameSettings;
    onUpdateStats: (stats: Partial<PlayerStats>) => void;
    onGameOver: (win: boolean) => void;
    onTogglePause: () => void;
    inputRef: React.MutableRefObject<any>;
}

const MAP_SIZE = 200;
const GRAVITY = 40.0;
const JUMP_FORCE = 15.0;
const WALK_SPEED = 12.0;
const RUN_SPEED = 20.0;

const GameScene: React.FC<Props> = ({ gameState, settings, onUpdateStats, onGameOver, onTogglePause, inputRef }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // MEMORY OPTIMIZATION: Extended Pool
    const poolRef = useRef({
        v1: new THREE.Vector3(), v2: new THREE.Vector3(), v3: new THREE.Vector3(),
        v4: new THREE.Vector3(), v5: new THREE.Vector3(), v6: new THREE.Vector3(),
        raycaster: new THREE.Raycaster(),
        dummy: new THREE.Object3D()
    });

    const internalRef = useRef<any>({
        health: 100, kills: 0, alive: 0,
        zoneRadius: MAP_SIZE, zoneTimer: 60,
        verticalVelocity: 0, fireCooldown: 0, gameTime: 0,
        pcInput: { forward: false, backward: false, left: false, right: false },
        tracersPool: [] as THREE.Mesh[],
        activeTracers: [] as any[]
    });

    // SCENE REFS
    const sceneRef = useRef<THREE.Scene | null>(null);
    const playerGroupRef = useRef<THREE.Group | null>(null);
    const enemiesRef = useRef<THREE.Group[]>([]);
    const medkitsRef = useRef<THREE.Group[]>([]);
    const obstaclesRef = useRef<THREE.Object3D[]>([]);
    const roofsRef = useRef<THREE.Object3D[]>([]);
    const groundRef = useRef<THREE.Mesh | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const clock = new THREE.Clock();
        const pool = poolRef.current;

        // --- INIT ---
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x87CEEB);
        scene.fog = new THREE.Fog(0x87CEEB, 20, 300);
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(settings.fov, window.innerWidth / window.innerHeight, 0.1, 500);
        const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.BasicShadowMap;
        containerRef.current.appendChild(renderer.domElement);

        // --- LIGHTS ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(50, 100, 50);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.set(1024, 1024);
        dirLight.shadow.camera.left = -100; dirLight.shadow.camera.right = 100;
        dirLight.shadow.camera.top = 100; dirLight.shadow.camera.bottom = -100;
        scene.add(dirLight);

        // --- POOLS ---
        const obstacles: THREE.Object3D[] = [];
        const roofs: THREE.Object3D[] = [];
        obstaclesRef.current = obstacles;
        roofsRef.current = roofs;

        // Tracers
        for (let i = 0; i < 80; i++) {
            const tm = new THREE.Mesh(new THREE.SphereGeometry(0.15, 4, 4), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
            tm.position.set(0, -900, 0); tm.visible = false;
            scene.add(tm);
            internalRef.current.tracersPool.push(tm);
        }

        // --- WORLD ---
        const ground = new THREE.Mesh(new THREE.PlaneGeometry(MAP_SIZE * 2, MAP_SIZE * 2), new THREE.MeshLambertMaterial({ color: 0x3b7d3b }));
        ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true;
        scene.add(ground); groundRef.current = ground;

        // Instanced Trees
        const treeCount = 800;
        const leavesMesh = new THREE.InstancedMesh(new THREE.ConeGeometry(2.5, 7, 6), new THREE.MeshLambertMaterial({ color: 0x1a4a1a }), treeCount);
        const trunkMesh = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.5, 0.6, 2.5, 5), new THREE.MeshLambertMaterial({ color: 0x4a2e1a }), treeCount);
        leavesMesh.castShadow = true; trunkMesh.castShadow = true;
        let treeIdx = 0;
        const addTree = (x: number, z: number) => {
            if (treeIdx >= treeCount) return;
            pool.dummy.position.set(x, 1.25, z); pool.dummy.scale.set(1, 1, 1); pool.dummy.updateMatrix(); trunkMesh.setMatrixAt(treeIdx, pool.dummy.matrix);
            pool.dummy.position.set(x, 4.5, z); pool.dummy.updateMatrix(); leavesMesh.setMatrixAt(treeIdx, pool.dummy.matrix);
            treeIdx++;
        };

        // House Tracking & Spawning
        const houseLocations: { x: number, z: number }[] = [];

        const createHouse = (x: number, z: number, floors = 1) => {
            const h = floors * 6; const w = 10;
            const house = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), new THREE.MeshLambertMaterial({ color: floors > 1 ? 0xdcb28e : 0xe0e0e0 }));
            house.position.set(x, h / 2, z); house.castShadow = true; house.receiveShadow = true;
            scene.add(house); obstacles.push(house);

            const roof = new THREE.Mesh(new THREE.ConeGeometry(8, 4, 4), new THREE.MeshLambertMaterial({ color: 0x8B4513 }));
            roof.position.set(x, h + 2, z); roof.rotation.y = Math.PI / 4;
            scene.add(roof); obstacles.push(roof);

            const ceil = new THREE.Mesh(new THREE.PlaneGeometry(w + 2, w + 2), new THREE.MeshBasicMaterial({ visible: false }));
            ceil.rotation.x = -Math.PI / 2; ceil.position.set(x, h, z); roofs.push(ceil);

            houseLocations.push({ x, z }); // Store precise location
        };

        // City Gen
        const blockSize = 50;
        const streetMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
        for (let x = -4; x <= 4; x++) {
            for (let z = -4; z <= 4; z++) {
                const cx = x * blockSize; const cz = z * blockSize;
                const s1 = new THREE.Mesh(new THREE.PlaneGeometry(12, blockSize), streetMat); s1.rotation.x = -Math.PI / 2; s1.position.set(cx, 0.05, cz); scene.add(s1);
                const s2 = new THREE.Mesh(new THREE.PlaneGeometry(blockSize, 12), streetMat); s2.rotation.x = -Math.PI / 2; s2.position.set(cx, 0.05, cz); scene.add(s2);
                if (Math.random() > 0.3) createHouse(cx + 25, cz + 25, Math.random() > 0.7 ? 2 : 1); else addTree(cx + 25, cz + 25);
            }
        }
        scene.add(leavesMesh); scene.add(trunkMesh);

        // Medkits
        for (let i = 0; i < 15; i++) {
            const k = new THREE.Group(); k.position.set((Math.random() - 0.5) * MAP_SIZE, 1, (Math.random() - 0.5) * MAP_SIZE);
            k.add(new THREE.Mesh(new THREE.BoxGeometry(1, 0.6, 0.4), new THREE.MeshLambertMaterial({ color: 0xffffff })));
            k.add(new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.2, 0.45), new THREE.MeshLambertMaterial({ color: 0x00ff00 })));
            scene.add(k); medkitsRef.current.push(k);
        }

        // Actors
        const createHuman = (rgb: number, isPlayer: boolean) => {
            const rig = new THREE.Group();
            const torso = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.7, 0.3), new THREE.MeshLambertMaterial({ color: rgb }));
            torso.position.y = 1.05; rig.add(torso);
            const head = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.35), new THREE.MeshLambertMaterial({ color: 0xffccaa }));
            head.position.y = 0.65; torso.add(head);
            const gun = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.15, 0.6), new THREE.MeshLambertMaterial({ color: 0x111 }));
            gun.position.set(0.3, 0, 0.3); torso.add(gun);

            const legL = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.7, 0.2), new THREE.MeshLambertMaterial({ color: 0x222 }));
            legL.position.set(-0.2, -0.7, 0); torso.add(legL);
            const legR = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.7, 0.2), new THREE.MeshLambertMaterial({ color: 0x222 }));
            legR.position.set(0.2, -0.7, 0); torso.add(legR);

            const hitbox = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({ visible: false }));
            hitbox.position.y = 1; rig.add(hitbox);

            if (!isPlayer) {
                const bar = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.15), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
                bar.position.set(0, 2.2, 0); rig.add(bar); rig.userData.hpBar = bar;
            }

            rig.userData = { limbs: { head, gun, legL, legR, hitbox }, isPlayer, hp: 100, speed: WALK_SPEED, state: 'patrol', patrolTarget: new THREE.Vector3(), verticalVelocity: 0, isGrounded: true };
            return rig;
        };

        const player = createHuman(0xffff00, true); player.position.set(0, 5, 0);
        scene.add(player); playerGroupRef.current = player;

        // Spawn Bots: 50% Inside Houses, 50% Edge of Map
        for (let i = 0; i < settings.botCount; i++) {
            const b = createHuman(Math.random() * 0xffffff, false);

            if (Math.random() > 0.5 && houseLocations.length > 0) {
                // Camper Bot
                const house = houseLocations[Math.floor(Math.random() * houseLocations.length)];
                b.position.set(house.x, 5, house.z);
            } else {
                // Edge Bot (In Gas or near)
                const angle = Math.random() * Math.PI * 2;
                const dist = MAP_SIZE - 10 - Math.random() * 20;
                b.position.set(Math.cos(angle) * dist, 5, Math.sin(angle) * dist);
            }

            b.userData.patrolTarget.set((Math.random() - 0.5) * 200, 0, (Math.random() - 0.5) * 200);
            scene.add(b); enemiesRef.current.push(b);
        }
        onUpdateStats({ alive: settings.botCount + 1 });

        const zone = new THREE.Mesh(new THREE.CylinderGeometry(MAP_SIZE, MAP_SIZE, 300, 32, 1, true), new THREE.MeshBasicMaterial({ color: 0x00e5ff, opacity: 0.2, transparent: true, side: THREE.DoubleSide }));
        zone.position.y = 150; scene.add(zone);

        renderer.compile(scene, camera);

        // --- EVENTS ---
        const handleKey = (e: KeyboardEvent, down: boolean) => {
            const pc = internalRef.current.pcInput;
            if (e.code === 'KeyW') pc.forward = down; if (e.code === 'KeyS') pc.backward = down;
            if (e.code === 'KeyA') pc.left = down; if (e.code === 'KeyD') pc.right = down;
            if (down && e.code === 'Space') inputRef.current.jump = true;
            if (e.code === 'ShiftLeft') inputRef.current.isSprinting = down;
            if (down && e.code === 'Escape') onTogglePause();
        };
        const handleMouse = (e: MouseEvent) => {
            if (document.pointerLockElement) {
                const s = settings.sens * 0.002;
                inputRef.current.yaw = (inputRef.current.yaw || 0) - e.movementX * s;
                inputRef.current.pitch = Math.max(-1.4, Math.min(1.4, (inputRef.current.pitch || 0) + e.movementY * s));
            }
        };
        const handleDown = () => {
            if (!document.pointerLockElement && gameState === GameState.PLAYING) containerRef.current?.requestPointerLock();
            else if (document.pointerLockElement) inputRef.current.firing = true;
        };
        const handleUp = () => inputRef.current.firing = false;

        document.addEventListener('keydown', e => handleKey(e, true)); document.addEventListener('keyup', e => handleKey(e, false));
        document.addEventListener('mousemove', handleMouse); document.addEventListener('mousedown', handleDown); document.addEventListener('mouseup', handleUp);

        // --- GAMEPLAY HELPERS ---
        const shoot = (shooter: THREE.Group, isPlayer: boolean) => {
            // 1. Calculate Origin & Direction
            pool.v1.copy(shooter.position).add(pool.v2.set(0, 1.5, 0)); // Origin
            if (isPlayer) camera.getWorldDirection(pool.v3);
            else { if (playerGroupRef.current) pool.v3.subVectors(playerGroupRef.current.position, shooter.position).normalize(); }

            // 2. Visuals (Tracer)
            const t = internalRef.current.tracersPool.find((m: THREE.Mesh) => !m.visible);
            if (t) {
                t.visible = true; t.position.copy(pool.v1);
                // Store velocity manually
                internalRef.current.activeTracers.push({ mesh: t, velX: pool.v3.x * 100, velY: pool.v3.y * 100, velZ: pool.v3.z * 100, life: 0.5 });
            }

            // 3. Logic (Hit)
            pool.raycaster.set(pool.v1, pool.v3);
            const targets = isPlayer ? enemiesRef.current.map(e => e.userData.limbs.hitbox) : (playerGroupRef.current ? [playerGroupRef.current.userData.limbs.hitbox] : []);
            const hits = pool.raycaster.intersectObjects(targets, false);

            if (hits.length > 0 && hits[0].distance < 100) {
                const victim = hits[0].object.parent;
                if (victim) {
                    victim.userData.hp -= 34; // 3 hit kill
                    if (victim.userData.hpBar) victim.userData.hpBar.scale.x = Math.max(0, victim.userData.hp / 100);

                    if (victim.userData.hp <= 0) {
                        if (isPlayer) {
                            scene.remove(victim); enemiesRef.current = enemiesRef.current.filter(e => e !== victim);
                            internalRef.current.kills++; onUpdateStats({ kills: internalRef.current.kills });
                            if (enemiesRef.current.length === 0) onGameOver(true);
                        } else { onUpdateStats({ health: 0 }); onGameOver(false); }
                    } else if (!isPlayer) onUpdateStats({ health: victim.userData.hp });
                }
            }
        };

        const updatePhys = (obj: THREE.Group, dt: number) => {
            obj.userData.verticalVelocity -= GRAVITY * dt;
            obj.position.y += obj.userData.verticalVelocity * dt;
            if (obj.position.y < 0) { obj.position.y = 0; obj.userData.verticalVelocity = 0; obj.userData.isGrounded = true; }

            pool.v1.copy(obj.position).add(pool.v2.set(0, 1, 0));
            pool.raycaster.set(pool.v1, pool.v3.set(0, -1, 0));
            const hits = pool.raycaster.intersectObjects(roofsRef.current);
            if (hits.length > 0) { obj.position.y = hits[0].point.y; obj.userData.verticalVelocity = 0; obj.userData.isGrounded = true; }
        };

        // --- ANIMATION ---
        let frameId: number;
        const animate = () => {
            if (gameState === GameState.PAUSED || gameState === GameState.GAMEOVER) { if (gameState === GameState.PAUSED) { renderer.render(scene, camera); frameId = requestAnimationFrame(animate); } return; }

            const dt = Math.min(clock.getDelta(), 0.1);
            const core = internalRef.current;
            const input = inputRef.current;
            core.gameTime += dt;

            // ZONE
            if (core.zoneTimer > 0) { core.zoneTimer -= dt; onUpdateStats({ zoneTimer: Math.ceil(core.zoneTimer) }); }
            else {
                if (core.zoneRadius > 10) core.zoneRadius -= 2 * dt;
                zone.scale.set(core.zoneRadius / MAP_SIZE, 1, core.zoneRadius / MAP_SIZE);
                onUpdateStats({ isGasActive: true });
                if (player.position.length() > core.zoneRadius) { core.health -= 5 * dt; onUpdateStats({ health: core.health }); if (core.health <= 0) onGameOver(false); }
            }

            // MOVEMENT
            let mx = input.x; let mz = input.y;
            if (core.pcInput.forward) mz -= 1; if (core.pcInput.backward) mz += 1;
            if (core.pcInput.left) mx -= 1; if (core.pcInput.right) mx += 1;

            if (mx !== 0 || mz !== 0) {
                const speed = (input.isSprinting ? RUN_SPEED : WALK_SPEED) * dt;
                pool.v1.set(0, 0, -1).applyQuaternion(camera.quaternion); pool.v1.y = 0; pool.v1.normalize();
                pool.v2.set(1, 0, 0).applyQuaternion(camera.quaternion); pool.v2.y = 0; pool.v2.normalize();
                pool.v3.copy(pool.v1).multiplyScalar(-mz).add(pool.v2.multiplyScalar(mx)).normalize().multiplyScalar(speed);

                pool.v4.copy(player.position).add(pool.v5.set(0, 1, 0));
                pool.v6.copy(pool.v3).normalize();
                pool.raycaster.set(pool.v4, pool.v6);
                if (pool.raycaster.intersectObjects(obstacles, true).length === 0) {
                    player.position.add(pool.v3);
                }

                if (pool.v3.lengthSq() > 0.000001) player.rotation.y = Math.atan2(pool.v3.x, pool.v3.z);
                player.userData.limbs.legL.rotation.x = Math.sin(core.gameTime * 15) * 0.8;
                player.userData.limbs.legR.rotation.x = Math.sin(core.gameTime * 15 + Math.PI) * 0.8;
            } else { player.userData.limbs.legL.rotation.x = 0; player.userData.limbs.legR.rotation.x = 0; }

            if (input.jump && player.userData.isGrounded) { player.userData.verticalVelocity = JUMP_FORCE; player.userData.isGrounded = false; input.jump = false; }
            updatePhys(player, dt);

            // SHOOTING & BOTS
            if (input.firing && core.fireCooldown <= 0) { core.fireCooldown = 0.15; shoot(player, true); }
            if (core.fireCooldown > 0) core.fireCooldown -= dt;

            enemiesRef.current.forEach(bot => {
                updatePhys(bot, dt);
                const distToPlayer = bot.position.distanceTo(player.position);

                // STOP if closer than 5 meters to avoid merging
                if (distToPlayer < 50) {
                    bot.lookAt(player.position.x, bot.position.y, player.position.z);

                    // Move only if not too close
                    if (distToPlayer > 5) {
                        bot.translateZ(bot.userData.speed * dt);
                    }

                    // Shoot logic
                    if (Math.random() < 0.02) shoot(bot, false);
                } else {
                    bot.lookAt(bot.userData.patrolTarget.x, bot.position.y, bot.userData.patrolTarget.z);
                    bot.translateZ(bot.userData.speed * 0.6 * dt);
                    if (bot.position.distanceTo(bot.userData.patrolTarget) < 2) bot.userData.patrolTarget.set((Math.random() - 0.5) * MAP_SIZE, 0, (Math.random() - 0.5) * MAP_SIZE);
                }
            });

            // FX UPDATE
            for (let i = core.activeTracers.length - 1; i >= 0; i--) {
                const t = core.activeTracers[i];
                t.life -= dt;
                t.mesh.position.x += t.velX * dt; t.mesh.position.y += t.velY * dt; t.mesh.position.z += t.velZ * dt;
                if (t.life <= 0) { t.mesh.visible = false; core.activeTracers.splice(i, 1); }
            }

            // MEDKITS
            medkitsRef.current.forEach((k, i) => { k.rotation.y += 2 * dt; if (player.position.distanceTo(k.position) < 2) { core.health = Math.min(100, core.health + 50); onUpdateStats({ health: core.health }); scene.remove(k); medkitsRef.current.splice(i, 1); } });

            // CAMERA
            const cDist = input.isADS ? 2 : 5;
            const tY = player.position.y + 1.8;
            pool.v1.set(player.position.x, tY, player.position.z);
            pool.v2.set(
                player.position.x + Math.sin(input.yaw || 0) * Math.cos(input.pitch || -0.2) * cDist,
                tY + Math.sin(input.pitch || -0.2) * cDist,
                player.position.z + Math.cos(input.yaw || 0) * Math.cos(input.pitch || -0.2) * cDist
            );
            pool.v3.subVectors(pool.v2, pool.v1).normalize();
            pool.raycaster.set(pool.v1, pool.v3);
            const cHits = pool.raycaster.intersectObjects([groundRef.current!, ...obstacles], true);
            if (cHits.length > 0 && cHits[0].distance < cDist) camera.position.copy(cHits[0].point.sub(pool.v3.multiplyScalar(0.2)));
            else camera.position.copy(pool.v2);
            camera.lookAt(pool.v1);

            onUpdateStats({ alive: enemiesRef.current.length + 1 });
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);

        const handleResize = () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); };
        window.addEventListener('resize', handleResize);
        return () => { cancelAnimationFrame(frameId); window.removeEventListener('resize', handleResize); document.removeEventListener('keydown', e => handleKey(e, true)); document.removeEventListener('keyup', e => handleKey(e, false)); document.removeEventListener('mousemove', handleMouse); document.removeEventListener('mousedown', handleDown); document.removeEventListener('mouseup', handleUp); containerRef.current && (containerRef.current.innerHTML = ''); };
    }, [gameState]);

    return <div ref={containerRef} className="w-full h-full" />;
};

export default GameScene;
