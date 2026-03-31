import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostsByCategory, getCategories, categoryNames } from "@/lib/posts";
import ArticleCard from "@/components/ArticleCard";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getCategories().map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const label = categoryNames[category];
  if (!label) return {};
  return {
    title: `${label} — savjeti i iskustva`,
    description: `Svi članci o temi ${label.toLowerCase()} — vodič, iskustva, savjeti.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const label = categoryNames[category];
  if (!label) notFound();

  const posts = getPostsByCategory(category);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8 pb-6 border-b border-gray-100">
        <p className="text-xs uppercase tracking-widest text-[#c9756a] font-semibold mb-2">
          Kategorija
        </p>
        <h1
          className="text-3xl font-bold text-gray-900"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {label}
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          {posts.length} {posts.length === 1 ? "članak" : "članaka"}
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-sm">Uskoro...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
