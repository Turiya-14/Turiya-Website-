import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, MessageSquare, MessagesSquare, Info, Smartphone, Code, Target, Cpu, Send } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIdx, setOpenIdx] = useState<string | null>("general-0");

  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "general", label: "General", icon: Info },
    { id: "whatsapp", label: "WhatsApp API", icon: MessageSquare },
    { id: "sms", label: "SMS Solutions", icon: Send },
    { id: "rcs", label: "RCS Messaging", icon: Smartphone },
    { id: "chatbot", label: "Chatbot Dev", icon: Cpu },
    { id: "software", label: "Software Dev", icon: Code },
    { id: "campaign", label: "Campaigns", icon: Target }
  ];

  const faqs: FAQItem[] = [
    // GENERAL
    {
      category: "general",
      q: "What does Turiya Infotech do?",
      a: "Turiya Infotech provides WhatsApp Business API, SMS, RCS, chatbot development, campaign communication, and custom software development services for businesses, healthcare providers, educational institutions, campaigns, and enterprises."
    },
    {
      category: "general",
      q: "Which industries does Turiya Infotech serve?",
      a: "We serve healthcare, education, politics, retail, restaurants, astrology, pharma, real estate, manufacturing, diagnostic centres, associations, events, and service-led businesses."
    },
    {
      category: "general",
      q: "Does Turiya Infotech provide only messaging services?",
      a: "No. Along with WhatsApp, SMS, and RCS, we also provide chatbot development, healthcare software, hospital and clinic automation, campaign dashboards, and custom software development."
    },

    // WHATSAPP
    {
      category: "whatsapp",
      q: "What is WhatsApp Business API?",
      a: "WhatsApp Business API is a professional messaging solution that allows businesses to communicate with customers at scale through automated, structured, and integrated WhatsApp communication."
    },
    {
      category: "whatsapp",
      q: "Can I send bulk WhatsApp messages?",
      a: "Yes, businesses can send approved WhatsApp campaigns and templates through WhatsApp Business API, subject to platform policies and message category rules."
    },
    {
      category: "whatsapp",
      q: "Can WhatsApp be integrated with a chatbot?",
      a: "Yes. WhatsApp can be connected with a chatbot to answer FAQs, collect leads, book appointments, send reminders, and automate customer conversations."
    },
    {
      category: "whatsapp",
      q: "Can WhatsApp be used for healthcare communication?",
      a: "Yes. Healthcare providers can use WhatsApp for appointment reminders, vaccination reminders, patient follow-ups, reports, health awareness messages, and enquiry support."
    },

    // SMS
    {
      category: "sms",
      q: "What is bulk SMS?",
      a: "Bulk SMS allows businesses to send large numbers of messages to customers, users, patients, students, or campaign audiences at scale."
    },
    {
      category: "sms",
      q: "What is the difference between promotional and transactional SMS?",
      a: "Promotional SMS is generally used for offers, campaigns, and marketing communication. Transactional SMS is generally used for service-related alerts, OTPs, confirmations, and important updates."
    },
    {
      category: "sms",
      q: "Can SMS be used with WhatsApp?",
      a: "Yes. Many businesses use WhatsApp and SMS together. WhatsApp is useful for engagement and rich communication, while SMS is useful for direct reminders and alerts."
    },

    // RCS
    {
      category: "rcs",
      q: "What is RCS messaging?",
      a: "RCS is a rich messaging format that allows businesses to send branded and interactive messages with images, buttons, carousels, and richer user experiences."
    },
    {
      category: "rcs",
      q: "How is RCS different from SMS?",
      a: "SMS is text-based, while RCS supports rich media, branding, interactive buttons, and better visual communication."
    },
    {
      category: "rcs",
      q: "Which businesses should use RCS?",
      a: "Retail brands, educational institutions, healthcare organisations, event organisers, political campaigns, and product-based businesses can use RCS for richer communication."
    },

    // CHATBOT
    {
      category: "chatbot",
      q: "What is a chatbot?",
      a: "A chatbot is an automated conversation system that can answer questions, collect information, guide users, and perform basic tasks without manual intervention."
    },
    {
      category: "chatbot",
      q: "Can you create a custom chatbot for my business?",
      a: "Yes. Turiya Infotech creates custom chatbots based on your industry, business flow, and customer communication needs."
    },
    {
      category: "chatbot",
      q: "Can chatbots collect leads?",
      a: "Yes. Chatbots can collect name, mobile number, email, service interest, location, appointment preference, and other required details."
    },
    {
      category: "chatbot",
      q: "Can chatbot conversations be transferred to a human team?",
      a: "Yes. The chatbot can be designed to collect initial details and then transfer the enquiry to a team member for further handling."
    },

    // SOFTWARE DEVELOPMENT
    {
      category: "software",
      q: "Does Turiya Infotech build custom software?",
      a: "Yes. We build custom software, dashboards, admin panels, healthcare systems, appointment systems, patient management systems, and workflow-based applications."
    },
    {
      category: "software",
      q: "Do you build Hospital Management Systems?",
      a: "Yes. We build healthcare-focused systems such as doctor clinic software, hospital communication systems, appointment systems, vaccination reminder systems, and patient reporting tools."
    },
    {
      category: "software",
      q: "Can you build software with WhatsApp integration?",
      a: "Yes. We can integrate WhatsApp communication with software systems for reminders, alerts, follow-ups, and automated messages."
    },

    // CAMPAIGN
    {
      category: "campaign",
      q: "Can Turiya Infotech manage awareness campaigns?",
      a: "Yes. We support awareness campaigns using WhatsApp, SMS, RCS, chatbot flows, and structured communication planning."
    },
    {
      category: "campaign",
      q: "Do you work on political or public communication campaigns?",
      a: "Yes. We support political, public awareness, association, doctor election, and community communication campaigns."
    },
    {
      category: "campaign",
      q: "Can you help with campaign message content?",
      a: "Yes. We can support message planning, template creation, campaign flow, and communication strategy."
    }
  ];

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const getCategoryLabel = (catId: string) => {
    return categories.find(c => c.id === catId)?.label || catId;
  };

  const getCategoryThemeClass = (catId: string) => {
    switch (catId) {
      case "general": return "border-blue-100 bg-blue-50/50 text-blue-700";
      case "whatsapp": return "border-emerald-100 bg-emerald-50/50 text-emerald-700";
      case "sms": return "border-indigo-100 bg-indigo-50/50 text-indigo-700";
      case "rcs": return "border-pink-100 bg-pink-50/50 text-pink-700";
      case "chatbot": return "border-amber-100 bg-amber-50/50 text-amber-700";
      case "software": return "border-purple-100 bg-purple-50/50 text-purple-700";
      case "campaign": return "border-red-100 bg-red-50/50 text-red-700";
      default: return "border-slate-100 bg-slate-50 text-slate-700";
    }
  };

  // Generate Schema.org FAQPage Structured Data Dynamic Payload
  const jsonLdPayload = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="pt-10 pb-16 md:pt-16 md:pb-24 bg-warm-bg text-left font-sans" id="faqs-page" aria-labelledby="faqs-heading">
      
      {/* Schema.org JSON-LD SEO Script block */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPayload).replace(/</g, "\\u003c") }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SectionEyebrow number="01" label="Help Center & SEO FAQ" className="justify-center" />
          <h1 id="faqs-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary font-display">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-800 text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Clear, transparent answers about WhatsApp API, SMS delivery, chatbot development, healthcare automation, and campaigning strategy.
          </p>
        </div>

        {/* Categorized Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto" role="tablist" aria-label="FAQ categories">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIdx(`${cat.id}-0`);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isSelected
                    ? "bg-primary text-white shadow-md shadow-primary/15"
                    : "bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-primary"
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-xs space-y-5 text-left">
              <div className="h-11 w-11 rounded-xl bg-[#F3E9FF] text-[#6B21A8] border border-[#6B21A8]/15 flex items-center justify-center shrink-0">
                <MessagesSquare className="h-5 w-5 text-[#6B21A8]" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-primary font-display text-lg tracking-tight">Need Help Finding the Right Answer?</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Can’t find what you’re looking for? Speak directly with our team about WhatsApp Business API, SMS, RCS, chatbots, automation, integrations, or custom software. Send your question on WhatsApp and we’ll guide you towards the right solution.
              </p>
              <div className="pt-1">
                <a
                  href="https://wa.me/917020262435?text=Hi%20Turiya%20Infotech%2C%20I%20have%20a%20question%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ask Turiya Infotech a question on WhatsApp"
                  className="inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-xl bg-primary text-white py-3 px-4 text-xs sm:text-sm font-bold hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Ask Us on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="p-4 bg-white/50 border border-slate-200/80 rounded-xl flex gap-3 text-sm font-sans">
              <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-grey leading-relaxed">
                All FAQ documentation and services are structured in complete accordance with Meta Developer Guidelines and official telecom routing policies.
              </p>
            </div>
          </div>

          {/* Right Column Accordion list */}
          <div className="lg:col-span-8 space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const uniqueKey = `${faq.category}-${idx}`;
              const isOpen = openIdx === uniqueKey;
              return (
                <div 
                  key={uniqueKey} 
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:border-slate-200/80 transition-all duration-300"
                >
                  {/* Accordion header button */}
                  <button
                    type="button"
                    id={`faq-header-${uniqueKey}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${uniqueKey}`}
                    onClick={() => setOpenIdx(isOpen ? null : uniqueKey)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-primary font-display text-sm sm:text-base cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <div className="space-y-1 pr-4 text-left">
                      {activeCategory === "all" && (
                        <span className={`inline-block text-[9px] font-bold font-mono px-2 py-0.5 rounded border uppercase ${getCategoryThemeClass(faq.category)}`}>
                          {getCategoryLabel(faq.category)}
                        </span>
                      )}
                      <div className="text-primary hover:text-accent transition-colors leading-tight">{faq.q}</div>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="h-4.5 w-4.5 text-grey shrink-0 ml-2" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-4.5 w-4.5 text-grey shrink-0 ml-2" aria-hidden="true" />
                    )}
                  </button>

                  {/* Accordion content */}
                  {isOpen && (
                    <div 
                      id={`faq-content-${uniqueKey}`}
                      role="region"
                      aria-labelledby={`faq-header-${uniqueKey}`}
                      className="px-5 pb-5 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-50 bg-slate-50/20 font-sans text-left"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="py-12 text-center text-slate-400 text-xs">
                No FAQ entries found for this specific channel.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
