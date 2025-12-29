
import React from 'react';
import { GameSettings } from '../types';

interface Props {
  onStart: () => void;
  settings: GameSettings;
  setSettings: (s: GameSettings) => void;
}

const StartScreen: React.FC<Props> = ({ onStart, settings, setSettings }) => {
  return (
    <div className="absolute inset-0 z-[200] flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-slate-950 to-black overflow-y-auto">
      <div className="text-center mb-12 animate-in fade-in zoom-in duration-700">
        <h1 className="text-7xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">
          BATTLE CANAÃ
        </h1>
        <p className="text-blue-300 text-sm uppercase tracking-[0.3em] font-bold mt-2">Remastered Edition</p>
      </div>

      <div className="w-full max-w-sm bg-white/5 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/10 shadow-2xl mb-12 space-y-6">
        <div className="flex items-center gap-3 text-white/80 border-b border-white/10 pb-4">
          <i className="fas fa-sliders-h text-yellow-500"></i>
          <span className="font-bold text-sm uppercase tracking-widest">Partida Rápida</span>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase">Jogadores Bots</label>
            <input 
              type="range" min="5" max="50" step="5" 
              value={settings.botCount} 
              onChange={e => setSettings({...settings, botCount: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="text-right text-xs font-bold text-yellow-500">{settings.botCount} INIMIGOS</div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Dificuldade</label>
            <div className="grid grid-cols-3 gap-2">
              {['easy', 'normal', 'hard'].map(d => (
                <button 
                  key={d}
                  onClick={() => setSettings({...settings, difficulty: d as any})}
                  className={`py-2 rounded-xl text-[10px] font-black uppercase transition-all ${settings.difficulty === d ? 'bg-yellow-500 text-slate-950' : 'bg-white/5 text-white/40'}`}
                >
                  {d === 'easy' ? 'Fácil' : d === 'normal' ? 'Médio' : 'Hard'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={onStart}
        className="group relative px-16 py-6 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black text-3xl rounded-3xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(251,191,36,0.4)]"
      >
        <span className="flex items-center gap-4 italic uppercase">
          <i className="fas fa-parachute-box animate-bounce"></i> Cair na Praça
        </span>
      </button>

      <div className="mt-12 flex gap-8 text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
        <span>Versão 2.0.0</span>
        <span>Canaã Studio</span>
        <span>High Performance</span>
      </div>
    </div>
  );
};

export default StartScreen;
