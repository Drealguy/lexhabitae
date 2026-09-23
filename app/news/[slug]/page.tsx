import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import PageHero from "@/components/PageHero";
import { articleHref, articles, getArticle } from "@/lib/news";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found", robots: { index: false } };
  const path = articleHref(article);
  return {
    ...pageMetadata({ title: article.title, description: article.summary, path }),
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      url: path,
      images: [{ url: article.image, alt: article.title }],
      authors: [article.author],
      section: article.category,
    },
  };
}

export default async function ArticlePage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <main>
      <PageHero title={article.title} description={article.summary} image={article.image} />

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand/10 pb-8">
            <div>
              <p className="text-xs font-medium uppercase text-brand/50">{article.category}</p>
              <p className="mt-2 text-base text-brand">
                {article.author} <span className="text-brand/60">· {article.authorRole}</span>
              </p>
            </div>
            <Link href="/news" className="text-sm font-medium uppercase text-brand transition-colors hover:text-accent">
              ← Back to News
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-10">
            {article.body.map((section, i) => (
              <div key={section.heading ?? i}>
                {section.heading && (
                  <h2 className="mb-4 font-heading text-2xl font-medium tracking-[-0.03em] text-brand">
                    {section.heading}
                  </h2>
                )}
                <div className="flex flex-col gap-4">
                  {section.paragraphs.map((p) => (
                    <p key={p} className="text-base text-brand/80">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 border-t border-brand/10 pt-6 text-sm text-brand/60">
            This article is general information, not legal advice. For advice on your situation,
            book a consultation with our team.
          </p>

          <div className="mt-10 flex flex-col items-start gap-6 bg-brand p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="font-heading text-xl font-medium tracking-[-0.03em] text-white">
              Need advice on this?
            </p>
            <Link
              href="/contact"
              className="bg-white px-7 py-4 font-medium text-brand transition-colors hover:bg-accent hover:text-white"
            >
              Speak With Our Team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="flex items-center gap-2 text-sm text-white/70">
            <span aria-hidden="true">+</span> More News
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {more.map((a) => (
              <li key={a.slug}>
                <ArticleCard article={a} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
