"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { EVENT_DATA } from "@/data/sec";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const pageLinks = [
    { name: "HOME", href: "/" },
    { name: "TEAMS", href: "/teams" },
    { name: "BRACKET", href: "/bracket" },
    { name: "LIVE", href: "/live" },
    { name: "STATS", href: "/stats" },
    { name: "NEWS", href: "/news" },
    { name: "GALLERY", href: "/gallery" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-sec-bg/90 backdrop-blur-md border-b border-sec-cyan/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-12 h-12 overflow-hidden">
                <Image src="/logo_sec.png" alt="SEC Logo" fill className="object-contain" />
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-1 xl:gap-3">
            {pageLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 font-bold transition-colors font-inter tracking-wide text-xs xl:text-sm ${
                  pathname === link.href
                    ? "text-sec-cyan"
                    : "text-sec-textSecondary hover:text-sec-cyan"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={EVENT_DATA.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 bg-sec-yellow text-sec-bg font-bold font-inter text-xs xl:text-sm transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(255,216,61,0.5)] border-2 border-transparent hover:border-white"
            >
              DAFTAR
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-sec-cyan hover:text-white focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-sec-bg/95 backdrop-blur-xl absolute top-full left-0 w-full border-b border-sec-cyan/30">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {pageLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-3 text-base font-bold hover:bg-sec-card ${
                  pathname === link.href ? "text-sec-cyan" : "text-sec-textSecondary hover:text-sec-cyan"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={EVENT_DATA.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center px-3 py-3 bg-sec-yellow text-sec-bg font-bold"
            >
              DAFTAR SEKARANG
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
