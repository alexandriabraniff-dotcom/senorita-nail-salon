"use client";

import { motion } from "motion/react";
import { Phone, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react";

const BOOKING_URL =
  "https://www.fresha.com/lvp/senorita-nail-salon-glen-osmond-road-parkside-znyE52";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, ease: "easeOut" },
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

export default function FindUsPage() {
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
            Location &amp; Hours
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
            }}
          >
            Find Us
          </h1>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            We&rsquo;re located on Glen Osmond Road in Parkside — easy to find, with
            parking nearby.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Hours */}
          <motion.div {...fadeUp}>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                fontWeight: 400,
              }}
            >
              Hours of Operation
            </h2>
            <div className="space-y-0 border border-border rounded-sm overflow-hidden">
              {hours.map((h, i) => {
                const isToday = h.day === today;
                return (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center px-5 py-3.5 text-sm ${
                      i < hours.length - 1 ? "border-b border-border" : ""
                    } ${
                      isToday
                        ? "bg-foreground text-background"
                        : "bg-card hover:bg-muted/50 transition-colors"
                    }`}
                  >
                    <span className={isToday ? "font-medium" : ""}>{h.day}</span>
                    <span
                      className={isToday ? "text-background/80" : "text-muted-foreground"}
                    >
                      {h.time}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Today&rsquo;s hours are highlighted. Hours may vary on public holidays.
            </p>
          </motion.div>

          {/* Contact & location */}
          <motion.div
            {...fadeUp}
            className="flex flex-col gap-8"
          >
            <div>
              <h2
                className="mb-5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                }}
              >
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0"
                    style={{ color: "oklch(0.65 0.09 50)" }}
                  />
                  <div>
                    <p className="font-medium">Senorita Nail Salon</p>
                    <p className="text-muted-foreground">
                      90 Glen Osmond Rd, Parkside SA 5063
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone
                    size={17}
                    className="shrink-0"
                    style={{ color: "oklch(0.65 0.09 50)" }}
                  />
                  <a
                    href="tel:0426010970"
                    className="hover:underline transition-colors"
                  >
                    0426 010 970
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Instagram
                    size={17}
                    className="shrink-0"
                    style={{ color: "oklch(0.65 0.09 50)" }}
                  />
                  <a
                    href="https://www.instagram.com/senoritanailsandbeauty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    @senoritanailsandbeauty
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Facebook
                    size={17}
                    className="shrink-0"
                    style={{ color: "oklch(0.65 0.09 50)" }}
                  />
                  <a
                    href="https://www.facebook.com/SenoritaNailSalon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Senorita Nail Salon
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 400,
                }}
              >
                Book an Appointment
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                The easiest way to book is online through Fresha — instant
                confirmation, choose your preferred technician, and pay securely.
              </p>
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wide text-white rounded-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "oklch(0.65 0.09 50)" }}
              >
                Book on Fresha
                <ArrowRight size={15} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Map embed */}
        <motion.div
          {...fadeUp}
          className="mt-16 rounded-sm overflow-hidden border border-border h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.0!2d138.6193095!3d-34.9430217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c7a5b0000001%3A0x1!2s90+Glen+Osmond+Rd%2C+Parkside+SA+5063!5e0!3m2!1sen!2sau!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Senorita Nail Salon location map"
          />
        </motion.div>
      </section>
    </>
  );
}
