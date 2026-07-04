"use client";

import { useState } from "react";
import AgentBootLoader from "@/components/loader/AgentBootLoader";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyAgenticAI from "@/components/sections/WhyAgenticAI";
import LearningOutcomes from "@/components/sections/LearningOutcomes";
import Journey from "@/components/sections/Journey";
import BuildathonTheme from "@/components/sections/BuildathonTheme";
import WhyParticipate from "@/components/sections/WhyParticipate";
import EventStructure from "@/components/sections/EventStructure";
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
          <Journey />
          <BuildathonTheme />
          <WhyParticipate />
          <EventStructure />
          <RegisterCTA />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
