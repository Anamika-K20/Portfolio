import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

const education = [
  {
    year: "2022 – 2026",
    degree: "B.Tech — Electronics & Communication Engineering - Artificial Intelligence",
    institute: "Indira Gandhi Delhi Technical University For Women",
    score: "8.73 / 10.0",
    level: "Undergraduate",
    logo: "/igdtuw.png",
  },
  {
    year: "2022",
    degree: "Senior Secondary (CBSE — Class XII)",
    institute: "Shaheed Rajpal DAV Public School, Delhi",
    score: "83.4%",
    level: "High School",
    logo: "/srdav.png",
  },
  {
    year: "2020",
    degree: "Secondary (CBSE — Class X)",
    institute: "Shaheed Rajpal DAV Public School, Delhi",
    score: "95%",
    level: "Secondary",
    logo: "/srdav.png",
  },
];

const courses = [
  "Object Oriented Programming",
  "Database Management Systems",
  "Neural Network and Artificial Intelligence",
  "Data Structures and Algorithms",
  "Optimization Techniques and Decision Making",
  "Machine Learning",
];

export default function EducationPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: `var(--accent-color)` }}>
            ACADEMIC JOURNEY
          </p>
          <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3" style={{ color: `var(--accent-color)` }}>
            <GraduationCap size={40} /> Education
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-6 mb-16">
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: `var(--border-color)` }}
          />
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-6 relative"
            >
              {/* dot */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 border overflow-hidden"
                style={{
                  backgroundColor: `var(--bg-primary)`,
                  borderColor: `var(--border-color)`,
                }}
              >
                <img src={edu.logo} alt={edu.institute} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "4px" }} />
              </div>
              <motion.div
                whileHover={{ x: 6 }}
                className="flex-grow p-6 rounded-xl border-l-4 group relative overflow-hidden"
                style={{
                  backgroundColor: `var(--bg-secondary)`,
                  borderColor: `var(--border-color)`,
                  borderLeftColor: `var(--accent-color)`,
                }}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-xs font-bold mb-1" style={{ color: `var(--accent-color)` }}>
                      {edu.year}
                    </p>
                    <h3 className="text-lg font-bold" style={{ color: `var(--text-primary)` }}>
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-semibold mt-1" style={{ color: `var(--accent-tertiary)` }}>
                      {edu.level}
                    </p>
                    <p className="text-sm mt-1" style={{ color: `var(--text-secondary)` }}>
                      {edu.institute}
                    </p>
                  </div>
                  <span
                    className="px-3 py-1.5 rounded-lg text-sm font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: `var(--accent-color)` }}
                  >
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: `var(--accent-color)` }}>
            Relevant Coursework
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ x: 4 }}
                className="p-4 rounded-lg border-l-4 text-sm font-semibold"
                style={{
                  backgroundColor: `var(--bg-secondary)`,
                  borderColor: `var(--border-color)`,
                  borderLeftColor: `var(--accent-secondary)`,
                  color: `var(--text-primary)`,
                }}
              >
                {course}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
