"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import GameFilter from "@/components/ui/GameFilter";
import { MATCHES } from "@/data/matches";
import { STANDINGS, getStandingsByGame } from "@/data/standings";
import { getTeamById } from "@/data/teams";

type GameKey = "Mobile Legends" | "Free Fire" | "Valorant";
const GAME_FILTERS: GameKey[] = ["Mobile Legends", "Free Fire", "Valorant"];
type TabKey = "bracket" | "standings";

export default function BracketPage() {
  const [activeGame, setActiveGame] = useState<string>("Mobile Legends");
  const [activeTab, setActiveTab] = useState<TabKey>("bracket");

  const gameMatches = MATCHES.filter((m) => m.game === activeGame);
  const gameStandings = getStandingsByGame(activeGame as GameKey);

  // Group matches by round
  const rounds = Array.from(new Set(gameMatches.map((m) => m.round)));

  return (
    <main className="min-h-screen bg-sec-bg text-foreground">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <PageHeader title="BRACKET &" highlight="STANDINGS" subtitle="Tournament bracket & klasemen" />

        <GameFilter games={GAME_FILTERS} activeGame={activeGame} onSelect={setActiveGame} />

        {/* Tab Toggle */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("bracket")}
            className={`px-6 py-3 font-pixel text-xs tracking-widest border-2 transition-all ${
              activeTab === "bracket"
                ? "bg-sec-yellow text-sec-bg border-sec-yellow"
                : "bg-sec-card text-sec-textSecondary border-sec-cyan/30 hover:text-white"
            }`}
          >
            BRACKET
          </button>
          <button
            onClick={() => setActiveTab("standings")}
            className={`px-6 py-3 font-pixel text-xs tracking-widest border-2 transition-all ${
              activeTab === "standings"
                ? "bg-sec-yellow text-sec-bg border-sec-yellow"
                : "bg-sec-card text-sec-textSecondary border-sec-cyan/30 hover:text-white"
            }`}
          >
            KLASEMEN
          </button>
        </div>

        {/* Bracket View */}
        {activeTab === "bracket" && (
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-8 md:gap-16 min-w-[600px] justify-center">
              {rounds.map((round, roundIdx) => {
                const roundMatches = gameMatches.filter((m) => m.round === round);
                return (
                  <div key={round} className="flex flex-col items-center">
                    <h3 className="font-pixel text-sec-cyan text-[10px] md:text-xs mb-6 uppercase tracking-widest">
                      {round}
                    </h3>
                    <div className="flex flex-col gap-6 justify-center flex-1">
                      {roundMatches.map((match) => {
                        const teamA = getTeamById(match.teamAId);
                        const teamB = getTeamById(match.teamBId);
                        const isLive = match.status === "live";
                        const isCompleted = match.status === "completed";

                        return (
                          <div
                            key={match.id}
                            className={`bg-sec-card border-2 p-4 min-w-[220px] md:min-w-[280px] relative ${
                              isLive
                                ? "border-sec-yellow shadow-[0_0_20px_rgba(255,216,61,0.3)] animate-pulse"
                                : "border-sec-cyan/30"
                            }`}
                          >
                            {isLive && (
                              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white font-pixel text-[8px] px-3 py-1 tracking-widest animate-pulse">
                                🔴 LIVE
                              </span>
                            )}

                            {/* Team A */}
                            <div className={`flex items-center justify-between py-2 ${isCompleted && match.scoreA > match.scoreB ? "text-sec-yellow" : "text-white"}`}>
                              <span className="font-inter font-bold text-xs md:text-sm truncate max-w-[150px]">
                                {teamA ? `${teamA.schoolName} ${teamA.teamNameOrTag ? `(${teamA.teamNameOrTag})` : ""}` : "TBD"}
                              </span>
                              <span className="font-pixel text-sm md:text-lg ml-4">{match.scoreA}</span>
                            </div>

                            <div className="border-t border-sec-cyan/20"></div>

                            {/* Team B */}
                            <div className={`flex items-center justify-between py-2 ${isCompleted && match.scoreB > match.scoreA ? "text-sec-yellow" : "text-white"}`}>
                              <span className="font-inter font-bold text-xs md:text-sm truncate max-w-[150px]">
                                {teamB ? `${teamB.schoolName} ${teamB.teamNameOrTag ? `(${teamB.teamNameOrTag})` : ""}` : "TBD"}
                              </span>
                              <span className="font-pixel text-sm md:text-lg ml-4">{match.scoreB}</span>
                            </div>

                            <div className="mt-2 pt-2 border-t border-sec-cyan/10 flex justify-between items-center">
                              <span className="font-inter text-sec-textSecondary text-[10px]">
                                {match.date} • {match.time}
                              </span>
                              <span className={`font-pixel text-[8px] px-2 py-1 uppercase tracking-widest ${
                                isLive ? "text-red-400" :
                                isCompleted ? "text-green-400" :
                                "text-sec-textSecondary"
                              }`}>
                                {match.status}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Standings Table */}
        {activeTab === "standings" && (
          <div className="space-y-10">
            {gameStandings.map((standing, sIdx) => (
              <div key={sIdx}>
                <h3 className="font-pixel text-sec-yellow text-xs mb-4 uppercase tracking-widest text-center">
                  {standing.category}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full max-w-3xl mx-auto">
                    <thead>
                      <tr className="border-b-2 border-sec-cyan/30">
                        <th className="font-pixel text-sec-cyan text-[10px] py-3 px-4 text-left tracking-widest">#</th>
                        <th className="font-pixel text-sec-cyan text-[10px] py-3 px-4 text-left tracking-widest">TEAM</th>
                        <th className="font-pixel text-sec-cyan text-[10px] py-3 px-4 text-center tracking-widest">W</th>
                        <th className="font-pixel text-sec-cyan text-[10px] py-3 px-4 text-center tracking-widest">L</th>
                        <th className="font-pixel text-sec-cyan text-[10px] py-3 px-4 text-center tracking-widest">PTS</th>
                        <th className="font-pixel text-sec-cyan text-[10px] py-3 px-4 text-center tracking-widest">DIFF</th>
                      </tr>
                    </thead>
                    <tbody>
                      {standing.entries.map((entry, idx) => {
                        const team = getTeamById(entry.teamId);
                        return (
                          <tr key={entry.teamId} className="border-b border-sec-cyan/10 hover:bg-sec-cyan/5 transition-colors">
                            <td className="font-pixel text-sec-yellow text-xs py-4 px-4">{idx + 1}</td>
                            <td className="py-4 px-4">
                              <p className="font-inter font-bold text-white text-sm">
                                {team ? `${team.schoolName} ${team.teamNameOrTag ? `(${team.teamNameOrTag})` : ""}` : "—"}
                              </p>
                              <p className="font-inter text-sec-textSecondary text-xs">{team?.educationLevel || ""}</p>
                            </td>
                            <td className="font-pixel text-green-400 text-xs py-4 px-4 text-center">{entry.wins}</td>
                            <td className="font-pixel text-red-400 text-xs py-4 px-4 text-center">{entry.losses}</td>
                            <td className="font-pixel text-white text-sm py-4 px-4 text-center">{entry.points}</td>
                            <td className="font-pixel text-sec-cyan text-xs py-4 px-4 text-center">{entry.roundDiff}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
