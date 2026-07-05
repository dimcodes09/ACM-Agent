"use client";

import { useState } from "react";
import AgentBootLoader from "@/components/loader/AgentBootLoader";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyAgenticAI from "@/components/sections/WhyAgenticAI";
import LearningOutcomes from "@/components/sections/LearningOutcomes";
import WhyParticipate from "@/components/sections/WhyParticipate";
import EventStructure from "@/components/sections/EventStructure";
import ScheduleTimeline from "@/components/sections/ScheduleTimeline";
import RegisterCTA from "@/components/sections/RegisterCTA";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function HomeClient() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <AgentBootLoader onDone={() => setBooted(true)} />}
      <div
        className={`transition-opacity duration-700 ${
          booted ? "opacity-100" : "opacity-0"
        }`}
      >
        <ScrollProgress />
        <Nav />
        <main>
          <Hero />
          <About />
          <WhyAgenticAI />
          <LearningOutcomes />
          <EventStructure />
          <WhyParticipate />
          <section id="schedule" className="relative overflow-hidden px-6 py-28 md:py-36 border-t border-b border-border bg-gradient-to-b from-[#08090c] to-[#0e1015]">
            {/* Subtle background environment */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/5 blur-[110px]" />

            <div className="mx-auto max-w-5xl relative z-10">
              <span className="font-mono-ui text-xs tracking-[0.25em] text-signal uppercase font-semibold">
                SCHEDULE
              </span>
              <h2 className="mt-5 font-display text-5xl md:text-7xl font-black tracking-tight text-text uppercase leading-none max-w-3xl">
                2-DAY WORKSHOP &<br />TEAM BUILDATHON
              </h2>
              <p className="mt-6 max-w-xl text-base text-muted-custom font-light">
                Tentative schedule for the bootcamp and buildathon sessions
              </p>

              <div className="mt-20">
                <ScheduleTimeline />
              </div>
            </div>
          </section>
          <RegisterCTA />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
