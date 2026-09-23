import Image from "next/image";
import Link from "next/link";
import { articleHref, type Article } from "@/lib/news";

// Wide article card: text on the left, photo on the right. For dark sections.
export default function FeaturedArticle({ article }: { article: Article }) {
  return (
    <article className="grid gap-8 bg-white/[0.04] p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col">
        <p className="text-xs font-medium uppercase text-white/50">{article.category}</p>
        <h3 className="mt-4 font-heading text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
          {article.title}
        </h3>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase text-white/50">Written by</p>
            <p className="mt-2 font-heading text-xl font-medium tracking-[-0.03em] text-white">
              {article.author}
            </p>
            <p className="text-sm text-white/60">{article.authorRole}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase text-white/50">In short</p>
            <p className="mt-2 text-base text-white/80">{article.summary}</p>
          </div>
        </div>

        <Link
          href={articleHref(article)}
          className="mt-8 block bg-white px-5 py-2.5 text-center text-sm font-medium uppercase text-brand transition-colors hover:bg-accent hover:text-white lg:mt-auto"
        >
          Read More
        </Link>
      </div>

      <div className="relative min-h-72 overflow-hidden sm:min-h-96">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}
