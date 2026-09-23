import CountUp from "@/components/CountUp";
import { overview, stats } from "@/lib/about";

export default function AboutOverview() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div>
          <p className="flex items-center gap-2 text-sm text-brand/70">
            <span aria-hidden="true">+</span> Our Services
          </p>
          <h2 className="mt-4 max-w-xl font-heading text-3xl font-medium tracking-[-0.03em] text-brand sm:text-4xl">
            Structured legal and commercial advisory, delivered with precision.
          </h2>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-brand/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-2 text-sm text-brand/60">{stat.label}</dt>
                <dd className="font-heading text-5xl font-medium tracking-[-0.03em] text-brand sm:text-6xl">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-6 lg:pt-10">
          {overview.map((paragraph) => (
            <p key={paragraph} className="text-base text-brand/70">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
