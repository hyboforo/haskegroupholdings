// Central site settings and content. Edit these first.
export const site = {
  name: "Haske Group Holdings",
  url: "https://haskegroupholdings.com",
  description:
    "Haske Group Holdings is the Accra-based parent company of HaskeHub and HaskeConsulting, building technology businesses for Ghana.",
  email: "hello@haskegroupholdings.com",
  address: "Accra, Ghana",
  // Add if you want a phone line on the site, e.g. "+233 20 000 0000".
  phone: "",
};

export type Company = {
  name: string;
  url: string;
  domain: string;
  kind: string;
  color: string;
  summary: string;
  /** Short list of what the company does. */
  focus: string[];
  /** Optional extra line, e.g. a product the company runs. */
  note?: string;
};

export const companies: Company[] = [
  {
    name: "HaskeHub",
    url: "https://www.haskehub.com",
    domain: "haskehub.com",
    kind: "Creator marketplace",
    color: "#E8794A",
    summary:
      "Where brands, creators and venues find each other in Ghana. Brands browse creators by reach, niche and town; creators decide who gets to reach them.",
    focus: [
      "Creator discovery by reach, niche and town",
      "Introductions that need the creator's say-so",
      "A directory of photo-friendly cafés, rooftops and studios",
    ],
  },
  {
    name: "HaskeConsulting",
    url: "https://haskeconsulting.com",
    domain: "haskeconsulting.com",
    kind: "Technology services",
    color: "#3FA58A",
    summary:
      "Software, websites and IT expertise for businesses: from building the system to planning and running the project around it.",
    focus: ["Software development", "Web development", "IT consulting", "IT project management"],
    note: "Also builds and runs Taskers Ghana, a marketplace for verified taskers.",
  },
];

export const principles = [
  {
    title: "Separate brands",
    body: "Each Haske company runs under its own name, with its own customers and its own team.",
  },
  {
    title: "Shared foundations",
    body: "The group provides leadership, finance, hiring and the engineering standards our companies build on.",
  },
  {
    title: "Built for Ghana",
    body: "Mobile money, SMS and WhatsApp come first, and our products are designed to work well on mobile data.",
  },
];

export type Leader = {
  name: string;
  initials: string;
  role: string;
  short: string;
  photo?: string;
  linkedin?: string;
};

// To add a photo: put a square image in /public/team/ and set `photo: "/team/name.jpg"`.
export const leaders: Leader[] = [
  {
    name: "Hanan Yaro Boforo",
    initials: "HB",
    role: "Co-founder · CEO, HaskeConsulting",
    short: "15+ years building and running large-scale identity, health-insurance and payments systems across Africa.",
    linkedin: "https://www.linkedin.com/in/hananboforo/",
  },
  {
    name: "Whitney Adu-Yaro",
    initials: "WA",
    role: "Co-founder · COO, HaskeConsulting",
    short: "Runs operations day to day and leads creative direction and marketing.",
  },
  {
    name: "Salifu Boforo Yakubu",
    initials: "SY",
    role: "Co-founder · Lead Developer, HaskeConsulting",
    short: "Backend engineer building the Java and Spring Boot systems behind our products.",
    linkedin: "https://www.linkedin.com/in/salifu-yakubu",
  },
];

export const nav = [
  { href: "/about/", label: "About" },
  { href: "/#companies", label: "Our companies" },
  { href: "/careers/", label: "Careers" },
  { href: "/contact/", label: "Contact" },
];
