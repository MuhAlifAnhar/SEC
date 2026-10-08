"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import GameFilter from "@/components/ui/GameFilter";
import Modal from "@/components/ui/Modal";
import { GALLERY, type GalleryItem } from "@/data/gallery";

const GAME_FILTERS = ["ALL", "Mobile Legends", "Free Fire", "Valorant"];
const DAY_FILTERS = ["ALL", "Pre-Event", "Day 1", "Day 2", "Day 3"];

export default function GalleryPage() {
  const [activeGame, setActiveGame] = useState("ALL");
  const [activeDay, setActiveDay] = useState("ALL");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredGallery = GALLERY.filter((g) => {
    const gameMatch = activeGame === "ALL" || g.game === activeGame || g.game === "ALL";
    const dayMatch = activeDay === "ALL" || g.day === activeDay;
    return gameMatch && dayMatch;
  });

  return (
    <main className="min-h-screen bg-sec-bg text-foreground">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <PageHeader title="EVENT" highlight="GALLERY" subtitle="Dokumentasi SEC Vol. 3" />

        <GameFilter games={GAME_FILTERS} activeGame={activeGame} onSelect={setActiveGame} />

        {/* Day Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {DAY_FILTERS.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 py-2 font-inter font-bold text-xs tracking-widest border transition-all ${
                activeDay === day
                  ? "bg-sec-yellow text-sec-bg border-sec-yellow"
                  : "bg-sec-card text-sec-textSecondary border-sec-cyan/20 hover:text-white"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="relative aspect-square bg-sec-card border border-sec-cyan/20 cursor-pointer group overflow-hidden hover:border-sec-cyan/60 transition-all"
            >
              {/* Placeholder — replace with next/image when real photos are available */}
              <div className="absolute inset-0 bg-gradient-to-br from-sec-cyan/10 to-sec-yellow/5 flex items-center justify-center">
                <div className="text-center p-3">
                  <span className="font-pixel text-sec-cyan/30 text-[10px] block mb-2">📸</span>
                  <span className="font-inter text-sec-textSecondary/60 text-[10px] line-clamp-2">{item.caption}</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-sec-bg/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3">
                <p className="font-inter text-white text-xs text-center mb-2 line-clamp-2">{item.caption}</p>
                <div className="flex gap-2">
                  {item.game !== "ALL" && (
                    <span className="font-pixel text-[8px] px-2 py-1 border border-sec-cyan/30 text-sec-cyan">{item.game}</span>
                  )}
                  <span className="font-pixel text-[8px] px-2 py-1 border border-sec-yellow/30 text-sec-yellow">{item.day}</span>
                </div>
              </div>

              {/* Type Badge */}
              {item.type === "video" && (
                <div className="absolute top-2 right-2 bg-red-500 text-white font-pixel text-[8px] px-2 py-1">
                  VIDEO
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <p className="text-center text-sec-textSecondary font-inter py-20">Belum ada dokumentasi untuk filter ini.</p>
        )}
      </div>

      {/* Lightbox Modal */}
      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {selectedItem && (
          <div className="p-4 md:p-6">
            {/* Photo/Video placeholder */}
            <div className="w-full aspect-video bg-sec-bg border border-sec-cyan/20 flex items-center justify-center mb-4">
              <div className="text-center">
                <span className="font-pixel text-sec-cyan/30 text-2xl block mb-4">📸</span>
                <p className="font-inter text-sec-textSecondary text-sm">Foto akan ditampilkan di sini</p>
                <p className="font-inter text-sec-textSecondary/50 text-xs mt-1">Ganti src di gallery.ts dengan URL gambar asli</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-inter font-bold text-white text-sm">{selectedItem.caption}</p>
                <p className="font-inter text-sec-textSecondary text-xs mt-1">{selectedItem.date}</p>
              </div>
              <div className="flex gap-2">
                {selectedItem.game !== "ALL" && (
                  <span className="font-pixel text-[8px] px-2 py-1 border border-sec-cyan/30 text-sec-cyan">{selectedItem.game}</span>
                )}
                <span className="font-pixel text-[8px] px-2 py-1 border border-sec-yellow/30 text-sec-yellow">{selectedItem.day}</span>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <Footer />
    </main>
  );
}
