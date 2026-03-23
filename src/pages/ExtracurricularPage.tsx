import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

const positions = [
  {
    role: "IEEE Chairperson",
    org: "IEEE IGDTUW",
    period: "Jul 2025 – Present",
    accentColor: "#e8927c",
    points: [
      "Leading a 250+ member committee, ensuring successful planning, coordination, and execution of multiple technical and non-technical events.",
    ],
    progression: [
      { title: "Event Management & Content Team Member", year: "2022–23" },
      { title: "Event Management Team Member", year: "2023–24" },
      { title: "Treasurer", year: "2024–25" },
      { title: "Chairperson", year: "2025–26" },
    ],
  },
  {
    role: "Women In Engineering Lead",
    org: "IEEE Delhi Section Student Network",
    period: "2024–25",
    accentColor: "#c084fc",
    points: [
      "Led 45+ events including hackathons and workshops, engaging 1,000+ students across the Delhi section.",
      "Improved outreach and participation by 40%.",
    ],
    progression: null,
  },
];

export default function ExtracurricularPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-5 py-16">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.35em", color: "var(--accent-color)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
            Leadership
          </p>
          <h1 style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color: "var(--text-primary)", lineHeight: 1 }}>
            Positions of Responsibility
          </h1>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "0", top: "8px", bottom: "8px", width: "1px", background: "linear-gradient(to bottom, var(--accent-color), var(--accent-secondary), transparent)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem", paddingLeft: "2rem" }}>
            {positions.map((pos, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: "relative" }}
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring", bounce: 0.5 }}
                  style={{
                    position: "absolute", left: "-2.45rem", top: "1.4rem",
                    width: "10px", height: "10px", borderRadius: "50%",
                    backgroundColor: pos.accentColor,
                    boxShadow: `0 0 12px ${pos.accentColor}88`,
                  }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    borderLeft: `3px solid ${pos.accentColor}`,
                    borderRadius: "16px",
                    padding: "1.8rem 2rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, right: 0, width: "200px", height: "200px", borderRadius: "50%", background: pos.accentColor, filter: "blur(80px)", opacity: 0.05, pointerEvents: "none" }} />

                  <div style={{ marginBottom: "0.8rem" }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.1em", color: "var(--text-tertiary)" }}>
                      {pos.period}
                    </span>
                  </div>

                  <h2 style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "4px" }}>
                    {pos.role}
                  </h2>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "1.2rem" }}>
                    <MapPin size={10} style={{ color: pos.accentColor }} />
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 600, color: pos.accentColor }}>
                      {pos.org}
                    </span>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {pos.points.map((pt, j) => (
                      <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ color: pos.accentColor, marginTop: "5px", flexShrink: 0, fontSize: "0.5rem" }}>▸</span>
                        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Role progression */}
                  {pos.progression && (
                    <div style={{ marginTop: "1.4rem", paddingTop: "1.2rem", borderTop: "1px solid var(--border-color)" }}>
                      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.44rem", letterSpacing: "0.2em", color: "var(--text-tertiary)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
                        Progression
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                        {pos.progression.map((step, k) => (
                          <div key={k} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <div style={{ textAlign: "center" }}>
                              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: k === pos.progression!.length - 1 ? pos.accentColor : "var(--text-primary)", fontWeight: k === pos.progression!.length - 1 ? 700 : 400 }}>
                                {step.title}
                              </p>
                              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.42rem", color: "var(--text-tertiary)", letterSpacing: "0.08em" }}>
                                {step.year}
                              </p>
                            </div>
                            {k < pos.progression!.length - 1 && (
                              <span style={{ color: pos.accentColor, fontSize: "0.6rem", opacity: 0.6 }}>→</span>
                            )}
                          </div>
                        ))}
                      </div>
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
