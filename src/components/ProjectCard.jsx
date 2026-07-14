import { ExternalLink, Star } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const { title, tagline, description, stack, tags, githubUrl, liveUrl, accentColor, highlights } = project;

  return (
    <div className="w-full flex flex-col flex-1">
      <div
        className="flex-1 rounded-b-2xl p-6 md:p-8 lg:p-10 overflow-y-auto"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h3
              className="text-2xl md:text-3xl font-black text-white leading-tight"
              style={{ textShadow: `0 0 30px ${accentColor}50` }}
            >
              {title}
            </h3>
            <p className="mt-1 text-sm font-semibold" style={{ color: accentColor }}>
              {tagline}
            </p>
          </div>

          <div className="flex gap-3 flex-shrink-0">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: accentColor, boxShadow: `0 4px 20px ${accentColor}50` }}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-slate-300 border border-slate-600 hover:border-slate-400 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-bold border"
              style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}10` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 mb-5 h-px" style={{ background: `linear-gradient(to right, ${accentColor}40, transparent)` }} />

        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl px-4 py-3 border border-slate-700/50"
              style={{ background: `${accentColor}08` }}
            >
              <span className="mt-0.5 text-xs font-black" style={{ color: accentColor }}>▸</span>
              <span className="text-slate-300 text-xs leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 border border-slate-700 hover:border-slate-500 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {githubUrl && (
          <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500">View full source, docs & setup instructions</span>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Star size={12} />
              Star on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
}