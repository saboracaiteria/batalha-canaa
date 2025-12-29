import { Weapon, WeaponType } from '../types';
export { WeaponType } from '../types';

export const WEAPON_CONFIGS: Record<WeaponType, Omit<Weapon, 'currentAmmo' | 'reserveAmmo'>> = {
    [WeaponType.RIFLE]: {
        type: WeaponType.RIFLE,
        name: 'M416 Assault Rifle',
        damage: 40,
        fireRate: 700,
        reloadTime: 2.5,
        magazineSize: 30,
        accuracy: 0.85,
        range: 200,
        headshotMultiplier: 2.0,
        recoil: 0.3
    },
    [WeaponType.SHOTGUN]: {
        type: WeaponType.SHOTGUN,
        name: 'S12K Shotgun',
        damage: 25,
        fireRate: 200,
        reloadTime: 3.0,
        magazineSize: 8,
        accuracy: 0.6,
        range: 50,
        headshotMultiplier: 1.5,
        recoil: 0.8
    },
    [WeaponType.SNIPER]: {
        type: WeaponType.SNIPER,
        name: 'AWM Sniper',
        damage: 105,
        fireRate: 60,
        reloadTime: 3.5,
        magazineSize: 5,
        accuracy: 0.98,
        range: 500,
        headshotMultiplier: 2.5,
        recoil: 1.2
    },
    [WeaponType.PISTOL]: {
        type: WeaponType.PISTOL,
        name: 'P1911 Pistol',
        damage: 30,
        fireRate: 300,
        reloadTime: 1.5,
        magazineSize: 12,
        accuracy: 0.75,
        range: 80,
        headshotMultiplier: 2.0,
        recoil: 0.2
    },
    [WeaponType.SMG]: {
        type: WeaponType.SMG,
        name: 'UMP45 SMG',
        damage: 35,
        fireRate: 650,
        reloadTime: 2.0,
        magazineSize: 25,
        accuracy: 0.78,
        range: 120,
        headshotMultiplier: 1.8,
        recoil: 0.25
    }
};

export function createWeapon(type: WeaponType): Weapon {
    const config = WEAPON_CONFIGS[type];
    return {
        ...config,
        currentAmmo: config.magazineSize,
        reserveAmmo: config.magazineSize * 3
    };
}

export function canFire(weapon: Weapon, lastFireTime: number): boolean {
    const fireInterval = 60000 / weapon.fireRate; // Convert RPM to milliseconds
    return Date.now() - lastFireTime >= fireInterval && weapon.currentAmmo > 0;
}

export function reload(weapon: Weapon): Weapon {
    const ammoNeeded = weapon.magazineSize - weapon.currentAmmo;
    const ammoToReload = Math.min(ammoNeeded, weapon.reserveAmmo);

    return {
        ...weapon,
        currentAmmo: weapon.currentAmmo + ammoToReload,
        reserveAmmo: weapon.reserveAmmo - ammoToReload
    };
}

export function addAmmo(weapon: Weapon, amount: number): Weapon {
    return {
        ...weapon,
        reserveAmmo: Math.min(weapon.reserveAmmo + amount, weapon.magazineSize * 10)
    };
}

export function getRecoilOffset(weapon: Weapon): { x: number; y: number } {
    const baseRecoil = weapon.recoil;
    return {
        x: (Math.random() - 0.5) * baseRecoil * 0.5,
        y: Math.random() * baseRecoil * -1.5
    };
}

export function calculateDamage(weapon: Weapon, distance: number, isHeadshot: boolean): number {
    let baseDamage = weapon.damage;

    // Apply headshot multiplier
    if (isHeadshot) {
        baseDamage *= weapon.headshotMultiplier;
    }

    // Apply distance falloff
    const falloffStart = weapon.range * 0.5;
    if (distance > falloffStart) {
        const falloffFactor = 1 - ((distance - falloffStart) / (weapon.range - falloffStart)) * 0.5;
        baseDamage *= Math.max(falloffFactor, 0.3);
    }

    return Math.round(baseDamage);
}
