import { EVENT_DATA } from "@/data/sec";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative bg-[#050d1a] border-t border-sec-cyan/20">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="font-pixel text-2xl md:text-5xl text-center text-white mb-4 tracking-widest uppercase leading-snug">
          <span className="text-sec-cyan">CONTACT</span> US
        </h2>
        <p className="font-inter text-center text-sec-textSecondary mb-10 md:mb-16 uppercase tracking-widest font-bold text-xs md:text-base">
          HUBUNGI PANITIA UNTUK INFORMASI LEBIH LANJUT
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENT_DATA.contacts.map((contact, idx) => (
            <div key={idx} className="bg-sec-card pixel-border p-6 text-center hover:-translate-y-2 transition-transform">
              <h3 className="font-pixel text-sec-cyan text-sm mb-4 uppercase">
                {contact.game}
              </h3>
              <p className="font-inter font-bold text-white text-lg mb-2">
                {contact.name}
              </p>
              <a 
                href={`https://wa.me/${contact.wa}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-pixel text-xs text-sec-yellow hover:text-white transition-colors"
              >
               {contact.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
