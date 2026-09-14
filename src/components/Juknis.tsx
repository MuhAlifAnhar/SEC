import { EVENT_DATA } from "@/data/sec";
import Link from "next/link";

export default function Juknis() {
  return (
    <section id="juknis" className="py-20 relative bg-[#050d1a] border-t border-sec-cyan/20">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="font-pixel text-2xl md:text-5xl text-center text-white mb-4 tracking-widest uppercase leading-snug">
          GAME <br className="md:hidden" /><span className="text-sec-cyan">RULEBOOK</span>
        </h2>
        <p className="font-inter text-center text-sec-textSecondary mb-10 md:mb-16 uppercase tracking-widest font-bold text-xs md:text-base">
          DOWNLOAD PETUNJUK TEKNIS (JUKNIS)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EVENT_DATA.divisions.map((div, idx) => (
            <div key={idx} className="bg-sec-card pixel-border p-6 flex flex-col justify-between group hover:border-sec-cyan/80 transition-colors">
              <div className="flex items-start justify-between mb-6 md:mb-8">
                <div>
                  <h3 className="font-pixel text-base md:text-lg text-white mb-2 flex items-center gap-2">
                    <span className="text-sec-cyan">⚔</span> {div.game}
                  </h3>
                  <p className="font-inter font-bold text-sec-textSecondary tracking-widest uppercase text-xs md:text-sm">
                    {div.category}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={div.juknisUrl}
                  target="_blank"
                  className="flex-1 text-center py-3 bg-sec-cyan/10 border border-sec-cyan text-sec-cyan font-pixel text-[10px] hover:bg-sec-cyan hover:text-sec-bg transition-colors"
                >
                  VIEW JUKNIS
                </Link>
                <Link
                  href={div.juknisUrl}
                  download
                  target="_blank"
                  className="flex-1 text-center py-3 bg-sec-bg border border-sec-cyan/30 text-white font-pixel text-[10px] hover:bg-white hover:text-sec-bg transition-colors"
                >
                  DOWNLOAD PDF
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
