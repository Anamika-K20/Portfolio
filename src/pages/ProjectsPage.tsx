import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PageLayout } from "../components/PageLayout";

const projects = [
  {
    title: "Twinfusion Innovations",
    subtitle: "Digital Twin · Forecasting",
    description:
      "Built end-to-end — owned the React frontend, FastAPI backend, and ML layer. Digital twin platform integrated with enterprise databases for power project management, enabling real-time analytics and faster decision-making. Implemented time-series forecasting (Prophet, ARIMAX) and LSTM anomaly detection.",
    tech: ["ReactJS", "FastAPI", "Prophet", "ARIMAX", "LSTM"],
    github: "#",
    link: "#",
    emoji: "⚡",
    color: "#f5c842",
    stat: { label: "Anomaly detection accuracy", value: "91%", bar: 0.91 },
    year: "2024",
    featured: true,
  },
  {
    title: "MediFam Connect",
    subtitle: "Health Tech · Web App",
    description:
      "ReactJS-based web application for family health record management, including lab tests, medication tracking, and reminders. Age and gender-specific interface for health data visualization.",
    tech: ["ReactJS", "Health Tech", "Data Visualization"],
    github: "#",
    link: "#",
    emoji: "🏥",
    color: "#67e8f9",
    stat: { label: "User satisfaction", value: "88%", bar: 0.88 },
    year: "2023",
    featured: false,
  },
  {
    title: "College Billing Digitization",
    subtitle: "EdTech · Process Automation",
    description:
      "Billing module to streamline faculty billing tasks such as answer sheet evaluation and practical assessments. React and SQL backend for efficient data management.",
    tech: ["ReactJS", "PHPMyAdmin", "SQL"],
    github: "#",
    link: "#",
    emoji: "💼",
    color: "#c084fc",
    stat: { label: "Time saved per cycle", value: "70%", bar: 0.70 },
    year: "2023",
    featured: false,
  },
];

/* ── ANIMATED STAT BAR ── */
function StatBar({ value, color }: { value: number; color: string }) {
  return (
    <div style={{ height: "3px", backgroundColor: "var(--border-color)", borderRadius: "99px", overflow: "hidden", width: "100%" }}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: value }}
        transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: "100%", background: color, transformOrigin: "left", borderRadius: "99px" }}
      />
    </div>
  );
}

/* ── FEATURED CARD (large, top) ── */
function FeaturedCard({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ border: `1px solid var(--border-color)`, backgroundColor: "var(--bg-secondary)", minHeight: "280px" }}
    >
      {/* Background glow that intensifies on hover */}
      <motion.div
        animate={{ opacity: hovered ? 0.12 : 0.05 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at 30% 50%, ${project.color} 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      {/* Top accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
        {/* Left */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span style={{ fontSize: "2.2rem" }}>{project.emoji}</span>
            <div>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.2em", color: project.color, textTransform: "uppercase" }}>
                Featured · {project.year}
              </p>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "var(--text-tertiary)", letterSpacing: "0.1em" }}>
                {project.subtitle}
              </p>
            </div>
          </div>

          <h2 style={{
            fontFamily: "'Italiana', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "var(--text-primary)",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}>{project.title}</h2>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
            fontStyle: "italic",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: "480px",
          }}>{project.description}</p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5 md:w-56 w-full">
          {/* Stat */}
          <div style={{ padding: "1.2rem", backgroundColor: "var(--bg-card)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
            <p style={{ fontFamily: "'Italiana', serif", fontSize: "2.2rem", color: project.color, lineHeight: 1 }}>{project.stat.value}</p>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.12em", color: "var(--text-tertiary)", textTransform: "uppercase", marginTop: "4px", marginBottom: "10px" }}>{project.stat.label}</p>
            <StatBar value={project.stat.bar} color={project.color} />
          </div>

          {/* Tech */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project.tech.map(t => (
              <span key={t} style={{
                fontFamily: "'Space Mono', monospace", fontSize: "0.52rem", letterSpacing: "0.06em",
                padding: "3px 10px", borderRadius: "999px",
                border: `1px solid ${project.color}44`, color: project.color,
                backgroundColor: `${project.color}10`,
              }}>{t}</span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "8px" }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
              style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", padding: "8px", borderRadius: "8px", border: "1px solid var(--border-color)", backgroundColor: "var(--bg-tertiary)", color: "var(--text-secondary)", fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", textDecoration: "none" }}>
              <Github size={12} /> Code
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
              style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", padding: "8px", borderRadius: "8px", backgroundColor: project.color, color: "white", fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", textDecoration: "none" }}>
              <ArrowUpRight size={12} /> Live
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── FLIP CARD (grid) ── */
function FlipCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: "1200px", height: "340px" }}
      className="cursor-pointer"
      onClick={() => setFlipped(f => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div style={{
          position: "absolute", inset: 0, backfaceVisibility: "hidden",
          backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)",
          borderRadius: "16px", padding: "1.8rem",
          display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden",
        }}>
          {/* Index number watermark */}
          <div style={{
            position: "absolute", bottom: "-10px", right: "12px",
            fontFamily: "'Italiana', serif", fontSize: "7rem", color: project.color,
            opacity: 0.06, lineHeight: 1, pointerEvents: "none", userSelect: "none",
          }}>0{index + 2}</div>

          {/* Glow */}
          <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: project.color, filter: "blur(45px)", opacity: 0.14 }} />

          <div>
            <div className="flex items-start justify-between mb-3">
              <span style={{ fontSize: "2.2rem" }}>{project.emoji}</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "var(--text-tertiary)", letterSpacing: "0.1em" }}>{project.year}</span>
            </div>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.15em", color: project.color, textTransform: "uppercase", marginBottom: "6px" }}>{project.subtitle}</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.15rem, 2vw, 1.4rem)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }}>{project.title}</h3>
          </div>

          <div>
            {/* Stat bar */}
            <div className="mb-4">
              <div className="flex justify-between mb-1.5">
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", color: "var(--text-tertiary)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{project.stat.label}</span>
                <span style={{ fontFamily: "'Italiana', serif", fontSize: "1rem", color: project.color }}>{project.stat.value}</span>
              </div>
              <StatBar value={project.stat.bar} color={project.color} />
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "1rem" }}>
              {project.tech.map(t => (
                <span key={t} style={{
                  fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.06em",
                  padding: "2px 8px", borderRadius: "999px",
                  border: `1px solid ${project.color}55`, color: project.color,
                  backgroundColor: `${project.color}0d`,
                }}>{t}</span>
              ))}
            </div>

            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.15em", color: "var(--text-tertiary)", textTransform: "uppercase" }}>
              Tap to read more ↩
            </p>
          </div>
        </div>

        {/* BACK */}
        <div style={{
          position: "absolute", inset: 0, backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          backgroundColor: "var(--bg-card)", border: `1px solid ${project.color}66`,
          borderRadius: "16px", padding: "1.8rem",
          display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${project.color}, transparent)`, borderRadius: "16px 16px 0 0" }} />
          <div style={{ position: "absolute", bottom: "-20px", left: "-20px", width: "100px", height: "100px", borderRadius: "50%", background: project.color, filter: "blur(40px)", opacity: 0.1 }} />

          <div>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.2em", color: project.color, textTransform: "uppercase", marginBottom: "0.6rem" }}>
              {project.emoji} &nbsp;{project.title}
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)", fontStyle: "italic", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {project.description}
            </p>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
              style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", padding: "9px", borderRadius: "8px", border: "1px solid var(--border-color)", backgroundColor: "var(--bg-tertiary)", color: "var(--accent-color)", fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", textDecoration: "none" }}>
              <Github size={12} /> Code
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
              style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", padding: "9px", borderRadius: "8px", backgroundColor: project.color, color: "white", fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", textDecoration: "none" }}>
              <ExternalLink size={12} /> Live
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── SCROLLING TICKER ── */
function Ticker() {
  const items = ["RAG Pipelines", "LLMs", "Digital Twins", "Computer Vision", "FastAPI", "Time-Series", "Health Tech", "NLP"];
  const repeated = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "10px 0", margin: "2.5rem 0" }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: "2.5rem", whiteSpace: "nowrap", width: "max-content" }}
      >
        {repeated.map((item, i) => (
          <span key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--text-tertiary)", textTransform: "uppercase" }}>
            {item} <span style={{ color: "var(--accent-color)", marginLeft: "1rem" }}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ProjectsPage() {
  const featured = projects.find(p => p.featured)!;
  const rest = projects.filter(p => !p.featured);

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--text-tertiary)", textTransform: "uppercase", marginBottom: "0.6rem" }}>
            Featured Work
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h1 style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color: "var(--text-primary)", lineHeight: 1 }}>
              Projects
            </h1>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontStyle: "italic", color: "var(--text-tertiary)", maxWidth: "280px", textAlign: "right" }}>
              Things I've built — from ideas to shipped products
            </p>
          </div>
        </motion.div>

        {/* Featured */}
        <FeaturedCard project={featured} />

        {/* Ticker */}
        <Ticker />

        {/* Grid label */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center gap-4 mb-6">
          <div style={{ flex: 1, height: "1px", background: "var(--border-color)" }} />
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.2em", color: "var(--text-tertiary)", textTransform: "uppercase", whiteSpace: "nowrap" }}>More Projects · Click to flip</p>
          <div style={{ flex: 1, height: "1px", background: "var(--border-color)" }} />
        </motion.div>

        {/* Flip cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <FlipCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
