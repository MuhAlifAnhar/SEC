export default function Stats() {
  return (
    <section className="py-12 border-y border-sec-cyan/20 bg-sec-bg/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="pixel-border bg-sec-card p-6 md:p-8 flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-2">
            <h3 className="font-pixel text-sec-yellow text-2xl md:text-3xl mb-2">16.5 JT</h3>
            <p className="font-inter text-white font-bold tracking-widest uppercase text-xs md:text-sm">PRIZEPOOL</p>
          </div>
          <div className="pixel-border bg-sec-card p-6 md:p-8 flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-2">
            <h3 className="font-pixel text-sec-cyan text-xl md:text-3xl mb-2">3 GAMES</h3>
            <p className="font-inter text-white font-bold tracking-widest uppercase text-xs md:text-sm">DIVISIONS</p>
          </div>
          <div className="pixel-border bg-sec-card p-6 md:p-8 flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-2">
            <h3 className="font-pixel text-white text-xl md:text-3xl mb-2">96 TEAMS</h3>
            <p className="font-inter text-sec-textSecondary font-bold tracking-widest uppercase text-xs md:text-sm">TARGET</p>
          </div>
        </div>
      </div>
    </section>
  );
}
