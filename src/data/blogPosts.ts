export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string; // supports basic markdown-style line breaks
  emoji: string;
}

// ✍️ Add your blog posts here — newest first
export const blogPosts: BlogPost[] = [
  {
    slug: "first-post",
    title: "Hello, World — Why I Started This Blog",
    date: "2025-03-01",
    tags: ["life", "thoughts"],
    emoji: "👋",
    excerpt:
      "Every developer eventually starts a blog. Here's mine, and why I decided to finally do it.",
    content: `Every developer eventually starts a blog. Here's mine.

I've been meaning to write for a while now — not tutorials, not technical deep-dives (maybe sometimes), but just... thoughts. Things I notice. Things I learn. Things that make me go "huh, interesting."

So here we are. No promises on frequency, no promises on topic. Just honest writing whenever I have something worth saying.

If you're reading this — hi! Welcome to my little corner of the internet. 🌸`,
  },
  {
    slug: "rag-pipeline-learnings",
    title: "What I Learned Building a RAG Pipeline at Citi Bank",
    date: "2025-02-15",
    tags: ["tech", "AI", "internship"],
    emoji: "🤖",
    excerpt:
      "Two months, one RAG pipeline, and a 95% reduction in document processing time. Here's what I actually learned.",
    content: `Two months, one RAG pipeline, and a 95% reduction in document processing time.

The internship at Citi Bank was my first real taste of enterprise-scale AI. Not research papers, not toy datasets — actual production systems that people depend on every day.

The biggest lesson? **The hard part isn't the model.** It's the data pipeline. Getting PDFs to parse correctly, handling edge cases in document structure, making sure the retrieval is actually retrieving the right chunks — that's where 80% of the work lives.

FAISS is incredibly fast. PyMuPDF is surprisingly powerful. And FastAPI makes building APIs feel almost too easy.

More on the technical details in a future post. For now — if you're building RAG, spend more time on your chunking strategy than your model choice. Trust me.`,
  },
  // ➕ Add more posts here
];
