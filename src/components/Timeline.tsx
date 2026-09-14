import { EVENT_DATA } from "@/data/sec";

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-sec-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-sec-cyan/20 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="font-pixel text-2xl md:text-5xl text-center text-white mb-12 md:mb-16 tracking-widest uppercase leading-snug">
          EVENT <br className="md:hidden" /><span className="text-sec-cyan">TIMELINE</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-sec-cyan/20 md:hidden transform -translate-x-1/2"></div>
          
          {EVENT_DATA.timeline.map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-center w-full md:w-1/4 group">
              <div className="hidden md:block absolute top-1/2 left-1/2 w-full h-px bg-sec-cyan group-hover:bg-sec-yellow transition-colors -z-10 transform -translate-y-1/2"></div>
              
              <div className="mb-4 md:mb-8 bg-sec-bg px-4 py-2 border-2 border-sec-cyan text-sec-cyan font-pixel text-xs sm:text-sm md:text-base whitespace-nowrap group-hover:border-sec-yellow group-hover:text-sec-yellow transition-colors z-10 bg-sec-bg shadow-[0_0_10px_rgba(157,216,242,0.2)]">
                {item.date}
              </div>
              
              <div className="w-4 h-4 bg-sec-cyan rotate-45 mb-4 md:mb-8 group-hover:bg-sec-yellow transition-colors group-hover:shadow-[0_0_10px_rgba(255,216,61,0.8)] z-10 relative">
                <div className="absolute inset-0 bg-sec-bg m-[2px]"></div>
              </div>
              
              <div className="text-center bg-sec-card/80 p-3 md:p-4 border border-sec-cyan/20 w-full z-10">
                <h4 className="font-inter font-bold text-white uppercase tracking-widest text-sm md:text-base">{item.event}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center flex flex-col items-center justify-center border border-sec-cyan/30 bg-sec-card/50 p-6 max-w-2xl mx-auto">
          <span className="font-pixel text-sec-yellow text-sm mb-4">VENUE</span>
          <span className="font-inter text-xl text-white font-bold tracking-widest uppercase">{EVENT_DATA.venue}</span>
        </div>
      </div>
    </section>
  );
}
