import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, BookOpen, CheckCircle } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import CrystalBackground from "../components/CrystalBackground";

const certs = [
  {
    title: "Automation Testing Certificate",
    issuer: "Testing VN",
    date: "2022",
    icon: ShieldCheck,
  },
  {
    title: "Jira Fundamentals",
    issuer: "Atlassian",
    date: "2022",
    icon: CheckCircle,
  },
  {
    title: "Confluence Fundamentals",
    issuer: "Atlassian",
    date: "2022",
    icon: BookOpen,
  },
  {
    title: "Fresher Tester Certificate",
    issuer: "Testing VN",
    date: "2022",
    icon: Award,
  },
  { title: "English – VSTEP B1", issuer: "Vietnam", date: "2025", icon: Award },
];

export default function Certifications() {
  const { isLit } = useTheme();

  return (
    <div className="w-full min-h-screen pt-12 lg:pt-16 pb-48 px-4 sm:px-8 relative overflow-y-auto transition-colors duration-700 bg-transparent">
      <CrystalBackground isLit={isLit} />

      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {isLit ? (
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-100/40 blur-[100px] rounded-full" />
        ) : (
          <div className="absolute top-[-200px] left-1/2 w-[600px] h-[600px] bg-cyan-400/10 blur-[150px] rounded-full" />
        )}
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-[10px] uppercase tracking-[0.5em] font-black mb-1 transition-colors duration-700 ${isLit ? "text-pink-500/70" : "text-slate-500"}`}
          >
            Knowledge Assets
          </h2>
          <h1
            className={`text-5xl md:text-6xl font-black mt-2 transition-colors duration-700 ${isLit ? "text-slate-900" : "text-white"}`}
          >
            My{" "}
            <span className={isLit ? "text-pink-500" : "text-cyan-300"}>
              Certifications
            </span>
          </h1>
          <div
            className={`h-1 w-12 mx-auto mt-5 rounded-full ${isLit ? "bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" : "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"}`}
          />
        </motion.div>

        {/* GRID SECTION: 
            - sm:grid-cols-2 (Thay vì 3 để card rộng ra)
            - lg:grid-cols-2 (Hoặc giữ 3 nếu bạn muốn nhiều, nhưng 2 sẽ rộng nhất)
            - gap-8 để thoáng đãng
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {certs.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative h-full"
              >
                {isLit && (
                  <div className="absolute -inset-[1.5px] bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 rounded-[2.2rem] blur-[0.5px] opacity-50 group-hover:opacity-100 transition duration-500" />
                )}
                <div
                  className={`relative h-full p-8 md:p-10 rounded-[2.1rem] border transition-all duration-500 flex flex-col justify-between min-h-[220px]
                  ${
                    isLit
                      ? "bg-white/80 border-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(236,72,153,0.18)] hover:-translate-y-2"
                      : "bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 shadow-2xl hover:border-white/20 hover:-translate-y-1.5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-700
                      ${isLit ? "bg-pink-50 text-pink-500 border border-pink-100 shadow-inner" : "bg-cyan-400/10 text-cyan-400"}`}
                    >
                      <Icon size={28} strokeWidth={2.2} />
                    </div>

                    <span
                      className={`text-[10px] sm:text-xs font-black tracking-widest px-4 py-2 rounded-full transition-all duration-700
                      ${isLit ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md" : "bg-white/10 text-slate-400 border border-white/10"}`}
                    >
                      {cert.date}
                    </span>
                  </div>

                  <div className="space-y-3 relative z-10">
                    <h3
                      className={`text-xl sm:text-2xl font-black leading-tight transition-colors duration-700 ${isLit ? "text-slate-900" : "text-white"}`}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base font-bold transition-colors duration-700 ${isLit ? "text-pink-600/70" : "text-slate-400"}`}
                    >
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Hiệu ứng shine khi hover */}
                  <div className="absolute inset-0 overflow-hidden rounded-[2.1rem] pointer-events-none">
                    <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shine" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(12deg); }
          100% { transform: translateX(250%) rotate(12deg); }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
