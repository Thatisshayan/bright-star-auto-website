import { motion } from "framer-motion";
import {
  Wrench,
  Droplet,
  Hammer,
  AlertCircle,
  Layers,
  ShieldCheck,
  Zap,
  Settings,
  Truck,
  FileCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const services = [
  {
    icon: Wrench,
    title: "Collision Repair",
    description:
      "Full damage assessment and repair after an accident, from minor fender-benders to major structural damage — done to factory-correct standards.",
  },
  {
    icon: Droplet,
    title: "Paint & Refinishing",
    description:
      "Computerized colour matching and multi-stage paint application so the repaired panel is invisible next to the rest of your car.",
  },
  {
    icon: Hammer,
    title: "Dent Removal",
    description:
      "Paintless dent repair (PDR) and traditional dent/scratch repair that preserves your vehicle's original factory paint wherever possible.",
  },
  {
    icon: AlertCircle,
    title: "Frame Straightening",
    description:
      "Computerized frame and unibody measuring and pulling to restore your vehicle's exact factory alignment and crash safety specs.",
  },
  {
    icon: Layers,
    title: "Structural Repair",
    description:
      "Structural component repair and replacement following manufacturer procedures — safety-critical work done right, not shortcut.",
  },
  {
    icon: ShieldCheck,
    title: "Aluminum Repair",
    description:
      "Dedicated aluminum repair capability for the growing number of aluminum-bodied vehicles that require separate tools and certification from steel repair.",
  },
  {
    icon: Zap,
    title: "Electrical Repair",
    description:
      "Diagnostics and repair for collision-related electrical faults — sensors, wiring harnesses, lighting, and onboard safety systems.",
  },
  {
    icon: Settings,
    title: "Mechanical Repair",
    description:
      "Suspension, steering, and drivetrain repair for damage that goes beyond the body — so your car is right mechanically, not just cosmetically.",
  },
  {
    icon: Truck,
    title: "Towing",
    description:
      "Towing coordination to get your vehicle safely off the road and into our shop after an accident or breakdown.",
  },
  {
    icon: FileCheck,
    title: "Insurance Claims",
    description:
      "We work directly with your insurance provider — estimates, documentation, and approvals handled so you don't have to chase anyone.",
  },
  {
    icon: Sparkles,
    title: "Auto Detailing",
    description:
      "Interior and exterior detailing to send your vehicle back looking as good as the day the repair is finished.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Auto Body Repair Services | Bright Star Auto, North York"
        description="Collision repair, paint refinishing, frame straightening, and insurance claims handled under one roof — certified technicians, factory-correct standards, free estimates."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="signature-underline text-sm font-semibold text-primary tracking-[0.2em] uppercase">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6 leading-tight">
              Everything your vehicle
              <br />
              needs, under one roof.
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
              From a small dent to a full structural rebuild, our certified team
              handles the entire repair — body, paint, mechanical, and
              electrical — so you don't need to juggle multiple shops.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="pb-24 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10">
          <div className="border-t border-white/10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group grid grid-cols-[auto_auto_1fr] items-start gap-x-6 gap-y-2 py-8 border-b border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span className="numbered-marker text-sm pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>

                  <div className="col-span-3 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
              Bring it in for a free assessment — we'll tell you exactly what's
              involved and give you a straight answer, no pressure.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Get a Free Estimate
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
