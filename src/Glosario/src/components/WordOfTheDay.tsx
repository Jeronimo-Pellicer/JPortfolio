import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { getRandomDailyTerm, categoryLabels, categoryIcons } from '../data/glossaryData';
import { useLanguage } from '../../../Components/portfolio/LanguageContext';

interface WordOfTheDayProps {
  onTermClick: (termId: string) => void;
}

const WordOfTheDay = ({ onTermClick }: WordOfTheDayProps) => {
  const { language } = useLanguage();
  // Memoizar para que cambie con el idioma
  const term = React.useMemo(() => getRandomDailyTerm(), [language]);
  const wordOfDayText = language === 'es' ? 'Palabra del Día' : 'Word of the Day';
  const ctaText = language === 'es' ? 'Ver definición completa' : 'See full definition';
  if (!term) {
    // If there is no term, render nothing or a fallback
    return null;
  }
  return (
    <div className="px-4 md:px-8 mb-10">
      <div className="max-w-6xl mx-auto">
        <div 
          className="glass-strong rounded-3xl p-6 md:p-8 relative overflow-hidden cursor-pointer glass-hover group"
          onClick={() => onTermClick(term.id)}
        >
          {/* Decorative gradient blob */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-full blur-3xl opacity-50" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 animate-pulse text-pink-500" />
              <span className="font-medium text-sm uppercase tracking-wider bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-transparent bg-clip-text">
                {wordOfDayText}
              </span>
              <span className="ml-auto inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border category-ai">
                {categoryIcons[term.category]} {categoryLabels[term.category][language]}
              </span>
            </div>

            {/* Term */}
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
              {term.term[language]}
            </h2>

            {/* Short Definition */}
            <p className="text-lg mb-4 max-w-2xl text-white">
              {term.shortDefinition[language]}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 font-medium text-white">
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
            </div>
          </div>

          {/* New badge */}
          {term.isNew && (
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white text-xs font-extrabold uppercase tracking-wider border-2 border-white shadow-lg animate-pulse">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v2m6.364 1.636l-1.414 1.414M22 12h-2m-1.636 6.364l-1.414-1.414M12 22v-2m-6.364-1.636l1.414-1.414M2 12h2m1.636-6.364l1.414 1.414" /></svg>
                2026
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WordOfTheDay;
