import { motion } from "framer-motion";
import { useEffect } from "react";
import { useParams } from "wouter";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NotFound from "@/pages/NotFound";
import { blogPosts, getPostBySlug } from "@/content/blogPosts";
import { BUSINESS } from "@shared/const";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  const related = post
    ? blogPosts.filter(p => p.slug !== post.slug).slice(0, 2)
    : [];

  useEffect(() => {
    if (!post) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      image: `${BUSINESS.url}${post.coverImage}`,
      datePublished: post.publishDate,
      author: { "@type": "Organization", name: BUSINESS.name },
      publisher: { "@type": "Organization", name: BUSINESS.name },
      mainEntityOfPage: `${BUSINESS.url}/blog/${post.slug}`,
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [post]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={`${post.title} | Bright Star Auto Blog`}
        description={post.description}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-12 md:pt-48 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-6"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </a>
            <span className="signature-underline text-xs font-semibold text-primary tracking-[0.25em] uppercase">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mt-4 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-5 text-sm text-foreground/50">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover image */}
      <div className="container max-w-4xl mb-12">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full aspect-video object-cover rounded-xl"
        />
      </div>

      {/* Article body */}
      <section className="pb-8">
        <div className="container relative z-10 max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none
              prose-headings:font-display prose-headings:text-white
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-foreground/70 prose-p:leading-relaxed
              prose-li:text-foreground/70
              prose-strong:text-white
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          >
            {post.content}
          </motion.article>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Have a repair question we didn't cover?
            </h2>
            <p className="text-foreground/70 mb-8">
              Reach out for a free, no-pressure estimate — or check our FAQ for
              more answers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#contact"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Get a Free Estimate
              </a>
              <a
                href="/faq"
                className="px-6 py-3 border border-white/15 text-white font-semibold rounded-lg hover:border-primary hover:text-primary transition-all"
              >
                Read the FAQ
              </a>
            </div>
          </motion.div>

          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-white/10 text-left">
              <h3 className="text-lg font-display font-bold text-white mb-6">
                More Guides
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map(r => (
                  <a
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="block p-5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors"
                  >
                    <span className="text-xs text-primary font-semibold uppercase tracking-wide">
                      {r.category}
                    </span>
                    <h4 className="text-white font-semibold mt-2 leading-snug">
                      {r.title}
                    </h4>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
