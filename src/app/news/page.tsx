"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import GameFilter from "@/components/ui/GameFilter";
import Modal from "@/components/ui/Modal";
import { NEWS, type NewsArticle } from "@/data/news";

const GAME_FILTERS = ["ALL", "Mobile Legends", "Free Fire", "Valorant"];

const categoryColors: Record<string, string> = {
  announcement: "text-sec-yellow border-sec-yellow/30 bg-sec-yellow/10",
  recap: "text-sec-cyan border-sec-cyan/30 bg-sec-cyan/10",
  update: "text-green-400 border-green-400/30 bg-green-400/10",
  highlight: "text-orange-400 border-orange-400/30 bg-orange-400/10",
};

export default function NewsPage() {
  const [activeGame, setActiveGame] = useState("ALL");
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const filteredNews = activeGame === "ALL"
    ? NEWS
    : NEWS.filter((n) => n.game === activeGame || n.game === "ALL");

  return (
    <main className="min-h-screen bg-sec-bg text-foreground">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <PageHeader title="NEWS &" highlight="UPDATES" subtitle="Berita terbaru SEC Vol. 3" />

        <GameFilter games={GAME_FILTERS} activeGame={activeGame} onSelect={setActiveGame} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-sec-card border border-sec-cyan/20 hover:border-sec-cyan/50 cursor-pointer transition-all hover:-translate-y-1 group flex flex-col"
            >
              {/* Thumbnail placeholder */}
              <div className="w-full h-40 bg-sec-bg border-b border-sec-cyan/10 flex items-center justify-center">
                <span className="font-pixel text-sec-cyan/20 text-xs">SEC NEWS</span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`font-pixel text-[8px] px-2 py-1 border uppercase tracking-widest ${categoryColors[article.category] || ""}`}>
                    {article.category}
                  </span>
                  {article.game !== "ALL" && (
                    <span className="font-pixel text-[8px] px-2 py-1 border border-sec-cyan/20 text-sec-cyan bg-sec-cyan/5 tracking-widest">
                      {article.game}
                    </span>
                  )}
                </div>

                <h3 className="font-inter font-bold text-white text-sm md:text-base mb-2 group-hover:text-sec-cyan transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="font-inter text-sec-textSecondary text-xs mb-4 line-clamp-3 flex-1">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-sec-cyan/10">
                  <span className="font-inter text-sec-textSecondary text-[10px]">{article.date}</span>
                  <span className="font-pixel text-sec-cyan text-[10px] group-hover:text-sec-yellow transition-colors tracking-widest">
                    BACA →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <p className="text-center text-sec-textSecondary font-inter py-20">Belum ada berita untuk filter ini.</p>
        )}
      </div>

      {/* Article Detail Modal */}
      <Modal isOpen={!!selectedArticle} onClose={() => setSelectedArticle(null)}>
        {selectedArticle && (
          <div className="p-6 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <span className={`font-pixel text-[8px] px-2 py-1 border uppercase tracking-widest ${categoryColors[selectedArticle.category] || ""}`}>
                {selectedArticle.category}
              </span>
              {selectedArticle.game !== "ALL" && (
                <span className="font-pixel text-[8px] px-2 py-1 border border-sec-cyan/20 text-sec-cyan tracking-widest">
                  {selectedArticle.game}
                </span>
              )}
              <span className="font-inter text-sec-textSecondary text-xs ml-auto">{selectedArticle.date}</span>
            </div>

            <h2 className="font-pixel text-base md:text-xl text-white tracking-widest mb-6 leading-relaxed">
              {selectedArticle.title}
            </h2>

            <div className="font-inter text-sec-textSecondary text-sm md:text-base leading-relaxed whitespace-pre-line">
              {selectedArticle.content}
            </div>
          </div>
        )}
      </Modal>

      <Footer />
    </main>
  );
}
