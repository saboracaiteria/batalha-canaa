import React, { useState, useRef } from 'react';
import { GameState, PlayerStats, GameSettings, WeaponType } from '../types';

interface Props {
  gameState: GameState;
  stats: PlayerStats;
  settings: GameSettings;
  setSettings: (s: GameSettings) => void;
  onTogglePause: () => void;
  inputRef: React.MutableRefObject<any>;
}

const GameUI: React.FC<Props> = ({ gameState, stats, settings, setSettings, onTogglePause, inputRef }) => {
  const [joyPos, setJoyPos] = useState({ x: 0, y: 0 });
  const lastTouchRef = useRef<{ x: number, y: number } | null>(null);
  const isPaused = gameState === GameState.PAUSED;

  const handleJoystick = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = touch.clientX - centerX;
    const dy = touch.clientY - centerY;
    const dist = Math.min(rect.width / 2, Math.sqrt(dx * dx + dy * dy));
    const angle = Math.atan2(dy, dx);
    const jx = Math.cos(angle) * dist;
    const jy = Math.sin(angle) * dist;
    setJoyPos({ x: jx, y: jy });
    inputRef.current.x = jx / (rect.width / 2);
    inputRef.current.y = jy / (rect.height / 2);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0].clientX > window.innerWidth / 2) {
      lastTouchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (lastTouchRef.current) {
      const touch = e.touches[0];
      const dx = touch.clientX - lastTouchRef.current.x;
      const dy = touch.clientY - lastTouchRef.current.y;
      inputRef.current.yaw = (inputRef.current.yaw || 0) - dx * 0.009 * settings.sens;
      inputRef.current.pitch = (inputRef.current.pitch || 0) + dy * 0.009 * settings.sens;
      lastTouchRef.current = { x: touch.clientX, y: touch.clientY };
    }
  };

  const currentWeapon = stats.weapons && stats.weapons[stats.currentWeapon || 0];
  const weaponIcons: Record<WeaponType, string> = {
    [WeaponType.RIFLE]: 'fa-gun',
    [WeaponType.SHOTGUN]: 'fa-bullseye',
    [WeaponType.SNIPER]: 'fa-crosshairs',
    [WeaponType.PISTOL]: 'fa-circle-dot',
    [WeaponType.SMG]: 'fa-burst'
  };

  const armorColor = stats.armor.level === 3 ? 'text-yellow-400' : stats.armor.level === 2 ? 'text-blue-400' : 'text-green-400';

  return (
    <div className="absolute inset-0 pointer-events-none text-white select-none overflow-hidden" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>

      {/* HUD SUPERIOR */}
      <div className="absolute top-0 inset-x-0 p-5 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">

        {/* Radar e Menu */}
        <div className="flex gap-4 items-center">
          <div className="w-28 h-28 rounded-full border-4 border-cyan-500/40 bg-black/60 backdrop-blur-2xl relative overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-full h-[1px] bg-cyan-400"></div>
              <div className="w-[1px] h-full bg-cyan-400"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_15px_#facc15] z-10 animate-pulse border-2 border-white"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[conic-gradient(from_0deg,transparent,rgba(6,182,212,0.2),transparent)] animate-[spin_3s_linear_infinite]"></div>
          </div>
          <button className="pointer-events-auto w-14 h-14 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 active:scale-90 transition-transform" onClick={onTogglePause}>
            <i className="fas fa-th-large text-xl"></i>
          </button>
        </div>

        {/* Central: Zona Timer */}
        <div className="absolute left-1/2 -translate-x-1/2 top-8 flex flex-col items-center gap-1">
          <div className={`px-10 py-3 rounded-full border-2 backdrop-blur-xl transition-all shadow-2xl ${stats.zoneTimer < 10 ? 'bg-red-600/60 border-red-500 animate-pulse' : 'bg-black/60 border-cyan-500/50'}`}>
            <span className="text-xl font-black italic tracking-widest uppercase">Zona: {stats.zoneTimer}s</span>
          </div>
          {stats.zoneTimer === 0 && <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.4em] animate-pulse">Encolhendo...</span>}
        </div>

        {/* Direita: Status da Partida */}
        <div className="flex flex-col items-end gap-3">
          <div className="flex gap-3">
            <div className="bg-black/60 px-6 py-2 rounded-2xl border border-white/10 text-right backdrop-blur-md">
              <div className="text-[10px] font-black uppercase text-red-500 tracking-tighter mb-1">Vivos</div>
              <div className="text-3xl font-black italic tracking-tighter leading-none">{stats.alive}</div>
            </div>
            <div className="bg-black/60 px-6 py-2 rounded-2xl border border-white/10 text-right backdrop-blur-md">
              <div className="text-[10px] font-black uppercase text-yellow-500 tracking-tighter mb-1">Kills</div>
              <div className="text-3xl font-black italic tracking-tighter leading-none">{stats.kills}</div>
            </div>
          </div>
          {stats.kills > 0 && (
            <div className="kill-msg bg-yellow-400 text-slate-950 px-5 py-2 rounded-l-2xl text-xs font-black uppercase italic border-l-8 border-slate-900 shadow-xl">
              Você abateu BOT_#{100 + stats.kills}
            </div>
          )}
        </div>
      </div>

      {/* Crosshair Dinâmico */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="relative w-12 h-12 flex items-center justify-center opacity-80">
          <div className="absolute w-[2px] h-3 bg-red-500 top-0"></div>
          <div className="absolute w-[2px] h-3 bg-red-500 bottom-0"></div>
          <div className="absolute w-3 h-[2px] bg-red-500 left-0"></div>
          <div className="absolute w-3 h-[2px] bg-red-500 right-0"></div>
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
        </div>
      </div>

      {/* HUD INFERIOR: Vida e Armadura */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[28rem]">
        {/* Armadura */}
        <div className="flex justify-between items-end text-[12px] font-black uppercase px-4 mb-2 drop-shadow-md">
          <span className={`flex items-center gap-2 ${armorColor}`}>
            <i className="fas fa-shield-alt"></i> Armadura Nv.{stats.armor.level}
          </span>
          <span className="text-2xl italic tracking-tighter">{Math.ceil(stats.armor.durability)}</span>
        </div>
        <div className="h-4 bg-black/80 rounded-full border-2 border-white/10 overflow-hidden p-[3px] shadow-lg mb-3">
          <div
            className={`h-full rounded-full transition-all duration-300 ${stats.armor.level === 3 ? 'bg-gradient-to-r from-yellow-500 to-yellow-300' : stats.armor.level === 2 ? 'bg-gradient-to-r from-blue-500 to-blue-300' : 'bg-gradient-to-r from-green-500 to-green-300'}`}
            style={{ width: `${(stats.armor.durability / stats.armor.maxDurability) * 100}%` }}
          />
        </div>

        {/* Vida */}
        <div className="flex justify-between items-end text-[12px] font-black uppercase px-4 mb-3 drop-shadow-md">
          <span className="text-red-400 flex items-center gap-2">
            <i className="fas fa-heart"></i> Vida
          </span>
          <span className="text-3xl italic tracking-tighter">{Math.ceil(stats.health)}%</span>
        </div>
        <div className="h-6 bg-black/80 rounded-full border-2 border-white/10 overflow-hidden p-[4px] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div
            className={`h-full rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.3)] ${stats.health < 35 ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-400' : 'bg-gradient-to-r from-green-500 via-green-400 to-emerald-400'}`}
            style={{ width: `${stats.health}%` }}
          />
        </div>
      </div>

      {/* Weapon Info */}
      {currentWeapon && (
        <div className="absolute bottom-12 right-8 bg-black/70 backdrop-blur-xl px-6 py-4 rounded-3xl border-2 border-white/20 shadow-2xl">
          <div className="flex items-center gap-4">
            <i className={`fas ${weaponIcons[currentWeapon.type]} text-4xl text-yellow-400`}></i>
            <div>
              <div className="text-xs font-bold text-white/40 uppercase tracking-wider">{currentWeapon.name}</div>
              <div className="text-4xl font-black italic tracking-tight">{currentWeapon.currentAmmo} <span className="text-xl text-white/40">/ {currentWeapon.reserveAmmo}</span></div>
            </div>
          </div>
          {stats.weapons.length > 1 && (
            <div className="text-[10px] text-white/30 uppercase text-center mt-2 tracking-widest">Arraste para trocar</div>
          )}
        </div>
      )}


      {/* MENU DE PAUSA PAINEL */}
      {
        isPaused && (
          <div className="absolute inset-0 pointer-events-auto bg-black/95 backdrop-blur-3xl z-[100] flex items-center justify-center p-10">
            <div className="w-full max-w-md space-y-12 p-16 bg-white/5 border-2 border-white/10 rounded-[5rem] text-center shadow-2xl relative overflow-hidden">
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
              <h2 className="text-7xl font-black italic text-yellow-500 uppercase tracking-tighter">Ajustes</h2>
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-black text-white/40 uppercase tracking-widest">Sensibilidade <span className="text-yellow-500 text-xl">{settings.sens}x</span></div>
                  <input type="range" min="0.1" max="5" step="0.1" value={settings.sens} onChange={e => setSettings({ ...settings, sens: parseFloat(e.target.value) })} className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-black text-white/40 uppercase tracking-widest">Qualidade <span className="text-yellow-500 text-xl">{settings.graphicsQuality}</span></div>
                  <div className="grid grid-cols-4 gap-2">
                    {['low', 'medium', 'high', 'ultra'].map(q => (
                      <button
                        key={q}
                        onClick={() => setSettings({ ...settings, graphicsQuality: q as any })}
                        className={`py-2 rounded-xl text-[10px] font-black uppercase transition-all ${settings.graphicsQuality === q ? 'bg-yellow-500 text-slate-950' : 'bg-white/5 text-white/40'}`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button className="w-full py-10 bg-yellow-500 text-slate-950 font-black rounded-[3rem] uppercase italic text-4xl active:scale-95 shadow-2xl shadow-yellow-500/30 transition-transform" onClick={onTogglePause}>Continuar</button>
              <button className="w-full py-5 text-red-500/40 text-xs font-black uppercase tracking-[0.6em] hover:text-red-500 transition-colors" onClick={() => window.location.reload()}>Desistir da Partida</button>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default GameUI;