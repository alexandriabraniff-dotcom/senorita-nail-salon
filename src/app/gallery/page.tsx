"use client";

import Image from "next/image";
import { motion } from "motion/react";

const diamondTileLight = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23C9956C' stroke-width='0.6' stroke-opacity='0.14'/%3E%3C/svg%3E")`;

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const galleryImages = [
  {
    src: "/images/nails-01.jpg",
    alt: "Pink gel nails with white dot detail",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/nails-02.jpg",
    alt: "Gold stripe French tips",
    span: "col-span-1",
  },
  {
    src: "/images/nails-03.jpg",
    alt: "Burgundy glam nails with gold detail",
    span: "col-span-1",
  },
  {
    src: "/images/nails-04.jpg",
    alt: "Dark red nails with pearl accent",
    span: "col-span-1",
  },
  {
    src: "/images/nails-05.jpg",
    alt: "Terracotta nails with white leaf art",
    span: "col-span-1",
  },
  {
    src: "/images/nails-06.jpg",
    alt: "Dark red coffin nails",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/nails-07.jpg",
    alt: "French tips with heart nail art",
    span: "col-span-1",
  },
  {
    src: "/images/nails-08.jpg",
    alt: "Teal gel nails with silver detail",
    span: "col-span-1",
  },
  {
    src: "/images/nails-09.jpg",
    alt: "French manicure with glitter tips",
    span: "col-span-1",
  },
  {
    src: "/images/nails-10.jpg",
    alt: "Pink French tips with bow nail art",
    span: "col-span-1",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section
        className="relative py-20 px-6 text-center overflow-hidden"
        style={{ backgroundColor: "oklch(0.94 0.012 55)", backgroundImage: diamondTileLight }}
      >
        <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M0 0 L64 0 L0 64 Z" stroke="oklch(0.65 0.09 50 / 0.15)" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 rotate-180 pointer-events-none">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M0 0 L64 0 L0 64 Z" stroke="oklch(0.65 0.09 50 / 0.15)" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.65 0.09 50)" }}
          >
            Our Work
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
            }}
          >
            Gallery
          </h1>
          <div className="flex items-center justify-center gap-4 mt-5 max-w-xs mx-auto">
            <div className="flex-1 h-px" style={{ backgroundColor: "oklch(0.65 0.09 50)", opacity: 0.25 }} />
            <svg width="9" height="9" viewBox="0 0 9 9" style={{ color: "oklch(0.65 0.09 50)", opacity: 0.6 }}>
              <path d="M4.5 0 L9 4.5 L4.5 9 L0 4.5 Z" fill="currentColor" />
            </svg>
            <div className="flex-1 h-px" style={{ backgroundColor: "oklch(0.65 0.09 50)", opacity: 0.25 }} />
          </div>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            A glimpse into the art we create every day.
          </p>
          <div className="flex items-center justify-center gap-5 mt-5">
            <a
              href="https://www.instagram.com/senoritanailsandbeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm tracking-wide border-b pb-0.5 border-current hover:opacity-70 transition-opacity"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              <InstagramIcon size={15} />
              @senoritanailsandbeauty
            </a>
            <span style={{ color: "oklch(0.80 0.012 55)" }}>·</span>
            <a
              href="https://www.facebook.com/SenoritaNailSalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm tracking-wide border-b pb-0.5 border-current hover:opacity-70 transition-opacity"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              <FacebookIcon size={15} />
              Senorita Nail Salon
            </a>
          </div>
        </motion.div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-sm ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

      </section>
    </>
  );
}
