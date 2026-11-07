import { useState, useEffect } from "react";
import { BookOpen, Calendar, Clock, ArrowRight, ArrowLeft, MessageSquare, Search, Tag } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import NotFoundPage from "./NotFoundPage";

interface BlogTopic {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  content?: string[];
}

interface BlogsPageProps {
  /** Slug from /blogs/:slug; undefined on the listing page */
  slug?: string;
  onNavigate: (view: string) => void;
}

export default function BlogsPage({ slug, onNavigate }: BlogsPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Insights" },
    { id: "WhatsApp & CPaaS", label: "WhatsApp & CPaaS" },
    { id: "SMS & RCS", label: "SMS & RCS" },
    { id: "Chatbot", label: "Chatbots" },
    { id: "Healthcare Technology", label: "Healthcare Tech" },
    { id: "Campaign Communication", label: "Campaigns" }
  ];

  const blogData: BlogTopic[] = [
    // --- WHATSAPP & CPAAS ---
    {
      slug: "whatsapp-service-messages-are-no-longer-free-october-2026",
      title: "WhatsApp Service Messages Are No Longer Free: What Changed on 1 October 2026",
      category: "WhatsApp & CPaaS",
      excerpt: "Meta now charges for WhatsApp service messages after the first 1,000 each month, and for utility templates sent inside the 24-hour window. Here is what changed, what it costs in India, and how to keep your bill under control.",
      date: "November 07, 2026",
      readTime: "6 min read",
      author: "Turiya Editorial Team",
      content: [
        "For almost two years, replying to customers on the WhatsApp Business API cost nothing. If a customer messaged you first, every reply you sent within the next 24 hours was free. That changed on 1 October 2026. Meta now charges for service messages beyond a monthly free allowance, and for utility templates sent inside the customer service window.",
        "If your business uses WhatsApp for customer support, appointment confirmations, order updates or chatbot replies, this affects your monthly bill. Here is a plain explanation of what changed and what you can do about it.",
        "## What exactly changed",
        "Service messages are the free-form replies you send while a customer service window is open, that is, within 24 hours of the customer's last message. Most chatbot replies and support-team replies fall into this category.",
        "From 1 October 2026, each WhatsApp Business phone number gets 1,000 free service messages every calendar month. From the 1,001st message onwards, every delivered service message is charged. The allowance is per phone number, resets on the first of each month, and unused messages do not carry forward.",
        "Utility templates (order confirmations, payment receipts, appointment reminders and similar updates) sent inside an open 24-hour window used to be free. They are now charged from the very first message, and the 1,000 free service messages do not cover them.",
        "Marketing and authentication templates were already chargeable, so nothing new applies to them.",
        "## How much it costs in India",
        "Service messages are charged at the same rate as utility messages in the recipient's country. For numbers in India, that works out to roughly ₹0.14 per delivered message, before taxes. Meta can revise its rates every quarter, so always confirm the current figure on Meta's official rate card or with your WhatsApp provider before budgeting.",
        "As an example, a clinic that sends 3,000 chatbot and support replies a month would pay for 2,000 of them. At about ₹0.14 each, that is around ₹280 a month, plus whatever utility templates it sends. For most small and mid-sized businesses the increase is modest, but for high-volume support desks it adds up quickly.",
        "## What is still free",
        "Messages your customers send to you remain free. You are only charged for what your business sends.",
        "Conversations that start from a Click-to-WhatsApp ad or the WhatsApp button on your Facebook Page open a free entry point window. Messages you send in that window, including templates, are not charged. Windows opened from Click-to-WhatsApp ads can now stay open for up to 7 days, and windows from Facebook Page buttons for 72 hours.",
        "## AI replies through Meta's own agent",
        "If you use Meta Business Agent, Meta's built-in AI assistant for WhatsApp, its replies have been charged separately since 1 August 2026, based on how much AI processing each reply uses. Chatbots built by your own team or a provider such as Turiya Infotech are not charged this way. Their replies are counted as normal service messages.",
        "## Five ways to keep costs under control",
        "1. Make each reply count. Combine information into fewer, clearer messages instead of sending several short ones. A well-designed chatbot flow can often answer in one message what a manual reply takes three to say.",
        "2. Use buttons and lists. Interactive replies help customers get to the right answer faster, which means fewer back-and-forth messages.",
        "3. Use Click-to-WhatsApp ads for campaigns. Conversations that start from these ads get a free window of up to 7 days, which makes them the most cost-effective way to handle enquiries from marketing campaigns.",
        "4. Review which updates really need a template. Some utility templates sent inside the window can be replaced by a normal service reply, which is free within your monthly 1,000.",
        "5. Track usage per phone number. Each number has its own 1,000 free messages, so monitor volumes monthly and plan before you cross the threshold.",
        "## What this means for your business",
        "WhatsApp is still one of the most cost-effective ways to talk to customers in India. Delivery and read rates are far higher than email, and a rupee spent on a well-planned WhatsApp flow usually goes further than any other channel. The new pricing simply rewards businesses that design their conversations carefully.",
        "Turiya Infotech helps businesses audit their current WhatsApp usage, redesign chatbot flows to need fewer messages, and set up Click-to-WhatsApp campaigns that make the most of free windows. If you would like us to review your setup and estimate your new monthly cost, send us a message on WhatsApp."
      ]
    },
    {
      slug: "marketing-utility-authentication-and-service-messages-explained",
      title: "Marketing, Utility, Authentication, and Service Messages: Explained Simply",
      category: "WhatsApp & CPaaS",
      excerpt: "Every WhatsApp Business API message falls into one of four categories, and each one is priced differently. Here is what each category means, with examples, updated for Meta's October 2026 pricing.",
      date: "November 07, 2026",
      readTime: "6 min read",
      author: "Turiya Editorial Team",
      content: [
        "On the WhatsApp Business API, every message your business sends falls into one of four categories: marketing, utility, authentication, or service. The category decides whether Meta approves your template, and how much you pay for each delivered message. Choosing the right category saves money and keeps your account in good standing.",
        "Here is what each category means, with simple examples. This guide reflects Meta's pricing as of 1 October 2026.",
        "## 1. Marketing messages",
        "Marketing messages promote your business: offers, new product launches, festive greetings, event invitations, re-engagement messages and newsletters. If the main goal of a message is to sell, promote or bring a customer back, Meta treats it as marketing.",
        "Examples: \"Diwali sale, flat 20% off this weekend\", \"Admissions open for the 2027 batch\", \"We miss you. Here's a coupon for your next visit\".",
        "Marketing is the most expensive category and is charged for every delivered message. Customers must have opted in to receive messages from you, and Meta may limit how many marketing messages a person receives from businesses in a day.",
        "## 2. Utility messages",
        "Utility messages relate to something the customer has already done or agreed to: an order, a booking, a payment, an appointment or an account update. They must be specific to that customer and must not contain promotional content.",
        "Examples: \"Your appointment with Dr. Sharma is confirmed for 10:30 AM tomorrow\", \"Your order #4521 has been shipped\", \"Payment of ₹2,500 received. Thank you\".",
        "Utility templates are charged per delivered message. From 1 October 2026 this also applies to utility templates sent inside an open 24-hour customer service window, which used to be free. The exception is the free entry point window that opens when a customer contacts you from a Click-to-WhatsApp ad or your Facebook Page button.",
        "## 3. Authentication messages",
        "Authentication messages carry one-time passwords (OTPs) and verification codes for logins, sign-ups, account recovery and transaction confirmation. Meta provides fixed template formats for these, usually with a copy-code or one-tap button.",
        "Example: \"123456 is your verification code. Do not share it with anyone.\"",
        "Authentication messages are charged per delivered message, at a lower rate than marketing. Businesses sending OTPs to numbers in other countries may pay a separate international authentication rate.",
        "## 4. Service messages",
        "Service messages are free-form replies sent while a customer service window is open, that is, within 24 hours of the customer's last message to you. They are not templates, so you can write anything relevant to the conversation. Most support-team and chatbot replies are service messages.",
        "Until September 2026, service messages were completely free. From 1 October 2026, each business phone number gets 1,000 free service messages per month. After that, each delivered service message is charged at the same rate as a utility message in the customer's country, roughly ₹0.14 for numbers in India before taxes.",
        "## Quick comparison",
        "Marketing: promotions and offers. Needs a template. Charged for every message, at the highest rate.",
        "Utility: updates about an order, booking or payment. Needs a template. Charged for every message, including inside the 24-hour window.",
        "Authentication: OTPs and verification codes. Needs a template. Charged for every message.",
        "Service: free-form replies within 24 hours of the customer's message. No template needed. First 1,000 per phone number each month are free.",
        "## Common mistakes to avoid",
        "Adding a promotional line to a utility template, such as \"Your order has shipped. Shop again for 10% off!\", turns it into marketing. Meta can recategorise the template, and you will pay the marketing rate.",
        "Sending a marketing template when a free-form service reply would do. If the customer has written to you in the last 24 hours, a normal reply is often enough and costs far less.",
        "Ignoring the free entry point window. Enquiries that come from Click-to-WhatsApp ads open a free window of up to 7 days. Planning your follow-up messages within that period can cut costs significantly.",
        "Meta revises rates from time to time, so always check the latest rate card before budgeting. Turiya Infotech can review your templates, make sure each one sits in the right category, and design message flows that keep costs low. Send us a message on WhatsApp to get started."
      ]
    },
    {
      slug: "what-is-whatsapp-business-api-and-how-can-businesses-use-it",
      title: "What is WhatsApp Business API and How Can Businesses Use It?",
      category: "WhatsApp & CPaaS",
      excerpt: "WhatsApp Business API is a professional communication solution for businesses that want to communicate with customers at scale. Unlike the regular app, the API is built for structured automation.",
      date: "July 07, 2026",
      readTime: "6 min read",
      author: "Turiya Editorial Team",
      content: [
        "WhatsApp Business API is a professional communication solution for businesses that want to communicate with customers at scale. Unlike the regular WhatsApp app, the API is designed for structured business messaging, automation, chatbot integration, team access, and software connectivity.",
        "Businesses can use WhatsApp Business API to send appointment reminders, order updates, offers, payment reminders, admission communication, healthcare messages, customer support replies, and campaign updates.",
        "For example, a hospital can use WhatsApp to send appointment reminders and report updates. A college can use it to send admission follow-ups. A retail brand can use it to share offers and collect enquiries. A political campaign can use it to share awareness messages and voting reminders.",
        "When combined with chatbot automation, WhatsApp becomes more than a messaging tool. It becomes a digital assistant that can answer questions, collect information, book appointments, and guide customers through the next step.",
        "Turiya Infotech helps businesses set up WhatsApp Business API, create message flows, develop chatbots, and manage communication campaigns based on their industry requirements."
      ]
    },
    {
      slug: "whatsapp-business-api-vs-normal-whatsapp-business-app",
      title: "WhatsApp Business API vs Normal WhatsApp Business App: What is the Difference?",
      category: "WhatsApp & CPaaS",
      excerpt: "Many businesses confuse the free mobile Business App with the enterprise-grade API. Let's compare their volume limits, automated broadcasting capabilities, green badges, and CRM linkages.",
      date: "July 06, 2026",
      readTime: "5 min read",
      author: "Product Strategy Team"
    },
    {
      slug: "how-whatsapp-automation-can-improve-customer-engagement",
      title: "How WhatsApp Automation Can Improve Customer Engagement",
      category: "WhatsApp & CPaaS",
      excerpt: "Discover how automated response pipelines and quick-reply triggers can improve direct customer satisfaction ratios, ensuring your channel answers 24/7.",
      date: "July 02, 2026",
      readTime: "6 min read",
      author: "UX Specialist"
    },
    {
      slug: "best-whatsapp-use-cases-for-healthcare-education-and-retail",
      title: "Best WhatsApp Use Cases for Healthcare, Education, and Retail",
      category: "WhatsApp & CPaaS",
      excerpt: "From appointment confirmation and school fee receipts to instant order bookings, read about actionable design frameworks across sectors.",
      date: "June 28, 2026",
      readTime: "7 min read",
      author: "Solutions Architect"
    },
    {
      slug: "how-to-use-whatsapp-for-appointment-reminders-and-follow-ups",
      title: "How to Use WhatsApp for Appointment Reminders and Follow-ups",
      category: "WhatsApp & CPaaS",
      excerpt: "Stop losing revenue to missed appointments. Automate your booking triggers and follow-up loops directly on WhatsApp with buttons that patients actually click.",
      date: "June 25, 2026",
      readTime: "5 min read",
      author: "Healthcare Tech Specialist"
    },
    {
      slug: "why-businesses-should-combine-whatsapp-sms-and-rcs",
      title: "Why Businesses Should Combine WhatsApp, SMS, and RCS",
      category: "WhatsApp & CPaaS",
      excerpt: "Every communication channel has its own strength. WhatsApp is excellent for rich conversations, SMS is useful for quick alerts, and RCS is useful for branded messaging.",
      date: "June 22, 2026",
      readTime: "5 min read",
      author: "Systems Architecture Team",
      content: [
        "Every communication channel has its own strength. WhatsApp is excellent for rich conversations, images, buttons, and chatbot automation. SMS is useful for quick alerts and wide reach. RCS is useful for branded, interactive, and rich mobile messaging.",
        "A strong communication strategy does not depend on only one channel. Businesses can use WhatsApp for engagement, SMS for reminders, and RCS for rich promotional campaigns.",
        "For example, a college can use WhatsApp for admission counselling, SMS for deadline reminders, and RCS for branded course promotions. A hospital can use WhatsApp for appointment communication, SMS for critical reminders, and RCS for health awareness campaigns.",
        "Turiya Infotech helps organisations plan the right channel mix based on their audience, budget, industry, and campaign objective."
      ]
    },
    {
      slug: "how-whatsapp-chatbots-help-reduce-manual-support-work",
      title: "How WhatsApp Chatbots Help Reduce Manual Support Work",
      category: "WhatsApp & CPaaS",
      excerpt: "Learn how customer support workflows can route the first 80% of repetitive questions directly to automated logic trees, protecting agent bandwidth.",
      date: "June 18, 2026",
      readTime: "6 min read",
      author: "Customer Success Team"
    },
    {
      slug: "how-to-plan-a-whatsapp-campaign-for-better-response",
      title: "How to Plan a WhatsApp Campaign for Better Response",
      category: "WhatsApp & CPaaS",
      excerpt: "Step-by-step copywriting secrets and flow-design ideas to generate 3x higher replies on your marketing blasts and client surveys.",
      date: "June 10, 2026",
      readTime: "6 min read",
      author: "Creative Director"
    },
    {
      slug: "mistakes-to-avoid-while-running-whatsapp-broadcast-campaigns",
      title: "Mistakes to Avoid While Running WhatsApp Broadcast Campaigns",
      category: "WhatsApp & CPaaS",
      excerpt: "Do not get your business number banned. Review compliance guidelines, rate limits, opt-out triggers, and correct template approval routes.",
      date: "June 05, 2026",
      readTime: "7 min read",
      author: "Quality & Assurance Team"
    },

    // --- SMS & RCS ---
    {
      slug: "why-sms-still-matters-for-business-communication",
      title: "Why SMS Still Matters for Business Communication",
      category: "SMS & RCS",
      excerpt: "With a 98% open rate and offline accessibility, SMS remains the ultimate fallback channel for critical security codes and high-speed OTP alerts.",
      date: "May 28, 2026",
      readTime: "4 min read",
      author: "Telecom Architect"
    },
    {
      slug: "transactional-sms-vs-promotional-sms-what-should-businesses-use",
      title: "Transactional SMS vs Promotional SMS: What Should Businesses Use?",
      category: "SMS & RCS",
      excerpt: "Navigate the distinct routing systems, regulatory restrictions, sender-ID protocols, and delivery priority differences between promotional and transactional SMS.",
      date: "May 22, 2026",
      readTime: "5 min read",
      author: "Support Engineer"
    },
    {
      slug: "what-is-rcs-messaging-and-why-is-it-important-for-brands",
      title: "What is RCS Messaging and Why is it Important for Brands?",
      category: "SMS & RCS",
      excerpt: "Rich Communication Services (RCS) is revolutionising Android messaging. Learn why verified brand headers, carousels, and rich metrics are replacing traditional text lists.",
      date: "May 18, 2026",
      readTime: "6 min read",
      author: "Growth Marketer"
    },
    {
      slug: "rcs-vs-sms-which-one-is-better-for-customer-engagement",
      title: "RCS vs SMS: Which One is Better for Customer Engagement?",
      category: "SMS & RCS",
      excerpt: "A feature-by-feature battle. Compare conversion stats, visual CTA clicks, analytics logging, and brand validation between standard SMS and RCS channels.",
      date: "May 12, 2026",
      readTime: "5 min read",
      author: "Data Analytics Lead"
    },
    {
      slug: "how-rcs-can-improve-product-promotions-and-brand-campaigns",
      title: "How RCS Can Improve Product Promotions and Brand Campaigns",
      category: "SMS & RCS",
      excerpt: "See live visual examples of rich interactive product menus, map triggers, and booking selectors deployed inside a native text message feed.",
      date: "May 08, 2026",
      readTime: "6 min read",
      author: "Creative Lead"
    },

    // --- CHATBOT ---
    {
      slug: "what-is-a-chatbot-and-how-can-it-help-your-business",
      title: "What is a Chatbot and How Can It Help Your Business?",
      category: "Chatbot",
      excerpt: "Demystifying conversational interfaces. Learn how simple click-trigger workflows and AI chatbot paths handle leads automatically.",
      date: "April 29, 2026",
      readTime: "5 min read",
      author: "Systems Architect"
    },
    {
      slug: "how-whatsapp-chatbots-can-help-doctors-and-clinics",
      title: "How WhatsApp Chatbots Can Help Doctors and Clinics",
      category: "Chatbot",
      excerpt: "Doctors and clinics receive repeated questions every day about appointment availability, consultation timings, fees, reports, location, follow-ups, and reminders.",
      date: "April 24, 2026",
      readTime: "5 min read",
      author: "Healthcare Tech Specialist",
      content: [
        "Doctors and clinics receive repeated questions every day about appointment availability, consultation timings, fees, reports, location, follow-ups, and reminders. Handling these manually can take a lot of staff time and can also lead to missed enquiries.",
        "A chatbot can help clinics automate these common conversations. Patients can use the chatbot to book appointments, get clinic timings, receive reminders, submit basic details, and ask common questions.",
        "For pediatric clinics, chatbots can also support vaccination reminders, growth follow-ups, screening forms, and parent communication. For hospitals, chatbots can guide patients to the right department, collect enquiry details, and share appointment instructions.",
        "Chatbots do not replace human staff. They reduce repetitive work so that staff can focus on important patient interactions.",
        "Turiya Infotech develops custom healthcare chatbots and clinic automation systems based on the actual workflow of doctors, clinics, and hospitals."
      ]
    },
    {
      slug: "how-restaurants-can-use-chatbots-for-orders-and-table-booking",
      title: "How Restaurants Can Use Chatbots for Orders and Table Booking",
      category: "Chatbot",
      excerpt: "No more busy phone lines. Discover how quick reply buttons allow customers to browse food menus, select delivery slots, and confirm tables over WhatsApp.",
      date: "April 18, 2026",
      readTime: "6 min read",
      author: "Retail Product Lead"
    },
    {
      slug: "how-astrology-businesses-can-use-chatbots-for-paid-consultations",
      title: "How Astrology Businesses Can Use Chatbots for Paid Consultations",
      category: "Astrology",
      excerpt: "Explore how automated chatbots can take customer birth details, generate initial charts, and collect payments securely prior to expert review.",
      date: "April 12, 2026",
      readTime: "5 min read",
      author: "Workflow Architect"
    },
    {
      slug: "chatbot-for-education-institutes-enquiries-admissions-and-follow-ups",
      title: "Chatbot for Education Institutes: Enquiries, Admissions, and Follow-ups",
      category: "Chatbot",
      excerpt: "Automate student acquisition. Build smart chatbot trees that resolve course syllabus questions and directly qualify incoming student registration details.",
      date: "April 08, 2026",
      readTime: "6 min read",
      author: "Admissions Consultant"
    },

    // --- HEALTHCARE TECHNOLOGY ---
    {
      slug: "how-digital-reminders-can-improve-patient-follow-ups",
      title: "How Digital Reminders Can Improve Patient Follow-ups",
      category: "Healthcare Technology",
      excerpt: "Adherence studies show patient recovery rates improve significantly when automated follow-ups remind them of medication schedules and diagnostic timings.",
      date: "March 28, 2026",
      readTime: "5 min read",
      author: "Clinical Operations Lead"
    },
    {
      slug: "why-doctors-and-clinics-need-appointment-automation",
      title: "Why Doctors and Clinics Need Appointment Automation",
      category: "Healthcare Technology",
      excerpt: "Manual booking errors and calendar double-bookings can damage trust. Upgrade your clinic to a real-time smart schedule database today.",
      date: "March 22, 2026",
      readTime: "5 min read",
      author: "Systems Architect"
    },
    {
      slug: "how-whatsapp-can-help-hospitals-improve-patient-communication",
      title: "How WhatsApp Can Help Hospitals Improve Patient Communication",
      category: "Healthcare Technology",
      excerpt: "From triage instructions and pre-surgery guidelines to sharing room locations, learn how hospitals simplify administrative messaging.",
      date: "March 18, 2026",
      readTime: "6 min read",
      author: "Healthcare Communications Director"
    },
    {
      slug: "vaccination-reminder-system-for-pediatric-clinics-why-it-matters",
      title: "Vaccination Reminder System for Pediatric Clinics: Why It Matters",
      category: "Healthcare Technology",
      excerpt: "Timely immunisation prevents serious illness. Discover how structured automated SMS/WhatsApp flows based on child birthdates keep vaccine timelines secure.",
      date: "March 12, 2026",
      readTime: "5 min read",
      author: "Dr. Amol Annadate"
    },
    {
      slug: "digital-patient-reports-improving-healthcare-communication",
      title: "Digital Patient Reports: Improving Healthcare Communication",
      category: "Healthcare Technology",
      excerpt: "Skip long queues. Send secure, encrypted diagnostic reports and medical scans directly into patient chats instantly.",
      date: "March 08, 2026",
      readTime: "5 min read",
      author: "Diagnostics Director"
    },

    // --- CAMPAIGN COMMUNICATION ---
    {
      slug: "how-whatsapp-and-sms-help-in-awareness-campaigns",
      title: "How WhatsApp and SMS Help in Awareness Campaigns",
      category: "Campaign Communication",
      excerpt: "Drive positive social action. Deploy bulk notifications, informative templates, and regional outreach broadcasts that build real momentum.",
      date: "February 28, 2026",
      readTime: "6 min read",
      author: "Campaign Director"
    },
    {
      slug: "digital-communication-strategy-for-political-campaigns",
      title: "Digital Communication Strategy for Political Campaigns",
      category: "Campaign Communication",
      excerpt: "A masterclass in modern digital campaign structure. Align voter directories, regional sentiment, and high-delivery SMS broadcasts ethically and efficiently.",
      date: "February 22, 2026",
      readTime: "8 min read",
      author: "Outreach Lead"
    },
    {
      slug: "how-associations-can-use-whatsapp-for-member-communication",
      title: "How Associations Can Use WhatsApp for Member Communication",
      category: "Campaign Communication",
      excerpt: "Keep association members united. Send unified notifications for general meetings, updates, policy announcements, and directory updates easily.",
      date: "February 18, 2026",
      readTime: "5 min read",
      author: "Public Relations Officer"
    },
    {
      slug: "how-conferences-can-use-whatsapp-for-registration-and-reminders",
      title: "How Conferences Can Use WhatsApp for Registration and Reminders",
      category: "Campaign Communication",
      excerpt: "Deliver immediate entry passes, event schedules, and room changes directly to attendee phones, ensuring 100% check-in success rates.",
      date: "February 12, 2026",
      readTime: "5 min read",
      author: "Events Architect"
    },
    {
      slug: "how-to-build-a-complete-outreach-campaign-using-whatsapp-sms-and-rcs",
      title: "How to Build a Complete Outreach Campaign Using WhatsApp, SMS, and RCS",
      category: "Campaign Communication",
      excerpt: "Combine the conversational power of WhatsApp, the reliability of SMS, and the media-rich impact of RCS into a unified multi-channel campaign structure.",
      date: "February 08, 2026",
      readTime: "7 min read",
      author: "Chief Marketing Strategist"
    }
  ];

  const handleContactClick = () => onNavigate("contact");
  const backToBlogs = () => onNavigate("blogs");

  const getFilteredBlogs = () => {
    let filtered = blogData;
    if (activeCategory !== "all") {
      // Handle the tab mapping
      filtered = blogData.filter(b => b.category === activeCategory);
    }
    if (searchQuery && searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(b => 
        b.title.toLowerCase().includes(q) || 
        b.excerpt.toLowerCase().includes(q)
      );
    }
    return filtered;
  };

  const handleBlogClick = (postSlug: string) => onNavigate(`blogs/${postSlug}`);

  const activeBlog = slug ? blogData.find(b => b.slug === slug) : undefined;

  // Article pages get their own browser-tab title
  useEffect(() => {
    if (activeBlog) document.title = `${activeBlog.title} | Turiya Infotech`;
  }, [activeBlog]);

  // Default content for stubs to make them look complete and extremely professional
  const getStubContent = (blog: BlogTopic) => {
    return [
      `In today's fast-moving digital world, "${blog.title}" stands out as an essential topic for progressive organisations aiming to improve operational systems. At Turiya Infotech, we understand that implementing appropriate tools in a structured way can make a huge difference in performance.`,
      `Effective communication requires careful planning, reliable infrastructure, and user-friendly flows. For instance, when dealing with ${blog.category}-based channels, businesses must consider delivery speeds, rate limits, regulatory guidelines, and user convenience in tandem.`,
      "When properly automated, these channels reduce manual administrative overhead, prevent human errors, and boost direct engagement. Turiya Infotech provides fully integrated, custom solutions that connect directly with your databases to enable automated reminders, notification alerts, and conversational support workflows seamlessly.",
      "If you would like to discuss implementing similar communication channels, custom dashboard analytics, or automated systems for your team, contact our technology architects today for a tailored integration blueprint."
    ];
  };

  // RENDER BLOG POST VIEW
  const renderBlogPost = (blog: BlogTopic) => {
    const paragraphs = blog.content || getStubContent(blog);
    return (
      <div className="pt-10 pb-16 md:pt-16 md:pb-24 bg-white text-left font-sans animate-in fade-in duration-300">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          {/* Breadcrumb / Back button */}
          <button 
            onClick={backToBlogs}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-accent transition-colors mb-10 cursor-pointer font-mono"
          >
            <ArrowLeft className="h-4 w-4" />
            BACK TO ALL BLOGS
          </button>

          {/* Post Header */}
          <div className="space-y-6 border-b border-slate-100 pb-10 mb-10">
            <span className="inline-flex text-xs font-bold text-accent tracking-wider uppercase bg-accent/10 px-3 py-1 rounded-full font-display">
              {blog.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary font-display leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 items-center text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-accent" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-accent" />
                {blog.readTime}
              </span>
              <span className="text-slate-200">|</span>
              <span className="font-semibold text-charcoal">Written by {blog.author}</span>
            </div>
          </div>

          {/* Post Body Content */}
          <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            {paragraphs.map((p, idx) =>
              p.startsWith("## ") ? (
                <h2 key={idx} className="text-xl sm:text-2xl font-bold tracking-tight text-primary font-display pt-4">
                  {p.slice(3)}
                </h2>
              ) : (
                <p key={idx} className="font-light">
                  {p}
                </p>
              )
            )}
          </div>

          {/* CTA Banner Section inside Blog Post */}
          <div className="mt-16 bg-primary rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg shadow-primary/10">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6 max-w-xl font-sans">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-display text-white">
                Improve Your Communication Systems
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                Whether you need a custom chatbot, high-speed WhatsApp API integration, or multi-channel SMS/RCS automation, Turiya Infotech delivers secure, enterprise-grade solutions tailored to your business rules.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleContactClick}
                  className="rounded-md bg-accent hover:bg-accent-hover text-white text-xs font-bold px-5 py-2.5 shadow-md shadow-accent/15 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                  Request Integration Call
                </button>
                <button
                  onClick={backToBlogs}
                  className="rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold px-4 py-2.5 transition-colors text-center"
                >
                  View Other Guides
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };

  // RENDER BLOG LISTING VIEW
  if (slug) {
    return activeBlog ? renderBlogPost(activeBlog) : <NotFoundPage onNavigate={onNavigate} />;
  }

  const filteredBlogs = getFilteredBlogs();
  const featuredBlog = blogData[0]; // "What is WhatsApp Business API..."

  return (
    <div className="pt-10 pb-16 md:pt-16 md:pb-24 bg-warm-bg text-left animate-in fade-in duration-300" id="blogs-page">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 font-sans">
          <SectionEyebrow number="01" label="Knowledge Hub" className="justify-center" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary font-display">
            Insights & Guides
          </h1>
          <p className="text-[#6B6478] text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Stay updated with practical insights on WhatsApp Business API, SMS, RCS, chatbot automation, healthcare technology, campaign communication, and custom software development.
          </p>
          <p className="text-grey text-sm leading-relaxed max-w-2xl mx-auto">
            Our blogs are created to help businesses, institutions, healthcare providers, and campaign teams understand how digital communication can improve engagement and operations.
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="bg-white border border-slate-150 p-6 rounded-2xl shadow-xs mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#bf7bfd]/50 focus:outline-none rounded-xl pl-10 pr-4 py-2.5 text-xs text-primary font-sans"
            />
          </div>

          {/* Category Tabs Scroll Wrapper */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-sans ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-sm shadow-primary/10"
                    : "bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Card (Visible when not actively filtering by non-whatsapp category) */}
        {activeCategory === "all" && !searchQuery && (
          <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 mb-16 grid lg:grid-cols-12 text-left">
            <div className="lg:col-span-7 p-8 md:p-12 space-y-6 flex flex-col justify-center font-sans">
              <span className="self-start text-[10px] font-bold text-accent tracking-wider uppercase bg-accent/10 px-2.5 py-1 rounded-full font-display">
                Featured Insight
              </span>
              <div className="space-y-3">
                <h2 
                  onClick={() => handleBlogClick(featuredBlog.slug)}
                  className="text-2xl md:text-3xl font-semibold tracking-tight text-primary font-display leading-tight hover:text-accent cursor-pointer transition-colors"
                >
                  {featuredBlog.title}
                </h2>
                <p className="text-grey text-sm leading-relaxed">
                  {featuredBlog.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  {featuredBlog.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  {featuredBlog.readTime}
                </span>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs font-semibold text-charcoal">
                  By <span className="font-bold text-primary">{featuredBlog.author}</span>
                </div>
                <button 
                  onClick={() => handleBlogClick(featuredBlog.slug)}
                  className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Read Article <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-primary p-12 text-white flex flex-col justify-between border-l border-white/10 relative min-h-[300px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              <div className="h-10 w-10 rounded-lg bg-accent/20 border border-accent/20 flex items-center justify-center text-accent">
                <BookOpen className="h-5 w-5" />
              </div>
              
              <div className="space-y-4 font-sans">
                <span className="text-[10px] font-bold text-accent tracking-widest uppercase font-mono">CHANNEL INFRASTRUCTURE</span>
                <h3 className="font-bold text-xl md:text-2xl font-display leading-tight">
                  Deploy verified messaging triggers at scale.
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                  Connect your local clinical software, student admin platforms, or campaigning CRM engines directly to SMS, RCS, and WhatsApp stacks.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Grid List of Blogs */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Tag className="h-4 w-4 text-accent" />
            <h3 className="text-sm font-bold text-slate-400 font-mono uppercase tracking-wider">
              {activeCategory === "all" ? "Available Guides" : `${activeCategory} Articles`} ({filteredBlogs.length})
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBlogs.map((blog) => (
              <div 
                key={blog.slug} 
                className="bg-white border border-slate-100 rounded-2xl p-6 text-left hover:border-accent/20 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4 font-sans">
                  <span className="inline-flex text-[9px] font-bold text-primary tracking-wider uppercase bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-full font-display">
                    {blog.category}
                  </span>
                  <h3 
                    onClick={() => handleBlogClick(blog.slug)}
                    className="font-bold text-primary font-display text-base leading-snug group-hover:text-accent transition-colors cursor-pointer"
                  >
                    {blog.title}
                  </h3>
                  <p className="text-grey text-sm leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="border-t border-slate-50 pt-4 mt-6">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between mt-3.5 text-xs">
                    <span className="font-semibold text-charcoal text-[11px]">{blog.author}</span>
                    <button 
                      onClick={() => handleBlogClick(blog.slug)}
                      className="text-primary hover:text-accent transition-colors flex items-center gap-0.5 font-bold cursor-pointer"
                    >
                      Read Guide <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="py-24 text-center text-slate-400 text-sm font-sans">
              No matching articles found. Try adjusting your query or selecting another category.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
