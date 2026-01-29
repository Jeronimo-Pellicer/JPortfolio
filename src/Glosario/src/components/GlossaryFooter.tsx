import { Heart, ArrowUp } from 'lucide-react';

const GlossaryFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 px-4 md:px-8 pb-24 md:pb-8">
      {/* Desktop: normal footer, Mobile: sticky button */}
      <div className="max-w-6xl mx-auto flex justify-center">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl glass-hover text-white hover:text-white transition-colors bg-white/10 fixed inset-x-0 bottom-4 mx-auto z-50 w-[90vw] max-w-xs shadow-lg md:static md:w-auto md:max-w-none md:bottom-auto md:inset-x-auto md:mx-0"
        >
          <ArrowUp className="w-4 h-4 text-white" />
          <span className="text-sm text-white">Volver arriba</span>
        </button>
      </div>
    </footer>
  );
};

export default GlossaryFooter;
