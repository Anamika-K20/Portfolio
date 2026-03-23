import { motion } from "framer-motion";
import { PageLayout } from "../components/PageLayout";

const progression = [
  { title: "Event Management & Content", year: "2022–23", current: false },
  { title: "Event Management", year: "2023–24", current: false },
  { title: "Treasurer", year: "2024–25", current: false },
  { title: "Chairperson", year: "2025–26", current: true },
];

export default function ExtracurricularPage() {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-5 py-16">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.35em", color: "var(--accent-color)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
            Leadership
          </p>
          <h1 style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color: "var(--text-primary)", lineHeight: 1 }}>
            Positions of Responsibility
          </h1>
        </motion.div>

        {/* Side-by-side cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── Card 1: IEEE Chairperson ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Top accent */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, var(--accent-color), transparent)" }} />
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "220px", height: "220px", borderRadius: "50%", background: "var(--accent-color)", filter: "blur(90px)", opacity: 0.07, pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-10px", right: "10px", fontFamily: "'Italiana', serif", fontSize: "9rem", color: "var(--accent-color)", opacity: 0.04, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>01</div>

            <div style={{ padding: "2rem", position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
              {/* Badge + period */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.2rem" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.44rem", letterSpacing: "0.15em", color: "var(--accent-color)", backgroundColor: "var(--accent-color)" + "18", border: "1px solid var(--accent-color)" + "44", borderRadius: "999px", padding: "3px 12px", textTransform: "uppercase" }}>
                  Current
                </span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.44rem", letterSpacing: "0.1em", color: "var(--text-tertiary)" }}>
                  2025–26
                </span>
              </div>

              <h2 style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "4px" }}>
                IEEE Chairperson
              </h2>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "var(--accent-color)", fontWeight: 600, marginBottom: "1.2rem" }}>
                IEEE IGDTUW
              </p>

              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontStyle: "italic", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.8rem" }}>
                Leading a 250+ member committee, ensuring successful planning, coordination, and execution of multiple technical and non-technical events.
              </p>

              {/* Progression */}
              <div style={{ marginTop: "auto", paddingTop: "1.4rem", borderTop: "1px solid var(--border-color)" }}>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.2em", color: "var(--text-tertiary)", textTransform: "uppercase", marginBottom: "1rem" }}>
                  Journey
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {progression.map((step, k) => (
                    <div key={k} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "7px", height: "7px", borderRadius: "50%", flexShrink: 0,
                        backgroundColor: step.current ? "var(--accent-color)" : "var(--text-tertiary)",
                        boxShadow: step.current ? "0 0 8px var(--accent-color)" : "none",
                      }} />
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: step.current ? "var(--accent-color)" : "var(--text-secondary)", fontWeight: step.current ? 700 : 400, flex: 1 }}>
                        {step.title}
                      </span>
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.4rem", color: "var(--text-tertiary)", letterSpacing: "0.08em", flexShrink: 0 }}>
                        {step.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Card 2: WIE Lead ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ height: "3px", background: "linear-gradient(90deg, #c084fc, transparent)" }} />
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "220px", height: "220px", borderRadius: "50%", background: "#c084fc", filter: "blur(90px)", opacity: 0.07, pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-10px", right: "10px", fontFamily: "'Italiana', serif", fontSize: "9rem", color: "#c084fc", opacity: 0.04, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>02</div>

            <div style={{ padding: "2rem", position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.2rem" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.44rem", letterSpacing: "0.15em", color: "#c084fc", backgroundColor: "#c084fc18", border: "1px solid #c084fc44", borderRadius: "999px", padding: "3px 12px", textTransform: "uppercase" }}>
                  2024–25
                </span>
              </div>

              <h2 style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "4px" }}>
                Women In Engineering Lead
              </h2>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "#c084fc", fontWeight: 600, marginBottom: "1.2rem" }}>
                IEEE Delhi Section Student Network
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.8rem 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "Led 45+ events including hackathons and workshops across the Delhi section.",
                  "Engaged 1,000+ students and improved outreach and participation by 40%.",
                ].map((pt, j) => (
                  <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "#c084fc", marginTop: "6px", flexShrink: 0, fontSize: "0.45rem" }}>▸</span>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Impact stats */}
              <div style={{ marginTop: "auto", paddingTop: "1.4rem", borderTop: "1px solid var(--border-color)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                {[
                  { value: "45+", label: "Events" },
                  { value: "1000+", label: "Students" },
                  { value: "40%", label: "Growth" },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <p style={{ fontFamily: "'Italiana', serif", fontSize: "1.5rem", color: "#c084fc", lineHeight: 1 }}>{s.value}</p>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.38rem", letterSpacing: "0.1em", color: "var(--text-tertiary)", textTransform: "uppercase", marginTop: "3px" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </PageLayout>
  );
}
