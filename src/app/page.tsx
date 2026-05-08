"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Star, Sparkles, Heart } from "lucide-react";

const BOOKING_URL =
  "https://www.fresha.com/lvp/senorita-nail-salon-glen-osmond-road-parkside-znyE52";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: "easeOut" },
};

const services = [
  {
    title: "Manicure",
    desc: "From a classic buff-and-polish to a full acrylic set with nail art, our manicure menu has something for every occasion.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&auto=format&fit=crop",
    alt: "Manicure nail art",
  },
  {
    title: "Pedicure",
    desc: "Treat your feet to a deluxe pedicure — relaxing, restorative, and finished with a flawless shellac colour of your choice.",
    image:
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=800&q=80&auto=format&fit=crop",
    alt: "Luxury pedicure",
  },
  {
    title: "SNS & Gel",
    desc: "Long-lasting SNS dip powder and gel nail extensions for nails that stay beautiful week after week.",
    image:
      "https://images.unsplash.com/photo-1610992235683-e39abc5e8b44?w=800&q=80&auto=format&fit=crop",
    alt: "Gel and SNS nails",
  },
];

const highlights = [
  {
    icon: Sparkles,
    label: "Custom Nail Art",
    desc: "Mini masterpieces tailored to your style",
  },
  {
    icon: Star,
    label: "4.8 Star Rated",
    desc: "Loved by clients on Fresha",
  },
  {
    icon: Heart,
    label: "Relaxing Atmosphere",
    desc: "Spa-like comfort in every visit",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1800&q=85&auto=format&fit=crop"
          alt="Senorita Nail Salon — luxury nail care in Parkside Adelaide"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="text-white/70 text-xs tracking-[0.3em] uppercase mb-4">
              Parkside, Adelaide SA
            </p>
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              Where nails become
              <br />
              <em>mini masterpieces.</em>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-sm">
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
                className="px-8 py-4 text-sm tracking-wide text-white rounded-sm flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{ backgroundColor: "oklch(0.65 0.09 50)" }}
              >
                Book an Appointment
                <ArrowRight size={16} />
              </motion.a>
              <Link
                href="/services"
                className="px-8 py-4 text-sm tracking-wide text-white border border-white/40 rounded-sm hover:bg-white/10 transition-colors"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="bg-foreground text-background py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-background/10">
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex items-center gap-4 py-6 sm:py-0 sm:px-8 first:pl-0 last:pr-0"
            >
              <Icon size={22} style={{ color: "oklch(0.65 0.09 50)" }} />
              <div>
                <p className="text-sm font-medium text-background">{label}</p>
                <p className="text-xs text-background/50 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.65 0.09 50)" }}
          >
            Our Services
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group rounded-sm overflow-hidden border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                  }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm tracking-wide border-b pb-0.5 border-current hover:opacity-70 transition-opacity"
            style={{ color: "oklch(0.65 0.09 50)" }}
          >
            View full services &amp; pricing
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </section>

      {/* Salon feature section */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "oklch(0.94 0.012 55)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "oklch(0.65 0.09 50)" }}
            >
              The Senorita Experience
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
              A salon designed to make you feel beautiful
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Step into a world of contemporary glamour. Our space features rose
              gold statement lighting, plush leather massage pedicure chairs, and
              elegant geometric walls — every detail designed with you in mind.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Inspired by the feminine elegance of &ldquo;Se&ntilde;orita,&rdquo; we&rsquo;ve
              created a space that&rsquo;s polished, inviting, and genuinely
              welcoming. Come in for a treatment. Stay for the experience.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wide text-white rounded-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "oklch(0.65 0.09 50)" }}
            >
              Book Your Visit
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
              src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&q=85&auto=format&fit=crop"
              alt="Senorita Nail Salon interior — contemporary glam with rose gold chandelier"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <motion.div {...fadeUp} className="max-w-xl mx-auto">
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
            }}
          >
            Ready for your next set?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Book online in seconds with our Fresha booking system — instant
            confirmation, no waiting around.
          </p>
          <motion.a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-10 py-4 text-sm tracking-wide text-white rounded-sm"
            style={{ backgroundColor: "oklch(0.65 0.09 50)" }}
          >
            Book Now on Fresha
            <ArrowRight size={15} />
          </motion.a>
          <p className="text-xs text-muted-foreground mt-4">
            Or call us on{" "}
            <a href="tel:0426010970" className="underline hover:opacity-70">
              0426 010 970
            </a>
          </p>
        </motion.div>
      </section>
    </>
  );
}
