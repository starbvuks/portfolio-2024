"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../Hooks/useTheme";
import { subscribe } from "../Hooks/useAnimationLoop";

// Sparse floating dots with cursor lines
const PARTICLE_COUNT = 28;
const CURSOR_DIST = 200;

// Pulsating lights config — deterministic to avoid hydration mismatch
const LIGHTS = [
  { x: 18, y: 25, size: 180, phase: 0,    speed: 0.18 },
  { x: 72, y: 15, size: 250, phase: 1.8,  speed: 0.25 },
  { x: 45, y: 65, size: 210, phase: 3.5,  speed: 0.2  },
  { x: 85, y: 50, size: 280, phase: 5.0,  speed: 0.35 },
  { x: 30, y: 80, size: 220, phase: 2.2,  speed: 0.15 },
];

function createParticles(w, h) {
  const particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: 0.6 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2,
    });
  }
  return particles;
}

// Component for the CSS-based pulsating lights
function PulsatingLights({ darkMode }) {
  const [opacities, setOpacities] = useState(() => LIGHTS.map(() => 0));
  const rafRef = useRef(null);

  useEffect(() => {
    if (!darkMode) {
      setOpacities(LIGHTS.map(() => 0));
      return;
    }
    let running = true;
    const tick = () => {
      if (!running) return;
      const t = performance.now() * 0.001;
      setOpacities(LIGHTS.map((l) => {
        const breath = Math.sin(t * l.speed + l.phase);
        return Math.max(0, breath) * 0.07;
      }));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { running = false; cancelAnimationFrame(rafRef.current); };
  }, [darkMode]);

  if (!darkMode) return null;

  return (
    <>
      {LIGHTS.map((l, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${l.x}%`,
            top: `${l.y}%`,
            width: l.size,
            height: l.size,
            transform: "translate(-50%, -50%)",
            background: "rgba(210, 212, 225, 0.6)",
            filter: `blur(${l.size * 0.6}px)`,
            opacity: opacities[i],
            willChange: "opacity",
            transition: "opacity 0.3s linear",
          }}
        />
      ))}
    </>
  );
}

export default function MeshBackground() {
  const { darkMode } = useTheme();
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef(null);
  const darkModeRef = useRef(darkMode);
  darkModeRef.current = darkMode;

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      particlesRef.current = createParticles(window.innerWidth, window.innerHeight);
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d");

    const unsubscribe = subscribe(({ time }) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const particles = particlesRef.current;
      if (!particles) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const dark = darkModeRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const t = time * 0.001;

      // --- Floating dots ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < CURSOR_DIST && dist > 0) {
          const force = (1 - dist / CURSOR_DIST) * 0.4;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        const pulse = 0.5 + 0.5 * Math.sin(t * 0.8 + p.phase);
        const baseAlpha = dark ? 0.12 : 0.06;
        const alpha = baseAlpha + pulse * (dark ? 0.08 : 0.04);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? `rgba(184, 192, 220, ${alpha})`
          : `rgba(80, 80, 80, ${alpha})`;
        ctx.fill();
      }

      // --- Thin lines from cursor to nearby dots ---
      if (mx > -500) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dist = Math.hypot(p.x - mx, p.y - my);
          if (dist < CURSOR_DIST) {
            const ratio = 1 - dist / CURSOR_DIST;
            const alpha = ratio * ratio * (dark ? 0.1 : 0.05);
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = dark
              ? `rgba(184, 192, 220, ${alpha})`
              : `rgba(100, 100, 100, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      ctx.restore();
    });

    return () => {
      unsubscribe();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden
    >
      {/* CSS blur lights — no banding artifacts */}
      <PulsatingLights darkMode={darkMode} />
      {/* Canvas for dots + cursor lines */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
