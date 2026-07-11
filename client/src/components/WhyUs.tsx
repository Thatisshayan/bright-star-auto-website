import { motion } from "framer-motion";
import { Users, Award, Zap, Shield, Star } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Expert Technicians",
    description:
      "Certified professionals with 10+ years of automotive repair experience.",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description:
      "Certified professionals meeting the highest automotive repair standards.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Efficient processes ensure your vehicle is back on the road quickly.",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "100% satisfaction guarantee on all workmanship and repairs.",
  },
];

const stats = [
  { number: "500+", label: "Vehicles Restored", fill: "100%" },
  { number: "4.9", label: "Customer Rating", fill: "98%", showStar: true },
  { number: "10+", label: "Years Experience", fill: "85%" },
  { number: "100%", label: "Satisfaction", fill: "100%" },
];

export default function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="why-us"
      className="section-spacing bg-card/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 noise-overlay" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="signature-underline text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-4">
            The Bright Star Standard
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 mb-4">
            Why Choose Bright Star Auto
          </h2>
          <p className="text-lg text-foreground/70">
            Four commitments that don't flex when a deadline gets tight.
          </p>
        </motion.div>

        {/* Pillars - plain grid, icon + text, no card boxes */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={index} className="group" variants={itemVariants}>
                <motion.div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon size={26} className="text-primary" />
                </motion.div>

                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed max-w-sm">
                  {pillar.description}
                </p>

                <div className="mt-5 h-px bg-primary w-0 group-hover:w-16 transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats - plain divided row, no boxes */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-y border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center py-8 px-4">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1 flex items-center justify-center gap-1">
                {stat.number}
                {stat.showStar && (
                  <Star
                    size={20}
                    className="fill-primary text-primary"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="text-sm text-foreground/70 mb-3">
                {stat.label}
              </div>
              <div className="quality-bar max-w-[100px] mx-auto">
                <motion.div
                  className="quality-bar__fill"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + i * 0.1,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  viewport={{ once: true }}
                  style={{ ["--fill" as string]: stat.fill }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
