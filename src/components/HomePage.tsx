import { Calendar, MessageSquare } from "lucide-react";
import Hero from "./Hero";
import ClientMarquee from "./ClientMarquee";
import ServiceSuite from "./ServiceSuite";
import InteractivePlayground from "./InteractivePlayground";
import Sectors from "./Sectors";
import Process from "./Process";
import WhyChooseUs from "./WhyChooseUs";
import ContactSection from "./ContactSection";
import SectionEyebrow from "./SectionEyebrow";

interface HomePageProps {
  onOpenBookDemo: () => void;
  onNavigate: (view: string) => void;
}

export default function HomePage({ onOpenBookDemo, onNavigate }: HomePageProps) {
  return (
    <>
      <Hero onOpenBookDemo={onOpenBookDemo} onNavigate={onNavigate} />

      <ClientMarquee />

      {/* Interactive communication demo */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-[#F3E9FF]/20 to-white border-y border-border-subtle" id="sandbox-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <SectionEyebrow number="03" label="Try Turiya's Communication Platform" className="justify-center" />
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary font-display">
              Interactive Communication Playground
            </h2>
            <p className="text-grey text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-sans">
              Explore real WhatsApp, SMS, RCS and AI conversation flows used by modern businesses.
            </p>
          </div>
          <InteractivePlayground />
        </div>
      </section>

      <ServiceSuite onNavigate={onNavigate} />

      <Sectors />

      <Process />

      <WhyChooseUs />

      {/* CTA banner */}
      <section className="py-20 bg-white" id="cta-banner-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-2xl bg-primary px-6 py-12 md:p-16 text-center text-white shadow-xl shadow-primary/10 overflow-hidden">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto font-sans">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight font-display">
                Ready to Improve Your Business Communication?
              </h3>

              <p className="text-primary-light text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto font-medium">
                Join hundreds of companies that have scaled their operations with Turiya Infotech's enterprise-grade infrastructure models.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  type="button"
                  onClick={onOpenBookDemo}
                  className="rounded-md bg-white text-primary px-6 py-3 text-xs font-bold shadow-md hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  id="cta-book-demo"
                >
                  <Calendar className="h-4 w-4 text-accent" aria-hidden="true" />
                  Book Demo
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("contact")}
                  className="rounded-md border border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/20 px-6 py-3 text-xs font-bold transition-colors text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4 text-white" aria-hidden="true" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
