import { Layers, CheckCircle2, ChevronRight, ExternalLink } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import { partnerData } from "../data/partnerData";

export default function PartnersPage() {
  const partners = partnerData;


  const valueProps = [
    { title: "Creative campaign planning", desc: "End-to-end strategic design mapping to secure maximum campaign response levels." },
    { title: "Video and media production", desc: "High-definition broadcast video and cinematic collateral tailored to messaging formats." },
    { title: "Software development support", desc: "Reliable codebase assistance, custom plugin builds, and responsive interface setups." },
    { title: "Data management and processing", desc: "Rigorous sorting, classification, and secure synchronization of high-volume client datasets." },
    { title: "Digital campaign execution", desc: "Synchronous delivery across WhatsApp Business API, SMS templates, and rich RCS formats." },
    { title: "Brand communication", desc: "Precise copy drafting, brand alignment validation, and Meta template authorization." },
    { title: "Technology implementation", desc: "Direct REST API triggers, server webhook integration, and carrier routing optimization." },
    { title: "Website and software support", desc: "Continuous uptime auditing, container routing checks, and direct client assistance." },
    { title: "Marketing strategy", desc: "Data-driven targeting models to optimize conversion rates and outreach budget levels." },
    { title: "Automation and integration", desc: "Zero-latency automatic replies, dynamic lookup databases, and scheduler automation." }
  ];

  return (
    <div className="pt-10 pb-16 md:pt-16 md:pb-24 bg-warm-bg" id="partners-page">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20 font-sans">
          <SectionEyebrow number="01" label="Strategic Ecosystem" className="justify-center" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary font-display">
            Partner Network
          </h1>
          <p className="text-slate-800 text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Turiya Infotech works with a strong network of creative, campaign, technology, data, software, and media partners to deliver complete digital solutions.
          </p>
        </div>

        {/* Partners Grid Section */}
        <div className="space-y-8 mb-24 text-left">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <Layers className="h-4.5 w-4.5" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-primary font-display">
                Authorized Network Members
              </h2>
              <p className="text-xs text-slate-400">Collaborating to drive secure digital growth</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner) => {
              const isOfficialSite = Boolean(partner.website);
              const frameClass = partner.id === "frame-fox-media"
                ? "partner-logo-frame partner-logo-frame--framefox"
                : partner.id === "creative-house"
                ? "partner-logo-frame partner-logo-frame--creative-house"
                : "partner-logo-frame partner-logo-frame--light";
              const imgClass = partner.id === "frame-fox-media"
                ? "framefox-logo"
                : partner.id === "creative-house"
                ? "creative-house-logo"
                : "";

              const cardContent = (
                <>
                  <div className="space-y-4 w-full">
                    <div className={frameClass}>
                      {partner.logoSrc ? (
                        <img 
                          src={partner.logoSrc} 
                          alt={partner.alt || `${partner.name} partner logo`} 
                          className={imgClass}
                          style={{ transform: partner.id === "frame-fox-media" || partner.id === "creative-house" ? undefined : `scale(${partner.logoScale || 1})` }}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="h-9 px-3 rounded-lg flex items-center justify-center font-extrabold tracking-tight text-xs sm:text-sm text-primary font-display border border-slate-200 bg-white shadow-2xs">
                          {partner.name}
                        </div>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-accent tracking-wider uppercase font-mono">
                        {partner.type}
                      </span>
                      <h4 className="font-bold text-primary text-sm tracking-tight leading-tight group-hover:text-accent transition-colors flex items-center gap-1.5">
                        <span>{partner.name}</span>
                        {isOfficialSite && (
                          <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-accent transition-colors shrink-0" />
                        )}
                      </h4>
                      <p className="text-grey text-sm leading-relaxed min-h-[4.5rem]">
                        {partner.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-50 mt-6 flex items-center justify-between text-[10px] font-bold font-mono w-full">
                    <span className={isOfficialSite ? "text-slate-400 group-hover:text-primary transition-colors uppercase" : "text-slate-500 font-semibold tracking-wider font-mono uppercase"}>
                      {isOfficialSite ? "VISIT WEBSITE" : "NETWORK PARTNER"}
                    </span>
                    {isOfficialSite && (
                      <ChevronRight className="h-3.5 w-3.5 text-accent group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </>
              );

              if (isOfficialSite) {
                return (
                  <a 
                    key={partner.id} 
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${partner.name} website`}
                    className="bg-white border border-slate-150 p-6 rounded-2xl shadow-xs hover:shadow-md hover:border-accent/30 transition-all duration-300 flex flex-col justify-between font-sans group cursor-pointer hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <div 
                  key={partner.id} 
                  className="bg-white border border-slate-150 p-6 rounded-2xl shadow-xs transition-all duration-300 flex flex-col justify-between font-sans group"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>

        {/* How Our Network Helps Clients Section */}
        <div className="bg-primary text-white rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/10 relative overflow-hidden text-left font-sans">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-10">
            <div className="max-w-2xl space-y-3">
              <SectionEyebrow 
                number="02" 
                label="Ecosystem Support Matrix" 
                labelColorClass="text-slate-200" 
                dividerColorClass="from-white/40 to-white/10"
                className="mb-2"
              />
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight font-display text-white">
                How Our Partner Network Helps Clients
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Our collaborative framework guarantees streamlined technical, strategy, and logistics execution across all digital products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {valueProps.map((prop, idx) => (
                <div key={idx} className="flex gap-3.5 items-start">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 border border-accent/30 text-accent shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3" />
                  </span>
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-white tracking-tight">
                      {prop.title}
                    </h5>
                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {prop.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>

      </div>
    </div>
  );
}
