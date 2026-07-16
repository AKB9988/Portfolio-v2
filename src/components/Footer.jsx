import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { label: "Home",     href: "#hero" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

const socialLinks = [
  { label: "GitHub",   href: "https://github.com/AKB9988",          icon: <FaGithub className="w-5 h-5" />  },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-kumar-bhatt-37b801340/",     icon: <FaLinkedin className="w-5 h-5" /> },
  { label: "Email",    href: "mailto:bhattak.iiits.100@gmail.com",  icon: <FaEnvelope className="w-5 h-5" /> },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#060d1a] border-t border-slate-800">

    
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center gap-8">


        <div className="flex flex-col items-center gap-1">
          <span className="text-xl font-black text-white tracking-tight">
            Abhishek<span className="text-cyan-400">.</span>
          </span>
          <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">
            Full-Stack Developer
          </span>
        </div>

      
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-cyan-300 text-sm font-mono transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-200"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-slate-800" />

     
        <p className="text-slate-600 text-xs font-mono text-center">
          © {year} Abhishek Bhatt
        </p>

      </div>
    </footer>
  );
}
