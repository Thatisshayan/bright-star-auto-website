import { motion } from "framer-motion";
import { Compass, Phone } from "lucide-react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title="Page Not Found | Bright Star Auto Ltd"
        description="This page took a wrong turn. Head back to Bright Star Auto's homepage or call (416) 635-0812 for collision repair, paint refinishing, and restoration in North York."
      />
      <Navbar />

      <section className="relative flex-1 flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />

        <div className="container relative z-10">
          <motion.div
            className="corner-accent max-w-xl mx-auto text-center px-10 py-14 md:px-16 md:py-16 border border-white/10 bg-card/40 backdrop-blur-xl rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="signature-underline text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-6">
              Wrong Turn
            </span>

            <h1 className="font-display font-bold text-primary leading-none mt-6 mb-2 text-[clamp(4rem,14vw,7rem)]">
              404
            </h1>

            <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
              This road doesn't lead anywhere.
            </h2>

            <p className="text-foreground/70 mb-10 leading-relaxed max-w-sm mx-auto">
              The page you're looking for has been moved, renamed, or never
              existed. Let's get you back on route.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setLocation("/")}
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Compass size={18} />
                Back to Home
              </motion.button>
              <motion.a
                href="tel:+14166350812"
                className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-primary/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={18} />
                Call the Shop
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
