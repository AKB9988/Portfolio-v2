import { useState } from "react";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";
import techBg from "../assets/tech-portfolio-bg.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText("bhattak.iiits.100@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: `url(${techBg})` }}
    >

      <div className="bg-slate-950/80 min-h-screen w-full flex flex-col items-center justify-center px-6 py-24">

        <div className="max-w-3xl w-full text-center mb-16 relative z-10">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400 font-mono mb-3">
            What's Next?
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Let's Connect & Collaborate
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, open-source projects, or tech architectures. Choose your preferred platform to reach me!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full relative z-10">

          <div className="group rounded-2xl border border-slate-800 bg-[#0b1329]/60 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail size={22} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-slate-400 text-xs mb-4">Direct message or general inquiries</p>
              <p className="text-slate-200 text-sm font-mono truncate select-all mb-6">
                bhattak.iiits.100@gmail.com
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-700 bg-slate-800/40 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 text-xs font-semibold active:scale-95 transition-all duration-200 cursor-pointer"
              >
                {copied ? <Check size={14} className="text-cyan-400" /> : <Copy size={14} />}
                {copied ? "Copied Address!" : "Copy Email"}
              </button>
              <a
                href="mailto:bhattak.iiits.100@gmail.com"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white text-xs font-semibold shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 active:scale-95 transition-all duration-200"
              >
                Open Mail App
                <ExternalLink size={12} />
              </a>
            </div>
          </div>


          <div className="group rounded-2xl border border-slate-800 bg-[#0b1329]/60 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaLinkedin size={22} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-slate-400 text-xs mb-4">Professional updates & networking</p>
              <p className="text-slate-200 text-sm font-semibold mb-6">
                Abhishek Kumar Bhatt
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/abhishek-kumar-bhatt-37b801340/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-700 bg-slate-800/40 text-slate-300 hover:border-blue-400 hover:text-blue-300 text-xs font-semibold active:scale-95 transition-all duration-200"
            >
              Connect
              <ExternalLink size={12} />
            </a>
          </div>


          <div className="group rounded-2xl border border-slate-800 bg-[#0b1329]/60 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaGithub size={22} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
              <p className="text-slate-400 text-xs mb-4">Explore project source codes & contributions</p>
              <p className="text-slate-200 text-sm font-mono mb-6">
                @AKB9988
              </p>
            </div>
            <a
              href="https://github.com/AKB9988"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-700 bg-slate-800/40 text-slate-300 hover:border-purple-400 hover:text-purple-300 text-xs font-semibold active:scale-95 transition-all duration-200"
            >
              Follow & Star
              <ExternalLink size={12} />
            </a>
          </div>

        </div>


      </div>
    </section>
  );
}
