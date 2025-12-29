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
  // Estado do Joystick
  const [joyPos, setJoyPos] = useState({ x: 0, y: 0 });
  const [isTouchingJoystick, setIsTouchingJoystick] = useState(false);
  const joystickRef = useRef<HTMLDivElement>(null);
  const startTouchRef = useRef<{ x: number, y: number } | null>(null);
  const lastTouchRef = useRef<{ x: number, y: number } | null>(null);
  const isPaused = gameState === GameState.PAUSED;

  // Manipulação do Joystick
  const handleJoystickStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Só ativa se tocar na metade esquerda da tela e na parte inferior
    if (touch.clientX < window.innerWidth / 2 && touch.clientY > window.innerHeight / 2) {
      setIsTouchingJoystick(true);
      startTouchRef.current = { x: touch.clientX, y: touch.clientY };
      updateJoystick(touch.clientX, touch.clientY, centerX, centerY, rect.width / 2);
    }
  };

  const handleJoystickMove = (e: React.TouchEvent) => {
    if (!isTouchingJoystick || !startTouchRef.current) return;

    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    updateJoystick(touch.clientX, touch.clientY, centerX, centerY, rect.width / 2);
  };

  const updateJoystick = (clientX: number, clientY: number, centerX: number, centerY: number, radius: number) => {
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const distance = Math.min(Math.sqrt(dx * dx + dy * dy), radius);
    const angle = Math.atan2(dy, dx);

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    setJoyPos({ x, y });

    // Atualiza inputRef
    inputRef.current.x = x / radius;
    inputRef.current.y = y / radius;
  };

  const handleJoystickEnd = () => {
    setIsTouchingJoystick(false);
    setJoyPos({ x: 0, y: 0 });
    inputRef.current.x = 0;
    inputRef.current.y = 0;
  };

  // Manipulação da Câmera (Touch)
  const handleTouchStart = (e: React.TouchEvent) => {
    // Apenas considera toque na metade direita para câmera
    for (let i = 0; i < e.touches.length; i++) {
      const touch = e.touches[i];
      if (touch.clientX > window.innerWidth / 2) {
        lastTouchRef.current = { x: touch.clientX, y: touch.clientY };
        break;
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (lastTouchRef.current) {
      // Encontra o toque que está controlando a câmera
      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        if (touch.clientX > window.innerWidth / 2) {
          const dx = touch.clientX - lastTouchRef.current.x;
          const dy = touch.clientY - lastTouchRef.current.y;

          inputRef.current.yaw = (inputRef.current.yaw || 0) - dx * 0.005 * settings.sens;
          inputRef.current.pitch = (inputRef.current.pitch || 0) + dy * 0.005 * settings.sens;

          lastTouchRef.current = { x: touch.clientX, y: touch.clientY };
          break;
        }
      }
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
    <div className="absolute inset-0 pointer-events-none text-white select-none overflow-hidden"
      onTouchStart={(e) => { handleTouchStart(e); }}
      onTouchMove={(e) => { handleTouchMove(e); }}
    >
      {/* Overlay de Dano */}
      <div id="damage-flash" className="fixed inset-0 bg-red-600/40 opacity-0 pointer-events-none transition-opacity duration-75 z-[60]" />

      {/* JOYSTICK VIRTUAL (Esquerda Inferior) */}
      <div
        className="pointer-events-auto absolute bottom-10 left-10 w-40 h-40 bg-white/20 rounded-full border-4 border-white/50 backdrop-blur-md touch-none shadow-xl"
        onTouchStart={handleJoystickStart}
        onTouchMove={handleJoystickMove}
        onTouchEnd={handleJoystickEnd}
        ref={joystickRef}
      >
        <div
          className="absolute w-16 h-16 bg-white rounded-full shadow-lg"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(calc(-50% + ${joyPos.x}px), calc(-50% + ${joyPos.y}px))`
          }}
        />
      </div>

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
          <button
            className="pointer-events-auto w-24 h-24 bg-red-600 rounded-full flex items-center justify-center border-4 border-white/50 active:scale-90 active:bg-red-700 transition-all absolute bottom-24 right-10 shadow-[0_0_30px_rgba(220,38,38,0.8)] z-50"
            onTouchStart={() => { inputRef.current.firing = true; }}
            onTouchEnd={() => { inputRef.current.firing = false; }}
            onMouseDown={() => { inputRef.current.firing = true; }}
            onMouseUp={() => { inputRef.current.firing = false; }}
          >
            <i className="fas fa-crosshairs text-4xl text-white"></i>
          </button>

          <button
            className="pointer-events-auto w-14 h-14 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 active:scale-90 transition-transform"
            onClick={onTogglePause}
          >
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
          <div className="absolute inset-0 pointer-events-auto bg-black/90 backdrop-blur-2xl z-[100] flex items-center justify-center p-4">
            <div className="w-full max-w-lg space-y-6 p-8 bg-slate-900/80 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden">
              <h2 className="text-3xl font-black italic text-orange-500 uppercase tracking-tighter text-center">CONFIGURAÇÕES</h2>

              <div className="space-y-6">
                {/* Sensibilidade */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black text-white/60 uppercase tracking-widest">
                    Sensibilidade <span>{settings.sens.toFixed(1)}</span>
                  </div>
                  <input
                    type="range" min="0.1" max="5" step="0.1"
                    value={settings.sens}
                    onChange={e => setSettings({ ...settings, sens: parseFloat(e.target.value) })}
                    className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                {/* Volume */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black text-white/60 uppercase tracking-widest">
                    Volume <span>{settings.volume.toFixed(1)}</span>
                  </div>
                  <input
                    type="range" min="0" max="1" step="0.1"
                    value={settings.volume}
                    onChange={e => setSettings({ ...settings, volume: parseFloat(e.target.value) })}
                    className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                {/* FOV */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black text-white/60 uppercase tracking-widest">
                    FOV <span>{settings.fov}</span>
                  </div>
                  <input
                    type="range" min="60" max="120" step="1"
                    value={settings.fov}
                    onChange={e => setSettings({ ...settings, fov: parseInt(e.target.value) })}
                    className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>

                {/* Tamanho Botões */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black text-white/60 uppercase tracking-widest">
                    Tamanho Botões <span>{settings.btnScale.toFixed(1)}</span>
                  </div>
                  <input
                    type="range" min="0.5" max="2" step="0.1"
                    value={settings.btnScale}
                    onChange={e => setSettings({ ...settings, btnScale: parseFloat(e.target.value) })}
                    className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>
              </div>

              <div className="h-px bg-white/10 my-4" />

              {/* Seção Nova Partida */}
              <div className="space-y-4">
                <h3 className="text-xl font-black italic text-white uppercase tracking-tighter text-center">Nova Partida</h3>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest block">Qtd. Bots</label>
                  <input
                    type="number"
                    value={settings.botCount}
                    onChange={e => setSettings({ ...settings, botCount: Math.max(1, parseInt(e.target.value) || 1) })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest block">Dificuldade</label>
                  <select
                    value={settings.difficulty}
                    onChange={e => setSettings({ ...settings, difficulty: e.target.value as any })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-bold appearance-none"
                  >
                    <option value="easy">Easy</option>
                    <option value="normal">Normal</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  className="w-full py-4 bg-indigo-600 text-white font-black rounded-xl uppercase italic text-sm active:scale-95 transition-transform shadow-lg shadow-indigo-600/20"
                >
                  MOVER BOTÕES
                </button>
                <button
                  className="w-full py-4 bg-rose-600 text-white font-black rounded-xl uppercase italic text-sm active:scale-95 transition-transform shadow-lg shadow-rose-600/20"
                >
                  RESETAR HUD
                </button>
                <button
                  className="w-full py-4 bg-orange-500 text-slate-950 font-black rounded-xl uppercase italic text-xl active:scale-95 transition-transform shadow-lg shadow-orange-500/20"
                  onClick={onTogglePause}
                >
                  CONTINUAR
                </button>
              </div>

              <button
                className="w-full pt-4 text-white/30 text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-500 transition-colors"
                onClick={() => window.location.reload()}
              >
                Desistir da Partida
              </button>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default GameUI;