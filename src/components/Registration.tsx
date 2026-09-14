import { EVENT_DATA } from "@/data/sec";

export default function Registration() {
  const steps = [
    { num: "01", text: "Pilih Game" },
    { num: "02", text: "Bentuk Tim" },
    { num: "03", text: "Isi Google Form" },
    { num: "04", text: "Lakukan Pembayaran" },
    { num: "05", text: "Submit Bukti Pembayaran" },
    { num: "06", text: "Verifikasi Panitia" },
    { num: "07", text: "SIAP BERTANDING!" },
  ];

  return (
    <section className="py-20 relative bg-sec-bg">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="font-pixel text-2xl md:text-4xl text-white mb-6 tracking-widest uppercase leading-snug">
          READY TO ENTER <br className="hidden md:block" />
          <span className="text-sec-yellow animate-pulse">THE BATTLE?</span>
        </h2>
        
        <p className="font-inter text-sec-textSecondary text-lg md:text-xl mb-12">
          Bentuk timmu, siapkan strategi, dan buktikan siapa yang terbaik di arena SEC Vol. 3.
        </p>

        <div className="inline-block pixel-border bg-sec-card p-6 md:p-10 mb-16 relative group">
          <div className="absolute inset-0 bg-sec-cyan/5 group-hover:bg-sec-cyan/10 transition-colors"></div>
          <div className="relative z-10">
            <span className="font-inter text-sec-textSecondary text-xs sm:text-sm font-bold tracking-widest uppercase block mb-2">All Categories</span>
            <h3 className="font-pixel text-xl sm:text-2xl md:text-4xl text-white mb-6 md:mb-8">{EVENT_DATA.registrationFee}</h3>
            
            <a
              href={EVENT_DATA.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-sec-yellow text-sec-bg font-pixel text-sm md:text-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,216,61,0.6)] transition-all"
            >
              DAFTAR SEKARANG
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-pixel text-sec-cyan text-xl mb-8 uppercase">REGISTRATION FLOW</h3>
          
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                <div className="bg-sec-card border border-sec-cyan/30 p-3 md:p-4 w-full md:min-w-[200px]">
                  <span className="font-pixel text-sec-cyan text-[10px] md:text-xs block mb-1 md:mb-2">{step.num}</span>
                  <span className="font-inter font-bold text-white text-xs md:text-sm uppercase tracking-widest">{step.text}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="text-sec-textSecondary font-pixel text-xs my-2 md:my-0 md:mx-4">
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
