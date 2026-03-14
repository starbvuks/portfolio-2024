// Singleton rAF loop — all animations subscribe here instead of running their own loops
const subscribers = new Set();
let rafId = null;
let lastTime = 0;

function tick(time) {
  const dt = lastTime ? time - lastTime : 16;
  lastTime = time;
  subscribers.forEach((cb) => cb({ time, deltaTime: dt }));
  if (subscribers.size > 0) {
    rafId = requestAnimationFrame(tick);
  } else {
    rafId = null;
  }
}

export function subscribe(callback) {
  subscribers.add(callback);
  if (rafId === null) {
    lastTime = 0;
    rafId = requestAnimationFrame(tick);
  }
  return () => {
    subscribers.delete(callback);
    if (subscribers.size === 0 && rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };
}
