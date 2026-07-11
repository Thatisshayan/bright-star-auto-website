import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { z } from "zod";
import { BUSINESS } from "@shared/const";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^[0-9\-\s\+\(\)]+$/, "Phone number format is invalid")
    .min(10, "Phone number must be at least 10 characters")
    .refine(
      phone => (phone.match(/\d/g) || []).length >= 10,
      "Phone number must contain at least 10 digits"
    ),
  email: z.string().email("Please enter a valid email address"),
  vehicle: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  "bot-field": z.string(),
});

export function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "",
    message: "",
    "bot-field": "", // honeypot: real users never fill this in, bots often do
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Silently drop suspected bot submissions instead of surfacing an error.
    if (formData["bot-field"]) {
      setStatus("success");
      return;
    }

    // Validate form data
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue: z.ZodIssue) => {
        const path = issue.path.join(".");
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    try {
      // Netlify Forms: a static replica of this form lives in index.html
      // so Netlify's build bot can detect it; this fetch posts the real submission.
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        vehicle: "",
        service: "",
        message: "",
        "bot-field": "",
      });
    } catch {
      setStatus("error");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const infoItems = [
    {
      icon: MapPin,
      label: "Location",
      content: (
        <>
          {BUSINESS.address.street}
          <br />
          {BUSINESS.address.city}, {BUSINESS.address.region}{" "}
          {BUSINESS.address.postalCode}
        </>
      ),
    },
    {
      icon: Phone,
      label: "Phone",
      content: (
        <>
          {BUSINESS.phones.map((phone, i) => (
            <span key={phone.href}>
              <a
                href={phone.href}
                className="hover:text-primary transition-colors"
              >
                {phone.display}
              </a>
              {i < BUSINESS.phones.length - 1 && <br />}
            </span>
          ))}
        </>
      ),
    },
    {
      icon: Mail,
      label: "Email",
      content: (
        <a
          href={`mailto:${BUSINESS.email}`}
          className="hover:text-primary transition-colors"
        >
          {BUSINESS.email}
        </a>
      ),
    },
    {
      icon: Clock,
      label: "Hours",
      content: (
        <>
          Mon &ndash; Fri: {BUSINESS.hours.weekday}
          <br />
          Sat: {BUSINESS.hours.saturday}
          <br />
          Sun: {BUSINESS.hours.sunday}
        </>
      ),
    },
  ];

  if (status === "success") {
    return (
      <section
        id="contact"
        className="section-spacing bg-background relative overflow-hidden"
      >
        <div className="absolute inset-0 noise-overlay" />
        <div className="container relative z-10">
          <motion.div
            className="max-w-xl mx-auto text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle2 size={56} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold text-white mb-3">
              Request Received
            </h2>
            <p className="text-foreground/70 mb-8">
              Thanks for reaching out — we'll call or email you back shortly to
              confirm your free estimate.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-primary font-semibold hover:underline"
            >
              Send another request
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="section-spacing bg-background relative overflow-hidden"
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
            Free, No-Pressure Estimate
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/70">
            Tell us what happened and we'll get back to you with a straight
            answer, usually same-day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            name="contact"
            onSubmit={handleSubmit}
            className="corner-accent space-y-6 p-6 md:p-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 bg-transparent border-0 border-b text-white placeholder-foreground/40 focus:outline-none transition-all ${
                  errors.name
                    ? "border-destructive focus:border-destructive"
                    : "border-white/15 focus:border-primary"
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.name}
                </p>
              )}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-transparent border-0 border-b text-white placeholder-foreground/40 focus:outline-none transition-all ${
                    errors.phone
                      ? "border-destructive focus:border-destructive"
                      : "border-white/15 focus:border-primary"
                  }`}
                  placeholder="(416) 000-0000"
                />
                {errors.phone && (
                  <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-transparent border-0 border-b text-white placeholder-foreground/40 focus:outline-none transition-all ${
                    errors.email
                      ? "border-destructive focus:border-destructive"
                      : "border-white/15 focus:border-primary"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-white mb-2">
                Vehicle Make/Model
              </label>
              <input
                type="text"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-0 border-b border-white/15 text-white placeholder-foreground/40 focus:border-primary focus:outline-none transition-all"
                placeholder="e.g., Honda Civic 2020"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-white mb-2">
                Service Needed
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-0 border-b border-white/15 text-white focus:border-primary focus:outline-none transition-all"
              >
                <option className="bg-card" value="">
                  Select a service
                </option>
                <option className="bg-card" value="Collision Repair">
                  Collision Repair
                </option>
                <option className="bg-card" value="Paint & Refinishing">
                  Paint & Refinishing
                </option>
                <option className="bg-card" value="Dent Removal">
                  Dent Removal
                </option>
                <option className="bg-card" value="Frame Straightening">
                  Frame Straightening
                </option>
                <option className="bg-card" value="Insurance Claims">
                  Insurance Claims
                </option>
                <option className="bg-card" value="Auto Detailing">
                  Auto Detailing
                </option>
              </select>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-white mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 bg-transparent border-0 border-b text-white placeholder-foreground/40 focus:outline-none transition-all resize-none ${
                  errors.message
                    ? "border-destructive focus:border-destructive"
                    : "border-white/15 focus:border-primary"
                }`}
                placeholder="Tell us about your vehicle and what you need..."
              />
              {errors.message && (
                <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.message}
                </p>
              )}
            </motion.div>

            {/* Honeypot field: hidden from real users via CSS, but visible to
                most scraping bots that fill in every input they see. */}
            <p className="hidden" aria-hidden="true">
              <label>
                Leave this field empty
                <input
                  type="text"
                  name="bot-field"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData["bot-field"]}
                  onChange={handleChange}
                />
              </label>
            </p>

            {status === "error" && (
              <motion.p
                variants={itemVariants}
                className="text-destructive text-sm"
              >
                Something went wrong sending your request. Please call us
                directly at{" "}
                <a href={BUSINESS.phones[0].href} className="underline">
                  {BUSINESS.phones[0].display}
                </a>
                .
              </motion.p>
            )}

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
              whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
              variants={itemVariants}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Get My Free Estimate"
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info - plain list, no card boxes */}
          <motion.div
            className="divide-y divide-white/10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {infoItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="flex gap-5 py-6 first:pt-0"
                  variants={itemVariants}
                >
                  <Icon size={22} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {item.label}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
