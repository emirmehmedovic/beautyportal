import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface PostMeta {
  slug: string;
  category: string;
  title: string;
  metaTitle?: string;
  metaDescription: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  keywords: string[];
  featured?: boolean;
  coverImage?: string;
}

export interface Post extends PostMeta {
  content: string;
}

// Get all categories
export function getCategories(): string[] {
  return fs.readdirSync(contentDir).filter((f) =>
    fs.statSync(path.join(contentDir, f)).isDirectory()
  );
}

// Get all posts across all categories
export function getAllPosts(): PostMeta[] {
  const categories = getCategories();
  const posts: PostMeta[] = [];

  for (const category of categories) {
    const categoryDir = path.join(contentDir, category);
    const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".mdx"));

    for (const file of files) {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(categoryDir, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);

      posts.push({
        slug,
        category,
        title: data.title,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription || data.description,
        description: data.description,
        author: data.author,
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
        readTime: data.readTime,
        keywords: data.keywords || [],
        featured: data.featured || false,
        coverImage: data.coverImage,
      });
    }
  }

  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

// Get posts by category
export function getPostsByCategory(category: string): PostMeta[] {
  const categoryDir = path.join(contentDir, category);

  if (!fs.existsSync(categoryDir)) return [];

  const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(categoryDir, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);

      return {
        slug,
        category,
        title: data.title,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription || data.description,
        description: data.description,
        author: data.author,
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
        readTime: data.readTime,
        keywords: data.keywords || [],
        featured: data.featured || false,
        coverImage: data.coverImage,
      } as PostMeta;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

// Get single post with content
export function getPost(category: string, slug: string): Post | null {
  const filePath = path.join(contentDir, category, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    category,
    title: data.title,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription || data.description,
    description: data.description,
    author: data.author,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    readTime: data.readTime,
    keywords: data.keywords || [],
    featured: data.featured || false,
    coverImage: data.coverImage,
    content,
  };
}

// Get all slugs for static generation
export function getAllSlugs(): { category: string; slug: string }[] {
  const categories = getCategories();
  const slugs: { category: string; slug: string }[] = [];

  for (const category of categories) {
    const categoryDir = path.join(contentDir, category);
    const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      slugs.push({ category, slug: file.replace(/\.mdx$/, "") });
    }
  }

  return slugs;
}

// Category display names
export const categoryNames: Record<string, string> = {
  epilacija: "Epilacija",
  iskustva: "Iskustva & Recenzije",
  financije: "Novac & Ljepota",
};
