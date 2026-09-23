import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

// Practice Areas page: one row per service, photo alternating left and right.
export default function ServiceDetails() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="flex items-center gap-2 text-sm text-brand/70">
          <span aria-hidden="true">+</span> What We Do
        </p>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-medium tracking-[-0.03em] text-brand sm:text-4xl">
          Structured legal and commercial advisory, delivered with precision.
        </h2>

        <ul className="mt-12 flex flex-col gap-16 lg:mt-20 lg:gap-24">
          {services.map((service, i) => (
            <li key={service.number} className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div
                className={`relative aspect-[4/3] overflow-hidden bg-brand ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-brand/60">{service.number}</span>
                  {service.badge && (
                    <span className="border border-brand/20 px-3 py-1 text-xs font-medium uppercase text-brand">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-heading text-3xl font-medium tracking-[-0.03em] text-brand">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-lg text-base text-brand/70">{service.description}</p>

                <ul className="mt-8 flex flex-col border-t border-brand/10">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-3 border-b border-brand/10 py-4 text-base text-brand"
                    >
                      <span aria-hidden="true" className="text-accent">
                        +
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-8 inline-block bg-brand px-7 py-4 font-medium text-white transition-colors hover:bg-accent"
                >
                  Speak With Our Team
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
