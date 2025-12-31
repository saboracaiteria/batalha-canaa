
import React from 'react';
import { GameSettings } from '../types';

interface Props {
  onStart: () => void;
  settings: GameSettings;
  setSettings: (s: GameSettings) => void;
  isEditingHUD: boolean;
  setIsEditingHUD: (val: boolean) => void;
}

const StartScreen: React.FC<Props> = ({ onStart, settings, setSettings, isEditingHUD, setIsEditingHUD }) => {
  return (
    <div className={`absolute inset-0 z-[200] flex flex-col items-center justify-center bg-slate-950 overflow-y-auto p-4 ${isEditingHUD ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Background Decor - Cyborg Style */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
      </div>

      {/* Tech Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/30 shadow-[0_0_15px_cyan] animate-[scan_4s_linear_infinite]" />

      <div className="text-center mb-12 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-8 h-1 bg-cyan-500 rounded-full animate-pulse"></div>
          <span className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em]">Cyborg Link Active</span>
          <div className="w-8 h-1 bg-cyan-500 rounded-full animate-pulse"></div>
        </div>
        <h1 className="text-7xl md:text-8xl font-black italic tracking-tighter text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
          BATALHA <span className="text-cyan-500">CANAÃ</span>
        </h1>
        <p className="text-slate-500 text-xs uppercase tracking-[0.5em] font-bold mt-2">Cybernetic Warfare v2.5</p>
      </div>

      <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-3xl p-8 rounded-3xl border border-cyan-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] mb-12 space-y-8 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors"></div>

        <div className="flex items-center justify-between text-cyan-400 border-b border-cyan-500/10 pb-4">
          <div className="flex items-center gap-3">
            <i className="fas fa-terminal text-xs"></i>
            <span className="font-black text-xs uppercase tracking-widest">Configurações de Missão</span>
          </div>
          <span className="text-[10px] font-mono opacity-40">SYSTEM_READY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex justify-between items-center">
              População Hostil
              <input
                type="number"
                value={settings.botCount}
                onChange={e => setSettings({ ...settings, botCount: Math.max(0, Math.min(30, parseInt(e.target.value) || 0)) })}
                className="w-12 bg-slate-800 border border-cyan-500/20 rounded text-cyan-400 text-center text-xs font-black p-1 focus:outline-none focus:border-cyan-400"
              />
            </label>
            <input
              type="range" min="0" max="30" step="1"
              value={settings.botCount}
              onChange={e => setSettings({ ...settings, botCount: parseInt(e.target.value) })}
              className="w-full h-1 bg-slate-800 rounded-full appearance-none accent-cyan-500 cursor-pointer"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Interface</label>
            <button
              onClick={() => setIsEditingHUD(true)}
              className="w-full py-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 text-xs font-black uppercase hover:bg-cyan-500/20 transition-all flex items-center justify-center gap-2"
            >
              <i className="fas fa-hand-pointer animate-bounce"></i>
              Customizar HUD
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={onStart}
        className="group relative px-20 py-8 bg-cyan-600 hover:bg-cyan-500 text-white font-black text-3xl rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(6,182,212,0.4)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <span className="flex items-center gap-4 italic uppercase relative z-10">
          <i className="fas fa-plug-circle-bolt animate-pulse"></i> Iniciar Upload
        </span>
      </button>

      <div className="mt-12 flex gap-8 text-slate-700 text-[9px] font-black uppercase tracking-[0.3em]">
        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div> Servidor Canaã</span>
        <span>Secure Protocol 4.1</span>
        <span>Neural Engine Built</span>
      </div>

      <style>{`
        @keyframes scan {
          from { top: 0; }
          to { top: 100%; }
        }
      `}</style>
    </div>
  );
};

export default StartScreen;
