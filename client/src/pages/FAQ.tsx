import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BUSINESS } from "@shared/const";

interface FAQCategory {
  category: string;
  items: { question: string; answer: string }[];
}

const faqs: FAQCategory[] = [
  {
    category: "Insurance Claims",
    items: [
      {
        question:
          "Can I choose my own body shop, or do I have to use my insurer's recommended shop?",
        answer:
          "In Ontario, you have the legal right to choose any repair shop you want — your insurance company cannot force you to use one of their 'preferred' shops. We work directly with all major insurers and handle the claims paperwork on your behalf.",
      },
      {
        question:
          "Will using a non-recommended shop affect my claim or warranty?",
        answer:
          "No. Choosing an independent shop like ours does not void your insurance coverage or any manufacturer warranty, as long as repairs meet manufacturer and safety standards — which is exactly how we operate.",
      },
      {
        question: "Do I need to get multiple estimates before repairs begin?",
        answer:
          "Not necessarily — most insurers accept a single estimate from a shop of your choice. We provide a full, itemized estimate and can communicate directly with your adjuster to speed up approval.",
      },
      {
        question: "Who pays my deductible?",
        answer:
          "Your deductible is paid to us directly (the shop), and the remaining repair cost is billed to your insurance company under your claim.",
      },
    ],
  },
  {
    category: "Estimates & Pricing",
    items: [
      {
        question: "Is the estimate really free?",
        answer:
          "Yes. We provide free, no-obligation estimates for all collision, paint, and structural repair work. Bring your vehicle by or send us photos and we'll follow up with a straight answer, usually the same day.",
      },
      {
        question:
          "How accurate is an estimate given from photos versus in-person?",
        answer:
          "Photo estimates give us a strong starting range, but hidden damage (especially structural) often isn't visible until we open the panel up. We'll always confirm final pricing after an in-person inspection before work begins.",
      },
      {
        question: "Do you price-match other shops?",
        answer:
          "We focus on transparent, quality-driven pricing rather than competing purely on price — cutting corners on materials or procedure is how repairs fail down the road. We're happy to walk you through exactly what's included in your estimate.",
      },
    ],
  },
  {
    category: "The Repair Process",
    items: [
      {
        question: "How long will my repair take?",
        answer:
          "Most collision repairs take 3–7 business days depending on parts availability and damage extent. Structural or major panel work can take longer. We'll give you a realistic timeline after inspection and keep you updated throughout.",
      },
      {
        question: "Will my car look and drive the same as before the accident?",
        answer:
          "That's the standard we hold every repair to. We use factory-correct repair procedures, computerized paint matching, and a full quality check before any vehicle leaves our shop.",
      },
      {
        question: "Do you offer a warranty on repairs?",
        answer:
          "Yes — all workmanship is backed by our lifetime warranty for as long as you own the vehicle. Ask us for the specific terms that apply to your repair.",
      },
      {
        question: "Can I get a rental car while my vehicle is being repaired?",
        answer:
          "Most insurance policies include rental coverage during a covered repair. We can help coordinate rental pickup and, in many cases, arrange it right from our shop.",
      },
    ],
  },
  {
    category: "Visiting Us",
    items: [
      {
        question: "Where are you located?",
        answer: `We're at ${BUSINESS.address.full}.`,
      },
      {
        question: "What are your hours?",
        answer: `Monday–Friday ${BUSINESS.hours.weekday}, Saturday ${BUSINESS.hours.saturday}, Sunday ${BUSINESS.hours.sunday}.`,
      },
      {
        question: "Do I need an appointment for an estimate?",
        answer:
          "Walk-ins are welcome, but booking ahead through our contact form or by phone helps us make sure someone's available to look at your vehicle right away.",
      },
    ],
  },
];

export default function FAQ() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.flatMap(category =>
        category.items.map(item => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        }))
      ),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="FAQ | Insurance Claims & Repair Questions — Bright Star Auto"
        description="Answers to common questions about insurance claims, estimates, repair timelines, and warranties from North York's trusted collision repair shop."
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
              Frequently Asked Questions
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6 leading-tight">
              Straight answers, before you even ask.
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
              Everything drivers usually want to know about insurance claims,
              estimates, and what to expect when you bring your vehicle in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ groups */}
      <section className="section-spacing bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10 max-w-3xl">
          {faqs.map((category, ci) => (
            <motion.div
              key={category.category}
              className="mb-14 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(ci * 0.05, 0.2) }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h2 className="text-2xl font-display font-bold text-primary mb-2">
                {category.category}
              </h2>
              <Accordion
                type="single"
                collapsible
                className="border-t border-white/10"
              >
                {category.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${category.category}-${i}`}
                    className="border-white/10"
                  >
                    <AccordionTrigger className="text-base font-semibold text-white hover:no-underline hover:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-foreground/70 mb-8">
              Still have a question? We're happy to talk it through.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Ask Us Directly
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
