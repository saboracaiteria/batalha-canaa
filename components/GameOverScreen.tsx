
import React from 'react';
import { PlayerStats } from '../types';

interface Props {
  stats: PlayerStats;
  onRestart: () => void;
}

const GameOverScreen: React.FC<Props> = ({ stats, onRestart }) => {
  const win = stats.alive === 1;

  return (
    <div className="absolute inset-0 z-[300] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md overflow-y-auto p-4 md:p-10">
      <div className="max-w-2xl w-full flex flex-col items-center justify-center min-h-min py-10">
        <div className="text-center mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className={`text-5xl md:text-8xl font-black italic uppercase drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] ${win ? 'text-yellow-500' : 'text-red-600'}`}>
            {win ? 'BOOYAH!' : 'ELIMINADO'}
          </h1>
          <p className="text-white/40 font-bold uppercase tracking-[0.2em] md:tracking-[0.5em] mt-2 md:mt-4 text-xs md:text-base">A partida terminou</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-sm mb-10 md:mb-16">
          <div className="bg-white/5 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 text-center shadow-2xl">
            <div className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Abates</div>
            <div className="text-3xl md:text-5xl font-black italic">{stats.kills}</div>
          </div>
          <div className="bg-white/5 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 text-center shadow-2xl">
            <div className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Rank</div>
            <div className="text-3xl md:text-5xl font-black italic text-yellow-500">#{stats.alive}</div>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="w-full max-w-xs md:max-w-none md:px-16 py-4 md:py-6 bg-white text-slate-950 font-black rounded-2xl md:rounded-3xl hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 text-xl md:text-2xl uppercase italic tracking-tighter"
        >
          Tentar Novamente
        </button>
      </div>
    </div>
  );
};

export default GameOverScreen;
