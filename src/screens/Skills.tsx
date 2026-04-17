import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../components/ThemeContext";
import CrystalBackground from "../components/CrystalBackground";

const skillGroups = [
  {
    title: "Manual Testing",
    skills: [
      "Functional Testing",
      "Regression Testing",
      "Integration Testing",
      "Smoke Testing",
      "Equivalence Partitioning",
      "Boundary Value Analysis",
      "Defect Lifecycle Management (Jira)",
    ],
  },
  {
    title: "Automation Testing",
    skills: [
      "Selenium WebDriver (Java)",
      "TestNG",
      "Page Object Model (POM)",
      "Script Development",
      "Framework Maintenance",
      "UI Automation",
    ],
  },
  {
    title: "API & System Testing",
    skills: [
      "REST API (Postman, Rest Assured)",
      "HTTP Methods",
      "JSON Validation",
      "Status Codes",
      "Distributed Systems Testing",
    ],
  },
  {
    title: "Performance & Database",
    skills: [
      "JMeter (Load Testing)",
      "Concurrent Users",
      "SQL (Joins, Stored Procedures)",
      "Data Validation",
      "MongoDB (Basic)",
    ],
  },
  {
    title: "Tools & CI/CD",
    skills: [
      "Jira",
      "Git",
      "IntelliJ",
      "VS Code",
      "Agile/Scrum (Sprint, UAT)",
      "Jenkins (Pipeline Awareness)",
    ],
  },
  {
    title: "Languages & Others",
    skills: [
      "Java",
      "Python",
      "C# (Basic)",
      "Technical English",
      "English Communication",
      "Deep Learning (Self-learning)",
    ],
  },
];

const Card = ({ group, index, isLit }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative group h-full"
    >
      {/* GLOW BORDER */}
      {isLit && (
        <div className="absolute -inset-[1.5px] bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 rounded-[2rem] blur-[0.5px] opacity-40 group-hover:opacity-100 transition duration-500" />
      )}

      {/* CARD CONTENT */}
      <div
        className={`relative h-full rounded-[1.9rem] p-8 border transition-all duration-500 overflow-hidden flex flex-col
        ${
          isLit
            ? "bg-white/80 border-white shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)] hover:-translate-y-2"
            : "bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 shadow-2xl hover:border-white/20 hover:-translate-y-1.5"
        }`}
      >
        {/* TITLE */}
        <h3
          className={`text-[11px] tracking-[0.4em] uppercase font-black mb-7 transition-colors duration-500 ${isLit ? "text-pink-600" : "text-cyan-300"}`}
        >
          {group.title}
        </h3>

        {/* SKILLS TAGS */}
        <div className="flex flex-wrap gap-2.5 relative z-10">
          {group.skills.map((skill: string) => (
            <span
              key={skill}
              className={`px-4 py-2 text-[13px] font-medium rounded-full border transition-all duration-300
                ${
                  isLit
                    ? "bg-white border-pink-100 text-slate-700 hover:bg-pink-500 hover:text-white shadow-sm hover:border-pink-500"
                    : "bg-white/10 border-white/10 text-slate-200 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/20"
                }`}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* SHINE EFFECT */}
        <div className="absolute inset-0 overflow-hidden rounded-[1.9rem] pointer-events-none">
          <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shine" />
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const { isLit } = useTheme();

  return (
    <div className="min-h-screen w-full flex items-start justify-center px-6 pt-12 pb-32 lg:pt-16 relative overflow-y-auto transition-colors duration-700 bg-transparent">
      <div className="fixed inset-0 z-0">
        <CrystalBackground isLit={isLit} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-[11px] tracking-[0.6em] font-black uppercase mb-3 ${isLit ? "text-slate-400" : "text-slate-500"}`}
          >
            Expertise Matrix
          </h2>

          <h1
            className={`text-5xl md:text-7xl font-black tracking-tighter transition-colors duration-700 ${isLit ? "text-slate-900" : "text-white"}`}
          >
            QA/QC Engineering{" "}
            <span className={isLit ? "text-pink-500" : "text-cyan-300"}>
              Skills
            </span>
          </h1>

          <div
            className={`h-1 w-16 mx-auto mt-6 rounded-full ${isLit ? "bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]" : "bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"}`}
          />
        </motion.div>

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {skillGroups.map((group, index) => (
            <Card key={group.title} group={group} index={index} isLit={isLit} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(12deg); }
          100% { transform: translateX(250%) rotate(12deg); }
        }
        .animate-shine {
          animation: shine 3.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
