
import { useState } from "react";
import { FaJava, FaReact, FaAndroid, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiPostman, SiIntellijidea, SiSpringsecurity } from "react-icons/si";
import { FaFileCode, FaCode, FaServer, FaDatabase, FaMobileAlt, FaTools, FaFileAlt, FaFolderOpen, FaRegLightbulb,} from "react-icons/fa";
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
  { title: "Tools", icon: <FaTools className="text-orange-400 text-3xl" />, techs: ["Git", "GitHub", "Postman", "Maven", "VS Code", "IntelliJ IDEA", "Android Studio"] },
  { title: "Projects", icon: <FaFolderOpen className="text-sky-400 text-3xl" />, techs: ["GoldGuild", "AlertX", "Portfolio"] },
  { title: "Hint", icon: <FaRegLightbulb className="text-white text-3xl" />, techs: ["Press any key to explore my technical skills"] },
  { title: "Resume", icon: <FaFileAlt className="text-red-400 text-3xl" />, techs: ["Download PDF", "Education", "Achievements"] },
];

export default function Skills() {

  const [selected, setSelected] = useState("Hint");
  const selectedTech = TECHS.find((tech) => tech.title === selected);
  return (

    <div
      style={{
        background:
          `radial-gradient(circle at 20% 20%, #04364d 0%, transparent 30%),
              radial-gradient(circle at 80% 30%, #2564ebd0 0%, transparent 30%),
              radial-gradient(circle at 50% 80%, #06b5d448 0%, transparent 35%),
            #020617`
      }}
      className="w-full min-h-screen py-28 px-6 md:px-16 lg:px-24 flex  justify-between"
    >
      <div>
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
      <div className=" h-[565px] rounded-[40px] bg-slate-900 border-4 border-slate-700 shadow-xl mr-15">

      
        <div className="w-20 h-2 rounded-full bg-slate-700 mx-auto mt-4" />

        
        <div className="mx-5 mt-5 h-56 bg-indigo-200  w-80 h-70">

          
          <SkillCard heading={selectedTech.title} techs={selectedTech.techs} icon={selectedTech.icon}/>
          

        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-3 px-5 mt-5">
          {TECHS.map((tech) =>
            <button key={tech} onClick={()=>setSelected(tech.title)} className={` h-14 rounded-xl p-1 border-2 flex flex-col items-center justify-center transition-all duration-300
                ${selected === tech.title
                ? "scale-95 bg-slate-700 border-amber-400/40 shadow-[0_0_15px_rgba(251,191,36,0.25)]"
                : "bg-slate-800 border-slate-700 hover:scale-95 hover:border-slate-500"
              }`}>
              {tech.icon}
              <div className="text-xs flex justify-center items-center mt-[2px] text-white">
                {tech.title}

              </div>
            </button>
          )}


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




