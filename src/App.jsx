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
  FaBuilding,
  FaPiggyBank,
} from 'react-icons/fa'

const certifications = [
  { company: 'Goldman Sachs',         title: 'Operations Job Simulation',              category: 'Banking',    icon: <FaUniversity />,     color: '#7399C6', file: 'Screenshot 2026-04-27 081308.png' },
  { company: 'Goldman Sachs',         title: 'Risk Job Simulation',                    category: 'Risk',       icon: <FaShieldAlt />,      color: '#7399C6', file: 'Screenshot 2026-04-27 080857.png' },
  { company: 'Lloyds Banking Group',  title: 'Business & Commercial Banking',          category: 'Banking',    icon: <FaUniversity />,     color: '#006A4D', file: 'Screenshot 2026-04-27 081530.png' },
  { company: 'Lloyds Banking Group',  title: 'UX Design Introduction',                category: 'Design',     icon: <FaProjectDiagram />, color: '#006A4D', file: 'Screenshot 2026-04-27 081153.png' },
  { company: 'Citi',                  title: 'Markets Sales & Trading',                category: 'Finance',    icon: <FaChartLine />,      color: '#056DAE', file: 'Screenshot 2026-04-27 080830.png' },
  { company: 'Fidelity International',title: 'Investment Management',                  category: 'Finance',    icon: <FaChartLine />,      color: '#C41E3A', file: 'Screenshot 2026-04-27 081058.png' },
  { company: 'PNC Bank',              title: 'Financial Services & Banking',           category: 'Banking',    icon: <FaPiggyBank />,      color: '#E85D11', file: 'Screenshot 2026-04-27 080735.png' },
  { company: 'EY',                    title: 'Technology Risk Virtual Job Simulation', category: 'Risk',       icon: <FaShieldAlt />,      color: '#c8a800', file: 'Screenshot 2026-04-27 081126.png' },
  { company: 'Quantium',              title: 'Data Analytics Job Simulation',          category: 'Data',       icon: <FaDatabase />,       color: '#64748b', file: 'Screenshot 2026-04-27 081427.png' },
  { company: 'Siemens',               title: 'Project Manager Job Simulation',         category: 'Management', icon: <FaProjectDiagram />, color: '#009999', file: 'Screenshot 2026-04-27 081501.png' },
  { company: 'Electronic Arts (EA)',  title: 'Product Management Job Simulation',      category: 'Product',    icon: <FaGamepad />,        color: '#1565C0', file: 'Screenshot 2026-04-27 081220.png' },
  { company: 'Electronic Arts (EA)',  title: 'Product Management Job Simulation',      category: 'Product',    icon: <FaGamepad />,        color: '#FF4747', file: 'Screenshot 2026-04-27 081343.png' },
  { company: 'Tata',                  title: 'ESG Job Simulation',                     category: 'Strategy',   icon: <FaLeaf />,           color: '#1B3D6D', file: 'Screenshot 2026-04-27 080801.png' },
  { company: 'CBRE',                  title: 'Sales Job Simulation',                   category: 'Sales',      icon: <FaBuilding />,       color: '#006747', file: 'Screenshot 2026-04-27 081031.png' },
  { company: 'London Insurance Life', title: 'London Market Claims Adjuster',          category: 'Insurance',  icon: <FaShieldAlt />,      color: '#E87722', file: 'Screenshot 2026-04-27 080933.png' },
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
      <section id="projects" className="py-16 bg-[#0B1120]">

        {/* Section label */}
        <div className="max-w-6xl mx-auto px-4 mb-10">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What I'm building.</h2>
        </div>

        {/* ── Himalaya AI — Featured cinematic hero ── */}
        <div className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-[#111827] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl transition-all hover:border-blue-500/30">

            {/* Hero image */}
            <div
              className="h-64 md:h-80 bg-cover bg-center relative"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
            </div>

            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-blue-900/30 rounded-full border border-blue-500/20">
                  In Development
                </span>
                <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase bg-slate-800/50 rounded-full">
                  80+ Hours Technical Simulation Applied
                </span>
              </div>

              <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Himalaya AI</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
                A "Deep Story" experience of Nepal — evolving the travel industry from search-and-list
                to AI-powered cinematic exploration through a minimalist, high-performance interface.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['AI Exploration', 'UI/UX Hardening', 'Nepal', 'React', 'Vercel'].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-slate-500 border border-slate-800 px-3 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://city-explorer-nepal.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full sm:w-auto text-center py-4 px-10 bg-white text-black font-black rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl"
              >
                View Live Prototype
              </a>
            </div>
          </div>
        </div>

        {/* ── Himalaya AI detail card + City Explorer Nepal — side by side ── */}
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">

          {/* Himalaya AI compact card with WAVE badge */}
          <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-8 shadow-2xl transition-all hover:border-blue-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-xl">
                <span className="text-blue-400 text-2xl">🏔️</span>
              </div>
              <div>
                <span className="block text-[10px] font-black tracking-[0.3em] text-blue-500 uppercase">Flagship Project</span>
                <span className="text-xs text-slate-500 italic">Technical Refinement Phase</span>
              </div>
            </div>

            <h3 className="text-3xl font-extrabold text-white mb-4">Himalaya AI</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              An experimental travel platform designed to move beyond traditional search.
              It provides a <span className="text-white font-semibold">"Deep Story"</span> cinematic
              experience of Nepal through a minimalist, high-performance interface.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['AI Exploration', 'UI/UX Hardening', 'React', 'Vercel'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold bg-slate-800/50 text-slate-300 border border-slate-700 px-3 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://city-explorer-nepal.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="block text-center py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 mb-8 text-sm"
            >
              View Live Prototype
            </a>

            {/* WAVE accredited badge */}
            <div className="pt-6 border-t border-slate-800/50">
              <a
                href="/wave-certificate.jpg"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-900 to-[#1e1425] rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                    WAVE
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold">Welfare &amp; Vulnerability Engagement</h4>
                    <p className="text-slate-500 text-[10px]">Level 2 Accredited Training</p>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-pink-400 border border-pink-400/30 px-2 py-0.5 rounded uppercase hidden sm:block">
                  Verified
                </span>
              </a>
            </div>
          </div>

          {/* City Explorer Nepal */}
          <div className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/60 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
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
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                City Explorer Nepal
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                A travel-tech application leveraging the Google Maps Platform API to help users
                navigate and explore cities across Nepal — addressing the lack of reliable digital
                navigation tools in emerging Nepali markets.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Google Maps API', 'JavaScript', 'Travel Tech', 'Nepal'].map((tag) => (
                  <span key={tag} className="text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full font-mono">
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

        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certifications" className="py-12 bg-[#0B1120] text-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Professional Certifications</h2>
              <p className="text-slate-400 text-sm mt-1">15 Industry Simulations via Forage</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <span className="text-blue-500 font-mono text-xl font-bold">80+ Hours</span>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">Practical Intern Experience</p>
            </div>
          </div>

          {/* Accredited Training — WAVE */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-pink-500">✦</span> Accredited Professional Training
            </h3>
            <a
              href="/wave-certificate.jpg"
              target="_blank"
              rel="noreferrer"
              className="block bg-gradient-to-r from-[#880E4F] to-[#C2185B] p-[1px] rounded-2xl hover:opacity-90 transition-opacity"
            >
              <div className="bg-[#111827] p-5 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 p-3 rounded-xl text-pink-600 font-bold text-xl shrink-0">
                    WAVE
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg leading-tight">
                      Level 2: Welfare &amp; Vulnerability Engagement
                    </h4>
                    <p className="text-slate-400 text-sm mt-0.5">
                      Highfield Accredited · Safer Business Network
                    </p>
                  </div>
                </div>
                <div className="hidden md:block text-right shrink-0 ml-6">
                  <span className="text-xs text-slate-500 block uppercase tracking-widest">Completed</span>
                  <span className="text-white font-mono">Nov 2024</span>
                </div>
              </div>
            </a>
          </div>

          {/* Compact 5-column grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.file ? `/${cert.file}` : undefined}
                target="_blank"
                rel="noreferrer"
                className="group bg-[#161D2F] p-4 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all block"
                style={{ cursor: cert.file ? 'pointer' : 'default' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="p-2 rounded-lg transition-colors"
                    style={{ backgroundColor: cert.color + '33' }}
                  >
                    <span className="text-lg" style={{ color: cert.color }}>{cert.icon}</span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{cert.category}</span>
                </div>

                <h4 className="font-bold text-sm leading-tight truncate">{cert.company}</h4>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{cert.title}</p>

                <div className="mt-3 pt-3 border-t border-slate-800/50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] text-blue-400 font-semibold">
                    {cert.file ? 'VIEW' : 'SOON'}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                </div>
              </a>
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
