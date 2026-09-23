export const overview = [
  "We provide corporate, regulatory, and commercial advisory services to support businesses in meeting legal and compliance obligations within complex regulatory frameworks.",
  "Our services are delivered in a structured and client-specific manner, covering corporate consultancy, due diligence and compliance reviews, and contractual and commercial advisory.",
  "All services are offered for informational and advisory purposes only and do not constitute a guarantee of outcomes or substitute for formal legal representation where required by law.",
];

export const stats = [
  { value: 15, suffix: "", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Trusted Clients" },
];

export type TeamMember = {
  name: string;
  role?: string;
  image?: string;
  linkedin?: string;
  x?: string;
};

// Roles and photos still to come for Sunday and Oluwatosin.
export const team: TeamMember[] = [
  {
    name: "Ivbiobe Oghayei",
    role: "Team Lead",
    image: "/images/team/ivbiobe-oghayei.png",
    linkedin: "https://ca.linkedin.com/in/sioghayei",
  },
  { name: "Sunday Oghayei" },
  { name: "Oluwatosin Oghayei" },
];
