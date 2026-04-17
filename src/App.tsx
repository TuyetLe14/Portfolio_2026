import React, { useState, Suspense } from 'react';
import { motion, LazyMotion, domMax } from 'framer-motion';
import Navigation, { Screen } from './components/Navigation';
import CrystalBackground from './components/CrystalBackground';
import { ThemeProvider, useTheme } from './components/ThemeContext';

// Import các màn hình (giữ nguyên các import cũ)
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Projects from './screens/Projects';
import Certifications from './screens/Certifications';
import Skills from './screens/Skills';

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const { isLit } = useTheme();

  const screens = [
    { id: 'home', content: <Home /> },
    { id: 'about', content: <About /> },
    { id: 'projects', content: <Projects /> },
    { id: 'skills', content: <Skills /> },
    { id: 'certifications', content: <Certifications /> },
    { id: 'contact', content: <Contact /> },
  ];

  return (
    <LazyMotion features={domMax}>
      <div className={`relative w-full min-h-screen transition-colors duration-700 ${isLit ? 'bg-slate-50' : 'bg-slate-950'} overflow-hidden`}>
        
        {/* Nền hạt tinh thể cố định */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Suspense fallback={null}>
            <CrystalBackground isLit={isLit} />
          </Suspense>
        </div>

        <main className="relative z-10 w-full min-h-screen">
          {screens.map((screen) => {
            const isActive = currentScreen === screen.id;
            
            return (
              <motion.div
                key={screen.id}
                initial={false}
                animate={{ 
                  // 1. Lướt ngang: Trang active ở 0, trang ẩn đẩy sang phải (100%) hoặc trái (-100%)
                  // Ở đây mình dùng x: 100 cho đơn giản, hoặc scale về 0.9 để tạo chiều sâu
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : 50, // Lướt nhẹ từ phải sang trái
                  rotateY: isActive ? 0 : -10, // Tạo độ nghiêng nhẹ khi lướt (3D effect)
                  scale: isActive ? 1 : 0.95,
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1], // Quintic-Bezier cực kỳ mượt và "dính"
                }}
                className={`w-full min-h-screen ${isActive ? 'relative' : 'absolute inset-0'}`}
                style={{ 
                  display: isActive ? 'block' : 'none',
                  perspective: '1200px', // Quan trọng để hiệu ứng rotateY trông có chiều sâu
                  willChange: 'transform, opacity'
                }}
              >
                {screen.content}
              </motion.div>
            );
          })}
        </main>

        <Navigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />
        
        {/* Noise overlay */}
        <div className={`fixed inset-0 pointer-events-none z-[60] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity duration-700 ${isLit ? 'opacity-[0.05]' : 'opacity-[0.03]'}`} />
      </div>
    </LazyMotion>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}