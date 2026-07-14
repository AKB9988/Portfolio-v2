
import { useState } from "react";
import { FaJava, FaReact, FaAndroid, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiPostman, SiSpringsecurity } from "react-icons/si";
import { FaFileCode, FaCode, FaServer, FaDatabase, FaMobileAlt, FaTools, FaRegLightbulb, FaGraduationCap, FaTrophy } from "react-icons/fa";
import SkillCard from "./SkillCard.jsx"
const logos = [
  { icon: FaJava, color: "text-orange-500", label: "Java", style: { top: '5%', left: '5%' } },
  { icon: FaReact, color: "text-cyan-400", label: "React", style: { top: '10%', left: '30%' } },
  { icon: SiSpringboot, color: "text-green-500", label: "SpringBoot", style: { top: '5%', left: '58%' } },
  { icon: SiPostman, color: "text-orange-400", label: "PostMan", style: { top: '25%', left: '82%' } },
  { icon: SiMysql, color: "text-blue-400", label: "MySQL", style: { top: '40%', left: '10%' } },
  { icon: FaAndroid, color: "text-lime-400", label: "Android", style: { top: '45%', left: '45%' } },
  { icon: SiSpringsecurity, color: "text-green-400", label: "Spring Security", style: { top: '50%', left: '70%' } },
  { icon: FaGitAlt, color: "text-orange-500", label: "Git", style: { top: '70%', left: '25%' } },
];
const TECHS = [
  { title: "Languages", icon: <FaFileCode className="text-yellow-400 text-3xl" />, techs: ["Java", "C++", "C", "JavaScript", "SQL"] },
  { title: "Frontend", icon: <FaCode className="text-cyan-400 text-3xl" />, techs: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "TanStack Query"] },
  { title: "Backend", icon: <FaServer className="text-green-500 text-3xl" />, techs: ["Spring Boot", "Spring Security", "REST APIs", "JWT", "Hibernate", "JPA", "MVC"] },
  { title: "Database", icon: <FaDatabase className="text-blue-400 text-3xl" />, techs: ["MySQL", "Oracle", "Firebase", "Supabase"] },
  { title: "Mobile", icon: <FaMobileAlt className="text-lime-400 text-3xl" />, techs: ["Android (Java)", "XML", "MQTT"] },
  { title: "Tools",        icon: <FaTools className="text-orange-400 text-3xl" />,       techs: ["Git", "GitHub", "Postman", "Maven", "VS Code", "IntelliJ IDEA", "Android Studio"] },
  { title: "Education",    icon: <FaGraduationCap className="text-purple-400 text-3xl" />, techs: ["B.Tech - CSE", "IIIT Sonepat", "2024 – 2028"] },
  { title: "Achievements", icon: <FaTrophy className="text-amber-400 text-3xl" />,         techs: ["Academic Excellence Award", "9+ CGPA", "Hacktivate Finalist"] },
  { title: "Hint",         icon: <FaRegLightbulb className="text-white text-3xl" />,        techs: ["Press any key to explore my technical skills"] },
];

export default function Skills() {

  const [selected, setSelected] = useState("Hint");
  const selectedTech = TECHS.find((tech) => tech.title === selected);
  return (

    <div
      id="skills"
      style={{
        background:
          `radial-gradient(circle at 20% 20%, #04364d 0%, transparent 30%),
              radial-gradient(circle at 80% 30%, #2564ebd0 0%, transparent 30%),
              radial-gradient(circle at 50% 80%, #06b5d448 0%, transparent 35%),
            #020617`
      }}
      className="w-full min-h-screen py-28 px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12"
    >
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold text-white">
            Technical{" "}
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">
            Technologies, frameworks, and tools I use to create performant applications.
          </p>
        </div>


        <div className="relative w-full mt-20 h-[400px]">
          {logos.map(({ icon: Icon, color, label, style }, index) => (
            <div
              key={label}
              style={{
                position: 'absolute',
                ...style,
                animation: `float 4s ease-in-out ${index * 0.3}s infinite`,
              }}
            >
              <div className="w-24 h-24 rounded-3xl bg-slate-900 border border-slate-700 flex flex-col items-center justify-center hover:scale-110 transition duration-300 cursor-pointer">
                <Icon className={`${color} text-5xl`} />
                <span className="text-xs text-slate-300 mt-2">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Phone */}
      <div className="flex-shrink-0 w-[360px] h-[600px] rounded-[40px] bg-slate-950 border-4 border-slate-800 shadow-2xl flex flex-col p-4 justify-between lg:mr-8">
        
        {/* Notch */}
        <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto flex items-center justify-center gap-1.5 border border-slate-800 mb-2">
          <div className="w-12 h-1 bg-slate-700 rounded-full" />
          <div className="w-2 h-2 bg-slate-800 rounded-full border border-slate-700" />
        </div>

        {/* Screen */}
        <div className="flex-1 my-3 bg-indigo-100/90 border border-slate-700/30 rounded-2xl p-4 flex flex-col shadow-inner overflow-hidden">
          <SkillCard heading={selectedTech.title} techs={selectedTech.techs} icon={selectedTech.icon} />
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-2 px-1">
          {TECHS.map((tech) => (
            <button
              key={tech.title}
              onClick={() => setSelected(tech.title)}
              className={`h-16 rounded-xl p-1 border flex flex-col items-center justify-center transition-all duration-300 ${
                selected === tech.title
                  ? "scale-95 bg-slate-800 border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.2)]"
                  : "bg-slate-900 border-slate-800 hover:scale-95 hover:border-slate-700"
              }`}
            >
              <div className="text-xl flex justify-center items-center text-slate-300">{tech.icon}</div>
              <div className="text-[10px] md:text-xs flex justify-center items-center mt-[2px] text-slate-300 font-medium">
                {tech.title}
              </div>
            </button>
          ))}
        </div>

      </div>
      {/* <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-8">
            {TECHS.map(({title,icon,techs})=>   <SkillCard heading={title} techs={techs} icon={icon} />)}
          </div> */}
      <style>{`
        @keyframes float {
          0%,100%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-15px);
          }
        }
      `}</style>
    </div>


  );
}




