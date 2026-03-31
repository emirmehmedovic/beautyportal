import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "BeautyPortal — Savjeti, iskustva i recenzije za žene u BiH",
    template: "%s | BeautyPortal",
  },
  description:
    "Nezavisni beauty portal za žene u BiH i regiji. Savjeti o epilaciji, recenzije proizvoda, iskustva čitatelja.",
  metadataBase: new URL("https://beautyportal.ink"),
  openGraph: {
    type: "website",
    locale: "bs_BA",
    siteName: "BeautyPortal",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bs">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
