import { motion } from "framer-motion";
import { Wrench, Droplet, Hammer, AlertCircle, FileCheck, Sparkles } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Collision Repair",
    description: "Expert damage assessment and structural repair using precision tools and techniques.",
  },
  {
    icon: Droplet,
    title: "Paint & Refinishing",
    description: "Professional color matching and multi-layer paint application for flawless finishes.",
  },
  {
    icon: Hammer,
    title: "Dent Removal",
    description: "Paintless dent repair and scratch removal without compromising original paint.",
  },
  {
    icon: AlertCircle,
    title: "Frame Straightening",
    description: "Precision frame alignment and structural restoration for safety and performance.",
  },
  {
    icon: FileCheck,
    title: "Insurance Claims",
    description: "Hassle-free insurance coordination and documentation for your peace of mind.",
  },
  {
    icon: Sparkles,
    title: "Auto Detailing",
    description: "Premium polishing and detailing to restore your vehicle's showroom shine.",
  },
];

export default function Services() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="section-spacing bg-background relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky header */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="lg:sticky lg:top-32">
              <span className="signature-underline text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-4">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-foreground/70 max-w-sm">
                One shop, every stage of the repair — from first estimate to final polish.
              </p>
            </div>
          </motion.div>

          {/* Service list - editorial rows, no card boxes */}
          <div className="lg:col-span-8 border-t border-white/10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group grid grid-cols-[auto_auto_1fr] items-start gap-x-6 gap-y-2 py-8 border-b border-white/10"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span className="numbered-marker text-sm pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <motion.div
                    className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon size={22} className="text-primary" />
                  </motion.div>

                  <div className="col-start-3 -mt-1 md:col-start-3">
                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </div>

                  <div className="col-span-3 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
