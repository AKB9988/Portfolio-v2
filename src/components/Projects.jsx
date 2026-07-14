import { useState } from "react";
import { RefreshCw, ChevronLeft, ChevronRight, Lock, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    id: "goldguild",
    tabLabel: "GoldGuild",
    tabEmoji: "🏆",
    url: "gold-guild.vercel.app",
    title: "GoldGuild",
    tagline: "Gamified Personal Finance — Track, Save, Compete, Level Up",
    description:
      "GoldGuild is a full-stack gamified personal finance app that turns budgeting into an RPG-like experience. Earn XP for logging expenses, level up your profile, unlock 9 unique achievement badges, maintain daily streaks, and compete on a global leaderboard. Financial discipline shouldn't feel like a chore.",
    tags: ["Full Stack", "Gamification", "Finance", "REST API", "JWT Auth"],
    stack: ["Java 21", "Spring Boot", "Spring Security", "JPA/Hibernate", "MySQL 8", "React 19", "Vite", "TailwindCSS", "TanStack Query", "shadcn/ui", "JJWT"],
    highlights: [
      "XP reward system: +10 per expense, +50 under budget, +100 goal complete",
      "9 achievement badges with automated unlock triggers",
      "7-day & 30-day streak tracking via midnight cron scheduler",
      "Global XP leaderboard with friend requests by username",
      "Stateless JWT auth with BCrypt password hashing",
      "Real-time cache invalidation using TanStack Query mutations",
    ],
    githubUrl: "https://github.com/AKB9988/GoldGuild",
    liveUrl: "https://gold-guild.vercel.app/",
    accentColor: "#f59e0b",
  },
  {
    id: "josaa",
    tabLabel: "JoSAA Simulator",
    tabEmoji: "🎯",
    url: "github.com/AKB9988/JoSSASimulator",
    title: "JoSAA Seat Allocation Simulator",
    tagline: "Real probability of getting into IIT/NIT — not guesswork",
    description:
      "A Monte Carlo simulation engine using Gale-Shapley matching on 8 years of real JoSAA data (434k+ rows, 2018–2025). Enter your JEE rank and preference list — run 500 simulations with historically-computed volatility to get hard probability percentages for each branch allocation.",
    tags: ["Simulation", "Algorithm", "Data Analysis", "CLI", "Java"],
    stack: ["Java 24", "Maven", "Gale-Shapley Algorithm", "Monte Carlo Simulation", "CSV Data Processing"],
    highlights: [
      "500-round Monte Carlo simulation with Gale-Shapley matching engine",
      "Real historical volatility from 8 years of JoSAA closing rank data",
      "434k+ row dataset — covers IIT (Advanced) & NIT/IIIT (Main) branches",
      "Outputs 'Seat Won %' vs 'Allocated %' for each preference",
      "Competitor pool generation with Gaussian rank distribution",
      "Tiered volatility fallback for branches with < 3 years of history",
    ],
    githubUrl: "https://github.com/AKB9988/JoSSASimulator",
    liveUrl: null,
    accentColor: "#38bdf8",
  },
  {
    id: "alertx",
    tabLabel: "AlertX",
    tabEmoji: "🚨",
    url: "github.com/AKB9988/AlertX",
    title: "AlertX",
    tagline: "Real-Time Vehicular Crash Detection & Peer-to-Peer Alert System",
    description:
      "An Android app that turns any smartphone into an intelligent crash detection system. 50Hz sensor polling detects crashes at ≥10G threshold, captures 150-point telemetry, and instantly broadcasts emergency alerts to nearby drivers via MQTT + Socket.IO — all without centralized infrastructure dependency.",
    tags: ["Android", "IoT", "Real-Time", "MQTT", "Socket.IO", "Sensors"],
    stack: ["Java 17", "Android SDK", "Eclipse Paho MQTT", "Socket.IO", "WorkManager", "Google Fused Location", "Gson", "Gradle Kotlin DSL"],
    highlights: [
      "50Hz accelerometer polling with G-force = √(ax²+ay²+az²)/9.81 crash trigger",
      "3-second circular buffer captures 150 data points around crash event",
      "Hybrid MQTT + Socket.IO dispatch — resilient on unstable connections",
      "WorkManager ensures crash data upload survives app process death",
      "SOS system: on-screen button + simultaneous volume-key hardware trigger",
      "Custom G-Force arc gauge View with gradient coloring (green→amber→red)",
    ],
    githubUrl: "https://github.com/AKB9988/AlertX",
    liveUrl: null,
    accentColor: "#ef4444",
  },
  {
    id: "mindhorizon",
    tabLabel: "Mind Horizon",
    tabEmoji: "📚",
    url: "github.com/AKB9988/MindHorizon",
    title: "Mind Horizon",
    tagline: "JEE & NEET Online Preparation Portal",
    description:
      "A clean static frontend web portal for JEE & NEET aspirants. Features a personalized student dashboard, to-do study list with local persistence, structured chapter-wise video lectures with embedded YouTube player, draggable sticky notes canvas with JSON export, and centralized NTA mock test archives.",
    tags: ["Frontend", "Education", "Vanilla JS", "Static Site"],
    stack: ["HTML5", "CSS3", "Vanilla JavaScript", "localStorage API", "YouTube Embed API"],
    highlights: [
      "Personalized dashboard with time-based greeting and course selection",
      "Draggable sticky notes canvas with JSON export for offline saving",
      "Class 11 & 12 chapter-wise video lecture hub for JEE & NEET",
      "Task manager with strike-through completion and localStorage persistence",
      "Centralized mock test archive linking NTA official papers",
      "Zero dependencies — pure HTML, CSS, JavaScript",
    ],
    githubUrl: "https://github.com/AKB9988",
    liveUrl: null,
    accentColor: "#a78bfa",
  },
];
export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);
  const active = PROJECTS[activeTab];

  return (
    <section
      id="projects"
      style={{
        background: `radial-gradient(circle at 70% 20%, #1e1b4b 0%, transparent 40%),
          radial-gradient(circle at 20% 80%, #0c4a6e 0%, transparent 35%),
          #020617`,
      }}
      className="w-full min-h-screen py-28 px-4 md:px-10 lg:px-16 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full mb-12">
        <h2 className="text-5xl font-bold text-white">
          Featured{" "}
          <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">
          A collection of things I've built — from full-stack gamified apps to algorithmic simulators.
          Click a tab to explore.
        </p>
      </div>

      
      <div className="max-w-6xl w-full overflow-hidden rounded-t-xl rounded-b-lg shadow-[0_30px_80px_rgba(0,0,0,0.7)] border border-slate-700/50">

        <div
          className="flex items-center justify-between select-none"
          style={{ background: "#1a1c2e", height: "30px", paddingLeft: "10px" }}
        >
          <div className="flex items-center gap-2">
            <span style={{ fontSize: "13px" }}>{active.tabEmoji}</span>
            <span className="text-slate-400 truncate max-w-xs" style={{ fontSize: "11px" }}>
              {active.title} — Abhishek Bhatt
            </span>
          </div>

          {/* ─ □ ✕ */}
          <div className="flex h-full">
            <button
              className="flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              style={{ width: "44px", height: "30px", fontSize: "14px" }}
              title="Minimize"
            >
              ─
            </button>
            <button
              className="flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              style={{ width: "44px", height: "30px" }}
              title="Maximize"
            >
              <span style={{ border: "1.2px solid currentColor", width: "11px", height: "11px", display: "block" }} />
            </button>
            <button
              className="flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 transition-colors rounded-tr-xl"
              style={{ width: "44px", height: "30px", fontSize: "13px" }}
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>
        <div
          className="flex items-center gap-2 px-2 py-1.5"
          style={{ background: "#1e2440", borderBottom: "1px solid #2d3560" }}
        >
          <div className="flex items-center gap-0 flex-shrink-0">
            <button
              className="p-1.5 text-slate-500 hover:text-slate-300 hover:bg-white/10 rounded transition-all duration-150"
              title="Back"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              className="p-1.5 text-slate-500 hover:text-slate-300 hover:bg-white/10 rounded transition-all duration-150"
              title="Forward"
            >
              <ChevronRight size={15} />
            </button>
            <button
              className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-white/10 rounded transition-all duration-150"
              title="Refresh"
            >
              <RefreshCw size={13} />
            </button>
          </div>

          <div
            className="flex items-center flex-1 overflow-hidden"
            style={{ border: "1px solid #3a5080", background: "#0d1428", borderRadius: "2px" }}
          >
            <div className="flex items-center gap-2 flex-1 px-2 py-1">
              <Lock size={10} className="text-green-500 flex-shrink-0" />
              <span
                className="flex-1 truncate font-mono"
                style={{ fontSize: "11px", color: active.accentColor + "ee" }}
              >
                https://{active.url}
              </span>
            </div>
            {/* Go button */}
            <button
              className="flex items-center justify-center px-3 py-1 text-slate-300 hover:text-white border-l font-semibold transition-all duration-150"
              style={{ background: "#243060", borderColor: "#3a5080", fontSize: "11px", borderRadius: "0 2px 2px 0" }}
            >
              Go
            </button>
          </div>

          {active.githubUrl && (
            <a
              href={active.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-all duration-200 flex-shrink-0"
              title="View on GitHub"
            >
              <FaGithub size={15} />
            </a>
          )}

          <span className="text-slate-700 select-none">|</span>
          <button
            className="p-1.5 text-slate-500 hover:text-slate-300 hover:bg-white/10 rounded transition-all duration-150 flex-shrink-0"
            style={{ fontSize: "14px" }}
          >
            ⋮
          </button>
        </div>

        <div
          className="flex items-end overflow-x-auto scrollbar-none"
          style={{
            background: "#141828",
            borderBottom: "1px solid #1e2a4a",
            padding: "5px 6px 0",
            gap: "2px",
            minHeight: "34px",
          }}
        >
          {PROJECTS.map((project, i) => {
            const isActive = activeTab === i;
            return (
              <button
                key={project.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-1.5 flex-shrink-0 transition-all duration-200
                  ${isActive ? "text-slate-100" : "text-slate-500 hover:text-slate-300"}`}
                style={{
                  padding: "5px 16px 6px",
                  borderRadius: "3px 3px 0 0",
                  fontSize: "12px",
                  fontWeight: isActive ? 600 : 400,
                  background: isActive ? "#1e2440" : "#0f1422",
                  border: isActive ? "1px solid #2d3560" : "1px solid transparent",
                  borderBottom: isActive
                    ? `2px solid ${project.accentColor}`
                    : "1px solid transparent",
                  marginBottom: isActive ? "-1px" : "0",
                  zIndex: isActive ? 10 : 1,
                  boxShadow: isActive ? `0 -2px 8px ${project.accentColor}20` : "none",
                }}
              >
                <span style={{ fontSize: "13px" }}>{project.tabEmoji}</span>
                <span className="hidden sm:inline truncate" style={{ maxWidth: "110px" }}>
                  {project.tabLabel}
                </span>
              </button>
            );
          })}

          {/* More on GitHub */}
          <a
            href="https://github.com/AKB9988"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 flex-shrink-0 text-slate-600 hover:text-slate-400 transition-all duration-200 ml-auto"
            style={{
              padding: "5px 13px 6px",
              borderRadius: "3px 3px 0 0",
              fontSize: "11px",
              background: "#0f1422",
              border: "1px solid transparent",
            }}
          >
            <FaGithub size={11} />
            <span className="hidden sm:inline">More on GitHub</span>
          </a>
        </div>

        <div style={{ background: "#0f172a", minHeight: "520px" }}>
          <div key={active.id} style={{ animation: "fadeSlideIn 0.3s ease-out" }}>
            <ProjectCard project={active} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
