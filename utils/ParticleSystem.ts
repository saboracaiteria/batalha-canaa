import * as THREE from 'three';

export enum ParticleType {
    EXPLOSION,
    SMOKE,
    BULLET_IMPACT,
    MUZZLE_FLASH,
    SHELL_CASING,
    BLOOD,
    HEALING
}

interface ParticleConfig {
    count: number;
    lifetime: number;
    size: number;
    color: THREE.Color;
    velocity: THREE.Vector3;
    gravity: number;
    spread: number;
}

const PARTICLE_CONFIGS: Record<ParticleType, ParticleConfig> = {
    [ParticleType.EXPLOSION]: {
        count: 100,
        lifetime: 1.5,
        size: 1.2,
        color: new THREE.Color(0xff6600),
        velocity: new THREE.Vector3(0, 8, 0),
        gravity: -9.8,
        spread: 8
    },
    [ParticleType.SMOKE]: {
        count: 50,
        lifetime: 3.0,
        size: 2.5,
        color: new THREE.Color(0x888888),
        velocity: new THREE.Vector3(0, 2, 0),
        gravity: -0.5,
        spread: 3
    },
    [ParticleType.BULLET_IMPACT]: {
        count: 10,
        lifetime: 0.3,
        size: 0.3,
        color: new THREE.Color(0xffaa00),
        velocity: new THREE.Vector3(0, 2, 0),
        gravity: -9.8,
        spread: 2
    },
    [ParticleType.MUZZLE_FLASH]: {
        count: 8,
        lifetime: 0.1,
        size: 0.8,
        color: new THREE.Color(0xffff00),
        velocity: new THREE.Vector3(0, 0, 5),
        gravity: 0,
        spread: 1.5
    },
    [ParticleType.SHELL_CASING]: {
        count: 1,
        lifetime: 2.0,
        size: 0.2,
        color: new THREE.Color(0xccaa00),
        velocity: new THREE.Vector3(2, 3, -1),
        gravity: -9.8,
        spread: 1
    },
    [ParticleType.BLOOD]: {
        count: 20,
        lifetime: 0.8,
        size: 0.4,
        color: new THREE.Color(0x8b0000),
        velocity: new THREE.Vector3(0, 1, 0),
        gravity: -9.8,
        spread: 2
    },
    [ParticleType.HEALING]: {
        count: 30,
        lifetime: 1.5,
        size: 0.5,
        color: new THREE.Color(0x00ff88),
        velocity: new THREE.Vector3(0, 3, 0),
        gravity: -2,
        spread: 2
    }
};

export class ParticleEmitter {
    private particles: THREE.Points[] = [];
    private scene: THREE.Scene;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
    }

    emit(type: ParticleType, position: THREE.Vector3, direction?: THREE.Vector3) {
        const config = PARTICLE_CONFIGS[type];
        const geometry = new THREE.BufferGeometry();
        const positions: number[] = [];
        const velocities: number[] = [];
        const lifetimes: number[] = [];

        for (let i = 0; i < config.count; i++) {
            // Random position within spread
            const spreadX = (Math.random() - 0.5) * config.spread;
            const spreadY = (Math.random() - 0.5) * config.spread;
            const spreadZ = (Math.random() - 0.5) * config.spread;

            positions.push(
                position.x + spreadX,
                position.y + spreadY,
                position.z + spreadZ
            );

            // Random velocity
            const baseVel = direction || config.velocity;
            const velX = baseVel.x + (Math.random() - 0.5) * config.spread;
            const velY = baseVel.y + (Math.random() - 0.5) * config.spread;
            const velZ = baseVel.z + (Math.random() - 0.5) * config.spread;

            velocities.push(velX, velY, velZ);
            lifetimes.push(config.lifetime);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocities, 3));
        geometry.setAttribute('lifetime', new THREE.Float32BufferAttribute(lifetimes, 1));

        const material = new THREE.PointsMaterial({
            color: config.color,
            size: config.size,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const particleSystem = new THREE.Points(geometry, material);
        (particleSystem as any).userData = {
            type,
            age: 0,
            lifetime: config.lifetime,
            gravity: config.gravity
        };

        this.particles.push(particleSystem);
        this.scene.add(particleSystem);

        // Create shock wave for explosions
        if (type === ParticleType.EXPLOSION) {
            this.createShockWave(position);
        }
    }

    private createShockWave(position: THREE.Vector3) {
        const geometry = new THREE.RingGeometry(0.5, 1, 32);
        const material = new THREE.MeshBasicMaterial({
            color: 0xff8800,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(geometry, material);
        ring.position.copy(position);
        ring.rotation.x = -Math.PI / 2;
        (ring as any).userData = { isShockWave: true, age: 0, maxAge: 0.5 };
        this.scene.add(ring);
        this.particles.push(ring as any);
    }

    update(deltaTime: number) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            const userData = particle.userData;

            if (userData.isShockWave) {
                userData.age += deltaTime;
                const scale = 1 + userData.age * 20;
                particle.scale.set(scale, scale, scale);
                (particle as any).material.opacity = 1 - (userData.age / userData.maxAge);

                if (userData.age >= userData.maxAge) {
                    this.scene.remove(particle);
                    this.particles.splice(i, 1);
                }
                continue;
            }

            userData.age += deltaTime;

            if (userData.age >= userData.lifetime) {
                this.scene.remove(particle);
                this.particles.splice(i, 1);
                continue;
            }

            const positions = particle.geometry.attributes.position.array as Float32Array;
            const velocities = particle.geometry.attributes.velocity.array as Float32Array;

            for (let j = 0; j < positions.length; j += 3) {
                // Apply gravity
                velocities[j + 1] += userData.gravity * deltaTime;

                // Update position
                positions[j] += velocities[j] * deltaTime;
                positions[j + 1] += velocities[j + 1] * deltaTime;
                positions[j + 2] += velocities[j + 2] * deltaTime;
            }

            particle.geometry.attributes.position.needsUpdate = true;

            // Fade out
            const fadeProgress = userData.age / userData.lifetime;
            (particle.material as THREE.PointsMaterial).opacity = 1 - fadeProgress;
        }
    }

    clear() {
        this.particles.forEach(p => this.scene.remove(p));
        this.particles = [];
    }
}
