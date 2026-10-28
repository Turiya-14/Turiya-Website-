import { servicesData, solutionBlocksData } from "../data/servicesData";
import { 
  MessageSquare, MessageSquareText, Sparkles, Cpu, Code, Heart, Megaphone, 
  ArrowRight, CheckCircle2, ChevronRight, MessageCircle 
} from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

interface ServicePageProps {
  slug: string;
  onNavigateToContact: (serviceSlug: string) => void;
}

export default function ServicePage({ slug, onNavigateToContact }: ServicePageProps) {
  // App only routes known slugs here; fall back defensively anyway
  const service = servicesData.find(s => s.slug === slug) || servicesData[0];
  const block = solutionBlocksData[service.slug];

  // Dynamic Icon selector
  const renderServiceIcon = (name: string, className: string) => {
    switch (name) {
      case "MessageCircle":
        return <MessageCircle className={className} />;
      case "MessageSquareText":
        return <MessageSquareText className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      case "Cpu":
        return <Cpu className={className} />;
      case "Code":
        return <Code className={className} />;
      case "Heart":
        return <Heart className={className} />;
      case "Megaphone":
        return <Megaphone className={className} />;
      default:
        return <MessageSquare className={className} />;
    }
  };

  // Dedicated Chatbot Flow timeline data
  const chatbotFlows = [
    {
      title: "Doctor Clinic",
      steps: ["Book appointment", "Select doctor", "Select time", "Confirm patient details", "Send reminder"],
      outcome: "Reduces manual calls and missed appointments."
    },
    {
      title: "Restaurant",
      steps: ["View menu", "Table booking / order enquiry", "Offer update", "Feedback"],
      outcome: "Improves customer response and order enquiries."
    },
    {
      title: "Astrology",
      steps: ["Select service", "Enter birth details", "Make payment", "Consultation flow"],
      outcome: "Automates paid consultation enquiries."
    },
    {
      title: "Education",
      steps: ["Course enquiry", "Counsellor callback", "Admission details", "Fee reminder"],
      outcome: "Improves lead capture and admission follow-up."
    },
    {
      title: "Campaign",
      steps: ["Introduction", "Location selection", "Feedback", "Supporter registration"],
      outcome: "Improves structured public engagement."
    }
  ];

  return (
    <div className="pt-10 pb-16 md:pt-16 md:pb-24 bg-warm-bg" id={`service-page-${service.slug}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-grey font-sans mb-6">
          <span>Services</span>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <span className="font-semibold text-primary">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10">
              {renderServiceIcon(service.iconName, "h-7 w-7 text-accent")}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary font-display leading-tight">
              {service.title}
            </h1>
            <p className="text-charcoal font-bold text-base sm:text-lg leading-relaxed font-sans border-l-4 border-accent pl-4">
              {service.shortIntro}
            </p>
            <p className="text-grey text-sm sm:text-base leading-relaxed font-sans">
              {service.longIntro}
            </p>
            <div>
              <button
                onClick={() => onNavigateToContact(service.slug)}
                className="inline-flex items-center gap-2 rounded-md bg-primary hover:bg-primary-hover px-6 py-3 text-xs font-bold text-white shadow-md transition-all cursor-pointer font-sans"
              >
                Discuss {service.title} <ArrowRight className="h-4 w-4 text-accent" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-video lg:aspect-square rounded-2xl bg-primary p-6 sm:p-8 text-white flex flex-col justify-between border border-white/10 shadow-xl overflow-hidden relative">
              {/* Blur background blobs */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
              
              <div 
                aria-live="polite"
                className="space-y-4 relative z-10 text-left transition-opacity duration-300 ease-in-out"
              >
                <div className="text-[10px] sm:text-xs font-bold tracking-widest text-accent uppercase font-sans">
                  {block.eyebrow}
                </div>
                <h3 className="font-bold font-display text-lg sm:text-xl md:text-2xl leading-snug text-white">
                  {block.title}
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
                  {block.description}
                </p>
              </div>

              {/* Service Capabilities List */}
              <div aria-live="polite" className="space-y-3 border-t border-white/10 pt-6 relative z-10 text-left font-sans">
                {block.capabilities.map(([label, status], idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-slate-200 font-medium truncate">{label}</span>
                    </div>
                    <span className="font-semibold text-white bg-white/10 px-2.5 py-0.5 rounded text-[11px] tracking-wide shrink-0 border border-white/10">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Checklist Use Cases / Features section */}
        <div className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-sm text-left mb-20 font-sans">
          <div className="max-w-3xl mb-12 space-y-3">
            <SectionEyebrow number="01" label="Key Capabilities" className="mb-2" />
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary font-display">
              Key Use Cases & Features
            </h2>
            <p className="text-grey text-base">
              Explore how we configure {service.title} for organizations to automate routines, enhance transparency, and eliminate structural friction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feat) => (
              <div key={feat} className="flex gap-3 items-start p-4 rounded-xl border border-slate-100 hover:border-accent/10 hover:bg-slate-50/50 transition-colors">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </span>
                <span className="text-xs sm:text-sm text-charcoal font-medium leading-tight">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Chatbot Flows Timeline (Only on Chatbot page) */}
        {slug === "chatbot-development" && (
          <div className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-sm text-left mb-20 font-sans">
            <div className="max-w-3xl mb-12 space-y-3">
              <SectionEyebrow number="02" label="Conversational Logics" className="mb-2" />
              <h2 className="text-2xl sm:text-3xl font-semibold text-primary font-display">
                Chatbot Flow Examples
              </h2>
              <p className="text-grey text-base">
                Step-by-step logic models showing standard client journeys and business outcomes.
              </p>
            </div>

            <div className="space-y-8">
              {chatbotFlows.map((flow) => (
                <div key={flow.title} className="p-6 rounded-xl border border-slate-100 hover:border-slate-200 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h3 className="font-bold text-primary font-display text-base">
                      {flow.title} Chatbot Flow
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-bold text-accent font-display">
                      <span>Outcome:</span>
                      <span className="text-slate-800 font-medium font-sans">{flow.outcome}</span>
                    </div>
                  </div>

                  {/* Horizontal steps design */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 relative">
                    {flow.steps.map((step, idx) => (
                      <div key={step} className="flex items-center gap-2 md:flex-col md:items-start relative">
                        {/* Circle step badge */}
                        <div className="flex items-center gap-3 md:w-full">
                          <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0 font-display">
                            {idx + 1}
                          </div>
                          {idx < flow.steps.length - 1 && (
                            <div className="hidden md:block flex-grow h-[2px] bg-slate-100" />
                          )}
                        </div>

                        {/* Text step name */}
                        <div className="bg-slate-50 border border-slate-100 rounded px-3 py-1.5 text-xs text-charcoal font-semibold tracking-wide w-full md:mt-2 text-left">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Band */}
        <div className="relative rounded-2xl bg-primary px-6 py-12 md:p-16 text-center text-white shadow-xl shadow-primary/10 overflow-hidden font-sans">
          {/* Blur background accents */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight font-display">
              {service.ctaText}
            </h3>
            <p className="text-primary-light text-sm sm:text-base leading-relaxed max-w-lg mx-auto font-medium">
              We engineer custom messaging triggers and webhook loops tailored precisely around your existing client databases or web structures.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onNavigateToContact(service.slug)}
                className="rounded-md bg-accent hover:bg-accent-hover text-white px-8 py-3.5 text-xs font-bold transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
              >
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
