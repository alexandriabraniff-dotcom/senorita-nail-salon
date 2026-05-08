"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Instagram } from "lucide-react";

const BOOKING_URL =
  "https://www.fresha.com/lvp/senorita-nail-salon-glen-osmond-road-parkside-znyE52";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&auto=format&fit=crop",
    alt: "Custom nail art design",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1610992235683-e39abc5e8b44?w=800&q=80&auto=format&fit=crop",
    alt: "Gel nail extensions",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=800&q=80&auto=format&fit=crop",
    alt: "Pedicure treatment",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80&auto=format&fit=crop",
    alt: "Shellac manicure",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1598447068814-13b7ff5e6b20?w=800&q=80&auto=format&fit=crop",
    alt: "Acrylic nails with nail art",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?w=800&q=80&auto=format&fit=crop",
    alt: "SNS dip powder nails",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&auto=format&fit=crop&crop=top",
    alt: "French tips nail art",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1583943756691-a3efdd87a45e?w=800&q=80&auto=format&fit=crop",
    alt: "Luxury nail salon treatment",
    span: "col-span-1",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: "oklch(0.94 0.012 55)" }}
      >
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
          <p className="text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            A glimpse into the art we create every day. Follow us on Instagram
            for the latest nail inspo.
          </p>
          <a
            href="https://www.instagram.com/senoritanailsandbeauty/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-sm tracking-wide border-b pb-0.5 border-current hover:opacity-70 transition-opacity"
            style={{ color: "oklch(0.65 0.09 50)" }}
          >
            <Instagram size={15} />
            @senoritanailsandbeauty
          </a>
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

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-2 text-sm">
            See more of our work on Instagram
          </p>
          <a
            href="https://www.instagram.com/senoritanailsandbeauty/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wide text-white rounded-sm mt-2 transition-opacity hover:opacity-90"
            style={{ backgroundColor: "oklch(0.65 0.09 50)" }}
          >
            <Instagram size={15} />
            Follow @senoritanailsandbeauty
          </a>
        </motion.div>

        {/* Book CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Like what you see? Book your appointment today.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-wide border-b pb-0.5 border-current hover:opacity-70 transition-opacity"
            style={{ color: "oklch(0.65 0.09 50)" }}
          >
            Book on Fresha
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </section>
    </>
  );
}
