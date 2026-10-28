import { useState } from "react";
import { Building2, Users, Sparkles, Filter, ExternalLink, MessageCircle } from "lucide-react";
import ClientLogo from "./ClientLogo";
import SectionEyebrow from "./SectionEyebrow";
import { FEATURED_CLIENTS, FULL_CLIENT_LIST } from "../data/clientData";

export default function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const featuredClients = FEATURED_CLIENTS;
  const fullClientList = FULL_CLIENT_LIST;


  const categories = [
    { id: "all", label: "All Categories" },
    { id: "Healthcare", label: "Healthcare & Diagnostics" },
    { id: "Education", label: "Education" },
    { id: "Technology", label: "Technology" },
    { id: "Others", label: "Retail & Other Sectors" },
  ];

  const MAIN_CATEGORIES = ["Healthcare", "Education", "Technology"];

  const filterClients = () => {
    if (activeCategory === "all") return fullClientList;
    if (activeCategory === "Others") {
      // Everything outside the three main tabs (retail, enterprise, real estate, consultation, ...)
      return fullClientList.filter(c => !MAIN_CATEGORIES.includes(c.category));
    }
    return fullClientList.filter(c => c.category === activeCategory);
  };

  const visibleClients = filterClients();

  return (
    <div className="pt-10 pb-16 md:pt-16 md:pb-24 bg-warm-bg" id="clients-page">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20 font-sans">
          <SectionEyebrow label="Our Track Record" className="justify-center" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary font-display">
            Trusted Client Base
          </h1>
          <p className="text-primary text-base leading-relaxed max-w-2xl mx-auto font-semibold">
            Turiya Infotech has worked with businesses, healthcare organisations, educational institutions, campaign teams, technology brands, service providers, and associations across different sectors.
          </p>
          <p className="text-grey text-sm leading-relaxed max-w-2xl mx-auto">
            Our client experience includes communication campaigns, chatbot solutions, healthcare software, awareness messages, admission campaigns, digital engagement, and custom software development.
          </p>
        </div>

        {/* Featured Clients Grid Section */}
        <div className="space-y-8 mb-24">
          <div className="flex items-center gap-3 border-b border-border-subtle pb-4">
            <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <Sparkles className="h-4.5 w-4.5" />
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-primary font-display">
              Featured Client Portfolios
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredClients.map((client) => {
              const linkUrl = client.website || "https://wa.me/917020262435";
              const isOfficialSite = Boolean(client.website);

              return (
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={client.name}
                  className="bg-white border border-border-subtle p-6 rounded-2xl shadow-xs hover:shadow-md hover:border-accent/30 transition-all duration-300 flex flex-col justify-between items-start text-left group cursor-pointer hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <div className="space-y-4 w-full">
                    <div className="min-h-[84px] w-full flex items-center justify-center bg-slate-100/50 rounded-xl p-2 sm:p-2.5 border border-border-subtle group-hover:bg-slate-100 group-hover:border-slate-200 transition-all duration-300">
                      <ClientLogo name={client.name} className="h-full max-h-16 w-auto max-w-full" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-primary text-xs sm:text-sm tracking-tight leading-tight group-hover:text-accent transition-colors flex items-center gap-1.5">
                        <span>{client.name}</span>
                        {isOfficialSite ? (
                          <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-accent transition-colors shrink-0" />
                        ) : (
                          <MessageCircle className="h-3 w-3 text-emerald-500 group-hover:text-emerald-600 transition-colors shrink-0" />
                        )}
                      </h4>
                      <p className="text-grey text-xs sm:text-sm leading-snug">
                        {client.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border-subtle mt-4 flex items-center justify-between text-[10px] font-bold font-mono w-full">
                    <span className={isOfficialSite ? "text-slate-400 group-hover:text-primary transition-colors" : "text-emerald-600 font-semibold"}>
                      {isOfficialSite ? "VISIT WEBSITE" : "ENQUIRE VIA WHATSAPP"}
                    </span>
                    <div className={`h-1.5 w-1.5 rounded-full ${isOfficialSite ? "bg-accent" : "bg-emerald-500"} animate-pulse`} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Categorized Client List Section */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border-subtle pb-6">
            <div className="flex items-center gap-3 text-left">
              <div className="h-8 w-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                <Building2 className="h-4.5 w-4.5 text-accent" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-primary font-display">
                  Industry Classification Ledger
                </h2>
                <p className="text-[11px] text-slate-400">Filter and audit our historical system deployments</p>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeCategory === cat.id
                      ? "bg-primary text-white shadow-sm shadow-primary/15"
                      : "bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-primary"
                  }`}
                >
                  {cat.id === "all" && <Filter className="h-3 w-3" />}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout of Classification */}
          <div className="bg-white border border-border-subtle rounded-3xl p-6 sm:p-10 shadow-xs text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleClients.map((client) => {
                const linkUrl = client.website || "https://wa.me/917020262435";
                const isOfficialSite = Boolean(client.website);

                return (
                  <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={client.name}
                    className="p-4 rounded-xl border border-slate-100 hover:border-border-subtle hover:bg-slate-50/50 transition-all flex items-center justify-between gap-4 group cursor-pointer hover:-translate-y-0.5 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <div className="space-y-1 text-left font-sans">
                      <h4 className="font-bold text-primary text-xs sm:text-sm group-hover:text-accent transition-colors">
                        {client.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className={`inline-block text-[9px] font-bold font-mono px-2 py-0.5 rounded border bg-primary-light text-primary border-border-subtle`}>
                          {client.category}
                        </span>
                        {!isOfficialSite && (
                          <span className="text-[9px] font-semibold text-emerald-600 font-mono">
                            Enquire via WhatsApp
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="h-7 w-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/5 group-hover:text-accent transition-colors shrink-0">
                      {isOfficialSite ? <ExternalLink className="h-3.5 w-3.5 text-accent" /> : <MessageCircle className="h-3.5 w-3.5 text-emerald-500" />}
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Empty State */}
            {visibleClients.length === 0 && (
              <div className="py-12 text-center text-slate-400 text-xs">
                No clients matching this specific category view.
              </div>
            )}

            {/* Footer Summary Disclaimer */}
            <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left text-sm text-slate-400 font-sans">
              <Users className="h-5 w-5 text-accent shrink-0" />
              <p className="leading-relaxed">
                And many more healthcare providers, educational institutions, political campaigns, businesses, associations, and service-led brands.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
