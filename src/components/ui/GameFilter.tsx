"use client";

import { useState } from "react";

type GameFilterProps = {
  games: string[];
  activeGame: string;
  onSelect: (game: string) => void;
};

export default function GameFilter({ games, activeGame, onSelect }: GameFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12">
      {games.map((game) => (
        <button
          key={game}
          onClick={() => onSelect(game)}
          className={`px-4 sm:px-6 py-2 sm:py-3 font-pixel text-[10px] sm:text-xs tracking-widest transition-all border-2 ${
            activeGame === game
              ? "bg-sec-cyan text-sec-bg border-sec-cyan shadow-[0_0_15px_rgba(157,216,242,0.4)]"
              : "bg-sec-card text-sec-textSecondary border-sec-cyan/30 hover:border-sec-cyan/60 hover:text-white"
          }`}
        >
          {game}
        </button>
      ))}
    </div>
  );
}
