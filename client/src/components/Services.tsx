import { motion } from "framer-motion";
import { Wrench, Droplet, Hammer, AlertCircle, FileCheck, Sparkles } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Collision Repair",
    description: "Expert damage assessment and structural repair using precision tools and techniques.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Droplet,
    title: "Paint & Refinishing",
    description: "Professional color matching and multi-layer paint application for flawless finishes.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Hammer,
    title: "Dent Removal",
    description: "Paintless dent repair and scratch removal without compromising original paint.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: AlertCircle,
    title: "Frame Straightening",
    description: "Precision frame alignment and structural restoration for safety and performance.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: FileCheck,
    title: "Insurance Claims",
    description: "Hassle-free insurance coordination and documentation for your peace of mind.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Sparkles,
    title: "Auto Detailing",
    description: "Premium polishing and detailing to restore your vehicle's showroom shine.",
    color: "from-accent/20 to-accent/5",
  },
];

export default function Services() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="section-spacing bg-background relative overflow-hidden">
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
            Our Services
          </h2>
          <p className="text-lg text-foreground/70">
            Comprehensive auto bodyshop solutions for all your vehicle repair and restoration needs.
          </p>
        </motion.div>

        {/* Services Grid - Asymmetric Bento */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
            <motion.div
              key={index}
              className={`group relative bg-gradient-to-br ${service.color} border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all overflow-hidden ${
                index === 0 || index === 4 ? "lg:col-span-2" : ""
              }`}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(212, 160, 55, 0.15)" }}
            >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon size={24} className="text-primary" />
                  </motion.div>

                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 5 }}
                  >
                    Learn more →
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
