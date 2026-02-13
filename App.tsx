
import React, { useState, useEffect } from 'react';
import { Mood } from './types.ts';
import { KawaiiCat } from './components/KawaiiCat.tsx';
import { MoodSelector } from './components/MoodSelector.tsx';
import { QuoteDisplay } from './components/QuoteDisplay.tsx';

const App: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<Mood>(null);
  const [cats, setCats] = useState<number[]>([]);

  // Initialize some cats
  useEffect(() => {
    const initialCats = Array.from({ length: 6 }, (_, i) => i);
    setCats(initialCats);
  }, []);

  const handleSelectMood = (mood: Mood) => {
    setSelectedMood(mood);
  };

  const handleBack = () => {
    setSelectedMood(null);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FFF5F7] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      </div>

      {/* Animated Cats */}
      {cats.map(id => (
        <KawaiiCat key={id} id={id} />
      ))}

      {/* Main Content Area */}
      <main className="w-full max-w-6xl mx-auto py-12 relative z-10">
        {!selectedMood ? (
          <MoodSelector onSelectMood={handleSelectMood} />
        ) : (
          <QuoteDisplay mood={selectedMood} onBack={handleBack} />
        )}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-4 text-pink-300 text-sm font-medium z-10 w-full text-center">
        <p className="mb-1 pointer-events-none">Fait avec beaucoup d'amour et de ronronnements 🐾</p>
        <p>
          &copy; 2026 <a 
            href="https://github.com/Souf-F" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-pink-500 transition-colors underline decoration-dotted pointer-events-auto"
          >
            Souf-F
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
