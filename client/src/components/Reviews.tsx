import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";

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

// Google's standard 4-color "G" logomark (public brand asset), used inline
// next to reviews sourced from Google to make the "reviewed on Google" claim
// visually verifiable rather than plain text.
function GoogleLogo({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setCurrent(prev => (prev + 1) % reviews.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent(prev => (prev - 1 + reviews.length) % reviews.length);
    setAutoplay(false);
  };

  return (
    <section
      id="reviews"
      className="section-spacing bg-card/50 relative overflow-hidden"
    >
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
            Real Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-foreground/70">
            Unedited feedback from drivers across North York, pulled straight
            from Google and Birdeye.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="corner-accent bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Quote size={36} className="text-primary/30 mb-4" />

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
                  <p className="text-sm text-foreground/60 flex items-center gap-1.5">
                    {reviews[current].source === "Google" && (
                      <GoogleLogo size={14} />
                    )}
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
              aria-label="Previous review"
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
                  aria-label={`Go to review ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-8" : "bg-primary/30"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              aria-label="Next review"
              className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Trust Badges - plain divided row, compact */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-y border-white/10 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { label: "4.9", value: "61+ Reviews", showStar: true },
            { label: "10+ Years", value: "Experience" },
            { label: "100%", value: "Satisfaction" },
            { label: "Insurance", value: "Approved" },
          ].map((badge, i) => (
            <div key={i} className="text-center py-4 px-3">
              <div className="text-sm font-bold text-primary flex items-center justify-center gap-1">
                {badge.label}
                {badge.showStar && (
                  <Star
                    size={12}
                    className="fill-primary text-primary"
                    aria-hidden="true"
                  />
                )}
                {badge.showStar && <span>Rating</span>}
              </div>
              <div className="text-xs text-foreground/60">{badge.value}</div>
            </div>
          ))}
        </motion.div>

        <GoogleReviewsWidget />
      </div>
    </section>
  );
}
