import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const BOOKING_URL =
  "https://www.fresha.com/lvp/senorita-nail-salon-glen-osmond-road-parkside-znyE52";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Image
            src="/logo.png"
            alt="Senorita Nails"
            width={60}
            height={60}
            className="h-14 w-auto object-contain brightness-0 invert"
          />
          <p className="text-sm leading-relaxed text-background/60 max-w-xs">
            Where nails become mini masterpieces. Experience luxury nail care in
            the heart of Parkside, Adelaide.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.instagram.com/senoritanailsandbeauty/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-background/60 hover:text-background transition-colors"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="https://www.facebook.com/SenoritaNailSalon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-background/60 hover:text-background transition-colors"
            >
              <FacebookIcon size={20} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-background text-sm font-medium tracking-widest uppercase">
            Contact
          </h3>
          <div className="flex flex-col gap-3 text-sm text-background/60">
            <div className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-background/40" />
              <span>90 Glen Osmond Rd, Parkside SA 5063</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={15} className="shrink-0 text-background/40" />
              <a href="tel:0426010970" className="hover:text-background transition-colors">
                0426 010 970
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} className="shrink-0 text-background/40" />
              <span>Mon–Fri from 9:30 AM &middot; Sat from 9:00 AM</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-background text-sm font-medium tracking-widest uppercase">
            Quick Links
          </h3>
          <nav className="flex flex-col gap-2 text-sm text-background/60">
            {[
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services & Pricing" },
              { href: "/gallery", label: "Gallery" },
              { href: "/find-us", label: "Find Us" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-background transition-colors"
              >
                {label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition-colors"
            >
              Book an Appointment
            </a>
          </nav>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-background/40">
          <span>© {new Date().getFullYear()} Senorita Nail Salon. All rights reserved.</span>
          <span>90 Glen Osmond Rd, Parkside SA 5063</span>
        </div>
      </div>
    </footer>
  );
}
