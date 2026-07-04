"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Ambient mesh lighting with slow drifting glow spheres */
export function MeshGlow({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute inset-0 -z-20 overflow-hidden opacity-30 ${className}`}>
      {/* Glow Sphere 1 */}
      <motion.div
        className="absolute -left-[10%] -top-[10%] h-[60vw] w-[60vw] max-w-[700px] rounded-full bg-[var(--color-signal)]/15 blur-[120px]"
        animate={
          reduce
            ? {}
            : {
                x: [0, 40, -20, 0],
                y: [0, -30, 40, 0],
                scale: [1, 1.1, 0.95, 1],
              }
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Glow Sphere 2 */}
      <motion.div
        className="absolute -right-[10%] top-[20%] h-[50vw] w-[50vw] max-w-[600px] rounded-full bg-[var(--color-active)]/10 blur-[130px]"
        animate={
          reduce
            ? {}
            : {
                x: [0, -50, 30, 0],
                y: [0, 40, -30, 0],
                scale: [1, 0.9, 1.05, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      {/* Glow Sphere 3 */}
      <motion.div
        className="absolute bottom-[-10%] left-[20%] h-[55vw] w-[55vw] max-w-[650px] rounded-full bg-signal/10 blur-[140px]"
        animate={
          reduce
            ? {}
            : {
                x: [0, 30, -40, 0],
                y: [0, -50, 20, 0],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
}

/** Tech-inspired Blueprint Grid pattern with coordinates */
export function AnimatedBlueprintGrid({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute inset-0 -z-30 overflow-hidden ${className}`}>
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="blueprint-grid-pattern"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="var(--color-text)"
              strokeWidth="0.8"
            />
            <circle cx="0" cy="0" r="1.5" fill="var(--color-signal)" />
            <circle cx="64" cy="0" r="1.5" fill="var(--color-signal)" />
            <circle cx="0" cy="64" r="1.5" fill="var(--color-signal)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid-pattern)" />
      </svg>
      {/* Slow moving scan line */}
      {!reduce && (
        <motion.div
          className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-signal)]/20 to-transparent"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
}

/** Slow moving low-opacity floating particle field */
export function FloatingParticles({ count = 20, className = "" }: { count?: number; className?: string }) {
  const reduce = useReducedMotion();
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate stable coordinates on client side to avoid SSR mismatch
    const pts = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 15 + 10,
    }));
    setParticles(pts);
  }, [count]);

  if (reduce || particles.length === 0) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-30 ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[var(--color-signal)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-20, -120],
            x: [0, Math.random() * 30 - 15],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/** Concentric rotating orbital system representation */
export function OrbitalBackground({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute left-1/2 top-1/2 -z-20 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] ${className}`}>
      <svg width="800" height="800" viewBox="0 0 800 800" className="w-full h-full animate-[spin_120s_linear_infinite]">
        {/* Outer Ring */}
        <circle
          cx="400"
          cy="400"
          r="340"
          fill="none"
          stroke="var(--color-text)"
          strokeWidth="0.8"
          strokeDasharray="4 12"
        />
        {/* Mid Ring */}
        <circle
          cx="400"
          cy="400"
          r="240"
          fill="none"
          stroke="var(--color-text)"
          strokeWidth="0.8"
          strokeDasharray="2 8"
        />
        {/* Inner Ring */}
        <circle
          cx="400"
          cy="400"
          r="140"
          fill="none"
          stroke="var(--color-text)"
          strokeWidth="0.8"
          strokeDasharray="8 6"
        />
        {/* Connection rays */}
        <line x1="400" y1="60" x2="400" y2="740" stroke="var(--color-text)" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="60" y1="400" x2="740" y2="400" stroke="var(--color-text)" strokeWidth="0.5" strokeOpacity="0.5" />
      </svg>
    </div>
  );
}
