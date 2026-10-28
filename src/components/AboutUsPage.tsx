import { Compass, Target, TrendingUp, Linkedin } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

export default function AboutUsPage() {
  const processSteps = [
    { num: "01", name: "Understand", desc: "Evaluate organizational requirements, audience behaviors, and communication bottlenecks." },
    { num: "02", name: "Design", desc: "Map user journeys, conversational flows, chatbot dialogues, and software architecture." },
    { num: "03", name: "Develop", desc: "Build secure, reliable systems with full API integrations and custom web dashboards." },
    { num: "04", name: "Support", desc: "Execute live rollouts with continuous technical assistance and execution management." },
    { num: "05", name: "Improve", desc: "Track conversion metrics, engagement stats, and feedback to optimize system performance." }
  ];

  return (
    <div className="pt-10 pb-16 md:pt-16 md:pb-24 bg-warm-bg" id="about-us-page">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <SectionEyebrow number="01" label="Who We Are" className="justify-center" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary font-display">
            About Turiya Infotech
          </h1>
          <p className="text-grey text-base leading-relaxed font-sans max-w-2xl mx-auto">
            We build secure messaging systems and software solutions for growing teams, clinics, schools, and campaigns.
          </p>
        </div>

        {/* Intro Block: Company Intro (Left ~56%) & Founder Profile (Right ~44%) */}
        <div className="grid lg:grid-cols-12 gap-7 lg:gap-8 items-start mb-20">
          
          {/* Company Story & Overview */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-8 md:p-9 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between text-left font-sans text-text-primary h-full">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary font-display border-l-4 border-accent pl-4">
                Smarter Digital Systems
              </h2>
              
              <p className="leading-relaxed text-[15px] sm:text-base text-slate-700">
                Turiya Infotech designs communication and software systems that help organisations connect with their audiences, automate routine processes and manage digital operations more efficiently. We bring messaging, automation and custom development together to create solutions that are practical, reliable and ready to scale.
              </p>
              
              <p className="leading-relaxed text-[15px] sm:text-base text-slate-700">
                Our approach begins with understanding how an organisation works. Instead of applying a standard product to every requirement, we design each solution around the client’s workflows, communication needs and business objectives.
              </p>

              {/* What We Build */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-primary font-display">
                  What We Build
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-[15px] text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-orange-accent mt-2 shrink-0" />
                    <span>Omnichannel communication through WhatsApp, SMS and RCS</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-orange-accent mt-2 shrink-0" />
                    <span>AI-powered chatbots and automated customer journeys</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-orange-accent mt-2 shrink-0" />
                    <span>Workflow integrations, admin panels and operational dashboards</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-orange-accent mt-2 shrink-0" />
                    <span>Custom software designed around specific business requirements</span>
                  </li>
                </ul>
              </div>

              {/* Who We Work With */}
              <div className="space-y-2.5 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-primary font-display">
                  Who We Work With
                </h3>
                <p className="leading-relaxed text-[15px] sm:text-base text-slate-700">
                  We support healthcare providers, educational institutions, campaign teams, retail brands, manufacturers, associations and service-led businesses with technology that improves communication and simplifies everyday operations.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Profile Card */}
          <div className="founder-card lg:col-span-5 bg-[#FAF9FE] p-7 sm:p-8 md:p-9 rounded-2xl border border-primary/15 shadow-xs flex flex-col justify-between text-left font-sans h-full">
            <div>
              
              {/* Founder Header: Photo + Identity Group */}
              <div className="founder-header">
                
                {/* Founder Photograph */}
                <div className="founder-photo-frame">
                  <img
                    src="/founder-aditya-adhav.jpg"
                    alt="Aditya Adhav, Founder of Turiya Infotech"
                  />
                </div>

                {/* Name & Designation */}
                <div className="founder-identity flex flex-col justify-center">
                  <h3 className="founder-name font-bold tracking-tight text-primary font-display">
                    Aditya Adhav
                  </h3>
                  <p className="founder-title text-sm font-semibold text-accent font-sans mt-1">
                    Founder, Turiya Infotech
                  </p>
                </div>

              </div>

              {/* Biography */}
              <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.65] text-slate-700 font-sans border-t border-slate-200/70 pt-5 mt-5 text-left">
                <p>
                  Focused on transforming complex communication challenges into practical digital systems, Aditya works at the intersection of product management, AI-driven platforms, customer engagement, CPaaS and SaaS. His background in business and fintech shapes an outcome-oriented approach to simplifying operations and strengthening customer relationships.
                </p>
                <p>
                  As the Founder of Turiya Infotech, he leads the company’s product direction across WhatsApp Business API, messaging automation, chatbots and custom software. His approach brings together technology, structured product thinking and a close understanding of real-world business needs.
                </p>
              </div>

            </div>

            {/* LinkedIn CTA */}
            <div className="pt-5 border-t border-slate-200/70 mt-6">
              <a
                href="https://www.linkedin.com/in/aditya-adhav-444288211/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Aditya Adhav on LinkedIn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-primary text-primary hover:text-white text-xs sm:text-sm font-bold transition-all duration-200 border border-primary/25 shadow-2xs hover:shadow-md hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 group cursor-pointer"
              >
                <Linkedin className="h-4 w-4 text-[#0A66C2] group-hover:text-white transition-colors shrink-0" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

          </div>

        </div>

        {/* Mission / Vision / Goals Columns */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-24">
          
          {/* Card 1: Mission */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-primary/20 shadow-xs text-left hover:border-primary/40 transition-all duration-200 group flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                <Target className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-primary font-display">Our Mission</h3>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-sans">
                To help organisations communicate better, automate faster, and operate smarter through reliable technology, messaging, and software solutions.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-[10px] font-extrabold text-accent uppercase tracking-wider font-mono">
              FOCUS & EXECUTION
            </div>
          </div>

          {/* Card 2: Vision */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs text-left hover:border-primary/30 transition-all duration-200 group flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                <Compass className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-primary font-display">Our Vision</h3>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-sans">
                To become a trusted technology partner for businesses and institutions looking to build strong digital communication, automation, and customer engagement systems.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-[10px] font-extrabold text-accent uppercase tracking-wider font-mono">
              INNOVATION & SCALE
            </div>
          </div>

          {/* Card 3: Goals */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs text-left hover:border-primary/30 transition-all duration-200 group flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                <TrendingUp className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-primary font-display">Our Goals</h3>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-sans">
                To build reliable communication and software systems that reduce manual work, improve customer engagement, support better decisions, and scale with every client’s growth.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-[10px] font-extrabold text-accent uppercase tracking-wider font-mono">
              GROWTH & IMPACT
            </div>
          </div>

        </div>

        {/* 5-Step Process Timeline */}
        <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-2xl shadow-sm text-left font-sans">
          <div className="space-y-2 mb-12">
            <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Operational Framework</span>
            <h3 className="text-2xl font-bold text-primary font-display">The Turiya Approach</h3>
            <p className="text-grey text-sm max-w-2xl">
              We employ a five-stage deployment strategy to ensure communication workflows fit the actual mechanics of client operations.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 relative">
            {/* Horizontal timeline connector bar on desktop */}
            <div className="hidden md:block absolute top-[22px] left-[40px] right-[40px] h-[2px] bg-slate-100 z-0" />

            {processSteps.map((step) => (
              <div key={step.name} className="relative z-10 space-y-4">
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                  <div className="h-11 w-11 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shadow-md border-4 border-white">
                    {step.num}
                  </div>
                  <div className="h-[2px] w-full bg-slate-100 md:hidden" />
                  <h4 className="font-bold text-primary font-display text-base md:mt-2">
                    {step.name}
                  </h4>
                </div>
                <p className="text-grey text-sm leading-relaxed pl-15 md:pl-0">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
