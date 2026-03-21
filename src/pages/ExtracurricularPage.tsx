import { motion } from "framer-motion";
import { PageLayout } from "../components/PageLayout";

const activities = [
  { role: "IEEE Chairperson", org: "IEEE IGDTUW", year: "2025–26", emoji: "👩‍💼", impact: "Leading technical initiatives and student development" },
  { role: "Women In Engineering Lead", org: "IEEE WIE Delhi Section", year: "2024–25", emoji: "💪", impact: "Empowering women in STEM and engineering" },
  { role: "Treasurer", org: "IEEE IGDTUW", year: "2024–25", emoji: "💰", impact: "Managing budgets and financial planning" },
  { role: "Head Coordinator", org: "Synergy (Technical Fest)", year: "2023–24", emoji: "🎯", impact: "Organizing flagship technical festival" },
  { role: "Coordinator", org: "TedxIGDTUW", year: "2024–25", emoji: "🎤", impact: "Curating inspiring talks and ideas" },
  { role: "Coordinator", org: "IEEE IGDTUW", year: "2022–2024", emoji: "🔧", impact: "Driving technical workshops and events" },
  { role: "Coordinator", org: "Taarangana (Cultural Fest)", year: "2022–23", emoji: "🎭", impact: "Managing cultural events and celebrations" },
  { role: "Coordinator", org: "E-Cell IGDTUW", year: "2022–24", emoji: "🚀", impact: "Fostering entrepreneurial spirit" },
  { role: "Volunteer & Training Coordinator", org: "Training & Placement Dept.", year: "Present", emoji: "💼", impact: "Supporting student placements and development" },
];

// 📸 Add your gallery photos here
// Replace null with paths like "/gallery/event1.jpg"
const galleryPhotos: { src: string | null; caption: string }[] = [
  { src: null, caption: "IEEE Annual Meet 2025" },
  { src: null, caption: "Synergy Tech Fest 2024" },
  { src: null, caption: "TEDxIGDTUW 2024" },
  { src: null, caption: "WIE Leadership Summit" },
  { src: null, caption: "E-Cell Startup Pitch" },
  { src: null, caption: "Taarangana Cultural Fest" },
  { src: null, caption: "IEEE Workshop" },
  { src: null, caption: "Placement Drive" },
  // ➕ Add more photos here
];

export default function ExtracurricularPage() {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: `var(--accent-color)` }}>
            IMPACT BEYOND CODE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: `var(--accent-color)` }}>
            Extra-curricular
          </h1>
          <p className="mt-3" style={{ color: `var(--text-secondary)` }}>
            Leadership, community, and creating momentum
          </p>
        </motion.div>

        {/* Activities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {activities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl border group relative overflow-hidden"
              style={{
                backgroundColor: `var(--bg-secondary)`,
                borderColor: `var(--border-color)`,
                borderTopWidth: "4px",
                borderTopColor: `var(--accent-color)`,
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--gradient-1)" }}
              />
              <div className="relative z-10">
                <span className="text-3xl block mb-3">{item.emoji}</span>
                <h3 className="font-bold text-base mb-1" style={{ color: `var(--accent-color)` }}>
                  {item.role}
                </h3>
                <p className="text-sm font-semibold mb-1" style={{ color: `var(--text-primary)` }}>
                  {item.org}
                </p>
                <p className="text-xs font-medium mb-3" style={{ color: `var(--accent-tertiary)` }}>
                  {item.year}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: `var(--text-secondary)` }}>
                  {item.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: `var(--accent-color)` }}>
            📸 Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="rounded-xl overflow-hidden border aspect-square relative group cursor-pointer"
                style={{ backgroundColor: `var(--bg-secondary)`, borderColor: `var(--border-color)` }}
              >
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 opacity-40">
                    <span className="text-3xl">📷</span>
                    <p className="text-xs text-center px-2" style={{ color: `var(--text-tertiary)` }}>
                      {photo.caption}
                    </p>
                  </div>
                )}
                {/* Caption overlay */}
                <div
                  className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}
                >
                  <p className="text-white text-xs font-semibold p-3">{photo.caption}</p>
                </div>
              </motion.div>
            ))}

            {/* Add more placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-xl border-2 border-dashed aspect-square flex items-center justify-center"
              style={{ borderColor: `var(--border-color)` }}
            >
              <div className="text-center">
                <p className="text-2xl mb-1">➕</p>
                <p className="text-xs" style={{ color: `var(--text-tertiary)` }}>More soon</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
