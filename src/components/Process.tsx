import { Search, Radio, BarChart3 } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

export default function Process() {
  const steps = [
    {
      num: "Step 1",
      title: "Discovery & Design",
      desc: "We analyze your communication needs and design intuitive conversational workflows tailored to your target audience.",
      icon: Search,
      bg: "bg-primary/5 text-primary border-primary/20"
    },
    {
      num: "Step 2",
      title: "Integration & Setup",
      desc: "We configure secure API connections and developer dashboards to integrate seamlessly with your existing business systems.",
      icon: Radio,
      bg: "bg-accent/10 text-accent border-accent/20"
    },
    {
      num: "Step 3",
      title: "Launch & Optimization",
      desc: "We execute comprehensive live testing to launch your campaign and continuously refine performance for maximum engagement.",
      icon: BarChart3,
      bg: "bg-primary/5 text-primary border-primary/15"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-y border-border-subtle" id="process-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SectionEyebrow number="05" label="Operational Blueprint" className="justify-center" />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary font-display">
            How We Deploy
          </h2>
          <p className="text-grey text-base leading-relaxed font-sans max-w-2xl mx-auto">
            We follow a straightforward path to set up your messaging tools and integrations without interrupting your daily work.
          </p>
        </div>

        {/* Process Steps List / Columns */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Timeline connecting dots bar for desktop view */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-slate-200/60 pointer-events-none z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 relative z-10 flex flex-col justify-between text-left group">
                <div className="space-y-4 font-sans">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-accent tracking-wider uppercase font-mono">
                      {step.num}
                    </span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-lg border ${step.bg} transition-transform group-hover:scale-105 shadow-xs`}>
                      <Icon className="h-5 w-5 text-accent" />
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-primary group-hover:text-accent transition-colors text-sm sm:text-base font-display tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-grey text-sm leading-relaxed min-h-[4rem]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
