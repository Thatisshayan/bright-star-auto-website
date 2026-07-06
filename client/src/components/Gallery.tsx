import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const galleryItems = [
  {
    image: "/manus-storage/collision-repair_268634f7.png",
    title: "Collision Repair",
    category: "Structural",
  },
  {
    image: "/manus-storage/paint-booth_953dde27.png",
    title: "Paint Refinishing",
    category: "Finishing",
  },
  {
    image: "/manus-storage/technician-work_bfc4a8c3.png",
    title: "Expert Craftsmanship",
    category: "Precision",
  },
  {
    image: "/manus-storage/collision-repair_268634f7.png",
    title: "Frame Straightening",
    category: "Structural",
  },
  {
    image: "/manus-storage/paint-booth_953dde27.png",
    title: "Quality Assurance",
    category: "Inspection",
  },
  {
    image: "/manus-storage/technician-work_bfc4a8c3.png",
    title: "Professional Results",
    category: "Finishing",
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our Work
          </h2>
          <p className="text-lg text-foreground/70">
            See the quality and precision of our auto bodyshop craftsmanship.
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
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                <Eye size={32} className="text-primary mb-4" />
                <h3 className="text-lg font-semibold text-white text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70 mt-2">{item.category}</p>
              </motion.div>
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
            href="#contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See More Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
