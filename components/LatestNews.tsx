import Link from "next/link";
import FeaturedArticle from "@/components/FeaturedArticle";
import { featuredArticle } from "@/lib/news";

export default function LatestNews() {
  return (
    <section className="bg-brand pt-20 sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-sm text-white/70">
            <span aria-hidden="true">+</span> Latest News
          </p>
          <Link
            href="/news"
            className="bg-white px-5 py-2.5 text-sm font-medium uppercase text-brand transition-colors hover:bg-accent hover:text-white"
          >
            View All
          </Link>
        </div>

        <div className="mt-8">
          <FeaturedArticle article={featuredArticle} />
        </div>
      </div>
    </section>
  );
}
