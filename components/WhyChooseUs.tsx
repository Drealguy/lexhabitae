"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { facts, reasons } from "@/lib/why-choose-us";

type Item = { number: string; title: string; content: React.ReactNode };

const items: Item[] = [
  ...reasons.map((r) => ({
    number: r.number,
    title: r.title,
    content: <p className="max-w-md text-base text-brand/70">{r.body}</p>,
  })),
  {
    number: "04",
    title: "How We Work",
    content: (
      <dl className="grid max-w-md grid-cols-2 gap-x-6 gap-y-4">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-sm text-brand/60">{fact.label}</dt>
            <dd className="mt-1 text-base font-medium text-brand">{fact.value}</dd>
          </div>
        ))}
      </dl>
    ),
  },
];

export default function WhyChooseUs() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm text-brand/70">
              <span aria-hidden="true">+</span> Why Choose Us
            </p>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-medium tracking-[-0.03em] text-brand sm:text-4xl">
              Structured Counsel for Complex Regulatory Environments
            </h2>
          </div>
          <Link
            href="/contact"
            className="self-start bg-brand px-7 py-4 font-medium text-white transition-colors hover:bg-accent lg:self-auto"
          >
            Work With Us
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          <ul className="flex flex-col gap-4">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.number} className="border border-brand/10 bg-brand/[0.03]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 p-6 text-left sm:px-8"
                  >
                    <span className="text-base text-brand/60">{item.number}</span>
                    <h3 className="flex-1 font-heading text-xl font-medium tracking-[-0.03em] text-brand">
                      {item.title}
                    </h3>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`shrink-0 text-brand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 sm:pr-8 sm:pl-[4.25rem]">{item.content}</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="relative min-h-96 overflow-hidden lg:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80"
              alt="Professional in a suit buttoning his jacket in an office lobby"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
