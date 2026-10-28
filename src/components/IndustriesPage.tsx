import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { industriesData } from "../data/industriesData";
import { 
  HeartPulse, GraduationCap, Users, ShoppingBag, Factory, Home, 
  CalendarDays, Moon, ChevronDown, ChevronUp, CheckSquare 
} from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState(industriesData[0].id);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    [industriesData[0].id]: true
  });

  const location = useLocation();

  // Dynamic Lucide Icon Mapper
  const renderIndustryIcon = (name: string, className: string) => {
    switch (name) {
      case "HeartPulse":
        return <HeartPulse className={className} />;
      case "GraduationCap":
        return <GraduationCap className={className} />;
      case "Users":
        return <Users className={className} />;
      case "ShoppingBag":
        return <ShoppingBag className={className} />;
      case "Factory":
        return <Factory className={className} />;
      case "Home":
        return <Home className={className} />;
      case "CalendarDays":
        return <CalendarDays className={className} />;
      case "Moon":
        return <Moon className={className} />;
      default:
        return <Home className={className} />;
    }
  };

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setOpenAccordions(prev => ({ ...prev, [id]: true }));

    // On mobile the content lives in the accordion, so bring it into view
    if (window.innerWidth < 768) {
      document.getElementById(`accordion-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Deep links such as /industries#retail-consumer (used by the footer) open that industry
  useEffect(() => {
    const id = decodeURIComponent(location.hash.replace("#", ""));
    if (!industriesData.some(ind => ind.id === id)) return;
    setActiveTab(id);
    setOpenAccordions(prev => ({ ...prev, [id]: true }));
    const target = window.innerWidth < 768
      ? document.getElementById(`accordion-${id}`)
      : document.getElementById("industry-blueprints");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    setActiveTab(id);
  };

  return (
    <div className="pt-10 pb-16 md:pt-16 md:pb-24 bg-warm-bg" id="industries-page">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SectionEyebrow number="01" label="Who We Serve" className="justify-center" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary font-display">
            Industry Blueprints
          </h1>
          <p className="text-grey text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Practical communication structures and automation pipelines built specifically for your sector's workflow.
          </p>
        </div>

        {/* Desktop Split View: Tab buttons left, content card right */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-start mb-20 scroll-mt-28" id="industry-blueprints">
          
          {/* Tabs Menu Column (Left) */}
          <div className="md:col-span-4 space-y-2 text-left">
            {industriesData.map((ind) => {
              const isActive = activeTab === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => handleTabClick(ind.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all border cursor-pointer ${
                    isActive 
                      ? "bg-white border-primary shadow-xs font-bold" 
                      : "bg-white hover:bg-slate-50/80 border-slate-200/70 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                      isActive ? "bg-primary text-white" : "bg-primary/5 text-primary"
                    }`}>
                      {renderIndustryIcon(ind.iconName, `h-5 w-5 shrink-0 ${isActive ? "text-accent" : "text-primary"}`)}
                    </span>
                    <div>
                      <h3 className={`font-bold text-sm font-display ${isActive ? "text-primary" : "text-slate-800"}`}>
                        {ind.name}
                      </h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display Area (Right) */}
          <div className="md:col-span-8 bg-white border border-border-subtle rounded-2xl p-10 shadow-sm text-left font-sans h-full">
            {industriesData.map((ind) => {
              if (activeTab !== ind.id) return null;
              return (
                <div key={ind.id} className="space-y-8 animate-in fade-in duration-200">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10">
                        {renderIndustryIcon(ind.iconName, "h-6 w-6 text-accent")}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary font-display">
                        {ind.name} Solutions
                      </h2>
                    </div>
                    <p className="text-primary leading-relaxed text-base font-semibold border-l-4 border-primary pl-4">
                      {ind.description}
                    </p>
                  </div>

                  <div className="border-t border-border-subtle pt-8 space-y-4">
                    <h3 className="font-bold text-primary font-display text-sm tracking-wider uppercase">
                      Operational Use Cases
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {ind.useCases.map((useCase, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start p-3.5 bg-warm-bg border border-border-subtle rounded-lg">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary mt-0.5">
                            <CheckSquare className="h-3.5 w-3.5 text-accent" />
                          </span>
                          <span className="text-sm text-primary font-semibold leading-normal">
                            {useCase}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>


                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile Accordion List View */}
        <div className="md:hidden space-y-4 mb-16 text-left font-sans">
          {industriesData.map((ind) => {
            const isOpen = openAccordions[ind.id] || false;
            return (
              <div 
                key={ind.id} 
                className="bg-white border border-border-subtle rounded-xl overflow-hidden shadow-sm scroll-mt-24"
                id={`accordion-${ind.id}`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(ind.id)}
                  className="w-full flex items-center justify-between p-5 bg-white font-semibold text-primary font-display text-sm focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/5 text-primary">
                      {renderIndustryIcon(ind.iconName, "h-4 w-4 text-accent")}
                    </span>
                    <span className="font-bold font-display">{ind.name}</span>
                  </div>
                  {isOpen ? <ChevronUp className="h-4 w-4 text-grey" /> : <ChevronDown className="h-4 w-4 text-grey" />}
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-5 pb-6 border-t border-border-subtle pt-4 bg-slate-50/50 space-y-5">
                    <p className="text-sm text-grey leading-relaxed border-l-2 border-primary pl-3">
                      {ind.description}
                    </p>

                    <div className="space-y-3">
                      <div className="text-[10px] font-bold text-primary tracking-wider uppercase font-display">
                        Operational Use Cases
                      </div>
                      
                      <div className="space-y-2.5">
                        {ind.useCases.map((useCase, idx) => (
                          <div key={idx} className="flex gap-2.5 items-start p-3 bg-white border border-border-subtle rounded-lg">
                            <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary mt-0.5">
                              <CheckSquare className="h-3 w-3 text-accent" />
                            </span>
                            <span className="text-sm text-primary font-semibold leading-normal">
                              {useCase}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>


                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
