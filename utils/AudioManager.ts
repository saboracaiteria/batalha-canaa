import * as THREE from 'three';

export enum SoundType {
    RIFLE_SHOT = 'rifle_shot',
    SHOTGUN_SHOT = 'shotgun_shot',
    SNIPER_SHOT = 'sniper_shot',
    PISTOL_SHOT = 'pistol_shot',
    SMG_SHOT = 'smg_shot',
    EXPLOSION = 'explosion',
    RELOAD = 'reload',
    FOOTSTEP = 'footstep',
    PICKUP = 'pickup',
    HEAL = 'heal',
    HIT_MARKER = 'hit_marker',
    ARMOR_BREAK = 'armor_break'
}

export class AudioManager {
    private listener: THREE.AudioListener;
    private sounds: Map<SoundType, THREE.Audio> = new Map();
    private audioLoader: THREE.AudioLoader;
    private volume: number = 0.5;

    // Audio context for synthetic sounds
    private audioContext: AudioContext;

    constructor(camera: THREE.Camera, volume: number = 0.5) {
        this.listener = new THREE.AudioListener();
        camera.add(this.listener);
        this.audioLoader = new THREE.AudioLoader();
        this.volume = volume;
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

        // Create synthetic sounds
        this.createSyntheticSounds();
    }

    private createSyntheticSounds() {
        // We'll use Web Audio API to create synthetic sounds
        // This way we don't need external audio files
    }

    setVolume(volume: number) {
        this.volume = Math.max(0, Math.min(1, volume));
        this.listener.setMasterVolume(this.volume);
    }

    // Play positional 3D sound
    playPositional(type: SoundType, position: THREE.Vector3, volume: number = 1.0) {
        this.playSyntheticSound(type, position, volume);
    }

    // Play non-positional sound
    play(type: SoundType, volume: number = 1.0) {
        this.playSyntheticSound(type, null, volume);
    }

    private playSyntheticSound(type: SoundType, position: THREE.Vector3 | null, volume: number) {
        const ctx = this.audioContext;
        const gainNode = ctx.createGain();
        gainNode.gain.value = volume * this.volume;

        let oscillator: OscillatorNode;
        let duration = 0.1;

        switch (type) {
            case SoundType.RIFLE_SHOT:
            case SoundType.SMG_SHOT:
                // Sharp, high-frequency crack
                oscillator = ctx.createOscillator();
                oscillator.frequency.setValueAtTime(800, ctx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05);
                duration = 0.08;
                break;

            case SoundType.SHOTGUN_SHOT:
                // Deep boom
                oscillator = ctx.createOscillator();
                oscillator.frequency.setValueAtTime(150, ctx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);
                duration = 0.15;
                break;

            case SoundType.SNIPER_SHOT:
                // Very sharp crack
                oscillator = ctx.createOscillator();
                oscillator.frequency.setValueAtTime(1200, ctx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.03);
                duration = 0.1;
                break;

            case SoundType.PISTOL_SHOT:
                // Medium crack
                oscillator = ctx.createOscillator();
                oscillator.frequency.setValueAtTime(600, ctx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.04);
                duration = 0.06;
                break;

            case SoundType.EXPLOSION:
                // Deep rumble
                oscillator = ctx.createOscillator();
                oscillator.frequency.setValueAtTime(100, ctx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.5);
                duration = 0.8;
                break;

            case SoundType.HIT_MARKER:
                // Satisfying ding
                oscillator = ctx.createOscillator();
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(1200, ctx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05);
                duration = 0.08;
                break;

            case SoundType.RELOAD:
                // Metallic click
                oscillator = ctx.createOscillator();
                oscillator.type = 'square';
                oscillator.frequency.setValueAtTime(400, ctx.currentTime);
                duration = 0.05;
                break;

            case SoundType.PICKUP:
                // Pleasant tone
                oscillator = ctx.createOscillator();
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(600, ctx.currentTime);
                oscillator.frequency.setValueAtTime(900, ctx.currentTime + 0.05);
                duration = 0.1;
                break;

            case SoundType.HEAL:
                // Soothing tone
                oscillator = ctx.createOscillator();
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(440, ctx.currentTime);
                oscillator.frequency.setValueAtTime(660, ctx.currentTime + 0.2);
                duration = 0.3;
                break;

            default:
                oscillator = ctx.createOscillator();
                oscillator.frequency.value = 440;
        }

        // Add some white noise for realism
        const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
        const noiseData = noiseBuffer.getChannelData(0);
        for (let i = 0; i < noiseBuffer.length; i++) {
            noiseData[i] = (Math.random() * 2 - 1) * 0.3;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;

        // Connect nodes
        oscillator.connect(gainNode);
        noise.connect(gainNode);
        gainNode.connect(ctx.destination);

        // Envelope
        gainNode.gain.setValueAtTime(volume * this.volume, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

        // Play
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + duration);
        noise.start(ctx.currentTime);
        noise.stop(ctx.currentTime + duration);
    }

    cleanup() {
        this.sounds.forEach(sound => {
            sound.stop();
            if (sound.buffer) sound.disconnect();
        });
        this.sounds.clear();
        if (this.audioContext.state !== 'closed') {
            this.audioContext.close();
        }
    }
}
