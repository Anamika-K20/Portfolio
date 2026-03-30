import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { PageLayout } from "../components/PageLayout";

const contactMethods = [
  { icon: Mail, label: "Email", value: "anamikawork2004@gmail.com", href: "mailto:anamikawork2004@gmail.com", color: "#e8927c" },
  { icon: MapPin, label: "Location", value: "Delhi, India", href: "#", color: "#c084fc" },
  { icon: Github, label: "GitHub", value: "github.com/Anamika-K20", href: "https://github.com/Anamika-K20", color: "#67e8f9" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/anamika-kumari-3a594124b", href: "https://www.linkedin.com/in/anamika-kumari-3a594124b/", color: "#f5c842" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Formspree endpoint ───────────────────────────────────
// 1. Go to https://formspree.io → create a free account
// 2. Create a new form → copy the endpoint ID (looks like "xpwzgkla")
// 3. Replace YOUR_FORM_ID below
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xreyvadj";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    backgroundColor: `var(--bg-tertiary)`,
    color: `var(--text-primary)`,
    border: `1px solid var(--border-color)`,
    borderRadius: "12px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "var(--font-sans)",
  };

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-5 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles size={14} style={{ color: "var(--accent-color)" }} />
            <span className="section-label">GET IN TOUCH</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: `var(--text-primary)` }}
          >
            Let's{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "var(--gradient-1)" }}
            >
              Connect
            </span>
          </h1>
          <p className="text-base max-w-md mx-auto" style={{ color: `var(--text-secondary)` }}>
            Whether it's a project, a collaboration, or just a hello — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — info */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base leading-relaxed mb-8"
              style={{ color: `var(--text-secondary)` }}
            >
              I'm always open to interesting conversations, new opportunities, and
              collaborations. If you have a question or just want to say hi, feel free to reach out!
            </motion.p>

            <div className="space-y-4 mb-8">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={i}
                  href={method.href}
                  target={method.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border transition-all group"
                  style={{
                    backgroundColor: `var(--bg-card)`,
                    borderColor: `var(--border-color)`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${method.color}18`, color: method.color }}
                  >
                    <method.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: `var(--text-tertiary)` }}>
                      {method.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: `var(--text-primary)` }}>
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Fun availability note */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="p-5 rounded-2xl border"
              style={{ backgroundColor: `var(--accent-light)`, borderColor: `var(--accent-color)` }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm font-bold" style={{ color: `var(--accent-color)` }}>
                  Open to opportunities
                </p>
              </div>
              <p className="text-xs" style={{ color: `var(--text-secondary)` }}>
                Currently looking for full-time roles and interesting projects.
              </p>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl border space-y-5"
            style={{ backgroundColor: `var(--bg-card)`, borderColor: `var(--border-color)` }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: `var(--text-tertiary)` }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent-color)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: `var(--text-tertiary)` }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent-color)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: `var(--text-tertiary)` }}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent-color)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: `var(--text-tertiary)` }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me what's on your mind..."
                rows={5}
                required
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent-color)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02, boxShadow: "var(--glow)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
              style={{ background: "var(--gradient-1)", opacity: status === "sending" ? 0.7 : 1 }}
            >
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message sent — I'll be in touch!"}
              {status === "error" && "Something went wrong — try emailing directly."}
              {status === "idle" && <><Send size={16} /> Send Message</>}
            </motion.button>

            <p className="text-xs text-center" style={{ color: `var(--text-tertiary)` }}>
              I usually respond within 24 hours.
            </p>
          </motion.form>
        </div>
      </div>
    </PageLayout>
  );
}
