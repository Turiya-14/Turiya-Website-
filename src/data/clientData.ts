interface FeaturedClient {
  name: string;
  desc: string;
  website: string;
}

interface ClientItem {
  name: string;
  category: string;
  website: string;
}

interface MarqueeBrand {
  id: string;
  name: string;
  category: string;
}

export const FEATURED_CLIENTS: FeaturedClient[] = [
  { name: "NHCDC", desc: "Healthcare & Diagnostics", website: "https://www.newhorizonscdc.in/" },
  { name: "Antara Hospital", desc: "Healthcare & Psychiatric Care", website: "https://antarahospital.com/" },
  { name: "Dr. Ghongde (Sanjivani Homoeopathy Clinic)", desc: "Clinical Care & Wellness", website: "https://www.drghongdesanjivani.com/" },
  { name: "Anand Hospital", desc: "Multispecialty Healthcare Services", website: "https://anandtrust.com/about-us/" },
  { name: "SSMITA Amravati College", desc: "Higher Education & Academy", website: "https://ssmita.ac.in/" },
  { name: "Indian Academy of Pediatrics", desc: "Healthcare & Pediatric Association", website: "https://www.iapindia.org/" },
  { name: "TRASSIR", desc: "AI Surveillance & Tech", website: "https://trassir.com/" },
  { name: "Drishtee", desc: "Social Impact & Rural Dev", website: "https://drishtee.in/" },
  { name: "Sun Scan Centre", desc: "Diagnostic Imaging Services", website: "https://www.sunscancentrethane.com/" },
  { name: "Eduuspark Academy", desc: "Higher Education & Academy", website: "https://eduusparkacademy.com/" },
  { name: "Finanthropist Educare", desc: "Education & Financial Literacy", website: "https://finanthropist.com/" },
  { name: "Avinash Guruji", desc: "Astrology & Vastu Consultation", website: "https://www.avinashguruji.com/" },
];

export const FULL_CLIENT_LIST: ClientItem[] = [
  // Healthcare
  { name: "NHCDC", category: "Healthcare", website: "https://www.newhorizonscdc.in/" },
  { name: "Antara Hospital", category: "Healthcare", website: "https://antarahospital.com/" },
  { name: "Dr. Amol Annadate", category: "Healthcare", website: "https://amolannadate.com/" },
  { name: "Dr. Ghongde (Sanjivani Homoeopathy Clinic)", category: "Healthcare", website: "https://www.drghongdesanjivani.com/" },
  { name: "Anand Hospital", category: "Healthcare", website: "https://anandtrust.com/about-us/" },
  { name: "Sun Scan Centre (Diagnostics)", category: "Healthcare", website: "https://www.sunscancentrethane.com/" },
  { name: "Indian Academy of Pediatrics", category: "Healthcare", website: "https://www.iapindia.org/" },
  { name: "Health Plus Pharma", category: "Healthcare", website: "https://healthpluspharma.store" },

  // Education & Academics
  { name: "APJ College", category: "Education", website: "https://apjkalamgc.ac.in/" },
  { name: "SSMITA Amravati College", category: "Education", website: "https://ssmita.ac.in/" },
  { name: "Eduuspark Academy", category: "Education", website: "https://eduusparkacademy.com/" },
  { name: "Finanthropist Educare", category: "Education", website: "https://finanthropist.com/" },

  // Technology, Retail & Enterprise
  { name: "TRASSIR", category: "Technology", website: "https://trassir.com/" },
  { name: "Silex Kitchen", category: "Retail", website: "https://www.silexkitchen.com/" },
  { name: "Indo Pump", category: "Enterprise", website: "https://www.indopump.com/" },

  // Social Impact, Real Estate & Consultation
  { name: "Drishtee", category: "Social Impact", website: "https://drishtee.in/" },
  { name: "Veena Group", category: "Real Estate", website: "https://www.theveenagroup.com/" },
  { name: "Avinash Guruji", category: "Consultation", website: "https://www.avinashguruji.com/" }
];

export const MARQUEE_BRANDS: MarqueeBrand[] = [
  { id: "nhcdc", name: "NHCDC", category: "Healthcare" },
  { id: "antara", name: "Antara Hospital", category: "Healthcare" },
  { id: "ghongde", name: "Dr. Ghongde (Sanjivani Homoeopathy Clinic)", category: "Clinical Care" },
  { id: "anand", name: "Anand Hospital", category: "Healthcare" },
  { id: "apj", name: "APJ College", category: "Education" },
  { id: "ssmita", name: "SSMITA Amravati College", category: "Education" },
  { id: "iap", name: "Indian Academy of Pediatrics", category: "Pediatric Association" },
  { id: "trassir", name: "TRASSIR", category: "Technology" },
  { id: "drishtee", name: "Drishtee", category: "Social Enterprise" },
  { id: "sunscan", name: "Sun Scan Centre", category: "Diagnostics" },
  { id: "healthpluspharma", name: "Health Plus Pharma", category: "Pharmacy" },
  { id: "avinash", name: "Avinash Guruji", category: "Astrology & Consultation" }
];

// Client logo files in /public/client-logos, matched by a keyword in the normalised client name.
// Clients without an entry render as a styled text badge.
const CLIENT_LOGOS: [keywords: string[], path: string][] = [
  [["nhcdc", "newhorizons"], "/client-logos/nhcdc-logo.svg"],
  [["antara"], "/client-logos/antara-hospital-logo.svg"],
  [["anand"], "/client-logos/anand-hospital-logo.svg"],
  [["mahapedicon", "indianacademyofpediatrics"], "/client-logos/mahapedicon-logo.svg"],
  [["ghongde", "sanjivani"], "/client-logos/sanjivani-homoeopathy-logo.svg"],
  [["ssmita"], "/client-logos/ssmita-logo.svg"],
  [["apj"], "/client-logos/apj-college-logo.svg"],
  [["drishtee"], "/client-logos/drishtee-logo.svg"],
  [["indopump"], "/client-logos/indo-pump-logo.svg"],
  [["silex"], "/client-logos/silex-kitchen-logo.svg"],
  [["sunscan"], "/client-logos/sun-scan-centre-logo.svg"],
  [["trassir"], "/client-logos/trassir-logo.svg"],
  [["veena"], "/partner-logos/veena-group-logo.svg"],
  [["eduuspark", "eduspark"], "/client-logos/eduspark-logo.svg"],
  [["finanthropist"], "/client-logos/finanthropist-educare-logo.svg"],
  [["avinash", "guruji"], "/client-logos/avinash-guruji-logo.png"]
];

export function getClientLogoPath(name: string): string {
  const normName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return CLIENT_LOGOS.find(([keywords]) => keywords.some((k) => normName.includes(k)))?.[1] ?? "";
}
