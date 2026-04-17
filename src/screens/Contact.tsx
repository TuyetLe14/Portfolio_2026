import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Linkedin,
  Github,
  Facebook,
  Loader2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../components/ThemeContext";
import CrystalBackground from "../components/CrystalBackground";

export default function Contact() {
  const { isLit } = useTheme();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_5hnzp7q",
        "template_zqcxnxw",
        formRef.current!,
        "O2F-TrsWk3242eAHH",
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            message: "Thank you! Message sent successfully ✨",
          });
          e.currentTarget.reset();
        },
        () => {
          setLoading(false);
          setStatus({
            type: "error",
            message: "Something went wrong, please try again later! ❌",
          });
        },
      );
  };

  return (
    <div className="min-h-screen relative flex items-start md:items-center justify-center px-6 pt-24 pb-48 overflow-hidden bg-transparent transition-colors duration-700">
      <CrystalBackground isLit={isLit} />

      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {isLit ? (
          <>
            <div className="absolute top-[-100px] left-1/2 w-[600px] h-[600px] bg-pink-100/30 blur-[150px] rounded-full" />
            <div className="absolute bottom-[-100px] right-0 w-[400px] h-[400px] bg-amber-50/20 blur-[100px] rounded-full" />
          </>
        ) : (
          <>
            <div className="absolute top-[-200px] left-1/2 w-[600px] h-[600px] bg-cyan-400/10 blur-[180px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-200px] right-1/3 w-[500px] h-[500px] bg-purple-500/10 blur-[160px] rounded-full animate-pulse" />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          {/* Status Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span
              className={`text-[10px] font-bold tracking-widest ${isLit ? "text-emerald-600" : "text-emerald-400"}`}
            >
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </div>

          <h2
            className={`text-xs uppercase tracking-[0.5em] font-mono mb-6 ${isLit ? "text-pink-500/70" : "text-slate-400"}`}
          >
            GET IN TOUCH
          </h2>
          <h1
            className={`text-5xl sm:text-6xl font-black mb-6 leading-tight transition-colors duration-700 ${isLit ? "text-slate-900" : "text-white"}`}
          >
            Let's Build <br />
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r ${isLit ? "from-pink-500 via-rose-500 to-slate-800" : "from-cyan-300 via-white to-purple-300"}`}
            >
              Something Great
            </span>
          </h1>
          <p
            className={`text-sm leading-relaxed max-w-md mx-auto md:mx-0 mb-10 font-light transition-colors duration-700 ${isLit ? "text-slate-600" : "text-slate-300"}`}
          >
            Looking for a dedicated{" "}
            <span
              className={`font-bold ${isLit ? "text-slate-900" : "text-white"}`}
            >
              QC/QA Engineer
            </span>{" "}
            or want to discuss a{" "}
            <span
              className={`font-bold ${isLit ? "text-slate-900" : "text-white"}`}
            >
              job opportunity
            </span>
            ? Feel free to drop a message, I'll get back to you as soon as
            possible!
          </p>

          {/* Quick Contact Info */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Mail
                size={16}
                className={isLit ? "text-pink-500" : "text-cyan-400"}
              />
              <span
                className={`text-sm font-medium ${isLit ? "text-slate-700" : "text-slate-300"}`}
              >
                lehuynhanh.tuyet10@gmail.com
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Phone
                size={16}
                className={isLit ? "text-pink-500" : "text-cyan-400"}
              />
              <span
                className={`text-sm font-medium ${isLit ? "text-slate-700" : "text-slate-300"}`}
              >
                +84 817 493 884
              </span>
            </div>
          </div>

          {/* <div className="flex gap-4 justify-center md:justify-start">
            {[Github, Linkedin, Facebook].map((Icon, i) => (
              <a key={i} href="#" className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-500
                ${isLit 
                  ? 'bg-white border-pink-100 text-pink-500 shadow-lg shadow-pink-100 hover:scale-110 hover:bg-pink-500 hover:text-white' 
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-300/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:scale-110'}`}>
                <Icon size={18} />
              </a>
            ))}
          </div> */}
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div
            className={`absolute -inset-4 blur-2xl rounded-[40px] opacity-20 transition-colors duration-700
            ${isLit ? "bg-pink-400" : "bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400"}`}
          />

          <div
            className={`relative rounded-[40px] p-8 md:p-10 backdrop-blur-3xl border transition-all duration-700
            ${
              isLit
                ? "bg-white/80 border-white shadow-[0_25px_60px_rgba(236,72,153,0.1)]"
                : "bg-white/5 border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.4)]"
            }`}
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label
                  className={`text-[10px] uppercase tracking-widest font-mono ml-2 ${isLit ? "text-pink-600/70" : "text-slate-400"}`}
                >
                  Name
                </label>
                <input
                  required
                  name="user_name"
                  type="text"
                  placeholder="Enter your name"
                  className={`w-full mt-2 border rounded-2xl px-5 py-4 outline-none transition
                    ${
                      isLit
                        ? "bg-pink-50/50 border-pink-100 text-slate-900 focus:border-pink-500"
                        : "bg-black/20 border-white/10 text-white focus:border-cyan-300/40 placeholder:text-slate-600"
                    }`}
                />
              </div>

              <div>
                <label
                  className={`text-[10px] uppercase tracking-widest font-mono ml-2 ${isLit ? "text-pink-600/70" : "text-slate-400"}`}
                >
                  Email
                </label>
                <input
                  required
                  name="user_email"
                  type="email"
                  placeholder="your@email.com"
                  className={`w-full mt-2 border rounded-2xl px-5 py-4 outline-none transition
                    ${
                      isLit
                        ? "bg-pink-50/50 border-pink-100 text-slate-900 focus:border-pink-500"
                        : "bg-black/20 border-white/10 text-white focus:border-cyan-300/40 placeholder:text-slate-600"
                    }`}
                />
              </div>

              <div>
                <label
                  className={`text-[10px] uppercase tracking-widest font-mono ml-2 ${isLit ? "text-pink-600/70" : "text-slate-400"}`}
                >
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={3}
                  placeholder="Tell me about your project or role..."
                  className={`w-full mt-2 border rounded-2xl px-5 py-4 outline-none transition resize-none
                    ${
                      isLit
                        ? "bg-pink-50/50 border-pink-100 text-slate-900 focus:border-pink-500"
                        : "bg-black/20 border-white/10 text-white focus:border-cyan-300/40 placeholder:text-slate-600"
                    }`}
                />
              </div>

              {status.message && (
                <p
                  className={`text-xs text-center font-mono ${status.type === "success" ? "text-emerald-500" : "text-red-400"}`}
                >
                  {status.message}
                </p>
              )}

              <button
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all active:scale-95 disabled:opacity-50
                  ${
                    isLit
                      ? "bg-pink-500 text-white shadow-lg shadow-pink-200 hover:bg-pink-600"
                      : "bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:scale-[1.02]"
                  }`}
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
