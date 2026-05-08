import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Senorita Nail Salon | Parkside, Adelaide SA",
    template: "%s | Senorita Nail Salon",
  },
  description:
    "Luxury nail salon in Parkside, Adelaide. Expert manicures, pedicures, gel, SNS, and nail art in a beautiful, contemporary space. Book online with Fresha.",
  keywords: [
    "nail salon Parkside",
    "nail salon Adelaide",
    "manicure Adelaide",
    "pedicure Adelaide",
    "gel nails Adelaide",
    "SNS nails Adelaide",
    "Senorita Nail Salon",
    "nail art Adelaide",
  ],
  openGraph: {
    title: "Senorita Nail Salon | Parkside, Adelaide SA",
    description:
      "Luxury nail salon in Parkside, Adelaide. Expert manicures, pedicures, gel, SNS, and nail art.",
    type: "website",
    locale: "en_AU",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Creator banner */}
        <div
          style={{ backgroundColor: "oklch(0.65 0.09 50)" }}
          className="text-white text-center text-xs py-2 px-4"
        >
          Website created by <strong>Alexandria Braniff</strong> &mdash;{" "}
          <a
            href="mailto:alexandriabraniff@gmail.com"
            className="underline hover:opacity-80"
          >
            alexandriabraniff@gmail.com
          </a>
        </div>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
