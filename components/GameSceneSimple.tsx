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

const MAP_SIZE = 280;
const BOT_VISION = 120;

const GameSceneBackup: React.FC<Props> = ({ gameState, settings, onUpdateStats, onGameOver, inputRef }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const internalRef = useRef<any>({
        health: 100, kills: 0, alive: 0,
        zoneRadius: MAP_SIZE, zoneTimer: 60,
        verticalVelocity: 0, fireCooldown: 0, nadeCooldown: 0,
        gameTime: 0
    });

    useEffect(() => {
        if (!containerRef.current) return;

        // --- RENDERER & SCENE ---
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x87CEEB);
        scene.fog = new THREE.FogExp2(0x87CEEB, 0.0015);

        const camera = new THREE.PerspectiveCamera(settings.fov, window.innerWidth / window.innerHeight, 0.1, 5000);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            powerPreference: "high-performance",
            alpha: false
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        containerRef.current.appendChild(renderer.domElement);

        // --- ILUMINAÇÃO ---
        const ambient = new THREE.HemisphereLight(0x87CEEB, 0x3d6e3d, 0.8);
        scene.add(ambient);

        const sun = new THREE.DirectionalLight(0xffffff, 2.0);
        sun.position.set(250, 450, 150);
        sun.castShadow = true;
        sun.shadow.mapSize.set(2048, 2048);
        sun.shadow.camera.left = -MAP_SIZE;
        sun.shadow.camera.right = MAP_SIZE;
        sun.shadow.camera.top = MAP_SIZE;
        sun.shadow.camera.bottom = -MAP_SIZE;
        sun.shadow.bias = -0.0001;
        scene.add(sun);

        // --- MUNDO E OBJETOS ---
        const obstacles: THREE.Object3D[] = [];
        const roofs: THREE.Object3D[] = [];
        const enemies: THREE.Group[] = [];
        const medkits: THREE.Group[] = [];

        // Chão
        const groundGeo = new THREE.PlaneGeometry(MAP_SIZE * 15, MAP_SIZE * 15);
        const groundMat = new THREE.MeshStandardMaterial({
            color: 0x446e3d,
            roughness: 0.8,
            metalness: 0.1
        });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        scene.add(ground);

        // Árvores
        const createTree = (x: number, z: number) => {
            const tree = new THREE.Group();
            const trunk = new THREE.Mesh(
                new THREE.CylinderGeometry(0.5, 0.8, 5, 6),
                new THREE.MeshStandardMaterial({ color: 0x4e342e })
            );
            trunk.position.y = 2.5;
            const leaves = new THREE.Mesh(
                new THREE.DodecahedronGeometry(3.5, 0),
                new THREE.MeshStandardMaterial({ color: 0x2e7d32 })
            );
            leaves.position.y = 6;
            tree.add(trunk, leaves);
            tree.position.set(x, 0, z);
            tree.castShadow = true;
            tree.receiveShadow = true;
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
        };

        const createMedkit = (x: number, z: number) => {
            const kit = new THREE.Group();
            const box = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.7, 0.5), new THREE.MeshStandardMaterial({ color: 0xffffff }));
            const cross = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.5, 0.52), new THREE.MeshBasicMaterial({ color: 0x4caf50 }));
            kit.add(box, cross); kit.position.set(x, 0.6, z);
            scene.add(kit); medkits.push(kit);
        };

        // Populando Mapa
        for (let i = 0; i < 45; i++) {
            const rx = (Math.random() - 0.5) * MAP_SIZE * 1.8;
            const rz = (Math.random() - 0.5) * MAP_SIZE * 1.8;
            createHouse(rx, rz, Math.random() > 0.8 ? 2 : 1);
        }
        for (let i = 0; i < 60; i++) {
            createTree((Math.random() - 0.5) * MAP_SIZE * 2.2, (Math.random() - 0.5) * MAP_SIZE * 2.2);
        }
        for (let i = 0; i < 25; i++) {
            createMedkit((Math.random() - 0.5) * MAP_SIZE * 1.6, (Math.random() - 0.5) * MAP_SIZE * 1.6);
        }

        // --- PERSONAGENS ---
        const createHumanoid = (color: number, isPlayer = false) => {
            const g = new THREE.Group();
            const body = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.4, 0.5), new THREE.MeshStandardMaterial({ color, metalness: 0.3 }));
            body.position.y = 1.2; body.castShadow = true;
            const head = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), new THREE.MeshStandardMaterial({ color: 0xffdbac }));
            head.position.y = 2.2; head.castShadow = true;
            const gun = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.3, 1.1), new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.9 }));
            gun.position.set(0.6, 1.5, 0.5);
            const flash = new THREE.PointLight(0xffaa00, 0, 8);
            flash.position.set(0, 0, 0.8); gun.add(flash);
            g.add(body, head, gun);
            const hb = new THREE.Mesh(new THREE.BoxGeometry(2, 4, 2), new THREE.MeshBasicMaterial({ visible: false }));
            hb.position.y = 2; g.add(hb);
            g.userData = { hp: 100, isPlayer, flash, hb };
            return g;
        };

        const player = createHumanoid(0xffc107, true);
        player.position.y = 2; // Posição inicial acima do chão
        scene.add(player);

        for (let i = 0; i < settings.botCount; i++) {
            const bot = createHumanoid(Math.random() * 0xffffff);
            bot.position.set((Math.random() - 0.5) * MAP_SIZE, 0, (Math.random() - 0.5) * MAP_SIZE);
            enemies.push(bot); scene.add(bot);
        }
        onUpdateStats({ alive: enemies.length + 1 });

        const zone = new THREE.Mesh(
            new THREE.CylinderGeometry(MAP_SIZE, MAP_SIZE, 300, 64, 1, true),
            new THREE.MeshBasicMaterial({ color: 0x00e5ff, opacity: 0.15, transparent: true, side: THREE.DoubleSide })
        );
        zone.position.y = 150; scene.add(zone);

        // --- GAME LOOP ---
        let frameId: number;
        const ray = new THREE.Raycaster();
        const flashScreen = document.getElementById('damage-flash');

        const animate = () => {
            if (gameState === GameState.GAMEOVER) return;
            const dt = 0.016;
            const core = internalRef.current;
            const input = inputRef.current;
            core.gameTime += dt;

            if (gameState === GameState.PLAYING) {
                // Movimentação do Jogador
                let speed = input.isSprinting ? 0.48 : 0.26;
                if (input.x !== 0 || input.y !== 0) {
                    const moveDir = new THREE.Vector3(input.x, 0, input.y).applyAxisAngle(new THREE.Vector3(0, 1, 0), input.yaw || 0).normalize();
                    ray.set(player.position.clone().add(new THREE.Vector3(0, 0.5, 0)), moveDir);
                    const collisions = ray.intersectObjects(obstacles, true);
                    if (collisions.length === 0 || collisions[0].distance > 1.8) {
                        player.position.addScaledVector(moveDir, speed);
                    }
                    player.rotation.y = Math.atan2(moveDir.x, moveDir.z);
                }

                // Gravidade e Colisão de Terreno
                core.verticalVelocity -= 0.024;
                player.position.y += core.verticalVelocity;
                ray.set(player.position.clone().add(new THREE.Vector3(0, 2, 0)), new THREE.Vector3(0, -1, 0));
                const floorHits = ray.intersectObjects([...roofs, ground], true);
                const surfaceY = floorHits.length > 0 ? floorHits[0].point.y : 0;
                if (player.position.y < surfaceY) { player.position.y = surfaceY; core.verticalVelocity = 0; }

                // Camera (Terceira Pessoa Dinâmica)
                const yaw = input.yaw || 0;
                const pitch = Math.max(-1.1, Math.min(1.1, input.pitch || -0.2));
                const dist = input.isADS ? 3.5 : 9.5;
                const target = player.position.clone().add(new THREE.Vector3(0, 3, 0));
                camera.position.set(
                    target.x + Math.sin(yaw) * Math.cos(pitch) * dist,
                    target.y + Math.sin(pitch) * dist,
                    target.z + Math.cos(yaw) * Math.cos(pitch) * dist
                );
                camera.lookAt(target);

                // Tiro
                if (input.firing && core.fireCooldown <= 0) {
                    core.fireCooldown = 10;
                    player.userData.flash.intensity = 10;
                    setTimeout(() => { if (player.userData.flash) player.userData.flash.intensity = 0; }, 50);
                    ray.setFromCamera(new THREE.Vector2(0, 0), camera);
                    const shots = ray.intersectObjects(enemies.map(e => e.userData.hb), true);
                    if (shots.length > 0) {
                        const hit = enemies.find(e => e.userData.hb === shots[0].object);
                        if (hit) {
                            hit.userData.hp -= 35;
                            if (hit.userData.hp <= 0) {
                                scene.remove(hit); enemies.splice(enemies.indexOf(hit), 1);
                                core.kills++; onUpdateStats({ kills: core.kills, alive: enemies.length + 1 });
                                if (enemies.length === 0) onGameOver(true);
                            }
                        }
                    }
                }
                if (core.fireCooldown > 0) core.fireCooldown--;

                // Itens de Cura
                for (let i = medkits.length - 1; i >= 0; i--) {
                    const m = medkits[i]; m.rotation.y += 0.08;
                    if (m.position.distanceTo(player.position) < 3) {
                        core.health = Math.min(100, core.health + 40);
                        onUpdateStats({ health: core.health });
                        scene.remove(m); medkits.splice(i, 1);
                    }
                }

                // IA dos Bots
                enemies.forEach(bot => {
                    const ud = bot.userData; const d = bot.position.distanceTo(player.position);
                    bot.lookAt(player.position.x, bot.position.y, player.position.z);
                    if (d < BOT_VISION) {
                        if (d > 25) bot.translateZ(0.2);
                        if (Math.random() < 0.05) {
                            ud.flash.intensity = 6; setTimeout(() => ud.flash.intensity = 0, 50);
                            core.health -= (settings.difficulty === 'hard' ? 6 : 4);
                            onUpdateStats({ health: core.health });
                            if (flashScreen) { flashScreen.style.opacity = '1'; setTimeout(() => flashScreen.style.opacity = '0', 100); }
                            if (core.health <= 0) onGameOver(false);
                        }
                    }
                });

                // Mecânica de Zona Segura
                if (core.zoneTimer > 0) {
                    core.zoneTimer -= dt;
                    onUpdateStats({ zoneTimer: Math.ceil(core.zoneTimer) });
                } else {
                    if (core.zoneRadius > 20) core.zoneRadius -= 0.2;
                    zone.scale.set(core.zoneRadius / MAP_SIZE, 1, core.zoneRadius / MAP_SIZE);
                    if (player.position.distanceTo(new THREE.Vector3(0, 0, 0)) > core.zoneRadius) {
                        core.health -= 1.0; onUpdateStats({ health: core.health });
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

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameId);
            renderer.dispose();
            while (scene.children.length > 0) scene.remove(scene.children[0]);
        };
    }, [gameState]);

    return <div ref={containerRef} className="w-full h-full bg-black" />;
};

export default GameSceneBackup;
