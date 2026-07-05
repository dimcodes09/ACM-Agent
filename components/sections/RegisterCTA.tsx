"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import { EVENT } from "@/data/event";

export default function RegisterCTA() {
  const reduce = useReducedMotion();
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Magnetic button pull logic
  function handleButtonMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduce || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const distance = Math.hypot(x, y);
    if (distance < 120) {
      // Pull button by 25% of cursor distance
      setCoords({ x: x * 0.25, y: y * 0.25 });
    } else {
      setCoords({ x: 0, y: 0 });
    }
  }

  function handleButtonMouseLeave() {
    setCoords({ x: 0, y: 0 });
  }

  return (
    <section
      id="register"
      className="relative overflow-hidden px-6 py-32 md:py-40 bg-gradient-to-b from-[#0e1015] to-[#08090c] border-t border-border"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/5 blur-[110px]" />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <Reveal>
          <span className="inline-block font-mono-ui text-[10px] uppercase tracking-[0.25em] text-signal font-semibold">
            REGISTRATION
          </span>
          <h2 className="mt-5 font-display text-5xl md:text-7xl font-black tracking-tight text-text uppercase leading-none">
            Reserve your spot.
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono-ui text-xs text-muted-custom tracking-wider uppercase">
            <Fact label="Dates" value={EVENT.dates} />
            <Fact label="Organizer" value={EVENT.organizer} />
            <Fact label="Format" value={EVENT.format} />
          </div>

          <div className="mt-12 flex justify-center">
            <motion.a
              ref={buttonRef}
              onMouseMove={handleButtonMouseMove}
              onMouseLeave={handleButtonMouseLeave}
              href="https://unstop.com/college-fests/agents-of-change-2026-acm-student-chapter-oist-483016"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ x: coords.x, y: coords.y }}
              transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.1 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--color-text)] px-9 py-4.5 font-bold text-[var(--color-base)] transition-shadow duration-300 hover:shadow-xl"
            >
              <span className="relative z-10 text-sm">Register Now</span>
              <span
                aria-hidden
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </motion.a>
          </div>
          <p className="mt-5 text-[9px] font-mono-ui tracking-widest text-faint-custom uppercase select-none">
            // Registration link routes to the official event form.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <span>
      <span className="text-faint-custom">{label}: </span>
      <span className="text-text">{value}</span>
    </span>
  );
}
