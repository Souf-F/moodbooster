
import React from 'react';
import { Mood } from '../types.ts';

interface MoodSelectorProps {
  onSelectMood: (mood: Mood) => void;
}

export const MoodSelector: React.FC<MoodSelectorProps> = ({ onSelectMood }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-12 z-10 relative px-4">
      <h1 className="text-4xl md:text-5xl font-pacifico text-pink-500 text-center drop-shadow-sm float-animation">
        Comment tu te sens aujourd'hui ?
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <button
          onClick={() => onSelectMood('happy')}
          className="group relative bg-white hover:bg-pink-50 text-pink-600 font-bold py-6 px-8 rounded-3xl shadow-[0_8px_0_rgb(244,143,177)] active:shadow-none active:translate-y-2 transition-all border-4 border-pink-200 text-xl flex flex-col items-center gap-2 pointer-events-auto"
        >
          <span className="text-4xl group-hover:scale-125 transition-transform">✨</span>
          Je vais bien !
        </button>

        <button
          onClick={() => onSelectMood('neutral')}
          className="group relative bg-white hover:bg-pink-50 text-pink-500 font-bold py-6 px-8 rounded-3xl shadow-[0_8px_0_rgb(248,187,208)] active:shadow-none active:translate-y-2 transition-all border-4 border-pink-100 text-xl flex flex-col items-center gap-2 pointer-events-auto"
        >
          <span className="text-4xl group-hover:scale-125 transition-transform">🌸</span>
          Couci-couça
        </button>

        <button
          onClick={() => onSelectMood('sad')}
          className="group relative bg-white hover:bg-pink-50 text-pink-400 font-bold py-6 px-8 rounded-3xl shadow-[0_8px_0_rgb(252,228,236)] active:shadow-none active:translate-y-2 transition-all border-4 border-pink-50 text-xl flex flex-col items-center gap-2 pointer-events-auto"
        >
          <span className="text-4xl group-hover:scale-125 transition-transform">🥺</span>
          Pas très bien...
        </button>
      </div>
    </div>
  );
};
