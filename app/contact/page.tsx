import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import BookingForm from "@/components/BookingForm";
import PageHero from "@/components/PageHero";
import { payment } from "@/lib/booking";
import { contact } from "@/lib/site";
import { facts } from "@/lib/why-choose-us";

export const metadata: Metadata = pageMetadata({
  title: "Book a Consultation",
  description:
    "Book a legal consultation with Lex Habitae Solicitors in Abuja. Share your matter, pay the consultation fee and receive your booking link by email.",
  path: "/contact",
});

const hours = facts.find((f) => f.label === "Hours")?.value;

export default function Contact() {
  const details = [
    { label: "Address", value: contact.address.join(" ") },
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Hours", value: hours },
    { label: "Consultation", value: `${payment.fee} ${payment.feeUnit}` },
  ];

  return (
    <main>
      <PageHero
        title="Book a Consultation"
        description="Tell us about your matter, make the consultation payment, and we'll email you a link to book your session."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&q=80"
      />

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-24 lg:px-12">
          <div>
            <p className="flex items-center gap-2 text-sm text-brand/70">
              <span aria-hidden="true">+</span> Get in Touch
            </p>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-[-0.03em] text-brand sm:text-4xl">
              Speak with our team.
            </h2>
            <p className="mt-6 max-w-sm text-base text-brand/70">
              Share your details and a short summary of your matter, pay the consultation fee, and
              we&apos;ll email you a link to book your session.
            </p>

            <dl className="mt-12 border-t border-brand/10">
              {details.map((d) => (
                <div key={d.label} className="flex flex-col gap-1 border-b border-brand/10 py-5">
                  <dt className="text-xs font-medium uppercase text-brand/60">{d.label}</dt>
                  <dd className="text-base text-brand">
                    {d.href ? (
                      <a href={d.href} className="underline underline-offset-4 transition-colors hover:text-accent">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <BookingForm />
        </div>
      </section>
    </main>
  );
}
