import { motion } from "framer-motion";

export const AnimatedLogo = () => {
  const blinkVariants = {
    blink: {
      scaleY: [1, 0.1, 1],
      transition: { duration: 0.4, repeat: Infinity, repeatDelay: 3 },
    },
  };

  const headBobVariants = {
    bob: {
      y: [0, -3, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const waveVariants = {
    wave: {
      rotate: [0, -20, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      transformOrigin: "right center",
    },
  };

  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cute Girl Character */}
      <motion.div
        variants={headBobVariants}
        animate="bob"
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <svg
          width="45"
          height="50"
          viewBox="0 0 45 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="skinGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FDBCB4" />
              <stop offset="100%" stopColor="#F8A39C" />
            </linearGradient>
            <linearGradient
              id="hairGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="100%" stopColor="#6B3410" />
            </linearGradient>
          </defs>

          {/* Hair - long wavy hair */}
          <path
            d="M 10 12 Q 8 18 8 24 Q 8 28 10 32 L 35 32 Q 37 28 37 24 Q 37 18 35 12 Q 25 8 22.5 8 Q 20 8 10 12 Z"
            fill="url(#hairGradient)"
          />

          {/* Hair highlights */}
          <path
            d="M 12 10 Q 15 8 18 8 L 16 20 Q 14 16 12 10 Z"
            fill="#A0522D"
            opacity="0.6"
          />

          {/* Head */}
          <circle cx="22.5" cy="20" r="12" fill="url(#skinGradient)" />

          {/* Left eye */}
          <g>
            <ellipse cx="16" cy="17" rx="3.5" ry="4.5" fill="white" />
            <motion.circle
              cx="16"
              cy="18.5"
              r="2"
              fill="#4f46e5"
              variants={blinkVariants}
              animate="blink"
            />
            {/* Eye shine */}
            <circle cx="16.5" cy="17.2" r="0.8" fill="white" opacity="0.8" />
          </g>

          {/* Right eye */}
          <g>
            <ellipse cx="29" cy="17" rx="3.5" ry="4.5" fill="white" />
            <motion.circle
              cx="29"
              cy="18.5"
              r="2"
              fill="#4f46e5"
              variants={blinkVariants}
              animate="blink"
            />
            {/* Eye shine */}
            <circle cx="29.5" cy="17.2" r="0.8" fill="white" opacity="0.8" />
          </g>

          {/* Nose */}
          <path d="M 22.5 19 L 21.5 22 L 23.5 22 Z" fill="#F0A9A0" />

          {/* Cute smile */}
          <path
            d="M 18 24 Q 22.5 27 27 24"
            stroke="#D4726A"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Rosy cheeks */}
          <circle cx="12" cy="21" r="1.8" fill="#FF8FAB" opacity="0.5" />
          <circle cx="33" cy="21" r="1.8" fill="#FF8FAB" opacity="0.5" />

          {/* Body - simple cute dress */}
          <path
            d="M 14 32 L 12 40 Q 12 42 14 42 L 31 42 Q 33 42 33 40 L 31 32 Z"
            fill="#06b6d4"
            opacity="0.9"
          />

          {/* Dress accent */}
          <circle cx="22.5" cy="35" r="2.5" fill="#10b981" opacity="0.6" />

          {/* Left arm - waving */}
          <motion.g
            variants={waveVariants}
            animate="wave"
            initial={{ rotate: 0 }}
          >
            {/* Arm */}
            <path
              d="M 14 33 L 8 30"
              stroke="#FDBCB4"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Hand */}
            <circle cx="7" cy="29" r="2" fill="#FDBCB4" />
          </motion.g>

          {/* Right arm - down */}
          <path
            d="M 31 33 L 37 35"
            stroke="#FDBCB4"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="37.5" cy="35.5" r="2" fill="#FDBCB4" />
        </svg>
      </motion.div>
    </motion.div>
  );
};
