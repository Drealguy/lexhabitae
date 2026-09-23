import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section className="bg-brand py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
          <div>
            <p className="flex items-center gap-2 text-sm text-white/70">
              <span aria-hidden="true">+</span> What We Do
            </p>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
              Our Services
            </h2>
          </div>
          <p className="max-w-md text-base text-white/70">
            Structured legal and commercial advisory, delivered with precision.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.number}
              className="group relative flex min-h-96 flex-col overflow-hidden p-6 sm:p-8"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand/75" />

              <div className="relative flex items-center justify-between gap-4">
                <span className="text-sm text-white/70">{service.number}</span>
                {service.badge && (
                  <span className="border border-white/40 px-3 py-1 text-xs font-medium uppercase text-white">
                    {service.badge}
                  </span>
                )}
              </div>

              <div className="relative mt-auto pt-16">
                <h3 className="font-heading text-2xl font-medium tracking-[-0.03em] text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-base text-white/80">{service.description}</p>
                <Link
                  href="/practice-areas"
                  className="mt-6 block bg-white px-5 py-2.5 text-center text-sm font-medium uppercase text-brand transition-colors hover:bg-accent hover:text-white"
                >
                  Learn More
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
