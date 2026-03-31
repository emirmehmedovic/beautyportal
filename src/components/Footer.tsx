import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 mt-20 py-10 bg-[#faf8f6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <Link href="/">
              <span
                className="text-lg font-bold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                beauty<span style={{ color: "#c9756a" }}>portal</span>
              </span>
            </Link>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Nezavisni beauty portal za žene u BiH i regiji. Savjeti, iskustva,
              recenzije.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
            <Link href="/epilacija" className="hover:text-[#c9756a] transition-colors">
              Epilacija
            </Link>
            <Link href="/iskustva" className="hover:text-[#c9756a] transition-colors">
              Iskustva
            </Link>
            <Link href="/financije" className="hover:text-[#c9756a] transition-colors">
              Novac & Ljepota
            </Link>
            <Link href="/faq" className="hover:text-[#c9756a] transition-colors">
              FAQ
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© {year} beautyportal.ink — Sva prava pridržana</p>
          <p>
            Sadržaj je informativne prirode i ne zamjenjuje savjet stručnjaka.
          </p>
        </div>
      </div>
    </footer>
  );
}
