import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Award, Mail } from 'lucide-react';
import { useTheme } from './ThemeContext';

export type Screen = 'home' | 'about' | 'projects' | 'skills' | 'certifications' | 'contact';

const navItems: { id: Screen; icon: any; label: string }[] = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'certifications', icon: Award, label: 'Certs' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export default function Navigation({ currentScreen, onNavigate }: { currentScreen: Screen; onNavigate: (s: Screen) => void }) {
  const { isLit } = useTheme();

  return (
    <nav className={`fixed z-[999] transition-all duration-700
      /* Mobile: Thanh ngang nằm dưới */
      bottom-6 left-0 right-0 flex justify-center px-4
      /* Desktop (lg): Dải dọc Full Height sát mép trái */
      lg:top-0 lg:left-0 lg:bottom-0 lg:h-screen lg:w-24 lg:flex-col lg:px-0 lg:justify-center
    `}>
      <div className={`
        flex items-center gap-4 transition-all duration-700 backdrop-blur-md border pointer-events-auto
        /* Mobile: Hình viên thuốc nằm ngang */
        flex-row py-3 px-6 rounded-full
        /* Desktop: Dải dọc dài (Full Height hoặc Pill dài) */
        lg:flex-col lg:py-10 lg:px-0 lg:h-[fit-content] lg:rounded-full lg:mx-auto
        ${isLit 
          ? 'bg-white/70 border-pink-100 shadow-pink-200/30' 
          : 'bg-black/40 border-white/10 shadow-black/50'}`}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative p-3 group transition-colors focus:outline-none"
            >
              <Icon 
                size={22} 
                className={`transition-colors duration-300 relative z-10 
                  ${isActive 
                    ? (isLit ? 'text-pink-600' : 'text-cyan-400') 
                    : (isLit ? 'text-slate-400 group-hover:text-pink-400' : 'text-slate-500 group-hover:text-slate-200')
                  }`} 
              />
              
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className={`absolute inset-0 rounded-full -z-0 ${isLit ? 'bg-pink-100/60' : 'bg-white/10'}`}
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                />
              )}
              
              <span className={`hidden lg:block absolute left-full ml-4 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border
                ${isLit ? 'bg-white text-pink-600 border-pink-100 shadow-xl' : 'bg-slate-900 text-cyan-400 border-white/10 shadow-2xl'}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}