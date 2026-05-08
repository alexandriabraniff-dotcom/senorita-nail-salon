"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Phone, MapPin } from "lucide-react";

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

const BOOKING_URL =
  "https://www.fresha.com/lvp/senorita-nail-salon-glen-osmond-road-parkside-znyE52";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=90+Glen+Osmond+Rd+Parkside+SA+5063";

// ── Textures ──────────────────────────────────────────────────
// Diamond tile — faint rose gold, inspired by the 3D wall panels
const diamondTileLight = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23C9956C' stroke-width='0.6' stroke-opacity='0.14'/%3E%3C/svg%3E")`;

// Diamond tile — faint light on dark, inspired by the dark geometric wall panels
const diamondTileDark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23FAF7F4' stroke-width='0.5' stroke-opacity='0.07'/%3E%3C/svg%3E")`;

// ── Decorative components ──────────────────────────────────────
function DiamondDivider({ light = false }: { light?: boolean }) {
  const color = light ? "oklch(0.98 0.008 60)" : "oklch(0.65 0.09 50)";
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <div
        className="flex-1 h-px"
        style={{ backgroundColor: color, opacity: 0.2 }}
      />
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        style={{ color, opacity: 0.5 }}
      >
        <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="currentColor" />
      </svg>
      <div
        className="flex-1 h-px"
        style={{ backgroundColor: color, opacity: 0.2 }}
      />
    </div>
  );
}

function GeometricCorner({
  position,
  light = false,
}: {
  position: "tl" | "tr" | "bl" | "br";
  light?: boolean;
}) {
  const color = light ? "rgba(250,247,244,0.12)" : "oklch(0.65 0.09 50 / 0.12)";
  const posMap = {
    tl: "top-0 left-0",
    tr: "top-0 right-0 rotate-90",
    bl: "bottom-0 left-0 -rotate-90",
    br: "bottom-0 right-0 rotate-180",
  };
  return (
    <div
      className={`absolute ${posMap[position]} w-16 h-16 pointer-events-none`}
    >
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 0 L64 0 L0 64 Z"
          fill="none"
          stroke={color}
          strokeWidth="1"
        />
        <path
          d="M0 0 L32 0 L0 32 Z"
          fill="none"
          stroke={color}
          strokeWidth="0.6"
        />
      </svg>
    </div>
  );
}

const hours = [
  { day: "Monday", time: "9:30 AM – 5:30 PM" },
  { day: "Tuesday", time: "9:30 AM – 5:30 PM" },
  { day: "Wednesday", time: "9:30 AM – 5:30 PM" },
  { day: "Thursday", time: "9:30 AM – 8:00 PM" },
  { day: "Friday", time: "9:30 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Sunday", time: "10:00 AM – 5:00 PM" },
];

const today = new Date().toLocaleDateString("en-AU", { weekday: "long" });

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: "oklch(0.98 0.008 60)",
          backgroundImage: diamondTileLight,
        }}
      >
        <GeometricCorner position="tl" />
        <GeometricCorner position="br" />

        {/* Watermark "SN" */}
        <div
          className="absolute inset-0 flex items-center justify-start pl-8 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(14rem, 30vw, 26rem)",
              fontWeight: 700,
              lineHeight: 1,
              color: "oklch(0.65 0.09 50)",
              opacity: 0.04,
              letterSpacing: "-0.05em",
            }}
          >
            SN
          </span>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p
              className="text-xs tracking-[0.35em] uppercase mb-7"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              Senorita Nail Salon
            </p>
            <h1
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 6.5vw, 5.2rem)",
                fontWeight: 300,
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
              }}
            >
              Beauty lives
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "oklch(0.65 0.09 50)",
                }}
              >
                in the details.
              </em>
            </h1>

            <div className="my-7 max-w-xs">
              <DiamondDivider />
            </div>

            <p
              className="leading-relaxed mb-10 max-w-sm"
              style={{ color: "oklch(0.50 0.02 50)", fontSize: "1rem" }}
            >
              Luxury nail care in a stunning, contemporary salon. Manicures,
              pedicures, gel, SNS, and custom nail art — all in one beautiful
              Parkside space.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 text-sm tracking-widest uppercase text-white rounded-none flex items-center gap-3"
                style={{ backgroundColor: "oklch(0.65 0.09 50)" }}
              >
                Book Now
                <ArrowRight size={14} />
              </motion.a>
              <Link
                href="/services"
                className="px-8 py-4 text-sm tracking-widest uppercase border border-foreground/20 rounded-none hover:border-foreground/50 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* Right — image with geometric frame */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.12 }}
            className="relative"
          >
            {/* Offset decorative border behind */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full"
              style={{
                border: "1.5px solid oklch(0.65 0.09 50)",
                opacity: 0.4,
              }}
            />
            {/* Tiny diamond accent top-left of image */}
            <div
              className="absolute -top-3 -left-3 z-20"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M9 0 L18 9 L9 18 L0 9 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="relative h-[440px] md:h-[540px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=85&auto=format&fit=crop"
                alt="Luxury nail art — Senorita Nail Salon Parkside Adelaide"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT — dark geometric section ───────────────────── */}
      <section
        className="relative overflow-hidden py-28 px-6"
        style={{
          backgroundColor: "oklch(0.12 0.008 40)",
          backgroundImage: diamondTileDark,
        }}
      >
        <GeometricCorner position="tr" light />
        <GeometricCorner position="bl" light />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative h-[400px] overflow-hidden"
          >
            {/* Subtle diamond border on image */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 0 1.5px oklch(0.65 0.09 50 / 0.3)",
              }}
            />
            <Image
              src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&q=85&auto=format&fit=crop"
              alt="Senorita Nail Salon interior"
              fill
              className="object-cover object-center"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p
              className="text-xs tracking-[0.35em] uppercase mb-5"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              About Us
            </p>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: "oklch(0.96 0.006 60)",
              }}
            >
              A salon built for
              <br />
              <em style={{ color: "oklch(0.65 0.09 50)" }}>women who notice.</em>
            </h2>

            <div className="my-6">
              <DiamondDivider light />
            </div>

            <p
              className="leading-relaxed mb-4 text-sm"
              style={{ color: "oklch(0.70 0.01 50)" }}
            >
              Senorita was designed from the floor up to be extraordinary. Our
              3D geometric walls, sculptural rose gold chandelier, and plush
              caramel leather pedicure chairs create an environment where
              every detail has been considered — because our clients are the
              kind of women who notice.
            </p>
            <p
              className="leading-relaxed mb-8 text-sm"
              style={{ color: "oklch(0.70 0.01 50)" }}
            >
              From a simple buff and polish to intricate custom nail art, our
              team brings artistry and precision to every appointment. You
              arrive as you are. You leave flawless.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase border-b pb-0.5 border-current transition-opacity hover:opacity-70"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              Our Story
              <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES + GALLERY cards ──────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{
          backgroundColor: "oklch(0.98 0.008 60)",
          backgroundImage: diamondTileLight,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5"
          >
            <p
              className="text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              Explore
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              Every visit, a pampering experience
            </h2>
          </motion.div>

          <div className="mb-12">
            <DiamondDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                href: "/services",
                eyebrow: "Menu",
                label: "Services & Pricing",
                desc: "Manicures, pedicures, SNS, gel, nail art — with clear pricing for every service.",
                image:
                  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80&auto=format&fit=crop",
                alt: "Nail art services",
              },
              {
                href: "/gallery",
                eyebrow: "Portfolio",
                label: "Gallery",
                desc: "From classic French tips to intricate custom designs — see the art we create every day.",
                image:
                  "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=900&q=80&auto=format&fit=crop",
                alt: "Nail gallery",
              },
            ].map((card, i) => (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                className="group relative overflow-hidden h-80 cursor-pointer"
              >
                <Link href={card.href}>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300" />
                  {/* Rose gold border reveal on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 0 2px oklch(0.65 0.09 50 / 0.6)",
                    }}
                  />
                  {/* Diamond corner accent */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M6 0 L12 6 L6 12 L0 6 Z"
                        fill="oklch(0.65 0.09 50)"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <p className="text-xs tracking-[0.3em] uppercase mb-1 text-white/50">
                      {card.eyebrow}
                    </p>
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.75rem",
                        fontWeight: 400,
                      }}
                    >
                      {card.label}
                    </h3>
                    <p className="text-sm text-white/65 leading-relaxed max-w-xs">
                      {card.desc}
                    </p>
                    <p
                      className="text-xs tracking-widest uppercase mt-4 flex items-center gap-2"
                      style={{ color: "oklch(0.65 0.09 50)" }}
                    >
                      Explore <ArrowRight size={12} />
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIND US ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24 px-6"
        style={{
          backgroundColor: "oklch(0.16 0.008 40)",
          backgroundImage: diamondTileDark,
        }}
      >
        <GeometricCorner position="tl" light />
        <GeometricCorner position="br" light />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5"
          >
            <p
              className="text-xs tracking-[0.35em] uppercase mb-3"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              Visit Us
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "oklch(0.96 0.006 60)",
              }}
            >
              Find Us
            </h2>
          </motion.div>

          <div className="mb-12">
            <DiamondDivider light />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <h3
                className="mb-5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: "oklch(0.96 0.006 60)",
                }}
              >
                Hours of Operation
              </h3>
              <div
                className="overflow-hidden"
                style={{ border: "1px solid oklch(0.65 0.09 50 / 0.2)" }}
              >
                {hours.map((h, i) => {
                  const isToday = h.day === today;
                  return (
                    <div
                      key={h.day}
                      className={`flex items-center gap-3 px-5 py-3.5 text-sm ${
                        i < hours.length - 1 ? "border-b" : ""
                      }`}
                      style={{
                        borderColor: "oklch(0.65 0.09 50 / 0.12)",
                        backgroundColor: isToday
                          ? "oklch(0.65 0.09 50 / 0.12)"
                          : "transparent",
                      }}
                    >
                      {/* Day */}
                      <span
                        className="w-24 shrink-0"
                        style={{
                          color: isToday
                            ? "oklch(0.65 0.09 50)"
                            : "oklch(0.72 0.01 50)",
                          fontWeight: isToday ? 500 : 400,
                        }}
                      >
                        {h.day}
                      </span>

                      {/* Today pill */}
                      {isToday && (
                        <span
                          className="text-xs px-2 py-0.5 shrink-0 tracking-wide"
                          style={{
                            backgroundColor: "oklch(0.65 0.09 50)",
                            color: "oklch(0.98 0.004 60)",
                            fontSize: "0.6rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          Today
                        </span>
                      )}

                      {/* Dotted leader */}
                      <span
                        className="flex-1 border-b border-dashed"
                        style={{ borderColor: "oklch(0.65 0.09 50 / 0.15)" }}
                      />

                      {/* Time */}
                      <span
                        className="shrink-0 tabular-nums"
                        style={{
                          color: isToday
                            ? "oklch(0.92 0.006 60)"
                            : "oklch(0.50 0.01 50)",
                          fontSize: "0.8rem",
                        }}
                      >
                        {h.time}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p
                className="text-xs mt-3"
                style={{ color: "oklch(0.45 0.01 50)" }}
              >
                Today highlighted. Hours may vary on public holidays.
              </p>
            </motion.div>

            {/* Contact + map */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: "oklch(0.96 0.006 60)",
                }}
              >
                Contact &amp; Location
              </h3>

              <div className="space-y-4 text-sm">
                {[
                  {
                    icon: MapPin,
                    content: (
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        style={{ color: "oklch(0.75 0.01 50)" }}
                      >
                        90 Glen Osmond Rd, Parkside SA 5063
                      </a>
                    ),
                  },
                  {
                    icon: Phone,
                    content: (
                      <a
                        href="tel:0426010970"
                        className="hover:underline"
                        style={{ color: "oklch(0.75 0.01 50)" }}
                      >
                        0426 010 970
                      </a>
                    ),
                  },
                ].map(({ icon: Icon, content }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon
                      size={15}
                      className="mt-0.5 shrink-0"
                      style={{ color: "oklch(0.65 0.09 50)" }}
                    />
                    {content}
                  </div>
                ))}

                {/* Social media links */}
                <div className="flex gap-4 pt-1">
                  <a
                    href="https://www.instagram.com/senoritanailsandbeauty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                    style={{ color: "oklch(0.75 0.01 50)" }}
                  >
                    <span style={{ color: "oklch(0.65 0.09 50)" }}>
                      <InstagramIcon size={15} />
                    </span>
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/SenoritaNailSalon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                    style={{ color: "oklch(0.75 0.01 50)" }}
                  >
                    <span style={{ color: "oklch(0.65 0.09 50)" }}>
                      <FacebookIcon size={15} />
                    </span>
                    Facebook
                  </a>
                </div>
              </div>

              {/* Map */}
              <div
                className="overflow-hidden h-56 relative"
                style={{ border: "1px solid oklch(0.65 0.09 50 / 0.25)" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.0!2d138.6193095!3d-34.9430217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c7a5b0000001%3A0x1!2s90+Glen+Osmond+Rd%2C+Parkside+SA+5063!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Senorita Nail Salon location"
                />
              </div>

              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-widest uppercase text-white self-start transition-opacity hover:opacity-90"
                style={{ backgroundColor: "oklch(0.65 0.09 50)" }}
              >
                Book Your Visit
                <ArrowRight size={13} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
