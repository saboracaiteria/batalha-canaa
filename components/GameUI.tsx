import React, { useState, useRef } from 'react';
import { GameState, PlayerStats, GameSettings, WeaponType } from '../types';

interface Props {
  gameState: GameState;
  stats: PlayerStats;
  settings: GameSettings;
  setSettings: (s: GameSettings) => void;
  onTogglePause: () => void;
  inputRef: React.MutableRefObject<any>;
  isEditingHUD: boolean;
  setIsEditingHUD: (val: boolean) => void;
}

const GameUI: React.FC<Props> = ({ gameState, stats, settings, setSettings, onTogglePause, inputRef, isEditingHUD, setIsEditingHUD }) => {
  // Estado do Joystick
  const [joyPos, setJoyPos] = useState({ x: 0, y: 0 });
  const [isTouchingJoystick, setIsTouchingJoystick] = useState(false);
  const [draggingElement, setDraggingElement] = useState<'joystick' | 'sprint' | 'fire' | 'ads' | 'jump' | 'grenade' | 'reload' | 'radar' | null>(null);
  const joystickRef = useRef<HTMLDivElement>(null);
  const startTouchRef = useRef<{ x: number, y: number } | null>(null);
  const lastTouchRef = useRef<{ x: number, y: number } | null>(null);
  const isPaused = gameState === GameState.PAUSED;

  const defaultHudPos = {
    joystick: { x: 32, y: 32 },
    sprint: { x: 74, y: 190 },
    fire: { x: 40, y: 40 },
    ads: { x: 40, y: 150 },
    jump: { x: 150, y: 40 },
    grenade: { x: 150, y: 140 },
    reload: { x: 150, y: 220 },
    radar: { x: 16, y: 16 }
  };

  const hudPositions = settings.hudPositions || defaultHudPos;

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

  const cameraTouchIdRef = useRef<number | null>(null);

  // Manipulação da Câmera (Touch)
  const handleTouchStart = (e: React.TouchEvent) => {
    // Modo Edição: Captura início do arraste
    if (isEditingHUD) {
      const touch = e.touches[0];
      // Verifica se tocou perto dos elementos (lógica simples por coordenadas de tela vs elementos não é tão fácil aqui, 
      // usaremos os eventos diretamente nos elementos abaixo)
      return;
    }

    // Apenas considera toque na metade direita para iniciar câmera
    for (let i = 0; i < e.touches.length; i++) {
      const touch = e.touches[i];
      if (touch.clientX > window.innerWidth / 2 && cameraTouchIdRef.current === null) {
        cameraTouchIdRef.current = touch.identifier;
        lastTouchRef.current = { x: touch.clientX, y: touch.clientY };
        break;
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isEditingHUD && draggingElement) {
      const touch = e.touches[0];
      const isLeftAnchored = ['joystick', 'radar', 'sprint'].includes(draggingElement);

      const newPos = {
        x: isLeftAnchored ? touch.clientX - 40 : window.innerWidth - touch.clientX - 40,
        y: window.innerHeight - touch.clientY - 40
      };

      // Clamp para não sair da tela
      newPos.x = Math.max(0, Math.min(newPos.x, window.innerWidth - 80));
      newPos.y = Math.max(0, Math.min(newPos.y, window.innerHeight - 80));

      setSettings({
        ...settings,
        hudPositions: {
          ...hudPositions,
          [draggingElement]: newPos
        }
      });
      return;
    }

    if (cameraTouchIdRef.current !== null) {
      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        if (touch.identifier === cameraTouchIdRef.current) {
          const dx = touch.clientX - (lastTouchRef.current?.x || touch.clientX);
          const dy = touch.clientY - (lastTouchRef.current?.y || touch.clientY);

          inputRef.current.yaw = (inputRef.current.yaw || 0) - dx * 0.005 * (settings.sens || 1.0);
          inputRef.current.pitch = (inputRef.current.pitch || 0) + dy * 0.005 * (settings.sens || 1.0);

          lastTouchRef.current = { x: touch.clientX, y: touch.clientY };
          break;
        }
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isEditingHUD) {
      setDraggingElement(null);
      return;
    }

    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === cameraTouchIdRef.current) {
        cameraTouchIdRef.current = null;
        lastTouchRef.current = null;
        break;
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
    <div className="absolute inset-0 pointer-events-none text-white select-none overflow-hidden">
      {/* CAMADA DE TOQUE PARA CÂMERA (Cobre a tela toda mas fica atrás dos botões) */}
      <div
        className="absolute inset-0 pointer-events-auto z-0 touch-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />

      {/* Overlay de Dano */}
      <div id="damage-flash" className="fixed inset-0 bg-red-600/40 opacity-0 pointer-events-none transition-opacity duration-75 z-[60]" />

      {/* JOYSTICK SEPARADO */}
      <div
        className={`pointer-events-auto absolute touch-none z-10 ${isEditingHUD && draggingElement === 'joystick' ? 'border-2 border-cyan-400 p-2' : ''}`}
        style={{
          transform: `scale(${(settings.btnScale || 1.0) * 0.9})`,
          bottom: `${hudPositions.joystick.y}px`,
          left: `${hudPositions.joystick.x}px`
        }}
        onTouchStart={(e) => {
          if (isEditingHUD) setDraggingElement('joystick');
          else handleJoystickStart(e);
        }}
        onTouchMove={handleJoystickMove}
        onTouchEnd={handleJoystickEnd}
      >
        <div
          className={`w-36 h-36 bg-black/20 rounded-full border-2 border-white/10 backdrop-blur-sm relative flex items-center justify-center ${isEditingHUD && draggingElement === 'joystick' ? 'animate-pulse' : ''}`}
          ref={joystickRef}
        >
          <div
            className="absolute w-14 h-14 bg-white/40 border-2 border-white/60 rounded-full shadow-2xl"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${joyPos.x}px), calc(-50% + ${joyPos.y}px))`
            }}
          />
        </div>
      </div>

      {/* SPRINT SEPARADO */}
      <button
        className={`pointer-events-auto absolute z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all ${isEditingHUD && draggingElement === 'sprint' ? 'border-2 border-yellow-400 animate-pulse' : ''} ${inputRef.current.isSprinting ? 'bg-yellow-400 scale-110 shadow-[0_0_20px_#facc15]' : 'bg-yellow-500/80 border-2 border-black/20'}`}
        style={{
          bottom: `${hudPositions.sprint.y}px`,
          left: `${hudPositions.sprint.x}px`,
          transform: `scale(${settings.btnScale || 1.0})`
        }}
        onTouchStart={() => {
          if (isEditingHUD) setDraggingElement('sprint');
          else inputRef.current.isSprinting = true;
        }}
        onTouchEnd={() => { if (!isEditingHUD) inputRef.current.isSprinting = false; }}
      >
        <i className="fas fa-person-running text-black text-xl"></i>
      </button>

      {/* FIRE BUTTON SEPARADO */}
      <button
        className={`pointer-events-auto absolute z-10 w-24 h-24 bg-red-600 rounded-full border-4 border-white/30 flex items-center justify-center active:scale-90 active:bg-red-700 transition-all shadow-[0_0_30px_rgba(220,38,38,0.5)] ${isEditingHUD && draggingElement === 'fire' ? 'border-dashed border-white animate-pulse' : ''}`}
        style={{
          bottom: `${hudPositions.fire.y}px`,
          right: `${hudPositions.fire.x}px`,
          transform: `scale(${settings.btnScale || 1.0})`
        }}
        onTouchStart={() => {
          if (isEditingHUD) setDraggingElement('fire');
          else inputRef.current.firing = true;
        }}
        onTouchEnd={() => { if (!isEditingHUD) inputRef.current.firing = false; }}
      >
        <i className="fas fa-fire text-white text-4xl"></i>
      </button>

      {/* ADS SEPARADO */}
      <button
        className={`pointer-events-auto absolute z-10 w-16 h-16 bg-cyan-500/80 rounded-full border border-white/30 flex items-center justify-center active:scale-95 transition-all ${isEditingHUD && draggingElement === 'ads' ? 'border-dashed border-white animate-pulse' : ''}`}
        style={{
          bottom: `${hudPositions.ads.y}px`,
          right: `${hudPositions.ads.x}px`,
          transform: `scale(${settings.btnScale || 1.0})`
        }}
        onTouchStart={() => {
          if (isEditingHUD) setDraggingElement('ads');
          else inputRef.current.isADS = true;
        }}
        onTouchEnd={() => { if (!isEditingHUD) inputRef.current.isADS = false; }}
      >
        <i className="fas fa-bullseye text-white text-2xl"></i>
      </button>

      {/* JUMP SEPARADO */}
      <button
        className={`pointer-events-auto absolute z-10 w-16 h-16 bg-blue-600/80 rounded-full border border-white/30 flex items-center justify-center active:scale-90 active:bg-blue-700 transition-all ${isEditingHUD && draggingElement === 'jump' ? 'border-dashed border-white animate-pulse' : ''}`}
        style={{
          bottom: `${hudPositions.jump.y}px`,
          right: `${hudPositions.jump.x}px`,
          transform: `scale(${settings.btnScale || 1.0})`
        }}
        onTouchStart={() => {
          if (isEditingHUD) setDraggingElement('jump');
          else inputRef.current.jump = true;
        }}
      >
        <i className="fas fa-arrow-up text-white text-xl"></i>
      </button>

      {/* RELOAD SEPARADO */}
      <button
        className={`pointer-events-auto absolute z-10 w-14 h-14 bg-black/60 rounded-full border border-white/20 flex items-center justify-center active:bg-cyan-500 transition-all font-black text-xs ${isEditingHUD && draggingElement === 'reload' ? 'border-dashed border-white animate-pulse' : ''}`}
        style={{
          bottom: `${hudPositions.reload.y}px`,
          right: `${hudPositions.reload.x}px`,
          transform: `scale(${settings.btnScale || 1.0})`
        }}
        onTouchStart={() => { if (isEditingHUD) setDraggingElement('reload'); }}
        onClick={() => { /* Reload Logic */ }}
      >
        <i className="fas fa-rotate text-white text-xl"></i>
      </button>

      {/* GRENADE SEPARADO */}
      <button
        className={`pointer-events-auto absolute z-10 w-14 h-14 rounded-full border flex items-center justify-center transition-all ${isEditingHUD && draggingElement === 'grenade' ? 'border-dashed border-white animate-pulse' : ''} ${inputRef.current.grenadeType === 'smoke' ? 'bg-gray-600 border-white text-white' : 'bg-black/60 border-white/20 text-white shadow-[0_0_15px_rgba(234,88,12,0.3)]'}`}
        style={{
          bottom: `${hudPositions.grenade.y}px`,
          right: `${hudPositions.grenade.x}px`,
          transform: `scale(${settings.btnScale || 1.0})`
        }}
        onTouchStart={() => {
          if (isEditingHUD) setDraggingElement('grenade');
          else inputRef.current.grenade = true;
        }}
        onClick={() => {
          if (!isEditingHUD) {
            inputRef.current.grenadeType = inputRef.current.grenadeType === 'smoke' ? 'explosive' : 'smoke';
          }
        }}
      >
        <i className={`fas ${inputRef.current.grenadeType === 'smoke' ? 'fa-smog' : 'fa-bomb'} text-white text-xl`}></i>
      </button>

      {/* HUD SUPERIOR */}
      <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-start z-[50]">
        {/* Radar e Menu (Top Left) */}
        <div className="flex flex-col gap-2 items-start h-full">
          <button
            className="pointer-events-auto w-10 h-10 bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 active:scale-90 transition-transform mb-1"
            onClick={onTogglePause}
          >
            <i className="fas fa-cog text-white/70"></i>
          </button>

          <button
            className="pointer-events-auto w-10 h-10 bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 active:scale-90 transition-transform mb-1"
            onClick={() => {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(e => console.error(e));
              } else {
                if (document.exitFullscreen) document.exitFullscreen();
              }
            }}
          >
            <i className="fas fa-expand text-white/70"></i>
          </button>

          <div
            className={`pointer-events-auto w-24 h-24 rounded-full border-2 border-white/20 bg-black/60 backdrop-blur-xl relative overflow-hidden shadow-2xl ${isEditingHUD && draggingElement === 'radar' ? 'border-dashed border-cyan-400 animate-pulse' : ''}`}
            style={{
              position: isEditingHUD ? 'absolute' : 'relative',
              top: isEditingHUD ? `${hudPositions.radar.y}px` : 'auto',
              left: isEditingHUD ? `${hudPositions.radar.x}px` : 'auto'
            }}
            onTouchStart={() => { if (isEditingHUD) setDraggingElement('radar'); }}
          >
            {/* Radar Content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-full h-[1px] bg-white"></div>
              <div className="w-[1px] h-full bg-white"></div>
            </div>
            {/* Pontos de Inimigos (Simulação visual no radar) */}
            <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_5px_red]"></div>
            <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_5px_red]"></div>
            <div className="absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_5px_red]"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] z-10 border border-white/40"></div>
          </div>
        </div>

        {/* Central: Zona Timer (Estilo Minimalista) */}
        <div className="bg-black/40 backdrop-blur-md px-6 py-1.5 rounded-md border border-white/10 mt-2">
          <span className="text-cyan-400 text-sm font-black italic tracking-widest uppercase">ZONA EM: {stats.zoneTimer}s</span>
        </div>

        {/* Direita: Status da Partida */}
        <div className="flex gap-4 p-2 bg-black/20 backdrop-blur-sm rounded-lg">
          <div className="text-right">
            <span className="text-[10px] font-black uppercase text-white/40 tracking-tighter">Vivos: </span>
            <span className="text-sm font-black text-rose-500">{stats.alive}</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black uppercase text-white/40 tracking-tighter">Abates: </span>
            <span className="text-sm font-black text-yellow-400">{stats.kills}</span>
          </div>
        </div>
      </div>

      {/* Red Dot Aim */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
        <div className="w-1.5 h-1.5 bg-red-600 rounded-full shadow-[0_0_8px_#ff0000] border border-white/20"></div>
      </div>

      {/* BARRA DE VIDA (Estilo Imagem: Fina e no Fundo) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80%] max-w-sm h-1.5 bg-black/40 rounded-full border border-white/10 overflow-hidden z-20">
        <div
          className="h-full bg-green-500 transition-all duration-300 shadow-[0_0_10px_#22c55e]"
          style={{ width: `${stats.health}%` }}
        />
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
        isPaused && !isEditingHUD && (
          <div className="absolute inset-0 pointer-events-auto bg-black/90 backdrop-blur-2xl z-[100] flex items-center justify-center p-4">
            <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto space-y-6 p-6 md:p-8 bg-slate-900/80 border border-white/10 rounded-3xl shadow-2xl relative scrollbar-hide">
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
                  className="w-full py-4 bg-indigo-600 text-white font-black rounded-xl uppercase italic text-sm active:scale-95 transition-all shadow-lg shadow-indigo-600/20"
                  onClick={() => {
                    setIsEditingHUD(true);
                  }}
                >
                  <i className="fas fa-up-down-left-right mr-2"></i>
                  MOVER BOTÕES
                </button>
                <button
                  className="w-full py-4 bg-rose-600 text-white font-black rounded-xl uppercase italic text-sm active:scale-95 transition-transform shadow-lg shadow-rose-600/20"
                  onClick={() => {
                    setSettings({ ...settings, hudPositions: defaultHudPos });
                  }}
                >
                  <i className="fas fa-undo mr-2"></i>
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

      {/* OVERLAY DE EDIÇÃO DE HUD */}
      {isEditingHUD && (
        <div className="absolute inset-x-0 top-1/4 pointer-events-none z-[110] flex flex-col items-center">
          <div className="bg-black/80 backdrop-blur-xl border-2 border-cyan-500 p-6 rounded-3xl pointer-events-auto flex flex-col items-center gap-4 shadow-2xl animate-pulse">
            <h2 className="text-2xl font-black italic uppercase text-cyan-400 tracking-widest">Modo Edição</h2>
            <p className="text-[10px] text-white/60 uppercase font-bold text-center">Arraste os grupos destacados para mudar sua posição</p>

            <div className="flex gap-4 w-full">
              <button
                className="flex-1 py-3 bg-red-500/20 border border-red-500 text-red-400 rounded-xl font-black uppercase text-[10px] hover:bg-red-500 hover:text-white transition-all"
                onClick={() => {
                  setSettings({ ...settings, hudPositions: defaultHudPos });
                }}
              >
                Resetar
              </button>
              <button
                className="flex-1 py-3 bg-cyan-500 text-slate-950 rounded-xl font-black uppercase text-[10px] hover:scale-105 transition-all"
                onClick={() => setIsEditingHUD(false)}
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div >
  );
};

export default GameUI;