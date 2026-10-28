import { useState } from "react";
import { HeartPulse, GraduationCap, ShoppingBag, Landmark, Building, Hotel, Truck, Blocks, CheckCircle2, ArrowRight } from "lucide-react";
import { SectorItem } from "../types";

export default function Sectors() {
  const [activeSectorId, setActiveSectorId] = useState<string>("finance");

  const sectors: SectorItem[] = [
    {
      id: "healthcare",
      name: "Healthcare",
      description: "Automate appointments and patient reports via WhatsApp API.",
      useCase: "Secure automated appointment scheduling, digital prescription receipts, and lab report availability notification pipelines direct to patient devices.",
      iconName: "HeartPulse",
      metric: "+42% Booking Turnaround"
    },
    {
      id: "education",
      name: "Education",
      description: "Streamline admissions and parent communication channels.",
      useCase: "School fee reminders, automated admission inquiry bots, digital class progress reports, and broadcast systems for critical emergency alerts.",
      iconName: "GraduationCap",
      metric: "94% Parent Engagement"
    },
    {
      id: "retail",
      name: "Retail & E-commerce",
      description: "Personalized marketing and order tracking notifications.",
      useCase: "Interactive order tracking, cart abandonment recovery messages, automated coupon delivery, and localized promotional campaign alerts.",
      iconName: "ShoppingBag",
      metric: "+28% Sales Recovery"
    },
    {
      id: "finance",
      name: "Finance & Banking",
      description: "Secure OTPs and transaction alerts with banking-grade encryption.",
      useCase: "Dual-tier SMS/WhatsApp OTP gateways, instant credit/debit alerts, secure multi-factor confirmation tokens, and fraud-risk warning alerts.",
      iconName: "Landmark",
      metric: "99.99% Routing Delivery"
    },
    {
      id: "realestate",
      name: "Real Estate",
      description: "Lead management and instant property virtual tour links.",
      useCase: "Instant automated WhatsApp VR tour broadcasts, property availability triggers, agent assignment systems, and scheduled lease renewal push notices.",
      iconName: "Building",
      metric: "2.4x Lead Conversions"
    },
    {
      id: "hospitality",
      name: "Hospitality",
      description: "Concierge automation and booking confirmations.",
      useCase: "Contactless digital mobile check-ins, automated booking confirmation slips, room service order bots, and post-stay feedback collection gateways.",
      iconName: "Hotel",
      metric: "91/100 CSAT Score"
    },
    {
      id: "logistics",
      name: "Logistics & Fleet",
      description: "Real-time status updates and driver communications.",
      useCase: "Automated real-time dispatch alerts, geo-location driver assignment feeds, estimated delivery updates, and automated digital signing slips.",
      iconName: "Truck",
      metric: "99.2% Delivery Precision"
    },
    {
      id: "enterprise",
      name: "Enterprise Solutions",
      description: "Internal tool integration and omni-channel support hubs.",
      useCase: "Centralized communications gateway routing, directory syncing, internal notification triggers, and multi-tenant security partition controls.",
      iconName: "Blocks",
      metric: "40% Support Ticket Drop"
    }
  ];

  const getIcon = (name: string, isActive: boolean) => {
    const sizeClasses = "h-5 w-5 transition-transform group-hover:scale-110";
    const colorClasses = isActive ? "text-primary" : "text-slate-500 group-hover:text-primary";
    
    switch (name) {
      case "HeartPulse":
        return <HeartPulse className={`${sizeClasses} ${colorClasses}`} />;
      case "GraduationCap":
        return <GraduationCap className={`${sizeClasses} ${colorClasses}`} />;
      case "ShoppingBag":
        return <ShoppingBag className={`${sizeClasses} ${colorClasses}`} />;
      case "Landmark":
        return <Landmark className={`${sizeClasses} ${colorClasses}`} />;
      case "Building":
        return <Building className={`${sizeClasses} ${colorClasses}`} />;
      case "Hotel":
        return <Hotel className={`${sizeClasses} ${colorClasses}`} />;
      case "Truck":
        return <Truck className={`${sizeClasses} ${colorClasses}`} />;
      case "Blocks":
        return <Blocks className={`${sizeClasses} ${colorClasses}`} />;
      default:
        return <Blocks className={`${sizeClasses} ${colorClasses}`} />;
    }
  };

  const activeSector = sectors.find((s) => s.id === activeSectorId) || sectors[0];

  const renderWatermark = (name: string, isActive: boolean) => {
    const sizeClasses = "absolute bottom-[-16px] right-[-16px] h-[78px] w-[78px] pointer-events-none z-0 transform transition-all duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)]";
    const colorAndOpacity = isActive
      ? "text-primary opacity-[0.12] scale-105"
      : "text-primary opacity-[0.05] group-hover:opacity-[0.14] group-hover:text-primary group-hover:scale-[1.10] group-hover:rotate-[5deg]";

    switch (name) {
      case "HeartPulse":
        return <HeartPulse className={`${sizeClasses} ${colorAndOpacity}`} />;
      case "GraduationCap":
        return <GraduationCap className={`${sizeClasses} ${colorAndOpacity}`} />;
      case "ShoppingBag":
        return <ShoppingBag className={`${sizeClasses} ${colorAndOpacity}`} />;
      case "Landmark":
        return <Landmark className={`${sizeClasses} ${colorAndOpacity}`} />;
      case "Building":
        return <Building className={`${sizeClasses} ${colorAndOpacity}`} />;
      case "Hotel":
        return <Hotel className={`${sizeClasses} ${colorAndOpacity}`} />;
      case "Truck":
        return <Truck className={`${sizeClasses} ${colorAndOpacity}`} />;
      case "Blocks":
        return <Blocks className={`${sizeClasses} ${colorAndOpacity}`} />;
      default:
        return <Blocks className={`${sizeClasses} ${colorAndOpacity}`} />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-warm-bg border-y border-border-subtle" id="sectors-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-3 text-left max-w-xl font-sans">
            <h2 className="text-3xl font-semibold tracking-tight text-primary font-display">
              Workflows for Every Field
            </h2>
            <p className="text-grey text-base leading-relaxed">
              Every business works differently. We create communication solutions that fit the way you work, making it easier to connect with customers and manage daily operations.
            </p>
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((sec) => {
            const isActive = activeSectorId === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSectorId(sec.id)}
                className={`group rounded-md p-5 border text-left relative flex flex-col justify-between h-auto min-h-[160px] pb-6 cursor-pointer overflow-hidden transition-all duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 will-change-transform ${
                  isActive
                    ? "border-primary bg-white shadow-lg shadow-slate-200/60 ring-2 ring-primary/10"
                    : "border-slate-200 bg-white shadow-xs hover:border-slate-300/80 hover:shadow-md hover:shadow-slate-200/60"
                }`}
              >
                {/* Background Watermark Icon */}
                {renderWatermark(sec.iconName, isActive)}

                <div className="space-y-3 relative z-10 font-sans">
                  {/* Icon */}
                  <span className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition-all duration-300 ${
                    isActive ? "bg-primary/10" : "bg-slate-50 group-hover:bg-primary/5"
                  }`}>
                    {getIcon(sec.iconName, isActive)}
                  </span>

                  {/* Details */}
                  <div>
                    <h3 className={`text-sm font-bold truncate transition-colors duration-300 ${isActive ? "text-primary font-display" : "text-charcoal group-hover:text-primary font-display"}`}>
                      {sec.name}
                    </h3>
                    <p className="text-grey text-sm leading-normal mt-0.5">
                      {sec.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Sector Detail Spotlight Box */}
        <div className="mt-8 rounded-md bg-white border border-border-subtle p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 md:gap-12 items-center text-left">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                {getIcon(activeSector.iconName, true)}
              </span>
              <h3 className="font-bold text-primary text-base font-display">
                {activeSector.name} Blueprint
              </h3>
            </div>

            <p className="text-grey text-sm leading-relaxed font-sans">
              {activeSector.useCase}
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-sm font-sans">
              <div className="flex items-center gap-1.5 text-charcoal">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Encrypted delivery reports</span>
              </div>
              <div className="flex items-center gap-1.5 text-charcoal">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Privacy-first data handling</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[220px] bg-warm-bg rounded-md p-5 border border-slate-100 flex flex-col items-center justify-center text-center flex-shrink-0 space-y-1 font-sans">
            <span className="text-[10px] font-semibold text-primary/60 tracking-wider uppercase">Spotlight ROI</span>
            <div className="text-2xl font-black text-accent font-mono tracking-tight">{activeSector.metric}</div>
            <p className="text-[10px] text-grey">Average sector improvement recorded.</p>
            <a href="#contact-section" className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:text-primary/80 pt-2 transition-colors">
              Request Deployment
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
