import { motion } from "framer-motion";
import { FileText, Wrench, CheckCircle, Truck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Free Estimate",
    description: "Comprehensive damage assessment and transparent pricing",
  },
  {
    icon: Wrench,
    title: "Expert Repair",
    description: "Professional technicians restore your vehicle to perfection",
  },
  {
    icon: CheckCircle,
    title: "Quality Check",
    description: "Rigorous inspection ensures flawless results",
  },
  {
    icon: Truck,
    title: "Ready to Go",
    description: "Your vehicle is restored and ready for the road",
  },
];

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="section-spacing bg-background relative overflow-hidden">
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
            From Drop-Off To Drive-Away
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-foreground/70">
            Four steps, one point of contact, no surprises along the way.
          </p>
        </motion.div>

        {/* Timeline - plain, connected by a single line, no card boxes */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Connector Line - full width, behind steps */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/60 via-primary/30 to-primary/60" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="relative text-center lg:text-left">
                {/* Icon with number */}
                <div className="relative inline-flex mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center bg-card border border-primary/30 relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon size={26} className="text-primary" />
                  </motion.div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center z-20">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/70 max-w-[220px] mx-auto lg:mx-0">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
