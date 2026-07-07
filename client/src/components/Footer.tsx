import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Phone, Mail, Navigation } from "lucide-react";

const ADDRESS = "51 Toro Road North, Unit 3, North York, ON M3J 2A4";
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=15&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />

      {/* Map */}
      <div className="relative z-10 h-72 md:h-80">
        <iframe
          title="Bright Star Auto location"
          src={MAP_EMBED_SRC}
          className="w-full h-full grayscale-[60%] contrast-[1.1] invert-[0.92] opacity-90"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-card via-transparent to-transparent" />
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-primary/50 transition-all text-sm"
        >
          <Navigation size={16} />
          Get Directions
        </a>
      </div>

      <div className="container relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img src="/brand/logo.png" alt="Bright Star Auto" className="w-full h-full object-cover scale-125" />
              </div>
              <span className="font-display font-bold text-white">BRIGHT STAR</span>
            </div>
            <p className="text-sm text-foreground/60">
              Collision repair, paint refinishing, and restoration for North York drivers — done right, insurance-approved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4 pb-2 border-b border-primary/20 inline-block">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Reviews", href: "/#reviews" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4 pb-2 border-b border-primary/20 inline-block">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Collision Repair",
                "Paint & Refinishing",
                "Structural Repair",
                "Mechanical & Electrical",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4 pb-2 border-b border-primary/20 inline-block">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+14166350812"
                className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                +1 (416) 635-0812
              </a>
              <a
                href="mailto:Brightstarautoltd@gmail.com"
                className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                Brightstarautoltd@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-sm text-foreground/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} Bright Star Auto Ltd. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* TODO: replace with real social URLs before launch — these are
                placeholders until the business owner supplies Facebook,
                Instagram, and LinkedIn profile links. */}
            {[
              { icon: Facebook, href: undefined, label: "Facebook (coming soon)" },
              { icon: Instagram, href: undefined, label: "Instagram (coming soon)" },
              { icon: Linkedin, href: undefined, label: "LinkedIn (coming soon)" },
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  aria-disabled="true"
                  tabIndex={-1}
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary/40 cursor-not-allowed transition-all"
                  title="Coming soon"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Legal */}
        <motion.div
          className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center md:justify-end gap-4 text-xs text-foreground/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="#" className="hover:text-foreground/70 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-foreground/70 transition-colors">
            Terms of Service
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
