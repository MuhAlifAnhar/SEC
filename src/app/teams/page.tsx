"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import GameFilter from "@/components/ui/GameFilter";
import Modal from "@/components/ui/Modal";
import { TEAMS, Team } from "@/data/teams";

const GAME_FILTERS = ["MLBB SMA", "MLBB SMP", "Free Fire", "Valorant"];

export default function TeamsPage() {
  const [activeGame, setActiveGame] = useState("MLBB SMA");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const filteredTeams = TEAMS.filter((t) => {
    if (activeGame === "MLBB SMA") return t.game === "Mobile Legends" && t.educationLevel === "SMA/SMK";
    if (activeGame === "MLBB SMP") return t.game === "Mobile Legends" && t.educationLevel === "SMP";
    if (activeGame === "Free Fire") return t.game === "Free Fire";
    if (activeGame === "Valorant") return t.game === "Valorant";
    return false;
  });

  return (
    <main className="min-h-screen bg-sec-bg text-foreground">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <PageHeader title="TEAM" highlight="PROFILES" subtitle="Profil tim & pemain SEC Vol. 3" />

        <GameFilter games={GAME_FILTERS} activeGame={activeGame} onSelect={setActiveGame} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeams.map((team) => (
            <div
              key={team.id}
              onClick={() => setSelectedTeam(team)}
              className="bg-sec-card border border-sec-cyan/20 hover:border-sec-cyan/60 p-6 cursor-pointer transition-all hover:-translate-y-2 group"
            >
              {/* Team Logo Placeholder */}
              <div className="w-20 h-20 mx-auto mb-4 bg-sec-bg border-2 border-sec-cyan/30 flex items-center justify-center group-hover:border-sec-cyan transition-colors">
                <span className="font-pixel text-sec-cyan text-[10px]">{team.game}</span>
              </div>

              <h3 className="font-pixel text-sm md:text-base text-white text-center mb-2 group-hover:text-sec-cyan transition-colors">
                {team.schoolName} {team.teamNameOrTag ? `(${team.teamNameOrTag})` : ""}
              </h3>
              <p className="font-inter text-sec-textSecondary text-xs text-center font-bold uppercase tracking-widest mb-1">
                {team.game}
              </p>
              <p className="font-inter text-sec-cyan/60 text-[10px] text-center font-bold uppercase tracking-widest">
                {team.educationLevel}
              </p>

              <div className="mt-4 flex justify-center gap-1">
                {team.roster.map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-sec-cyan/30 group-hover:bg-sec-cyan transition-colors"></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredTeams.length === 0 && (
          <p className="text-center text-sec-textSecondary font-inter py-20">Belum ada tim terdaftar untuk game ini.</p>
        )}
      </div>

      {/* Team Detail Modal */}
      <Modal isOpen={!!selectedTeam} onClose={() => setSelectedTeam(null)}>
        {selectedTeam && (
          <div className="p-6 md:p-10">
            <div className="flex flex-col items-center mb-8">
              <div className="w-24 h-24 bg-sec-bg border-2 border-sec-cyan/50 flex items-center justify-center mb-4">
                <span className="font-pixel text-sec-cyan text-xs">{selectedTeam.game}</span>
              </div>
              <h2 className="font-pixel text-xl md:text-2xl text-white tracking-widest text-center">
                {selectedTeam.schoolName} {selectedTeam.teamNameOrTag ? `(${selectedTeam.teamNameOrTag})` : ""}
              </h2>
              <p className="font-inter text-sec-textSecondary text-sm font-bold mt-2">{selectedTeam.game}</p>
              <div className="flex gap-3 mt-3">
                <span className="px-3 py-1 bg-sec-cyan/10 border border-sec-cyan/30 text-sec-cyan font-pixel text-[10px]">
                  {selectedTeam.game}
                </span>
                <span className="px-3 py-1 bg-sec-yellow/10 border border-sec-yellow/30 text-sec-yellow font-pixel text-[10px]">
                  {selectedTeam.educationLevel}
                </span>
              </div>
            </div>

            <h3 className="font-pixel text-sec-cyan text-xs mb-4 uppercase tracking-widest text-center">
              ⚔ ROSTER
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedTeam.roster.map((player, idx) => (
                <div key={idx} className="bg-sec-bg border border-sec-cyan/20 p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-sec-card border border-sec-cyan/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-pixel text-[8px] text-sec-textSecondary">
                      {player.ignOrId ? player.ignOrId.slice(0, 2).toUpperCase() : "?"}
                    </span>
                  </div>
                  <div>
                    <p className="font-pixel text-white text-[10px] md:text-xs">{player.ignOrId}</p>
                    <p className="font-inter text-sec-textSecondary text-xs">{player.name}</p>
                    <p className="font-inter text-sec-cyan text-[10px] font-bold uppercase tracking-widest">{player.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>

      <Footer />
    </main>
  );
}
