import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";

const highlights = [
  { value: "5", label: "Research Papers", sub: "IEEE & Springer" },
  { value: "10+", label: "Citations", sub: "Google Scholar" },
  { value: "3", label: "Internships", sub: "Industry & Research" },
  { value: "8.73", label: "CGPA", sub: "IGDTUW" },
];

const values = [
  {
    title: "I care about things that ship.",
    body: "Research is great. But I'm most energized when something I build actually runs in production and solves a real problem. That's the bar I hold myself to.",
  },
  {
    title: "I go deep before I go wide.",
    body: "Whether it's a new model architecture or a new codebase, I'd rather understand it properly than skim the surface. Depth first.",
  },
  {
    title: "I believe in building in public.",
    body: "Papers, projects, this portfolio — putting work out there is how you get better and how you find the right people to work with.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-5 py-16">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.35em", color: "var(--accent-color)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
            Who I am
          </p>
          <h1 style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color: "var(--text-primary)", lineHeight: 1 }}>
            About Me
          </h1>
        </motion.div>

        {/* Intro */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "1.4rem", maxWidth: "720px" }}>

            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)", fontStyle: "italic", color: "var(--text-primary)", lineHeight: 1.75 }}>
              Final-year ECE (AI) at IGDTUW. I own things end-to-end — the frontend, the backend, the model, and the part where it actually has to work in production.
            </p>

            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              I've built RAG pipelines at Citi Bank, shipped a full-stack digital twin platform at Twinfusion, and published 5 papers across IEEE and Springer. My stack goes from React and FastAPI to LangChain, FAISS, and computer vision — whatever the problem needs. I don't specialize in one layer. I specialize in getting the whole thing working.
            </p>

            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Right now I'm deep in LLMs and retrieval systems — specifically the gap between "it works in a notebook" and "it works at 3am when no one's watching." That's the problem I find interesting.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", paddingTop: "0.5rem" }}>
              <Link to="/projects">
                <motion.div whileHover={{ x: 3 }} style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "'Space Mono', monospace", fontSize: "0.52rem", letterSpacing: "0.12em", color: "var(--accent-color)", textTransform: "uppercase" }}>
                  View Projects <ArrowUpRight size={12} />
                </motion.div>
              </Link>
              <Link to="/research">
                <motion.div whileHover={{ x: 3 }} style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "'Space Mono', monospace", fontSize: "0.52rem", letterSpacing: "0.12em", color: "var(--accent-secondary)", textTransform: "uppercase" }}>
                  Research Papers <ArrowUpRight size={12} />
                </motion.div>
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ x: 3 }} style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "'Space Mono', monospace", fontSize: "0.52rem", letterSpacing: "0.12em", color: "var(--accent-tertiary)", textTransform: "uppercase" }}>
                  Resume <ArrowUpRight size={12} />
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginBottom: "5rem" }}>
          {highlights.map((h, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "14px", padding: "1.4rem", textAlign: "center" }}>
              <p style={{ fontFamily: "'Italiana', serif", fontSize: "2.4rem", color: "var(--accent-color)", lineHeight: 1 }}>{h.value}</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: "var(--text-primary)", marginTop: "4px" }}>{h.label}</p>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.44rem", letterSpacing: "0.1em", color: "var(--text-tertiary)", textTransform: "uppercase", marginTop: "3px" }}>{h.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* What I'm looking for */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: "5rem", padding: "2rem", backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", borderLeft: "3px solid var(--accent-color)", borderRadius: "16px" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "var(--accent-color)", textTransform: "uppercase", marginBottom: "1rem" }}>
            What I'm looking for
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.85, fontStyle: "italic", maxWidth: "680px" }}>
            I want to work on problems where the ML actually matters — not just a model bolted onto a product as an afterthought, but systems where the intelligence is the product. I'm drawn to teams that move fast, give engineers real ownership, and care about the craft of building. Startup or MNC, the size doesn't matter as much as whether the work is real and the people are honest about what they're trying to do.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "2rem" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "var(--text-tertiary)", textTransform: "uppercase", marginBottom: "2rem" }}>
            How I work
          </p>          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2rem", padding: "1.5rem 0", borderBottom: "1px solid var(--border-color)", alignItems: "start" }}>
                <p style={{ fontFamily: "'Italiana', serif", fontSize: "1.2rem", color: "var(--text-primary)", lineHeight: 1.3 }}>{v.title}</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.75, fontStyle: "italic" }}>{v.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </PageLayout>
  );
}
