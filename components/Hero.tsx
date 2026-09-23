import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-brand">
      <Image
        src="/images/hero.png"
        alt="Lawyers discussing documents across a desk beside the scales of justice"
        fill
        priority
        sizes="100vw"
        className="object-cover motion-safe:animate-kenburns"
      />
      {/* Darken the image so the white text stays readable */}
      <div className="absolute inset-0 bg-linear-to-t from-brand/90 via-brand/50 to-brand/30" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <h1 className="max-w-4xl font-heading text-5xl font-medium tracking-[-0.03em] text-white motion-safe:animate-fade-up sm:text-6xl lg:text-7xl">
          Legal Clarity <br className="hidden sm:block" />
          That Moves <br className="hidden sm:block" />
          Business Forward.
        </h1>

        <p className="mt-6 max-w-xl text-base text-white/80 motion-safe:animate-fade-up motion-safe:[animation-delay:150ms]">
          We help businesses navigate regulatory frameworks, conduct due diligence, and
          structure commercial agreements with precision
        </p>

        <div className="mt-10 flex flex-col gap-4 motion-safe:animate-fade-up motion-safe:[animation-delay:300ms] sm:flex-row">
          <Link
            href="/contact"
            className="bg-white px-7 py-4 text-center font-medium text-brand transition-colors hover:bg-accent hover:text-white"
          >
            Speak With Our Team
          </Link>
          <Link
            href="/practice-areas"
            className="border border-white px-7 py-4 text-center font-medium text-white transition-colors hover:bg-white hover:text-brand"
          >
            Explore Our Practice Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
