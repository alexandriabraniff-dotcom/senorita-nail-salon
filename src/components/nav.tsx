"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/find-us", label: "Find Us" },
];

const BOOKING_URL =
  "https://www.fresha.com/lvp/senorita-nail-salon-glen-osmond-road-parkside-znyE52";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-background border-b border-border"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Senorita Nails logo"
            width={48}
            height={48}
            className="h-12 w-auto object-contain"
          />
          <span
            className="hidden sm:block text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-sans)", color: "oklch(0.5 0.02 50)" }}
          >
            Senorita Nails
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                pathname === href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2.5 text-sm tracking-wide text-white rounded-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "oklch(0.65 0.09 50)" }}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm tracking-wide py-1 ${
                    pathname === href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 text-sm tracking-wide text-white text-center rounded-sm"
                style={{ backgroundColor: "oklch(0.65 0.09 50)" }}
              >
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
