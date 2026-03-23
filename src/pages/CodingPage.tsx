import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

// 🔧 Update these with your actual usernames
const GITHUB_USERNAME = "Anamika-K20";
const LEETCODE_USERNAME = "Anamika-K20";

const platforms = [
  {
    name: "GitHub",
    emoji: "🐙",
    username: GITHUB_USERNAME,
    url: `https://github.com/${GITHUB_USERNAME}`,
    color: "#6e40c9",
    description: "Open source contributions and personal projects",
    stats: [
      { label: "Repositories", value: "—" },
      { label: "Followers", value: "—" },
      { label: "Stars", value: "—" },
    ],
  },
  {
    name: "LeetCode",
    emoji: "🟨",
    username: LEETCODE_USERNAME,
    url: `https://leetcode.com/u/${LEETCODE_USERNAME}`,
    color: "#FFA116",
    description: "Data structures, algorithms, and problem solving",
    stats: [
      { label: "Problems Solved", value: "—" },
      { label: "Contest Rating", value: "—" },
      { label: "Global Rank", value: "—" },
    ],
  },
];

export default function CodingPage() {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.35em", color: "var(--accent-color)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
            Competitive Programming
          </p>
          <h1 style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color: "var(--text-primary)", lineHeight: 1, marginBottom: "0.5rem" }}>
            Coding Profiles
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontStyle: "italic", color: "var(--text-secondary)" }}>
            Where I grind, compete, and occasionally cry over edge cases
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {platforms.map((platform, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-7 rounded-2xl border group relative overflow-hidden"
              style={{ backgroundColor: `var(--bg-secondary)`, borderColor: `var(--border-color)` }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at top left, ${platform.color}20 0%, transparent 60%)` }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{platform.emoji}</span>
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: platform.color }}>
                        {platform.name}
                      </h3>
                      <p className="text-xs" style={{ color: `var(--text-tertiary)` }}>
                        @{platform.username}
                      </p>
                    </div>
                  </div>
                  <motion.a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg border"
                    style={{
                      borderColor: `var(--border-color)`,
                      color: `var(--accent-color)`,
                      backgroundColor: `var(--bg-tertiary)`,
                    }}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>

                <p className="text-sm mb-5" style={{ color: `var(--text-secondary)` }}>
                  {platform.description}
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {platform.stats.map((stat, j) => (
                    <div
                      key={j}
                      className="text-center p-3 rounded-xl"
                      style={{ backgroundColor: `var(--bg-tertiary)` }}
                    >
                      <p className="text-lg font-black" style={{ color: platform.color }}>
                        {stat.value}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: `var(--text-tertiary)` }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub contribution graph embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-7 rounded-2xl border"
          style={{ backgroundColor: `var(--bg-secondary)`, borderColor: `var(--border-color)` }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: `var(--text-primary)` }}>
              <Github size={22} /> GitHub Activity
            </h2>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold flex items-center gap-1"
              style={{ color: `var(--accent-color)` }}
            >
              View Profile <ExternalLink size={13} />
            </a>
          </div>

          {/* GitHub contribution graph via ghchart.rshah.org */}
          <div className="overflow-x-auto rounded-xl">
            <img
              src={`https://ghchart.rshah.org/e8927c/${GITHUB_USERNAME}`}
              alt="GitHub contribution graph"
              className="w-full min-w-[600px]"
              style={{ filter: "var(--github-chart-filter, none)" }}
            />
          </div>
          <p className="text-xs mt-3 text-center" style={{ color: `var(--text-tertiary)` }}>
            GitHub contribution graph — updated daily
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
}
