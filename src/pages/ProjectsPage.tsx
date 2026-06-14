import { motion, useInView } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";
import { PageLayout } from "../components/PageLayout";

/* ── 3D Tilt hook ── */
function use3DTilt(intensity = 10) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)", transition: "transform 0.15s ease-out" });
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ transform: `perspective(1000px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) scale(1.015)`, transition: "transform 0.1s ease-out" });
  }, [intensity]);
  const onMouseLeave = useCallback(() => {
    setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)", transition: "transform 0.5s ease-out" });
  }, []);
  return { ref, style, onMouseMove, onMouseLeave };
}

/* ── Animated counter ── */
function AnimatedValue({ value, color }: { value: string; color: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true });
  const num = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView || isNaN(num)) { setDisplay(value); return; }
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = num / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) { setDisplay(value); clearInterval(timer); return; }
      setDisplay((num < 2 ? start.toFixed(1) : Math.floor(start).toString()) + suffix);
    }, step);
    return () => clearInterval(timer);
  }, [inView, num, value, suffix]);

  return (
    <p ref={ref} style={{ fontFamily: "'Italiana', serif", fontSize: "2.2rem", color, lineHeight: 1 }}>
      {display}
    </p>
  );
}

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
  },
  {
    title: "TrueDeal",
    subtitle: "Price Intelligence · E-Commerce",
    description:
      "Detects fake discounts on Amazon by tracking price history, analyzing trends, and scoring deal authenticity. Paste any Amazon URL to get an instant verdict — Great Deal to Overpriced. Background scheduler re-scrapes all tracked products every 12 hours.",
    tech: ["React", "FastAPI", "Python", "Web Scraping", "Price Tracking"],
    github: "#",
    link: "https://true-deal.vercel.app/",
    emoji: "🔍",
    color: "#67e8f9",
    stat: { label: "Deal verdict accuracy", value: "ML-based", bar: 0.85 },
    year: "2025",
  },
  {
    title: "Dilli Darshan",
    subtitle: "AI Tourism · React Native",
    description:
      "AI-driven smart tourism platform for Delhi. Built personalized, context-aware recommendations for places and attractions using location intelligence, real-time proximity suggestions, and a local Ollama model for contextual recommendation workflows.",
    tech: ["React Native", "Ollama", "APIs", "Location Intelligence"],
    github: "https://github.com/advika31/DilliDarshan",
    link: "#",
    emoji: "🗺️",
    color: "#e8927c",
    stat: { label: "Recommendation engine", value: "AI-based", bar: 0.88 },
    year: "2026",
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
    color: "#4ade80",
    stat: { label: "User satisfaction", value: "88%", bar: 0.88 },
    year: "2023",
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
  },
];

/* ── ANIMATED STAT BAR ── */
function StatBar({ value, color }: { value: number; color: string }) {
  return (
    <div style={{ height: "3px", backgroundColor: "var(--border-color)", borderRadius: "99px", overflow: "hidden", width: "100%" }}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: value }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: "100%", background: color, transformOrigin: "left", borderRadius: "99px" }}
      />
    </div>
  );
}

/* ── PROJECT CARD ── */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const tilt = use3DTilt(8);

  return (
    <div
      ref={tilt.ref}
      style={{ ...tilt.style }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={() => { tilt.onMouseLeave(); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
    >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden"
      style={{ border: `1px solid var(--border-color)`, backgroundColor: "var(--bg-secondary)" }}
    >
      {/* Animated background glow */}
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

      {/* Index watermark */}
      <div style={{
        position: "absolute", bottom: "-16px", right: "16px",
        fontFamily: "'Italiana', serif", fontSize: "9rem",
        color: project.color, opacity: 0.04,
        lineHeight: 1, pointerEvents: "none", userSelect: "none",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
        {/* Left */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span style={{ fontSize: "2.2rem" }}>{project.emoji}</span>
            <div>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.2em", color: project.color, textTransform: "uppercase" }}>
                {project.year}
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
          }}>
            {project.title}
          </h2>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
            fontStyle: "italic",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: "480px",
          }}>
            {project.description}
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5 md:w-56 w-full flex-shrink-0">
          {/* Stat */}
          <div style={{ padding: "1.2rem", backgroundColor: "var(--bg-card)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
            <AnimatedValue value={project.stat.value} color={project.color} />
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.12em", color: "var(--text-tertiary)", textTransform: "uppercase", marginTop: "4px", marginBottom: "10px" }}>{project.stat.label}</p>
            <StatBar value={project.stat.bar} color={project.color} />
          </div>

          {/* Tech tags */}
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
            {project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", padding: "8px", borderRadius: "8px", border: "1px solid var(--border-color)", backgroundColor: "var(--bg-tertiary)", color: "var(--text-secondary)", fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", textDecoration: "none" }}>
                <Github size={12} /> Code
              </a>
            )}
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", padding: "8px", borderRadius: "8px", backgroundColor: project.color, color: "#0a0a0f", fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", textDecoration: "none", fontWeight: 600 }}>
                <ArrowUpRight size={12} /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
}

/* ── SCROLLING TICKER ── */
function Ticker() {
  const items = ["RAG Pipelines", "LLMs", "Digital Twins", "Computer Vision", "FastAPI", "Time-Series", "Health Tech", "Price Intelligence", "AI Tourism", "NLP"];
  const repeated = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "10px 0", margin: "3rem 0" }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
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
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--accent-color)", textTransform: "uppercase", marginBottom: "0.6rem" }}>
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

        {/* Ticker */}
        <Ticker />

        {/* All projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
