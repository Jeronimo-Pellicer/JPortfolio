
import React from "react";
import GlossaryList from "../components/GlossaryList";
import AlphabetNav from "../components/AlphabetNav";
import { glossaryTerms } from "../data/glossaryData";

export default function GlossaryMarketing() {
  const [activeLetter, setActiveLetter] = React.useState<string | null>(null);
  return (
    <div className="container mx-auto px-2 md:px-6 py-6">
      <h1 className="text-3xl font-bold mb-4 text-violet-600">Glosario de Marketing Digital</h1>
      <p className="text-zinc-400 mb-6">Términos clásicos y tendencias de marketing digital en 2026.</p>
      <div className="flex gap-6">
        {/* Sidebar - glassmorphism visible and centered */}
        <aside className="sticky top-8 h-fit min-w-[180px] max-w-[200px] z-20 flex flex-col items-center justify-center">
          <div className="glass-strong flex flex-col items-center justify-center gap-2 rounded-2xl p-6 border border-white/10 shadow-2xl min-h-[520px] w-full">
            <AlphabetNav activeLetter={activeLetter} onLetterClick={setActiveLetter} vertical={true} />
          </div>
        </aside>
        {/* Main glossary content */}
        <main className="flex-1">
          <GlossaryList terms={glossaryTerms} activeLetter={activeLetter} />
        </main>
      </div>
    </div>
  );
}
