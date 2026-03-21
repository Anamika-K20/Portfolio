import { motion } from "framer-motion";
import { BookOpen, FileText, ExternalLink, Award } from "lucide-react";

export const Research = () => {
  const papers = [
    {
      title: "Speaker Identification Using Various Machine Learning Algorithms",
      authors: "S Bharti, A Kumari, D Verma, A Kumar",
      journal:
        "2024 14th International Conference on Cloud Computing, Data Science & Engineering",
      year: 2024,
      citations: 3,
      abstract:
        "This paper presents a comprehensive study of machine learning algorithms for speaker identification tasks, comparing multiple approaches for acoustic feature extraction and classification.",
      googleScholar: "https://ieeexplore.ieee.org/abstract/document/10463466",
    },
    {
      title:
        "Integrating Facial Expression Recognition for Emotion Responsive Music Recommendations",
      authors: "A Kumari, A Goyal, A Sahu, R Rani, G Jaiswal, A Sharma",
      journal:
        "2024 International Conference on Intelligent Computing and Emerging Applications",
      year: 2024,
      citations: 2,
      abstract:
        "An innovative approach combining facial expression recognition with emotion detection to provide personalized music recommendations based on real-time emotional states.",
      googleScholar: "https://ieeexplore.ieee.org/abstract/document/10837091",
    },
    {
      title:
        "Sentiment-Driven Music Recommendations: A Comparative Study of ML Algorithms and Chatbot Implementation",
      authors: "A Sahu, A Kumari, A Goyal, R Rani, G Jaiswal, A Dev",
      journal:
        "2023 Global Conference on Information Technologies and Communications (GCITC)",
      year: 2023,
      citations: 3,
      abstract:
        "A comprehensive comparison of machine learning algorithms for sentiment analysis integrated with intelligent chatbot systems for music recommendation delivery.",
      googleScholar: "https://ieeexplore.ieee.org/abstract/document/10426617",
    },
    {
      title:
        "Improved Healthcare Modeling using Sustainable Random Forest Classifier",
      authors: "S Bharti, A Kumari, A Kumar",
      journal: "2025 Global Conference in Emerging Technology (GINOTECH)",
      year: 2025,
      citations: 1,
      abstract:
        "A novel approach to healthcare prediction using optimized Random Forest classifiers with sustainable machine learning practices for improved diagnostic accuracy.",
      googleScholar: "https://ieeexplore.ieee.org/abstract/document/11076967",
    },
    {
      title:
        "Analysing Social Media Data for Emotion Detection and Sentiment Analysis",
      authors: "S Bharti, D Verma, A Kumari, A Kumar",
      journal:
        "International Conference on Artificial Intelligence and Speech Technology",
      year: 2023,
      citations: 1,
      abstract:
        "An in-depth analysis of sentiment patterns and emotion detection methodologies applied to large-scale social media datasets using advanced NLP techniques.",
      googleScholar:
        "https://link.springer.com/chapter/10.1007/978-3-031-75167-7_29",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40, rotateY: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="research"
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: `var(--bg-primary)` }}
    >
      {/* Animated background with multiple blobs */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--gradient-1)" }}
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10"
        style={{
          background:
            "linear-gradient(135deg, #06b6d4 0%, #a78bfa 50%, #ec4899 100%)",
        }}
        animate={{ scale: [1.1, 1, 1.1], rotate: -360 }}
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
            <Award size={28} style={{ color: `var(--accent-color)` }} />
            <span
              className="text-sm font-bold"
              style={{ color: `var(--accent-color)` }}
            >
              ACADEMIC CONTRIBUTIONS
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: `var(--accent-color)` }}
          >
            Research & Publications
          </h2>
          <p style={{ color: `var(--text-secondary)` }}>
            Peer-reviewed papers in AI, ML, and emerging technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {papers.map((paper, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                x: 8,
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
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <BookOpen
                      style={{ color: `var(--accent-color)` }}
                      className="flex-shrink-0"
                      size={28}
                    />
                  </motion.div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                      <h3
                        className="text-xl md:text-2xl font-bold leading-tight group-hover:translate-x-1 transition-transform"
                        style={{ color: `var(--accent-color)` }}
                      >
                        {paper.title}
                      </h3>
                      {paper.citations > 0 && (
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="flex-shrink-0 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap"
                          style={{
                            backgroundColor: `var(--accent-light)`,
                            color: `var(--accent-color)`,
                          }}
                        >
                          ⭐ {paper.citations}
                        </motion.span>
                      )}
                    </div>
                    <p
                      className="text-sm font-semibold mb-2"
                      style={{ color: `var(--text-secondary)` }}
                    >
                      {paper.authors}
                    </p>
                    <p
                      className="text-sm mb-3"
                      style={{ color: `var(--text-tertiary)` }}
                    >
                      {paper.journal} • {paper.year}
                    </p>
                    <p
                      className="mb-4 text-base"
                      style={{ color: `var(--text-secondary)` }}
                    >
                      {paper.abstract}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href={paper.googleScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 font-semibold transition-colors px-4 py-2 rounded-lg"
                        style={{
                          color: `var(--accent-color)`,
                          backgroundColor: `var(--accent-light)`,
                          border: `1px solid var(--accent-color)`,
                        }}
                      >
                        <FileText size={16} />
                        Google Scholar
                        <ExternalLink size={14} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Research Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { label: "Papers Published", value: "5", icon: "📚" },
            { label: "Total Citations", value: "10", icon: "✨" },
            { label: "Collaborators", value: "12+", icon: "👥" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.08,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="p-6 rounded-xl text-center relative group overflow-hidden"
              style={{
                backgroundColor: `var(--bg-secondary)`,
                border: `1px solid var(--border-color)`,
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{ background: "var(--gradient-1)" }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <motion.div
                  className="text-3xl mb-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.icon}
                </motion.div>
                <p
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: `var(--accent-color)` }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: `var(--text-secondary)` }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Scholar Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://scholar.google.com/citations?user=TGnqdokAAAAJ&hl=en&authuser=3"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all"
            style={{
              backgroundColor: `var(--accent-color)`,
              color: "white",
            }}
          >
            Visit Google Scholar Profile
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
