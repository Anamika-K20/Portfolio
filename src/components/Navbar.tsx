import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Research", path: "/research" },
  { label: "Resume", path: "/resume" },
  { label: "Education", path: "/education" },
  { label: "Positions of Responsibility", path: "/extracurricular" },
  { label: "Coding", path: "/coding" },
  { label: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? `var(--bg-secondary)` : "transparent",
        borderBottom: scrolled ? `1px solid var(--border-color)` : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Custom logo mark — rose petal / A monogram */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white relative overflow-hidden"
                style={{ background: "var(--gradient-1)" }}
              >
                <span style={{ fontFamily: "'Italiana', serif", fontSize: "1rem", letterSpacing: "-0.02em" }}>A</span>
              </div>
              <span
                className="text-base font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)", color: `var(--text-primary)` }}
              >
                Anamika
              </span>
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors duration-200"
                  style={{
                    color: active ? `var(--accent-color)` : `var(--text-secondary)`,
                    backgroundColor: active ? `var(--accent-light)` : "transparent",
                  }}
                >
                  <motion.span
                    whileHover={{ color: "var(--accent-color)" }}
                    className="relative z-10"
                  >
                    {item.label}
                  </motion.span>
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ backgroundColor: `var(--accent-light)` }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="hidden xl:flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/Anamika-K20", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/anamika-kumari-3a594124b/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:anamikawork2004@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1.5 rounded-lg transition-colors"
                style={{ color: `var(--text-tertiary)` }}
                title={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg border ml-1 transition-all"
              style={{
                backgroundColor: `var(--bg-tertiary)`,
                color: `var(--accent-color)`,
                borderColor: `var(--border-color)`,
              }}
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>
          </div>

          {/* Mobile */}
          <div className="xl:hidden flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg border"
              style={{
                backgroundColor: `var(--bg-tertiary)`,
                color: `var(--accent-color)`,
                borderColor: `var(--border-color)`,
              }}
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg"
              style={{ color: `var(--text-secondary)` }}
            >
              <AnimatePresence mode="wait">
                {isOpen
                  ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={20} /></motion.div>
                  : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={20} /></motion.div>
                }
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="xl:hidden overflow-hidden border-t"
              style={{ borderColor: `var(--border-color)` }}
            >
              <div className="flex flex-col py-3 px-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link
                      to={item.path}
                      className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                      style={{
                        color: location.pathname === item.path ? `var(--accent-color)` : `var(--text-secondary)`,
                        backgroundColor: location.pathname === item.path ? `var(--accent-light)` : "transparent",
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
