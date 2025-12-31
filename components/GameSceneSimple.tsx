// Simple backup of original working version
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GameState, GameSettings, PlayerStats } from '../types';

interface Props {
    gameState: GameState;
    settings: GameSettings;
    onUpdateStats: (stats: Partial<PlayerStats>) => void;
    onGameOver: (win: boolean) => void;
    inputRef: React.MutableRefObject<any>;
}

const MAP_SIZE = 180;
const BOT_VISION = 100;

const GameSceneBackup: React.FC<Props> = ({ gameState, settings, onUpdateStats, onGameOver, inputRef }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const internalRef = useRef<any>({
        health: 100, kills: 0, alive: 0,
        zoneRadius: MAP_SIZE, zoneTimer: 60,
        verticalVelocity: 0, fireCooldown: 0, nadeCooldown: 0,
        gameTime: 0,
        vel: new THREE.Vector3(),
        currentYaw: 0,
        smoothFov: settings.fov,
        shake: 0,
        currentGrenadeType: 'explosive'
    });

    useEffect(() => {
        if (!containerRef.current) return;

        // --- RENDERER & SCENE ---
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x87CEEB);
        scene.fog = new THREE.FogExp2(0x87CEEB, 0.0015);

        const camera = new THREE.PerspectiveCamera(settings.fov, window.innerWidth / window.innerHeight, 0.1, 5000);
        const renderer = new THREE.WebGLRenderer({
            antialias: false, // DESABILITADO PARA MELHOR FPS
            powerPreference: "high-performance",
            alpha: false
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(1); // FIXO EM 1 PARA MÁXIMO FPS
        renderer.shadowMap.enabled = false; // SOMBRAS DESABILITADAS PARA FPS
        renderer.toneMapping = THREE.NoToneMapping; // SIMPLIFICADO
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        containerRef.current.appendChild(renderer.domElement);

        // --- ILUMINAÇÃO OTIMIZADA ---
        const ambient = new THREE.AmbientLight(0xffffff, 1.2); // LUZ AMBIENTE MAIS FORTE (SEM SOMBRAS)
        scene.add(ambient);

        const sun = new THREE.DirectionalLight(0xffffff, 0.8);
        sun.position.set(250, 450, 150);
        sun.castShadow = false; // SOMBRAS DESABILITADAS
        scene.add(sun);

        // --- MUNDO E OBJETOS ---
        const obstacles: THREE.Object3D[] = [];
        const roofs: THREE.Object3D[] = [];
        const enemies: THREE.Group[] = [];
        const medkits: THREE.Group[] = [];
        const grenades: any[] = [];
        const tracers: any[] = [];
        const housePositions: { x: number, z: number }[] = [];

        // Chão (MeshLambertMaterial - mais performático e visível)
        const groundGeo = new THREE.PlaneGeometry(MAP_SIZE * 20, MAP_SIZE * 20);
        const groundMat = new THREE.MeshLambertMaterial({
            color: 0x3b7d3b, // Verde floresta
            emissive: 0x051505 // Pequena emissão para nunca ficar 100% preto
        });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        scene.add(ground);

        // --- MONTANHAS AO FUNDO ---
        const mountMat = new THREE.MeshLambertMaterial({ color: 0x455a64 });
        for (let i = 0; i < 20; i++) {
            const angle = (i / 20) * Math.PI * 2;
            const dist = MAP_SIZE * 5 + Math.random() * 200;
            const size = 100 + Math.random() * 200;
            const mountain = new THREE.Mesh(new THREE.ConeGeometry(size, size * 1.5, 4), mountMat);
            mountain.position.set(Math.cos(angle) * dist, size * 0.5, Math.sin(angle) * dist);
            mountain.rotation.y = Math.random() * Math.PI;
            scene.add(mountain);
        }

        // Árvores
        const createTree = (x: number, z: number) => {
            const tree = new THREE.Group();
            const trunk = new THREE.Mesh(
                new THREE.CylinderGeometry(0.5, 0.8, 5, 4), // REDUZIDO DE 6 PARA 4 SEGMENTOS
                new THREE.MeshLambertMaterial({ color: 0x4e342e }) // LAMBERT MAIS RÁPIDO
            );
            trunk.position.y = 2.5;
            const leaves = new THREE.Mesh(
                new THREE.ConeGeometry(3, 5, 4), // GEOMETRIA MAIS SIMPLES
                new THREE.MeshLambertMaterial({ color: 0x2e7d32 })
            );
            leaves.position.y = 6;
            tree.add(trunk, leaves);
            tree.position.set(x, 0, z);
            tree.castShadow = false; // SEM SOMBRAS
            tree.receiveShadow = false;
            scene.add(tree);
            obstacles.push(trunk);
        };

        const createHouse = (x: number, z: number, floors = 1) => {
            const house = new THREE.Group();
            house.position.set(x, 0, z);
            const h = 7 * floors, w = 15, d = 15;
            const wallMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee });

            const walls = [
                new THREE.Mesh(new THREE.BoxGeometry(w, h, 1), wallMat),
                new THREE.Mesh(new THREE.BoxGeometry(1, h, d), wallMat),
                new THREE.Mesh(new THREE.BoxGeometry(1, h, d), wallMat),
            ];
            walls[0].position.set(0, h / 2, -d / 2);
            walls[1].position.set(-w / 2, h / 2, 0);
            walls[2].position.set(w / 2, h / 2, 0);
            walls.forEach(m => { m.castShadow = true; m.receiveShadow = true; house.add(m); obstacles.push(m); });

            const roof = new THREE.Mesh(
                new THREE.ConeGeometry(12.5, 6, 4),
                new THREE.MeshStandardMaterial({ color: 0x6d4c41 })
            );
            roof.position.y = h + 3; roof.rotation.y = Math.PI / 4;
            roof.castShadow = true; house.add(roof); obstacles.push(roof);

            const roofFloor = new THREE.Mesh(new THREE.BoxGeometry(w + 2, 1, d + 2), new THREE.MeshBasicMaterial({ visible: false }));
            roofFloor.position.y = h; house.add(roofFloor); roofs.push(roofFloor);

            if (floors > 1) {
                const ramp = new THREE.Mesh(new THREE.BoxGeometry(5, 0.8, 18), new THREE.MeshStandardMaterial({ color: 0x3e2723 }));
                ramp.position.set(w / 2 + 2, 3.5, 0); ramp.rotation.x = -0.42;
                house.add(ramp); roofs.push(ramp);
            }
            scene.add(house);

            // Registra posição para spawn de bots
            housePositions.push({ x, z });
        };

        const createMedkit = (x: number, z: number) => {
            const kit = new THREE.Group();
            const box = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.7, 0.5), new THREE.MeshStandardMaterial({ color: 0xffffff }));
            const cross = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.5, 0.52), new THREE.MeshBasicMaterial({ color: 0x4caf50 }));
            kit.add(box, cross); kit.position.set(x, 0.6, z);
            scene.add(kit); medkits.push(kit);
        };

        const createGrenade = (x: number, y: number, z: number, velocity: THREE.Vector3, type: 'explosive' | 'smoke' = 'explosive') => {
            const color = type === 'smoke' ? 0x999999 : 0xff0000;
            const g = new THREE.Mesh(
                new THREE.SphereGeometry(0.4, 8, 8),
                new THREE.MeshStandardMaterial({
                    color,
                    emissive: color,
                    emissiveIntensity: type === 'smoke' ? 0.5 : 2
                })
            );
            const light = new THREE.PointLight(color, type === 'smoke' ? 2 : 5, 5);
            g.add(light);
            g.position.set(x, y, z);
            scene.add(g);
            grenades.push({ mesh: g, velocity, timer: 3.0, type });
        };

        const createSmokeCloud = (pos: THREE.Vector3) => {
            const group = new THREE.Group();
            for (let i = 0; i < 15; i++) {
                const cloud = new THREE.Mesh(
                    new THREE.SphereGeometry(1.5, 8, 8),
                    new THREE.MeshLambertMaterial({ color: 0xeeeeee, transparent: true, opacity: 0.6 })
                );
                cloud.position.set(
                    (Math.random() - 0.5) * 5,
                    0.5 + Math.random() * 3,
                    (Math.random() - 0.5) * 5
                );
                cloud.scale.setScalar(1 + Math.random() * 2);
                group.add(cloud);
            }
            group.position.copy(pos);
            scene.add(group);
            setTimeout(() => {
                // Fade out effect
                let op = 0.6;
                const interval = setInterval(() => {
                    op -= 0.05;
                    group.children.forEach(c => {
                        if ((c as any).material) (c as any).material.opacity = op;
                    });
                    if (op <= 0) {
                        clearInterval(interval);
                        scene.remove(group);
                    }
                }, 200);
            }, 8000); // Persist for 8s
        };

        const createBulletTracer = (start: THREE.Vector3, end: THREE.Vector3) => {
            const points = [start, end];
            const geo = new THREE.BufferGeometry().setFromPoints(points);
            const mat = new THREE.LineBasicMaterial({ color: 0xffff00, transparent: true, opacity: 1.0, linewidth: 2 });
            const line = new THREE.Line(geo, mat);
            scene.add(line);
            tracers.push({ mesh: line, timer: 8 }); // Dura mais tempo para visibilidade
        };

        // --- CIDADE E RUAS ---
        const STREET_WIDTH = 14;
        const BLOCK_SIZE = 60;
        const streetMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
        const sidewalkMat = new THREE.MeshLambertMaterial({ color: 0x999999 });

        // Gerar Ruas e Calçadas (Grid)
        for (let x = -4; x <= 4; x++) {
            const posX = x * BLOCK_SIZE;
            // Rua Vertical
            const vStreet = new THREE.Mesh(new THREE.PlaneGeometry(STREET_WIDTH, MAP_SIZE * 4), streetMat);
            vStreet.rotation.x = -Math.PI / 2;
            vStreet.position.set(posX, 0.05, 0);
            vStreet.receiveShadow = true;
            scene.add(vStreet);

            // Calçadas para a rua vertical
            const vSidewalkL = new THREE.Mesh(new THREE.PlaneGeometry(2, MAP_SIZE * 4), sidewalkMat);
            vSidewalkL.rotation.x = -Math.PI / 2;
            vSidewalkL.position.set(posX - STREET_WIDTH / 2 - 1, 0.06, 0);
            scene.add(vSidewalkL);

            const vSidewalkR = new THREE.Mesh(new THREE.PlaneGeometry(2, MAP_SIZE * 4), sidewalkMat);
            vSidewalkR.rotation.x = -Math.PI / 2;
            vSidewalkR.position.set(posX + STREET_WIDTH / 2 + 1, 0.06, 0);
            scene.add(vSidewalkR);
        }

        for (let z = -4; z <= 4; z++) {
            const posZ = z * BLOCK_SIZE;
            // Rua Horizontal
            const hStreet = new THREE.Mesh(new THREE.PlaneGeometry(MAP_SIZE * 4, STREET_WIDTH), streetMat);
            hStreet.rotation.x = -Math.PI / 2;
            hStreet.position.set(0, 0.05, posZ);
            hStreet.receiveShadow = true;
            scene.add(hStreet);

            // Calçadas para a rua horizontal
            const hSidewalkT = new THREE.Mesh(new THREE.PlaneGeometry(MAP_SIZE * 4, 2), sidewalkMat);
            hSidewalkT.rotation.x = -Math.PI / 2;
            hSidewalkT.position.set(0, 0.06, posZ - STREET_WIDTH / 2 - 1);
            scene.add(hSidewalkT);

            const hSidewalkB = new THREE.Mesh(new THREE.PlaneGeometry(MAP_SIZE * 4, 2), sidewalkMat);
            hSidewalkB.rotation.x = -Math.PI / 2;
            hSidewalkB.position.set(0, 0.06, posZ + STREET_WIDTH / 2 + 1);
            scene.add(hSidewalkB);
        }

        // --- POPULANDO QUADRANTES (CASAS E ÁRVORES REDUZIDAS) ---
        for (let x = -4; x < 4; x++) {
            for (let z = -4; z < 4; z++) {
                const centerX = x * BLOCK_SIZE + BLOCK_SIZE / 2;
                const centerZ = z * BLOCK_SIZE + BLOCK_SIZE / 2;

                // Casa principal no quadrante
                if (Math.random() > 0.3) { // MENOS CASAS (antes 0.2)
                    const houseX = centerX + (Math.random() - 0.5) * 10;
                    const houseZ = centerZ + (Math.random() - 0.5) * 10;
                    createHouse(houseX, houseZ, Math.random() > 0.8 ? 2 : 1); // MENOS CASAS DE 2 ANDARES
                }

                // Árvores REDUZIDAS (antes 3, agora 1)
                if (Math.random() > 0.6) { // MUITO MENOS ÁRVORES
                    const treeX = centerX + (Math.random() - 0.5) * 30;
                    const treeZ = centerZ + (Math.random() - 0.5) * 30;
                    if (Math.abs(treeX % BLOCK_SIZE) > STREET_WIDTH && Math.abs(treeZ % BLOCK_SIZE) > STREET_WIDTH) {
                        createTree(treeX, treeZ);
                    }
                }

                // Medkits nas Esquinas (Corners)
                if (Math.random() > 0.5) { // 50% de chance de ter medkit numa esquina
                    const cornerX = x * BLOCK_SIZE + STREET_WIDTH / 2 + 2;
                    const cornerZ = z * BLOCK_SIZE + STREET_WIDTH / 2 + 2;
                    createMedkit(cornerX, cornerZ);
                }
            }
        }

        // --- PERSONAGENS ---
        const createHumanoid = (color: number, isPlayer = false) => {
            const g = new THREE.Group();

            // Torso
            const body = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.0, 0.5), new THREE.MeshStandardMaterial({ color, metalness: 0.3 }));
            body.position.y = 1.3; body.castShadow = true;

            // Cabeça
            const head = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), new THREE.MeshStandardMaterial({ color: 0xffdbac }));
            head.position.y = 0.85; body.add(head); head.castShadow = true;

            // Braços
            const armL = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.9, 0.3), new THREE.MeshStandardMaterial({ color }));
            armL.position.set(-0.6, 0.05, 0); body.add(armL);
            const armR = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.9, 0.3), new THREE.MeshStandardMaterial({ color }));
            armR.position.set(0.6, 0.05, 0); body.add(armR);

            // Pernas (Darks)
            const legMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
            const legL = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.0, 0.35), legMat);
            legL.position.set(-0.22, -0.5, 0); body.add(legL);
            const legR = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.0, 0.35), legMat);
            legR.position.set(0.22, -0.5, 0); body.add(legR);

            // Arma
            const gun = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.3, 1.1), new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.9 }));
            gun.position.set(0.3, 0.2, 0.6); body.add(gun);

            const flash = new THREE.PointLight(0xffaa00, 0, 8);
            flash.position.set(0, 0, 0.8); gun.add(flash);

            g.add(body);

            const hb = new THREE.Mesh(new THREE.BoxGeometry(2, 4, 2), new THREE.MeshBasicMaterial({ visible: false }));
            hb.position.y = 2; g.add(hb);

            // Health Bar 3D Visual
            const hpBg = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.15), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.5 }));
            const hpBar = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.15), new THREE.MeshBasicMaterial({ color: 0x27ae60 }));
            const hpGroup = new THREE.Group();
            hpGroup.add(hpBg, hpBar);
            hpGroup.position.set(0, 4.5, 0); // Altura acima da cabeça
            g.add(hpGroup);

            g.userData = {
                hp: 100, isPlayer, flash, hb,
                hpBar, // Referência para escala
                fireTimer: Math.random() * 2,
                limbs: { body, head, armL, armR, legL, legR }
            };
            return g;
        };

        const player = createHumanoid(0xffc107, true);
        // Spawn em posição aleatória
        player.position.set(
            (Math.random() - 0.5) * MAP_SIZE * 0.8,
            2,
            (Math.random() - 0.5) * MAP_SIZE * 0.8
        );
        scene.add(player);

        // Spawn de Bots DENTRO das casas e LONGE do player
        const botCount = Math.min(settings.botCount, housePositions.length);
        const shuffledHouses = housePositions.sort(() => 0.5 - Math.random());

        let botsSpawned = 0;
        for (let i = 0; i < shuffledHouses.length && botsSpawned < botCount; i++) {
            const house = shuffledHouses[i];

            // Verifica distância para não spawnar na cara do player
            const distToPlayer = Math.sqrt(
                Math.pow(house.x - player.position.x, 2) +
                Math.pow(house.z - player.position.z, 2)
            );

            if (distToPlayer > 80) { // Somente se estiver a mais de 80 unidades
                const bot = createHumanoid(Math.random() * 0xffffff);
                bot.position.set(house.x, 2, house.z);
                enemies.push(bot); scene.add(bot);
                botsSpawned++;
            }
        }
        onUpdateStats({ alive: enemies.length + 1 });

        const zone = new THREE.Mesh(
            new THREE.CylinderGeometry(MAP_SIZE, MAP_SIZE, 300, 64, 1, true),
            new THREE.MeshBasicMaterial({ color: 0x00e5ff, opacity: 0.15, transparent: true, side: THREE.DoubleSide })
        );
        zone.position.y = 150; scene.add(zone);

        // --- GAME LOOP OTIMIZADO ---
        let frameId: number;
        const ray = new THREE.Raycaster();
        let flashScreen: HTMLElement | null = null;
        let lastTime = performance.now();

        // Object Pooling para evitar GC (Garbage Collection)
        const v1 = new THREE.Vector3();
        const v2 = new THREE.Vector3();
        const v3 = new THREE.Vector3();
        const v4 = new THREE.Vector3();
        const v5 = new THREE.Vector3();
        const q1 = new THREE.Quaternion();

        // Helper para suavização estável (Exp Decay)
        const expSmooth = (current: number, target: number, speed: number, dt: number) => {
            return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-speed * dt));
        };
        const expSmoothVec = (current: THREE.Vector3, target: THREE.Vector3, speed: number, dt: number) => {
            current.lerp(target, 1 - Math.exp(-speed * dt));
        };

        const animate = () => {
            if (gameState === GameState.GAMEOVER) return;

            // FPS FIX: Use real delta time instead of fixed 0.016
            const now = performance.now();
            const dt = Math.min((now - lastTime) / 1000, 0.1); // Cap at 0.1 to prevent huge jumps
            lastTime = now;

            const core = internalRef.current;
            const input = inputRef.current;
            core.gameTime += dt;

            if (gameState === GameState.PLAYING) {
                const frameScale = dt * 60;

                // 1. Rotação Suave do Jogador (Look Direction)
                core.currentYaw = expSmooth(core.currentYaw || 0, input.yaw || 0, 15, dt);

                // 2. Movimentação com Momentum (Inércia)
                let targetSpeed = (input.isSprinting ? 1.2 : 0.7);
                v1.set(input.x, 0, input.y); // moveInput
                const isMoving = v1.lengthSq() > 0;

                v2.set(0, 0, 0); // targetVel
                if (isMoving) {
                    v1.applyAxisAngle(v3.set(0, 1, 0), input.yaw || 0).normalize();
                    v2.copy(v1).multiplyScalar(targetSpeed);
                }

                expSmoothVec(core.vel, v2, isMoving ? 10 : 15, dt);

                if (core.vel.lengthSq() > 0.0001) {
                    v1.copy(player.position).add(v3.set(0, 0.5, 0)); // rayOrigin
                    v4.copy(core.vel).normalize(); // rayDir
                    ray.set(v1, v4);
                    const collisions = ray.intersectObjects(obstacles, true);
                    if (collisions.length === 0 || collisions[0].distance > 1.8) {
                        player.position.addScaledVector(core.vel, frameScale);
                    }
                    // Rotação do modelo suave em direção ao movimento
                    const targetRotY = Math.atan2(core.vel.x, core.vel.z);
                    player.rotation.y = expSmooth(player.rotation.y, targetRotY, 12, dt);

                    // Animação e Head Bob
                    const bob = Math.sin(core.gameTime * 12) * 0.15;
                    const walkCycle = Math.sin(core.gameTime * 12);
                    player.userData.limbs.legL.rotation.x = walkCycle * 0.6;
                    player.userData.limbs.legR.rotation.x = -walkCycle * 0.6;
                    player.userData.limbs.armL.rotation.x = -walkCycle * 0.4;
                    player.userData.limbs.armR.rotation.x = walkCycle * 0.4;

                    // Aplicar head bob no tronco
                    player.userData.limbs.body.position.y = 1.3 + bob;
                } else {
                    player.userData.limbs.legL.rotation.x = 0;
                    player.userData.limbs.legR.rotation.x = 0;
                    player.userData.limbs.armL.rotation.x = 0;
                    player.userData.limbs.armR.rotation.x = 0;
                    player.userData.limbs.body.position.y = expSmooth(player.userData.limbs.body.position.y, 1.3, 8, dt);
                }

                // Cálculo de Colisão de Terreno ANTES do pulo
                v1.copy(player.position).add(v3.set(0, 2, 0));
                ray.set(v1, v4.set(0, -1, 0));
                const floorHits = ray.intersectObjects([...roofs, ground], true);
                const surfaceY = floorHits.length > 0 ? floorHits[0].point.y : 0;

                // Pulo (Aplicação do Impulso ANTES da Gravidade)
                if (input.jump && player.position.y <= surfaceY + 0.1) {
                    core.verticalVelocity = 0.6;
                    input.jump = false;
                }

                // Gravidade (Time-Stable)
                core.verticalVelocity -= 0.024 * frameScale;
                player.position.y += core.verticalVelocity * frameScale;

                if (player.position.y < surfaceY) { player.position.y = surfaceY; core.verticalVelocity = 0; }

                // Camera (Terceira Pessoa Dinâmica + Suavidade Estilo Free Fire)
                const yaw = core.currentYaw || input.yaw || 0;
                // Clamp do pitch mais rigoroso para não ver embaixo do mapa
                const pitch = Math.max(-0.8, Math.min(0.6, input.pitch || -0.2));
                const targetDist = input.isADS ? 4.0 : 8.5;

                // FOV Kick Suave (ADS tem prioridade)
                const targetFov = input.isADS ? 40 : (input.isSprinting ? settings.fov + 12 : settings.fov);
                core.smoothFov = expSmooth(core.smoothFov || settings.fov, targetFov, 8, dt);
                camera.fov = core.smoothFov;
                camera.updateProjectionMatrix();

                v2.copy(player.position).add(v3.set(0, 3, 0)); // playerCenter

                // Cálculo de Posição com Offset de Ombro (Reduzido em ADS para centralizar)
                const camSideOffset = input.isADS ? 0.8 : 2.0;
                v4.set(Math.cos(yaw), 0, -Math.sin(yaw)); // rightDir

                v1.set( // targetCamPos
                    v2.x + Math.sin(yaw) * Math.cos(pitch) * targetDist,
                    v2.y + Math.sin(pitch) * targetDist,
                    v2.z + Math.cos(yaw) * Math.cos(pitch) * targetDist
                ).addScaledVector(v4, camSideOffset);

                // Shake (se houver)
                if (core.shake > 0) {
                    v1.x += (Math.random() - 0.5) * core.shake;
                    v1.y += (Math.random() - 0.5) * core.shake;
                    core.shake *= 0.8;
                    if (core.shake < 0.01) core.shake = 0;
                }

                camera.position.lerp(v1, 1 - Math.exp(-15 * dt));

                // Olhar para frente do ombro para manter crosshair centralizado
                v5.copy(v2).addScaledVector(v4, camSideOffset);
                camera.lookAt(v5);

                // Lançar Granada
                if (input.grenade) {
                    input.grenade = false;
                    const gType = input.grenadeType || 'explosive';
                    v1.set(0, 0, -1).applyQuaternion(camera.quaternion); // dir
                    createGrenade(player.position.x, player.position.y + 1.5, player.position.z, v1.multiplyScalar(0.8), gType);
                }

                // Tiro
                if (input.firing && core.fireCooldown <= 0) {
                    core.fireCooldown = 10;
                    core.shake = 0.2; // Recuo visual suave
                    player.userData.flash.intensity = 10;
                    setTimeout(() => { if (player.userData.flash) player.userData.flash.intensity = 0; }, 50);

                    ray.setFromCamera(new THREE.Vector2(0, 0), camera);

                    // Visual Tracer
                    const startPos = player.position.clone().add(new THREE.Vector3(0, 1.5, 0));
                    let endPos = startPos.clone().add(ray.ray.direction.clone().multiplyScalar(200));

                    // Colisão com Bots E Obstáculos (casas, muros)
                    const shots = ray.intersectObjects([...enemies.map(e => e.userData.hb), ...obstacles], true);

                    if (shots.length > 0) {
                        const firstHit = shots[0];
                        endPos = firstHit.point;

                        // Verifica se o que foi atingido foi um Bot (hb = hitbox)
                        const hitBotIdx = enemies.findIndex(e => e.userData.hb === firstHit.object);

                        if (hitBotIdx !== -1) {
                            // Trigger Hitmarker UI
                            const hm = document.getElementById('hit-marker');
                            if (hm) {
                                hm.style.opacity = '1';
                                setTimeout(() => { if (hm) hm.style.opacity = '0'; }, 80);
                            }

                            const hit = enemies[hitBotIdx];
                            hit.userData.hp -= 35;

                            // Update Health Bar Visual
                            if (hit.userData.hpBar) {
                                const hpScale = Math.max(0, hit.userData.hp / 100);
                                hit.userData.hpBar.scale.x = hpScale;
                                hit.userData.hpBar.position.x = (hpScale - 1) * 0.6;
                            }

                            if (hit.userData.hp <= 0) {
                                scene.remove(hit);
                                enemies.splice(hitBotIdx, 1);
                                core.kills++;
                                onUpdateStats({ kills: core.kills, alive: enemies.length + 1 });
                                if (enemies.length === 0) onGameOver(true);
                            }
                        }
                    }
                    createBulletTracer(startPos, endPos);
                }
                if (core.fireCooldown > 0) core.fireCooldown--;

                // Update Tracers
                for (let i = tracers.length - 1; i >= 0; i--) {
                    tracers[i].timer--;
                    if (tracers[i].timer <= 0) {
                        scene.remove(tracers[i].mesh);
                        tracers.splice(i, 1);
                    }
                }

                // Itens de Cura
                for (let i = medkits.length - 1; i >= 0; i--) {
                    const m = medkits[i]; m.rotation.y += 0.08 * frameScale;
                    if (m.position.distanceToSquared(player.position) < 9) { // 3^2 = 9
                        core.health = Math.min(100, core.health + 40);
                        onUpdateStats({ health: core.health });
                        scene.remove(m); medkits.splice(i, 1);
                    }
                }

                // Granadas
                for (let i = grenades.length - 1; i >= 0; i--) {
                    const g = grenades[i]; g.timer -= dt;
                    g.velocity.y -= 0.02 * frameScale; // Gravidade
                    g.mesh.position.addScaledVector(g.velocity, frameScale);

                    // Colisão Simples com Chão
                    if (g.mesh.position.y < 0.3) {
                        g.mesh.position.y = 0.3;
                        g.velocity.y *= -0.5; // Bounce
                        g.velocity.x *= 0.8; g.velocity.z *= 0.8; // Fricção
                    }

                    if (g.timer <= 0) {
                        // Explosão!
                        v1.copy(g.mesh.position); // explosionPos

                        if (g.type === 'smoke') {
                            createSmokeCloud(v1);
                        } else {
                            // Shake baseado na distância
                            const distToExplosionSq = player.position.distanceToSquared(v1);
                            if (distToExplosionSq < 1600) { // 40^2 = 1600
                                const distToExplosion = Math.sqrt(distToExplosionSq);
                                core.shake = Math.max(core.shake, 5.0 * (1.0 - distToExplosion / 40));

                                // Dano no Jogador
                                if (distToExplosionSq < 225) { // 15m
                                    core.health -= 50 * (1.0 - distToExplosion / 15);
                                    onUpdateStats({ health: core.health });
                                    if (core.health <= 0) onGameOver(false);
                                }
                            }

                            const flash = new THREE.PointLight(0xffaa00, 20, 15);
                            flash.position.copy(v1); scene.add(flash);
                            setTimeout(() => scene.remove(flash), 100);

                            // Dano em robôs (Iteração reversa para remoção segura)
                            for (let b = enemies.length - 1; b >= 0; b--) {
                                const bot = enemies[b];
                                const distBotSq = bot.position.distanceToSquared(v1);
                                if (distBotSq < 225) { // 15m
                                    const dmg = 100 * (1.0 - Math.sqrt(distBotSq) / 15);
                                    bot.userData.hp -= dmg;

                                    // Update Health Bar Visual
                                    if (bot.userData.hpBar) {
                                        const hpScale = Math.max(0, bot.userData.hp / 100);
                                        bot.userData.hpBar.scale.x = hpScale;
                                        bot.userData.hpBar.position.x = (hpScale - 1) * 0.6;
                                    }

                                    if (bot.userData.hp <= 0) {
                                        scene.remove(bot);
                                        enemies.splice(b, 1);
                                        core.kills++;
                                        onUpdateStats({ kills: core.kills, alive: enemies.length + 1 });
                                        if (enemies.length === 0) onGameOver(true);
                                    }
                                }
                            }
                        }

                        scene.remove(g.mesh); grenades.splice(i, 1);
                    }
                }

                // Bot AI Loop (Iteração reversa segura)
                for (let i = enemies.length - 1; i >= 0; i--) {
                    const bot = enemies[i];
                    if (!bot || !bot.position) continue;

                    const ud = bot.userData;
                    const dSq = bot.position.distanceToSquared(player.position);
                    if (!ud.limbs) continue;

                    // Lógica de "Acampamento" vs "Fuga do Gás"
                    const distFromCenterSq = bot.position.x * bot.position.x + bot.position.z * bot.position.z;
                    const isOutsideSafeZone = distFromCenterSq > (core.zoneRadius * core.zoneRadius);
                    const isPlayerNear = dSq < 1600; // 40^2 = 1600

                    ud.isCamping = ud.isCamping !== undefined ? ud.isCamping : true;

                    // FASES DA IA: Furtiva (zoneTimer > 0) vs Agressiva (zoneTimer <= 0)
                    const isStealthPhase = core.zoneTimer > 0;
                    const detectionRangeSq = isStealthPhase ? 225 : 1600; // 15m se parado, 40m se ativo

                    if (isOutsideSafeZone) {
                        // FUGA DO GÁS: Prioridade máxima, corre para o centro (0,0,0)
                        ud.isCamping = false;
                        bot.lookAt(0, bot.position.y, 0);
                        bot.translateZ(0.95 * frameScale); // Corre mais rápido pra fugir do gás
                    } else if (ud.isCamping && (!isPlayerNear || dSq > detectionRangeSq)) {
                        // MODO FURTIVO: Fica parado na casa até o tempo acabar ou player chegar MUITO perto
                        if (isStealthPhase) {
                            bot.userData.limbs.legL.rotation.x = 0;
                            bot.userData.limbs.legR.rotation.x = 0;
                            continue; // Mantém a emboscada
                        }
                        // Se o tempo da zona acabou, ele para de acampar automaticamente
                        if (!isStealthPhase) ud.isCamping = false;
                    } else {
                        // MODO COMBATE: Alvejando ou Perseguindo o Jogador
                        ud.isCamping = false;
                        bot.lookAt(player.position.x, bot.position.y, player.position.z);

                        if (dSq < (BOT_VISION * BOT_VISION)) {
                            if (dSq > 625) { // 25^2 = 625
                                bot.translateZ(0.65 * frameScale);
                            }
                            const walkCycle = Math.sin(core.gameTime * 10 + i);
                            bot.userData.limbs.legL.rotation.x = walkCycle * 0.5;
                            bot.userData.limbs.legR.rotation.x = -walkCycle * 0.5;
                        } else {
                            bot.userData.limbs.legL.rotation.x = 0;
                            bot.userData.limbs.legR.rotation.x = 0;
                        }

                        ud.fireTimer += dt;
                        const fireRate = settings.difficulty === 'hard' ? 1.0 : 1.6;

                        if (ud.fireTimer >= fireRate) {
                            ud.fireTimer = 0;

                            // Robust Multi-point LoS Check to prevent shooting through cover
                            const targetOffsets = [
                                v3.set(0, 1.7, 0), // Head
                                v3.set(0, 1.0, 0), // Chest
                                v3.set(0, 0.3, 0)  // Legs
                            ];

                            let canSeePlayer = false;
                            const distToPlayer = bot.position.distanceTo(player.position);

                            for (const offset of targetOffsets) {
                                v1.copy(bot.position).add(v3.set(0, 1.5, 0)); // Bot eye level
                                v2.copy(player.position).add(offset); // Player target point
                                v4.copy(v2).sub(v1).normalize();

                                ray.set(v1, v4);
                                const blockers = ray.intersectObjects([...obstacles, ground], true);

                                if (blockers.length === 0 || blockers[0].distance > distToPlayer - 1.0) {
                                    canSeePlayer = true;
                                    break; // If any part is visible, the bot can shoot
                                }
                            }

                            if (canSeePlayer) {
                                ud.flash.intensity = 8;
                                setTimeout(() => { if (ud.flash) ud.flash.intensity = 0; }, 50);

                                // Random Accuracy (Nerf)
                                const accuracy = settings.difficulty === 'hard' ? 0.9 : 0.7;
                                if (Math.random() < accuracy) {
                                    const damage = settings.difficulty === 'hard' ? 3 : 2;
                                    core.health -= damage;
                                    onUpdateStats({ health: core.health });

                                    if (!flashScreen) flashScreen = document.getElementById('damage-flash');
                                    if (flashScreen) {
                                        flashScreen.style.opacity = '1';
                                        setTimeout(() => { if (flashScreen) flashScreen.style.opacity = '0'; }, 100);
                                    }
                                    if (core.health <= 0) onGameOver(false);
                                }
                            }
                        }
                    }

                    // Billboarding Barra de Vida - DENTRO DO LOOP
                    if (bot.children[2]) {
                        bot.children[2].lookAt(camera.position);
                    }
                }

                // Mecânica de Zona Segura
                if (core.zoneTimer > 0) {
                    core.zoneTimer -= dt;
                    onUpdateStats({ zoneTimer: Math.ceil(core.zoneTimer) });
                } else {
                    // Raio mínimo aumentado de 20 para 80 para ser mais jogável
                    if (core.zoneRadius > 80) core.zoneRadius -= 0.1 * frameScale;
                    zone.scale.set(core.zoneRadius / MAP_SIZE, 1, core.zoneRadius / MAP_SIZE);
                    if (player.position.distanceTo(new THREE.Vector3(0, 0, 0)) > core.zoneRadius) {
                        // Dano reduzido de 0.5 para 0.2 por frame para ser mais tolerável
                        core.health -= 0.2; onUpdateStats({ health: core.health });
                        if (core.health <= 0) onGameOver(false);
                    }
                }
            }

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // --- CONTROLES DE PC (TECLADO/MOUSE) ---
        const handleKeyDown = (e: KeyboardEvent) => {
            const code = e.code;
            if (code === 'KeyW' || code === 'ArrowUp') inputRef.current.y = -1;
            if (code === 'KeyS' || code === 'ArrowDown') inputRef.current.y = 1;
            if (code === 'KeyA' || code === 'ArrowLeft') inputRef.current.x = -1;
            if (code === 'KeyD' || code === 'ArrowRight') inputRef.current.x = 1;
            if (code === 'ShiftLeft') inputRef.current.isSprinting = true;
            if (code === 'Space') { inputRef.current.jump = true; }
            if (code === 'KeyG') { inputRef.current.grenade = true; }
            if (code === 'KeyF') { /* Interagir - pode adicionar lógica aqui */ }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            const code = e.code;
            if ((code === 'KeyW' || code === 'ArrowUp') && inputRef.current.y === -1) inputRef.current.y = 0;
            if ((code === 'KeyS' || code === 'ArrowDown') && inputRef.current.y === 1) inputRef.current.y = 0;
            if ((code === 'KeyA' || code === 'ArrowLeft') && inputRef.current.x === -1) inputRef.current.x = 0;
            if ((code === 'KeyD' || code === 'ArrowRight') && inputRef.current.x === 1) inputRef.current.x = 0;
            if (code === 'ShiftLeft') inputRef.current.isSprinting = false;
        };

        const handleMouseDown = () => {
            inputRef.current.firing = true;
            if (document.body.requestPointerLock) {
                const p = document.body.requestPointerLock() as any;
                if (p && p.catch) p.catch(() => { });
            }
        };

        const handleMouseUp = () => {
            inputRef.current.firing = false;
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (document.pointerLockElement === document.body) {
                inputRef.current.yaw = (inputRef.current.yaw || 0) - e.movementX * 0.002 * settings.sens;
                // Eixo invertido corrigido (+ em vez de -)
                const newPitch = (inputRef.current.pitch || 0) + e.movementY * 0.002 * settings.sens;
                inputRef.current.pitch = Math.max(-1.5, Math.min(1.5, newPitch));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
            if (document.pointerLockElement) document.exitPointerLock();

            cancelAnimationFrame(frameId);
            renderer.dispose();
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            while (scene.children.length > 0) scene.remove(scene.children[0]);
        };
    }, [gameState]);

    return <div ref={containerRef} className="w-full h-full bg-black" />;
};

export default GameSceneBackup;
