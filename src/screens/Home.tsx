import React, { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaFacebook, FaTiktok } from "react-icons/fa";
import CrystalBackground from "../components/CrystalBackground";
import { useTheme } from "../components/ThemeContext";

const OptimizedBackground = memo(CrystalBackground);

export default function Home() {
  const { isLit, toggleTheme } = useTheme();

  const theme = isLit
    ? {
        text: "text-slate-900",
        accent: "text-pink-500",
        card: "bg-white text-black border-black shadow-[14px_14px_0px_rgba(0,0,0,.18)]",
        heading:
          "bg-gradient-to-l from-pink-400 via-rose-400 to-slate-900 bg-clip-text text-transparent",
        bg: "bg-slate-50",
        buttonInner: "bg-white/95 text-slate-900",
        rainbow:
          "conic-gradient(from 0deg, #ec4899, #f43f5e, #fbbf24, #ffffff, #ec4899)",
        bgOpacity: "opacity-80",
        portraitBorder:
          "drop-shadow(0 0 2px rgba(0,0,0,0.1)) drop-shadow(0 0 10px rgba(0,0,0,0.05))",
      }
    : {
        text: "text-white",
        accent: "text-cyan-400",
        card: "bg-white/95 text-black border-black shadow-[14px_14px_0px_rgba(0,0,0,1)]",
        heading:
          "bg-gradient-to-l from-cyan-300 via-white to-slate-100 bg-clip-text text-transparent",
        bg: "bg-[#020617]",
        buttonInner: "bg-black/90 text-white",
        rainbow:
          "conic-gradient(from 0deg, #0891b2, #22d3ee, #818cf8, #4f46e5, #0891b2)",
        bgOpacity: "opacity-40",
        portraitBorder: "drop-shadow(0 0 2px rgba(255,255,255,0.2))",
      };

  return (
    <div
      className={`min-h-screen relative flex items-center justify-center p-6 overflow-hidden transition-colors duration-700 ${theme.bg}`}
    >
      {/* LAYER BACKGROUND */}
      <div
        className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-700 ${theme.bgOpacity}`}
      >
        <OptimizedBackground isLit={isLit} />
      </div>

      <div
        className={`relative z-20 w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-700 ${theme.text}`}
      >
        {/* LEFT SECTION */}
        <div className="flex-1 text-center md:text-right space-y-6 order-2 md:order-1">
          <h2 className="text-xs uppercase tracking-[0.55em] font-mono opacity-50 font-bold transition-opacity duration-700">
            QC/QA ENGINEER • SDET
          </h2>
          <h1 className="text-4xl lg:text-7xl font-black leading-tight uppercase transition-all duration-700">
            <span className={theme.heading}>
              LE HUYNH <br /> ANH TUYET
            </span>
          </h1>
          <p className="text-sm italic max-w-sm md:ml-auto leading-relaxed opacity-70">
            "Combining Fullstack expertise with a QA mindset to engineer
            high-quality, resilient software solutions.
          </p>
        </div>

        {/* CENTER SECTION - PORTRAIT */}
        <div className="relative flex justify-center z-30 order-1 md:order-2 px-10">
          {/* SWITCH: MODE */}
          <div className="absolute top-0 right-0 translate-x-10 -translate-y-8 z-[9999]">
            <motion.div
              className="flex flex-col items-center cursor-pointer"
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-20 h-20 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isLit ? "sun" : "moon"}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className={`w-14 h-14 rounded-full border border-white/20 shadow-xl relative transition-all duration-700 ${isLit ? "bg-gradient-to-tr from-orange-400 to-yellow-200 shadow-yellow-400/50" : "bg-gradient-to-tr from-slate-900 to-cyan-800"}`}
                  >
                    {!isLit && (
                      <div className="absolute inset-0 overflow-hidden rounded-full">
                        <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-black/20" />
                        <div className="absolute bottom-3 right-4 w-2 h-2 rounded-full bg-black/20" />
                      </div>
                    )}
                    {isLit && (
                      <div className="absolute inset-0 rounded-full bg-yellow-100/30 blur-md animate-pulse" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              <span
                className={`text-[9px] font-black tracking-widest ${theme.accent}`}
              >
                SWITCH
              </span>
            </motion.div>
          </div>

          {/* PORTRAIT - OPTIMIZED SHARPNESS */}
          <div
            className="relative w-[280px] h-[420px] lg:w-[350px] lg:h-[520px] transition-all duration-700 transform-gpu"
            style={{ filter: theme.portraitBorder }}
          >
            <div
              className="absolute inset-0 z-20 overflow-hidden shadow-2xl transform-gpu"
              style={{
                clipPath: "url(#beachGirl)",
                backgroundColor: isLit ? "#ffffff" : "#1e293b",
              }}
            >
              <img
                src="src\assets\home.png"
                alt="Portrait"
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  transform: "translateZ(0) scale(1.02)",
                  filter: isLit
                    ? "contrast(1.05) brightness(1.05)"
                    : "brightness(0.75) contrast(1.1)",
                }}
              />
            </div>
          </div>

          {/* NAME CARD */}
          <div className="absolute top-[45%] -right-8 z-50 rotate-6 transform-gpu transition-all hover:rotate-0 hover:scale-105">
            <div
              className={`p-5 border-2 border-black min-w-[190px] transition-all duration-700 ${theme.card}`}
            >
              <h4
                className={`text-[10px] font-black uppercase tracking-[0.4em] ${theme.accent}`}
              >
                SDET • ART
              </h4>
              <p className="text-5xl font-black italic uppercase leading-none">
                Tuyet
              </p>
              <div className="mt-4 h-[2px] bg-black/10" />
              <p className="text-[9px] mt-2 opacity-60 tracking-widest uppercase">
                © PORTFOLIO 2026
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 flex flex-col items-center md:items-start space-y-8 order-3 md:ml-12">
          <div className="space-y-1 text-center md:text-left">
            <h3
              className={`text-xl font-mono font-bold uppercase transition-colors duration-700 ${theme.accent}`}
            >
              Fullstack Testing
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] opacity-50">
              Automation • API • SQL
            </p>
          </div>

          {/* BUTTON CV */}
          <div className="relative group w-full max-w-[340px] p-[1.5px] rounded-full overflow-hidden shadow-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-150%] z-0"
              style={{ background: theme.rainbow }}
            />
            <a
              href="Tester_LeHuynhAnhTuyet.pdf"
              download
              className={`relative z-10 px-7 py-4 rounded-full flex items-center justify-between gap-4 transition-all duration-700 backdrop-blur-2xl ${theme.buttonInner}`}
            >
              <div className="flex-1 text-left leading-tight">
                <p className="text-[10px] uppercase tracking-[0.38em] opacity-60">
                  Professional Resume
                </p>
                <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                  Download My CV
                </p>
              </div>
              <div
                className={`text-xl font-bold transition-colors duration-700 ${theme.accent}`}
              >
                →
              </div>
            </a>
          </div>

          {/* SOCIALS - LINKED */}
          <div className="flex gap-6 text-3xl opacity-70 transition-all duration-700 items-center">
            <a
              href="https://github.com/TuyetLe14"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 cursor-pointer hover:text-slate-500 transition-transform group relative"
            >
              <FaGithub />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                Github
              </span>
            </a>
            <a
              href="https://www.facebook.com/tuyet.lehuynhanh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 cursor-pointer hover:text-blue-500 transition-transform group relative"
            >
              <FaFacebook />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest text-blue-500">
                Facebook
              </span>
            </a>
            <a
              href="https://www.tiktok.com/@snowle241?_r=1&_t=ZS-95bYyXuRrFM"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 cursor-pointer hover:text-pink-500 transition-transform group relative"
            >
              <FaTiktok />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest text-pink-500">
                Tiktok
              </span>
            </a>
          </div>
        </div>
      </div>

      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="beachGirl" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0 C0.3,0,0.2,0.05,0.15,0.15 L0.1,0.2 C0.05,0.2,0,0.25,0,0.35 L0.1,0.35 C0.05,0.45,0.02,0.55,0.05,0.65 C0.02,0.75,0.05,0.85,0.15,0.95 L0.3,1 L0.7,1 L0.85,0.95 C0.95,0.85,0.98,0.75,0.95,0.65 C0.98,0.55,0.95,0.45,0.9,0.35 L1,0.35 C1,0.25,0.95,0.2,0.9,0.2 L0.85,0.15 C0.8,0.05,0.7,0,0.5,0 Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
