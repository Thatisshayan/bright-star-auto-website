import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import { BUSINESS } from "@shared/const";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Reviews", href: "/#reviews" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 w-full z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Utility bar - phone + address, desktop only, condensed */}
      <div
        className={`hidden md:block border-b border-white/10 transition-all duration-300 ${
          isScrolled
            ? "h-0 opacity-0 overflow-hidden"
            : "bg-black/40 backdrop-blur-sm"
        }`}
      >
        <div className="container flex items-center justify-between h-9 text-xs text-foreground/60">
          <div className="flex items-center gap-6">
            <a
              href={BUSINESS.phones[0].href}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone size={12} />
              {BUSINESS.phones[0].display}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {BUSINESS.address.street}, {BUSINESS.address.city},{" "}
              {BUSINESS.address.region}
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            Mon&ndash;Fri 9-6 · Sat 9-4
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-transform hover:scale-[1.03]"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-primary/30 flex-shrink-0">
              <img
                src="/brand/logo.png"
                alt="Bright Star Auto"
                className="w-full h-full object-cover scale-125"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold text-white tracking-wide">
                BRIGHT STAR
              </span>
              <span className="text-[10px] font-semibold text-primary tracking-[0.25em]">
                AUTO BODYSHOP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="/#contact"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={16} />
            Book Now
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-card border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4 flex flex-col gap-4">
              <a
                href={BUSINESS.phones[0].href}
                className="flex items-center gap-2 text-sm text-foreground/70 pb-2 border-b border-white/10"
              >
                <Phone size={14} />
                {BUSINESS.phones[0].display}
              </a>
              {navLinks.map((link, i) =>
                link.href.startsWith("/#") ? (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ) : (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
              <motion.a
                href="/#contact"
                className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
