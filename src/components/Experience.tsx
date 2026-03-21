import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Zap } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Citi Bank",
      position: "Summer Analyst",
      duration: "2 June 2025 – 25 July 2025",
      location: "Pune, Maharashtra",
      description:
        "Built and deployed an enterprise-ready Retrieval-Augmented Generation (RAG) pipeline using LLMs, PyMuPDF, and FAISS, integrated with Angular and FastAPI, reducing document processing time by 95% (days to hours) and currently in active organizational use.",
      accomplishments: [
        "Built and deployed an enterprise-ready Retrieval-Augmented Generation (RAG) pipeline using LLMs, PyMuPDF, and FAISS, integrated with Angular and FastAPI, reducing document processing time by 95%",
        "Engineered a tree-based document parsing algorithm to enhance accuracy, scalability, and efficiency in automated form digitization, eliminating manual data entry and enabling seamless enterprise deployment",
      ],
      skills: [
        "RAG",
        "LLMs",
        "PyMuPDF",
        "FAISS",
        "Angular",
        "FastAPI",
        "Python",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, rotateX: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: `var(--bg-primary)` }}
    >
      {/* Animated background with multiple layers */}
      <motion.div
        className="absolute -left-96 top-20 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--gradient-1)" }}
        animate={{ rotate: -360, scale: [1, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-0 bottom-20 w-80 h-80 rounded-full opacity-10"
        style={{
          background:
            "linear-gradient(135deg, #06b6d4 0%, #ec4899 50%, #a78bfa 100%)",
        }}
        animate={{ scale: [1.1, 1, 1.1], rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap size={28} style={{ color: `var(--accent-color)` }} />
            <span
              className="text-sm font-bold"
              style={{ color: `var(--accent-color)` }}
            >
              PROFESSIONAL EXPERIENCE
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: `var(--accent-color)` }}
          >
            Experience
          </h2>
          <p style={{ color: `var(--text-secondary)` }}>
            Hands-on experience with cutting-edge technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                x: 10,
                transition: { duration: 0.3 },
              }}
              className="p-8 rounded-2xl transition-all relative group overflow-hidden"
              style={{
                backgroundColor: `var(--bg-secondary)`,
                border: `1px solid var(--border-color)`,
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{ background: "var(--gradient-1)" }}
                transition={{ duration: 0.4 }}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <h3
                      className="text-2xl font-bold group-hover:translate-x-2 transition-transform"
                      style={{ color: `var(--accent-color)` }}
                    >
                      {exp.position}
                    </h3>
                    <p
                      className="text-lg"
                      style={{ color: `var(--text-secondary)` }}
                    >
                      {exp.company}
                    </p>
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Briefcase
                      style={{ color: `var(--accent-color)` }}
                      size={32}
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="flex flex-col gap-2 mb-4 text-sm"
                  style={{ color: `var(--text-tertiary)` }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="flex items-center gap-1 hover:translate-x-1 transition-transform">
                    <Calendar size={16} /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1 hover:translate-x-1 transition-transform">
                    <MapPin size={16} /> {exp.location}
                  </span>
                </motion.div>

                <p
                  className="mb-6 text-base leading-relaxed"
                  style={{ color: `var(--text-secondary)` }}
                >
                  {exp.description}
                </p>

                {exp.accomplishments && exp.accomplishments.length > 0 && (
                  <motion.ul
                    className="mb-6 space-y-3 pl-6"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {exp.accomplishments.map((accomplishment, idx) => (
                      <motion.li
                        key={idx}
                        custom={idx}
                        variants={bulletVariants}
                        className="list-disc text-sm list-inside marker:text-accent-color marker:font-bold group/bullet"
                        style={{ color: `var(--text-secondary)` }}
                        whileHover={{
                          x: 5,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <span className="group-hover/bullet:text-accent-color transition-colors">
                          {accomplishment}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08 },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {exp.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.08,
                        y: -3,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 text-sm rounded-full font-semibold cursor-default"
                      style={{
                        backgroundColor: `var(--accent-light)`,
                        color: `var(--accent-color)`,
                        border: `1px solid var(--accent-color)`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
