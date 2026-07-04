"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { FAQS } from "@/data/event";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden px-6 py-28 md:py-36 bg-[#08090c] border-t border-border">
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="inline-block font-mono-ui text-[10px] uppercase tracking-[0.25em] text-signal font-semibold">
              08 — FAQ
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl font-black tracking-tight text-text uppercase leading-none">
              Frequently asked questions.
            </h2>
          </Reveal>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-border-hover bg-surface shadow-lg"
                      : "border-border bg-surface/40 hover:border-border-hover"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left outline-none cursor-pointer"
                  >
                    <span className={`font-display text-base md:text-lg font-bold tracking-tight uppercase transition-colors duration-300 ${
                      isOpen ? "text-text" : "text-text-muted"
                    }`}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface-raised"
                    >
                      <span className="text-sm font-light text-text-muted" aria-hidden>
                        +
                      </span>
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="border-t border-border/40 px-6 pb-5 pt-4 text-sm leading-relaxed text-text-muted font-light">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
