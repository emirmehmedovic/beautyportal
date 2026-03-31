import { getAllPosts } from "@/lib/posts";
import ArticleCard from "@/components/ArticleCard";

export default function HomePage() {
  const allPosts = getAllPosts();
  const featured = allPosts.find((p) => p.featured) || allPosts[0];
  const rest = allPosts.filter((p) => p.slug !== featured?.slug).slice(0, 8);
  const recent = allPosts.slice(0, 4);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Masthead */}
      <div className="text-center mb-10 pb-8 border-b border-gray-100">
        <p className="text-xs uppercase tracking-widest text-[#c9756a] font-semibold mb-3">
          Nezavisni beauty portal
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          beauty<span style={{ color: "#c9756a" }}>portal</span>
        </h1>
        <p className="text-gray-500 mt-3 text-sm">
          Savjeti, iskustva i iskrene recenzije — za žene koje ne vole uljepšavati istinu
        </p>
      </div>

      {/* Featured article */}
      {featured && (
        <section className="mb-10">
          <ArticleCard post={featured} variant="featured" />
        </section>
      )}

      {/* Grid — remaining articles */}
      {rest.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-5">
            Svi članci
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Popular topics strip */}
      <section className="bg-[#faf8f6] rounded-xl p-6">
        <h2
          className="text-lg font-bold mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Popularne teme
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "IPL epilacija",
            "Kućna epilacija",
            "Ice Cool Pro",
            "Gornja usna",
            "Troškovi salona",
            "IPL iskustva",
            "Trajno uklanjanje dlaka",
            "Epilacija za početnike",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-8 text-center text-xs text-gray-400">
        <div>
          <div className="text-2xl font-bold text-gray-700" style={{ fontFamily: "Georgia, serif" }}>14</div>
          <div>žena intervjuirano</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-700" style={{ fontFamily: "Georgia, serif" }}>10+</div>
          <div>objavljenih recenzija</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-700" style={{ fontFamily: "Georgia, serif" }}>0</div>
          <div>plaćenih reklama</div>
        </div>
      </div>
    </div>
  );
}
