import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const navItems = ["About", "Skills", "Education", "Projects"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
      fixed
      top-6 left-1/2 -translate-x-1/2 z-50
      w-[90%] max-w-6xl
      px-6 py-3
      flex items-center justify-between
      rounded-full
      bg-indigo-950/50
      backdrop-blur-xl
      border border-indigo-900/35
      opacity-30%
      shadow-[0_8px_32px_rgba(5,1,28,0.3)]
      "
    >
      <h1 className="text-xl md:text-2xl font-extrabold whitespace-nowrap cursor-pointer bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent hover:opacity-85 transition-opacity">
        Abhishek Bhatt
      </h1>

      <ul className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <li
            key={item}
            className="cursor-pointer rounded-full px-4 py-2 font-semibold text-indigo-100 transition-all duration-300 hover:bg-indigo-900/45 hover:text-sky-300"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-5 text-xl text-indigo-200">
        <div className="cursor-pointer rounded-full px-2 py-2 font-semibold text-indigo-100 transition-all duration-300 hover:bg-indigo-900/45 hover:text-sky-300">

        <FaGithub className="cursor-pointer transition hover:text-sky-300" />
        </div>
        <div className="cursor-pointer rounded-full px-2 py-2 font-semibold text-indigo-100 transition-all duration-300 hover:bg-indigo-900/45 hover:text-sky-300">

        <FaLinkedin className="cursor-pointer transition hover:text-sky-300" />
        </div>
        <div className="cursor-pointer rounded-full px-2 py-2 font-semibold text-indigo-100 transition-all duration-300 hover:bg-indigo-900/45 hover:text-sky-300">

        <FaEnvelope className="cursor-pointer transition hover:text-sky-300" />
        </div>
      </div>

      <button
        className="hidden md:flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-300 hover:to-indigo-400 text-white font-semibold shadow-md shadow-sky-500/10 hover:shadow-sky-500/20 active:scale-95 transition-all duration-300 text-sm cursor-pointer"
      >
        Say Hi
      </button>

      <button
        className="md:hidden rounded-full p-2 text-indigo-200 transition hover:bg-indigo-900/45 hover:text-sky-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {isOpen && (
        <div
          className="
          absolute
          left-0
          top-full
          mt-4
          w-full
          rounded-3xl
          border border-indigo-900/60
          bg-indigo-950/60
          backdrop-blur-xl
          shadow-[0_8px_32px_rgba(5,1,28,0.5)]
          md:hidden
          "
        >
          <ul className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <li
                key={item}
                className="
                cursor-pointer
                rounded-xl
                px-5 py-3
                text-lg
                font-semibold
                text-indigo-200
                transition-all
                duration-300
                hover:bg-indigo-900/50
                hover:text-sky-300
                "
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mx-4 border-t border-indigo-900/40"></div>

          <div className="flex justify-center gap-8 py-5 text-xl text-indigo-200">
            <FaGithub className="cursor-pointer transition hover:text-sky-300" />
            <FaLinkedin className="cursor-pointer transition hover:text-sky-300" />
            <FaEnvelope className="cursor-pointer transition hover:text-sky-300" />
          </div>
        </div>
      )}
    </nav>
  );
}