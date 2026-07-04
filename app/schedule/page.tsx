import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import ScheduleTimeline from "@/components/sections/ScheduleTimeline";
import { EVENT } from "@/data/event";

export const metadata: Metadata = {
  title: `Schedule — ${EVENT.name}`,
  description: `Full 2-day schedule for ${EVENT.name}, ${EVENT.dates}.`,
};

export default function SchedulePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="px-6 pb-28 pt-36 md:pt-44">
        <div className="mx-auto max-w-5xl">
          <span className="font-mono-ui text-xs tracking-[0.25em] text-signal uppercase font-semibold">
            SCHEDULE
          </span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl font-black tracking-tight text-text uppercase leading-none max-w-3xl">
            30 HOURS OF BUILDING,<br />REVIEW, AND FINAL PITCHES
          </h1>
          <p className="mt-6 max-w-xl text-base text-text-muted font-light">
            Offline grand finale structure for shortlisted teams
          </p>

          <div className="mt-20">
            <ScheduleTimeline />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
