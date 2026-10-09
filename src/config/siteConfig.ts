/**
 * ============================================================================
 * ARVEN EDGE — MASTER BRAND & SITE CONFIGURATION
 * ============================================================================
 * All business facts, social handles, contact details, statistics, pricing,
 * and reviews are centralized here with clearly marked editable placeholders
 * so nothing is fabricated and every value can be updated in one place.
 */

export const INSTAGRAM_URL = "https://www.instagram.com/YOUR_HANDLE/";

export const BOOKING_EXTERNAL_URL = ""; // Leave empty to use built-in luxury reservation desk UI, or insert external booking URL

export const BRAND_CONFIG = {
  name: "ARVEN EDGE",
  businessName: "ARVEN EDGE UNISEX SALON",
  tagline: "WHERE STYLE MEETS SOPHISTICATION",
  subtext:
    "An elevated grooming and beauty experience crafted for those who appreciate the finer details.",
  logoImageUrl: "", // Optional: Set path to custom uploaded logo file (e.g., "/logo.png") to override the official monochrome vector lockup
  instagramUrl: INSTAGRAM_URL,
  contact: {
    address: "[INSERT SALON ADDRESS]",
    phone: "[INSERT PHONE NUMBER]",
    email: "[INSERT EMAIL]",
    instagramDisplay: "[INSERT INSTAGRAM URL]",
    openingHours: "[INSERT BUSINESS HOURS]",
    googleMapsEmbedUrl: "", // Optional: Insert Google Maps embed iframe URL
    directionsUrl: "https://maps.google.com",
  },
  aboutStats: [
    {
      value: "10+",
      label: "Years of Expertise",
      note: "[Editable Placeholder]",
    },
    {
      value: "1000+",
      label: "Happy Clients",
      note: "[Editable Placeholder]",
    },
    {
      value: "Premium",
      label: "Salon Experience",
      note: "Unisex Sanctuary",
    },
  ],
};

export interface ServiceItem {
  id: string;
  category: "HAIR" | "BEAUTY" | "GROOMING";
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export const IMAGES = {
  heroSalon: "/src/assets/images/hero_salon_interior_1791443957574.jpg",
  aboutEditorial: "/src/assets/images/about_editorial_styling_1791443970067.jpg",
  experienceRitual: "/src/assets/images/experience_signature_ritual_1791443980152.jpg",
  bespokeGrooming: "/src/assets/images/gallery_bespoke_grooming_1791443991930.jpg",
  radiantBeauty: "/src/assets/images/gallery_radiant_beauty_1791444001398.jpg",
  architecturalDetail: "/src/assets/images/gallery_architectural_detail_1791444011569.jpg",
};

export const SERVICES_DATA: ServiceItem[] = [
  // HAIR
  {
    id: "haircut",
    category: "HAIR",
    name: "Haircut",
    description:
      "Architectural precision cutting tailored to your bone structure, hair texture, and personal movement.",
    price: "Price on consultation",
    duration: "60 Min",
    image: IMAGES.aboutEditorial,
  },
  {
    id: "hair-styling",
    category: "HAIR",
    name: "Hair Styling",
    description:
      "Runway-grade blowouts, sculptural setting, and effortless editorial finishing with heat-protective elixirs.",
    price: "Price on consultation",
    duration: "45 Min",
    image: IMAGES.radiantBeauty,
  },
  {
    id: "hair-spa",
    category: "HAIR",
    name: "Hair Spa",
    description:
      "Deep-restorative scalp hydro-therapy, acupressure massage, and warm steam botanical infusion.",
    price: "Price on consultation",
    duration: "75 Min",
    image: IMAGES.experienceRitual,
  },
  {
    id: "hair-treatment",
    category: "HAIR",
    name: "Hair Treatment",
    description:
      "Molecular bond reconstruction, keratin smoothing, and intensive lipid replenishment for lustrous strength.",
    price: "Price on consultation",
    duration: "90 Min",
    image: IMAGES.architecturalDetail,
  },
  {
    id: "hair-colour",
    category: "HAIR",
    name: "Hair Colour",
    description:
      "Bespoke dimensional balayage, glossing, and ammonia-free couture colour formulation.",
    price: "Price on consultation",
    duration: "120 Min",
    image: IMAGES.aboutEditorial,
  },
  {
    id: "hair-transformation",
    category: "HAIR",
    name: "Hair Transformation",
    description:
      "Comprehensive director-led restyle combining structural cut, custom colour alchemy, and bond therapy.",
    price: "Price on consultation",
    duration: "180 Min",
    image: IMAGES.heroSalon,
  },

  // BEAUTY
  {
    id: "facial",
    category: "BEAUTY",
    name: "Facial",
    description:
      "Cellular sculpting facial combining lymphatic drainage, active botanical serums, and dermal luminance therapy.",
    price: "Price on consultation",
    duration: "75 Min",
    image: IMAGES.radiantBeauty,
  },
  {
    id: "cleanup",
    category: "BEAUTY",
    name: "Cleanup",
    description:
      "Purifying ultrasonic pore refinement, gentle enzymatic exfoliation, and calming mineral mask.",
    price: "Price on consultation",
    duration: "45 Min",
    image: IMAGES.experienceRitual,
  },
  {
    id: "skin-care",
    category: "BEAUTY",
    name: "Skin Care",
    description:
      "Customized dermal barrier restoration protocols designed around your skin's seasonal diagnostic profile.",
    price: "Price on consultation",
    duration: "60 Min",
    image: IMAGES.architecturalDetail,
  },
  {
    id: "makeup",
    category: "BEAUTY",
    name: "Makeup",
    description:
      "High-fashion editorial, bridal, and evening complexion artistry using luxury long-wear formulations.",
    price: "Price on consultation",
    duration: "90 Min",
    image: IMAGES.radiantBeauty,
  },

  // GROOMING
  {
    id: "beard-styling",
    category: "GROOMING",
    name: "Beard Styling",
    description:
      "Geometric linework, graduated tapering, and custom proportion balancing for refined facial structure.",
    price: "Price on consultation",
    duration: "30 Min",
    image: IMAGES.bespokeGrooming,
  },
  {
    id: "beard-grooming",
    category: "GROOMING",
    name: "Beard Grooming",
    description:
      "Exfoliating beard cleanse, organic cold-pressed oil conditioning, and hot towel softening ritual.",
    price: "Price on consultation",
    duration: "45 Min",
    image: IMAGES.architecturalDetail,
  },
  {
    id: "shaving",
    category: "GROOMING",
    name: "Shaving",
    description:
      "Traditional straight-razor wet shave with multi-stage essential oil hot towels and soothing alum finish.",
    price: "Price on consultation",
    duration: "45 Min",
    image: IMAGES.bespokeGrooming,
  },
  {
    id: "premium-grooming",
    category: "GROOMING",
    name: "Premium Grooming",
    description:
      "The complete executive ritual: precision haircut, signature beard architecture, revitalizing facial, and scalp therapy.",
    price: "Price on consultation",
    duration: "120 Min",
    image: IMAGES.heroSalon,
  },
];

export interface ExperienceStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    number: "01",
    title: "CONSULTATION",
    subtitle: "Personalized Diagnostic",
    description:
      "Every visit begins with an unhurried one-on-one dialogue analyzing hair integrity, cranial geometry, skin profile, and personal lifestyle.",
  },
  {
    number: "02",
    title: "CRAFT",
    subtitle: "Master Execution",
    description:
      "Our senior directors apply editorial cutting techniques, custom colour chemistry, and quiet concentration in an acoustically serene setting.",
  },
  {
    number: "03",
    title: "DETAIL",
    subtitle: "Sensory Refinement",
    description:
      "From aromatic steam towel compresses to microscopic neckline detailing and tension-relieving scalp rituals, every millimeter is considered.",
  },
  {
    number: "04",
    title: "FINISH",
    subtitle: "Effortless Permanence",
    description:
      "Styled for movement and longevity—complete with a tailored maintenance regimen so your look endures well beyond the salon chair.",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | "Salon Interior"
    | "Hair Styling"
    | "Haircuts"
    | "Grooming"
    | "Beauty"
    | "Client Experience"
    | "Details / Atmosphere";
  aspect: "wide" | "tall" | "standard";
  image: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The Main Architectural Sanctuary",
    category: "Salon Interior",
    aspect: "wide",
    image: IMAGES.heroSalon,
    caption:
      "Brushed dark travertine, custom charcoal leather chairs, and diffused linear lighting.",
  },
  {
    id: "gal-2",
    title: "Precision Editorial Cut",
    category: "Haircuts",
    aspect: "tall",
    image: IMAGES.aboutEditorial,
    caption: "Bespoke structural silhouette crafted with Japanese cobalt steel shears.",
  },
  {
    id: "gal-3",
    title: "Sartorial Beard & Hair Architecture",
    category: "Grooming",
    aspect: "standard",
    image: IMAGES.bespokeGrooming,
    caption: "Tailored masculine grooming balancing sharp edges with natural texture.",
  },
  {
    id: "gal-4",
    title: "Luminous Cellular Complexion",
    category: "Beauty",
    aspect: "tall",
    image: IMAGES.radiantBeauty,
    caption: "Glass-skin facial therapy and sleek runway hair polishing.",
  },
  {
    id: "gal-5",
    title: "The Hydro-Spa Basin Suite",
    category: "Client Experience",
    aspect: "wide",
    image: IMAGES.experienceRitual,
    caption: "Private acoustic wash sanctuary designed for deep sensory decompression.",
  },
  {
    id: "gal-6",
    title: "Instruments of Precision",
    category: "Details / Atmosphere",
    aspect: "standard",
    image: IMAGES.architecturalDetail,
    caption: "Honed black marble station featuring matte carbon combs and botanical elixirs.",
  },
  {
    id: "gal-7",
    title: "Sculptural Gloss & Movement",
    category: "Hair Styling",
    aspect: "standard",
    image: IMAGES.aboutEditorial,
    caption: "Lustrous editorial finish with weightless volume and mirror-like shine.",
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  serviceTag: string;
  isPlaceholder: boolean;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    quote:
      "Premium service, beautiful ambience and incredible attention to detail.",
    clientName: "Client Name [Editable Placeholder]",
    serviceTag: "Signature Hair & Styling",
    isPlaceholder: true,
  },
  {
    id: "test-2",
    quote:
      "From the private consultation to the final finish, the atmosphere feels like an international fashion house rather than a typical salon.",
    clientName: "Client Name [Editable Placeholder]",
    serviceTag: "Executive Grooming Ritual",
    isPlaceholder: true,
  },
  {
    id: "test-3",
    quote:
      "Unrushed precision and an extraordinary eye for proportion. The calm, architectural space makes every appointment a true retreat.",
    clientName: "Client Name [Editable Placeholder]",
    serviceTag: "Bespoke Colour & Spa",
    isPlaceholder: true,
  },
];

export const INSTAGRAM_PREVIEW_POSTS = [
  {
    id: "ig-1",
    image: IMAGES.aboutEditorial,
    label: "Editorial Cut · Lookbook Placeholder",
  },
  {
    id: "ig-2",
    image: IMAGES.heroSalon,
    label: "Sanctuary Architecture · Placeholder",
  },
  {
    id: "ig-3",
    image: IMAGES.bespokeGrooming,
    label: "Sartorial Grooming · Placeholder",
  },
  {
    id: "ig-4",
    image: IMAGES.radiantBeauty,
    label: "Luminous Skin & Gloss · Placeholder",
  },
];
