import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const navItems = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];


const socialLinks = [
  { icon: <FaGithub />,   href: "https://github.com/AKB9988",              label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/abhishek-kumar-bhatt-37b801340/",     label: "LinkedIn" },
  { icon: <FaEnvelope />, href: "mailto:bhattak.iiits.100@gmail.com",            label: "Email" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavClick() {
    setIsOpen(false);
  }

  return (
    <nav
      className="
      fixed
      top-6 left-1/2 -translate-x-1/2 z-50
      w-[90%] max-w-6xl
      px-6 py-3
      flex items-center justify-between
      rounded-full
      bg-indigo-950/40
      backdrop-blur-xl
      border border-indigo-900/35
      shadow-[0_8px_32px_rgba(5,1,28,0.3)]
      "
    >
      <a
        href="#hero"
        className="text-xl md:text-2xl font-extrabold whitespace-nowrap bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent hover:opacity-85 transition-opacity"
      >
        Abhishek Bhatt
      </a>

      
      <ul className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="cursor-pointer rounded-full px-4 py-2 font-semibold text-indigo-100 transition-all duration-300 hover:bg-indigo-900/45 hover:text-sky-300"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

   
      <div className="hidden md:flex items-center gap-2 text-xl text-indigo-200">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={social.label}
            className="rounded-full p-2 transition-all duration-300 hover:bg-indigo-900/45 hover:text-sky-300"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* <a
        href="#contact"
        className="hidden md:flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-300 hover:to-indigo-400 text-white font-semibold shadow-md shadow-sky-500/10 hover:shadow-sky-500/20 active:scale-95 transition-all duration-300 text-sm cursor-pointer"
      >
        Say Hi
      </a> */}

    
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
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="
                  block
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
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mx-4 border-t border-indigo-900/40" />

          <div className="flex justify-center gap-8 py-5 text-xl text-indigo-200">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="transition hover:text-sky-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}