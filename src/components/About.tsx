import { EVENT_DATA } from "@/data/sec";

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-sec-bg">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sec-cyan to-transparent opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-pixel text-2xl md:text-5xl text-white mb-8 tracking-widest leading-snug">
          WHAT IS <br className="md:hidden" /><span className="text-sec-yellow">SEC?</span>
        </h2>
        
        <div className="pixel-border bg-sec-card/80 p-8 md:p-12 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sec-cyan"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sec-cyan"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sec-cyan"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sec-cyan"></div>
          
          <p className="font-inter text-lg md:text-xl text-sec-textSecondary leading-relaxed mb-10">
            {EVENT_DATA.description}
          </p>

          <div className="inline-block relative">
            <h3 className="font-pixel text-lg md:text-2xl text-sec-cyan mb-4 uppercase">
              Vol. 3
            </h3>
            <div className="flex flex-col gap-2 font-pixel text-xs md:text-base text-white tracking-widest">
              <span className="bg-sec-cyan/20 px-3 md:px-4 py-2 border border-sec-cyan/50">LEVEL UP YOUR SKILL</span>
              <span className="text-sec-yellow text-lg md:text-xl">x</span>
              <span className="bg-sec-yellow/20 px-3 md:px-4 py-2 border border-sec-yellow/50">UNITY IN VICTORY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
