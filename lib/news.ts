export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  author: string;
  authorRole: string;
  summary: string;
  image: string;
  body: ArticleSection[];
};

export const articleHref = (article: Article) => `/news/${article.slug}`;

// Placeholder articles written for the site. Replace with the firm's own posts.
// The first one is featured.
export const articles: Article[] = [
  {
    slug: "what-a-compliance-review-covers",
    category: "Corporate & Regulatory",
    title: "What a compliance review actually covers",
    author: "Lex Habitae",
    authorRole: "Editorial Team",
    summary:
      "The areas a regulatory compliance review examines, what we ask for, and what you receive at the end of it.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=2000&q=80",
    body: [
      {
        paragraphs: [
          "Most businesses know they have regulatory obligations. Far fewer can say with confidence which ones apply to them, whether they are currently meeting them, and where the gaps are. A compliance review answers those three questions in a structured way.",
        ],
      },
      {
        heading: "Mapping the rules that apply to you",
        paragraphs: [
          "The first step is identifying the regulatory framework your business operates within. That depends on your sector, your structure, where you operate and the kind of customers you serve. A business can fall under several regulators at once, each with its own filing, reporting and licensing requirements.",
          "We build a clear map of those obligations before looking at how the business measures up against them.",
        ],
      },
      {
        heading: "What we ask for",
        paragraphs: [
          "To assess where you stand, we typically request your incorporation documents, current licences and permits, recent statutory filings, key internal policies and a sample of your standard contracts. We may also speak with the people responsible for day-to-day operations.",
          "Nothing is assumed. Every conclusion in the review is tied back to a document or a requirement.",
        ],
      },
      {
        heading: "What you receive",
        paragraphs: [
          "At the end of the review you receive a written report that sets out each obligation, your current position against it, the level of risk where a gap exists and a practical recommendation for closing it. Items are prioritised so you know what to address first.",
          "The aim is not a long list of problems. It is a plan your team can act on.",
        ],
      },
    ],
  },
  {
    slug: "five-questions-before-an-acquisition",
    category: "Due Diligence & Compliance",
    title: "Five questions to ask before an acquisition",
    author: "Lex Habitae",
    authorRole: "Editorial Team",
    summary:
      "The checks that surface hidden liabilities early, before they become part of the deal.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=2000&q=80",
    body: [
      {
        paragraphs: [
          "An acquisition brings the target's assets, and its liabilities, into your business. Legal due diligence is how you find out what those liabilities are before you commit. These five questions are a useful place to start.",
        ],
      },
      {
        heading: "1. Does the seller actually own what is being sold?",
        paragraphs: [
          "Confirm title to shares, property, intellectual property and key equipment. Look for charges, liens or third-party claims that could follow the asset after completion.",
        ],
      },
      {
        heading: "2. Is the business properly licensed?",
        paragraphs: [
          "Check that all licences and permits required to operate are valid, held in the right name and transferable. A licence that lapses on a change of control can stop the business the day you take over.",
        ],
      },
      {
        heading: "3. What do the key contracts say about a change of ownership?",
        paragraphs: [
          "Major customer, supplier and financing agreements often contain change-of-control clauses that allow the other party to terminate or renegotiate. Identify them early so they can be addressed in the deal terms.",
        ],
      },
      {
        heading: "4. Are there disputes, claims or regulatory investigations?",
        paragraphs: [
          "Ongoing litigation, threatened claims and open regulatory matters can carry significant cost. Ask for a full list and review the underlying documents rather than relying on summaries.",
        ],
      },
      {
        heading: "5. Are the company's records and filings up to date?",
        paragraphs: [
          "Outstanding statutory filings, unpaid obligations and incomplete corporate records are common. They are usually fixable, but they should be priced into the deal or resolved before completion.",
        ],
      },
    ],
  },
  {
    slug: "clauses-worth-reading-twice",
    category: "Commercial Advisory",
    title: "Clauses worth reading twice in a commercial agreement",
    author: "Lex Habitae",
    authorRole: "Editorial Team",
    summary:
      "Termination, liability and dispute resolution: where most contract problems start.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=2000&q=80",
    body: [
      {
        paragraphs: [
          "Most of a commercial agreement describes what each party will do. A handful of clauses decide what happens when things do not go to plan. Those are the ones worth reading twice.",
        ],
      },
      {
        heading: "Termination",
        paragraphs: [
          "Check when each party can end the agreement, how much notice is required and what happens on exit. Pay attention to payments due on termination, the return of materials and any obligations that survive after the contract ends.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "This clause caps what one party can recover from the other. Make sure the cap is proportionate to the value and risk of the contract, and check what is excluded from it entirely.",
        ],
      },
      {
        heading: "Indemnities",
        paragraphs: [
          "An indemnity is a promise to cover specific losses. Because indemnities often sit outside the liability cap, a broadly drafted one can expose a business to far more than the contract is worth.",
        ],
      },
      {
        heading: "Dispute resolution",
        paragraphs: [
          "Know how disputes will be handled before one arises: negotiation, mediation, arbitration or the courts, which law governs the agreement and where proceedings will take place. A clear process saves time and cost when it matters most.",
        ],
      },
    ],
  },
];

export const featuredArticle = articles[0];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
