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
import {
  FaUniversity,
  FaChartLine,
  FaShieldAlt,
  FaGamepad,
  FaLeaf,
  FaDatabase,
  FaProjectDiagram,
} from 'react-icons/fa'

const certifications = [
  { company: 'Goldman Sachs',       title: 'Operations Job Simulation',         category: 'Banking',    icon: <FaUniversity />,     color: '#7399C6', file: 'Screenshot 2026-04-27 081308.png' },
  { company: 'Lloyds Banking Group',title: 'Business & Commercial Banking',      category: 'Banking',    icon: <FaUniversity />,     color: '#006A4D', file: 'Screenshot 2026-04-27 081530.png' },
  { company: 'Quantium',            title: 'Data Analytics Job Simulation',      category: 'Data',       icon: <FaDatabase />,       color: '#64748b', file: 'Screenshot 2026-04-27 081427.png' },
  { company: 'Siemens',             title: 'Project Manager Job Simulation',     category: 'Management', icon: <FaProjectDiagram />, color: '#009999', file: 'Screenshot 2026-04-27 081501.png' },
  { company: 'Electronic Arts (EA)',title: 'Product Management',                 category: 'Product',    icon: <FaGamepad />,        color: '#FF4747', file: 'Screenshot 2026-04-27 081343.png' },
  { company: 'EY',                  title: 'Technology Risk Job Simulation',     category: 'Risk',       icon: <FaShieldAlt />,      color: '#c8a800', file: null },
  { company: 'Tata',                title: 'ESG Job Simulation',                 category: 'Strategy',   icon: <FaLeaf />,           color: '#1B3D6D', file: null },
  { company: 'Citi',                title: 'Markets Sales & Trading',            category: 'Finance',    icon: <FaChartLine />,      color: '#056DAE', file: null },
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

          <div className="grid md:grid-cols-2 gap-8">
            {/* City Explorer Nepal */}
            <div className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/60 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
              {/* Card header */}
              <div className="relative h-48 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#164e63_1px,transparent_1px),linear-gradient(to_bottom,#164e63_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent" />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/40 rounded-2xl flex items-center justify-center">
                    <Map size={30} className="text-cyan-400" />
                  </div>
                  <span className="text-xs font-mono text-cyan-500/80 bg-slate-900/60 px-3 py-1 rounded-full border border-cyan-900/60">
                    Google Maps Platform API
                  </span>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    City Explorer Nepal
                  </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  A travel-tech application leveraging the Google Maps Platform API to help users
                  navigate and explore cities across Nepal. Designed to address the lack of
                  reliable digital navigation tools in emerging Nepali markets — a problem I
                  identified firsthand from home.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Google Maps API', 'JavaScript', 'Travel Tech', 'Nepal'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://city-explorer-nepal.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <ExternalLink size={14} />
                  View Live Prototype
                </a>
              </div>
            </div>

            {/* Placeholder / Coming Soon */}
            <div className="bg-slate-800/20 border border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center text-center p-10 min-h-64">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 border border-slate-700">
                <Zap size={22} className="text-slate-600" />
              </div>
              <p className="text-slate-500 font-semibold mb-1">More Coming Soon</p>
              <p className="text-slate-600 text-sm max-w-xs">
                Next project in progress — combining Business Management insight with tech prototyping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certifications" className="py-28 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Certifications</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Professional Internship Portfolio
          </h2>
          <p className="text-slate-500 mb-14">
            15 Global Certifications · 80+ Hours of Simulation Experience
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 overflow-hidden hover:border-slate-600 hover:shadow-xl transition-all duration-300"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                  style={{ backgroundColor: cert.color }}
                />

                <div className="flex items-center justify-between mb-5 mt-1">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg shadow-md"
                    style={{ backgroundColor: cert.color }}
                  >
                    {cert.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors leading-tight">
                  {cert.company}
                </h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  {cert.title}
                </p>

                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-cyan-500 group-hover:text-cyan-400 transition-colors">
                  {cert.file ? (
                    <>
                      <span>VIEW CERTIFICATE</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  ) : (
                    <span className="text-slate-600">COMING SOON</span>
                  )}
                </div>
              </div>
            ))}
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
