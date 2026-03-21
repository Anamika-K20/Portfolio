import { motion } from "framer-motion";
import { PageLayout } from "../components/PageLayout";

const skillCategories = [
  {
    title: "Programming Languages",
    emoji: "💻",
    skills: [
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "#00A4EF" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00568C" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#336791" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34C26" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#563D7C" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    emoji: "🧩",
    skills: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", color: "#DD0031" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#68A063" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#888888" },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", color: "#009688" },
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "#7952B3" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#38BDF8" },
    ],
  },
  {
    title: "Databases & Tools",
    emoji: "🗄️",
    skills: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#13AA52" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#336791" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#888888" },
    ],
  },
  {
    title: "AI / ML",
    emoji: "🤖",
    skills: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", color: "#FF6F00" },
      { name: "FAISS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/meta.svg", color: "#4F46E5" },
      { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", color: "#F7931E" },
      { name: "Google Colab", logo: "https://colab.research.google.com/favicon.ico", color: "#F9AB00" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: `var(--accent-color)` }}>
            WHAT I WORK WITH
          </p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: `var(--accent-color)` }}>
            Skills
          </h1>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: `var(--text-primary)` }}>
                <span>{cat.emoji}</span> {cat.title}
              </h2>
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.12, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border cursor-pointer relative overflow-hidden group"
                    style={{
                      backgroundColor: `var(--bg-secondary)`,
                      borderColor: `${skill.color}30`,
                      minWidth: "80px",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `radial-gradient(circle, ${skill.color}25 0%, transparent 70%)` }}
                    />
                    <div className="w-10 h-10 flex items-center justify-center relative z-10">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        style={{ filter: `drop-shadow(0 0 6px ${skill.color}60)` }}
                      />
                    </div>
                    <p className="text-xs font-bold text-center relative z-10" style={{ color: skill.color }}>
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
