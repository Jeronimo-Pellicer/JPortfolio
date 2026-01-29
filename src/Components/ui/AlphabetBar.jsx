import React from 'react';
import './AlphabetBar.css';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function AlphabetBar({ onLetterClick, activeLetter }) {
  return (
    <nav className="abc-bar glass">
      {ALPHABET.map((letter) => (
        <button
          key={letter}
          className={`abc-btn${activeLetter === letter ? ' active' : ''}`}
          aria-label={`Filtrar por ${letter}`}
          onClick={() => onLetterClick && onLetterClick(letter)}
        >
          {letter}
        </button>
      ))}
    </nav>
  );
}
