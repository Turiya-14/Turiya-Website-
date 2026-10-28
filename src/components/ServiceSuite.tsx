import { servicesData, ServiceDetail } from "../data/servicesData";
import { 
  MessageCircle, MessageSquareText, Sparkles, Cpu, Code, Heart, Megaphone, 
  CheckCircle2, ArrowRight 
} from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

interface ServiceSuiteProps {
  onNavigate: (view: string) => void;
  allServices?: boolean;
}

export default function ServiceSuite({ onNavigate, allServices = false }: ServiceSuiteProps) {
  
  // On the standalone /services page this heading is the page's h1
  const Heading = allServices ? "h1" : "h2";

  // Lucide Icon selector
  const getIcon = (name: string, className: string) => {
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
        return <MessageCircle className={className} />;
    }
  };

  // Restrict to the 3 highest-priority services on the homepage, or show all on the full services page
  const displayedServices = allServices
    ? servicesData
    : [
        "whatsapp-business-api",
        "chatbot-development",
        "custom-software-development"
      ]
        .map(slug => servicesData.find(s => s.slug === slug))
        .filter((s): s is ServiceDetail => s !== undefined);

  return (
    <section className={`${allServices ? "pt-10 pb-16 md:pt-16 md:pb-24" : "py-20 md:py-28"} bg-white`} id="solutions-suite">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* SERVICES SUITE: Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SectionEyebrow 
            number="04" 
            label={allServices ? "The Full Suite" : "The Communication Suite"} 
            className="justify-center" 
          />
          <Heading className="text-3xl md:text-4xl font-semibold tracking-tight text-primary font-display">
            {allServices ? "All Enterprise Services" : "Our Enterprise Services"}
          </Heading>
          <p className="text-grey text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Reliable communication channels built on fast routing networks and secure data systems.
          </p>
        </div>

        {/* SERVICES SUITE: Grid Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {displayedServices.map((service) => {
            // Get first 3 features to display in list
            const keyFeatures = service.features.slice(0, 3);
            
            return (
              <div
                key={service.slug}
                className="group relative rounded-2xl bg-white hover:bg-white p-6 sm:p-8 border border-border-subtle hover:border-accent/20 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300 flex flex-col justify-between text-left"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-accent transition-colors rounded-t-2xl" />

                <div className="space-y-6">
                  {/* Icon */}
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                    {getIcon(service.iconName, "h-6 w-6 text-accent group-hover:text-white transition-colors")}
                  </span>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-primary font-display group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-grey text-sm leading-relaxed min-h-[3.5rem]">
                      {service.shortIntro}
                    </p>
                  </div>

                  {/* Features List (3 Bullets) */}
                  <ul className="space-y-2 border-t border-border-subtle pt-5 text-xs sm:text-sm">
                    {keyFeatures.map((feat) => (
                      <li key={feat} className="flex gap-2 items-start text-primary font-medium">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="leading-normal">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Link */}
                <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => onNavigate(`services/${service.slug}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition-all cursor-pointer bg-transparent py-1.5 px-3 rounded-md hover:bg-slate-50"
                  >
                    Explore Service <ArrowRight className="h-4 w-4 text-accent" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Link below the grid */}
        {!allServices && (
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate("services")}
              className="inline-flex items-center gap-2 rounded-md bg-primary hover:bg-primary-hover px-6 py-3 text-xs font-bold text-white shadow-md transition-all cursor-pointer font-sans"
            >
              View All Services <ArrowRight className="h-4 w-4 text-accent" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
