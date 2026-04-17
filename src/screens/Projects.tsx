import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Users,
  Award,
  Star,
  Zap,
  Layers,
  ShieldCheck,
  ShoppingCart,
  GraduationCap,
  Link as LinkIcon,
  Cpu,
} from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import CrystalBackground from "../components/CrystalBackground";

interface Project {
  title: string;
  category: string;
  image: string;
  teamsize?: string;
  tools: string;
  description: string;
  achievement: string;
  isFeatured?: boolean;
}

const domains = [
  { name: "InsurTech", icon: <ShieldCheck size={12} /> },
  { name: "EdTech", icon: <GraduationCap size={12} /> },
  { name: "E-commerce", icon: <ShoppingCart size={12} /> },
  { name: "Blockchain", icon: <LinkIcon size={12} /> },
  // { name: "Cybersecurity", icon: <ShieldCheck size={12} /> },
  { name: "AI & Vision", icon: <Cpu size={12} /> },
];

const companyProjects: Project[] = [
  {
    title: "Insurance System (US Client)",
    category: "Strategic QA Engineering",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    teamsize: "Enterprise Team (30+ Members)",
    tools: "Postman, Rest Assured, Jira, SQL, Agile",
    description:
      "Deep-dive into complex business requirements (BRD/SRS) for a large-scale US insurance system. Led functional, regression, and integration testing across multiple modules.",
    achievement:
      "Ensured 100% stability for high-value transactions under US Market Standards. Validated complex logic across 30+ cross-functional members.",
    isFeatured: true,
  },
  {
    title: "Education Platform",
    category: "Main QA",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    teamsize: "8 members",
    tools: "SQL, Web/Mobile, Test Planning, Testcase, API, Agile/Scrum",
    description:
      "Owned end-to-end testing for Web & Mobile educational platform. Created master test plans and ensured full coverage.",
    achievement:
      "Achieved 100% test coverage for all critical educational modules.",
  },
  {
    title: "Blockchain Wallet System",
    category: "Backend Development & QA",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    teamsize: "10 members",
    tools: "C#, .NET, Firebase, SQL Server",
    description:
      "Engineered a robust backend with Firebase, focusing on security and real-time updates at Data Design Vietnam.",
    achievement:
      "Achieved 95% transaction accuracy & Real-time database solutions.",
  },
  {
    title: "YOLO Online Shopping System",
    category: "Fullstack Development (Intern)",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    teamsize: "Internship team",
    tools: "JavaScript, VS Code, Postman",
    description:
      "Crafted a responsive frontend and optimized APIs/Firebase during internship at Data Design Vietnam.",
    achievement: "Boosting performance by 20% & Mastered MVC architecture.",
  },
  {
    title: "Website BMA Calculator",
    category: "Automation Testing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    teamsize: "Testing Team",
    tools: "Selenium, Java",
    description:
      "Developed automated testing scripts with Selenium to optimize the testing lifecycle at Testing Vietnam.",
    achievement: "Cutting manual effort by 30% & Implemented CI/CD pipeline.",
  },
  {
    title: "VeSiMang’s Website",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    teamsize: "Internal Team",
    tools: "C#, ASP.NET MVC",
    description:
      "Developed and maintained the company website, focusing on cybersecurity solutions at Data Design Vietnam.",
    achievement:
      "Delivered a secure website aligning with 'Protect Together' mission.",
  },
  {
    title: "OrangeHRM Manual Testing",
    category: "Manual Testing",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    teamsize: "QC Department",
    tools: "Jira, Test Case Design",
    description:
      "Conducted manual testing to elevate quality and streamlined bug reporting processes at Testing Vietnam.",
    achievement:
      "Significantly improved defect tracking and reporting efficiency.",
  },
];

const personalProjects: Project[] = [
  {
    title: "Smart Attendance System",
    category: "AI & Real-world Deployment",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
    teamsize: "Real-world Team (2 members)",
    tools: "Python, Angular, YOLOv3, FastAPI",
    description:
      "A production-ready facial recognition system developed and deployed to automate check-ins in actual classroom environments.",
    achievement:
      "Successfully deployed with 98% accuracy. Optimized for real-time performance in real conditions.",
    isFeatured: true,
  },
  {
    title: "Butterfly Recognition",
    category: "Machine Learning",
    image:
      "https://images.unsplash.com/photo-1490100667990-4fced8021649?auto=format&fit=crop&q=80&w=800",
    teamsize: "Solo Project",
    tools: "Python, TensorFlow, Keras",
    description:
      "Developed an ML-based system to classify 20 butterfly species using Deep Learning models.",
    achievement: "Achieved 85% accuracy in species identification.",
  },
  {
    title: "Student Management System",
    category: "Desktop Application",
    image:
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=800",
    teamsize: "Individual",
    tools: "Python, SQLite, Tkinter",
    description:
      "Built a Student Management System with full CRUD functionality and local database integration.",
    achievement: "Successfully implemented all necessary management modules.",
  },
];

const Card = ({ project, index, showGithub = true, theme, isLit }: any) => {
  const isFeatured = project.isFeatured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative h-full flex flex-col ${isFeatured ? "lg:scale-105 z-10" : "z-0"}`}
    >
      <div
        className={`absolute -inset-[3px] rounded-[1.9rem] transition-all duration-500 ${
          isFeatured
            ? "bg-gradient-to-br from-pink-300 via-cyan-300 to-purple-300 opacity-30 blur-md"
            : isLit
              ? "bg-gradient-to-br from-pink-100 to-rose-50 opacity-50"
              : "bg-white/5 opacity-0"
        }`}
      />

      <div
        className={`relative flex-1 flex flex-col rounded-2xl overflow-hidden transition-all duration-500 border h-full ${theme.glass} ${isFeatured ? "border-pink-200/50 shadow-2xl" : ""}`}
      >
        <div className="aspect-video overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {isFeatured && (
            <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xl border border-white/10">
              <Zap size={10} className="text-yellow-400 fill-yellow-400" />
              <span className="text-[8px] font-black uppercase tracking-widest">
                Key Project
              </span>
            </div>
          )}

          {project.teamsize && (
            <div
              className={`absolute top-4 right-4 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border ${isLit ? "bg-white/80 border-pink-100" : "bg-black/40 border-white/10"}`}
            >
              <Users size={11} className={theme.accent} />
              <span className={`text-[9px] font-black ${theme.text}`}>
                {project.teamsize}
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <span
            className={`text-[9px] uppercase tracking-widest font-black ${theme.accent} border-b border-current pb-0.5 w-fit mb-4`}
          >
            {project.category}
          </span>
          <h3 className={`text-xl font-bold mb-3 leading-tight ${theme.text}`}>
            {project.title}
          </h3>
          <p
            className={`text-[13px] font-light leading-relaxed mb-4 flex-1 ${theme.subText}`}
          >
            {project.description}
          </p>

          <div
            className={`text-[10px] mb-5 p-4 rounded-xl border transition-all duration-300 ${
              isFeatured
                ? "bg-slate-900 text-white border-slate-700"
                : isLit
                  ? "bg-pink-50/50 border-pink-100 text-pink-700"
                  : "bg-white/5 border-white/5 text-cyan-400"
            } italic font-medium leading-relaxed`}
          >
            <Award size={12} className="inline mr-2 mb-0.5" />"
            {project.achievement}"
          </div>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tools.split(",").map((tool: string) => (
              <span
                key={tool}
                className={`text-[8px] font-bold px-2 py-0.5 rounded border ${theme.border} ${theme.muted} uppercase tracking-tighter`}
              >
                {tool.trim()}
              </span>
            ))}
          </div>

          {/* <div className="flex gap-3 mt-auto">
            {showGithub && <button className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-[10px] font-bold transition-all z-20 ${theme.btnSecondary}`}><Github size={14} /> Code</button>}
            <button className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-bold transition-all z-20 ${theme.btnPrimary}`}><ExternalLink size={14} /> Details</button>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const { isLit } = useTheme();

  const theme = {
    text: isLit ? "text-slate-900" : "text-white",
    subText: isLit ? "text-slate-600" : "text-slate-300",
    muted: isLit ? "text-slate-500" : "text-slate-400",
    accent: isLit ? "text-pink-600" : "text-cyan-400",
    border: isLit ? "border-pink-100/50" : "border-white/10",
    glass: isLit
      ? "bg-white/95 border-white shadow-xl"
      : "bg-white/[0.03] backdrop-blur-xl border-white/10 shadow-2xl",
    btnPrimary: isLit
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "bg-cyan-400 text-black hover:bg-cyan-300",
    btnSecondary: isLit
      ? "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
      : "bg-white/5 text-white border-white/10 hover:bg-white/10",
    heading: isLit
      ? "bg-gradient-to-r from-slate-900 via-pink-600 to-slate-900 bg-clip-text text-transparent"
      : "bg-gradient-to-r from-cyan-300 via-white to-cyan-100 bg-clip-text text-transparent",
    navBtn: isLit
      ? "bg-white/50 hover:bg-pink-500 hover:text-white border-pink-100 text-slate-700 shadow-sm"
      : "bg-white/5 hover:bg-cyan-400 hover:text-black border-white/10 text-slate-300",
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <CrystalBackground isLit={isLit} />
      </div>
      <div
        className={`relative z-10 lg:pl-32 pt-12 pb-32 transition-all duration-700`}
      >
        <div className="max-w-7xl mx-auto px-8">
          <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-[10px] uppercase tracking-[0.6em] font-black ${theme.accent}`}
              >
                Selected Works
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-6xl lg:text-8xl font-black tracking-tighter ${isLit ? "text-slate-900" : "text-white"}`}
              >
                PRO<span className={theme.accent}>J</span>ECTS.
              </motion.h1>
            </div>

            <div className="flex gap-3 z-20 pb-2">
              {["Professional", "Personal Lab"].map((text, idx) => (
                <a
                  key={text}
                  href={idx === 0 ? "#company-projects" : "#personal-projects"}
                  className={`px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all duration-500 ${theme.navBtn}`}
                >
                  {text}
                </a>
              ))}
            </div>
          </header>

          {/* DOMAIN SECTION*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-16 p-px rounded-[2rem] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent`}
          >
            <div
              className={`flex flex-wrap items-center gap-2.5 p-5 rounded-[1.9rem] border ${theme.border} ${isLit ? "bg-white/40 shadow-inner" : "bg-black/20"} backdrop-blur-md`}
            >
              <div
                className={`flex items-center gap-2 pr-4 border-r ${theme.border} mr-1`}
              >
                <Layers size={14} className={theme.accent} />
                <span
                  className={`text-[9px] font-black uppercase tracking-widest ${theme.text}`}
                >
                  Domains
                </span>
              </div>

              {domains.map((domain) => (
                <motion.div
                  key={domain.name}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-[9px] font-bold transition-all
                    ${
                      isLit
                        ? "bg-white/80 border-pink-100 text-slate-700 hover:shadow-md"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-cyan-400/50"
                    }`}
                >
                  <span className={theme.accent}>{domain.icon}</span>
                  {domain.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* PROJECT GRIDS*/}
          <div className="space-y-32">
            <section id="company-projects">
              <div className="flex items-center gap-4 mb-12">
                <h2
                  className={`text-[9px] font-black tracking-[0.4em] uppercase ${theme.text}`}
                >
                  Career Experience
                </h2>
                <div className={`h-px flex-1 ${theme.border} opacity-30`} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 items-stretch">
                {companyProjects.map((p, i) => (
                  <Card
                    key={p.title}
                    project={p}
                    index={i}
                    showGithub={false}
                    theme={theme}
                    isLit={isLit}
                  />
                ))}
              </div>
            </section>

            <section id="personal-projects">
              <div className="flex items-center gap-4 mb-12">
                <h2
                  className={`text-[9px] font-black tracking-[0.4em] uppercase ${theme.text}`}
                >
                  Technical Innovations
                </h2>
                <div className={`h-px flex-1 ${theme.border} opacity-30`} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 items-stretch">
                {personalProjects.map((p, i) => (
                  <Card
                    key={p.title}
                    project={p}
                    index={i}
                    theme={theme}
                    isLit={isLit}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
