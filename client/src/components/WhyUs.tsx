import { motion } from "framer-motion";
import { Users, Award, Zap, Shield } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Expert Technicians",
    description: "Certified professionals with 10+ years of automotive repair experience.",
  },
  {
    icon: Award,
    title: "Insurance Approved",
    description: "Trusted by major insurance companies for quality and reliability.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Efficient processes ensure your vehicle is back on the road quickly.",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "100% satisfaction guarantee on all workmanship and repairs.",
  },
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
    <section id="why-us" className="section-spacing bg-card/50 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Why Choose Bright Star Auto
          </h2>
          <p className="text-lg text-foreground/70">
            We combine expertise, quality, and customer care to deliver exceptional results.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-background border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-all overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/0 transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon size={32} className="text-primary" />
                  </motion.div>

                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Accent Line */}
                  <motion.div
                    className="mt-6 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-12 transition-all duration-300"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: "500+", label: "Vehicles Restored" },
            { number: "4.9★", label: "Customer Rating" },
            { number: "10+", label: "Years Experience" },
            { number: "100%", label: "Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
