import type { Metadata } from "next";
import { contact } from "@/lib/site";

// The live domain. Set NEXT_PUBLIC_SITE_URL in the hosting provider's environment
// variables once the domain is connected (e.g. https://www.lexhabitae.com).
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lexhabitae.com").replace(/\/$/, "");

export const siteName = "Lex Habitae Solicitors";

export const siteDescription =
  "Lex Habitae Solicitors is an Abuja, Nigeria law firm providing corporate, regulatory, due diligence, compliance and commercial advisory services to businesses, institutions and individuals.";

// Per-page metadata with a canonical URL and matching Open Graph / Twitter tags.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    twitter: { title, description },
  };
}

// Structured data so Google understands this is a law firm in Abuja.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteName,
  alternateName: ["Lex Habitae", "Lex Habitae LP"],
  description: siteDescription,
  url: siteUrl,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  areaServed: "Nigeria",
  openingHours: "Mo-Fr 09:00-17:00",
  knowsAbout: [
    "Corporate and regulatory law",
    "Due diligence",
    "Regulatory compliance",
    "Commercial contracts",
  ],
};
