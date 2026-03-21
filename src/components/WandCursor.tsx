import { useEffect, useState, useRef } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
}

const SPELL_COLORS = ["#ffd700", "#c084fc", "#e8927c", "#67e8f9", "#fff"];

export function WandCursor() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const prevPos = useRef({ x: 0, y: 0 });
  const sparkId = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - prevPos.current.x;
      const dy = e.clientY - prevPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 4) {
        const count = Math.min(Math.floor(speed / 3), 6);
        setSparks(prev => [
          ...prev.slice(-60),
          ...Array.from({ length: count }, () => ({
            id: sparkId.current++,
            x: e.clientX,
            y: e.clientY,
            vx: (Math.random() - 0.5) * 4 + dx * 0.15,
            vy: (Math.random() - 0.5) * 4 + dy * 0.15,
            life: 1,
            color: SPELL_COLORS[Math.floor(Math.random() * SPELL_COLORS.length)],
            size: Math.random() * 4 + 2,
          })),
        ]);
      }
      prevPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Animate sparks on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setSparks(prev => {
        const next = prev
          .map(s => ({ ...s, x: s.x + s.vx, y: s.y + s.vy, vy: s.vy + 0.12, life: s.life - 0.035 }))
          .filter(s => s.life > 0);

        next.forEach(s => {
          ctx.save();
          ctx.globalAlpha = s.life * 0.9;
          ctx.shadowBlur = 12;
          ctx.shadowColor = s.color;
          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#fff";
          ctx.globalAlpha = s.life * 0.5;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * s.life * 0.3, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });

        return next;
      });
      raf = requestAnimationFrame(tick);
    };
    tick();

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[60]" />
  );
}
