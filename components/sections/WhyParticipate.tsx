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
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { WHY_PARTICIPATE } from "@/data/event";

const ICONS = [Sparkles, Users, Network, Rocket, Award, Trophy, Wrench];

// Real photography, cycled per benefit — each frame duotone-treated to match the rest of the site.
const IMAGES = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop", // hands-on coding
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop", // mentorship / working together
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop", // whiteboard planning
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop", // team presenting / demo
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop", // systems / architecture
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop", // recognition / stage
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop", // community / networking
];

export default function WhyParticipate() {
  const N = WHY_PARTICIPATE.length;

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
          <p className="mt-4 text-sm text-text-muted font-light max-w-md">
            {N} reasons two days here beats two days anywhere else.
          </p>
        </Reveal>

        {/* Editorial bento grid — one lead tile, rest support it */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[220px]">
          {WHY_PARTICIPATE.map((benefit, i) => {
            const Icon = ICONS[i % ICONS.length];
            const image = IMAGES[i % IMAGES.length];
            const isLead = i === 0;

            return (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-[22px] overflow-hidden border border-white/[0.06] ${
                  isLead
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[280px]"
                    : "min-h-[220px]"
                }`}
              >
                {/* Photo */}
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover contrast-[1.08] saturate-[1.12] transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />

                {/* Duotone brand wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/5" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a3a]/45 via-transparent to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Index + icon row */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="font-mono-ui text-[9px] uppercase tracking-[0.15em] text-white/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] backdrop-blur-sm">
                    <Icon className="h-3.5 w-3.5 text-signal" />
                  </div>
                </div>

                {/* Title always visible; description reveals on hover */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 z-10">
                  <p
                    className={`font-display font-black text-white uppercase leading-[1.02] ${
                      isLead ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                    }`}
                  >
                    {benefit}
                  </p>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-400 ease-out">
                    <div className="overflow-hidden">
                      <p className="mt-2 text-[13px] leading-snug text-white/70 font-light max-w-[34ch] pt-1">
                        Move beyond the headline — tap to see how this shows up across the two days.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] rounded-[22px] pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}