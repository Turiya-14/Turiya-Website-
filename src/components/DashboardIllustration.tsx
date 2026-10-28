import { MessageCircle, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function DashboardIllustration() {
  return (
    <div className="w-full bg-white border border-border-subtle rounded-2xl p-8 flex flex-col items-center justify-center min-h-[300px] text-center" id="hero-channel-visual">
      {/* Visual Header */}
      <span className="text-[10px] font-bold tracking-widest text-accent uppercase mb-1.5 font-sans">
        Omnichannel Messaging System
      </span>
      <h3 className="text-sm font-extrabold text-primary mb-8 font-display">
        One Message. Connected Channels.
      </h3>

      {/* Connection Area */}
      <div className="relative w-full max-w-xs sm:max-w-sm flex items-center justify-between py-10 px-4">
        {/* Connecting Line */}
        <div className="absolute left-10 right-10 h-[2px] bg-border-subtle top-1/2 -translate-y-1/2 z-0">
          {/* Animated Traveling Message Dot (Signal Violet) */}
          <motion.div
            className="absolute h-3 w-3 rounded-full bg-accent -top-[5px]"
            animate={{
              left: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Node 1: WhatsApp */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="h-14 w-14 rounded-full bg-primary-light border-2 border-primary/10 flex items-center justify-center text-primary transition-colors">
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>
          <span className="text-[9px] font-bold text-primary font-sans tracking-wide uppercase">
            WhatsApp
          </span>
        </div>

        {/* Node 2: SMS / Message */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="h-14 w-14 rounded-full bg-primary-light border-2 border-primary/10 flex items-center justify-center text-primary transition-colors">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <span className="text-[9px] font-bold text-primary font-sans tracking-wide uppercase">
            SMS
          </span>
        </div>

        {/* Node 3: RCS / Automation */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="h-14 w-14 rounded-full bg-primary-light border-2 border-primary/10 flex items-center justify-center text-primary transition-colors">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <span className="text-[9px] font-bold text-primary font-sans tracking-wide uppercase">
            RCS / AI
          </span>
        </div>
      </div>

      <div className="mt-8 text-[11px] text-grey max-w-xs font-sans leading-relaxed">
        Dynamically route automated templates and notifications through the most effective conversational channel instantly.
      </div>
    </div>
  );
}
