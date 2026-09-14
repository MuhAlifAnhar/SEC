"use client";

import { useState } from "react";
import { EVENT_DATA } from "@/data/sec";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-sec-bg">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="font-pixel text-2xl md:text-5xl text-center text-white mb-10 md:mb-16 tracking-widest uppercase">
          <span className="text-sec-cyan">FAQ</span>
        </h2>

        <div className="space-y-4">
          {EVENT_DATA.faq.map((item, idx) => (
            <div 
              key={idx} 
              className={`border border-sec-cyan/30 bg-sec-card transition-colors ${openIndex === idx ? 'border-sec-cyan/80 shadow-[0_0_15px_rgba(157,216,242,0.1)]' : 'hover:border-sec-cyan/50'}`}
            >
              <button
                className="w-full text-left p-4 md:p-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleOpen(idx)}
              >
                <span className="font-inter font-bold text-white text-xs md:text-base pr-4">
                  {item.q}
                </span>
                <span className={`font-pixel text-sec-cyan transform transition-transform ${openIndex === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 border-t border-sec-cyan/10">
                  <p className="font-inter text-sec-textSecondary leading-relaxed text-sm md:text-base">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
