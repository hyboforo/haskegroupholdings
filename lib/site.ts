// Central site settings. Edit these first.
export const site = {
  name: "Haske Group Holdings",
  url: "https://www.haskegroupholdings.com",
  description:
    "Haske Group Holdings is the parent company of HaskeHub and HaskeConsulting, building digital businesses in Ghana.",
  // TODO: confirm the real inbox before launch.
  email: "hello@haskegroupholdings.com",
  // TODO: replace with the registered address.
  address: "[Registered address], Accra, Ghana",
  // TODO: add if you want a phone line on the site, e.g. "+233 20 000 0000".
  phone: "",
};

export const companies = [
  {
    name: "HaskeHub",
    url: "https://www.haskehub.com",
    domain: "haskehub.com",
    kind: "Marketplace",
    color: "#E8794A",
    summary:
      "Where brands, creators and venues find each other in Ghana. Brands browse creators by reach, niche and town; creators decide who gets to reach them.",
  },
  {
    name: "HaskeConsulting",
    url: "https://www.haskeconsulting.com",
    domain: "haskeconsulting.com",
    kind: "Consulting & software",
    color: "#3FA58A",
    summary:
      "Ready-made digital products and bespoke builds for businesses, from online shops to booking and operations tools.",
  },
];

export const nav = [
  { href: "/about/", label: "About" },
  { href: "/#companies", label: "Our companies" },
  { href: "/careers/", label: "Careers" },
  { href: "/contact/", label: "Contact" },
];
