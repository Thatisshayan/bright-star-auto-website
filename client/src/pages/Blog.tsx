import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts } from "@/content/blogPosts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const sorted = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Insurance Tips & Repair Guides | Bright Star Auto Blog"
        description="Practical guides on Ontario collision claims, your rights as a driver, and what to know before approving a repair estimate — from North York's trusted bodyshop."
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
              Insurance Tips &amp; Repair Guides
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6 leading-tight">
              Know before you claim.
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
              Practical, plain-language guides on Ontario insurance claims, your
              rights as a driver, and what actually goes into a quality repair.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Post grid */}
      <section className="section-spacing bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.24) }}
                viewport={{ once: true, amount: 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-xl aspect-video mb-4">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-foreground/50">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {formatDate(post.publishDate)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
