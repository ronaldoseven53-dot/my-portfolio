import { useState } from 'react'
import {
  MapPin,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Map,
  Globe,
  Users,
  Zap,
  ChevronDown,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react'

const certificationsData = [
  { company: "Goldman Sachs",          title: "Investment Banking Operations Simulation",  cat: "Finance",     link: "/certificates/goldman-sachs-operations.pdf"  },
  { company: "Lloyds Banking Group",   title: "Commercial & Business Banking",             cat: "Banking",     link: "/certificates/lloyds-banking.pdf"            },
  { company: "Citi",                   title: "Markets Sales & Trading Specialist",         cat: "Finance",     link: "/certificates/citi-markets.pdf"              },
  { company: "Quantium",               title: "Data Analytics & Insights Simulation",       cat: "Analytics",   link: "/certificates/quantium-analytics.pdf"        },
  { company: "Electronic Arts (EA)",   title: "Product Management & Strategy",             cat: "Product",     link: "/certificates/ea-product.pdf"                },
  { company: "Siemens",                title: "Project Management Lifecycle Simulation",    cat: "Management",  link: "/certificates/siemens-pm.pdf"                },
  { company: "EY",                     title: "Technology Risk & Corporate Governance",     cat: "Risk",        link: "/certificates/ey-risk.pdf"                   },
  { company: "Tata Group",             title: "Corporate ESG & Sustainability Strategy",    cat: "Strategy",    link: "/certificates/tata-esg.pdf"                  },
  { company: "Fidelity International", title: "Asset & Investment Management Simulation",  cat: "Finance",     link: "/certificates/fidelity-asset.pdf"            },
  { company: "PNC Bank",               title: "Corporate Financial Services Lifecycle",     cat: "Banking",     link: "/certificates/pnc-bank.pdf"                  },
  { company: "CBRE",                   title: "Commercial Real Estate Sales Strategy",      cat: "Strategy",    link: "/certificates/cbre-sales.pdf"                },
  { company: "London Market",          title: "Risk Management & Claims Analysis",          cat: "Risk",        link: "/certificates/london-market.pdf"             },
]

const upcomingCertificates = [
  {
    title: "Continuous Professional Development (CPD)",
    issuer: "Targeted Industry Frameworks",
    date: "In Progress",
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Certifications']

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans antialiased">

      {/* ── Navigation ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-cyan-400 font-bold text-lg tracking-widest uppercase">NB</span>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link.toLowerCase())}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-left text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-40" />
        {/* Cyan glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 text-cyan-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
            <MapPin size={12} />
            Dhulabari, Nepal → London, UK
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            From{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Nepal
            </span>{' '}
            to{' '}
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              London
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
            Hi, I'm{' '}
            <span className="text-white font-semibold">Nischal Bhetwal</span> — a Business
            Management student at the University of East London, merging hospitality experience
            with tech-driven prototyping to build products that matter.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/25"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold px-8 py-3 rounded-lg transition-all"
            >
              About Me
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollTo('about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-cyan-400 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </button>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-28 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>About Me</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
            Business mind. Builder instinct.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                As a Business Management student at the{' '}
                <span className="text-slate-200 font-medium">University of East London</span>, I
                leverage my high-pressure hospitality experience from{' '}
                <span className="text-slate-200 font-medium">Zoo Bar, Soho</span>, to build
                user-centric business solutions.
              </p>
              <p>
                My flagship project,{' '}
                <span className="text-slate-200 font-medium">City Explorer Nepal</span>, utilizes
                the Google Maps Platform to modernize travel planning in my home region of{' '}
                <span className="text-slate-200 font-medium">Dhulabari, Jhapa</span>.
              </p>
              <p>
                I am bridging the gap between traditional business operations and modern technical
                prototyping — identifying real market needs back home and building the tools to
                meet them.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, title: 'Education', body: 'Business Management\nUniversity of East London' },
                { icon: MapPin, title: 'Origin', body: 'Dhulabari, Jhapa\nNepal' },
                { icon: Briefcase, title: 'Current Role', body: 'Bartender\nZoo Bar, Soho, London' },
                { icon: Globe, title: 'Focus', body: 'Tech prototyping\nfor emerging markets' },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 hover:border-cyan-500/50 transition-colors">
                  <div className="w-9 h-9 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon size={18} className="text-cyan-400" />
                  </div>
                  <p className="text-slate-200 font-semibold text-sm mb-1">{title}</p>
                  <p className="text-slate-500 text-xs whitespace-pre-line leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="py-28 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
            Where I've grown.
          </h2>

          <div className="relative border-l-2 border-slate-800 pl-8 space-y-12">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950" />

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/40 transition-all group">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Bartender
                  </h3>
                  <p className="text-cyan-500 font-medium">Zoo Bar · Soho, London</p>
                </div>
                <span className="text-xs text-slate-500 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full font-mono">
                  Current
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed mb-6">
                Operating in one of London's busiest entertainment venues, I deliver high-quality
                service in a high-pressure environment — managing multiple orders, reading customer
                needs rapidly, and maintaining composure during peak hours.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Zap, label: 'High-Pressure Performance', desc: 'Consistently delivering under volume and time constraints' },
                  { icon: Users, label: 'Customer Interaction', desc: 'Building rapport with diverse international clientele' },
                  { icon: Briefcase, label: 'Team Collaboration', desc: 'Coordinating seamlessly with bar and floor staff' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={14} className="text-cyan-400" />
                      <span className="text-slate-200 text-xs font-semibold">{label}</span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-28 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
            What I'm building.
          </h2>

          <div className="max-w-sm">
            {/* Himalaya AI */}
            <div className="relative group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 transition-all duration-500 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
              <div
                className="h-36 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80')" }}
              />
              <div className="relative z-20 p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-blue-900/30 rounded-full">
                      In Development
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-white tracking-tight">Himalaya AI</h3>
                  </div>
                  <div className="text-blue-500 animate-pulse mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  A "Deep Story" experience of Nepal — evolving travel from search-and-list
                  to AI-powered cinematic exploration.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['AI Exploration', 'UI/UX', 'Nepal', 'React'].map((tag) => (
                    <span key={tag} className="text-[10px] text-slate-400 border border-slate-700 px-2 py-0.5 rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2 px-4 rounded-lg bg-white text-black font-bold text-xs hover:bg-blue-500 hover:text-white transition-all duration-300">
                  View Technical Specs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certifications" className="py-12 md:py-16 px-6 bg-[#0B1120] text-white">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Sub-section 1: Accredited Training */}
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-4 border-b border-slate-800/60 pb-2 flex items-center gap-2">
              <span className="text-pink-500">🛡️</span> Accredited Professional Qualifications
            </h3>
            <a
              href="/WELFARE%20AND%20VULNERABILITY.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-gradient-to-r from-[#880E4F] to-[#4A0E2E] p-[1px] rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-pink-900/30 group-hover:scale-[1.005]">
                <div className="bg-[#111827] p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group-hover:bg-[#151f33] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="bg-pink-950/50 border border-pink-500/30 text-pink-400 font-black px-4 py-2.5 rounded-xl text-base tracking-wider shadow-inner">
                      WAVE
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-pink-400 transition-colors">
                        Level 2 Award: Welfare &amp; Vulnerability Engagement
                      </h4>
                      <p className="text-slate-400 text-sm mt-0.5">
                        Regulated Qualification &bull; Highfield Accredited &bull; Safer Business Network
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-pink-400 bg-pink-950/40 border border-pink-500/20 px-3 py-1 rounded-full uppercase tracking-widest self-start md:self-center group-hover:border-pink-400 transition-colors">
                    View Credential ↗
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Sub-section 2: Virtual Internships */}
          <div>
            <div className="flex justify-between items-end mb-4 border-b border-slate-800/60 pb-2">
              <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
                <span className="text-blue-500">📊</span> Corporate Job Simulations &amp; Practical Practicums
              </h3>
              <span className="text-xs text-blue-400 font-mono bg-blue-950/40 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                15 Cohorts Completed &bull; 80+ Hours Core Engagement
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {certificationsData.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#161D2F] p-4 rounded-xl border border-slate-800/80 hover:border-blue-500/50 hover:bg-[#1e263f] transition-all group block"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] font-bold text-slate-500 group-hover:text-blue-400 uppercase tracking-wider transition-colors">
                      {item.cat}
                    </span>
                    <span className="text-[10px] text-slate-600 group-hover:text-blue-400 font-mono opacity-0 group-hover:opacity-100 transition-all">
                      ↗
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-white truncate group-hover:text-blue-300 transition-colors">
                    {item.company}
                  </h4>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">{item.title}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Sub-section 3: Professional Development Vault */}
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-4 border-b border-slate-800/60 pb-2 flex items-center gap-2">
              <span className="text-emerald-500">✨</span> Professional Development &amp; Academic Pipeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {upcomingCertificates.map((cert, idx) => (
                <div key={idx} className="bg-[#111827] p-4 rounded-xl border border-dashed border-slate-800 flex justify-between items-center opacity-70">
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{cert.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 px-2 py-0.5 rounded shrink-0">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg">Nischal Bhetwal</p>
            <p className="text-slate-500 text-sm">Business Management · UEL London · Dhulabari, Nepal</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:ronaldoseven53@gmail.com"
              className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://github.com/ronaldoseven53-dot"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/nischal-bhetwal-52a978355"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Nischal Bhetwal
          </p>
        </div>
      </footer>

      {/* ── Floating LinkedIn badge ── */}
      <a
        href="https://www.linkedin.com/in/nischal-bhetwal-52a978355"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#0077B5] hover:bg-[#005f95] text-white font-semibold text-sm px-4 py-2.5 rounded-full shadow-lg shadow-black/40 transition-all hover:scale-105"
      >
        <Linkedin size={16} />
        LinkedIn
      </a>

    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px flex-1 max-w-8 bg-cyan-500" />
      <span className="text-cyan-500 text-xs font-bold tracking-widest uppercase">{children}</span>
    </div>
  )
}
