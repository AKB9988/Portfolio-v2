import techBg from '../assets/tech-portfolio-bg.png';
import { Terminal } from "lucide-react";
export default function About() {
    return (
        <section
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${techBg})` }}
        >

            <div className="bg-black/65  min-h-screen w-full pt-32 flex justify-between pl-20">
                <div className="w-full lg:w-[45%] flex flex-col text-left mt-10">

                    <p className="text-slate-300 mt-6 leading-relaxed text-lg">
                        I am a backend-focused developer and tech enthusiast from IIIT Sonepat. I specialize in building full-stack applications, REST APIs, and Android systems that solve real problems — not just tutorial clones.

                    </p>

                    <p className="text-slate-400 mt-4 leading-relaxed text-lg">
                        I'm constantly diving deep into Spring Boot architecture, JWT security systems, and Object-Oriented Systems. Beyond writing clean code, I enjoy shipping things that actually work. I take messy, ambiguous problems and turn them into products that scale.

                    </p>
                    <div className="flex justify-start gap-12 mt-10 pl-2">
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

                </div>
                <div className="w-full lg:w-[45%] bg-[#081325] opacity-80 rounded-xl border border-slate-800 shadow-xl overflow-hidden font-mono text-sm mx-auto h-[80%] ">
                    <div className="flex items-center justify-between bg-[#0f172a] border-b border-slate-700 h-10 px-4">
                        <div className="flex items-center gap-2">
                             <Terminal size={16} className="text-slate-300" />
                            <span className="text-sm text-slate-300 font-medium">
                                Windows PowerShell
                            </span>
                        </div>
                        <div className="flex items-center text-slate-400">
                            <button className="w-10 h-10 hover:bg-slate-700 transition">
                                &#9472;
                            </button>
                            <button className="w-10 h-10 hover:bg-slate-700 transition">
                                &#9633;
                            </button>
                            <button className="w-10 h-10 hover:bg-red-600 hover:text-white transition">
                                &#10005;
                            </button>
                        </div>

                    </div>
                    <div className="p-6 font-mono text-sm md:text-base leading-7 text-slate-300 overflow-x-auto">

                        <p>
                            <span className="text-blue-400">PS</span>
                            <span className="text-slate-500"> &gt; </span>
                            whoami
                        </p>
                        <p className="text-white">Abhishek Kumar Bhatt</p>
                        <br />
                        <p>
                            <span className="text-blue-400">PS</span>
                            <span className="text-slate-500"> &gt; </span>
                            cat role.txt
                        </p>
                        <p className="text-cyan-400">
                            Full Stack Developer • Android Developer
                        </p>
                        <br />
                        <p>
                            <span className="text-blue-400">PS</span>
                            <span className="text-slate-500"> &gt; </span>
                            ls skills
                        </p>
                        <p className="text-amber-400">
                            Java&nbsp;&nbsp;Spring Boot&nbsp;&nbsp;React&nbsp;&nbsp;Android
                        </p>
                        <br />
                        <p>
                            <span className="text-blue-400">PS</span>
                            <span className="text-slate-500"> &gt; </span>
                            echo "Building products that make an impact."
                        </p>
                        <p className="text-purple-400">
                            Building products that make an impact.
                        </p>
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