import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { GlossaryTerm, categoryLabels, categoryIcons } from '../data/glossaryData';
import { useLanguage } from '../../../Components/portfolio/LanguageContext';

interface GlossaryCardProps {
  term: GlossaryTerm;
  index: number;
}

const GlossaryCard = ({ term, index }: GlossaryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();

  // Defensive checks for missing or malformed term data
  if (!term || !term.term || !term.shortDefinition || !term.fullDefinition) {
    return (
      <article className="glass rounded-2xl overflow-hidden glass-hover text-white p-6">
        <h3 className="font-display text-xl md:text-2xl font-bold text-white">Término no disponible</h3>
        <p className="text-red-400">Este término está malformado o incompleto en los datos del glosario.</p>
      </article>
    );
  }

  return (
    <article
      id={term.id}
      className="glass rounded-2xl overflow-hidden glass-hover text-white"
      style={{
        opacity: 0,
        animation: `fade-in 0.5s ease-out forwards`,
        animationDelay: `${index * 0.05}s`,
      }}
      role="region"
      aria-labelledby={`term-title-${term.id}`}
    >
      {/* Main Card Content */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-5 md:p-6 flex flex-col gap-3"
        aria-expanded={isExpanded}
        aria-controls={`detail-${term.id}`}
      >
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              {/* Category Badge */}
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border category-${term.category}`}>
                {categoryIcons[term.category] || ''} {categoryLabels[term.category]?.[language] || term.category}
              </span>
              
              {/* New Badge */}
              {term.isNew && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white text-xs font-extrabold border-2 border-white shadow-lg animate-pulse">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v2m6.364 1.636l-1.414 1.414M22 12h-2m-1.636 6.364l-1.414-1.414M12 22v-2m-6.364-1.636l1.414-1.414M2 12h2m1.636-6.364l1.414 1.414" /></svg>
                  NUEVO 2026
                </span>
              )}
            </div>
            
            {/* Term Title */}
              <h3 className="font-display text-xl md:text-2xl font-bold text-white" id={`term-title-${term.id}`}>
                {term.term?.[language] || 'Sin término'}
              </h3>
          </div>
          
          {/* Expand Icon */}
          <ChevronDown 
            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 mt-1
              ${isExpanded ? 'rotate-180' : ''}
            `} 
          />
        </div>

        {/* Short Definition */}
        <p className="leading-relaxed">
          {term.shortDefinition?.[language] || 'Sin definición breve'}
        </p>
      </button>

      {/* Expandable Details */}
      <div
        id={`detail-${term.id}`}
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0">
          {/* Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-4" />
          
          {/* Full Definition */}
          <div className="space-y-4">
            <p className="leading-relaxed">
              {term.fullDefinition?.[language] || 'Sin definición completa'}
            </p>

            {/* Related Terms */}
            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-sm">Relacionados:</span>
                {term.relatedTerms.map((relatedId) => (
                  <a
                    key={relatedId}
                    href={`#${relatedId}`}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/10 text-primary text-sm hover:bg-primary/20 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {relatedId}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default GlossaryCard;
