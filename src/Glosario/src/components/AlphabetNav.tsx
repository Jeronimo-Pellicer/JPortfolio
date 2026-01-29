import { useRef, useState, useEffect } from 'react';
import { alphabet, getTermsByLetter } from '../data/glossaryData';
import { useLanguage } from '../../../Components/portfolio/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import React from "react";

interface AlphabetNavProps {
  activeLetter: string | null;
  onLetterClick: (letter: string) => void;
  vertical?: boolean;
}


function AlphabetNav({ activeLetter, onLetterClick, vertical = false }: AlphabetNavProps) {
  const { language } = useLanguage();
  if (vertical) {
    return (
      <nav className="w-full flex flex-col items-center justify-center" aria-label="Navegación alfabética vertical">
        <div className="glass-strong rounded-2xl flex flex-col items-center gap-2 py-4 px-2 w-full max-w-[4.5rem] mx-auto overflow-y-auto custom-scrollbar" style={{background: 'linear-gradient(120deg, rgba(255,255,255,0.10) 0%, rgba(30,41,59,0.25) 100%)', backdropFilter: 'blur(16px)', maxHeight: '70vh'}}>
          {alphabet.map((letter) => {
            const hasTerms = getTermsByLetter(letter, language).length > 0;
            const isActive = activeLetter === letter;
            return (
              <button
                key={letter}
                onClick={() => hasTerms && onLetterClick(letter)}
                disabled={!hasTerms}
                data-letter={letter}
                className={`w-12 h-12 md:w-14 md:h-14 rounded-xl font-display font-extrabold text-2xl flex items-center justify-center transition-all duration-200 shadow-md
                  ${isActive ? 'bg-white text-black shadow-lg' : 'bg-white/10 text-white hover:bg-white/30 hover:text-white'}
                  ${!hasTerms ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                style={{ lineHeight: '1.1' }}
                aria-label={language === 'es' ? `Ir a términos que empiezan con ${letter}` : `Go to terms starting with ${letter}`}
              >
                {letter}
              </button>
            );
          })}
        </div>
        <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 0px; background: transparent; }
          .custom-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: transparent; }
        `}</style>
      </nav>
    );
  }
  // Horizontal version (default)
  return (
    <>
      <nav className="w-full flex justify-center mb-2" aria-label="Navegación alfabética minimalista">
        <div className="glass-strong rounded-2xl flex items-center gap-4 py-5 px-6 w-full max-w-3xl mx-auto overflow-x-auto custom-scrollbar" style={{background: 'linear-gradient(120deg, rgba(255,255,255,0.10) 0%, rgba(30,41,59,0.25) 100%)', backdropFilter: 'blur(16px)'}}>
          {alphabet.map((letter) => {
            const hasTerms = getTermsByLetter(letter, language).length > 0;
            const isActive = activeLetter === letter;
            return (
              <button
                key={letter}
                onClick={() => hasTerms && onLetterClick(letter)}
                disabled={!hasTerms}
                data-letter={letter}
                className={`h-14 min-w-[3.5rem] md:h-16 md:min-w-[4rem] rounded-xl font-display font-extrabold text-2xl flex items-center justify-center transition-all duration-200 shadow-md
                  ${isActive ? 'bg-white text-black shadow-lg' : 'bg-white/10 text-white hover:bg-white/30 hover:text-white'}
                  ${!hasTerms ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                style={{ lineHeight: '1.1' }}
                aria-label={`Ir a términos que empiezan con ${letter}`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </nav>
      <div className="w-full max-w-3xl mx-auto mt-3 px-6">
        <div className="flex items-center text-white/40 text-xs">
          <span>A</span>
          <div className="h-px flex-1 mx-4 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span>Z</span>
        </div>
      </div>
    </>
  );
}

export default AlphabetNav;
