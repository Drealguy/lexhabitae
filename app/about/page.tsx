import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import AboutOverview from "@/components/AboutOverview";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Lex Habitae Solicitors, an Abuja law firm with 15 years of experience in corporate, regulatory and commercial advisory. Meet our team.",
  path: "/about",
});

export default function About() {
  return (
    <main>
      <PageHero
        title="About Lex Habitae"
        description="Lex Habitae Solicitors (also practicing as Lex Habitae LP) is an elite Nigerian law firm primarily operating out of Abuja, Nigeria. The firm provides specialized legal practitioner and business advisory services."
        video="/videos/about-hero.mp4"
      />
      <AboutOverview />
      <Team />
    </main>
  );
}
