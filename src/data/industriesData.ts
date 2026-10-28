interface RelevantClient {
  name: string;
  category?: string;
  website?: string;
}

interface IndustryDetail {
  id: string;
  name: string;
  description: string;
  iconName: string;
  useCases: string[];
  relevantClients?: RelevantClient[];
}

export const industriesData: IndustryDetail[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    description: "We help doctors, clinics, hospitals, diagnostic centres, child development centres, and healthcare brands manage patient communication, appointments, reminders, reports, and awareness campaigns.",
    iconName: "HeartPulse",
    useCases: [
      "Automated appointment booking and instant confirmation alerts",
      "Timely post-treatment follow-up and instruction sequences",
      "Pediatric and chronic condition vaccination reminder alerts",
      "Automated WhatsApp triage chatbot for clinical support and FAQs",
      "Interactive hospital enquiry chatbot routing to respective wards",
      "Instant, secure sharing of laboratory and diagnostic screening reports",
      "Mass public health awareness campaigns and vaccination drives",
      "Medical conferences, expert webinars, and doctor-to-doctor alerts"
    ],
    relevantClients: [
      { name: "NHCDC", category: "Healthcare & Diagnostics", website: "https://www.newhorizonscdc.in/" },
      { name: "Antara Hospital", category: "Healthcare & Psychiatric Care", website: "https://antarahospital.com/" },
      { name: "Dr. Amol Annadate", category: "Healthcare & Pediatrics", website: "https://amolannadate.com/" },
      { name: "Dr. Ghongde (Sanjivani Homoeopathy Clinic)", category: "Clinical Care", website: "https://www.drghongdesanjivani.com/" },
      { name: "Anand Hospital", category: "Healthcare", website: "https://anandtrust.com/about-us/" },
      { name: "Sun Scan Centre", category: "Diagnostics", website: "https://www.sunscancentrethane.com/" },
      { name: "Indian Academy of Pediatrics", category: "Healthcare & Pediatric Association", website: "https://www.iapindia.org/" },
      { name: "Health Plus Pharma", category: "Healthcare & Pharma", website: "https://healthpluspharma.store" }
    ]
  },
  {
    id: "education",
    name: "Education",
    description: "We support schools, colleges, academies, coaching institutes, and educational brands with admission communication, enquiry automation, parent updates, event reminders, and campaign follow-ups.",
    iconName: "GraduationCap",
    useCases: [
      "Large-scale interactive admission outreach and campaign updates",
      "Student enquiry chatbot automating admission FAQs and course outlines",
      "Real-time parent-teacher communication and student progress logs",
      "Automated tuition fee payment reminders and receipt confirmations",
      "Campus event updates, holiday alerts, and schedule modifications",
      "Promotional course launches and extra-curricular registrations",
      "Lead generation forms, counsellor follow-ups, and interview booking",
      "Interactive WhatsApp counselling flows guiding students step-by-step"
    ],
    relevantClients: [
      { name: "Eduuspark Academy", category: "Higher Education", website: "https://eduusparkacademy.com/" },
      { name: "APJ College", category: "Higher Education", website: "https://apjkalamgc.ac.in/" },
      { name: "SSMITA Amravati College", category: "Higher Education", website: "https://ssmita.ac.in/" },
      { name: "Finanthropist Educare", category: "Education/Finance", website: "https://finanthropist.com/" }
    ]
  },
  {
    id: "political-public",
    name: "Political & Public Awareness",
    description: "We help political leaders, public representatives, associations, and campaign teams communicate with voters, members, doctors, communities, and targeted groups.",
    iconName: "Users",
    useCases: [
      "Widespread policy awareness, manifestos, and message campaigns",
      "Direct-to-voter notification alerts and election day updates",
      "Event announcements, rallies reminders, and agenda updates",
      "Verified WhatsApp broadcast channels for rapid leader-to-public updates",
      "High-capacity SMS alerts to reach remote or offline voters",
      "Branded RCS messaging with interactive buttons for surveys",
      "Personalized introduction messages and achievements highlights",
      "Automated voter feedback collection and volunteer registrations",
      "Public grievances intake, volunteer coordination, and campaign helper chatbot"
    ],
    relevantClients: [
      { name: "MakeMyCampaign", category: "Campaign & Outreach", website: "https://makemycampaign.co.in/" }
    ]
  },
  {
    id: "retail-consumer",
    name: "Retail & Consumer Brands",
    description: "We help retail brands, D2C businesses, restaurants, interior brands, kitchen brands, food brands, and local businesses engage customers through offers, catalogues, enquiries, reminders, and automated support.",
    iconName: "ShoppingBag",
    useCases: [
      "Targeted promotional offer campaigns with rich discount code links",
      "Interactive digital product catalogues inside WhatsApp and SMS",
      "Real-time order confirmation, processing updates, and delivery tracking",
      "24/7 automated customer support chatbot handling FAQs and returns",
      "Post-purchase feedback collection, CSAT surveys, and Google review requests",
      "Lead capture widgets, table reservations, and interior design consult bookings",
      "WhatsApp automated marketing and check-out abandonment recoveries",
      "Festival campaigns, clearance sales alerts, and VIP early access"
    ],
    relevantClients: [
      { name: "Silex Kitchen", category: "Retail & Interiors", website: "https://www.silexkitchen.com/" }
    ]
  },
  {
    id: "manufacturing-industrial",
    name: "Manufacturing & Industrial Businesses",
    description: "We help manufacturing and industrial businesses manage dealer communication, product enquiries, service reminders, lead follow-ups, and business updates.",
    iconName: "Factory",
    useCases: [
      "Dedicated, reliable dealer networks communication and updates",
      "Automated industrial product enquiries handling and spec sheets delivery",
      "Centralized incoming lead distribution, recording, and follow-ups",
      "Preventative machinery service and maintenance scheduling reminders",
      "Dealer conferences, technical workshops, and trade expo invitations",
      "Technical product launch announcements and virtual seminar links",
      "Multi-lingual WhatsApp catalog search and parts support system",
      "Dealer satisfaction survey logs and supplier feedback collection"
    ],
    relevantClients: [
      { name: "Indo Pump", category: "Industrial Manufacturing", website: "https://www.indopump.com/" }
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate & Property Services",
    description: "We help real estate consultants, property service companies, and housing-related businesses manage enquiries, site visit reminders, document follow-ups, and customer communication.",
    iconName: "Home",
    useCases: [
      "Automated property details and brochure download chatbot",
      "Scheduled site-visit confirmation alerts and Google map location pins",
      "Long-term lead nurturing sequences for prospective home buyers",
      "Real-time document submission reminders and compliance check updates",
      "New project launches, phase openings, and construction milestones",
      "Tenant complaints registration and maintenance ticket tracking",
      "Targeted high-engagement WhatsApp video tours broadcast",
      "Customer support desks routing to appropriate sales managers"
    ],
    relevantClients: [
      { name: "Veena Group", category: "Real Estate & Housing", website: "https://www.theveenagroup.com/" }
    ]
  },
  {
    id: "events-associations",
    name: "Events, Conferences & Associations",
    description: "We support associations, medical conferences, professional bodies, and event organisers with registration communication, reminder messages, speaker updates, attendance engagement, and post-event follow-ups.",
    iconName: "CalendarDays",
    useCases: [
      "Registration link alerts and incomplete payment reminders",
      "Keynote speaker announcements, profile previews, and schedule changes",
      "Interactive event agenda tables and session tracker lists",
      "Physical venue location directions and parking instructions",
      "24/7 automated WhatsApp helpdesk handling attendee queries live",
      "Interactive polls, Q&A submissions, and participant feedback during events",
      "Post-event digital certificate downloads and presentation links",
      "Attendee surveys, photo galleries, and future event pre-registrations"
    ],
    relevantClients: [
      { name: "Indian Academy of Pediatrics", category: "Healthcare Association", website: "https://www.iapindia.org/" }
    ]
  },
  {
    id: "astrology-consultation",
    name: "Astrology & Consultation Businesses",
    description: "We help astrologers and consultation-led businesses create structured chatbot flows for service selection, enquiry capture, payment-first consultation, and follow-up communication.",
    iconName: "Moon",
    useCases: [
      "Automated onboarding for paid astro-consultation and services",
      "Structured collection of birth details (Date, Time, Place of birth)",
      "Instant calendar scheduling linked with counselor/astrologer availability",
      "Automated billing, invoicing, and secure payment gateway link delivery",
      "Service selection menu enabling rapid exploration of horoscopes and reports",
      "Upcoming consultation slot reminders and link logins",
      "Daily or monthly personalized horoscope broadcast list opt-ins",
      "Post-consultation follow-up and review collection surveys"
    ],
    relevantClients: [
      { name: "Avinash Guruji", category: "Astrology & Vastu Consultation", website: "https://www.avinashguruji.com/" }
    ]
  }
];
