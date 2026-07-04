"use client";

import {
  Sparkles,
  Users,
  Rocket,
  Award,
  Network,
  Wrench,
  Trophy,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { WHY_PARTICIPATE } from "@/data/event";

const ICONS = [Sparkles, Users, Network, Rocket, Award, Trophy, Wrench];

const BENTO_CLASSES: Record<number, string> = {
  0: "lg:col-span-2 bg-surface-raised", 
  1: "lg:col-span-1",
  2: "lg:col-span-1",
  3: "lg:col-span-2 bg-surface-raised", 
  4: "lg:col-span-1",
  5: "lg:col-span-1",
  6: "lg:col-span-1",
};

export default function WhyParticipate() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-36 bg-[#0e1015] border-t border-border">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="inline-block font-mono-ui text-[10px] uppercase tracking-[0.25em] text-signal font-semibold">
            06 — WHY PARTICIPATE
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl font-black tracking-tight text-text uppercase leading-none">
            What you leave with.
          </h2>
        </Reveal>

        {/* Asymmetric Bento Card Layout */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_PARTICIPATE.map((benefit, i) => {
            const Icon = ICONS[i % ICONS.length];
            const isWide = i === 0 || i === 3;
            
            return (
              <Reveal key={benefit} delay={i * 0.04} className={BENTO_CLASSES[i] ?? ""}>
                <motion.div
                  className="group relative overflow-hidden rounded-[24px] border border-border bg-surface p-8 h-full flex flex-col justify-between transition-colors duration-300 hover:border-border-hover hover:shadow-lg"
                  whileHover={
                    reduce
                      ? {}
                      : {
                          y: -2,
                        }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    {/* Header: Icon + Chip */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-raised shadow-sm">
                        <Icon className="h-5 w-5 text-signal" />
                      </div>
                      
                      {isWide && (
                        <span className="font-mono-ui text-[9px] tracking-[0.2em] text-signal uppercase border border-signal/20 rounded px-2.5 py-0.5 bg-[var(--color-signal)]/5 font-semibold">
                          core value
                        </span>
                      )}
                    </div>

                    {/* Benefit Title */}
                    <p className={`mt-8 font-display font-bold text-text uppercase leading-tight ${
                      isWide ? "text-xl sm:text-2xl" : "text-base"
                    }`}>
                      {benefit}
                    </p>
                  </div>

                  {/* Footnotes */}
                  <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between font-mono-ui text-[8px] text-text-faint tracking-wider uppercase">
                    <span>AOC_BENEFIT_0{i + 1}</span>
                    <span>TYPE // SKILLSET</span>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
