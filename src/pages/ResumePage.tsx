import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

// 📄 Drop your resume PDF into the public/ folder and update this path
const RESUME_PDF = "/resume.pdf";

export default function ResumePage() {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: `var(--accent-color)` }}>
            MY RESUME
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: `var(--accent-color)` }}>
            Resume
          </h1>

          <div className="flex justify-center gap-4 flex-wrap">
            <motion.a
              href={RESUME_PDF}
              download
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white"
              style={{ backgroundColor: `var(--accent-color)` }}
            >
              <Download size={18} /> Download PDF
            </motion.a>
            <motion.a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2"
              style={{ borderColor: `var(--accent-color)`, color: `var(--accent-color)` }}
            >
              <ExternalLink size={18} /> Open in New Tab
            </motion.a>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border overflow-hidden"
          style={{ borderColor: `var(--border-color)` }}
        >
          <iframe
            src={RESUME_PDF}
            title="Anamika Kumari Resume"
            className="w-full"
            style={{ height: "85vh", border: "none" }}
          />
        </motion.div>

        {/* Fallback message */}
        <p className="text-center text-sm mt-4" style={{ color: `var(--text-tertiary)` }}>
          If the PDF doesn't load, use the download button above.
        </p>
      </div>
    </PageLayout>
  );
}
