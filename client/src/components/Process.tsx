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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-foreground/70">
            A streamlined process designed for your convenience and peace of mind.
          </p>
        </motion.div>

        {/* Timeline - Asymmetric */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Connector Line - Only on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] right-[calc(-50%-2rem)] h-1 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}

                {/* Step Card */}
                <div className="relative z-10 bg-card border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-background">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon size={32} className="text-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
