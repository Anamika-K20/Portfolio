import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden relative"
      style={{ backgroundColor: `var(--bg-primary)` }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-20"
        style={{
          background: "var(--gradient-1)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 rounded-full opacity-20"
        style={{
          background: "var(--gradient-1)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl relative z-10"
      >
        {/* Left side - Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight leading-none"
          >
            <span
              className="block text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.3em] mb-3"
              style={{ color: `var(--text-tertiary)` }}
            >
              Hi! I am
            </span>
            <span
              className="block text-transparent bg-clip-text"
              style={{ backgroundImage: "var(--gradient-1)" }}
            >
              Anamika Kumari
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 leading-snug md:leading-relaxed"
            style={{ color: `var(--text-primary)` }}
          >
            Turning caffeine into scalable solutions.
          </motion.h2>

          {/* Personal Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl mb-8 font-semibold leading-relaxed"
            style={{ color: `var(--accent-tertiary)` }}
          >
            90% logic. 10% "why is this not compiling?"
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl mb-10 leading-relaxed md:leading-loose font-light"
            style={{ color: `var(--text-secondary)` }}
          >
            Engineering student focused on scalable systems, AI/ML, and building
            products that ship cleanly and reliably.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{
                y: -4,
                boxShadow: "0 14px 30px rgba(79, 70, 229, 0.35)",
              }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              style={{
                backgroundColor: "#4f46e5",
                color: "white",
                boxShadow: "0 10px 24px rgba(79, 70, 229, 0.25)",
              }}
            >
              View My Work <ArrowRight size={18} />
            </motion.a>
            <motion.button
              whileHover={{
                y: -2,
                backgroundColor: `var(--accent-light)`,
              }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full font-semibold transition-all"
              style={{
                borderColor: `var(--accent-color)`,
                color: `var(--accent-color)`,
                backgroundColor: "transparent",
                border: `2px solid var(--accent-color)`,
              }}
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* Tech Stack Marquee */}
          <motion.div variants={itemVariants} className="mt-2">
            <p
              className="text-sm font-semibold mb-3"
              style={{ color: `var(--text-tertiary)` }}
            >
              Tech Stack
            </p>
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <motion.div
                className="flex items-center gap-3 w-max"
                animate={{ x: [0, -600] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "Python",
                  "FastAPI",
                  "MongoDB",
                  "SQL",
                  "AI/ML",
                  "Framer Motion",
                  "Tailwind",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 rounded-full border text-sm font-semibold whitespace-nowrap"
                    style={{
                      backgroundColor: `var(--bg-secondary)`,
                      borderColor: `var(--border-color)`,
                      color: `var(--text-primary)`,
                    }}
                  >
                    {tech}
                  </div>
                ))}
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "Python",
                  "FastAPI",
                  "MongoDB",
                  "SQL",
                  "AI/ML",
                  "Framer Motion",
                  "Tailwind",
                ].map((tech) => (
                  <div
                    key={`${tech}-dup`}
                    className="px-4 py-2 rounded-full border text-sm font-semibold whitespace-nowrap"
                    style={{
                      backgroundColor: `var(--bg-secondary)`,
                      borderColor: `var(--border-color)`,
                      color: `var(--text-primary)`,
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right side - Profile Image */}
        <motion.div
          variants={scaleVariants}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Mesh gradient blobs */}
            <motion.div
              className="absolute -z-10 -top-10 -right-12 w-80 h-80 rounded-full blur-3xl opacity-30"
              style={{ background: "var(--gradient-1)" }}
              animate={{ scale: [1, 1.15, 1], rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -z-10 -bottom-12 -left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
              style={{ background: "var(--gradient-1)" }}
              animate={{ scale: [1.1, 1, 1.1], rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />

            <div
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2"
              style={{
                borderColor: "var(--accent-color)",
              }}
            >
              <motion.img
                src="/profile.jpg"
                alt="Anamika Kumari"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
