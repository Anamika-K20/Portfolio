import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

/* ── Particle canvas ─────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => { mouse.current = { x: e.clientX, y: e.clientY }; });

    const COUNT = 40;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.6,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) { p.vx += (dx / dist) * 0.2; p.vy += (dy / dist) * 0.2; }
        p.vx *= 0.98; p.vy *= 0.98;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
      });
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(192,132,252,${0.12 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(232,146,124,0.35)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.4 }} />;
}

/* ── Cycling tagline with scramble ──────────────────────── */
const TAGLINES = [
  "ML Engineer & Software Developer.",
  "Building models that ship to prod.",
  "RAG · LLMs · React · FastAPI · CV.",
  "90% logic. 10% why won't this converge.",
];

function useScramble(target: string) {
  const [text, setText] = useState(target);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*";
  useEffect(() => {
    let frame = 0;
    const total = 20;
    const id = setInterval(() => {
      setText(target.split("").map((ch, i) => ch === " " ? " " : frame / total > i / target.length ? ch : chars[Math.floor(Math.random() * chars.length)]).join(""));
      frame++;
      if (frame > total) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [target]);
  return text;
}

function CyclingTagline() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % TAGLINES.length), 3200);
    return () => clearInterval(id);
  }, []);
  const text = useScramble(TAGLINES[idx]);
  return (
    <AnimatePresence mode="wait">
      <motion.p key={idx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }}
        style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(0.6rem, 1.1vw, 0.78rem)", color: "var(--accent-color)", letterSpacing: "0.06em", minHeight: "1.4em" }}>
        {text}
      </motion.p>
    </AnimatePresence>
  );
}

/* ── Ambient orbs ────────────────────────────────────────── */
function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[
        { w: 500, h: 500, top: "-10%", left: "-5%", color: "var(--accent-secondary)", dur: 12, delay: 0 },
        { w: 400, h: 400, bottom: "-5%", right: "-5%", color: "var(--accent-color)", dur: 10, delay: 2 },
        { w: 300, h: 300, top: "40%", right: "20%", color: "var(--accent-gold)", dur: 14, delay: 4 },
      ].map((o, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{ width: o.w, height: o.h, top: (o as any).top, bottom: (o as any).bottom, left: (o as any).left, right: (o as any).right, background: o.color, filter: "blur(110px)", opacity: 0.05 }}
          animate={{ scale: [1, 1.12, 1], x: [0, 20, 0], y: [0, -12, 0] }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut", delay: o.delay }}
        />
      ))}
    </div>
  );
}

/* ── Trait pills (static, below photo) ──────────────────── */
const TRAITS = [
  { label: "ML Engineer", color: "var(--accent-color)" },
  { label: "Software Developer", color: "var(--accent-secondary)" },
  { label: "Researcher", color: "var(--accent-tertiary)" },
];

/* ── Home ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
      <ParticleCanvas />
      <FloatingOrbs />
      <Navbar />

      <section className="relative min-h-screen">
        <div className="flex flex-col lg:flex-row min-h-screen pt-16">

          {/* LEFT — photo */}
          <motion.div
            className="relative lg:w-[46%] flex-shrink-0 flex items-center justify-center"
            style={{ minHeight: "50vh" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Right fade */}
            <div className="absolute inset-y-0 right-0 w-24 z-10 hidden lg:block"
              style={{ background: "linear-gradient(to right, transparent, var(--bg-primary))" }} />

            <div className="relative py-20 lg:py-0 flex flex-col items-center gap-5">
              {/* Photo */}
              <div style={{ position: "relative", width: "clamp(220px, 24vw, 300px)", height: "clamp(280px, 32vw, 400px)" }}>
                {/* Glow */}
                <div style={{ position: "absolute", inset: 0, borderRadius: "12px", background: "var(--gradient-1)", filter: "blur(50px)", opacity: 0.15, transform: "scale(0.9) translateY(16px)", zIndex: -1 }} />

                {/* Corner brackets */}
                {[
                  { cls: "-top-2.5 -left-2.5 border-t-2 border-l-2", color: "var(--accent-color)" },
                  { cls: "-top-2.5 -right-2.5 border-t-2 border-r-2", color: "var(--accent-secondary)" },
                  { cls: "-bottom-2.5 -left-2.5 border-b-2 border-l-2", color: "var(--accent-secondary)" },
                  { cls: "-bottom-2.5 -right-2.5 border-b-2 border-r-2", color: "var(--accent-color)" },
                ].map((b, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.2 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.08, type: "spring", bounce: 0.5 }}
                    className={`absolute w-6 h-6 ${b.cls}`} style={{ borderColor: b.color }} />
                ))}

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: "100%", height: "100%", borderRadius: "10px", overflow: "hidden", border: "1px solid var(--border-color)" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="/profile.png"
                    alt="Anamika Kumari"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                  />
                </motion.div>
              </div>

              {/* Trait pills below photo */}
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}
                style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
                {TRAITS.map((t) => (
                  <span key={t.label} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.12em", color: t.color, backgroundColor: t.color + "14", border: `1px solid ${t.color}33`, borderRadius: "999px", padding: "4px 12px" }}>
                    {t.label}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Vertical divider */}
          <motion.div
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-16 bottom-0 hidden lg:block"
            style={{ left: "46%", width: "1px", background: "linear-gradient(to bottom, transparent, var(--border-color) 20%, var(--border-color) 80%, transparent)", transformOrigin: "top", zIndex: 5 }}
          />

          {/* RIGHT — text */}
          <motion.div
            className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-16 pb-16 lg:pb-0 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(0.55rem, 1vw, 0.7rem)", letterSpacing: "0.3em", color: "var(--text-tertiary)", textTransform: "uppercase", marginBottom: "1.2rem" }}>
            ✦ &nbsp; Hi, I am
            </motion.p>

            {/* Name */}
            <div style={{ lineHeight: 0.92, marginBottom: "0.1em" }}>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(3.8rem, 9vw, 8rem)", letterSpacing: "-0.02em", background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Anamika
              </motion.h1>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(3.8rem, 9vw, 8rem)", letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
                Kumari
              </motion.h1>
            </div>

            {/* Animated line */}
            <div className="relative my-6 h-px w-36 origin-left">
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0" style={{ background: "var(--gradient-1)" }} />
              <motion.div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent-color)" }}
                animate={{ x: [0, 136, 0] }} transition={{ delay: 1.8, duration: 2.8, repeat: Infinity, ease: "easeInOut" }} />
            </div>

            {/* Cycling tagline */}
            <CyclingTagline />

            {/* Bio */}
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.7 }}
              className="mt-5 max-w-sm leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 1.4vw, 1.1rem)", fontStyle: "italic", color: "var(--text-secondary)" }}>
              I build ML systems and ship software. Final-year ECE (AI) at
              IGDTUW — from React frontends to FastAPI backends to RAG
              pipelines, and asking "why is the loss still going up" at 2am.
            </motion.p>

            {/* Status badge */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, type: "spring" }}
              className="mt-7 inline-flex items-center gap-3 px-4 py-3 border self-start"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-color)", borderRadius: "8px", boxShadow: "var(--shadow-card)" }}>
              <motion.div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#4ade80" }}
                animate={{ opacity: [1, 0.2, 1], scale: [1, 1.4, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
              <div>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.46rem", letterSpacing: "0.18em", color: "var(--accent-color)", textTransform: "uppercase", marginBottom: "2px" }}>Currently</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.88rem", color: "var(--text-primary)", fontStyle: "italic" }}>Building &amp; shipping</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 py-8 text-center border-t" style={{ borderColor: "var(--border-color)" }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--text-tertiary)", textTransform: "uppercase" }}>
          © 2026 Anamika Kumari
        </p>
      </footer>
    </div>
  );
}
