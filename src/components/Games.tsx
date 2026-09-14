import { EVENT_DATA } from "@/data/sec";
import Link from "next/link";
import Image from "next/image";

export default function Games() {
  const games = [
    { title: "MOBILE LEGENDS", category: "SMP / SMA", color: "text-sec-yellow", bg: "bg-sec-yellow/10", border: "pixel-border-yellow", logo: "/logo_mlbb.png" },
    { title: "FREE FIRE", category: "SMP / SMA", color: "text-sec-cyan", bg: "bg-sec-cyan/10", border: "pixel-border", logo: "/logo_ff.png" },
    { title: "VALORANT", category: "SMA / SMK", color: "text-white", bg: "bg-white/10", border: "border-4 border-white", logo: "/logo_valo.png" },
  ];

  return (
    <section id="games" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-pixel text-2xl md:text-5xl text-center text-white mb-10 md:mb-16 tracking-widest leading-snug">
          <span className="text-sec-cyan">GAME</span> <br className="md:hidden" />DIVISIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game, idx) => (
            <div key={idx} className={`relative group ${game.border} bg-sec-card overflow-hidden transition-transform transform hover:-translate-y-3`}>
              {/* Background styling for aesthetic */}
              <div className={`absolute inset-0 ${game.bg} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="relative p-8 flex flex-col items-center text-center h-full">
                <div className="w-24 h-24 mb-6 bg-sec-bg flex items-center justify-center pixel-border relative overflow-hidden">
                  <Image src={game.logo} alt={`${game.title} Logo`} fill className="object-contain p-2" />
                </div>
                
                <h3 className={`font-pixel text-base md:text-xl mb-2 ${game.color}`}>{game.title}</h3>
                <p className="font-inter text-sec-textSecondary font-bold mb-8 uppercase tracking-widest text-xs md:text-sm">{game.category}</p>
                
                <div className="mt-auto">
                  <Link href="#juknis" className="px-6 py-3 border border-sec-cyan text-sec-cyan font-pixel text-xs hover:bg-sec-cyan hover:text-sec-bg transition-colors inline-block">
                    LIHAT JUKNIS
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
