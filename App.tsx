
import React, { useState, useRef, useEffect } from 'react';
import { GameState, GameSettings, PlayerStats } from './types';
import GameScene from './components/GameSceneSimple'; // Usando a versão OTIMIZADA
import GameUI from './components/GameUI';
import StartScreen from './components/StartScreen';
import GameOverScreen from './components/GameOverScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [isEditingHUD, setIsEditingHUD] = useState(false);
  const [settings, setSettings] = useState<GameSettings>({
    sens: 1.0,
    volume: 0.5,
    fov: 75,
    btnScale: 1.0,
    botCount: 20, // Aumentado para 20 por padrão (máx 30)
    difficulty: 'normal',
    graphicsQuality: 'medium', // MEDIUM POR PADRÃO PARA MELHOR FPS
    hudPositions: {
      joystick: { x: 32, y: 32 },
      sprint: { x: 74, y: 190 }, // Acima do joystick
      fire: { x: 40, y: 40 },
      ads: { x: 40, y: 150 },
      jump: { x: 150, y: 40 },
      grenade: { x: 150, y: 140 },
      reload: { x: 150, y: 220 },
      radar: { x: 16, y: 16 } // Top left (base position relative to container)
    }
  });
  const [stats, setStats] = useState<PlayerStats>({
    health: 100,
    armor: { level: 1, durability: 50, maxDurability: 50 },
    kills: 0,
    alive: 16,
    zoneTimer: 60,
    isGasActive: false,
    currentWeapon: 0,
    weapons: [],
    grenades: new Map([
      ['explosive', { type: 'explosive' as any, damage: 80, radius: 15, count: 3 }],
      ['smoke', { type: 'smoke' as any, damage: 0, radius: 10, count: 2 }]
    ]),
    activePowerUps: []
  });

  const inputRef = useRef({
    x: 0, y: 0, yaw: 0, pitch: 0,
    firing: false, isSprinting: false, isADS: false, jump: false, grenade: false
  });

  const stateRef = useRef(gameState);
  stateRef.current = gameState;

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'F4') {
        e.preventDefault(); // Evita funções padrão do navegador se houver
        const current = stateRef.current;
        if (current === GameState.PLAYING || current === GameState.PAUSED) {
          setGameState(prev => prev === GameState.PAUSED ? GameState.PLAYING : GameState.PAUSED);
        }
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const onUpdateStats = (newStats: Partial<PlayerStats>) => {
    setStats(prev => ({ ...prev, ...newStats }));
  };

  const onGameOver = (win: boolean) => {
    setGameState(GameState.GAMEOVER);
  };

  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden">
      <GameScene
        gameState={gameState}
        settings={settings}
        onUpdateStats={onUpdateStats}
        onGameOver={onGameOver}
        inputRef={inputRef}
      />

      {gameState === GameState.START && (
        <StartScreen
          onStart={() => setGameState(GameState.PLAYING)}
          settings={settings}
          setSettings={setSettings}
          isEditingHUD={isEditingHUD}
          setIsEditingHUD={setIsEditingHUD}
        />
      )}

      {(gameState === GameState.PLAYING || gameState === GameState.PAUSED || (gameState === GameState.START && isEditingHUD)) && (
        <GameUI
          gameState={gameState}
          stats={stats}
          settings={settings}
          setSettings={setSettings}
          onTogglePause={() => setGameState(prev => prev === GameState.PAUSED ? GameState.PLAYING : GameState.PAUSED)}
          inputRef={inputRef}
          isEditingHUD={isEditingHUD}
          setIsEditingHUD={setIsEditingHUD}
        />
      )}

      {gameState === GameState.GAMEOVER && (
        <GameOverScreen stats={stats} onRestart={() => window.location.reload()} />
      )}
    </div>
  );
};

export default App;
