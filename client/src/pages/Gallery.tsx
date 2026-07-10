import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Lightbox from "@/components/Lightbox";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const CATEGORIES = [
  "All",
  "Collision Repair",
  "Paint & Refinishing",
  "Structural Repair",
  "Detailing",
] as const;

type Category = (typeof CATEGORIES)[number];

interface GalleryItem {
  image: string;
  title: string;
  category: Exclude<Category, "All">;
}

const galleryItems: GalleryItem[] = [
  {
    image: "/gallery/hero-orange-car.jpg",
    title: "Full Restoration, Ready to Roll",
    category: "Collision Repair",
  },
  {
    image: "/gallery/stock-shopfloor.jpg",
    title: "Collision Repair Bay",
    category: "Collision Repair",
  },
  {
    image: "/gallery/stock-dentrepair.jpg",
    title: "Panel Dent Repair",
    category: "Collision Repair",
  },
  {
    image: "/gallery/stock-bumperrepair.jpg",
    title: "Bumper Repair & Refit",
    category: "Collision Repair",
  },
  {
    image: "/gallery/stock-structural.jpg",
    title: "Frame & Structural Alignment",
    category: "Structural Repair",
  },
  {
    image: "/gallery/stock-wheelwork.jpg",
    title: "Wheel & Suspension Precision Work",
    category: "Structural Repair",
  },
  {
    image: "/gallery/stock-repairshop-tools.jpg",
    title: "Shop Floor Diagnostics",
    category: "Structural Repair",
  },
  {
    image: "/gallery/stock-paintbooth.jpg",
    title: "Spray Booth Paint Application",
    category: "Paint & Refinishing",
  },
  {
    image: "/gallery/stock-spraygun.jpg",
    title: "Base Coat Application",
    category: "Paint & Refinishing",
  },
  {
    image: "/gallery/stock-spraybumper.jpg",
    title: "Bumper Refinishing",
    category: "Paint & Refinishing",
  },
  {
    image: "/gallery/stock-maskspray.jpg",
    title: "Precision Masking & Spray",
    category: "Paint & Refinishing",
  },
  {
    image: "/gallery/stock-polishing.jpg",
    title: "Paint Correction & Buffing",
    category: "Paint & Refinishing",
  },
  {
    image: "/gallery/stock-detailing.jpg",
    title: "Interior & Exterior Detailing",
    category: "Detailing",
  },
  {
    image: "/gallery/stock-polishmachine.jpg",
    title: "Machine Polish Finishing",
    category: "Detailing",
  },
  {
    image: "/gallery/stock-polishred.jpg",
    title: "Gloss Finish Polish",
    category: "Detailing",
  },
  {
    image: "/gallery/stock-buffing.jpg",
    title: "Hand Buffing Final Pass",
    category: "Detailing",
  },
  {
    image: "/gallery/stock-inspectclassic.jpg",
    title: "Final Quality Inspection",
    category: "Detailing",
  },
  {
    image: "/gallery/stock-interiordetail.jpg",
    title: "Interior Detail Clean",
    category: "Detailing",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory),
    [activeCategory]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Gallery | Bright Star Auto Ltd — Collision Repair North York"
        description="See inside Bright Star Auto's North York bodyshop — collision repair, structural alignment, spray-booth paint refinishing, and detailing work."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="signature-underline text-sm font-semibold text-primary tracking-[0.2em] uppercase">
              Inside The Shop
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6 leading-tight">
              A closer look at the work.
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
              From frame alignment to the final polish, here's what happens
              behind the bay doors at Bright Star Auto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-spacing bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10">
          {/* Category filters */}
          <motion.div
            className="flex flex-wrap gap-3 mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                    : "bg-transparent text-foreground/70 border-white/15 hover:border-primary/60 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.image + item.title}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye size={14} />
                      {item.category}
                    </div>
                    <h3 className="text-lg font-display font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <Lightbox
            items={filteredItems}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        </div>
      </section>

      {/* Before & After */}
      <section className="section-spacing bg-background relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10">
          <motion.div
            className="max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="signature-underline text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-4">
              See The Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 mb-4">
              Before &amp; After
            </h2>
            <p className="text-lg text-foreground/70">
              Drag the slider to compare. These are representative shop photos
              while we build out a gallery of real customer repairs — ask us to
              see actual before/after cases for your vehicle type.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <BeforeAfterSlider
                beforeImage="/gallery/stock-shopfloor.jpg"
                afterImage="/gallery/hero-orange-car.jpg"
                beforeLabel="In The Shop"
                afterLabel="Finished Result"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <BeforeAfterSlider
                beforeImage="/gallery/stock-dentrepair.jpg"
                afterImage="/gallery/stock-polishred.jpg"
                beforeLabel="Damage"
                afterLabel="Refinished"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <BeforeAfterSlider
                beforeImage="/gallery/stock-repairshop-tools.jpg"
                afterImage="/gallery/stock-inspectclassic.jpg"
                beforeLabel="Diagnostics"
                afterLabel="Final Inspection"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
              Like what you see? Bring your vehicle in for a free, no-pressure
              estimate.
            </p>
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

      <Footer />
    </div>
  );
}
