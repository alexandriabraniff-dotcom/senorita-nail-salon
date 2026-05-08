"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const BOOKING_URL =
  "https://www.fresha.com/lvp/senorita-nail-salon-glen-osmond-road-parkside-znyE52";

const diamondTileDark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23FAF7F4' stroke-width='0.5' stroke-opacity='0.07'/%3E%3C/svg%3E")`;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: "easeOut" },
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="relative overflow-hidden py-24 px-6 text-center"
        style={{
          backgroundColor: "oklch(0.12 0.008 40)",
          backgroundImage: diamondTileDark,
        }}
      >
        {/* Geometric corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M0 0 L64 0 L0 64 Z" stroke="rgba(250,247,244,0.12)" strokeWidth="1" fill="none"/>
            <path d="M0 0 L32 0 L0 32 Z" stroke="rgba(250,247,244,0.08)" strokeWidth="0.6" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 rotate-180 pointer-events-none">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M0 0 L64 0 L0 64 Z" stroke="rgba(250,247,244,0.12)" strokeWidth="1" fill="none"/>
            <path d="M0 0 L32 0 L0 32 Z" stroke="rgba(250,247,244,0.08)" strokeWidth="0.6" fill="none"/>
          </svg>
        </div>
        <div className="relative z-10">
          <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "oklch(0.65 0.09 50)" }}>
            Our Story
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "oklch(0.96 0.006 60)",
            }}
          >
            About Senorita Nails
          </h1>
          {/* Diamond divider */}
          <div className="flex items-center justify-center gap-4 mt-6 max-w-xs mx-auto">
            <div className="flex-1 h-px" style={{ backgroundColor: "oklch(0.98 0.008 60)", opacity: 0.2 }} />
            <svg width="10" height="10" viewBox="0 0 10 10" style={{ color: "oklch(0.65 0.09 50)", opacity: 0.7 }}>
              <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="currentColor" />
            </svg>
            <div className="flex-1 h-px" style={{ backgroundColor: "oklch(0.98 0.008 60)", opacity: 0.2 }} />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              Who We Are
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Nails taken to a new level
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Senorita Nail Salon was born from a passion for turning nails into
              art. Located at 90 Glen Osmond Road in Parkside, we&rsquo;ve built a
              space where luxury meets creativity — where every client leaves
              feeling polished, pampered, and proud of their nails.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The name &ldquo;Se&ntilde;orita&rdquo; captures the spirit of our brand — feminine,
              confident, and a little glamorous. We believe every visit should
              feel like a treat, not just a chore.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you&rsquo;re after a simple buff and polish, a full set of
              acrylics, a relaxing pedicure, or intricate custom nail art — our
              team is here to make it happen.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wide text-white rounded-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "oklch(0.65 0.09 50)" }}
            >
              Book with Us
              <ArrowRight size={15} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-[420px] rounded-sm overflow-hidden"
          >
            <Image
              src="/images/nails-10.jpg"
              alt="Nail art at Senorita"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.65 0.09 50)" }}
          >
            Our Team
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
            }}
          >
            Skilled. Passionate. Detail-obsessed.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
            Our nail technicians bring both artistry and precision to every
            appointment, ensuring you leave with nails you love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {["Khadija", "Mani"].map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="text-center"
            >
              <div
                className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-2xl"
                style={{
                  backgroundColor: "oklch(0.65 0.09 50)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                }}
              >
                {name[0]}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                }}
              >
                {name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Nail Technician
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
