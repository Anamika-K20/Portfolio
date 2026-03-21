import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "anamikawork2004@gmail.com",
      link: "mailto:anamikawork2004@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXXXXXXX",
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: `var(--bg-primary)` }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--gradient-1)" }}
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--gradient-1)" }}
        animate={{ rotate: -360, scale: [1.15, 1, 1.15] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          style={{ color: `var(--accent-color)` }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
          style={{ color: `var(--text-secondary)` }}
        >
          Have a question or want to collaborate? Feel free to reach out!
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <p
              className="text-lg leading-relaxed"
              style={{ color: `var(--text-secondary)` }}
            >
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say
              hello, feel free to get in touch!
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={i}
                  href={method.link}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-xl transition-all"
                  style={{
                    backgroundColor: `var(--bg-secondary)`,
                    border: `1px solid var(--border-color)`,
                  }}
                >
                  <method.icon
                    style={{ color: `var(--accent-color)` }}
                    size={28}
                    className="flex-shrink-0 mt-1"
                  />
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: `var(--text-tertiary)` }}
                    >
                      {method.label}
                    </p>
                    <p
                      className="font-medium"
                      style={{ color: `var(--text-primary)` }}
                    >
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 pt-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { name: "GitHub", url: "https://github.com/Anamika-K20" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/anamika-kumari-3a594124b/" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg font-semibold transition-all"
                  style={{
                    backgroundColor: `var(--bg-secondary)`,
                    color: `var(--accent-color)`,
                    border: `1px solid var(--border-color)`,
                  }}
                >
                  {social.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-2xl relative group overflow-hidden"
            style={{
              backgroundColor: `var(--bg-secondary)`,
              border: `1px solid var(--border-color)`,
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{ background: "var(--gradient-1)" }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10 space-y-6">
              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: `var(--text-primary)` }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                  style={{
                    backgroundColor: `var(--bg-primary)`,
                    color: `var(--text-primary)`,
                    border: `1px solid var(--border-color)`,
                  }}
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: `var(--text-primary)` }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                  style={{
                    backgroundColor: `var(--bg-primary)`,
                    color: `var(--text-primary)`,
                    border: `1px solid var(--border-color)`,
                  }}
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: `var(--text-primary)` }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all resize-none"
                  style={{
                    backgroundColor: `var(--bg-primary)`,
                    color: `var(--text-primary)`,
                    border: `1px solid var(--border-color)`,
                  }}
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg text-white"
                style={{
                  backgroundColor: `var(--accent-color)`,
                  boxShadow: `0 10px 30px rgba(236, 72, 153, 0.4)`,
                }}
              >
                <Send size={20} /> Send Message
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};
