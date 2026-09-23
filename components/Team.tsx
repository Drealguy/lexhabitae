import Image from "next/image";
import SocialIcon from "@/components/SocialIcon";
import { team } from "@/lib/about";

export default function Team() {
  return (
    <section className="bg-brand/[0.03] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="flex items-center gap-2 text-sm text-brand/70">
          <span aria-hidden="true">+</span> Our Team
        </p>
        <h2 className="mt-4 font-heading text-3xl font-medium tracking-[-0.03em] text-brand sm:text-4xl">
          Meet our team
        </h2>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {team.map((member) => (
            <li key={member.name}>
              <div className="relative aspect-[5/6] overflow-hidden bg-brand/10">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 mx-auto w-3/4 text-brand/15"
                  >
                    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-5 0-9 2.5-9 6v4h18v-4c0-3.5-4-6-9-6z" />
                  </svg>
                )}
              </div>

              <h3 className="mt-5 font-heading text-xl font-medium uppercase tracking-[-0.03em] text-brand">
                {member.name}
              </h3>
              {member.role && <p className="mt-1 text-sm text-brand/60">{member.role}</p>}

              <div className="mt-4 flex gap-2">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="flex size-8 items-center justify-center bg-brand text-white transition-colors hover:bg-accent"
                  >
                    <SocialIcon name="LinkedIn" size={14} />
                  </a>
                )}
                {member.x && (
                  <a
                    href={member.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on X`}
                    className="flex size-8 items-center justify-center bg-brand text-white transition-colors hover:bg-accent"
                  >
                    <SocialIcon name="X" size={14} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
