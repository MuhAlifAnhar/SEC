"use client";

import { EVENT_DATA } from "@/data/sec";
import { useEffect, useState } from "react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const targetDate = new Date(EVENT_DATA.registrationDeadline).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsClosed(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sec-cyan/20 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sec-yellow/10 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="mb-4 inline-block px-4 py-1 border border-sec-cyan text-sec-cyan font-pixel text-xs bg-sec-cyan/10 animate-glow">
          INITIATING SEQUENCE...
        </div>
        
        <h1 className="font-pixel text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-widest leading-tight glitch-effect" data-text="STELK ESPORT CHAMPIONSHIP">
          STELK ESPORT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sec-cyan to-sec-yellow">CHAMPIONSHIP</span>
        </h1>
        
        <div className="font-pixel text-xl sm:text-2xl md:text-3xl text-sec-cyan mb-8 tracking-widest">
          VOL. 03
        </div>

        <p className="font-inter text-xl md:text-2xl text-sec-textSecondary font-bold mb-10 tracking-widest uppercase">
          Level Up Your Skill, <br className="md:hidden" />
          <span className="text-white">Unity In Victory</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
          <a
            href={EVENT_DATA.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-sec-yellow text-sec-bg font-pixel text-sm hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(255,216,61,0.6)]"
          >
            DAFTAR SEKARANG
          </a>
          <a
            href="#juknis"
            className="w-full sm:w-auto px-8 py-4 border-2 border-sec-cyan text-sec-cyan font-pixel text-sm hover:bg-sec-cyan/10 transition-colors"
          >
            LIHAT JUKNIS
          </a>
        </div>

        {/* Countdown */}
        <div className="mt-8 border border-sec-cyan/30 bg-sec-card/50 backdrop-blur-sm p-6 inline-block">
          <h3 className="font-pixel text-sec-cyan text-[10px] md:text-xs mb-4 uppercase">
            {isClosed ? "REGISTRATION CLOSED" : "REGISTRATION CLOSES IN"}
          </h3>
          {!isClosed && (
            <div className="flex gap-2 sm:gap-4 md:gap-8 justify-center font-pixel text-lg sm:text-2xl md:text-4xl text-white">
              <div className="flex flex-col items-center">
                <span>{timeLeft.days.toString().padStart(2, '0')}</span>
                <span className="text-[10px] text-sec-textSecondary mt-2">DAYS</span>
              </div>
              <span className="text-sec-cyan animate-pulse">:</span>
              <div className="flex flex-col items-center">
                <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="text-[10px] text-sec-textSecondary mt-2">HRS</span>
              </div>
              <span className="text-sec-cyan animate-pulse">:</span>
              <div className="flex flex-col items-center">
                <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="text-[10px] text-sec-textSecondary mt-2">MIN</span>
              </div>
              <span className="text-sec-cyan animate-pulse">:</span>
              <div className="flex flex-col items-center">
                <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="text-[10px] text-sec-textSecondary mt-2">SEC</span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 font-inter text-sec-textSecondary text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-center">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-sec-yellow rounded-full animate-ping"></span>
            {EVENT_DATA.date}
          </span>
          <span className="hidden md:block text-sec-cyan">|</span>
          <span>{EVENT_DATA.venue}</span>
        </div>
      </div>
    </section>
  );
}
