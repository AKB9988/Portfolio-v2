import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#eef2ff]">

      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-10">

        {/* Left */}

        <div className="max-w-xl">
            
          <h1 className="text-7xl font-black leading-tight">
            Abhishek
            <br />
            Bhatt
          </h1>

          <h2 className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-4xl font-bold text-transparent">
            Full Stack Java Developer
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            I build scalable backend systems with Spring Boot,
            React and modern cloud technologies.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl">

              View Projects

              <ArrowRight size={20} />

            </button>

            <button className="flex items-center gap-2 rounded-full border-2 border-blue-500 px-8 py-4 font-semibold">

              <Download size={18} />

              Resume

            </button>

          </div>

        </div>

        {/* Right */}

        <div className="relative">

          <div className="flex h-[420px] w-[420px] items-center justify-center rounded-[90px] bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 rotate-12 shadow-2xl">

            <h1 className="rotate-[-12deg] text-8xl font-black text-white">
              {"</>"}
            </h1>

          </div>
          <div className="absolute -left-10 top-10 h-12 w-12 rounded-full bg-pink-400" />

          <div className="absolute bottom-0 left-0 h-8 w-8 rounded-full bg-yellow-400" />

        </div>

      </div>

    </section>
  );
}