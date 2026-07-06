import { motion } from "framer-motion";
import { ChevronDown, Star, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [vehiclesCount, setVehiclesCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    // Animate counters on mount
    const vehiclesInterval = setInterval(() => {
      setVehiclesCount((prev) => (prev < 500 ? prev + 10 : 500));
    }, 20);
    const satisfactionInterval = setInterval(() => {
      setSatisfactionCount((prev) => (prev < 98 ? prev + 2 : 98));
    }, 20);

    return () => {
      clearInterval(vehiclesInterval);
      clearInterval(satisfactionInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/hero-background_eccec15e.png"
          alt="Auto bodyshop workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />
      </div>

      {/* Animated Particles Background */}
      <div className="absolute inset-0 z-0 noise-overlay" />

      {/* Content */}
      <div className="container relative z-10 py-20">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/30 border border-primary/60 rounded-full mb-6 backdrop-blur-sm"
            variants={itemVariants}
          >
            <Star size={16} className="text-accent" />
            <span className="text-sm font-semibold text-accent">
              North York's Premier Auto Bodyshop
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Restore Your Car.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Reclaim Your Road.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl leading-relaxed"
            variants={itemVariants}
          >
            Expert collision repair, paint refinishing, and restoration. Insurance-approved. Free estimates. Your vehicle deserves the best.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-lg p-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {vehiclesCount}+
              </div>
              <div className="text-sm text-foreground/70">Vehicles Restored</div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-lg p-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">4.9★</div>
              <div className="text-sm text-foreground/70">61+ Reviews</div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-lg p-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {satisfactionCount}%
              </div>
              <div className="text-sm text-foreground/70">Satisfaction</div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              Book an Appointment
            </motion.a>
            <motion.a
              href="#services"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Services
            </motion.a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="mt-12 flex items-center gap-4 text-sm text-foreground/80"
            variants={itemVariants}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-accent"
                >
                  ★
                </div>
              ))}
            </div>
            <span>
              Trusted by hundreds of North York drivers. <strong className="text-primary">Available today.</strong>
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-primary" />
      </motion.div>
    </section>
  );
}
