export type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
  // What the service covers, shown on the Practice Areas page.
  details: string[];
  badge?: string;
};

// Placeholder images from Pinterest. Swap for the firm's own photography.
export const services: Service[] = [
  {
    number: "01",
    title: "Corporate & Regulatory",
    description:
      "Strategic guidance to navigate complex regulatory frameworks and ensure full business compliance across industries.",
    image:
      "https://i.pinimg.com/736x/e9/86/d1/e986d15e5388616f562cbb8a1c8df969.jpg",
    details: [
      "Corporate consultancy and governance advisory",
      "Regulatory framework analysis for your industry",
      "Licensing, approvals and regulatory filings",
      "Ongoing compliance monitoring and updates",
    ],
  },
  {
    number: "02",
    title: "Due Diligence & Compliance",
    description:
      "Comprehensive legal audits and risk assessments to protect your business interests, transactions, and investments.",
    image:
      "https://i.pinimg.com/736x/b9/98/3a/b9983adeca101412d88ded15ba5467fc.jpg",
    details: [
      "Legal due diligence for acquisitions and investments",
      "Compliance reviews and gap assessments",
      "Risk identification and written risk reports",
      "Practical remediation recommendations",
    ],
  },
  {
    number: "03",
    title: "Commercial Advisory",
    description:
      "Expert drafting, review, and negotiation of commercial agreements tailored to your specific business operations.",
    image:
      "https://i.pinimg.com/736x/d5/0b/61/d50b61817ed7bc10c8dd25e3926c8727.jpg",
    details: [
      "Drafting of commercial agreements",
      "Contract review and risk analysis",
      "Negotiation support and strategy",
      "Advice on commercial structures and terms",
    ],
    badge: "Most Requested",
  },
];
