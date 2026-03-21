import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Twinfusion Innovations",
      description:
        "Developed a digital twin platform integrated with enterprise databases for power project management, enabling real-time analytics and faster decision-making. Implemented time-series forecasting (Prophet, ARIMAX) and LSTM anomaly detection, improving system performance and minimizing downtime.",
      tech: ["ReactJS", "FastAPI", "Prophet", "ARIMAX", "LSTM"],
      github: "#",
      link: "#",
      icon: "⚡",
      color: "#4f46e5",
    },
    {
      title: "MediFam Connect",
      description:
        "Developed a ReactJS-based web application for family health record management, including lab tests, medication tracking, and reminders. Designed an age and gender-specific interface for health data visualization, enhancing usability and adoption among patients and healthcare providers.",
      tech: ["ReactJS", "Health Tech", "Data Visualization"],
      github: "#",
      link: "#",
      icon: "🏥",
      color: "#10b981",
    },
    {
      title: "College Billing Process Digitization Module",
      description:
        "Designed and implemented a billing module to streamline faculty billing tasks such as answer sheet evaluation and practical assessments. Utilized React and SQL backend for efficient data management.",
      tech: ["ReactJS", "PHPMyAdmin", "SQL"],
      github: "#",
      link: "#",
      icon: "💼",
      color: "#06b6d4",
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
    hidden: { opacity: 0, y: 40, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: `var(--bg-primary)` }}
    >
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--gradient-1)" }}
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-10"
        style={{ background: "var(--gradient-1)" }}
        animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles size={28} style={{ color: `var(--accent-color)` }} />
            <span
              className="text-sm font-bold"
              style={{ color: `var(--accent-color)` }}
            >
              FEATURED WORK
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: `var(--accent-color)` }}
          >
            Featured Projects
          </h2>
          <p style={{ color: `var(--text-secondary)` }}>
            Innovative solutions showcase with cutting-edge technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="group relative rounded-2xl overflow-hidden p-8 transition-all min-h-96 flex flex-col perspective"
              style={{
                backgroundColor: `var(--bg-secondary)`,
                border: `1px solid var(--border-color)`,
              }}
            >
              {/* Gradient overlay - appears on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{ background: "var(--gradient-1)" }}
                transition={{ duration: 0.4 }}
              />

              {/* Floating icon */}
              <motion.div
                className="text-5xl mb-4 group-hover:scale-110"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {project.icon}
              </motion.div>

              <div className="relative z-10 flex flex-col flex-grow">
                <h3
                  className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform"
                  style={{ color: `var(--accent-color)` }}
                >
                  {project.title}
                </h3>
                <p
                  className="mb-6 flex-grow text-base leading-relaxed"
                  style={{ color: `var(--text-secondary)` }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs rounded-full font-semibold cursor-default"
                      style={{
                        backgroundColor: `var(--accent-light)`,
                        color: `var(--accent-color)`,
                        border: `1px solid var(--accent-color)`,
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3 group-hover:gap-4 transition-all">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all flex-1 justify-center"
                    style={{
                      backgroundColor: `var(--bg-tertiary)`,
                      color: `var(--accent-color)`,
                      border: `1px solid var(--border-color)`,
                    }}
                  >
                    <Github size={18} /> Code
                  </motion.a>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all flex-1 justify-center text-white"
                    style={{ backgroundColor: `var(--accent-color)` }}
                  >
                    <ExternalLink size={18} /> View
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 mx-auto mt-16 rounded-full"
          style={{
            background: "var(--gradient-1)",
            width: "100px",
          }}
        />
      </div>
    </section>
  );
};
