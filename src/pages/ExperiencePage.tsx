import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  accentColor: string;
  logo?: string;
  points: string[];
  tech: string[];
  link?: string;
  certificate?: string;
};

const experiences: Experience[] = [
  {
    role: "Technology Summer Analyst",
    company: "Citi Bank",
    location: "Pune, Maharashtra",
    period: "Jun 2025 – Jul 2025",
    type: "Internship",
    accentColor: "#67e8f9",
    points: [
      "Built and deployed an enterprise-ready RAG pipeline using LLMs, PyMuPDF, and FAISS, integrated with Angular and FastAPI — reduced document processing time by 95% (days to hours) and currently in active organizational use.",
      "Engineered a tree-based document parsing algorithm to enhance accuracy, scalability, and efficiency in automated form digitization, eliminating manual data entry and enabling seamless enterprise deployment.",
    ],
    tech: ["LLMs", "FAISS", "PyMuPDF", "FastAPI", "Angular", "Python", "RAG"],
    certificate: "/internshipcompletioncertificate.pdf",
  },
  {
    role: "Research Intern",
    company: "IGDTUW",
    location: "Delhi, India",
    period: "Jan 2024 – May 2024",
    type: "Research",
    accentColor: "#c084fc",
    points: [
      "Conducted research on speaker identification using classical ML algorithms — SVM, KNN, Random Forest.",
      "Extracted acoustic features (MFCCs, spectral centroid) and benchmarked model performance across noise conditions.",
      "Co-authored a paper published at IEEE Confluence 2024 with 3 citations.",
    ],
    tech: ["Python", "Scikit-learn", "Librosa", "MFCC", "IEEE Publication"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Twinfusion Innovations",
    location: "Remote",
    period: "Aug 2023 – Dec 2023",
    type: "Internship",
    accentColor: "#f5c842",
    points: [
      "Built the frontend for a digital twin platform used in power project management using ReactJS.",
      "Integrated time-series forecasting visualizations (Prophet, ARIMAX) into the dashboard.",
      "Implemented LSTM-based anomaly detection alerts with 91% accuracy, surfaced in real-time UI components.",
    ],
    tech: ["ReactJS", "FastAPI", "Prophet", "ARIMAX", "LSTM", "Data Visualization"],
  },
];

export default function ExperiencePage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-5 py-16">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.35em", color: "var(--accent-color)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
            Work History
          </p>
          <h1 style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color: "var(--text-primary)", lineHeight: 1 }}>
            Experience
          </h1>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: "0", top: "8px", bottom: "8px", width: "1px", background: "linear-gradient(to bottom, var(--accent-color), var(--accent-secondary), transparent)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem", paddingLeft: "2rem" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: "relative" }}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring", bounce: 0.5 }}
                  style={{
                    position: "absolute",
                    left: "-2.45rem",
                    top: "1.2rem",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: exp.accentColor,
                    boxShadow: `0 0 12px ${exp.accentColor}88`,
                    flexShrink: 0,
                  }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    borderLeft: `3px solid ${exp.accentColor}`,
                    borderRadius: "16px",
                    padding: "1.8rem 2rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Subtle glow */}
                  <div style={{ position: "absolute", top: 0, right: 0, width: "200px", height: "200px", borderRadius: "50%", background: exp.accentColor, filter: "blur(80px)", opacity: 0.05, pointerEvents: "none" }} />

                  {/* Top row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.2em", color: exp.accentColor, backgroundColor: exp.accentColor + "18", border: `1px solid ${exp.accentColor}44`, borderRadius: "999px", padding: "3px 10px", textTransform: "uppercase" }}>
                          {exp.type}
                        </span>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.1em", color: "var(--text-tertiary)" }}>
                          {exp.period}
                        </span>
                      </div>
                      <h2 style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "4px" }}>
                        {exp.role}
                      </h2>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 600, color: exp.accentColor }}>
                          {exp.company}
                        </span>
                        <span style={{ color: "var(--text-tertiary)", fontSize: "0.7rem" }}>·</span>
                        <span style={{ display: "flex", alignItems: "center", gap: "3px", fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", color: "var(--text-tertiary)" }}>
                          <MapPin size={10} /> {exp.location}
                        </span>
                      </div>
                    </div>
                    {exp.link && (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer"
                        style={{ color: "var(--text-tertiary)", display: "flex", alignItems: "center", gap: "4px", fontFamily: "'Space Mono', monospace", fontSize: "0.48rem" }}>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>

                  {/* Bullet points */}
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.2rem 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ color: exp.accentColor, marginTop: "5px", flexShrink: 0, fontSize: "0.5rem" }}>▸</span>
                        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {exp.tech.map((t) => (
                      <span key={t} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.08em", color: exp.accentColor, backgroundColor: exp.accentColor + "12", border: `1px solid ${exp.accentColor}30`, borderRadius: "999px", padding: "3px 10px" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Certificate */}
                  {exp.certificate && (
                    <div style={{ marginTop: "1rem" }}>
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.1em", color: exp.accentColor, border: `1px solid ${exp.accentColor}44`, backgroundColor: exp.accentColor + "10", borderRadius: "8px", padding: "6px 14px", textDecoration: "none", textTransform: "uppercase" }}
                      >
                        <ExternalLink size={11} /> View Certificate
                      </a>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
