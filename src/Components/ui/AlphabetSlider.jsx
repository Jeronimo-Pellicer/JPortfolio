import React from "react";

const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

export default function AlphabetSlider({ onLetterClick, activeLetter }) {
  return (
    <div
      className="glass-strong rounded-2xl flex items-center gap-4 py-5 px-6 w-full overflow-x-auto custom-scrollbar"
      style={{
        background:
          "linear-gradient(120deg, rgba(255, 255, 255, 0.1) 0%, rgba(30, 41, 59, 0.25) 100%)",
        backdropFilter: "blur(16px)",
      }}
    >
      {alphabet.map((letter) => (
        <button
          key={letter}
          data-letter={letter}
          className={`h-14 min-w-[3.5rem] md:h-16 md:min-w-[4rem] rounded-xl font-display font-extrabold text-2xl flex items-center justify-center transition-all duration-200 shadow-md bg-white/10 text-white hover:bg-white/30 hover:text-white cursor-pointer ${
            activeLetter === letter ? "bg-white/30 text-white" : ""
          }`}
          aria-label={`Ir a términos que empiezan con ${letter}`}
          style={{ lineHeight: 1.1 }}
          onClick={() => onLetterClick && onLetterClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
