import { motion } from "framer-motion";
import {
  User,
  BookOpen,
  Award,
  GraduationCap,
  Sparkles,
  Zap,
  Code,
  Database,
} from "lucide-react";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40, rotateY: -20 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const educationData = [
    {
      year: "2026",
      degree:
        "B.Tech (Electronics and Communication Engineering - Artificial Intelligence)",
      institute: "Indira Gandhi Delhi Technical University For Women",
      score: "8.73 / 10.0",
      level: "Undergraduate",
    },
    {
      year: "2022",
      degree: "Senior Secondary (CBSE)",
      institute: "S.R. DAV Public School, Delhi",
      score: "83.4%",
      level: "High School",
    },
    {
      year: "2020",
      degree: "Secondary (CBSE)",
      institute: "S.R. DAV Public School, Delhi",
      score: "95%",
      level: "Secondary",
    },
  ];

  const leadershipData = [
    {
      role: "IEEE Chairperson",
      organization: "IEEE IGDTUW",
      year: "2025-26",
      emoji: "👨‍💼",
      impact: "Leading technical initiatives and student development",
    },
    {
      role: "Women In Engineering Lead",
      organization: "IEEE WIE Delhi Section",
      year: "2024-25",
      emoji: "💪",
      impact: "Empowering women in STEM and engineering",
    },
    {
      role: "Treasurer",
      organization: "IEEE IGDTUW",
      year: "2024-25",
      emoji: "💰",
      impact: "Managing budgets and financial planning",
    },
    {
      role: "Head Coordinator",
      organization: "Synergy (Technical Fest)",
      year: "2023-24",
      emoji: "🎯",
      impact: "Organizing flagship technical festival",
    },
    {
      role: "Coordinator",
      organization: "TedxIGDTUW",
      year: "2024-25",
      emoji: "🎤",
      impact: "Curating inspiring talks and ideas",
    },
    {
      role: "Coordinator",
      organization: "IEEE IGDTUW",
      year: "2022-2024",
      emoji: "🔧",
      impact: "Driving technical workshops and events",
    },
    {
      role: "Coordinator",
      organization: "Taarangana (Cultural Fest)",
      year: "2022-23",
      emoji: "🎭",
      impact: "Managing cultural events and celebrations",
    },
    {
      role: "Coordinator",
      organization: "E-Cell IGDTUW",
      year: "2022-24",
      emoji: "🚀",
      impact: "Fostering entrepreneurial spirit",
    },
    {
      role: "Volunteer & Training Coordinator",
      organization: "Training and Placement Department",
      year: "Present",
      emoji: "💼",
      impact: "Supporting student placements and development",
    },
  ];

  const skillsData = {
    programming: [
      {
        name: "C",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        color: "#00A4EF",
      },
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        color: "#00568C",
      },
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "#E34C26",
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "#563D7C",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "#3776AB",
      },
      {
        name: "SQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        color: "#336791",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "#F7DF1E",
      },
    ],
    frameworks: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "Angular",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        color: "#DD0031",
      },
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        color: "#7952B3",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#68A063",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "#000000",
      },
      {
        name: "FastAPI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        color: "#009688",
      },
    ],
    specialized: [
      {
        name: "FAISS",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/meta.svg",
        color: "#4F46E5",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "#13AA52",
      },
      {
        name: "AI/ML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        color: "#FF6B6B",
      },
    ],
    tools: [
      {
        name: "VS Code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "#007ACC",
      },
      {
        name: "Colab",
        logo: "https://colab.research.google.com/favicon.ico",
        color: "#F9AB00",
      },
    ],
  };

  const courseData = [
    "Object Oriented Programming",
    "Database Management Systems",
    "Neural Network and Artificial Intelligence",
    "Data Structures and Algorithm",
    "Optimization Techniques and Decision Making",
    "Machine Learning",
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: `var(--bg-primary)` }}
    >
      {/* Animated background with multiple blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--gradient-1)" }}
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-10"
        style={{
          background:
            "linear-gradient(135deg, #06b6d4 0%, #a78bfa 50%, #ec4899 100%)",
        }}
        animate={{ scale: [1.1, 1, 1.1], rotate: -360 }}
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
              GET TO KNOW ME
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: `var(--accent-color)` }}
          >
            About Me
          </h2>
          <p style={{ color: `var(--text-secondary)` }}>
            Passionate engineering student with a focus on AI and full-stack
            development
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: User,
              title: "About",
              content:
                "Fourth-year engineering student with strong academic performance and hands-on project experience in AI and ML.",
              gradient: "from-ec4899 to-f472b6",
            },
            {
              icon: BookOpen,
              title: "Skills",
              content:
                "Full-stack development, React, Node.js, Python, TypeScript, PostgreSQL, FastAPI, and emerging AI technologies.",
              gradient: "from-a78bfa to-8b5cf6",
            },
            {
              icon: Award,
              title: "Achievements",
              content:
                "5 research papers published with 10+ citations, internship at Citi Bank, and multiple project innovations.",
              gradient: "from-06b6d4 to-0891b2",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                y: -12,
                transition: { duration: 0.3 },
              }}
              className="p-8 rounded-2xl transition-all relative group overflow-hidden min-h-64 flex flex-col justify-between"
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
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-20 group-hover:opacity-40"
                style={{ background: `var(--accent-color)` }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <item.icon
                    className="mb-4 text-4xl group-hover:scale-110 transition-transform"
                    size={40}
                    style={{ color: `var(--accent-color)` }}
                  />
                </motion.div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: `var(--text-primary)` }}
                >
                  {item.title}
                </h3>
                <p style={{ color: `var(--text-secondary)` }}>{item.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <GraduationCap
                size={36}
                style={{ color: `var(--accent-color)` }}
              />
            </motion.div>
            <h3
              className="text-3xl md:text-4xl font-bold"
              style={{ color: `var(--accent-color)` }}
            >
              Education
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  x: 12,
                  transition: { duration: 0.3 },
                }}
                className="p-6 rounded-xl transition-all relative group overflow-hidden border-l-4"
                style={{
                  backgroundColor: `var(--bg-secondary)`,
                  border: `1px solid var(--border-color)`,
                  borderLeftColor: `var(--accent-color)`,
                  borderLeftWidth: "4px",
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{ background: "var(--gradient-1)" }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="absolute top-2 right-2 text-2xl opacity-20 group-hover:opacity-40"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {i === 0 ? "🎓" : i === 1 ? "📚" : "⭐"}
                </motion.div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                    <div className="flex-grow">
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold mb-1"
                        style={{ color: `var(--accent-color)` }}
                      >
                        {edu.year}
                      </motion.p>
                      <h4
                        className="text-xl font-bold mt-1 group-hover:translate-x-1 transition-transform"
                        style={{ color: `var(--text-primary)` }}
                      >
                        {edu.degree}
                      </h4>
                    </div>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 rounded-lg text-sm font-semibold flex-shrink-0 text-white"
                      style={{
                        backgroundColor: `var(--accent-color)`,
                      }}
                    >
                      {edu.score}
                    </motion.span>
                  </div>
                  <p
                    className="text-xs font-semibold mb-2"
                    style={{ color: `var(--accent-tertiary)` }}
                  >
                    {edu.level}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: `var(--text-secondary)` }}
                  >
                    {edu.institute}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Leadership & Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Zap size={28} style={{ color: `var(--accent-color)` }} />
              <span
                className="text-sm font-bold"
                style={{ color: `var(--accent-color)` }}
              >
                IMPACT BEYOND CODE
              </span>
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold"
              style={{ color: `var(--accent-color)` }}
            >
              Where I Create Momentum
            </h3>
            <p className="mt-3" style={{ color: `var(--text-secondary)` }}>
              Leadership roles and community engagement that drive positive
              change
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {leadershipData.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="p-6 rounded-xl transition-all relative group overflow-hidden border-t-4"
                style={{
                  backgroundColor: `var(--bg-secondary)`,
                  border: `1px solid var(--border-color)`,
                  borderTopColor: `var(--accent-color)`,
                  borderTopWidth: "4px",
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{ background: "var(--gradient-1)" }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="absolute top-2 right-2 text-3xl opacity-30 group-hover:opacity-50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {item.emoji}
                </motion.div>
                <div className="relative z-10">
                  <motion.h4
                    className="text-lg font-bold group-hover:translate-x-1 transition-transform"
                    style={{ color: `var(--accent-color)` }}
                  >
                    {item.role}
                  </motion.h4>
                  <p
                    className="text-sm font-semibold mt-1"
                    style={{ color: `var(--text-primary)` }}
                  >
                    {item.organization}
                  </p>
                  <p
                    className="text-xs font-medium mt-2"
                    style={{ color: `var(--accent-tertiary)` }}
                  >
                    {item.year}
                  </p>
                  <p
                    className="text-sm mt-4 leading-relaxed"
                    style={{ color: `var(--text-secondary)` }}
                  >
                    {item.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-24"
        >
          <div className="flex items-center gap-3 mb-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code size={36} style={{ color: `var(--accent-color)` }} />
            </motion.div>
            <h3
              className="text-3xl md:text-4xl font-bold"
              style={{ color: `var(--accent-color)` }}
            >
              Technical Skills
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Programming Languages */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="p-6 rounded-xl transition-all relative group overflow-hidden"
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
                <h4
                  className="text-lg font-bold mb-4"
                  style={{ color: `var(--accent-color)` }}
                >
                  Programming & Frameworks
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[...skillsData.programming, ...skillsData.frameworks].map(
                    (skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.15, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center justify-center p-4 rounded-xl transition-all relative group overflow-hidden cursor-pointer"
                        style={{
                          backgroundColor: `var(--bg-tertiary)`,
                          border: `2px solid ${skill.color}20`,
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100"
                          style={{
                            background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <div
                            className="flex items-center justify-center w-12 h-12"
                            style={{
                              filter: `drop-shadow(0 0 8px ${skill.color}80)`,
                            }}
                          >
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <p
                            className="text-xs font-bold text-center"
                            style={{ color: skill.color }}
                          >
                            {skill.name}
                          </p>
                        </div>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>

            {/* Tools & Specialized */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="p-6 rounded-xl transition-all relative group overflow-hidden"
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
                <h4
                  className="text-lg font-bold mb-4"
                  style={{ color: `var(--accent-color)` }}
                >
                  Tools & Specialized Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[...skillsData.tools, ...skillsData.specialized].map(
                    (skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.15, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center justify-center p-4 rounded-xl transition-all relative group overflow-hidden cursor-pointer"
                        style={{
                          backgroundColor: `var(--bg-tertiary)`,
                          border: `2px solid ${skill.color}20`,
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100"
                          style={{
                            background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <div
                            className="flex items-center justify-center w-12 h-12"
                            style={{
                              filter: `drop-shadow(0 0 8px ${skill.color}80)`,
                            }}
                          >
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <p
                            className="text-xs font-bold text-center"
                            style={{ color: skill.color }}
                          >
                            {skill.name}
                          </p>
                        </div>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Relevant Coursework Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24"
        >
          <div className="flex items-center gap-3 mb-10">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Database size={36} style={{ color: `var(--accent-color)` }} />
            </motion.div>
            <h3
              className="text-3xl md:text-4xl font-bold"
              style={{ color: `var(--accent-color)` }}
            >
              Relevant Coursework
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {courseData.map((course, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                className="p-5 rounded-lg transition-all relative group overflow-hidden border-l-4"
                style={{
                  backgroundColor: `var(--bg-secondary)`,
                  border: `1px solid var(--border-color)`,
                  borderLeftColor: `var(--accent-secondary)`,
                  borderLeftWidth: "4px",
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{ background: "var(--gradient-1)" }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="absolute top-1 right-1 text-lg opacity-20 group-hover:opacity-40"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📖
                </motion.div>
                <p
                  className="text-sm font-semibold relative z-10"
                  style={{ color: `var(--text-primary)` }}
                >
                  {course}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
