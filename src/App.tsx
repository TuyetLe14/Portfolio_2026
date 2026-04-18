import React, { useState, Suspense } from "react";
import { motion, LazyMotion, domMax } from "framer-motion";
import Navigation, { Screen } from "./components/Navigation";
import CrystalBackground from "./components/CrystalBackground";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Import các màn hình (giữ nguyên các import cũ)
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Projects from "./screens/Projects";
import Certifications from "./screens/Certifications";
import Skills from "./screens/Skills";

function AppContent() {
  const { isLit } = useTheme();

  return (
    <Router>
      <LazyMotion features={domMax}>
        <div
          className={`relative w-full min-h-screen transition-colors duration-700 ${isLit ? "bg-slate-50" : "bg-slate-950"} overflow-hidden`}
          >
          {/* Nền hạt tinh thể cố định */}
            <div className="fixed inset-0 z-0 pointer-events-none">
            <Suspense fallback={null}>
              <CrystalBackground isLit={isLit} />
            </Suspense>
          </div>

          <main className="relative z-10 w-full min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Certifications" element={<Certifications />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </main>

          <Navigation />
          <div
            className={`fixed inset-0 pointer-events-none z-[60] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity duration-700 ${isLit ? "opacity-[0.05]" : "opacity-[0.03]"}`}
          />
        </div>
      </LazyMotion>
    </Router>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
