export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string | null;   // path like "/books/atomic-habits.jpg" or null for placeholder
  genre: string;
  rating: number;         // 1–5
  dateRead: string;       // "March 2025"
  review: string;
  quote?: string;         // favourite quote from the book
  color: string;          // spine/cover accent color
}

// 📚 Add your books here!
export const books: Book[] = [
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    cover: null,
    genre: "Self-Help",
    rating: 5,
    dateRead: "January 2025",
    color: "#f5c842",
    quote: "You do not rise to the level of your goals. You fall to the level of your systems.",
    review: `This book completely changed how I think about building habits. Clear's framework of making habits obvious, attractive, easy, and satisfying is deceptively simple but incredibly powerful.

The idea that resonated most with me: identity-based habits. Instead of "I want to read more," you say "I am a reader." That small shift in framing changes everything.

I started applying the 2-minute rule to my coding practice — just open the editor, write two lines. That's it. And somehow, I always end up writing much more.

Highly recommend to anyone who feels stuck in cycles of starting and stopping habits.`,
  },
  {
    id: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    cover: null,
    genre: "Productivity",
    rating: 5,
    dateRead: "February 2025",
    color: "#4f46e5",
    quote: "Clarity about what matters provides clarity about what does not.",
    review: `Reading this during exam season was either the best or worst timing. Newport's argument is simple: the ability to focus without distraction is becoming increasingly rare and increasingly valuable.

The most impactful section for me was about "deep work scheduling" — blocking out distraction-free time like a meeting you can't cancel. I started doing 2-hour deep work blocks every morning before checking my phone, and the difference in output quality is remarkable.

The chapter on "quit social media" is a bit extreme, but the underlying point about attention as a finite resource is worth sitting with.`,
  },
  {
    id: "the-alchemist",
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: null,
    genre: "Fiction",
    rating: 4,
    dateRead: "December 2024",
    color: "#e8927c",
    quote: "And, when you want something, all the universe conspires in helping you to achieve it.",
    review: `A beautiful, allegorical story about following your dreams. Santiago's journey from shepherd to treasure-seeker is really a metaphor for anyone trying to find their purpose.

I read this in one sitting on a train journey. It's the kind of book that feels like it was written specifically for you, even though millions of people feel the same way — which is probably the magic of it.

Some parts feel a bit too mystical for my taste, but the core message about listening to your heart and not being afraid of failure is timeless.`,
  },
  {
    id: "educated",
    title: "Educated",
    author: "Tara Westover",
    cover: null,
    genre: "Memoir",
    rating: 5,
    dateRead: "November 2024",
    color: "#10b981",
    quote: "You can love someone and still choose to say goodbye to them.",
    review: `One of the most powerful memoirs I've ever read. Westover's story of growing up in a survivalist family in rural Idaho, with no formal education, and eventually earning a PhD from Cambridge is extraordinary.

What struck me most was her exploration of how education doesn't just teach you facts — it teaches you how to think, how to question, and ultimately how to construct your own identity separate from what you were told to be.

As someone who values education deeply, this book made me appreciate it in a completely different way. It's not just about knowledge. It's about freedom.`,
  },
  // ➕ Add more books here
];
