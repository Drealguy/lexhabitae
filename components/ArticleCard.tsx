import Image from "next/image";
import Link from "next/link";
import { articleHref, type Article } from "@/lib/news";

// Compact article card for grids: photo on top, text below. For dark sections.
export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex h-full flex-col bg-white/[0.04] p-6 sm:p-8">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <p className="mt-6 text-xs font-medium uppercase text-white/50">{article.category}</p>
      <h3 className="mt-3 font-heading text-xl font-medium tracking-[-0.03em] text-white">
        {article.title}
      </h3>
      <p className="mt-3 text-base text-white/80">{article.summary}</p>
      <p className="mt-6 flex-1 text-sm text-white/60">
        {article.author} · {article.authorRole}
      </p>

      <Link
        href={articleHref(article)}
        className="mt-6 block bg-white px-5 py-2.5 text-center text-sm font-medium uppercase text-brand transition-colors hover:bg-accent hover:text-white"
      >
        Read More
      </Link>
    </article>
  );
}
