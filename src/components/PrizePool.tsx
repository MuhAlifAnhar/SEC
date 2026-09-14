import { EVENT_DATA } from "@/data/sec";

export default function PrizePool() {
  return (
    <section id="prize" className="py-20 relative bg-[#050d1a] border-y border-sec-yellow/30">
      {/* Pixelated background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#FFD83D 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        <h2 className="font-pixel text-2xl md:text-5xl text-white mb-6 md:mb-4 tracking-widest uppercase leading-snug">
          FIGHT FOR THE <br className="md:hidden" /><span className="text-sec-yellow animate-pulse">PRIZE</span>
        </h2>
        
        <div className="inline-block bg-sec-card pixel-border-yellow px-6 md:px-12 py-4 md:py-6 mb-12 md:mb-16 transform hover:scale-105 transition-transform">
          <p className="font-inter text-sec-textSecondary font-bold text-sm md:text-lg mb-2 uppercase tracking-widest">TOTAL PRIZE POOL</p>
          <h3 className="font-pixel text-2xl sm:text-4xl md:text-6xl text-sec-yellow drop-shadow-[0_0_15px_rgba(255,216,61,0.5)]">
            {EVENT_DATA.prizePool}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENT_DATA.divisions.map((div, idx) => (
            <div key={idx} className="bg-sec-bg border border-sec-cyan/30 p-6 flex flex-col items-center hover:border-sec-yellow/50 transition-colors group">
              <div className="text-sec-cyan font-inter font-bold tracking-widest text-sm mb-2 group-hover:text-sec-yellow transition-colors">
                {div.game}
              </div>
              <div className="font-pixel text-white text-sm md:text-lg mb-4">
                {div.category}
              </div>
              <div className="mt-auto font-pixel text-sec-yellow text-base md:text-xl group-hover:animate-pulse">
                {div.prize}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
