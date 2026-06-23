import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  phase: number;
};

function getThemeColors() {
  const isDark = document.documentElement.classList.contains("dark");
  return {
    dot: isDark ? "oklch(0.65 0.012 70 / 0.45)" : "oklch(0.42 0.025 55 / 0.62)",
    line: isDark ? "oklch(0.68 0.13 40)" : "oklch(0.52 0.14 38)",
    lineOpacity: isDark ? 0.14 : 0.22,
    glow: isDark ? "oklch(0.68 0.13 40 / 0.08)" : "oklch(0.52 0.14 38 / 0.12)",
  };
}

function createParticles(width: number, height: number) {
  const count = Math.min(Math.max(Math.floor((width * height) / 12000), 55), 130);
  return Array.from({ length: count }, () => {
    const x = Math.random() * width;
    const y = Math.random() * height;
    return {
      x,
      y,
      originX: x,
      originY: y,
      vx: 0,
      vy: 0,
      phase: Math.random() * Math.PI * 2,
    } satisfies Particle;
  });
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    let raf = 0;

    const setPointer = (x: number, y: number, active: boolean) => {
      mouseRef.current = { x, y, active };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particlesRef.current = createParticles(width, height);
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const colors = getThemeColors();
      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const reduced = reducedMotionRef.current;

      ctx.clearRect(0, 0, width, height);

      if (mouse.active && !reduced) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          220,
        );
        gradient.addColorStop(0, colors.glow);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      for (const particle of particles) {
        if (!reduced) {
          particle.originX += Math.sin(frame * 0.004 + particle.phase) * 0.08;
          particle.originY += Math.cos(frame * 0.003 + particle.phase) * 0.08;

          if (mouse.active) {
            const dx = particle.x - mouse.x;
            const dy = particle.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            const radius = 170;
            if (dist > 0 && dist < radius) {
              const force = (1 - dist / radius) ** 2 * 2.8;
              particle.vx += (dx / dist) * force;
              particle.vy += (dy / dist) * force;
            }
          }
        }

        particle.vx += (particle.originX - particle.x) * 0.035;
        particle.vy += (particle.originY - particle.y) * 0.035;
        particle.vx *= 0.84;
        particle.vy *= 0.84;
        particle.x += particle.vx;
        particle.y += particle.vy;
      }

      const linkDistance = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist >= linkDistance) continue;

          let alpha = (1 - dist / linkDistance) * colors.lineOpacity;
          if (mouse.active && !reduced) {
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mouseDist = Math.hypot(midX - mouse.x, midY - mouse.y);
            if (mouseDist < 180) {
              alpha += (1 - mouseDist / 180) * 0.12;
            }
          }

          ctx.strokeStyle = colors.line;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const particle of particles) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = colors.dot;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.25, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      frame += 1;
      raf = requestAnimationFrame(draw);
    };

    const onMouseMove = (event: MouseEvent) => {
      setPointer(event.clientX, event.clientY, true);
    };
    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      setPointer(touch.clientX, touch.clientY, true);
    };
    const onPointerLeave = () => setPointer(-1000, -1000, false);

    resize();
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mouseleave", onPointerLeave);
    window.addEventListener("touchend", onPointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("touchend", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
}
