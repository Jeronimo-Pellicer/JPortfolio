import { Search } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../../Components/portfolio/LanguageContext';

interface GlossaryHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const GlossaryHeader = ({ searchQuery, onSearchChange }: GlossaryHeaderProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { language } = useLanguage();

  // i18n texts
  const title = language === 'es' ? 'Glosario' : 'Glossary';
  const subtitle = language === 'es'
    ? 'Términos clásicos y las nuevas tendencias que están definiendo el marketing digital en 2026'
    : 'Classic terms and new trends defining digital marketing in 2026';
  const searchPlaceholder = language === 'es' ? 'Buscar términos...' : 'Search terms...';
  const searchAria = language === 'es' ? 'Buscar término en el glosario' : 'Search glossary term';
  const clearText = language === 'es' ? 'Limpiar' : 'Clear';

  return (
    <header className="relative z-10 pt-8 pb-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Logo and Title */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            <span className="text-gradient">{title}</span>
            <span className="text-white"> A-Z</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div 
          className={`
            glass-strong rounded-2xl transition-all duration-300 max-w-xl mx-auto
            ${isFocused ? 'glow-primary ring-2 ring-primary/30' : ''}
          `}
          style={{ animationDelay: '0.1s' }}
          role="search"
        >
          <div className="flex items-center gap-3 p-4">
            <Search className="w-5 h-5 transition-colors text-white" />
            <input
              type="text"
              aria-label={searchAria}
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/70 text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                {clearText}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlossaryHeader;
