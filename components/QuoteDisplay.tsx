
import React, { useMemo } from 'react';
import { Mood } from '../types';
import { HAPPY_QUOTES, NEUTRAL_QUOTES, SAD_QUOTES } from '../constants/quotes';

interface QuoteDisplayProps {
  mood: Mood;
  onBack: () => void;
}

export const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ mood, onBack }) => {
  const quote = useMemo(() => {
    let pool = NEUTRAL_QUOTES;
    if (mood === 'happy') pool = HAPPY_QUOTES;
    if (mood === 'sad') pool = SAD_QUOTES;
    
    return pool[Math.floor(Math.random() * pool.length)];
  }, [mood]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center z-10 relative">
      <div className="bg-white/80 backdrop-blur-sm p-10 md:p-16 rounded-[3rem] border-8 border-pink-200 shadow-2xl max-w-2xl w-full flex flex-col items-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="text-6xl mb-2">
          {mood === 'happy' ? '🌟' : mood === 'neutral' ? '🎀' : '🫂'}
        </div>
        
        <p className="text-2xl md:text-3xl font-medium text-pink-700 italic leading-relaxed">
          "{quote.text}"
        </p>
        
        <button
          onClick={onBack}
          className="mt-8 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-pink-200/50 transition-all flex items-center gap-3 active:scale-95 pointer-events-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour
        </button>
      </div>
      
      {/* Decorative Hearts */}
      <div className="absolute top-10 left-10 text-pink-300 animate-bounce delay-75 text-4xl">♥</div>
      <div className="absolute bottom-10 right-10 text-pink-300 animate-bounce delay-150 text-4xl">♥</div>
    </div>
  );
};
