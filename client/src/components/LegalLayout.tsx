import { motion } from "framer-motion";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface LegalLayoutProps {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  intro: ReactNode;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalLayout({
  seoTitle,
  seoDescription,
  eyebrow,
  title,
  intro,
  lastUpdated,
  sections,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title={seoTitle} description={seoDescription} />
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
              {eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-sm text-foreground/50 uppercase tracking-wider mb-6">
              Last updated: {lastUpdated}
            </p>
            <div className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
              {intro}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="section-spacing bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">
            {/* Table of contents */}
            <motion.nav
              className="hidden lg:block sticky top-28 self-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              aria-label="Table of contents"
            >
              <h2 className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
                On This Page
              </h2>
              <ul className="space-y-3 border-l border-white/10">
                {sections.map(section => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block pl-4 -ml-px border-l border-transparent hover:border-primary text-sm text-foreground/60 hover:text-primary transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Sections */}
            <div className="space-y-14 max-w-3xl">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  className="corner-accent p-6 md:p-8 scroll-mt-28"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index * 0.05, 0.3),
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-display text-primary/50 text-xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl font-display font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-foreground/70 leading-relaxed space-y-4 [&_a]:text-primary [&_a]:hover:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
                    {section.body}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
