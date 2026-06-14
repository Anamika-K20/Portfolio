import { useRef, useState, useCallback } from "react";

interface TiltStyle {
  transform: string;
  transition: string;
}

export function use3DTilt(intensity = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<TiltStyle>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
    transition: "transform 0.15s ease-out",
  });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setStyle({
        transform: `perspective(1000px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) scale(1.02)`,
        transition: "transform 0.1s ease-out",
      });
    },
    [intensity]
  );

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.4s ease-out",
    });
  }, []);

  return { ref, style, onMouseMove, onMouseLeave };
}
