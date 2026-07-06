import { motion } from "framer-motion";

const services = [
  "COLLISION REPAIR",
  "PAINT & REFINISHING",
  "DENT REMOVAL",
  "FRAME STRAIGHTENING",
  "INSURANCE CLAIMS",
  "RUST REPAIR",
  "AUTO DETAILING",
  "SCRATCH REMOVAL",
];

export default function MarqueeTicker() {
  return (
    <section className="bg-primary/10 border-y border-primary/30 py-4 overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...services, ...services].map((service, i) => (
          <div
            key={i}
            className="flex items-center gap-8 text-lg font-display font-bold text-primary"
          >
            <span>{service}</span>
            <span className="text-primary/50">•</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
