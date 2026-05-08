"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";

const BOOKING_URL =
  "https://www.fresha.com/lvp/senorita-nail-salon-glen-osmond-road-parkside-znyE52";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=90+Glen+Osmond+Rd+Parkside+SA+5063";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: "easeOut" },
};

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
      {/* ── HERO — split layout ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            Where nails become
            <br />
            <em>mini masterpieces.</em>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
            Luxury nail care in a stunning, contemporary salon. Manicures,
            pedicures, gel, SNS, and custom nail art — all in one beautiful
            space.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-sm tracking-wide text-white rounded-sm flex items-center gap-2"
              style={{ backgroundColor: "oklch(0.65 0.09 50)" }}
            >
              Book an Appointment
              <ArrowRight size={15} />
            </motion.a>
            <Link
              href="/services"
              className="px-8 py-4 text-sm tracking-wide border border-foreground/20 rounded-sm hover:border-foreground/40 transition-colors"
            >
              View Services
            </Link>
          </div>
        </motion.div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative h-[420px] md:h-[520px] rounded-sm overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=85&auto=format&fit=crop"
            alt="Luxury nail art — Senorita Nail Salon Parkside Adelaide"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "oklch(0.94 0.012 55)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-[380px] rounded-sm overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&q=85&auto=format&fit=crop"
              alt="Senorita Nail Salon interior"
              fill
              className="object-cover object-center"
            />
          </motion.div>

          <motion.div {...fadeUp}>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              About Us
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
              Nail care taken to a new level
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Senorita Nail Salon is a contemporary glam space in Parkside,
              designed to make every visit feel like a treat. From a classic
              polish to full custom nail art, our team brings both artistry and
              precision to every appointment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Step inside to rose gold statement lighting, plush leather massage
              pedicure chairs, and elegant geometric walls — every detail
              thoughtfully designed with you in mind.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm tracking-wide border-b pb-0.5 border-current hover:opacity-70 transition-opacity"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              Read more about us
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES & GALLERY teasers ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.65 0.09 50)" }}
          >
            What We Offer
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
            }}
          >
            Every visit, a pampering experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              href: "/services",
              label: "Services & Pricing",
              desc: "Manicures, pedicures, SNS, gel, nail art, removals and more — with clear pricing for every service.",
              image:
                "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80&auto=format&fit=crop",
              alt: "Nail art services",
            },
            {
              href: "/gallery",
              label: "Gallery",
              desc: "See the nail art we create every day — from classic French tips to intricate custom designs.",
              image:
                "https://images.unsplash.com/photo-1610992235683-e39abc5e8b44?w=900&q=80&auto=format&fit=crop",
              alt: "Nail gallery",
            },
          ].map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative rounded-sm overflow-hidden h-72 cursor-pointer"
            >
              <Link href={card.href}>
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7 text-white">
                  <p className="text-xs tracking-widest uppercase mb-1 text-white/60">
                    Explore
                  </p>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                    }}
                  >
                    {card.label}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed max-w-xs">
                    {card.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FIND US ── */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "oklch(0.94 0.012 55)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              Visit Us
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
              }}
            >
              Find Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Hours */}
            <motion.div {...fadeUp}>
              <h3
                className="mb-5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                }}
              >
                Hours of Operation
              </h3>
              <div className="border border-border rounded-sm overflow-hidden">
                {hours.map((h, i) => {
                  const isToday = h.day === today;
                  return (
                    <div
                      key={h.day}
                      className={`flex justify-between items-center px-5 py-3 text-sm ${
                        i < hours.length - 1 ? "border-b border-border" : ""
                      } ${
                        isToday
                          ? "bg-foreground text-background"
                          : "bg-card hover:bg-muted/50 transition-colors"
                      }`}
                    >
                      <span className={isToday ? "font-medium" : ""}>
                        {h.day}
                      </span>
                      <span
                        className={
                          isToday ? "text-background/75" : "text-muted-foreground"
                        }
                      >
                        {h.time}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Today highlighted. Hours may vary on public holidays.
              </p>
            </motion.div>

            {/* Contact + map */}
            <motion.div
              {...fadeUp}
              className="flex flex-col gap-6"
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                }}
              >
                Contact &amp; Location
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "oklch(0.65 0.09 50)" }}
                  />
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline leading-snug"
                  >
                    90 Glen Osmond Rd, Parkside SA 5063
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    size={16}
                    className="shrink-0"
                    style={{ color: "oklch(0.65 0.09 50)" }}
                  />
                  <a href="tel:0426010970" className="hover:underline">
                    0426 010 970
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock
                    size={16}
                    className="shrink-0"
                    style={{ color: "oklch(0.65 0.09 50)" }}
                  />
                  <span className="text-muted-foreground">
                    Mon–Fri from 9:30 AM &middot; Sat from 9:00 AM &middot; Sun from 10:00 AM
                  </span>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-sm overflow-hidden border border-border h-64 mt-2">
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
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wide text-white rounded-sm self-start transition-opacity hover:opacity-90"
                style={{ backgroundColor: "oklch(0.65 0.09 50)" }}
              >
                Book Your Visit
                <ArrowRight size={14} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
