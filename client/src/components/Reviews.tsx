import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Polly Clarke",
    text: "A perfect job! Totally satisfied with the end result of repairing the damage on my car. Reasonable rates, punctual service. A superior professional in all respects, going the extra mile to detail the car and make it look as good as new.",
    rating: 5,
    source: "Birdeye",
  },
  {
    name: "Maya",
    text: "Excellent PDR work - Highly Recommended. The team at Bright Star Auto is professional and the quality of their work is beyond expectations. They made my car look brand new again.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Mohammadreza Bakhshi",
    text: "Bright Star is not just a name where you hand over your car for repairs; it is a place where you first find peace of mind and then receive service beyond expectations. After a stressful accident, Bright Star was a place of peace.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Frank Zand",
    text: "Exceptional bodywork quality and attentive staff. High-caliber craftsmanship. They handled my vehicle with care and the results were perfect. Highly recommended for anyone in North York.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Eng. Sohi",
    text: "I know Amin, the owner for a couple of years. He is pretty knowledgeable and they do great work. Reliable and honest service every time.",
    rating: 5,
    source: "Google",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
    setAutoplay(false);
  };

  return (
    <section id="reviews" className="section-spacing bg-card/50 relative overflow-hidden">
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
            What Our Customers Say
          </h2>
          <p className="text-lg text-foreground/70">
            Trusted by hundreds of satisfied drivers across North York.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(reviews[current].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
                "{reviews[current].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">
                    {reviews[current].name}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {reviews[current].source}
                  </p>
                </div>
                <div className="text-sm text-primary font-semibold">
                  {current + 1} / {reviews.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setCurrent(i);
                    setAutoplay(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-8" : "bg-primary/30"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { label: "4.9★ Rating", value: "61+ Reviews" },
            { label: "10+ Years", value: "Experience" },
            { label: "100%", value: "Satisfaction" },
            { label: "Insurance", value: "Approved" },
          ].map((badge, i) => (
            <div
              key={i}
              className="bg-card border border-white/10 rounded-lg p-4 text-center"
            >
              <div className="font-bold text-primary">{badge.label}</div>
              <div className="text-sm text-foreground/60">{badge.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
