import { CheckCircle, ArrowRight, Phone, Calendar } from "lucide-react";
import DashboardIllustration from "./DashboardIllustration";
import { motion } from "motion/react";
import SectionEyebrow from "./SectionEyebrow";

interface HeroProps {
  onOpenBookDemo: () => void;
  onNavigate: (view: string) => void;
}

export default function Hero({ onOpenBookDemo, onNavigate }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const handleTalkToTeam = () => {
    const contactEl = document.getElementById("contact-section");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-warm-bg border-b border-slate-100" id="hero-section">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small Badge */}
            <motion.div variants={itemVariants}>
              <SectionEyebrow number="01" label="Smarter Business Systems" className="mb-2" />
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary tracking-tight leading-[1.18] font-display">
              Smarter Communication. <br />
              Powerful Automation. <br />
              Custom Software for <span className="text-accent">Growing Businesses</span>.
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="text-primary font-semibold text-base sm:text-lg leading-relaxed max-w-2xl font-sans border-l-4 border-primary pl-4">
              Turiya Infotech helps businesses, healthcare providers, educational institutions, political campaigns, agencies, and enterprises connect with their audience through WhatsApp, SMS, RCS, chatbots, and custom software solutions.
            </motion.p>

            {/* Supporting Copy */}
            <motion.p variants={itemVariants} className="text-grey text-sm sm:text-base leading-relaxed max-w-xl font-sans">
              We help businesses automate conversations, simplify communication, and build digital solutions that scale.
            </motion.p>

            {/* 3 Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2 font-sans">
              {/* Primary / Flat Signal Violet fill */}
              <button
                onClick={onOpenBookDemo}
                className="rounded-md bg-accent hover:bg-accent-hover text-white px-6 py-3 text-sm font-bold shadow-md shadow-accent/15 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                id="hero-get-demo-cta"
              >
                <Calendar className="h-4 w-4" />
                Get a Demo
              </button>

              {/* Secondary CTA / Deep Indigo outline, Deep Indigo text, transparent fill */}
              <button
                onClick={handleTalkToTeam}
                className="rounded-md border-2 border-primary text-primary bg-transparent hover:bg-primary/5 px-6 py-3 text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                id="hero-talk-team-cta"
              >
                <Phone className="h-4 w-4" />
                Talk to Our Team
              </button>

              {/* Outline / Text link CTA */}
              <button
                onClick={() => onNavigate("services/whatsapp-business-api")}
                className="rounded-md border border-primary/25 bg-white hover:bg-slate-50 px-6 py-3 text-sm font-bold text-primary transition-all cursor-pointer flex items-center justify-center gap-1 font-sans"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 text-accent" />
              </button>
            </motion.div>

            {/* Trust markers */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100">
                  <CheckCircle className="h-3 w-3 fill-emerald-500/10 stroke-[2.5]" />
                </span>
                Verified Delivery
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100">
                  <CheckCircle className="h-3 w-3 fill-emerald-500/10 stroke-[2.5]" />
                </span>
                Privacy-First Data Handling
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100">
                  <CheckCircle className="h-3 w-3 fill-emerald-500/10 stroke-[2.5]" />
                </span>
                24/7 Automation Support
              </div>
            </motion.div>
          </motion.div>

          {/* Right Dashboard Illustration Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 w-full lg:pl-4"
          >
            <DashboardIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
