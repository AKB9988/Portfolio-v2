export default function SkillCard({ heading, techs, icon }) {
  return (
    <div className="h-full flex flex-col text-slate-900 pt-2">

      
      <div className="flex items-center justify-center gap-3 pb-3 border-b border-slate-400">
        <div className="text-2xl">
          {icon}
        </div>

        <h2 className="text-2xl font-bold">
          {heading}
        </h2>
      </div>

     
      <p className="text-center text-sm text-slate-600 mt-2">
        {techs.length} {techs.length === 1 ? "item" : "items"}
      </p>

     
      <div className="mt-4 flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {techs.map((tech) => (
            <li
              key={tech}
              className="flex items-center gap-3 rounded-lg bg-white/40 px-3 py-2 transition hover:bg-white/60"
            >
              <span className="text-cyan-600 font-bold">▸</span>

              <span className="text-sm font-medium">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}