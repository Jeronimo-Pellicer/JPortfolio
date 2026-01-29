
import { useMemo } from 'react';
import GlossaryCard from './GlossaryCard';
import { GlossaryTerm, alphabet, getTermsByLetter } from '../data/glossaryData';
import { useLanguage } from '../../../Components/portfolio/LanguageContext';

interface GlossaryListProps {
  terms: GlossaryTerm[];
  activeLetter: string | null;
}


const GlossaryList = ({ terms, activeLetter }: GlossaryListProps) => {
  const { language } = useLanguage();
  // Group terms by first letter of the translated term
  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    console.log('[GlossaryList] terms:', terms);
    terms.forEach(term => {
      const t = term.term?.[language];
      if (!t || typeof t !== 'string' || !t.length) return;
      const firstLetter = t[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(term);
    });
    // Sort terms within each group by translated name
    Object.keys(groups).forEach(letter => {
      groups[letter].sort((a, b) => {
        const ta = a.term?.[language] || '';
        const tb = b.term?.[language] || '';
        return ta.localeCompare(tb);
      });
    });
    console.log('[GlossaryList] groupedTerms:', groups);
    return groups;
  }, [terms, language]);

  // Get sorted letters that have terms
  const sortedLetters = alphabet.filter(letter => groupedTerms[letter]?.length > 0);

  // Filter to show only active letter if one is selected
  const lettersToShow = activeLetter 
    ? sortedLetters.filter(l => l === activeLetter)
    : sortedLetters;

  const noResultsText = language === 'es'
    ? 'No se encontraron términos que coincidan con tu búsqueda.'
    : 'No terms matching your search were found.';

  if (terms.length === 0) {
    return (
      <div className="px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="glass rounded-2xl p-8">
            <p className="text-white text-lg">
              {noResultsText}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 pb-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {lettersToShow.map((letter) => (
          <section key={letter} id={`letter-${letter}`}>
            {/* Letter Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl glass-strong">
                <span className="font-display text-3xl font-bold text-gradient">
                  {letter}
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-foreground/20 to-transparent" />
              <span className="text-white text-sm">
                {groupedTerms[letter].length} términos
              </span>
            </div>

            {/* Terms Grid */}
            <div className="grid gap-4 md:grid-cols-2">
              {groupedTerms[letter].map((term, index) => (
                <GlossaryCard key={term.id} term={term} index={index} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default GlossaryList;
