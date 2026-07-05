"use client";

import Reveal from "@/components/ui/Reveal";
import { BUILDATHON_THEME } from "@/data/event";

export default function BuildathonTheme() {
  return (
    <section id="theme" className="relative px-6 py-28 md:py-36 bg-[#08090c]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/5 blur-[110px]" />

      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 max-w-2xl">
          <span className="inline-block font-mono-ui text-[10px] uppercase tracking-[0.25em] text-signal font-semibold">
            05 — BUILDATHON THEME
          </span>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-[var(--color-surface-raised)]/70 to-[var(--color-surface)] p-8 sm:p-14 backdrop-blur-sm shadow-2xl">
            {/* Minimal blueprint boundary decoration */}
            <div className="absolute left-6 top-5 font-mono-ui text-[8px] tracking-wider text-faint-custom select-none">
              SYS // BUILDATHON_SPEC_v2.0
            </div>
            <div className="absolute right-6 top-5 font-mono-ui text-[8px] tracking-wider text-faint-custom select-none">
              GRID // STAGE_C
            </div>

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
              <div>
                <p className="font-mono-ui text-xs uppercase tracking-widest text-active font-semibold">
                  The theme
                </p>
                <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-text sm:text-6xl uppercase leading-none">
                  {BUILDATHON_THEME.title}
                </h2>
                <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-muted-custom font-light">
                  {BUILDATHON_THEME.description}
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BUILDATHON_THEME.capabilities.map((c) => (
                    <div
                      key={c}
                      className="rounded-2xl border border-border bg-base/50 px-5 py-4 text-xs font-semibold font-mono-ui text-muted-custom hover:border-border-hover hover:text-text transition-colors duration-300 flex items-center gap-3"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-active)]" />
                      {c.toUpperCase()}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Handcrafted Whiteboard Collaboration Photo */}
              <div className="relative rounded-2xl border border-border bg-surface p-2 shadow-2xl group overflow-hidden">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] w-full">
                  <img
                    src="/team_collaboration.png"
                    alt="Buildathon Team Collaboration"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-101 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base)]/20 to-transparent" />
                </div>
                <div className="mt-3 px-3 pb-2 flex justify-between items-center font-mono-ui text-[9px] tracking-wider text-faint-custom uppercase">
                  <span>Figure 02 // Whiteboard Session</span>
                  <span>OIST_LAB_2026</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
