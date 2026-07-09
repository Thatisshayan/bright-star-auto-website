import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck, Wrench, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const values = [
  {
    icon: Wrench,
    title: "Craftsmanship First",
    description:
      "Every panel, every paint match, every weld is treated like it's going on our own car. We don't cut corners to hit a deadline.",
  },
  {
    icon: ShieldCheck,
    title: "Honesty With Insurance",
    description:
      "We work for you, not the insurance company. Every estimate is transparent, and we fight for the repair your vehicle actually needs.",
  },
  {
    icon: Heart,
    title: "People, Not Just Cars",
    description:
      "A collision is stressful. We built Bright Star to be the calm, straight-talking part of a bad day — not another headache.",
  },
  {
    icon: Award,
    title: "Standards That Don't Slip",
    description:
      "Certified technicians, factory-correct procedures, and a quality check on every vehicle before it leaves our bay.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="About Bright Star Auto | North York Collision Repair Team"
        description="Meet the family-run team behind North York's most trusted bodyshop — certified technicians, honest insurance advocacy, and a lifetime-warranty standard on every repair."
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="signature-underline text-sm font-semibold text-primary tracking-[0.2em] uppercase">
              About Bright Star Auto
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6 leading-tight">
              Built on craftsmanship,
              <br />
              run by people who care.
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
              Bright Star Auto is a North York collision repair and refinishing
              shop built on a simple idea: your car deserves an honest, skilled
              repair — and you deserve to be treated like a person, not a claim
              number.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Owner spotlight */}
      <section className="section-spacing bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10">
          <motion.div
            className="corner-accent max-w-3xl mx-auto text-center px-8 py-10 md:px-14 md:py-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Quote size={40} className="text-primary/50 mx-auto mb-6" />
            <p className="text-xl md:text-2xl font-display text-white leading-snug mb-8">
              "I didn't want to build just another body shop. I wanted a place
              where people walk in stressed about an accident and walk out
              feeling like someone actually had their back."
            </p>
            <div className="inline-flex flex-col items-center">
              <span className="font-display text-lg font-bold text-primary tracking-wide">
                AMIN
              </span>
              <span className="text-sm text-foreground/60">
                Owner &amp; Founder, Bright Star Auto
              </span>
            </div>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto mt-12 text-foreground/70 leading-relaxed space-y-4 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>
              Amin founded Bright Star Auto with a hands-on, floor-level
              approach to the business — he still knows the shop's regular
              customers by name, and he's personally involved in the estimates
              and quality checks that go out the door. That reputation for being
              knowledgeable, reliable, and honest is what customers consistently
              point to when they talk about why they keep coming back, and why
              they send their friends and family here too.
            </p>
            <p>
              Under his direction, Bright Star Auto has grown into North York's
              go-to shop for collision repair and refinishing — built one
              careful repair, and one satisfied customer, at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-background relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10">
          <motion.div
            className="max-w-2xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-foreground/70">
              The principles our team works by, on every vehicle that comes
              through the door.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed max-w-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10">
          <motion.div
            className="max-w-2xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              The People Behind The Work
            </h2>
            <p className="text-lg text-foreground/70">
              A small, tight-knit team of certified technicians, painters, and
              estimators who treat every vehicle like their own.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10">
            {[
              {
                role: "Collision & Structural Technicians",
                copy: "Certified in factory repair procedures and frame precision, handling everything from a dented panel to full structural realignment.",
              },
              {
                role: "Paint & Refinishing Team",
                copy: "Colour-matching specialists who treat every mix and every coat as the difference between an okay repair and an invisible one.",
              },
              {
                role: "Estimators & Insurance Liaisons",
                copy: "The people who deal with the paperwork so you don't have to — clear estimates, honest timelines, no surprises.",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                className="p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {member.role}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {member.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-background relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Come See The Shop For Yourself
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
              Stop by for a free, no-pressure estimate — or give us a call.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Get a Free Estimate
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
