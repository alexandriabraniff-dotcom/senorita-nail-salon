"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#find-us", label: "Find Us" },
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
          <div className="flex items-center gap-3 ml-1">
            <a
              href="https://www.instagram.com/senoritanailsandbeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              style={{ color: "oklch(0.65 0.09 50)" }}
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="https://www.facebook.com/SenoritaNailSalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              style={{ color: "oklch(0.65 0.09 50)" }}
              aria-label="Facebook"
            >
              <FacebookIcon size={16} />
            </a>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 px-5 py-2.5 text-sm tracking-wide text-white rounded-sm transition-opacity hover:opacity-90"
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
              <div className="flex items-center gap-4 pt-1">
                <a
                  href="https://www.instagram.com/senoritanailsandbeauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
                  style={{ color: "oklch(0.65 0.09 50)" }}
                >
                  <InstagramIcon size={16} />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/SenoritaNailSalon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
                  style={{ color: "oklch(0.65 0.09 50)" }}
                >
                  <FacebookIcon size={16} />
                  Facebook
                </a>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 px-5 py-3 text-sm tracking-wide text-white text-center rounded-sm"
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
