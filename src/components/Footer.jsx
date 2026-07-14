// Social media icons as simple SVGs (no extra library needed)
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452H17.21v-5.569c0-1.327-.024-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.985V9h3.107v1.561h.044c.433-.82 1.49-1.684 3.067-1.684 3.279 0 3.884 2.158 3.884 4.966v6.609zM5.337 7.433a1.803 1.803 0 1 1 0-3.606 1.803 1.803 0 0 1 0 3.606zm1.604 13.019H3.731V9h3.21v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

// Quick nav links — update hrefs to match your section IDs
const navLinks = [
  { label: "Home",     href: "#hero" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

// Social links — update URLs to your real profiles
const socialLinks = [
  { label: "GitHub",   href: "https://github.com/yourprofile",          icon: <GithubIcon />   },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile",     icon: <LinkedinIcon /> },
  { label: "Twitter",  href: "https://twitter.com/yourhandle",          icon: <TwitterIcon />  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#060d1a] border-t border-slate-800">

      {/* Thin gradient line at the very top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center gap-8">

        {/* Logo / Name */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xl font-black text-white tracking-tight">
            Abhishek<span className="text-cyan-400">.</span>
          </span>
          <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">
            Full-Stack Developer
          </span>
        </div>

        {/* Quick navigation links */}
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

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-200"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-800" />

        {/* Copyright */}
        <p className="text-slate-600 text-xs font-mono text-center">
          © {year} Abhishek B. · Built with{" "}
          <span className="text-cyan-500">React</span> &amp;{" "}
          <span className="text-indigo-400">Tailwind CSS</span>
        </p>

      </div>
    </footer>
  );
}
