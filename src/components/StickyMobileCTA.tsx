import { EVENT_DATA } from "@/data/sec";

export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4 pointer-events-none">
      <div className="bg-sec-bg/95 backdrop-blur-xl border border-sec-cyan/50 p-3 shadow-[0_-5px_20px_rgba(7,20,38,0.8)] flex justify-between items-center pointer-events-auto pixel-border">
        <div className="font-pixel text-white text-sm">
          {EVENT_DATA.registrationFee}
        </div>
        <a 
          href={EVENT_DATA.googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sec-yellow text-sec-bg font-pixel text-xs px-4 py-3 active:scale-95 transition-transform"
        >
          DAFTAR
        </a>
      </div>
    </div>
  );
}
