export interface ServiceDetail {
  slug: string;
  title: string;
  shortIntro: string;
  longIntro: string;
  features: string[];
  ctaText: string;
  iconName: string;
}

interface SolutionBlockData {
  eyebrow: string;
  title: string;
  description: string;
  capabilities: [string, string][];
}

export const solutionBlocksData: Record<string, SolutionBlockData> = {
  "whatsapp-business-api": {
    eyebrow: "WHATSAPP BUSINESS API",
    title: "Verified WhatsApp Engagement Engine",
    description: "Design approved WhatsApp journeys for support, notifications, lead follow-ups, and customer engagement—built around your business workflow.",
    capabilities: [
      ["Verified Business Messaging", "Configured"],
      ["Template & Conversation Flows", "Ready"]
    ]
  },
  "sms-communication": {
    eyebrow: "SMS SOLUTIONS",
    title: "High-Volume SMS Delivery Engine",
    description: "Send transactional, promotional, and campaign messages through structured audience segments, approved templates, and delivery-aware workflows.",
    capabilities: [
      ["Audience Segmentation", "Enabled"],
      ["Delivery & Campaign Controls", "Ready"]
    ]
  },
  "rcs-messaging": {
    eyebrow: "RCS MESSAGING",
    title: "Rich Interactive Messaging Engine",
    description: "Create branded, media-rich customer journeys with cards, buttons, and interactive responses that make every message easier to act on.",
    capabilities: [
      ["Rich Media & CTA Cards", "Supported"],
      ["Interactive Response Flows", "Enabled"]
    ]
  },
  "chatbot-development": {
    eyebrow: "CHATBOT DEVELOPMENT",
    title: "AI Conversation Automation Engine",
    description: "Automate FAQs, lead qualification, support routing, and follow-ups across WhatsApp and other supported customer channels.",
    capabilities: [
      ["Intent-Based Conversations", "Configurable"],
      ["Human Handoff & Routing", "Supported"]
    ]
  },
  "campaign-communication": {
    eyebrow: "CAMPAIGN COMMUNICATION",
    title: "Campaign Orchestration Engine",
    description: "Plan, segment, schedule, and measure outreach campaigns while keeping communication relevant to each audience.",
    capabilities: [
      ["Segmentation & Scheduling", "Enabled"],
      ["Engagement Tracking", "Available"]
    ]
  },
  "custom-software-development": {
    eyebrow: "CUSTOM SOFTWARE DEVELOPMENT",
    title: "Custom Operations & Integration Engine",
    description: "Build dashboards, portals, APIs, and workflow systems that connect communication data with day-to-day business operations.",
    capabilities: [
      ["Dashboards & Admin Panels", "Customisable"],
      ["API & Workflow Integrations", "Supported"]
    ]
  },
  "healthcare-software": {
    eyebrow: "HEALTHCARE SOFTWARE & AUTOMATION",
    title: "Patient Engagement & Clinical Operations Engine",
    description: "Streamline clinic appointments, lab report distribution, vaccination tracking, and HIPAA-compliant patient communication.",
    capabilities: [
      ["Patient Appointment & Records", "Automated"],
      ["Report Distribution & Alerts", "Ready"]
    ]
  }
};

export const servicesData: ServiceDetail[] = [
  {
    slug: "whatsapp-business-api",
    title: "WhatsApp Business API Solutions",
    shortIntro: "Turiya Infotech helps businesses use WhatsApp as a scalable and professional customer communication channel.",
    longIntro: "With WhatsApp Business API, organisations can send updates, reminders, offers, alerts, forms, and automated replies directly to their audience. This builds trust, increases read rates up to 98%, and streamlines high-volume interactive customer messaging.",
    features: [
      "Broadcast campaigns for announcements and offers",
      "Customer support automation and 24/7 responsiveness",
      "Automated appointment reminders and bookings",
      "Lead capture and immediate qualification follow-up",
      "Payment reminders with interactive payment links",
      "Admission guidelines and instant enquiry communication",
      "Event schedule alerts and live conference updates",
      "Healthcare schedules, medical reports, and health reminders",
      "Political announcements, survey collection, and public awareness",
      "Intelligent WhatsApp chatbot integration",
      "Interactive WhatsApp forms and enquiry automation",
      "CRM, ERP, and database software integrations"
    ],
    ctaText: "Start using WhatsApp for smarter business communication.",
    iconName: "MessageCircle"
  },
  {
    slug: "sms-communication",
    title: "SMS Communication Solutions",
    shortIntro: "Turiya Infotech provides SMS communication solutions for businesses and institutions that need direct, fast, and scalable messaging.",
    longIntro: "SMS remains one of the most immediate and reliable ways to reach people instantly, with almost 100% device compatibility. It is perfect for time-critical alerts, multi-factor OTP validation, admission reminders, campaign announcements, and rapid customer notifications.",
    features: [
      "High-throughput bulk promotional messaging",
      "Secure transactional alerts and notification loops",
      "Instant, reliable OTP authentication codes",
      "Automated appointment booking and clinic reminders",
      "School/college tuition fee reminders and notifications",
      "Payment overdue alerts and collection schedules",
      "Admission progress updates and registration guidelines",
      "Instant event alerts and schedule changes",
      "Critical healthcare reminders and patient follow-ups",
      "Structured campaign follow-up messaging and feedback",
      "Real-time customer updates and order tracking"
    ],
    ctaText: "Send important messages directly to your audience.",
    iconName: "MessageSquareText"
  },
  {
    slug: "rcs-messaging",
    title: "RCS Messaging",
    shortIntro: "RCS helps businesses create richer and more interactive mobile messaging experiences.",
    longIntro: "Unlike plain text SMS, RCS (Rich Communication Services) brings the modern rich features of chat apps directly to the default messaging inbox. This includes custom branding, media rich sliders, interactive buttons, and step-by-step user journeys with higher conversion rates.",
    features: [
      "Verified branded sender profile with trust badges",
      "Rich media delivery including high-res images and videos",
      "Interactive quick-reply buttons and deep-link actions",
      "Native image/video previews and map directions support",
      "Multi-card carousel-based showcases and catalog sliders",
      "Immersive campaign experiences inside the default inbox",
      "Stronger brand presentation without third-party app installs",
      "Detailed action tracking and analytics (delivered, read, clicks)"
    ],
    ctaText: "Upgrade from plain messages to rich mobile experiences.",
    iconName: "Sparkles"
  },
  {
    slug: "chatbot-development",
    title: "Chatbot Development",
    shortIntro: "Turiya Infotech develops chatbots that automate conversations, collect enquiries, answer common questions, book appointments, and guide users through structured journeys.",
    longIntro: "Our chatbots are designed based on the client's business model, industry, and communication objective. They run seamlessly on WhatsApp, websites, and custom platforms, ensuring your organization remains responsive, collects leads, and serves customers 24/7 without manual fatigue.",
    features: [
      "Custom WhatsApp chatbot assistants with persistent menus",
      "Lightweight interactive website chatbot widgets",
      "Healthcare patient triage and info chatbots",
      "Doctor clinic and specialist consultation chatbots",
      "Hospital OPD appointment booking chatbots",
      "Astrology consultation and details gathering bots",
      "Restaurant digital menus and table booking chatbots",
      "Educational courses enquiry and details chatbots",
      "Political campaign FAQ and public supporter chatbots",
      "Interactive lead generation and qualification chatbots",
      "Instant automated customer support assistants"
    ],
    ctaText: "Automate your customer conversations with a custom chatbot.",
    iconName: "Cpu"
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortIntro: "Turiya Infotech builds custom software solutions for organisations that need more than ready-made tools.",
    longIntro: "We create tailor-made software systems that match your actual workflow, reporting hierarchy, and operational requirements. We construct responsive dashboards, secure admin control systems, and automated pipelines designed to solve specific operational bottlenecks.",
    features: [
      "Bespoke responsive web applications",
      "Role-based secure admin panels and control panels",
      "Interactive real-time data visualization dashboards",
      "Specialized healthcare automation and patient records software",
      "Doctor clinic appointment management engines",
      "Integrated Hospital Management Systems (HMS)",
      "Structured patient tracking and check-in portals",
      "Vaccination reminders and outreach systems",
      "Comprehensive political campaign analytics dashboards",
      "Centralized lead collection and scoring dashboards",
      "Automated reports generators and PDF export utilities",
      "Custom lightweight CRM-style client-management software"
    ],
    ctaText: "Build software that fits your workflow.",
    iconName: "Code"
  },
  {
    slug: "healthcare-software",
    title: "Healthcare Software & Automation",
    shortIntro: "Turiya Infotech helps healthcare providers improve patient communication, appointment management, follow-ups, and reporting.",
    longIntro: "We bridge the gap between clinics, doctors, diagnostic centers, and patients. By implementing specialized software modules and messaging automation, healthcare providers can reduce manual call loads, eliminate no-shows, and deliver test results and reports instantly.",
    features: [
      "Online doctor appointment booking and calendar managers",
      "Secure patient profiles and medical records directory",
      "Automated pediatric and adult vaccination schedules",
      "HIPAA-compliant WhatsApp patient communication",
      "Instant distribution of screening and lab reports",
      "Post-consultation follow-up and prescription reminders",
      "Interactive clinic helper and triage chatbots",
      "24/7 automated hospital enquiry chatbots",
      "Targeted preventative health awareness campaigns",
      "Analytical clinic performance and report dashboards",
      "Digital intake forms and patient consent questionnaires"
    ],
    ctaText: "Create a smarter digital healthcare experience.",
    iconName: "Heart"
  },
  {
    slug: "campaign-communication",
    title: "Campaign Communication",
    shortIntro: "Turiya Infotech supports campaign teams, organisations, public leaders, associations, and institutions with structured communication.",
    longIntro: "Large-scale outreach demands high reliability, rapid dispatch, and targeted delivery. Whether conducting a political awareness campaign, sharing corporate event updates, or managing admission drives, our systems help you map out structured outreach that converts interest into participation.",
    features: [
      "Large-scale public awareness message campaigns",
      "Candidate or institutional introduction campaigns",
      "Interactive voter and member registration reminders",
      "Multi-channel event schedule and venue alerts",
      "Ongoing supporter engagement newsletters",
      "Official public announcements and emergency updates",
      "Targeted high-impact WhatsApp broadcasting",
      "Instant-delivery SMS notification alerts",
      "Interactive rich RCS media campaigns",
      "Structured public survey and feedback collection",
      "24/7 campaign FAQs and response chatbot",
      "Real-time link click-through and reaction tracking"
    ],
    ctaText: "Reach your audience with structured, reliable campaign communication.",
    iconName: "Megaphone"
  }
];
