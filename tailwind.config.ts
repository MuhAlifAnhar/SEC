import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sec: {
          bg: "#071426",
          card: "#0B1F33",
          cyan: "#9DD8F2",
          yellow: "#FFD83D",
          textSecondary: "#8FA5B5",
        },
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
        "glitch": "glitch 1s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glow: {
          "from": { boxShadow: "0 0 10px #9DD8F2, 0 0 20px #9DD8F2" },
          "to": { boxShadow: "0 0 20px #9DD8F2, 0 0 30px #9DD8F2" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
