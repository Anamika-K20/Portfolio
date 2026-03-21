import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SPELLS = [
  { name: "Lumos", color: "#ffd700", glyph: "✦", variant: "burst" },
  { name: "Expecto Patronum", color: "#67e8f9", glyph: "✧", variant: "burst" },
  { name: "Nox", color: "#c084fc", glyph: "☽", variant: "nox" },
  { name: "Accio", color: "#e8927c", glyph: "◈", variant: "burst" },
  { name: "Wingardium Leviosa", color: "#a3e635", glyph: "⬡", variant: "burst" },
];

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  color: string;
  size: number;
}

export function SpellTransition() {
  const location = useLocation();
  const [casting, setCasting] = useState(false);
  const [spell, setSpell] = useState(SPELLS[0]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const s = SPELLS[Math.floor(Math.random() * SPELLS.length)];
    setSpell(s);
    setCasting(true);
    setKey(k => k + 1);

    const count = 40;
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: 50,
        y: 50,
        angle: (i / count) * 360,
        speed: 15 + Math.random() * 25,
        color: [s.color, "#ffd700", "#fff", "#c084fc"][Math.floor(Math.random() * 4)],
        size: Math.random() * 6 + 3,
      }))
    );

    const t = setTimeout(() => setCasting(false), 1200);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {casting && (
        <motion.div
          key={key}
          className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Dark vignette flash */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "#000" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.35, 0] }}
            transition={{ duration: 0.8, times: [0, 0.3, 1] }}
          />

          {/* NOX — darkness iris that opens then closes */}
          {spell.variant === "nox" && (
            <>
              {/* Expanding dark iris */}
              <motion.div
                className="absolute rounded-full"
                style={{ background: "radial-gradient(circle, #0a0a0f 40%, transparent 70%)" }}
                initial={{ width: 0, height: 0, opacity: 0.95 }}
                animate={{ width: "300vw", height: "300vw", opacity: [0.95, 0.95, 0] }}
                transition={{ duration: 1.0, times: [0, 0.6, 1], ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Purple star-ring orbiting the spell name */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: 6, height: 6,
                    backgroundColor: spell.color,
                    boxShadow: `0 0 12px ${spell.color}`,
                  }}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  animate={{
                    x: Math.cos((deg * Math.PI) / 180) * 90,
                    y: Math.sin((deg * Math.PI) / 180) * 90,
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.4, 1, 0],
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 1.1, delay: i * 0.04, ease: "easeOut" }}
                />
              ))}
            </>
          )}

          {/* STANDARD — radial burst */}
          {spell.variant !== "nox" && (
            <motion.div
              className="absolute rounded-full"
              style={{ background: `radial-gradient(circle, ${spell.color}88 0%, transparent 70%)` }}
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{ width: "200vw", height: "200vw", opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          )}

          {/* Spell name */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.2, 1], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.0, times: [0, 0.3, 0.6, 1] }}
          >
            <motion.p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 6vw, 4rem)",
                fontWeight: 700,
                fontStyle: "italic",
                color: spell.color,
                textShadow: `0 0 40px ${spell.color}, 0 0 80px ${spell.color}88`,
                letterSpacing: "0.1em",
              }}
            >
              {spell.name}
            </motion.p>
            <motion.p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "1.5rem",
                color: "#fff",
                opacity: 0.6,
                marginTop: "4px",
              }}
              animate={spell.variant === "nox"
                ? { scale: [0, 1.6, 1, 0], opacity: [0, 1, 1, 0] }
                : { rotate: [0, 360] }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {spell.glyph}
            </motion.p>
          </motion.div>

          {/* Burst particles — only for non-nox */}
          {spell.variant !== "nox" && particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                left: `${p.x}%`,
                top: `${p.y}%`,
                boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: Math.cos((p.angle * Math.PI) / 180) * (p.speed * 20),
                y: Math.sin((p.angle * Math.PI) / 180) * (p.speed * 20),
                opacity: 0,
                scale: 0,
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
          ))}

          {/* Horizontal sweep lines */}
          {[20, 40, 60, 80].map((pct, i) => (
            <motion.div
              key={i}
              className="absolute w-full"
              style={{ top: `${pct}%`, height: "1px", background: `linear-gradient(90deg, transparent, ${spell.color}, transparent)` }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
