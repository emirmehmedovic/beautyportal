import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getAllSlugs, categoryNames } from "@/lib/posts";
import Link from "next/link";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getPost(category, slug);
  if (!post) return {};

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const post = getPost(category, slug);

  if (!post) notFound();

  const catLabel = categoryNames[category] || category;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-[#c9756a] transition-colors">
          Početna
        </Link>
        <span>/</span>
        <Link
          href={`/${category}`}
          className="hover:text-[#c9756a] transition-colors"
        >
          {catLabel}
        </Link>
        <span>/</span>
        <span className="text-gray-600 truncate max-w-[200px]">{post.title}</span>
      </nav>

      {/* Article header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#c9756a]">
            {catLabel}
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {post.title}
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-5">
          {post.description}
        </p>

        {/* Byline */}
        <div className="flex items-center gap-3 py-4 border-y border-gray-100 text-sm text-gray-500">
          <div className="w-8 h-8 rounded-full bg-[#f0dbd8] flex items-center justify-center text-[#c9756a] font-bold text-xs">
            {post.author.charAt(0)}
          </div>
          <div>
            <span className="font-semibold text-gray-700">{post.author}</span>
            <span className="mx-2 text-gray-300">·</span>
            <time dateTime={post.publishedAt} className="text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString("bs-BA", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            {post.updatedAt && (
              <>
                <span className="mx-2 text-gray-300">·</span>
                <span className="text-gray-400">
                  Ažurirano{" "}
                  {new Date(post.updatedAt).toLocaleDateString("bs-BA", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </>
            )}
            <span className="mx-2 text-gray-300">·</span>
            <span className="text-gray-400">{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="article-content">
        <MDXRemote source={post.content} />
      </article>

      {/* Tags */}
      {post.keywords.length > 0 && (
        <div className="mt-10 pt-6 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((kw) => (
              <span
                key={kw}
                className="text-xs px-2.5 py-1 bg-[#faf8f6] rounded-full text-gray-500 border border-gray-100"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* CTA box */}
      <div className="mt-10 bg-[#faf8f6] border border-[#f0dbd8] rounded-xl p-6 text-center">
        <p className="text-sm font-semibold text-gray-700 mb-1">
          Zanima vas IPL aparat?
        </p>
        <p className="text-xs text-gray-500 mb-4">
          Ice Cool linija — jedini zvanični prodavač u BiH s dostavom u 24h.
        </p>
        <a
          href="https://aurorashop.ba"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-colors"
          style={{ backgroundColor: "#c9756a" }}
        >
          Pogledajte modele →
        </a>
      </div>

      {/* Back link */}
      <div className="mt-8 text-center">
        <Link
          href={`/${category}`}
          className="text-sm text-[#c9756a] hover:underline"
        >
          ← Nazad na {catLabel}
        </Link>
      </div>
    </div>
  );
}
