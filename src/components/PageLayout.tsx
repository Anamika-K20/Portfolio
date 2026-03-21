import { motion } from "framer-motion";
import { Navbar } from "./Navbar";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: `var(--bg-primary)` }}>
      {/* Ambient background orbs */}
      <div
        className="orb w-96 h-96 top-0 right-0 opacity-30"
        style={{ background: "var(--accent-color)", position: "fixed", zIndex: 0 }}
      />
      <div
        className="orb w-80 h-80 bottom-20 left-0 opacity-20"
        style={{ background: "var(--accent-secondary)", position: "fixed", zIndex: 0, animationDelay: "4s" }}
      />

      <Navbar />

      <motion.main
        className="pt-16 relative z-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>

      <footer
        className="relative z-10 py-8 text-center border-t mt-20"
        style={{ borderColor: `var(--border-color)` }}
      >
        <p className="text-xs font-medium" style={{ color: `var(--text-tertiary)` }}>
          © 2026 Anamika Kumari
        </p>
      </footer>
    </div>
  );
};
