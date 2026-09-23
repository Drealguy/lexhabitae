import Link from "next/link";
import { navLinks } from "@/lib/navigation";
import SocialIcon from "@/components/SocialIcon";
import { contact, socials } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="grid border-b border-white/10 md:grid-cols-3">
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 px-5 py-12 sm:px-8 md:border-r md:border-b-0 lg:px-12 lg:py-16">
          <Link href="/" className="text-lg font-medium uppercase tracking-wide sm:text-xl">
            Lex Habitae
          </Link>
          <p className="max-w-sm text-base text-white/60">
            Corporate, regulatory, and commercial advisory services for businesses operating
            within complex regulatory frameworks.
          </p>
        </div>

        <div className="flex flex-col gap-10 border-b border-white/10 px-5 py-12 sm:px-8 md:border-r md:border-b-0 lg:px-12 lg:py-16">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium uppercase transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-accent hover:text-accent"
                >
                  <SocialIcon name={social.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <address className="flex flex-col gap-6 px-5 py-12 not-italic sm:px-8 lg:px-12 lg:py-16">
          <p className="font-heading text-2xl tracking-[-0.03em] text-white/60">
            {contact.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="font-heading text-2xl tracking-[-0.03em] underline underline-offset-4 transition-colors hover:text-accent"
          >
            {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="break-all font-heading text-2xl tracking-[-0.03em] underline underline-offset-4 transition-colors hover:text-accent"
          >
            {contact.email}
          </a>
        </address>
      </div>

      {/* Endless scrolling wordmark: two identical copies, shifted by -50% on loop */}
      <div aria-hidden="true" className="overflow-hidden bg-white/[0.04] pt-10 pb-6">
        <div className="flex w-max motion-safe:animate-marquee">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="flex shrink-0 whitespace-nowrap font-heading text-[12.5vw] font-medium uppercase leading-none tracking-[-0.03em] text-black/40"
            >
              <span className="px-[4vw]">Lex Habitae Solicitors</span>
              <span className="px-[4vw]">Lex Habitae Solicitors</span>
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
