import { BadgeCheck, Building2, IdCard, Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { title } from "process";

export const images = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663572124588/8SKX55LiNzpwR5beNSr8n2/tt-marble-hero-kitchen-EnX8CUaTwoe58J68nfKECJ.webp",
  cnc: "https://d2xsxph8kpxj0f.cloudfront.net/310519663572124588/8SKX55LiNzpwR5beNSr8n2/tt-marble-cnc-factory-XBmr6T3iPnvpWSjXynasou.webp",
  inspection: "https://d2xsxph8kpxj0f.cloudfront.net/310519663572124588/8SKX55LiNzpwR5beNSr8n2/tt-marble-slab-inspection-a2jtSkcCd8ag8YapNYUkti.webp",
  lobby: "https://d2xsxph8kpxj0f.cloudfront.net/310519663572124588/8SKX55LiNzpwR5beNSr8n2/tt-marble-commercial-lobby-KPFV8z3nn7XUEdPxhz2zaY.webp",
  detail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663572124588/8SKX55LiNzpwR5beNSr8n2/tt-marble-detail-edge-ASHVCESMQz7qNwoxNGLoyj.webp",
};

// Shared animation variants
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const cardFadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

// Unified animation profiles
export const animationProfiles = {
  // Text entrance (heading, paragraphs)
  text: {
    spring: { type: "spring" as const, stiffness: 170, damping: 24, mass: 1.1 },
  },
  // Card entrance (process steps, market cards)
  card: {
    spring: { type: "spring" as const, stiffness: 175, damping: 24, mass: 1.08 },
  },
  // Stagger configuration for containers
  stagger: {
    container: { delayChildren: 0.09, staggerChildren: 0.06 },
    cardDelay: (index: number) => index * 0.015,
  },
};

export const process = [
  { step: "01", title: "Source & inspect slabs", copy: "We assess veining, structure, finish potential, thickness, and suitability before a slab is committed to a project." },
  { step: "02", title: "Template the space", copy: "Precise site templating captures cabinetry, walls, appliances, cutouts, joins, tolerances, and installation constraints." },
  { step: "03", title: "Model & coordinate", copy: "Complex layouts are resolved before production, including mitres, returns, edge profiles, book-matching, and detailing." },
  { step: "04", title: "Cut with 3D precision", copy: "Advanced 3D cutting capability allows sophisticated forms, accurate profiles, clean openings, and repeatable high-standard results." },
  { step: "05", title: "Shape, mitre & join", copy: "Edges, seams, mitred corners, drainer lines, shadow details, and junctions are fabricated for visual continuity and strength." },
  { step: "06", title: "Polish, seal & install", copy: "The finished pieces are polished, sealed, handled carefully, and installed by a dedicated team focused on site-ready excellence." },
];

export const capabilities = [
  "Kitchen islands & benchtops",
  "Commercial lobby features",
  "Luxury bathrooms & vanities",
  "Stair treads & stone landings",
  "Fireplace surrounds",
  "Wall cladding & book-matching",
  "Curved and profiled edges",
  "Cutouts, grooves & drainage details",
];

export const markets = [
  {
    title: "Commercial Projects",
    description: "For developers, architects, builders, and project teams seeking a reliable fabrication partner for feature walls, reception counters, amenities, hospitality fit-outs, and high-traffic premium stonework.",
    image: images.lobby,
  },
  {
    title: "Residential Projects",
    description: "For custom homes, penthouses, and design-led renovations requiring refined marble kitchens, bathrooms, fireplaces, vanities, stair details, and bespoke statement pieces.",
    image: images.hero,
  },
];

export const teamMembers = [
  {
    name: "Kevin Nguyen",
    title: "Owner",
    role: "Client coordination & project delivery",
    copy: "Kevin is the founder and owner of TT Marble, bringing years of hands-on stone fabrication experience and a strong reputation for exceptional customer service. He works closely with every client from planning through installation, with a clear focus on quality, communication, and delivering results that meet or exceed expectations.",
  },
  {
    name: "xxx",
    title:"Factory Manager",
    role: "3D cutting, production & quality control",
    copy: "does Kevin need this role?",
  },
  {
    name: "xxx",
    title:"Installation lead",
    role: "Site readiness & installation detail",
    copy: "Add the senior installer here. This profile can show site experience, builder coordination, careful handling, sealing, finishing, and problem-solving on complex builds.",
  },
];

export const credentials: { label: string; value: string; icon: LucideIcon }[] = [
  { label: "Trade licence", value: "TBC", icon: IdCard },
  { label: "ABN", value: "89660878820", icon: BadgeCheck },
  { label: "Factory address", value: "32/13 Swaffham Road, Minto, NSW 2566", icon: MapPin },
  { label: "Mobile", value: "+61 402 775 678", icon: Phone },
  { label: "Email", value: "TBC", icon: Mail },
  { label: "Service area", value: "Sydney, Wollongong, TBC...", icon: Building2 },
];
