"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import GameFilter from "@/components/ui/GameFilter";
import { getTeamById, getPlayerById } from "@/data/teams";
import {
  getHeroStatsByGame,
  getPlayerStatsByGame,
  getTeamStatsByGame,
  getMvpByGame,
  type HeroStat,
} from "@/data/stats";

type GameKey = "Mobile Legends" | "Free Fire" | "Valorant";
const GAME_FILTERS: GameKey[] = ["Mobile Legends", "Free Fire", "Valorant"];
type StatTab = "team" | "player" | "hero" | "mvp";

export default function StatsPage() {
  const [activeGame, setActiveGame] = useState<string>("Mobile Legends");
  const [activeTab, setActiveTab] = useState<StatTab>("team");

  const teamStats = getTeamStatsByGame(activeGame as GameKey);
  const playerStats = getPlayerStatsByGame(activeGame as GameKey);
  const heroStats = getHeroStatsByGame(activeGame as "Mobile Legends" | "Valorant");
  const mvpStandings = getMvpByGame(activeGame as GameKey);

  const tabs: { key: StatTab; label: string }[] = [
    { key: "team", label: "TEAM STATS" },
    { key: "player", label: "PLAYER STATS" },
    ...(activeGame !== "Free Fire" ? [{ key: "hero" as StatTab, label: activeGame === "Valorant" ? "AGENT STATS" : "HERO STATS" }] : []),
    { key: "mvp", label: "MVP" },
  ];

  // Reset to "team" tab if current tab is hero and game switches to FF
  if (activeTab === "hero" && activeGame === "Free Fire") {
    setActiveTab("team");
  }

  return (
    <main className="min-h-screen bg-sec-bg text-foreground">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <PageHeader title="TOURNAMENT" highlight="STATISTICS" subtitle="Data statistik lengkap SEC Vol. 3" />

        <GameFilter games={GAME_FILTERS} activeGame={activeGame} onSelect={setActiveGame} />

        {/* Stat Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 font-pixel text-[9px] sm:text-[10px] tracking-widest border transition-all ${
                activeTab === tab.key
                  ? "bg-sec-yellow text-sec-bg border-sec-yellow"
                  : "bg-sec-card text-sec-textSecondary border-sec-cyan/20 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== TEAM STATS ==================== */}
        {activeTab === "team" && (
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b-2 border-sec-cyan/30">
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-left tracking-widest">#</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-left tracking-widest">TEAM</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-center tracking-widest">W</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-center tracking-widest">L</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-center tracking-widest">WIN%</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-center tracking-widest">KILLS</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-center tracking-widest">DEATHS</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-center tracking-widest">STREAK</th>
                </tr>
              </thead>
              <tbody>
                {teamStats.sort((a, b) => b.wins - a.wins).map((ts, idx) => {
                  const team = getTeamById(ts.teamId);
                  const winRate = ts.wins + ts.losses > 0
                    ? Math.round((ts.wins / (ts.wins + ts.losses)) * 100)
                    : 0;
                  return (
                    <tr key={ts.teamId} className="border-b border-sec-cyan/10 hover:bg-sec-cyan/5 transition-colors">
                      <td className="font-pixel text-sec-yellow text-xs py-4 px-3">{idx + 1}</td>
                      <td className="py-4 px-3">
                        <p className="font-inter font-bold text-white text-sm">{team ? `${team.schoolName} ${team.teamNameOrTag ? `(${team.teamNameOrTag})` : ""}` : "—"}</p>
                        <p className="font-inter text-sec-textSecondary text-[10px]">{team?.educationLevel}</p>
                      </td>
                      <td className="font-pixel text-green-400 text-xs py-4 px-3 text-center">{ts.wins}</td>
                      <td className="font-pixel text-red-400 text-xs py-4 px-3 text-center">{ts.losses}</td>
                      <td className="font-pixel text-white text-xs py-4 px-3 text-center">{winRate}%</td>
                      <td className="font-pixel text-white text-xs py-4 px-3 text-center">{ts.totalKills}</td>
                      <td className="font-pixel text-sec-textSecondary text-xs py-4 px-3 text-center">{ts.totalDeaths}</td>
                      <td className="py-4 px-3 text-center">
                        {ts.winStreak > 0 ? (
                          <span className="font-pixel text-sec-yellow text-xs">🔥 {ts.winStreak}</span>
                        ) : (
                          <span className="font-pixel text-sec-textSecondary text-xs">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* ==================== PLAYER STATS ==================== */}
        {activeTab === "player" && (
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto">
              <thead>
                <tr className="border-b-2 border-sec-cyan/30">
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-left tracking-widest">#</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-left tracking-widest">PLAYER</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-left tracking-widest">TEAM</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-center tracking-widest">K</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-center tracking-widest">D</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-center tracking-widest">A</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-center tracking-widest">KDA</th>
                  <th className="font-pixel text-sec-cyan text-[10px] py-3 px-3 text-center tracking-widest">MVP</th>
                </tr>
              </thead>
              <tbody>
                {playerStats.sort((a, b) => b.kills - a.kills).map((ps, idx) => {
                  const playerInfo = getPlayerById(ps.playerId);
                  const kda = ps.deaths > 0 ? ((ps.kills + ps.assists) / ps.deaths).toFixed(1) : "Perfect";
                  return (
                    <tr key={ps.playerId} className="border-b border-sec-cyan/10 hover:bg-sec-cyan/5 transition-colors">
                      <td className="font-pixel text-sec-yellow text-xs py-4 px-3">{idx + 1}</td>
                      <td className="py-4 px-3">
                        <p className="font-pixel text-white text-[10px] md:text-xs">{playerInfo?.ignOrId || "—"}</p>
                        <p className="font-inter text-sec-textSecondary text-[10px]">{playerInfo?.name}</p>
                      </td>
                      <td className="py-4 px-3">
                        <p className="font-inter text-sec-cyan text-xs font-bold">
                          {playerInfo?.team ? `${playerInfo.team.schoolName} ${playerInfo.team.teamNameOrTag ? `(${playerInfo.team.teamNameOrTag})` : ""}` : "—"}
                        </p>
                      </td>
                      <td className="font-pixel text-green-400 text-xs py-4 px-3 text-center">{ps.kills}</td>
                      <td className="font-pixel text-red-400 text-xs py-4 px-3 text-center">{ps.deaths}</td>
                      <td className="font-pixel text-sec-textSecondary text-xs py-4 px-3 text-center">{ps.assists}</td>
                      <td className="font-pixel text-white text-xs py-4 px-3 text-center">{kda}</td>
                      <td className="font-pixel text-sec-yellow text-xs py-4 px-3 text-center">{ps.mvpCount > 0 ? `⭐${ps.mvpCount}` : "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* ==================== HERO / AGENT STATS ==================== */}
        {activeTab === "hero" && activeGame !== "FF" && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {heroStats.sort((a, b) => b.pickRate - a.pickRate).map((hero) => (
                <div key={hero.name} className="bg-sec-card border border-sec-cyan/20 p-5 hover:border-sec-cyan/50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-pixel text-white text-xs md:text-sm">{hero.name}</h3>
                    <span className="font-inter text-sec-textSecondary text-[10px] font-bold uppercase tracking-widest">{hero.role}</span>
                  </div>

                  {/* Pick Rate Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="font-inter text-sec-textSecondary text-[10px] font-bold uppercase tracking-widest">PICK RATE</span>
                      <span className="font-pixel text-sec-cyan text-[10px]">{hero.pickRate}%</span>
                    </div>
                    <div className="w-full h-2 bg-sec-bg border border-sec-cyan/20">
                      <div className="h-full bg-sec-cyan transition-all" style={{ width: `${hero.pickRate}%` }}></div>
                    </div>
                  </div>

                  {/* Ban Rate Bar (Mobile Legends only) */}
                  {hero.game === "Mobile Legends" && (
                    <div className="mb-3">
                      <div className="flex justify-between mb-1">
                        <span className="font-inter text-sec-textSecondary text-[10px] font-bold uppercase tracking-widest">BAN RATE</span>
                        <span className="font-pixel text-red-400 text-[10px]">{hero.banRate}%</span>
                      </div>
                      <div className="w-full h-2 bg-sec-bg border border-red-400/20">
                        <div className="h-full bg-red-400 transition-all" style={{ width: `${hero.banRate}%` }}></div>
                      </div>
                    </div>
                  )}

                  {/* Win Rate Bar */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-inter text-sec-textSecondary text-[10px] font-bold uppercase tracking-widest">WIN RATE</span>
                      <span className="font-pixel text-sec-yellow text-[10px]">{hero.winRate}%</span>
                    </div>
                    <div className="w-full h-2 bg-sec-bg border border-sec-yellow/20">
                      <div className="h-full bg-sec-yellow transition-all" style={{ width: `${hero.winRate}%` }}></div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-sec-cyan/10 flex justify-between">
                    <span className="font-inter text-sec-textSecondary text-[10px]">Picked: {hero.totalPicked}x</span>
                    {hero.game === "Mobile Legends" && <span className="font-inter text-sec-textSecondary text-[10px]">Banned: {hero.totalBanned}x</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== MVP STANDINGS ==================== */}
        {activeTab === "mvp" && (
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {mvpStandings.map((entry, idx) => {
                const playerInfo = getPlayerById(entry.playerId);
                const isTop3 = idx < 3;
                return (
                  <div
                    key={entry.playerId}
                    className={`flex items-center gap-4 p-4 md:p-5 border transition-colors ${
                      idx === 0
                        ? "bg-sec-yellow/10 border-sec-yellow/50"
                        : idx === 1
                        ? "bg-sec-cyan/10 border-sec-cyan/30"
                        : idx === 2
                        ? "bg-orange-500/10 border-orange-500/30"
                        : "bg-sec-card border-sec-cyan/10"
                    }`}
                  >
                    {/* Rank */}
                    <div className={`w-10 h-10 flex items-center justify-center font-pixel text-sm ${
                      idx === 0 ? "text-sec-yellow" : idx === 1 ? "text-sec-cyan" : idx === 2 ? "text-orange-400" : "text-sec-textSecondary"
                    }`}>
                      {isTop3 ? ["🥇", "🥈", "🥉"][idx] : `#${idx + 1}`}
                    </div>

                    {/* Player Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-pixel text-white text-xs md:text-sm truncate">{playerInfo?.ignOrId || "—"}</p>
                      <p className="font-inter text-sec-textSecondary text-[10px] truncate">
                        {playerInfo?.name} • {playerInfo?.team ? `${playerInfo.team.schoolName} ${playerInfo.team.teamNameOrTag ? `(${playerInfo.team.teamNameOrTag})` : ""}` : "—"}
                      </p>
                    </div>

                    {/* MVP Count */}
                    <div className="text-center">
                      <p className="font-pixel text-sec-yellow text-sm md:text-lg">{entry.mvpCount}</p>
                      <p className="font-inter text-sec-textSecondary text-[8px] uppercase tracking-widest">MVP</p>
                    </div>

                    {/* Points */}
                    <div className="text-center">
                      <p className="font-pixel text-white text-sm md:text-lg">{entry.totalPoints}</p>
                      <p className="font-inter text-sec-textSecondary text-[8px] uppercase tracking-widest">PTS</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
