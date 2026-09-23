"use client";

import { useState } from "react";
import { testimonials } from "@/lib/testimonials";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const go = (step: number) => setCurrent((i) => (i + step + total) % total);

  return (
    <section className="bg-brand py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl px-5 sm:px-8 md:grid-cols-[16rem_1fr] lg:px-12">
        <div className="flex flex-col justify-between gap-10 bg-accent p-6 text-brand sm:p-8">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M9.6 6C6.5 7.3 4.5 10 4.5 13.6V18h6v-6H7.6c.2-2 1.4-3.5 3.3-4.3L9.6 6zm9 0c-3.1 1.3-5.1 4-5.1 7.6V18h6v-6h-2.9c.2-2 1.4-3.5 3.3-4.3L18.6 6z" />
          </svg>

          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium" aria-live="polite">
              {pad(current + 1)} / {pad(total)}
            </p>
            <div className="flex gap-2">
              {[
                { step: -1, label: "Previous testimonial", d: "M15 6l-6 6 6 6" },
                { step: 1, label: "Next testimonial", d: "M9 6l6 6-6 6" },
              ].map((btn) => (
                <button
                  key={btn.step}
                  type="button"
                  onClick={() => go(btn.step)}
                  aria-label={btn.label}
                  className="flex size-10 items-center justify-center border border-brand/30 transition-colors hover:bg-brand hover:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={btn.d} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/[0.04] p-6 sm:p-10 lg:p-14">
          <p className="flex items-center gap-2 text-sm text-white/70">
            <span aria-hidden="true">+</span> Client Testimonials
          </p>

          {/* All slides share one grid cell so the box keeps the tallest one's height */}
          <div className="mt-8 grid">
            {testimonials.map((t, i) => (
              <figure
                key={t.author}
                aria-hidden={i !== current}
                className={`col-start-1 row-start-1 transition-all duration-500 ease-out ${
                  i === current ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                }`}
              >
                <blockquote className="max-w-2xl font-heading text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-10 font-heading text-xl font-medium tracking-[-0.03em] text-white">
                  {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
