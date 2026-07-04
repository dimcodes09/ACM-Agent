"use client";

import Reveal from "@/components/ui/Reveal";
import { JOURNEY_STEPS } from "@/data/event";

export default function Journey() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-36 bg-[#0e1015] border-t border-border">
      <div className="mx-auto max-w-5xl relative z-10">
        <Reveal className="max-w-2xl text-center md:mx-auto">
          <span className="inline-block font-mono-ui text-[10px] uppercase tracking-[0.25em] text-signal font-semibold">
            04 — THE JOURNEY
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl font-black tracking-tight text-text uppercase leading-none">
            One continuous trace, start to finish.
          </h2>
        </Reveal>

        {/* Minimalist Vertical Timeline */}
        <div className="relative mt-20 pl-6 md:pl-10 max-w-2xl mx-auto">
          {/* Vertical track line */}
          <div className="absolute left-[9px] md:left-[17px] top-2 bottom-2 w-[1px] bg-[var(--color-border)]" />

          <div className="space-y-10">
            {JOURNEY_STEPS.map((step, i) => (
              <Reveal key={step} delay={i * 0.04}>
                <div className="relative flex gap-6 md:gap-10 items-center group">
                  {/* Step bullet node */}
                  <div className="absolute -left-[30px] md:-left-[42px] top-1/2 -translate-y-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[var(--color-border-hover)] group-hover:bg-[var(--color-signal)] transition-all duration-300 ring-0 group-hover:ring-4 group-hover:ring-[var(--color-signal)]/10" />
                  </div>

                  {/* Step box and Title */}
                  <div className="flex gap-4 md:gap-6 items-center w-full rounded-xl border border-border bg-surface/60 p-4 transition-colors duration-300 hover:border-border-hover">
                    <span className="font-mono-ui text-xs font-semibold px-2.5 py-1 rounded border border-border bg-surface-raised text-text-faint group-hover:border-signal/30 group-hover:text-signal transition-colors duration-300 select-none">
                      STEP 0{i + 1}
                    </span>
                    <h4 className="font-display text-base md:text-lg font-bold tracking-tight text-text-muted group-hover:text-text uppercase leading-none transition-colors duration-300">
                      {step}
                    </h4>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
