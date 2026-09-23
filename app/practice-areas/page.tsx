import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import ServiceDetails from "@/components/ServiceDetails";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Practice Areas",
  description:
    "Corporate and regulatory advisory, due diligence and compliance, and commercial advisory from Lex Habitae Solicitors in Abuja, Nigeria.",
  path: "/practice-areas",
});

export default function PracticeAreas() {
  return (
    <main>
      <PageHero
        title="Practice Areas"
        description="Corporate, regulatory, and commercial advisory services to support businesses in meeting legal and compliance obligations within complex regulatory frameworks."
        image="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=2000&q=80"
      />
      <ServiceDetails />
      <Testimonials />
    </main>
  );
}
