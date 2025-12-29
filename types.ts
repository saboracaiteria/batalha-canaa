
export enum GameState {
  START,
  PLAYING,
  PAUSED,
  GAMEOVER
}

export interface GameSettings {
  sens: number;
  volume: number;
  fov: number;
  btnScale: number;
  botCount: number;
  difficulty: 'easy' | 'normal' | 'hard';
  graphicsQuality: 'low' | 'medium' | 'high' | 'ultra';
}

export enum WeaponType {
  RIFLE = 'rifle',
  SHOTGUN = 'shotgun',
  SNIPER = 'sniper',
  PISTOL = 'pistol',
  SMG = 'smg'
}

export interface Weapon {
  type: WeaponType;
  name: string;
  damage: number;
  fireRate: number; // RPM
  reloadTime: number;
  magazineSize: number;
  currentAmmo: number;
  reserveAmmo: number;
  accuracy: number; // 0-1
  range: number;
  headshotMultiplier: number;
  recoil: number;
}

export enum GrenadeType {
  EXPLOSIVE = 'explosive',
  SMOKE = 'smoke',
  FLASH = 'flash'
}

export interface Grenade {
  type: GrenadeType;
  damage: number;
  radius: number;
  count: number;
}

export enum ArmorLevel {
  NONE = 0,
  LEVEL1 = 1,
  LEVEL2 = 2,
  LEVEL3 = 3
}

export interface Armor {
  level: ArmorLevel;
  durability: number;
  maxDurability: number;
}

export enum PowerUpType {
  ADRENALINE = 'adrenaline',
  MEDKIT = 'medkit',
  ARMOR_REPAIR = 'armor_repair',
  AMMO = 'ammo'
}

export interface PowerUp {
  type: PowerUpType;
  duration?: number;
  effect: number;
}

export interface PlayerStats {
  health: number;
  armor: Armor;
  kills: number;
  alive: number;
  zoneTimer: number;
  isGasActive: boolean;
  currentWeapon: number; // index in weapons array
  weapons: Weapon[];
  grenades: Map<GrenadeType, Grenade>;
  activePowerUps: PowerUp[];
}

export enum BotState {
  IDLE = 'idle',
  PATROL = 'patrol',
  CHASE = 'chase',
  COMBAT = 'combat',
  SEEK_COVER = 'seek_cover',
  HEALING = 'healing',
  LOOTING = 'looting'
}

export interface BotAI {
  state: BotState;
  target: any;
  lastSeenPlayerPos: THREE.Vector3 | null;
  health: number;
  armor: Armor;
  weapon: Weapon;
  awareness: number; // 0-1
  aggression: number; // 0-1
  coverPosition: THREE.Vector3 | null;
}
