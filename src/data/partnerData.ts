interface PartnerItem {
  id: string;
  name: string;
  type: string;
  desc: string;
  logoSrc: string;
  alt: string;
  website: string;
  logoScale?: number;
}

export const partnerData: PartnerItem[] = [
  { 
    id: "mmc",
    name: "MakeMyCampaign", 
    type: "CAMPAIGN & OUTREACH", 
    desc: "Campaign and outreach partner supporting political communication, targeted voter engagement, SMS planning, and campaign execution.",
    logoSrc: "/partner-logos/make-my-campaign-logo.jpg",
    alt: "MakeMyCampaign partner logo",
    website: "https://makemycampaign.co.in/",
    logoScale: 1.08
  },
  { 
    id: "creative-house",
    name: "Creative House", 
    type: "CREATIVE & BRAND STRATEGY", 
    desc: "Full-service branding and advertising agency creating brand strategy, visual identities, marketing collateral, and integrated digital and print campaigns.",
    logoSrc: "/partner-logos/creative-house-logo.png",
    alt: "Creative House partner logo",
    website: "https://www.creativehouse.co.in/",
    logoScale: 1.05
  },
  { 
    id: "mitray-media",
    name: "Mitray Media", 
    type: "BRANDING & DIGITAL MEDIA", 
    desc: "Creative media partner offering branding, logo design, print collateral, digital content, and campaign-focused visual communication.",
    logoSrc: "/partner-logos/mitray-media-logo.png",
    alt: "Mitray Media partner logo",
    website: "https://mitraymedia.com/",
    logoScale: 1.0
  },
  { 
    id: "frame-fox-media",
    name: "Frame Fox Media", 
    type: "PRODUCTION & AUDIOVISUAL", 
    desc: "Video production and creative media studio specializing in brand storytelling, ad films, motion graphics, and high-impact visual campaigns.",
    logoSrc: "/partner-logos/frame-fox-media-logo.png",
    alt: "Frame Fox Media partner logo",
    website: "https://www.framefoxmedia.com/",
    logoScale: 1.0
  },
  { 
    id: "data-ops-sync",
    name: "Data Ops Sync", 
    type: "DATA INTEGRATION & CLOUD", 
    desc: "Technology partner enabling structured data synchronization, cloud infrastructure integration, and secure API management for enterprise systems.",
    logoSrc: "/partner-logos/data-ops-sync-logo.svg",
    alt: "Data Ops Sync partner logo",
    website: "",
    logoScale: 1.0
  },
  { 
    id: "veena-group",
    name: "Veena Group", 
    type: "REAL ESTATE & INFRASTRUCTURE", 
    desc: "Prominent real estate development and construction group executing residential and commercial infrastructure projects across western India.",
    logoSrc: "/partner-logos/veena-group-logo.svg",
    alt: "Veena Group partner logo",
    website: "https://www.theveenagroup.com/",
    logoScale: 1.0
  },
  { 
    id: "chittaranjan-infotech",
    name: "Chittaranjan Infotech", 
    type: "SYSTEM INTEGRATION & IT SERVICES", 
    desc: "IT service provider offering web development, custom software implementation, system integration, and digital infrastructure consulting.",
    logoSrc: "/partner-logos/chittaranjan-infotech-logo.svg",
    alt: "Chittaranjan Infotech partner logo",
    website: "https://chittaranjan.co.in/",
    logoScale: 1.0
  },
  { 
    id: "nebula-studios",
    name: "Nebula Studios", 
    type: "DESIGN & CREATIVE DIRECTION", 
    desc: "Creative design studio delivering UI/UX design, visual branding, interactive multimedia, and specialized digital content assets.",
    logoSrc: "/partner-logos/nebula-studios-logo.svg",
    alt: "Nebula Studios partner logo",
    website: "https://nebulastudios.in/",
    logoScale: 1.0
  }
];
