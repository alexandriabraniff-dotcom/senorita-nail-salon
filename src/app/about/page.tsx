"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const BOOKING_URL =
  "https://www.fresha.com/lvp/senorita-nail-salon-glen-osmond-road-parkside-znyE52";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: "easeOut" },
};

const interiorFeatures = [
  {
    title: "Statement Lighting",
    desc: "A sculptural rose gold chandelier crowns the space, casting a warm, flattering glow over every treatment.",
  },
  {
    title: "Plush Pedicure Chairs",
    desc: "Caramel leather massage chairs line our pedicure station — designed for maximum comfort during your treatment.",
  },
  {
    title: "Geometric Walls",
    desc: "3D diamond panel walls create a stunning visual contrast — the perfect backdrop for your post-appointment photo.",
  },
  {
    title: "Elegant Reception",
    desc: "A curved white reception desk with a dark countertop sets the tone for a sleek, modern welcome experience.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1600&q=85&auto=format&fit=crop"
          alt="Senorita Nail Salon interior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-3">
            Our Story
          </p>
          <h1
            className="text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
            }}
          >
            About Senorita Nails
          </h1>
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
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=85&auto=format&fit=crop"
              alt="Nail art at Senorita"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* Interior features */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "oklch(0.94 0.012 55)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              The Space
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
              }}
            >
              Contemporary glam, designed for you
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
              Every corner of Senorita has been thoughtfully designed to create
              a relaxing, Instagram-worthy environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interiorFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="bg-card rounded-sm p-8 border border-border"
              >
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
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
