import { EVENT_DATA } from "@/data/sec";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-sec-bg border-t-2 border-sec-cyan relative pt-16 pb-24 md:pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg h-px bg-sec-yellow opacity-50 shadow-[0_0_20px_rgba(255,216,61,0.8)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 mb-8 bg-sec-card flex items-center justify-center pixel-border animate-float overflow-hidden relative">
          <Image src="/logo_sec.png" alt="SEC Logo" fill className="object-contain p-2" />
        </div>
        
        <h2 className="font-pixel text-xl md:text-2xl text-white text-center mb-2 tracking-widest uppercase">
          {EVENT_DATA.name}
        </h2>
        <p className="font-pixel text-sec-cyan text-sm mb-12 text-center uppercase">
          2026
        </p>

        <p className="font-inter text-sec-yellow font-bold tracking-[0.2em] uppercase text-center mb-12 text-lg">
          Level Up Your Skill,<br />
          Unity In Victory
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
          <div className="text-center">
            <h4 className="font-pixel text-sec-cyan text-[10px] mb-4 uppercase">FOLLOW THE BATTLE</h4>
            <div className="flex gap-4 justify-center">
              <a 
                href={`https://instagram.com/${EVENT_DATA.socials.instagramEvent}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sec-card border border-sec-cyan/50 flex items-center justify-center text-white hover:border-sec-yellow hover:text-sec-yellow transition-colors"
              >
                IG
              </a>
              <a 
                href={`https://instagram.com/${EVENT_DATA.socials.instagramOrg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sec-card border border-sec-cyan/50 flex items-center justify-center text-white hover:border-sec-yellow hover:text-sec-yellow transition-colors"
              >
                ORG
              </a>
              <a 
                href={`https://tiktok.com/@${EVENT_DATA.socials.tiktok}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sec-card border border-sec-cyan/50 flex items-center justify-center text-white hover:border-sec-yellow hover:text-sec-yellow transition-colors"
              >
                TT
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sec-cyan/20 w-full pt-8 text-center">
          <p className="font-inter text-sec-textSecondary text-xs tracking-widest">
            © 2026 STELK E-SPORT CHAMPIONSHIP<br />
            SMK TELKOM MAKASSAR
          </p>
        </div>
      </div>
    </footer>
  );
}
