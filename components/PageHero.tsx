import Image from "next/image";
import BackgroundVideo from "@/components/BackgroundVideo";

type PageHeroProps = {
  title: string;
  description: string;
} & ({ video: string; image?: never } | { image: string; video?: never });

// Inner-page hero: same layout, overlay and entrance animation as the homepage Hero,
// with either a looping background video or a slowly zooming photo.
export default function PageHero({ title, description, video, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-brand">
      {video ? (
        <BackgroundVideo src={video} />
      ) : (
        <Image
          src={image!}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover motion-safe:animate-kenburns"
        />
      )}
      {/* Darken the background so the white text stays readable */}
      <div className="absolute inset-0 bg-linear-to-t from-brand/90 via-brand/50 to-brand/30" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <h1 className="max-w-4xl font-heading text-5xl font-medium tracking-[-0.03em] text-white motion-safe:animate-fade-up sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base text-white/80 motion-safe:animate-fade-up motion-safe:[animation-delay:150ms]">
          {description}
        </p>
      </div>
    </section>
  );
}
