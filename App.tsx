
import React, { useState, useRef, useEffect } from 'react';
import { GameState, GameSettings, PlayerStats } from './types';
import GameScene from './components/GameSceneSimple'; // Usando a versão OTIMIZADA
import GameUI from './components/GameUI';
import StartScreen from './components/StartScreen';
import GameOverScreen from './components/GameOverScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [settings, setSettings] = useState<GameSettings>({
    sens: 1.0,
    volume: 0.5,
    fov: 75,
    btnScale: 1.0,
    botCount: 15,
    difficulty: 'normal',
    graphicsQuality: 'high'
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
    firing: false, isSprinting: false, isADS: false
  });

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
        <StartScreen onStart={() => setGameState(GameState.PLAYING)} settings={settings} setSettings={setSettings} />
      )}

      {(gameState === GameState.PLAYING || gameState === GameState.PAUSED) && (
        <GameUI
          gameState={gameState}
          stats={stats}
          settings={settings}
          setSettings={setSettings}
          onTogglePause={() => setGameState(prev => prev === GameState.PAUSED ? GameState.PLAYING : GameState.PAUSED)}
          inputRef={inputRef}
        />
      )}

      {gameState === GameState.GAMEOVER && (
        <GameOverScreen stats={stats} onRestart={() => window.location.reload()} />
      )}
    </div>
  );
};

export default App;
