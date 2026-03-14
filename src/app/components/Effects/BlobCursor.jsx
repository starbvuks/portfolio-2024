"use client";
import { useEffect, useRef } from "react";
import { subscribe } from "../Hooks/useAnimationLoop";

// Inline simplex noise (2D)
const F2 = 0.5 * (Math.sqrt(3) - 1);
const G2 = (3 - Math.sqrt(3)) / 6;
const grad3 = [[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];
const perm = new Uint8Array(512);
const permMod8 = new Uint8Array(512);
(function () {
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) {
    perm[i] = p[i & 255];
    permMod8[i] = perm[i] % 8;
  }
})();
function noise2D(x, y) {
  const s = (x + y) * F2;
  const i = Math.floor(x + s), j = Math.floor(y + s);
  const t = (i + j) * G2;
  const X0 = i - t, Y0 = j - t;
  const x0 = x - X0, y0 = y - Y0;
  const i1 = x0 > y0 ? 1 : 0, j1 = x0 > y0 ? 0 : 1;
  const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
  const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
  const ii = i & 255, jj = j & 255;
  let n0 = 0, n1 = 0, n2 = 0;
  let t0 = 0.5 - x0 * x0 - y0 * y0;
  if (t0 >= 0) { t0 *= t0; const gi = permMod8[ii + perm[jj]]; n0 = t0 * t0 * (grad3[gi][0] * x0 + grad3[gi][1] * y0); }
  let t1 = 0.5 - x1 * x1 - y1 * y1;
  if (t1 >= 0) { t1 *= t1; const gi = permMod8[ii + i1 + perm[jj + j1]]; n1 = t1 * t1 * (grad3[gi][0] * x1 + grad3[gi][1] * y1); }
  let t2 = 0.5 - x2 * x2 - y2 * y2;
  if (t2 >= 0) { t2 *= t2; const gi = permMod8[ii + 1 + perm[jj + 1]]; n2 = t2 * t2 * (grad3[gi][0] * x2 + grad3[gi][1] * y2); }
  return 70 * (n0 + n1 + n2);
}

// Cursor config
const NUM_POINTS = 8;
const BASE_RADIUS = 14;
const HOVER_RADIUS = 22;
const LERP_SPEED = 0.18;
const NOISE_SPEED = 0.002;
const NOISE_AMP = 2;
const SPRING_STIFFNESS = 0.18;
const SPRING_DAMPING = 0.65;

export default function BlobCursor() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    mouseX: -100, mouseY: -100,
    blobX: -100, blobY: -100,
    prevBlobX: -100, prevBlobY: -100,
    isHovering: false,
    isPressed: false,
    radiusScale: 1,
    radiusVel: 0,
    targetRadiusScale: 1,
    visible: false,
    trail: [], // position history for line trail
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    resize();

    const ctx = canvas.getContext("2d");
    const s = stateRef.current;

    const pointOffsets = [];
    for (let i = 0; i < NUM_POINTS; i++) pointOffsets.push(i * 137.5);

    const onMove = (e) => {
      s.mouseX = e.clientX;
      s.mouseY = e.clientY;
      s.visible = true;
    };
    const onDown = () => {
      s.isPressed = true;
      s.targetRadiusScale = 0.55;
    };
    const onUp = () => {
      s.isPressed = false;
      s.targetRadiusScale = 1.3;
      setTimeout(() => { s.targetRadiusScale = 1; }, 120);
    };
    const onEnter = () => { s.visible = true; };
    const onLeave = () => { s.visible = false; };

    const interactiveSelector = "a, button, [role='button'], input, textarea, select";
    const onOver = (e) => { if (e.target.closest(interactiveSelector)) s.isHovering = true; };
    const onOut = (e) => { if (e.target.closest(interactiveSelector)) s.isHovering = false; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver, true);
    document.addEventListener("mouseout", onOut, true);
    window.addEventListener("resize", resize);

    const unsubscribe = subscribe(({ time }) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      if (!s.visible) return;

      // Lerp blob toward mouse
      s.prevBlobX = s.blobX;
      s.prevBlobY = s.blobY;
      s.blobX += (s.mouseX - s.blobX) * LERP_SPEED;
      s.blobY += (s.mouseY - s.blobY) * LERP_SPEED;

      // Spring radius
      const radiusAccel = (s.targetRadiusScale - s.radiusScale) * SPRING_STIFFNESS;
      s.radiusVel += radiusAccel;
      s.radiusVel *= SPRING_DAMPING;
      s.radiusScale += s.radiusVel;

      const vx = s.blobX - s.prevBlobX;
      const vy = s.blobY - s.prevBlobY;
      const speed = Math.hypot(vx, vy);
      const moveAngle = Math.atan2(vy, vx);

      // Update trail — record blob positions
      const trail = s.trail;
      const lastT = trail[0];
      if (!lastT || Math.hypot(s.blobX - lastT.x, s.blobY - lastT.y) > 2) {
        trail.unshift({ x: s.blobX, y: s.blobY });
        if (trail.length > 50) trail.length = 50;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // --- Line trail (thin fading stroke) ---
      if (trail.length > 2 && speed > 0.5) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (let i = 0; i < trail.length - 1; i++) {
          const life = 1 - i / trail.length;
          const alpha = life * life * life * 0.25;
          const width = life * 0.8;
          if (alpha < 0.005) break;
          ctx.beginPath();
          ctx.moveTo(trail[i].x, trail[i].y);
          ctx.lineTo(trail[i + 1].x, trail[i + 1].y);
          ctx.strokeStyle = `rgba(139, 205, 0, ${alpha})`;
          ctx.lineWidth = width;
          ctx.stroke();
        }
      }

      // --- Wavy blob ring ---
      const baseR = s.isHovering ? HOVER_RADIUS : BASE_RADIUS;
      const r = baseR * s.radiusScale;

      const points = [];
      for (let i = 0; i < NUM_POINTS; i++) {
        const a = (i / NUM_POINTS) * Math.PI * 2;
        const noiseVal = noise2D(pointOffsets[i], time * NOISE_SPEED);
        const wobble = noiseVal * NOISE_AMP;
        const angleDiff = a - moveAngle;
        const stretchFactor = 1 + Math.cos(angleDiff) * Math.min(speed * 0.03, 0.25);
        const compressFactor = 1 - Math.abs(Math.sin(angleDiff)) * Math.min(speed * 0.01, 0.08);
        const pointR = (r + wobble) * stretchFactor * compressFactor;
        points.push({
          x: s.blobX + Math.cos(a) * pointR,
          y: s.blobY + Math.sin(a) * pointR,
        });
      }

      ctx.beginPath();
      const first = points[0];
      const last = points[points.length - 1];
      ctx.moveTo((last.x + first.x) / 2, (last.y + first.y) / 2);
      for (let i = 0; i < points.length; i++) {
        const curr = points[i];
        const next = points[(i + 1) % points.length];
        ctx.quadraticCurveTo(curr.x, curr.y, (curr.x + next.x) / 2, (curr.y + next.y) / 2);
      }
      ctx.closePath();
      ctx.strokeStyle = "#8BCD00";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // --- Center dot ---
      ctx.beginPath();
      ctx.arc(s.mouseX, s.mouseY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#8BCD00";
      ctx.fill();

      ctx.restore();
    });

    return () => {
      unsubscribe();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("mouseout", onOut, true);
      window.removeEventListener("resize", resize);
    };
  }, []);

  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        pointerEvents: "none",
        mixBlendMode: "difference",
        willChange: "transform",
      }}
    />
  );
}
