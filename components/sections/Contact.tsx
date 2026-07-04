"use client";

import Reveal from "@/components/ui/Reveal";
import { CONTACT } from "@/data/event";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28 md:py-36 bg-[#0e1015] border-t border-border">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:items-center">
          
          {/* Left Column: Contact details */}
          <Reveal>
            <span className="inline-block font-mono-ui text-[10px] uppercase tracking-[0.25em] text-signal font-semibold">
              09 — CONTACT & LOCATION
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl font-black tracking-tight text-text uppercase leading-none">
              {CONTACT.organizer}
            </h2>
            <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed text-text-muted font-light">
              For questions about the bootcamp, team buildathon, or registration procedures,
              reach out to the OIST ACM-W Student Chapter.
            </p>
            
            {/* Tech-inspired coordinate facts */}
            <div className="mt-10 space-y-4 border-t border-border pt-8 max-w-sm">
              <div className="flex justify-between text-xs font-mono-ui">
                <span className="text-text-faint uppercase">CAMPUS</span>
                <span className="font-semibold text-text-muted">OIST Campus, Bhopal</span>
              </div>
              <div className="flex justify-between text-xs font-mono-ui">
                <span className="text-text-faint uppercase">CHAPTER</span>
                <span className="font-semibold text-text-muted">ACM-W Student Chapter</span>
              </div>
              <div className="flex justify-between text-xs font-mono-ui">
                <span className="text-text-faint uppercase">REGION</span>
                <span className="font-semibold text-text-muted">Madhya Pradesh, India</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Abstract Campus Positioning Map (Blueprint Style) */}
          <Reveal delay={0.05}>
            <div className="relative aspect-[4/3] w-full rounded-2xl border border-border bg-surface/40 p-4 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              <CampusPositioningMap />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CampusPositioningMap() {
  return (
    <svg
      viewBox="0 0 320 240"
      className="w-full h-full relative z-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="contact-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path
            d="M 16 0 L 0 0 0 16"
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="0.4"
          />
        </pattern>
      </defs>

      {/* Grid Backplane */}
      <rect width="320" height="240" fill="url(#contact-grid)" />
      
      {/* Coordinate lines axes */}
      <line x1="0" y1="100" x2="320" y2="100" stroke="var(--color-border-hover)" strokeWidth="1" />
      <line x1="180" y1="0" x2="180" y2="240" stroke="var(--color-border-hover)" strokeWidth="1" />

      {/* Static radar/range rings */}
      <circle cx="180" cy="100" r="50" stroke="var(--color-border)" strokeWidth="0.6" strokeDasharray="3 3" />
      <circle cx="180" cy="100" r="80" stroke="var(--color-border)" strokeWidth="0.6" strokeDasharray="3 3" />

      {/* Target locator pin */}
      <g>
        <circle cx="180" cy="100" r="5" fill="var(--color-signal)" />
        <circle cx="180" cy="100" r="2" fill="var(--color-base)" />
        <circle cx="180" cy="100" r="10" stroke="var(--color-signal)" strokeWidth="0.8" strokeOpacity="0.4" />
      </g>

      {/* Bhopal city coordinate text tag */}
      <g transform="translate(192, 82)">
        <rect width="105" height="34" rx="3" fill="var(--color-surface-raised)" stroke="var(--color-border)" strokeWidth="1" />
        <text x="8" y="14" fill="var(--color-text)" fontSize="7" fontWeight="600" fontFamily="var(--font-mono)">OIST_CAMPUS // IND</text>
        <text x="8" y="24" fill="var(--color-active)" fontSize="6" fontFamily="var(--font-mono)">LOC :: 23.26N 77.41E</text>
      </g>

      {/* Grid tick mark decorators */}
      <path d="M 12 12 H 20 M 12 12 V 20" stroke="var(--color-text-faint)" strokeWidth="0.8" />
      <path d="M 308 12 H 300 M 308 12 V 20" stroke="var(--color-text-faint)" strokeWidth="0.8" />
      <path d="M 12 228 H 20 M 12 228 V 220" stroke="var(--color-text-faint)" strokeWidth="0.8" />
      <path d="M 308 228 H 300 M 308 228 V 220" stroke="var(--color-text-faint)" strokeWidth="0.8" />
    </svg>
  );
}
