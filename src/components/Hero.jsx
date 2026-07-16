import { ArrowRight, Download } from "lucide-react";
import avatar from '../assets/avatar.png'
export default function Hero() {
  return (
    <section id="hero" aria-label="Hero" className="relative min-h-screen overflow-hidden bg-indigo-300 flex items-center">

      <div className="mx-auto flex flex-col md:flex-row min-h-screen max-w-7xl items-center justify-between px-6 md:px-10 py-24 md:py-0 gap-10">
        
        <div className="flex justify-center md:justify-start items-end max-w-sm md:max-w-lg lg:max-w-xl w-full self-center md:self-end">
          <img 
            src={avatar} 
            alt="Abhishek Bhatt" 
            className="max-h-[30vh] sm:max-h-[50vh] md:max-h-[80vh] lg:max-h-[90vh] w-auto object-contain" 
          />
        </div>

        <div className="max-w-xl flex flex-col justify-center text-center md:text-left items-center md:items-start w-full">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-indigo-950">
            Abhishek
            <br />
            Bhatt
          </h1>

          <h2 className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent">
            Full Stack Java Developer
          </h2>

          <p className="mt-6 text-justify text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 max-w-md md:max-w-none">
            Transforming ideas into reliable digital products with Java, Spring Boot, React, and modern web technologies. I enjoy building scalable backend systems and intuitive user experiences.
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <a 
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 md:px-8 md:py-4 font-semibold text-white shadow-xl hover:opacity-90 transition cursor-pointer"
            >
              View Projects
              <ArrowRight size={20} />
            </a>

            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-blue-500 px-6 py-3 md:px-8 md:py-4 font-semibold text-indigo-950 hover:bg-blue-500/10 transition cursor-pointer"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}