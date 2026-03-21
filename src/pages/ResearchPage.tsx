import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Award, Users, Quote } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

const papers = [
  {
    title: "Speaker Identification Using Various Machine Learning Algorithms",
    authors: "S Bharti, A Kumari, D Verma, A Kumar",
    journal: "14th International Conference on Cloud Computing, Data Science & Engineering",
    year: 2024,
    citations: 3,
    abstract: "A comprehensive study of machine learning algorithms for speaker identification, comparing multiple approaches for acoustic feature extraction and classification.",
    link: "https://ieeexplore.ieee.org/abstract/document/10463466",
    tags: ["ML", "Speaker ID", "IEEE"],
  },
  {
    title: "Integrating Facial Expression Recognition for Emotion Responsive Music Recommendations",
    authors: "A Kumari, A Goyal, A Sahu, R Rani, G Jaiswal, A Sharma",
    journal: "International Conference on Intelligent Computing and Emerging Applications",
    year: 2024,
    citations: 2,
    abstract: "An innovative approach combining facial expression recognition with emotion detection to provide personalized music recommendations based on real-time emotional states.",
    link: "https://ieeexplore.ieee.org/abstract/document/10837091",
    tags: ["Computer Vision", "Emotion AI", "Music"],
  },
  {
    title: "Sentiment-Driven Music Recommendations: A Comparative Study of ML Algorithms and Chatbot Implementation",
    authors: "A Sahu, A Kumari, A Goyal, R Rani, G Jaiswal, A Dev",
    journal: "Global Conference on Information Technologies and Communications (GCITC)",
    year: 2023,
    citations: 3,
    abstract: "A comprehensive comparison of ML algorithms for sentiment analysis integrated with intelligent chatbot systems for music recommendation delivery.",
    link: "https://ieeexplore.ieee.org/abstract/document/10426617",
    tags: ["NLP", "Sentiment Analysis", "Chatbot"],
  },
  {
    title: "Improved Healthcare Modeling using Sustainable Random Forest Classifier",
    authors: "S Bharti, A Kumari, A Kumar",
    journal: "Global Conference in Emerging Technology (GINOTECH)",
    year: 2025,
    citations: 1,
    abstract: "A novel approach to healthcare prediction using optimized Random Forest classifiers with sustainable ML practices for improved diagnostic accuracy.",
    link: "https://ieeexplore.ieee.org/abstract/document/11076967",
    tags: ["Healthcare AI", "Random Forest", "ML"],
  },
  {
    title: "Analysing Social Media Data for Emotion Detection and Sentiment Analysis",
    authors: "S Bharti, D Verma, A Kumari, A Kumar",
    journal: "International Conference on Artificial Intelligence and Speech Technology",
    year: 2023,
    citations: 1,
    abstract: "In-depth analysis of sentiment patterns and emotion detection methodologies applied to large-scale social media datasets using advanced NLP techniques.",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-75167-7_29",
    tags: ["NLP", "Social Media", "Springer"],
  },
];

const stats = [
  { label: "Papers Published", value: "5", icon: BookOpen, color: "#e8927c" },
  { label: "Total Citations", value: "10+", icon: Quote, color: "#c084fc" },
  { label: "Collaborators", value: "12+", icon: Users, color: "#67e8f9" },
  { label: "Conferences", value: "5", icon: Award, color: "#f5c842" },
];

export default function ResearchPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-5 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <span className="section-label block mb-3">ACADEMIC CONTRIBUTIONS</span>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: `var(--text-primary)` }}
          >
            Research &{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-1)" }}>
              Publications
            </span>
          </h1>
          <p className="text-base mb-6" style={{ color: `var(--text-secondary)` }}>
            Peer-reviewed papers in AI, ML, and emerging technologies
          </p>

          {/* Google Scholar CTA */}
          <motion.a
            href="https://scholar.google.com/citations?user=TGnqdokAAAAJ&hl=en&authuser=3"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "var(--glow)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white"
            style={{ background: "var(--gradient-1)" }}
          >
            <ExternalLink size={15} /> View Google Scholar Profile
          </motion.a>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl border text-center"
              style={{ backgroundColor: `var(--bg-card)`, borderColor: `var(--border-color)` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: `${stat.color}18`, color: stat.color }}
              >
                <stat.icon size={18} />
              </div>
              <p className="text-2xl font-black mb-1" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-xs font-medium" style={{ color: `var(--text-tertiary)` }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Papers */}
        <div className="space-y-5">
          {papers.map((paper, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ x: 4 }}
              className="p-7 rounded-2xl border group relative overflow-hidden"
              style={{ backgroundColor: `var(--bg-card)`, borderColor: `var(--border-color)` }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ background: "var(--gradient-1)" }}
              />

              <div className="pl-2">
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <div className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {paper.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: `var(--bg-tertiary)`, color: `var(--text-tertiary)` }}
                      >
                        {paper.year}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold leading-snug"
                      style={{ fontFamily: "var(--font-display)", color: `var(--text-primary)` }}
                    >
                      {paper.title}
                    </h3>
                  </div>
                  {paper.citations > 0 && (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0 flex flex-col items-center px-3 py-2 rounded-xl"
                      style={{ backgroundColor: `var(--accent-light)`, color: `var(--accent-color)` }}
                    >
                      <span className="text-lg font-black">{paper.citations}</span>
                      <span className="text-xs font-semibold">cites</span>
                    </motion.div>
                  )}
                </div>

                <p className="text-sm font-semibold mb-1" style={{ color: `var(--accent-color)` }}>
                  {paper.authors}
                </p>
                <p className="text-xs mb-3 italic" style={{ color: `var(--text-tertiary)` }}>
                  {paper.journal}
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: `var(--text-secondary)` }}>
                  {paper.abstract}
                </p>

                <motion.a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: `var(--accent-color)` }}
                >
                  <BookOpen size={14} /> Read Paper <ExternalLink size={12} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
