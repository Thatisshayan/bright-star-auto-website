import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";

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
    { label: "Why Us", href: "/#why-us" },
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
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "bg-black/40 backdrop-blur-sm"
        }`}
      >
        <div className="container flex items-center justify-between h-9 text-xs text-foreground/60">
          <div className="flex items-center gap-6">
            <a href="tel:+14166350812" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone size={12} />
              (416) 635-0812
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              51 Toro Road North, North York, ON
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
          <motion.a
            href="/"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.03 }}
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
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                whileHover={{ color: "oklch(68% 0.135 80)" }}
              >
                {link.label}
              </motion.a>
            ))}
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
                href="tel:+14166350812"
                className="flex items-center gap-2 text-sm text-foreground/70 pb-2 border-b border-white/10"
              >
                <Phone size={14} />
                (416) 635-0812
              </a>
              {navLinks.map((link, i) => (
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
              ))}
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
