import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';
import CrystalBackground from '../components/CrystalBackground'; 
import { FaGraduationCap, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';
import portraitImg1 from "../assets/about.jpg";
export default function About() {
  const { isLit } = useTheme();

  const theme = {
    text: isLit ? "text-slate-900" : "text-white",
    subText: isLit ? "text-slate-600" : "text-slate-300",
    muted: isLit ? "text-slate-500" : "text-slate-400",
    accent: isLit ? "text-pink-500" : "text-cyan-400",
    border: isLit ? "border-slate-200" : "border-white/10",
    glass: isLit 
      ? "bg-white/80 shadow-[0_25px_60px_rgba(236,72,153,0.15)] border-white" 
      : "bg-white/5 backdrop-blur-md border-white/10 shadow-2xl",
    heading: isLit
      ? "bg-gradient-to-r from-pink-500 via-rose-500 to-slate-800 bg-clip-text text-transparent"
      : "bg-gradient-to-r from-cyan-300 via-white to-slate-100 bg-clip-text text-transparent",
    tag: isLit ? "bg-pink-50 text-pink-600" : "bg-cyan-400/10 text-cyan-400",
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 pt-24 pb-32 md:p-12 lg:pt-10 lg:pb-20 relative overflow-hidden transition-colors duration-700">
      
      <CrystalBackground isLit={isLit} />

      {/* BACKGROUND BLOBS */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {isLit ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-100/30 blur-[120px] rounded-full" />
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/5 blur-[150px] rounded-full" />
        )}
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-[1fr,1.4fr] gap-12 lg:gap-20 items-start relative z-10">

        {/* --- LEFT: IMAGE SECTION --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center md:items-end group space-y-6"
        >
          <div className={`relative aspect-[4/5] w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] rounded-[3rem] p-3 transition-all duration-700 z-10 ${theme.glass}`}>
            <div className="w-full h-full overflow-hidden rounded-[2.2rem] relative">
              <img 
                src={portraitImg1}
                alt="Profile Photo" 
                className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-105"
              />
            </div>
            {/* Tag Badge */}
            <div className={`absolute -bottom-3 -right-3 px-6 py-3 rounded-2xl shadow-xl border transition-all duration-700 z-30
              ${isLit ? 'bg-white border-pink-50 text-pink-600 shadow-pink-200/50' : 'bg-slate-900 border-white/10 text-cyan-400'}`}>
              <span className="text-[11px] font-black tracking-widest uppercase">QA Engineer</span>
            </div>
          </div>

          {/* QUICK CONTACT BOX (Dưới ảnh) */}
          <div className={`w-full max-w-[300px] lg:max-w-[380px] p-6 rounded-[2rem] border transition-all duration-700 ${theme.glass}`}>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${theme.tag}`}><FaEnvelope size={12}/></div>
                <div className="overflow-hidden">
                  <p className={`text-[9px] uppercase tracking-widest ${theme.muted}`}>Email</p>
                  <p className={`text-[11px] font-medium truncate ${theme.text}`}>lehuynhanh.tuyet10@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${theme.tag}`}><FaPhoneAlt size={12}/></div>
                <div>
                  <p className={`text-[9px] uppercase tracking-widest ${theme.muted}`}>Phone</p>
                  <p className={`text-[11px] font-medium ${theme.text}`}>0817493884</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${theme.tag}`}><FaMapMarkerAlt size={12}/></div>
                <div>
                  <p className={`text-[9px] uppercase tracking-widest ${theme.muted}`}>Location</p>
                  <p className={`text-[11px] font-medium ${theme.text}`}>Ho Chi Minh, Vietnam</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT: CONTENT SECTION --- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8" 
        >
          <div className="space-y-2">
            <h2 className={`text-[11px] uppercase tracking-[0.5em] font-mono font-bold transition-colors duration-700 ${theme.muted}`}>
              Personal Profile
            </h2>
            <h1 className={`text-4xl lg:text-6xl font-black leading-tight transition-all duration-700 ${theme.heading}`}>
              Engineering Quality <br /> Through Code
            </h1>
          </div>

          <div className={`space-y-6 text-sm lg:text-base font-light leading-relaxed transition-colors duration-700 ${theme.subText}`}>
            <p>
              I am a Software Engineer transitioning into QA Engineering with a background in fullstack development. Leveraging my foundation from UIT, I focus on delivering high-quality technical validation and automated solutions that ensure software reliability at every scale.
            </p>

            {/* --- EDUCATION CARD --- */}
            <div className={`p-6 rounded-3xl border transition-all duration-700 ${theme.glass}`}>
              <div className="flex items-start gap-4">
                <div className={`mt-1 p-3 rounded-2xl ${theme.tag}`}>
                  <FaGraduationCap size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className={`text-[10px] uppercase tracking-widest font-bold ${theme.accent}`}>Education</h4>
                  <h3 className={`text-lg font-bold ${theme.text}`}>University of Information Technology (UIT)</h3>
                  <p className={`text-sm ${theme.subText}`}>Major: Information Technology</p>
                  <div className="flex gap-4 mt-2">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${theme.tag}`}>Degree: Very Good</span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${theme.tag}`}>GPA: 8.13 / 10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* INFO GRID (Updated) */}
            <div className={`pt-8 grid grid-cols-2 gap-y-8 gap-x-4 border-t transition-colors duration-700 ${theme.border}`}>
              <div>
                <h4 className={`text-[10px] uppercase tracking-widest mb-1 font-bold ${theme.accent}`}>Birthday</h4>
                <div className="flex items-center gap-2">
                  <FaBirthdayCake className={theme.muted} size={12}/>
                  <p className={`text-sm font-medium ${theme.text}`}>14 / 10 / 2000</p>
                </div>
              </div>

              <div>
                <h4 className={`text-[10px] uppercase tracking-widest mb-1 font-bold ${theme.accent}`}>Focus Area</h4>
                <p className={`text-sm font-medium ${theme.text}`}>Automation (Selenium/Java) • API Testing • SQL Validation • Agile Workflow</p>
              </div>

              <div>
                <h4 className={`text-[10px] uppercase tracking-widest mb-1 font-bold ${theme.accent}`}>Background</h4>
                <p className={`text-sm font-medium ${theme.text}`}>Fullstack Dev → QA</p>
              </div>

              <div>
                <h4 className={`text-[10px] uppercase tracking-widest mb-1 font-bold ${theme.accent}`}>Ambition</h4>
                <p className={`text-sm font-medium ${theme.text}`}>Aspiring Senior SDET</p>
              </div>
            </div>
          </div>

          {/* <div className="pt-4">
             <p className={`font-mono text-[11px] italic opacity-60 ${theme.text}`}>
               "Quality is not an act, it is a habit."
             </p>
          </div> */}
        </motion.div>

      </div>
    </div>
  );
}