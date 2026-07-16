import { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";


function CircularText({ text, radius = 115 }) {
  const chars = text.split("");
  const anglePerChar = 360 / chars.length;

  return (
    <svg
      viewBox="0 0 300 300"
      className="absolute inset-0 w-full h-full splash-spin"
    >
      {chars.map((char, i) => {
        const angle = anglePerChar * i - 90;            
        const rad = (angle * Math.PI) / 180;
        const x = 150 + radius * Math.cos(rad);
        const y = 150 + radius * Math.sin(rad);
        return (
          <text
            key={i}
            x={x}
            y={y}
            fontSize="12"
            fill="rgba(186,230,253,0.9)"
            fontWeight="600"
            textAnchor="middle"
            dominantBaseline="central"
            transform={`rotate(${angle + 90}, ${x}, ${y})`}
          >
            {char}
          </text>
        );
      })}
    </svg>
  );
}

export default function SplashScreen({ onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setVisible(false), 2400);
    const doneTimer = setTimeout(() => onDone?.(), 2800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 55%, #0c1a3a 100%)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease-out",
        pointerEvents: visible ? "auto" : "none",
      }}
    >

      <div className="relative flex items-center justify-center" style={{ width: 300, height: 300 }}>

      
        <div className="absolute inset-0 rounded-full border border-dashed border-slate-500/30" />

        
        <CircularText text="Hello, I'm Abhishek ? Hello, I'm Abhishek ? " />

        <div
          className="relative z-10 overflow-hidden rounded-full"
          style={{
            width: 190,
            height: 190,
            border: "4px solid rgba(99,102,241,0.75)",
            boxShadow: "0 0 0 8px rgba(99,102,241,0.12), 0 0 50px rgba(99,102,241,0.4)",
          }}
        >
          <img
            src={avatar}
            alt="Abhishek Bhatt"
            className="w-full h-full object-cover object-top"
          />
        </div>

      </div>

      <p className="mt-6 text-xs tracking-[0.25em] uppercase text-slate-400">
        Full Stack Developer
      </p>

      
      <div className="absolute bottom-10 w-32 h-[2px] rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full splash-bar bg-gradient-to-r from-indigo-500 to-sky-400" />
      </div>
    </div>
  );
}
