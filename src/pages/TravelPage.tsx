import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, Play, ChevronRight, Camera, Film, MapPin } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

/* ─── Types ─────────────────────────────────────────────── */
type MediaItem =
  | { kind: "photo"; src: string | null; caption: string }
  | { kind: "video"; src: string | null; thumb: string | null; caption: string };

type Destination = {
  id: string;
  name: string;
  tagline: string;
  year: string;
  season: string;
  emoji: string;
  accentColor: string;
  description: string;
  longDescription: string;
  tags: string[];
  media: MediaItem[];
};

/* ─── Data ───────────────────────────────────────────────── */
const destinations: Destination[] = [
  {
    id: "manali",
    name: "Manali",
    tagline: "Where the sky meets snow",
    year: "2023", season: "Winter", emoji: "🏔️", accentColor: "#67e8f9",
    description: "Snow-capped peaks, Rohtang Pass, and the best maggi of my life.",
    longDescription: "There's something about Manali that resets you completely. The air is thin, the silence is loud, and every corner of Rohtang Pass feels like a painting someone forgot to finish. I ate maggi at 13,000 feet and genuinely considered never coming back.",
    tags: ["Mountains", "Snow", "Road Trip", "Himachal"],
    media: [
      { kind: "photo", src: null, caption: "Rohtang Pass at sunrise" },
      { kind: "photo", src: null, caption: "Snow walk near Solang Valley" },
      { kind: "video", src: null, thumb: null, caption: "Rohtang Pass vlog" },
    ],
  },
  {
    id: "goa",
    name: "Goa",
    tagline: "Salt, sun & zero productivity",
    year: "2022", season: "Winter", emoji: "🏖️", accentColor: "#f5c842",
    description: "Beaches, sunsets, and absolutely zero productivity.",
    longDescription: "Goa doesn't ask you to do anything. It just exists — warm, golden, and completely unbothered. I watched the same sunset three nights in a row from Vagator and felt no shame about it whatsoever.",
    tags: ["Beach", "Sunsets", "Vibes", "Goa"],
    media: [
      { kind: "photo", src: null, caption: "Vagator Beach golden hour" },
      { kind: "photo", src: null, caption: "Old Goa churches" },
      { kind: "video", src: null, thumb: null, caption: "Goa sunset reel" },
    ],
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    tagline: "A fort that glows like amber",
    year: "2023", season: "Winter", emoji: "🏜️", accentColor: "#f5a623",
    description: "Golden sand dunes, camel rides at sunset, and a fort that glows like amber.",
    longDescription: "Jaisalmer is the kind of place that looks unreal in photos and even more unreal in person. The fort literally glows at dusk — warm amber stone against a violet sky. The camel ride across Sam Sand Dunes at sunset was one of those moments I'll carry for a long time.",
    tags: ["Desert", "Fort", "Camel Safari", "Rajasthan"],
    media: [
      { kind: "photo", src: null, caption: "Sam Sand Dunes at dusk" },
      { kind: "photo", src: null, caption: "Jaisalmer Fort glow" },
      { kind: "photo", src: null, caption: "Camel silhouette at sunset" },
      { kind: "video", src: null, thumb: null, caption: "Desert vlog" },
    ],
  },
  {
    id: "jaipur",
    name: "Jaipur",
    tagline: "The Pink City in full bloom",
    year: "2023", season: "Spring", emoji: "🏰", accentColor: "#e8927c",
    description: "The Pink City — forts, palaces, and incredible street food.",
    longDescription: "Jaipur is overwhelming in the best way. Amber Fort alone could take a full day. Add Hawa Mahal, the bazaars, and the most chaotic yet delicious street food scene — and you've got a city that demands multiple visits.",
    tags: ["Heritage", "Forts", "Street Food", "Rajasthan"],
    media: [
      { kind: "photo", src: null, caption: "Amber Fort at dawn" },
      { kind: "photo", src: null, caption: "Hawa Mahal facade" },
      { kind: "video", src: null, thumb: null, caption: "Jaipur city vlog" },
    ],
  },
  {
    id: "agra",
    name: "Agra",
    tagline: "Standing before the impossible",
    year: "2022", season: "Autumn", emoji: "🕌", accentColor: "#c084fc",
    description: "Stood in front of the Taj Mahal and understood why people cry.",
    longDescription: "I thought I'd be immune to the Taj Mahal — too hyped, too touristy. I was wrong. Standing in front of it at 6am with the mist still low, I genuinely didn't know what to say. Some things are just bigger than your expectations.",
    tags: ["Heritage", "UNESCO", "Architecture", "UP"],
    media: [
      { kind: "photo", src: null, caption: "Taj Mahal at 6am" },
      { kind: "photo", src: null, caption: "Reflection pool view" },
      { kind: "video", src: null, thumb: null, caption: "Taj Mahal morning vlog" },
    ],
  },
  {
    id: "nainital",
    name: "Nainital",
    tagline: "A lake town wrapped in mist",
    year: "2023", season: "Monsoon", emoji: "🏞️", accentColor: "#34d399",
    description: "A lake town wrapped in mist — boat rides, pine forests, and perfect chai.",
    longDescription: "Nainital has this quiet magic that sneaks up on you. The lake is impossibly still in the mornings, the pine forests smell like rain, and every chai stall has a view worth sitting with for an hour. It's the kind of place that makes you slow down.",
    tags: ["Lake", "Hills", "Monsoon", "Uttarakhand"],
    media: [
      { kind: "photo", src: null, caption: "Naini Lake morning mist" },
      { kind: "photo", src: null, caption: "Pine forest trail" },
      { kind: "video", src: null, thumb: null, caption: "Nainital vlog" },
    ],
  },
  {
    id: "bhimtal",
    name: "Bhimtal",
    tagline: "Quieter, just as beautiful",
    year: "2023", season: "Monsoon", emoji: "💧", accentColor: "#38bdf8",
    description: "Quieter than Nainital, just as beautiful. The lake island aquarium was a surprise.",
    longDescription: "Nobody talks about Bhimtal enough. It's 20 minutes from Nainital and feels like a completely different world — fewer crowds, greener hills, and a lake with an actual aquarium on an island in the middle of it. Genuinely one of the most unexpected delights.",
    tags: ["Lake", "Hidden Gem", "Uttarakhand", "Offbeat"],
    media: [
      { kind: "photo", src: null, caption: "Bhimtal Lake island" },
      { kind: "photo", src: null, caption: "Aquarium on the island" },
    ],
  },
  {
    id: "jimcorbett",
    name: "Jim Corbett",
    tagline: "Holding your breath for a tiger",
    year: "2024", season: "Spring", emoji: "🐯", accentColor: "#fb923c",
    description: "Jungle safari at dawn — spotted deer, elephants, and held my breath for a tiger.",
    longDescription: "The jungle at 5am is a completely different world. The jeep cuts through fog, birds go quiet, and every rustle in the grass makes your heart stop. We spotted elephants, spotted deer, and a leopard in the distance. No tiger — but the waiting was its own kind of magic.",
    tags: ["Wildlife", "Safari", "Jungle", "Uttarakhand"],
    media: [
      { kind: "photo", src: null, caption: "Jungle safari at dawn" },
      { kind: "photo", src: null, caption: "Elephant sighting" },
      { kind: "video", src: null, thumb: null, caption: "Safari vlog" },
    ],
  },
];

const stats = [
  { value: "8", label: "Destinations" },
  { value: "6", label: "States" },
  { value: "3", label: "Years" },
  { value: "∞", label: "Memories" },
];

/* ─── Hero ───────────────────────────────────────────────── */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={ref} style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "center", overflow: "hidden", marginBottom: "4rem" }}>
      <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, #e8927c18 0%, transparent 70%)", top: "-200px", right: "-100px", pointerEvents: "none" }} />
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, -8, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, #c084fc14 0%, transparent 70%)", bottom: "-100px", left: "10%", pointerEvents: "none" }} />

      <motion.div style={{ y, opacity, position: "relative", zIndex: 1, maxWidth: "800px" }}>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.4em", color: "var(--accent-color)", textTransform: "uppercase", marginBottom: "1.2rem" }}>
          ✦ Adventures · India
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(4rem, 10vw, 7.5rem)", color: "var(--text-primary)", lineHeight: 0.9, marginBottom: "1.5rem" }}>
          Love to<br />
          <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Travel ✈️
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 2vw, 1.25rem)", fontStyle: "italic", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "520px", marginBottom: "2.5rem" }}>
          Every trip is a chapter. Every place leaves a mark. Here's a record of the ones that changed something in me — even just a little.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "flex", gap: "2.5rem" }}>
          {stats.map((s, i) => (
            <div key={i}>
              <p style={{ fontFamily: "'Italiana', serif", fontSize: "2.5rem", color: "var(--accent-color)", lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.2em", color: "var(--text-tertiary)", textTransform: "uppercase", marginTop: "4px" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating pills */}
      <div style={{ position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "10px", pointerEvents: "none" }}>
        {destinations.slice(0, 5).map((d, i) => (
          <motion.div key={d.id} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 0.35, x: 0 }} transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <span style={{ fontSize: "0.9rem" }}>{d.emoji}</span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.1em", color: "var(--text-tertiary)" }}>{d.name}</span>
            <MapPin size={9} style={{ color: "var(--text-tertiary)" }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Ticker ─────────────────────────────────────────────── */
function Ticker() {
  const items = destinations.map((d) => `${d.emoji}  ${d.name}`);
  const repeated = [...items, ...items, ...items];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "10px 0", marginBottom: "5rem" }}>
      <motion.div animate={{ x: ["0%", "-33.33%"] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: "3rem", whiteSpace: "nowrap" }}>
        {repeated.map((item, i) => (
          <span key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--text-tertiary)", textTransform: "uppercase" }}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Destination Card ───────────────────────────────────── */
function DestinationCard({ dest, index, onClick }: { dest: Destination; index: number; onClick: () => void }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group cursor-pointer"
      style={{ display: "grid", gridTemplateColumns: isEven ? "1fr 1.4fr" : "1.4fr 1fr", borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border-color)", backgroundColor: "var(--bg-card)", transition: "border-color 0.3s, box-shadow 0.3s" }}
      whileHover={{ boxShadow: `0 20px 60px ${dest.accentColor}22`, borderColor: dest.accentColor + "66" } as never}
    >
      {/* Visual panel */}
      <div style={{ order: isEven ? 0 : 1, position: "relative", minHeight: "260px", backgroundColor: "var(--bg-tertiary)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${dest.accentColor}22 0%, transparent 70%)` }} />
        <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ fontSize: "5rem", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.5))", position: "relative", zIndex: 1 }}>
          {dest.emoji}
        </motion.span>
        <div style={{ position: "absolute", top: "14px", left: "14px", fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.2em", color: dest.accentColor, backgroundColor: dest.accentColor + "18", border: `1px solid ${dest.accentColor}44`, borderRadius: "999px", padding: "4px 10px", textTransform: "uppercase" }}>
          {dest.year} · {dest.season}
        </div>
        <div style={{ position: "absolute", bottom: "14px", right: "14px", display: "flex", gap: "8px" }}>
          {dest.media.filter((m) => m.kind === "photo").length > 0 && (
            <span style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "'Space Mono', monospace", fontSize: "0.45rem", color: "var(--text-tertiary)" }}>
              <Camera size={10} /> {dest.media.filter((m) => m.kind === "photo").length}
            </span>
          )}
          {dest.media.filter((m) => m.kind === "video").length > 0 && (
            <span style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "'Space Mono', monospace", fontSize: "0.45rem", color: "var(--text-tertiary)" }}>
              <Film size={10} /> {dest.media.filter((m) => m.kind === "video").length}
            </span>
          )}
        </div>
      </div>

      {/* Text panel */}
      <div style={{ order: isEven ? 1 : 0, padding: "2rem 2.2rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.8rem" }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.3em", color: dest.accentColor, textTransform: "uppercase" }}>
          ✦ {dest.tags[dest.tags.length - 1]}
        </p>
        <h2 style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--text-primary)", lineHeight: 1 }}>
          {dest.name}
        </h2>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontStyle: "italic", color: dest.accentColor, lineHeight: 1.3 }}>
          {dest.tagline}
        </p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
          {dest.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
          {dest.tags.map((tag) => (
            <span key={tag} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.1em", color: dest.accentColor, backgroundColor: dest.accentColor + "14", border: `1px solid ${dest.accentColor}30`, borderRadius: "999px", padding: "3px 9px" }}>
              {tag}
            </span>
          ))}
        </div>
        <motion.div whileHover={{ x: 4 }} style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "8px", fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.15em", color: dest.accentColor, textTransform: "uppercase" }}>
          View Gallery <ChevronRight size={12} />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Modal ──────────────────────────────────────────────── */
function DestinationModal({ dest, onClose }: { dest: Destination; onClose: () => void }) {
  const [activeMedia, setActiveMedia] = useState<number | null>(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", overflowY: "auto" }}>
      <motion.div initial={{ opacity: 0, scale: 0.92, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 40 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: "860px", backgroundColor: "var(--bg-card)", borderRadius: "24px", border: `1px solid ${dest.accentColor}44`, overflow: "hidden", boxShadow: `0 40px 100px ${dest.accentColor}22` }}>

        {/* Header */}
        <div style={{ position: "relative", padding: "2.5rem 2.5rem 2rem", borderBottom: "1px solid var(--border-color)", background: `radial-gradient(ellipse at top left, ${dest.accentColor}14 0%, transparent 60%)` }}>
          <button onClick={onClose}
            style={{ position: "absolute", top: "1.2rem", right: "1.2rem", background: "var(--bg-tertiary)", border: "1px solid var(--border-color)", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", cursor: "pointer" }}>
            <X size={16} />
          </button>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1.2rem" }}>
            <span style={{ fontSize: "3.5rem", lineHeight: 1 }}>{dest.emoji}</span>
            <div>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.3em", color: dest.accentColor, textTransform: "uppercase", marginBottom: "6px" }}>
                ✦ {dest.year} · {dest.season} · {dest.tags.join(" · ")}
              </p>
              <h2 style={{ fontFamily: "'Italiana', serif", fontSize: "clamp(2.2rem, 4vw, 3rem)", color: "var(--text-primary)", lineHeight: 1, marginBottom: "6px" }}>
                {dest.name}
              </h2>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic", color: dest.accentColor }}>
                {dest.tagline}
              </p>
            </div>
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8, marginTop: "1.2rem", maxWidth: "680px" }}>
            {dest.longDescription}
          </p>
        </div>

        {/* Gallery */}
        <div style={{ padding: "2rem 2.5rem 2.5rem" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.25em", color: "var(--text-tertiary)", textTransform: "uppercase", marginBottom: "1rem" }}>
            ✦ Gallery & Vlogs
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "12px" }}>
            {dest.media.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.06 }}
                onClick={() => setActiveMedia(activeMedia === i ? null : i)} whileHover={{ scale: 1.02 }}
                style={{ borderRadius: "12px", overflow: "hidden", border: `1px solid ${activeMedia === i ? dest.accentColor : "var(--border-color)"}`, cursor: "pointer", backgroundColor: "var(--bg-tertiary)", transition: "border-color 0.2s" }}>
                <div style={{ height: "120px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", background: `radial-gradient(ellipse at center, ${dest.accentColor}18 0%, transparent 70%)`, position: "relative" }}>
                  {item.kind === "video" ? (
                    <>
                      <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: dest.accentColor + "33", border: `1px solid ${dest.accentColor}66`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Play size={14} style={{ color: dest.accentColor }} fill={dest.accentColor} />
                      </div>
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.1em", color: dest.accentColor, textTransform: "uppercase" }}>Video</span>
                    </>
                  ) : (
                    <>
                      <Camera size={20} style={{ color: dest.accentColor, opacity: 0.5 }} />
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.1em", color: "var(--text-tertiary)", textTransform: "uppercase" }}>Photo</span>
                    </>
                  )}
                  <div style={{ position: "absolute", top: "6px", right: "6px", fontFamily: "'Space Mono', monospace", fontSize: "0.38rem", color: "var(--text-tertiary)", backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "4px", padding: "2px 5px" }}>
                    + Add
                  </div>
                </div>
                <div style={{ padding: "8px 10px", borderTop: "1px solid var(--border-color)" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.78rem", fontStyle: "italic", color: "var(--text-secondary)", lineHeight: 1.4 }}>
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
            {/* Add more slot */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: dest.media.length * 0.06 }}
              whileHover={{ opacity: 0.8, scale: 1.02 }}
              style={{ borderRadius: "12px", border: "1px dashed var(--border-color)", backgroundColor: "var(--bg-secondary)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "155px", cursor: "pointer", opacity: 0.5 }}>
              <span style={{ fontSize: "1.5rem" }}>+</span>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.42rem", letterSpacing: "0.1em", color: "var(--text-tertiary)", textTransform: "uppercase", textAlign: "center", padding: "0 12px" }}>
                Add more memories
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function TravelPage() {
  const [selected, setSelected] = useState<Destination | null>(null);

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <HeroSection />
        <Ticker />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.3em", color: "var(--text-tertiary)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            ✦ Click any destination to open gallery
          </p>
          <div style={{ height: "1px", background: "var(--border-color)", width: "100%" }} />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.id} dest={dest} index={i} onClick={() => setSelected(dest)} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ marginTop: "5rem", textAlign: "center", padding: "2rem", borderRadius: "16px", border: "1px dashed var(--border-color)" }}>
          <p style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>✈️</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic", color: "var(--text-tertiary)" }}>
            More chapters being written...
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <DestinationModal dest={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </PageLayout>
  );
}
