import { motion } from "framer-motion";
import { PageLayout } from "../components/PageLayout";

const featured = [
  {
    role: "IEEE Chairperson",
    org: "IEEE IGDTUW",
    period: "2025–26",
    accentColor: "#ff9472",
    points: [
      "Leading a 250+ member committee, ensuring successful planning, coordination, and execution of multiple technical and non-technical events.",
    ],
    progression: [
      { title: "Event Mgmt & Content", year: "2022–23" },
      { title: "Event Mgmt", year: "2023–24" },
      { title: "Treasurer", year: "2024–25" },
      { title: "Chairperson", year: "2025–26" },
    ],
  },
  {
    role: "Women In Engineering Lead",
    org: "IEEE Delhi Section Student Network",
    period: "2024–25",
    accentColor: "#d580ff",
    points: [
      "Led 45+ events including hackathons and workshops, engaging 1,000+ students across the Delhi section.",
      "Improved outreach and participation by 40%.",
    ],
    progression: null,
  },
];

const other = [
  {
    role: "MR Head",
    org: "Training & Placement Cell, IGDTUW",
    period: "2025–26",
    accentColor: "#5eead4",
    desc: "Led student outreach and communication efforts, facilitating coordination between recruiters, placement teams, and students to streamline placement processes.",
  },
  {
    role: "Head Coordinator",
    org: "Synergy — Technical Fest",
    period: "2023–24",
    accentColor: "#fcd34d",
    desc: "Led cross-functional teams to plan and execute flagship initiatives, ensuring seamless coordination, effective delegation, and successful event delivery.",
  },
  {
    role: "Coordinator",
    org: "TEDxIGDTUW",
    period: "2023–24",
    accentColor: "#ff9472",
    desc: "Managed event planning, speaker coordination, and team operations to successfully organize TEDx sessions focused on inspiring ideas and meaningful conversations.",
  },
  {
    role: "Coordinator",
    org: "E-Cell IGDTUW",
    period: "2022–24",
    accentColor: "#d580ff",
    desc: "Supported entrepreneurship initiatives by organizing startup-focused events, workshops, and networking opportunities for aspiring innovators.",
  },
  {
    role: "Coordinator",
    org: "Taarangana — Cultural Fest",
    period: "2022–23",
    accentColor: "#4ade80",
    desc: "Contributed to planning and managing large-scale cultural fest operations, coordinating teams and logistics for smooth event execution.",
  },
  {
    role: "Class Representative",
    org: "IGDTUW",
    period: "2022–26",
    accentColor: "#5eead4",
    desc: "Represented the student body in academic and administrative matters, ensuring effective communication between faculty and classmates.",
  },
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

        {/* Featured side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {featured.map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
              <div style={{ height: "3px", background: `linear-gradient(90deg, ${pos.accentColor}, transparent)` }} />
              <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: pos.accentColor, filter: "blur(80px)", opacity: 0.07, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "-10px", right: "10px", fontFamily: "'Italiana', serif", fontSize: "8rem", color: pos.accentColor, opacity: 0.04, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div style={{ padding: "2rem", position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.2rem" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.44rem", letterSpacing: "0.15em", color: pos.accentColor, backgroundColor: pos.accentColor + "18", border: `1px solid ${pos.accentColor}44`, borderRadius: "999px", padding: "3px 12px", textTransform: "uppercase" }}>
                    {pos.period}
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "4px" }}>
                  {pos.role}
                </h2>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: pos.accentColor, fontWeight: 600, marginBottom: "1.2rem" }}>
                  {pos.org}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.4rem 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {pos.points.map((pt, j) => (
                    <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: pos.accentColor, marginTop: "6px", flexShrink: 0, fontSize: "0.45rem" }}>▸</span>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{pt}</span>
                    </li>
                  ))}
                </ul>

                {pos.progression && (
                  <div style={{ marginTop: "auto", paddingTop: "1.2rem", borderTop: "1px solid var(--border-color)" }}>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.2em", color: "var(--text-tertiary)", textTransform: "uppercase", marginBottom: "0.8rem" }}>Journey</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      {pos.progression.map((step, k) => {
                        const isLast = k === pos.progression!.length - 1;
                        return (
                          <div key={k} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <div style={{ width: "7px", height: "7px", borderRadius: "50%", flexShrink: 0, backgroundColor: isLast ? pos.accentColor : "var(--text-tertiary)", boxShadow: isLast ? `0 0 6px ${pos.accentColor}` : "none" }} />
                            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.92rem", color: isLast ? pos.accentColor : "var(--text-secondary)", fontWeight: isLast ? 700 : 400, flex: 1 }}>{step.title}</span>
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.38rem", color: "var(--text-tertiary)", letterSpacing: "0.08em" }}>{step.year}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <div style={{ flex: 1, height: "1px", background: "var(--border-color)" }} />
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.44rem", letterSpacing: "0.2em", color: "var(--text-tertiary)", textTransform: "uppercase", whiteSpace: "nowrap" }}>Other Roles</p>
          <div style={{ flex: 1, height: "1px", background: "var(--border-color)" }} />
        </div>

        {/* Other roles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {other.map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div style={{ height: "2px", background: `linear-gradient(90deg, ${pos.accentColor}, transparent)` }} />
              <div style={{ padding: "1.4rem 1.6rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.7rem" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.12em", color: pos.accentColor, backgroundColor: pos.accentColor + "15", border: `1px solid ${pos.accentColor}40`, borderRadius: "999px", padding: "2px 10px", textTransform: "uppercase" }}>
                    {pos.period}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Italiana', serif", fontSize: "1.3rem", color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "3px" }}>
                  {pos.role}
                </h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: pos.accentColor, fontWeight: 600, marginBottom: "0.8rem" }}>
                  {pos.org}
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.92rem", fontStyle: "italic", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {pos.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
