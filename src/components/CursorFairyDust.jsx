
import { useEffect, useRef } from "react";
import "./CursorFairyDust.css";

export default function CursorFairyDust() {
  const containerRef = useRef(null);

  useEffect(() => {
    const motion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const pointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (motion.matches || !pointer.matches) return;

    const container = containerRef.current;
    if (!container) return;

    const particles = [];
    const maxParticles = 16;
    let lastEmission = 0;

    function emit(event) {
      const now = performance.now();

      // Limit particle generation.
      if (now - lastEmission < 35) return;
      lastEmission = now;

      const particle = document.createElement("span");
      particle.className = "cursor-fairy-dust";

      const size = 2 + Math.random() * 4;
      const driftX = (Math.random() - .5) * 70;
      const driftY = -20 - Math.random() * 65;

      particle.style.left = `${event.clientX}px`;
      particle.style.top = `${event.clientY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.setProperty("--drift-x", `${driftX}px`);
      particle.style.setProperty("--drift-y", `${driftY}px`);

      container.appendChild(particle);
      particles.push(particle);

      if (particles.length > maxParticles) {
        particles.shift()?.remove();
      }

      particle.addEventListener(
        "animationend",
        () => {
          particle.remove();
          const index = particles.indexOf(particle);
          if (index !== -1) particles.splice(index, 1);
        },
        { once: true }
      );
    }

    window.addEventListener("pointermove", emit, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", emit);
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="cursor-fairy-dust-layer"
      aria-hidden="true"
    />
  );
}
