import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:Brightstarautoltd@gmail.com?subject=Appointment Request from ${formData.name}&body=Name: ${formData.name}%0DPhone: ${formData.phone}%0DEmail: ${formData.email}%0DVehicle: ${formData.vehicle}%0DService: ${formData.service}%0DMessage: ${formData.message}`;
    window.location.href = mailtoLink;
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

  return (
    <section id="contact" className="section-spacing bg-background relative overflow-hidden">
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
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/70">
            Ready to restore your vehicle? Contact us today for a free estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
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
                className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white placeholder-foreground/50 focus:border-primary focus:outline-none transition-all"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
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
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white placeholder-foreground/50 focus:border-primary focus:outline-none transition-all"
                  placeholder="(416) 000-0000"
                />
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
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white placeholder-foreground/50 focus:border-primary focus:outline-none transition-all"
                  placeholder="your@email.com"
                />
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
                className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white placeholder-foreground/50 focus:border-primary focus:outline-none transition-all"
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
                className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none transition-all"
              >
                <option value="">Select a service</option>
                <option value="Collision Repair">Collision Repair</option>
                <option value="Paint & Refinishing">Paint & Refinishing</option>
                <option value="Dent Removal">Dent Removal</option>
                <option value="Frame Straightening">Frame Straightening</option>
                <option value="Insurance Claims">Insurance Claims</option>
                <option value="Auto Detailing">Auto Detailing</option>
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
                className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white placeholder-foreground/50 focus:border-primary focus:outline-none transition-all resize-none"
                placeholder="Tell us about your vehicle and what you need..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              Send Request
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Address */}
            <motion.div
              className="bg-card border border-white/10 rounded-xl p-6"
              variants={itemVariants}
              whileHover={{ borderColor: "oklch(72% 0.18 75)" }}
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-foreground/70">
                    51 Toro Road North, Unit #3
                    <br />
                    North York, ON M3J 2A4
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="bg-card border border-white/10 rounded-xl p-6"
              variants={itemVariants}
              whileHover={{ borderColor: "oklch(72% 0.18 75)" }}
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-foreground/70">
                    <a
                      href="tel:+14166350812"
                      className="hover:text-primary transition-colors"
                    >
                      +1 (416) 635-0812
                    </a>
                    <br />
                    <a
                      href="tel:+14168339252"
                      className="hover:text-primary transition-colors"
                    >
                      +1 (416) 833-9252
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="bg-card border border-white/10 rounded-xl p-6"
              variants={itemVariants}
              whileHover={{ borderColor: "oklch(72% 0.18 75)" }}
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-foreground/70">
                    <a
                      href="mailto:Brightstarautoltd@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      Brightstarautoltd@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="bg-card border border-white/10 rounded-xl p-6"
              variants={itemVariants}
              whileHover={{ borderColor: "oklch(72% 0.18 75)" }}
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Hours</h3>
                  <p className="text-foreground/70 text-sm">
                    Mon - Fri: 9:00 AM - 6:00 PM
                    <br />
                    Sat: 9:00 AM - 4:00 PM
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
