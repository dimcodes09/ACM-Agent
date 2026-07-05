"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import { EVENT } from "@/data/event";

type FormState = {
  name: string;
  email: string;
  phone: string;
  college: string;
};

const initialState: FormState = { name: "", email: "", phone: "", college: "" };

export default function RegisterPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // NOTE: no backend/registration endpoint was provided in the event
    // document. Wire this to your actual form handler, API route, or an
    // external form (e.g. Unstop/Google Form redirect) before launch.
    setSubmitted(true);
  }

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="px-6 pb-28 pt-36 md:pt-44">
        <div className="mx-auto max-w-xl">
          <span className="font-mono-ui text-xs tracking-[0.25em] text-signal uppercase font-semibold">
            REGISTER
          </span>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-black tracking-tight text-text uppercase leading-none">
            {EVENT.name}
          </h1>
          <p className="mt-4 text-base text-white/75 font-light">
            {EVENT.dates} · {EVENT.organizer}
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 rounded-2xl border border-border bg-surface-raised/40 p-8 text-center"
            >
              <p className="font-display text-xl font-semibold text-text">
                You&apos;re on the list.
              </p>
              <p className="mt-2 text-sm text-white/75">
                Watch your inbox for workshop details and setup instructions.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-5">
              <Field
                label="Full name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
              />
              <Field
                label="College / Institution"
                name="college"
                value={form.college}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="mt-4 w-full rounded-full bg-[var(--color-text)] px-8 py-4 font-medium text-[var(--color-base)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Submit registration
              </button>
              <p className="text-center text-xs text-white/55">
                Teams are formed after the workshop, on Day 1.
              </p>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono-ui text-[11px] uppercase tracking-wider text-white/55">
        {label}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-text outline-none transition-colors focus:border-border-hover"
      />
    </label>
  );
}
