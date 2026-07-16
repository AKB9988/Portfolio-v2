import techBg from '../assets/tech-portfolio-bg.png';
import { Terminal } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${techBg})` }}
        >
            <div className="bg-black/65 min-h-screen w-full pt-32 pb-20 flex flex-col lg:flex-row justify-between gap-10 px-8 lg:px-20">

                <div className="w-full lg:w-[45%] flex flex-col text-left">
                    <h1 className='text-5xl font-bold text-white'>About Me</h1>

                    <p className="text-slate-300 mt-6 leading-relaxed text-lg">
                        I am a backend-focused developer and tech enthusiast from IIIT Sonepat.
                        I specialize in building full-stack applications, REST APIs, and Android
                        systems that solve real problems not just tutorial clones.
                    </p>

                    <p className="text-slate-400 mt-4 leading-relaxed text-lg">
                        I'm constantly diving deep into Spring Boot architecture, JWT security
                        systems, and Object-Oriented Systems. Beyond writing clean code, I enjoy
                        shipping things that actually work. I take messy, ambiguous problems
                        and turn them into products that scale.
                    </p>

              
                    <div className="flex flex-wrap justify-start gap-6 sm:gap-12 mt-10 pl-2">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 rounded-2xl border-2 border-amber-400/40 flex items-center justify-center text-xl font-bold text-white shadow-inner bg-slate-900/30">
                                5+
                            </div>
                            <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Projects</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 rounded-2xl border-2 border-amber-400/40 flex items-center justify-center text-xl font-bold text-white shadow-inner bg-slate-900/30">
                                2+
                            </div>
                            <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Years</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 rounded-2xl border-2 border-amber-400/40 flex items-center justify-center text-xl font-bold text-white shadow-inner bg-slate-900/30">
                                5+
                            </div>
                            <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Techs</span>
                        </div>
                    </div>

                    <div className="hidden md:grid md:grid-cols-2 gap-3 mt-10">
                        {[
                            { label: "Location",  value: "India" },
                            { label: "College",   value: "IIIT Sonepat" },
                            { label: "Batch",     value: "2024 – 2028" },
                            { label: "Status",    value: "Open to Opportunities" },
                            { label: "Focus",     value: "Backend & Full-Stack" },
                            { label: "Main Lang", value: "Java" },
                        ].map((fact) => (
                            <div key={fact.label} className="flex flex-col bg-slate-900/40 border border-slate-700/50 rounded-xl px-4 py-3">
                                <span className="text-xs text-slate-500 font-mono uppercase tracking-wide">{fact.label}</span>
                                <span className="text-sm text-slate-200 font-semibold mt-0.5">{fact.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-[48%] bg-[#081325] rounded-xl border border-slate-800 shadow-xl overflow-hidden font-mono text-sm flex flex-col">

          
                    <div className="flex items-center justify-between bg-[#0f172a] border-b border-slate-700 h-10 px-4 flex-shrink-0">
                        <div className="flex items-center gap-2">
                            <Terminal size={16} className="text-slate-300" />
                            <span className="text-xs sm:text-sm text-slate-300 font-medium"><span className="hidden sm:inline">Windows </span>PowerShell</span>
                        </div>
                        <div className="flex items-center text-slate-400" aria-hidden="true">
                            <span className="w-10 h-10 flex items-center justify-center">&#9472;</span>
                            <span className="w-10 h-10 flex items-center justify-center">&#9633;</span>
                            <span className="w-10 h-10 flex items-center justify-center text-red-400">&#10005;</span>
                        </div>
                    </div>

                    <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm md:text-base leading-7 text-slate-300 overflow-x-auto flex-1">

                        <p><span className="text-blue-400">PS</span><span className="text-slate-500"> &gt; </span>whoami</p>
                        <p className="text-white">Abhishek Kumar Bhatt</p>
                        <br />

                        <p><span className="text-blue-400">PS</span><span className="text-slate-500"> &gt; </span>cat role.txt</p>
                        <p className="text-cyan-400">Full Stack Developer • Android Developer</p>
                        <br />

                        <p><span className="text-blue-400">PS</span><span className="text-slate-500"> &gt; </span>ls skills</p>
                        <p className="text-amber-400">Java • Spring Boot • React  Android</p>
                        <br />

                        <p><span className="text-blue-400">PS</span><span className="text-slate-500"> &gt; </span>cat education.txt</p>
                        <p className="text-green-400">B.Tech CSE — IIIT Sonepat (2024–2028)</p>
                        <br />

                        <p><span className="text-blue-400">PS</span><span className="text-slate-500"> &gt; </span>cat interests.txt</p>
                        <p className="text-pink-400">System Design • Hackathons • Competitive Programming</p>
                        <br />

                        <p><span className="text-blue-400">PS</span><span className="text-slate-500"> &gt; </span>echo "Building products that make an impact."</p>
                        <p className="text-purple-400">Building products that make an impact.</p>
                        <br />

                        <p>
                            <span className="text-blue-400">PS</span>
                            <span className="text-slate-500"> &gt; </span>
                            <span className="animate-pulse text-white">█</span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
