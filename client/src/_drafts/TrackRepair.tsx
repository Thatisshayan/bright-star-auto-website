// DRAFT — parked, not wired into the app. NOT dead code, do not delete.
// This "Track My Repair" page is fully built but only works against hardcoded
// demo data (see DEMO_TICKET below) — there's no backend/shop-management
// integration yet, so it's been pulled out of routing (client/src/App.tsx)
// and nav (Footer.tsx) to avoid confusing real customers.
// To relaunch: move back to client/src/pages/, re-add the route in App.tsx,
// re-add the Footer link, and replace the demo lookup with a real API call.
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Search,
  CheckCircle2,
  Circle,
  Clock,
  Phone,
  Wrench,
  ClipboardCheck,
  PackageCheck,
  SprayCan,
  KeyRound,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { BUSINESS } from "@shared/const";

interface RepairStage {
  label: string;
  icon: typeof Circle;
}

const STAGES: RepairStage[] = [
  { label: "Vehicle Received", icon: ClipboardCheck },
  { label: "Estimate Approved", icon: CheckCircle2 },
  { label: "Parts Ordered", icon: PackageCheck },
  { label: "In Repair", icon: Wrench },
  { label: "Paint & Refinishing", icon: SprayCan },
  { label: "Quality Check", icon: Clock },
  { label: "Ready for Pickup", icon: KeyRound },
];

// Demo data only — this site has no backend/shop-management integration yet.
// "BSA-1001" is a seeded example so you can see how the tracker looks once
// wired up to a real system.
const DEMO_TICKET = {
  reference: "BSA-1001",
  lastName: "smith",
  vehicle: "2021 Honda Civic",
  currentStage: 3,
  eta: "Friday, July 11",
};

type LookupResult = "idle" | "found" | "not-found";

export default function TrackRepair() {
  const [reference, setReference] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState<LookupResult>("idle");

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const matches =
      reference.trim().toUpperCase() === DEMO_TICKET.reference &&
      lastName.trim().toLowerCase() === DEMO_TICKET.lastName;
    setResult(matches ? "found" : "not-found");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Track My Repair | Bright Star Auto Ltd"
        description="Check the status of your vehicle repair at Bright Star Auto — from estimate approval to final quality check and pickup."
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
              Track My Repair
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6 leading-tight">
              See exactly where your car stands.
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
              Enter your repair reference number and last name to check your
              vehicle's status.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lookup */}
      <section className="section-spacing bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10 max-w-2xl">
          <motion.form
            onSubmit={handleLookup}
            className="corner-accent p-6 md:p-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Repair Reference #
                </label>
                <input
                  type="text"
                  value={reference}
                  onChange={e => setReference(e.target.value)}
                  required
                  placeholder="e.g., BSA-1001"
                  className="w-full px-4 py-3 bg-transparent border-0 border-b border-white/15 text-white placeholder-foreground/40 focus:border-primary focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  required
                  placeholder="Your last name"
                  className="w-full px-4 py-3 bg-transparent border-0 border-b border-white/15 text-white placeholder-foreground/40 focus:border-primary focus:outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2"
            >
              <Search size={18} />
              Check Status
            </button>

            <p className="text-xs text-foreground/40 text-center">
              Demo tip: try reference{" "}
              <span className="text-primary">BSA-1001</span>, last name{" "}
              <span className="text-primary">Smith</span>.
            </p>
          </motion.form>

          <AnimatePresence mode="wait">
            {result === "found" && (
              <motion.div
                key="found"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-10"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-display font-bold text-white">
                    {DEMO_TICKET.vehicle}
                  </h2>
                  <span className="text-xs text-foreground/50 uppercase tracking-wider">
                    Ref. {DEMO_TICKET.reference}
                  </span>
                </div>
                <p className="text-sm text-foreground/60 mb-8">
                  Estimated completion:{" "}
                  <span className="text-primary font-semibold">
                    {DEMO_TICKET.eta}
                  </span>
                </p>

                <ol className="space-y-0">
                  {STAGES.map((stage, i) => {
                    const Icon = stage.icon;
                    const isDone = i < DEMO_TICKET.currentStage;
                    const isCurrent = i === DEMO_TICKET.currentStage;
                    return (
                      <li key={stage.label} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                              isDone
                                ? "bg-primary text-primary-foreground"
                                : isCurrent
                                  ? "bg-primary/20 text-primary border-2 border-primary animate-pulse"
                                  : "bg-white/5 text-foreground/30"
                            }`}
                          >
                            <Icon size={16} />
                          </div>
                          {i < STAGES.length - 1 && (
                            <div
                              className={`w-0.5 flex-1 min-h-6 ${
                                isDone ? "bg-primary" : "bg-white/10"
                              }`}
                            />
                          )}
                        </div>
                        <div className="pb-8">
                          <p
                            className={`font-semibold ${
                              isDone || isCurrent
                                ? "text-white"
                                : "text-foreground/40"
                            }`}
                          >
                            {stage.label}
                          </p>
                          {isCurrent && (
                            <p className="text-sm text-primary">
                              In progress now
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </motion.div>
            )}

            {result === "not-found" && (
              <motion.div
                key="not-found"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-10 corner-accent p-6 md:p-8 text-center"
              >
                <p className="text-foreground/70 mb-4">
                  We couldn't find that reference number. Online tracking
                  currently covers active repairs only — give us a call and
                  we'll pull up your status right away.
                </p>
                <a
                  href={BUSINESS.phones[0].href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
                >
                  <Phone size={16} />
                  Call {BUSINESS.phones[0].display}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}
