import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pixel = Press_Start_2P({
  weight: "400",
  variable: "--font-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STELK E-Sport Championship 2026 | SEC Vol. 3",
  description: "STELK E-Sport Championship Vol. 3 2026 merupakan kompetisi e-sports pelajar di Makassar dengan cabang Mobile Legends, Free Fire, dan VALORANT. Daftar sekarang dan raih prize pool Rp15 juta.",
  keywords: "STELK E-Sport Championship, SEC 2026, SEC Vol 3, Esport Makassar, Turnamen MLBB Makassar, Turnamen Free Fire Makassar, Turnamen Valorant Makassar, Esport pelajar Makassar, SMK Telkom Makassar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${pixel.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
