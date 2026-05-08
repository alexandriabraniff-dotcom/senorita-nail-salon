"use client";

import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";

const BOOKING_URL =
  "https://www.fresha.com/lvp/senorita-nail-salon-glen-osmond-road-parkside-znyE52";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

type Service = {
  name: string;
  duration?: string;
  price: string;
};

type Category = {
  category: string;
  services: Service[];
};

const menu: Category[] = [
  {
    category: "Manicure",
    services: [
      { name: "Buff, Shape & Polish", duration: "1 hr", price: "$15" },
      { name: "Buff, Shape & Shellac", duration: "1 hr", price: "$35" },
      { name: "Full Set with Normal Polish", duration: "1 hr", price: "$50" },
      { name: "Full Set with Shellac", duration: "1 hr", price: "$60" },
      { name: "Refill with Shellac", duration: "1 hr", price: "$50" },
      {
        name: "Acrylic Full Set with Nail Art",
        duration: "1.5 hr",
        price: "From $85",
      },
    ],
  },
  {
    category: "Pedicure",
    services: [
      { name: "Buff, Shape & Polish", price: "$15" },
      { name: "Pedicure with Normal Polish", price: "$35" },
      { name: "Buff, Shape & Shellac", price: "$35" },
      { name: "Pedicure with Shellac", duration: "1 hr", price: "$50" },
      { name: "Deluxe Pedicure with Shellac", price: "$60" },
    ],
  },
  {
    category: "SNS / Dip Powder",
    services: [
      { name: "SNS with Tips", duration: "1 hr", price: "$55" },
      {
        name: "SNS on Natural Nails (Overlay)",
        duration: "45 min",
        price: "From $55",
      },
    ],
  },
  {
    category: "Gel & Extensions",
    services: [
      { name: "Gel Nail Extensions", price: "Price on consultation" },
      { name: "Hybrid Nails", price: "Price on consultation" },
    ],
  },
  {
    category: "Nail Art",
    services: [
      {
        name: "Custom Nail Art",
        price: "Price on consultation",
      },
    ],
  },
  {
    category: "For Him",
    services: [
      { name: "Men's Manicure", price: "Price on consultation" },
      { name: "Men's Pedicure", price: "Price on consultation" },
    ],
  },
  {
    category: "Removals",
    services: [{ name: "Removal", price: "$20" }],
  },
  {
    category: "Extras",
    services: [
      { name: "Fish Pedicure", price: "Price on consultation" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: "oklch(0.94 0.012 55)" }}
      >
        <motion.div {...fadeUp}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.65 0.09 50)" }}
          >
            Services &amp; Pricing
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
            }}
          >
            Our Menu
          </h1>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            From a simple polish to full custom nail art — we have a service
            for every occasion and every budget.
          </p>
        </motion.div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {menu.map((section, i) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: "easeOut" }}
            >
              <h2
                className="mb-5 pb-3 border-b border-border"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                }}
              >
                {section.category}
              </h2>
              <div className="flex flex-col gap-3">
                {section.services.map((svc) => (
                  <div
                    key={svc.name}
                    className="flex items-start justify-between gap-4 py-2"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {svc.name}
                      </p>
                      {svc.duration && (
                        <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                          <Clock size={11} />
                          {svc.duration}
                        </p>
                      )}
                    </div>
                    <span
                      className="text-sm font-medium shrink-0"
                      style={{ color: "oklch(0.65 0.09 50)" }}
                    >
                      {svc.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notes */}
        <motion.div
          {...fadeUp}
          className="mt-16 p-8 rounded-sm border border-border bg-card"
        >
          <h3
            className="mb-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              fontWeight: 400,
            }}
          >
            Good to know
          </h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Prices shown are starting prices and may vary based on nail length, design complexity, and condition.</li>
            <li>Gift cards are available — the perfect treat for someone special.</li>
            <li>Group bookings welcome — contact us to arrange.</li>
            <li>All services can be booked instantly online via Fresha.</li>
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} className="text-center mt-14">
          <p className="text-muted-foreground mb-6">
            Ready to book? Choose your service and pick a time that suits you.
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
            Book on Fresha
            <ArrowRight size={15} />
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
