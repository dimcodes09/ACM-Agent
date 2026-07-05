"use client";

import { MapPin, Users2, Globe2, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { CONTACT } from "@/data/event";

// TODO: replace with your real inbox — used to build the mailto link on submit.
const CONTACT_EMAIL = "reachoistacmw@gmail.com";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "";
    const subject =
      (form.elements.namedItem("subject") as HTMLInputElement)?.value || `Inquiry from ${name}`;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden px-6 py-28 md:py-36 border-t border-border">
      {/* Full-bleed campus photograph as the section background */}
      <div className="absolute inset-0 -z-10">
        <img src="/campus.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090c]/92 via-[#08090c]/90 to-[#08090c]" />
        <div className="absolute inset-0 bg-[#08090c]/35" />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="font-mono-ui text-[10px] uppercase tracking-[0.25em] text-signal font-semibold">
              09 — CONTACT & LOCATION
            </span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm overflow-hidden">
              <img src="/acm-logo.png" alt="ACM" className="h-4 w-4 object-contain" />
            </div>
          </div>

          <h2 className="mt-4 font-display text-5xl md:text-6xl font-black tracking-tight text-text uppercase leading-none">
            {CONTACT.organizer}
          </h2>
          <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed text-muted-custom font-light">
            For questions about the bootcamp, team buildathon, or registration procedures,
            reach out to the OIST ACM-W Student Chapter.
          </p>
        </Reveal>

        {/* Glass panel: form + find us */}
        <Reveal delay={0.05}>
          <div className="mt-14 rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <div className="grid md:grid-cols-[1.1fr_0.9fr]">
              {/* Send a message */}
              <form onSubmit={handleSubmit} className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">
                  Send a message
                </h3>

                <div className="mt-6 grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="font-mono-ui text-[9px] uppercase tracking-[0.15em] text-faint-custom-40">
                      Full Name
                    </span>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-1.5 w-full bg-transparent border-b border-white/15 pb-2 text-sm text-white placeholder:text-faint-custom-25 focus:border-border-hover focus:outline-none transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="font-mono-ui text-[9px] uppercase tracking-[0.15em] text-faint-custom-40">
                      Email Address
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="mt-1.5 w-full bg-transparent border-b border-white/15 pb-2 text-sm text-white placeholder:text-faint-custom-25 focus:border-border-hover focus:outline-none transition-colors"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="font-mono-ui text-[9px] uppercase tracking-[0.15em] text-faint-custom-40">
                      Subject
                    </span>
                    <input
                      name="subject"
                      type="text"
                      placeholder="Registration, sponsorship, media..."
                      className="mt-1.5 w-full bg-transparent border-b border-white/15 pb-2 text-sm text-white placeholder:text-faint-custom-25 focus:border-border-hover focus:outline-none transition-colors"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="font-mono-ui text-[9px] uppercase tracking-[0.15em] text-faint-custom-40">
                      Your Message
                    </span>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      placeholder="Tell us what you need..."
                      className="mt-1.5 w-full bg-transparent border-b border-white/15 pb-2 text-sm text-white placeholder:text-faint-custom-25 focus:border-border-hover focus:outline-none transition-colors resize-none"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-signal text-[#08090c] font-mono-ui text-xs font-semibold uppercase tracking-[0.1em] px-6 py-3 hover:brightness-110 transition-all"
                >
                  Send Message <Send className="h-3.5 w-3.5" />
                </button>
              </form>

              {/* Find us */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-6">
                    Find us
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] flex-shrink-0">
                        <MapPin className="h-4 w-4 text-signal" />
                      </div>
                      <div>
                        <div className="font-mono-ui text-[9px] uppercase tracking-[0.15em] text-faint-custom-40">
                          Campus
                        </div>
                        <div className="mt-0.5 text-sm font-medium text-white">
                          OIST Campus, Bhopal
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] flex-shrink-0">
                        <Users2 className="h-4 w-4 text-signal" />
                      </div>
                      <div>
                        <div className="font-mono-ui text-[9px] uppercase tracking-[0.15em] text-faint-custom-40">
                          Chapter
                        </div>
                        <div className="mt-0.5 text-sm font-medium text-white">
                          ACM-W Student Chapter
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] flex-shrink-0">
                        <Globe2 className="h-4 w-4 text-signal" />
                      </div>
                      <div>
                        <div className="font-mono-ui text-[9px] uppercase tracking-[0.15em] text-faint-custom-40">
                          Region
                        </div>
                        <div className="mt-0.5 text-sm font-medium text-white">
                          Madhya Pradesh, India
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small photo credential */}
                <div className="relative mt-8 h-32 rounded-xl overflow-hidden border border-white/10">
                  <img src="/campus.jpg" alt="OIST Campus" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090c]/80 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-sm overflow-hidden">
                    <img src="/oist-logo.png" alt="OIST" className="h-5 w-5 object-contain" />
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-signal" />
                    <span className="font-mono-ui text-[9px] uppercase tracking-[0.1em] text-white/90">
                      OIST Campus
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}