import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ArticleCard from "@/components/ArticleCard";
import FeaturedArticle from "@/components/FeaturedArticle";
import PageHero from "@/components/PageHero";
import { articles } from "@/lib/news";

export const metadata: Metadata = pageMetadata({
  title: "News & Insights",
  description:
    "Updates and practical guidance on corporate, regulatory and commercial law from Lex Habitae Solicitors, Abuja.",
  path: "/news",
});

export default function News() {
  const [featured, ...rest] = articles;

  return (
    <main>
      <PageHero
        title="News & Insights"
        description="Updates and practical guidance on corporate, regulatory, and commercial matters."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=80"
      />

      <section className="bg-brand py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="flex items-center gap-2 text-sm text-white/70">
            <span aria-hidden="true">+</span> Featured
          </p>
          <div className="mt-8">
            <FeaturedArticle article={featured} />
          </div>

          <p className="mt-16 flex items-center gap-2 text-sm text-white/70 lg:mt-24">
            <span aria-hidden="true">+</span> More News
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <li key={article.title}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
