import Link from "next/link";

export default function ArticleNotFound() {
  return (
    <main className="flex min-h-svh items-center bg-brand">
      <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8 lg:px-12">
        <h1 className="font-heading text-5xl font-medium tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
          Article not found
        </h1>
        <p className="mt-6 text-base text-white/80">This article may have moved or no longer exists.</p>
        <Link
          href="/news"
          className="mt-10 inline-block bg-white px-7 py-4 font-medium text-brand transition-colors hover:bg-accent hover:text-white"
        >
          Back to News
        </Link>
      </div>
    </main>
  );
}
