import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { categoryNames } from "@/lib/posts";

interface Props {
  post: PostMeta;
  variant?: "default" | "featured" | "compact";
}

export default function ArticleCard({ post, variant = "default" }: Props) {
  const href = `/${post.category}/${post.slug}`;
  const catLabel = categoryNames[post.category] || post.category;

  if (variant === "featured") {
    return (
      <Link href={href} className="group block">
        <article className="bg-[#faf8f6] rounded-xl p-7 hover:bg-[#f0dbd8] transition-colors duration-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c9756a]">
              {catLabel}
            </span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">{post.readTime}</span>
          </div>
          <h2
            className="text-2xl font-bold mb-3 group-hover:text-[#c9756a] transition-colors leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {post.description}
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-400">
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("bs-BA", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={href} className="group flex gap-4 py-4 border-b border-gray-100 last:border-0">
        <div className="flex-1 min-w-0">
          <span className="text-xs font-semibold text-[#c9756a] uppercase tracking-wide">
            {catLabel}
          </span>
          <h3 className="text-sm font-semibold mt-0.5 group-hover:text-[#c9756a] transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>
          <p className="text-xs text-gray-400 mt-1">{post.readTime}</p>
        </div>
      </Link>
    );
  }

  // default
  return (
    <Link href={href} className="group block">
      <article className="border border-gray-100 rounded-lg p-5 hover:border-[#c9756a] hover:shadow-sm transition-all duration-200">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#c9756a]">
            {catLabel}
          </span>
          <span className="text-xs text-gray-400">·</span>
          <span className="text-xs text-gray-400">{post.readTime}</span>
        </div>
        <h2 className="text-base font-bold mb-2 group-hover:text-[#c9756a] transition-colors leading-snug">
          {post.title}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {post.description}
        </p>
        <p className="text-xs text-gray-400 mt-3">{post.author}</p>
      </article>
    </Link>
  );
}
