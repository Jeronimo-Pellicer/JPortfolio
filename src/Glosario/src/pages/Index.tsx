import { useState, useMemo, useEffect } from 'react';
import { LanguageProvider } from '../../../Components/portfolio/LanguageContext';
import LanguageSwitcher from '../../../Components/portfolio/LanguageSwitcher';
import GlossaryBackground from "../components/GlossaryBackground";
import GlossaryHeader from "../components/GlossaryHeader";
import AlphabetNav from "../components/AlphabetNav";
// import CategoryFilter from "../components/CategoryFilter";
import WordOfTheDay from "../components/WordOfTheDay";
import GlossaryList from "../components/GlossaryList";
import GlossaryFooter from "../components/GlossaryFooter";
import { 
  glossaryTerms, 
  searchTerms
} from "../data/glossaryData";

import { useLanguage } from '../../../Components/portfolio/LanguageContext';

const GlosarioIndex = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  // const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const { language } = useLanguage();

  // Filter terms based on search and letter only
  const filteredTerms = useMemo(() => {
    let result = glossaryTerms;
    if (searchQuery.trim()) {
      result = searchTerms(searchQuery, language);
    }
    return result;
  }, [searchQuery, language]);

  // Handle letter click - scroll to section
  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter === activeLetter ? null : letter);
    
    // Scroll to letter section
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      const offset = 100; // Account for sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle term click from Word of the Day
  const handleTermClick = (termId: string) => {
    const element = document.getElementById(termId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Briefly highlight the card
      element.classList.add('ring-2', 'ring-primary');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-primary');
      }, 2000);
    }
  };

  // Reset letter filter when searching
  useEffect(() => {
    if (searchQuery) {
      setActiveLetter(null);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen relative">
      <GlossaryBackground />
      {/* <LanguageSwitcher className="fixed top-8 right-4 z-50" /> */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        <GlossaryHeader 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <AlphabetNav 
          activeLetter={activeLetter}
          onLetterClick={handleLetterClick}
        />
        {/* CategoryFilter removed */}
        {!searchQuery && (
          <WordOfTheDay onTermClick={handleTermClick} />
        )}
        <GlossaryList 
          terms={filteredTerms}
          activeLetter={activeLetter}
        />
        <GlossaryFooter />
      </div>
    </div>
  );
};

export default GlosarioIndex;
