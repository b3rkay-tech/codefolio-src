const ME = {
  name:     "Your Name",
  role:     "Your Role / Title",          
  bio:      "Short bio line — one sentence about who you are and what you do.",
  github:   "https://github.com/username",
  email:    "your.email@example.com",
  linkedin: "https://linkedin.com/in/username",
};

const ABOUT = [
  "First paragraph about yourself. Where you've worked, what you've built, how long you've been doing it. Keep it honest and short.",
  "Second paragraph — what kind of work you care about, what draws you to certain problems, or how you approach engineering.",
];

const PROJECTS = [
  {
    title:       "Project Title 1",
    year:        "2024",
    description: "One or two sentences describing what this project does, why you built it, and what problem it solves. Keep it plain.",
    tech:        ["Tech 1", "Tech 2", "Tech 3"],
    github:      "https://github.com/username/project-1",
    live:        "https://project-1.example.com",  // set to null if no link :D
  },
  {
    title:       "Project Title 2",
    year:        "2024",
    description: "One or two sentences describing what this project does, why you built it, and what problem it solves. Keep it plain.",
    tech:        ["Tech 1", "Tech 2"],
    github:      "https://github.com/username/project-2",
    live:        null,
  },
  {
    title:       "Project Title 3",
    year:        "2023",
    description: "One or two sentences describing what this project does, why you built it, and what problem it solves. Keep it plain.",
    tech:        ["Tech 1", "Tech 2", "Tech 3"],
    github:      "https://github.com/username/project-3",
    live:        "https://project-3.example.com",
  },
];

const SKILLS = [
  { label: "Languages", items: "Language 1, Language 2, Language 3, Language 4" },
  { label: "Frontend",  items: "Framework 1, Framework 2, Tool 1, Tool 2" },
  { label: "Backend",   items: "Framework 1, Framework 2, Database 1, Database 2" },
  { label: "Tooling",   items: "Tool 1, Tool 2, Tool 3, Tool 4" },
];

const NAV = ["About", "Projects", "Skills", "Contact"];



export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111] relative">

      
      <div aria-hidden="true" style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden",
      }}>
        {/* Top-left indigo */}
        <div style={{
          position: "absolute",
          width: "600px", height: "600px",
          top: "-120px", left: "-120px",
          background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0.12) 45%, transparent 70%)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }} />
        
        <div style={{
          position: "absolute",
          width: "650px", height: "600px",
          bottom: "-140px", right: "-140px",
          background: "radial-gradient(circle, rgba(168,85,247,0.30) 0%, rgba(168,85,247,0.10) 45%, transparent 70%)",
          filter: "blur(70px)",
          borderRadius: "50%",
        }} />
        
        <div style={{
          position: "absolute",
          width: "500px", height: "400px",
          top: "45%", left: "55%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.06) 50%, transparent 70%)",
          filter: "blur(80px)",
          borderRadius: "50%",
        }} />
      </div>

      
      <div className="relative" style={{ zIndex: 1 }}>

      
      <div className="max-w-2xl mx-auto px-6 pt-8 pb-0 flex items-center justify-between">
        <span className="mono text-xs text-[#aaa] tracking-widest">~/portfolio</span>
        <nav className="flex gap-6">
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className="mono text-xs text-[#888] hover:text-[#4f46e5] transition-colors duration-150 tracking-wide"
            >
              {n}
            </a>
          ))}
        </nav>
      </div>

      
      <header className="max-w-2xl mx-auto px-6 pt-16 pb-12 border-b border-[#ebebeb]">
        <h1 className="text-[2.75rem] font-semibold leading-tight tracking-tight mb-3">
          {ME.name}
        </h1>
        <p className="text-base text-[#888] mono mb-5 tracking-wide">
          {ME.role}
        </p>
        <p className="text-lg text-[#555] leading-relaxed mb-7 max-w-lg">
          {ME.bio}
        </p>
        <div className="mono text-[0.78rem] flex flex-wrap gap-x-5 gap-y-2 text-[#777]">
          <a href={ME.github}   target="_blank" rel="noopener noreferrer" className="link-accent">
            {ME.github.replace("https://", "")}
          </a>
          <a href={`mailto:${ME.email}`} className="link-accent">
            {ME.email}
          </a>
          <a href={ME.linkedin} target="_blank" rel="noopener noreferrer" className="link-accent">
            {ME.linkedin.replace("https://", "")}
          </a>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6">

        
        <section id="about" className="py-12 border-b border-[#ebebeb]">
          <h2 className="mono text-[0.65rem] tracking-[0.18em] uppercase text-[#aaa] mb-6">
            About
          </h2>
          {ABOUT.map((para, i) => (
            <p key={i} className="text-[1.05rem] leading-[1.85] text-[#333] mb-4 last:mb-0">
              {para}
            </p>
          ))}
        </section>

        
        <section id="projects" className="py-12 border-b border-[#ebebeb]">
          <h2 className="mono text-[0.65rem] tracking-[0.18em] uppercase text-[#aaa] mb-8">
            Projects
          </h2>
          <div className="flex flex-col gap-10">
            {PROJECTS.map((p) => (
              <article key={p.title}>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  <span className="mono text-[0.7rem] text-[#bbb] shrink-0">{p.year}</span>
                </div>
                <p className="text-[1.0rem] leading-[1.8] text-[#444] mb-3">
                  {p.description}
                </p>
                <p className="mono text-[0.7rem] text-[#aaa] mb-3 tracking-wide">
                  {p.tech.join(" · ")}
                </p>
                <div className="flex gap-5 mono text-[0.72rem]">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent text-[#777]"
                  >
                    source ↗
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent text-[#777]"
                    >
                      live ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        
        <section id="skills" className="py-12 border-b border-[#ebebeb]">
          <h2 className="mono text-[0.65rem] tracking-[0.18em] uppercase text-[#aaa] mb-8">
            Skills
          </h2>
          <div className="flex flex-col gap-5">
            {SKILLS.map((row) => (
              <div key={row.label} className="flex gap-8 sm:items-baseline flex-col sm:flex-row">
                <span className="mono text-[0.65rem] text-[#bbb] uppercase tracking-[0.15em] w-24 shrink-0 pt-px">
                  {row.label}
                </span>
                <span className="text-[1.0rem] text-[#333] leading-relaxed">{row.items}</span>
              </div>
            ))}
          </div>
        </section>

        
        <section id="contact" className="py-12">
          <h2 className="mono text-[0.65rem] tracking-[0.18em] uppercase text-[#aaa] mb-6">
            Contact
          </h2>
          <p className="text-[1.05rem] leading-[1.85] text-[#333] mb-7 max-w-md">
            Open to new opportunities — full-time, contract, or interesting
            collaborations. Email is the best way to reach me.
          </p>
          <a
            href={`mailto:${ME.email}`}
            className="text-[1.4rem] font-semibold link-accent"
          >
            {ME.email}
          </a>
        </section>

      </main>

      
      <footer className="max-w-2xl mx-auto px-6 py-8 border-t border-[#ebebeb]">
        <p className="mono text-[0.68rem] text-[#ccc]">
          open source —{" "}
          <a
            href={ME.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
          >
            view source ↗
          </a>
        </p>
      </footer>

      </div>
    </div>
  );
}
