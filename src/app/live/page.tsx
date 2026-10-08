"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import GameFilter from "@/components/ui/GameFilter";
import { MATCHES } from "@/data/matches";
import { getTeamById } from "@/data/teams";
import { getPlayerById } from "@/data/teams";
import { EVENT_DATA } from "@/data/sec";

const GAME_FILTERS = ["ALL", "Mobile Legends", "Free Fire", "Valorant"];

export default function LivePage() {
  const [activeGame, setActiveGame] = useState("ALL");
  const [activeStream, setActiveStream] = useState<"youtube" | "tiktok">("youtube");

  const liveMatches = MATCHES.filter((m) => m.status === "live" && (activeGame === "ALL" || m.game === activeGame));
  const upcomingMatches = MATCHES.filter((m) => m.status === "upcoming" && (activeGame === "ALL" || m.game === activeGame));
  const completedMatches = MATCHES.filter((m) => m.status === "completed" && (activeGame === "ALL" || m.game === activeGame));

  return (
    <main className="min-h-screen bg-sec-bg text-foreground">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <PageHeader title="LIVE" highlight="SCORE" subtitle="Pantau pertandingan secara langsung" />

        {/* Live Streaming Embed */}
        <div className="mb-12">
          <div className="flex justify-center gap-3 mb-6">
            <button
              onClick={() => setActiveStream("youtube")}
              className={`px-5 py-2 font-pixel text-[10px] tracking-widest border-2 transition-all flex items-center gap-2 ${
                activeStream === "youtube"
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-sec-card text-sec-textSecondary border-sec-cyan/30 hover:text-white"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.13 1 12 1 12s0 3.87.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.87 23 12 23 12s0-3.87-.46-5.58z"></path>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
              </svg>
              YOUTUBE
            </button>
            <button
              onClick={() => setActiveStream("tiktok")}
              className={`px-5 py-2 font-pixel text-[10px] tracking-widest border-2 transition-all flex items-center gap-2 ${
                activeStream === "tiktok"
                  ? "bg-black text-white border-white"
                  : "bg-sec-card text-sec-textSecondary border-sec-cyan/30 hover:text-white"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
              TIKTOK
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            {activeStream === "youtube" ? (
              <div className="relative w-full aspect-video bg-sec-card border-2 border-sec-cyan/30 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/live_stream?channel=@${EVENT_DATA.socials.youtube}`}
                  title="SEC Live Stream - YouTube"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* Fallback if no live stream */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-sec-bg/90 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-sec-cyan/30 mb-4">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.13 1 12 1 12s0 3.87.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.87 23 12 23 12s0-3.87-.46-5.58z"></path>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                  </svg>
                  <p className="font-pixel text-sec-textSecondary text-xs tracking-widest">STREAM BELUM AKTIF</p>
                  <p className="font-inter text-sec-textSecondary/60 text-xs mt-2">Live stream akan aktif saat pertandingan dimulai</p>
                  <a
                    href={`https://youtube.com/@${EVENT_DATA.socials.youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 border border-sec-cyan/30 text-sec-cyan font-pixel text-[10px] hover:bg-sec-cyan hover:text-sec-bg transition-colors pointer-events-auto"
                  >
                    BUKA YOUTUBE CHANNEL
                  </a>
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-video bg-sec-card border-2 border-sec-cyan/30 flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-sec-cyan/30 mb-4">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
                <p className="font-pixel text-sec-textSecondary text-xs tracking-widest">TIKTOK LIVE</p>
                <p className="font-inter text-sec-textSecondary/60 text-xs mt-2">Tonton live streaming via TikTok</p>
                <a
                  href={`https://tiktok.com/@${EVENT_DATA.socials.tiktok}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 border border-sec-cyan/30 text-sec-cyan font-pixel text-[10px] hover:bg-sec-cyan hover:text-sec-bg transition-colors"
                >
                  BUKA TIKTOK
                </a>
              </div>
            )}
          </div>
        </div>

        <GameFilter games={GAME_FILTERS} activeGame={activeGame} onSelect={setActiveGame} />

        {/* Live Matches */}
        {liveMatches.length > 0 && (
          <div className="mb-12">
            <h2 className="font-pixel text-sm md:text-lg text-center text-red-400 mb-6 tracking-widest flex items-center justify-center gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              SEDANG BERLANGSUNG
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {liveMatches.map((match) => {
                const teamA = getTeamById(match.teamAId);
                const teamB = getTeamById(match.teamBId);
                return (
                  <div key={match.id} className="bg-sec-card border-2 border-sec-yellow p-6 shadow-[0_0_25px_rgba(255,216,61,0.2)]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-pixel text-sec-cyan text-[10px] tracking-widest">{match.game} • {match.round}</span>
                      <span className="font-pixel text-red-400 text-[8px] animate-pulse tracking-widest">🔴 LIVE</span>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <div className="text-center flex-1">
                        <p className="font-pixel text-white text-xs md:text-sm mb-1">
                          {teamA ? `${teamA.schoolName} ${teamA.teamNameOrTag ? `(${teamA.teamNameOrTag})` : ""}` : "TBD"}
                        </p>
                        <p className="font-inter text-sec-textSecondary text-[10px]">{teamA?.educationLevel}</p>
                      </div>
                      <div className="px-4 md:px-8">
                        <p className="font-pixel text-2xl md:text-4xl text-white">
                          <span className={match.scoreA > match.scoreB ? "text-sec-yellow" : ""}>{match.scoreA}</span>
                          <span className="text-sec-textSecondary mx-2">:</span>
                          <span className={match.scoreB > match.scoreA ? "text-sec-yellow" : ""}>{match.scoreB}</span>
                        </p>
                      </div>
                      <div className="text-center flex-1">
                        <p className="font-pixel text-white text-xs md:text-sm mb-1">
                          {teamB ? `${teamB.schoolName} ${teamB.teamNameOrTag ? `(${teamB.teamNameOrTag})` : ""}` : "TBD"}
                        </p>
                        <p className="font-inter text-sec-textSecondary text-[10px]">{teamB?.educationLevel}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Upcoming Matches */}
        {upcomingMatches.length > 0 && (
          <div className="mb-12">
            <h2 className="font-pixel text-sm md:text-lg text-center text-sec-cyan mb-6 tracking-widest">
              JADWAL MENDATANG
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {upcomingMatches.map((match) => {
                const teamA = getTeamById(match.teamAId);
                const teamB = getTeamById(match.teamBId);
                return (
                  <div key={match.id} className="bg-sec-card border border-sec-cyan/20 p-5 hover:border-sec-cyan/50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-pixel text-sec-cyan text-[10px] tracking-widest">{match.game} • {match.round}</span>
                      <span className="font-inter text-sec-textSecondary text-[10px]">{match.date} • {match.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-inter font-bold text-white text-sm">
                        {teamA ? `${teamA.schoolName} ${teamA.teamNameOrTag ? `(${teamA.teamNameOrTag})` : ""}` : "TBD"}
                      </span>
                      <span className="font-pixel text-sec-textSecondary text-xs mx-4">VS</span>
                      <span className="font-inter font-bold text-white text-sm">
                        {teamB ? `${teamB.schoolName} ${teamB.teamNameOrTag ? `(${teamB.teamNameOrTag})` : ""}` : "TBD"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Completed Matches */}
        {completedMatches.length > 0 && (
          <div>
            <h2 className="font-pixel text-sm md:text-lg text-center text-sec-textSecondary mb-6 tracking-widest">
              HASIL PERTANDINGAN
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {completedMatches.map((match) => {
                const teamA = getTeamById(match.teamAId);
                const teamB = getTeamById(match.teamBId);
                const mvp = match.mvpPlayerId ? getPlayerById(match.mvpPlayerId) : null;
                return (
                  <div key={match.id} className="bg-sec-card border border-sec-cyan/10 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-pixel text-sec-cyan text-[10px] tracking-widest">{match.game} • {match.round}</span>
                      <span className="font-pixel text-green-400 text-[8px] tracking-widest">SELESAI</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex-1">
                        <p className={`font-inter font-bold text-sm ${match.scoreA > match.scoreB ? "text-sec-yellow" : "text-white"}`}>
                          {teamA ? `${teamA.schoolName} ${teamA.teamNameOrTag ? `(${teamA.teamNameOrTag})` : ""}` : "TBD"}
                        </p>
                      </div>
                      <div className="px-4">
                        <span className="font-pixel text-lg text-white">
                          {match.scoreA} <span className="text-sec-textSecondary">-</span> {match.scoreB}
                        </span>
                      </div>
                      <div className="flex-1 text-right">
                        <p className={`font-inter font-bold text-sm ${match.scoreB > match.scoreA ? "text-sec-yellow" : "text-white"}`}>
                          {teamB ? `${teamB.schoolName} ${teamB.teamNameOrTag ? `(${teamB.teamNameOrTag})` : ""}` : "TBD"}
                        </p>
                      </div>
                    </div>
                    {mvp && (
                      <div className="mt-2 pt-2 border-t border-sec-cyan/10 flex items-center gap-2">
                        <span className="font-pixel text-sec-yellow text-[8px]">⭐ MVP</span>
                        <span className="font-inter text-sec-textSecondary text-xs">{mvp.ignOrId} ({mvp.name})</span>
                      </div>
                    )}
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
