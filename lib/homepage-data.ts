// Static/mock content for the ACME homepage, captured from Figma file
// eWjlwK9Iwj51cqYFKtkvMm, node 81:157 ("ACME Homepage — V3"). No backend/data
// wiring — see build spec Section 10 (non-goals).

export interface QuickAccessProduct {
  name: string;
  priceLabel: string; // e.g. "$4.20 / ea" or "Request Quote"
  partNumber: string;
}

export const quickAccessProducts: QuickAccessProduct[] = [
  {
    name: "Hex Head Bolt, Cres Steel",
    priceLabel: "$4.20 / ea",
    partNumber: "NAS1352C08-B",
  },
  {
    name: "Self-Locking Nut, 1/2-20",
    priceLabel: "$2.85 / ea",
    partNumber: "MS21042L8",
  },
  {
    name: "Inconel 625 Round Bar",
    priceLabel: "Request Quote",
    partNumber: "AMS5662 Bar",
  },
  {
    name: "O-Ring, Buna-N 70 Shore A",
    priceLabel: "$0.68 / ea",
    partNumber: "P/N AS3209-12",
  },
];

export interface Category {
  name: string;
  stat: string;
}

export const categories: Category[] = [
  { name: "Fasteners & Hardware", stat: "12,400+ parts from 85 suppliers" },
  { name: "Composites & Raw Materials", stat: "3,200+ SKUs in stock" },
  { name: "Avionics Components", stat: "8,700+ certified parts" },
  { name: "Seals & Gaskets", stat: "5,100+ materials & sizes" },
  { name: "Tooling & MRO", stat: "9,500+ tools & consumables" },
  { name: "Electrical & Wiring", stat: "6,300+ connectors & wire" },
  { name: "Custom Fabrication", stat: "RFQ — 40+ fabricators" },
  { name: "Raw Stock & Bar", stat: "4,800+ materials & forms" },
];

export interface FeaturedPart {
  title: string;
  partNumber: string;
  stockStatus: "In Stock" | "RFQ";
  priceLabel: string; // "$X/unit" or "Request Quote"
  manufacturer: string;
}

export const featuredParts: FeaturedPart[] = [
  {
    title: "Hex Head Bolt, Corrosion Resistant Steel, 3/8-16 × 1/2 in",
    partNumber: "NAS1352C08-B",
    stockStatus: "In Stock",
    priceLabel: "$4.20 / ea",
    manufacturer: "Honeywell Aerospace",
  },
  {
    title: "7075-T6 Aluminum Sheet, 0.063 in × 48 in × 144 in",
    partNumber: "AMS 4150 Sheet",
    stockStatus: "In Stock",
    priceLabel: "$89.50 / sq ft",
    manufacturer: "Kaiser Aluminum",
  },
  {
    title: "Mil-Spec O-Ring Kit, Buna-N, 70 Shore A, 382-piece",
    partNumber: "P/N 3000-100-05",
    stockStatus: "In Stock",
    priceLabel: "$245.00 / kit",
    manufacturer: "Parker Hannifin",
  },
  {
    title: "Flexon Composite Panel, Carbon Fiber / Epoxy, 24 × 48 in",
    partNumber: "PN 22-0003",
    stockStatus: "RFQ",
    priceLabel: "Request Quote",
    manufacturer: "Cytec Engineered Materials",
  },
];

export const industries: string[] = [
  "Aerospace & Defense",
  "Commercial Aviation",
  "MRO",
  "Space",
  "Industrial",
  "Marine",
];

export interface TrustSignal {
  heading: string;
  subline: string;
}

export const trustSignals: TrustSignal[] = [
  {
    heading: "Verified Suppliers",
    subline: "Every supplier audited and AS9100-qualified",
  },
  {
    heading: "Compliance Docs Included",
    subline: "CoCs, MTRs, and certs with every order",
  },
  {
    heading: "Real-Time Inventory",
    subline: "Live stock counts, no backorder surprises",
  },
];

export const footerColumns: { title: string; links: string[] }[] = [
  {
    title: "Catalog",
    links: ["All Parts", "By Category", "By Supplier", "New Arrivals", "Promotions"],
  },
  {
    title: "Account",
    links: [
      "My Orders",
      "Saved Lists",
      "Quotes & RFQs",
      "Account Settings",
      "Company Account",
    ],
  },
  {
    title: "Company",
    links: ["About ACME", "Supplier Portal", "API Access", "Careers", "Press"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "Compliance Docs", "Returns", "Live Chat"],
  },
];

export const legalLinks: string[] = [
  "Privacy Policy",
  "Terms of Use",
  "Cookie Settings",
  "Accessibility",
];

export const navLinks: string[] = ["Categories", "Suppliers", "My Orders", "My Lists"];
