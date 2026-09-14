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
                title="Event Instagram"
                className="w-10 h-10 bg-sec-card border border-sec-cyan/50 flex items-center justify-center text-white hover:border-sec-yellow hover:text-sec-yellow transition-colors group relative"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sec-card border border-sec-cyan/50 text-[10px] font-pixel text-sec-cyan px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">EVENT IG</span>
              </a>
              <a 
                href={`https://instagram.com/${EVENT_DATA.socials.instagramOrg}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Organization Instagram"
                className="w-10 h-10 bg-sec-card border border-sec-cyan/50 flex items-center justify-center text-white hover:border-sec-yellow hover:text-sec-yellow transition-colors group relative"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sec-card border border-sec-cyan/50 text-[10px] font-pixel text-sec-cyan px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">ORG IG</span>
              </a>
              <a 
                href={`https://tiktok.com/@${EVENT_DATA.socials.tiktok}`}
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
                className="w-10 h-10 bg-sec-card border border-sec-cyan/50 flex items-center justify-center text-white hover:border-sec-yellow hover:text-sec-yellow transition-colors group relative"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sec-card border border-sec-cyan/50 text-[10px] font-pixel text-sec-cyan px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">TIKTOK</span>
              </a>
              <a 
                href={`https://youtube.com/@${EVENT_DATA.socials.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="w-10 h-10 bg-sec-card border border-sec-cyan/50 flex items-center justify-center text-white hover:border-sec-yellow hover:text-sec-yellow transition-colors group relative"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.13 1 12 1 12s0 3.87.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.87 23 12 23 12s0-3.87-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sec-card border border-sec-cyan/50 text-[10px] font-pixel text-sec-cyan px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">YOUTUBE</span>
              </a>
              <a 
                href={`mailto:${EVENT_DATA.socials.email}`}
                title="Email"
                className="w-10 h-10 bg-sec-card border border-sec-cyan/50 flex items-center justify-center text-white hover:border-sec-yellow hover:text-sec-yellow transition-colors group relative"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sec-card border border-sec-cyan/50 text-[10px] font-pixel text-sec-cyan px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">EMAIL</span>
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
