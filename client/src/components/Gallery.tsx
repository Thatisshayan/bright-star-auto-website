import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Link } from "wouter";

const galleryItems = [
  {
    image: "/gallery/stock-shopfloor.jpg",
    title: "Collision Repair",
    category: "Our Facility",
  },
  {
    image: "/gallery/stock-paintbooth.jpg",
    title: "Paint & Refinishing",
    category: "Spray Booth",
  },
  {
    image: "/gallery/stock-structural.jpg",
    title: "Structural Repair",
    category: "In Progress",
  },
  {
    image: "/gallery/stock-polishing.jpg",
    title: "Paint Correction",
    category: "Finishing",
  },
  {
    image: "/gallery/stock-detailing.jpg",
    title: "Auto Detailing",
    category: "Precision",
  },
  {
    image: "/gallery/stock-wheelwork.jpg",
    title: "Wheel & Suspension",
    category: "Precision Work",
  },
];

export default function Gallery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="section-spacing bg-card/50 relative overflow-hidden">
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
            Inside The Shop
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-foreground/70">
            The equipment, process, and finish quality behind every job we take
            on.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <Link
                href="/gallery"
                className="block w-full h-full cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content - anchored bottom-left, no card box */}
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye size={14} />
                    {item.category}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/#contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Estimate
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
