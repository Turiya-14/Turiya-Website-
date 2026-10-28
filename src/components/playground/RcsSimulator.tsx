import { useState, useEffect, type ReactNode } from "react";
import { Sparkles, Send } from "lucide-react";

const INDUSTRY_CONFIGS: Record<string, {
  name: string;
  badge: string;
  rcsCardTitle: string;
  rcsCardDesc: string;
}> = {
  order: {
    name: "Order Confirmation",
    badge: "Transactional API",
    rcsCardTitle: "Order Confirmed! #TX-88401",
    rcsCardDesc: "Thank you for shopping. Your package is packed and departing our hub. Tap below to track real-time or fetch your official invoice."
  },
  otp: {
    name: "OTP Verification",
    badge: "Security Gateway",
    rcsCardTitle: "Secure Login OTP",
    rcsCardDesc: "Turiya secure gateway delivered code: 582914. Tap to automatically copy or verify this single-use token."
  },
  appointment: {
    name: "Appointment Reminder",
    badge: "Workflow Automation",
    rcsCardTitle: "Confirm Tomorrow's Visit",
    rcsCardDesc: "Your booking for tomorrow at 11:30 AM is scheduled with Dr. Shah. Confirmed status requires tapping 'Yes' below."
  },
  support: {
    name: "Customer Support",
    badge: "Helpdesk AI",
    rcsCardTitle: "Support Ticket Assigned",
    rcsCardDesc: "We've assigned a senior engineer to your ticket #9481. Open the interactive helpdesk panel or call us directly."
  },
  lead: {
    name: "Lead Qualification",
    badge: "Conversion Engine",
    rcsCardTitle: "Welcome to Turiya CPaaS",
    rcsCardDesc: "Scale your business workflows with our world-class APIs. Connect in 2 minutes. Tap below to schedule a custom demo."
  },
  payment: {
    name: "Payment Reminder",
    badge: "Revenue Recovery",
    rcsCardTitle: "Outstanding Invoice Notice",
    rcsCardDesc: "Your account ID #ACC-5819 has a pending balance of ₹4,850.00. Tap to clear instantly via secure instant UPI."
  }
};

interface RcsSimulatorProps {
  selectedIndustry: "order" | "otp" | "appointment" | "support" | "lead" | "payment";
  children: (controls: ReactNode, phone: ReactNode) => ReactNode;
}

export default function RcsSimulator({
  selectedIndustry,
  children
}: RcsSimulatorProps) {
  const config = INDUSTRY_CONFIGS[selectedIndustry] || INDUSTRY_CONFIGS.order;

  const [rcsCardTitle, setRcsCardTitle] = useState(config.rcsCardTitle);
  const [rcsCardDesc, setRcsCardDesc] = useState(config.rcsCardDesc);
  const [rcsMessages, setRcsMessages] = useState<any[]>([]);
  const [isRcsSending, setIsRcsSending] = useState(false);

  // Sync settings when industry changes
  useEffect(() => {
    setRcsCardTitle(config.rcsCardTitle);
    setRcsCardDesc(config.rcsCardDesc);
    setRcsMessages([
      {
        id: "rcs-init",
        sender: "Turiya Infotech",
        isRich: true,
        title: `Welcome to Turiya RCS for ${config.name} 💬`,
        desc: `Verified brand badges and dynamic action lists. Perfect for launching automated ${config.name} templates.`,
        buttons: ["✨ Explore Features", "📅 Book Demo"]
      }
    ]);
    setIsRcsSending(false);
  }, [selectedIndustry, config]);

  const handleSendRcsCard = () => {
    if (isRcsSending) return;
    setIsRcsSending(true);

    setTimeout(() => {
      setRcsMessages((prev) => [
        ...prev,
        {
          id: `rcs-${Date.now()}`,
          sender: "Turiya Infotech",
          isRich: true,
          title: rcsCardTitle,
          desc: rcsCardDesc,
          buttons: ["🛒 Purchase Now", "📦 Check Stock"]
        }
      ]);
      setIsRcsSending(false);

    }, 1000);
  };

  const phone = (
    <div className="flex-1 pt-8 bg-[#F6F4F9] flex flex-col h-full text-slate-800 relative">
      {/* Android Messages-style RCS Header */}
      <div className="bg-white border-b border-slate-200 px-3 py-2.5 flex items-center justify-between relative z-10 shadow-xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#3A0E5C] flex items-center justify-center text-white font-extrabold text-xs">
            T
          </div>
          <div>
            <div className="flex items-center gap-1">
              <h6 className="text-[11px] font-bold text-slate-800 leading-tight">Turiya Infotech</h6>
              <span className="bg-blue-600 text-white rounded-full p-0.5 flex items-center justify-center h-3.5 w-3.5">
                <svg viewBox="0 0 24 24" className="h-2 w-2 fill-white stroke-white stroke-[2]" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
            </div>
            <span className="text-[8px] text-[#A62BFF] font-medium leading-none mt-0.5 block">
              RCS Chat • Verified Business
            </span>
          </div>
        </div>
        <div className="bg-[#A62BFF]/10 rounded-full px-2 py-0.5 text-[8px] font-bold text-[#A62BFF]">
          RCS ACTIVE
        </div>
      </div>

      {/* RCS messages viewport */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 relative z-10 scrollbar-none">
        {rcsMessages.map((msg) => (
          <div key={msg.id} className="space-y-1 self-start max-w-[90%]">
            <div className="bg-white rounded-2xl border border-[#e9e7ec] overflow-hidden shadow-sm flex flex-col">
              <div className="bg-gradient-to-r from-[#3A0E5C] to-[#2F0B4A] p-3 text-white flex items-center justify-between">
                <span className="text-[9px] font-mono tracking-wider font-bold uppercase opacity-85">Turiya Gateway</span>
                <Sparkles className="h-3 w-3 text-amber-300 animate-pulse" />
              </div>

              <div className="p-3.5 space-y-2">
                <h5 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                  {msg.title}
                </h5>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-light">
                  {msg.desc}
                </p>
                <span className="block text-[9px] text-slate-400 font-mono pt-1">
                  {msg.time}
                </span>
              </div>

              <div className="border-t border-slate-100 divide-y divide-slate-100 text-center">
                <div className="w-full py-2.5 text-[11px] sm:text-xs font-bold text-[#A62BFF] select-none">
                  🌐 Open Developer Dashboard
                </div>
                <div className="w-full py-2.5 text-[11px] sm:text-xs font-bold text-[#3A0E5C] select-none">
                  💬 Contact Live Integration Architect
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simulated Input */}
      <div className="bg-white p-2.5 border-t border-slate-200/80 flex items-center gap-2 relative z-10">
        <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5 text-[9px] text-slate-500 font-sans">
          RCS message...
        </div>
        <div className="w-7 h-7 rounded-full bg-[#A62BFF] text-white flex items-center justify-center opacity-80">
          <Send className="h-3 w-3" />
        </div>
      </div>
    </div>
  );

  const controls = (
    <div className="space-y-5">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#A62BFF]/15 border border-[#A62BFF]/35 px-3 py-1 text-[10px] font-bold text-[#F3E9FF]">
        <Sparkles className="h-3.5 w-3.5 text-[#bf7bfd]" />
        Next-Gen RCS & Business Messaging
      </span>

      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight font-display">
        RCS Rich Hub
      </h3>

      <p className="text-[#C9BEDB] text-xs sm:text-sm leading-relaxed font-light">
        RCS brings branding, rich carousels, verified checkmarks, and dynamic action buttons into default native Android messaging apps.
      </p>

      {/* Form Config */}
      <div className="space-y-3 pt-3 border-t border-[#A62BFF]/20">
        <div>
          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#C9BEDB] mb-1">
            Rich Card Title
          </label>
          <input
            type="text"
            value={rcsCardTitle}
            onChange={(e) => setRcsCardTitle(e.target.value)}
            className="w-full bg-[#1E0A35] border border-[#bf7bfd]/30 focus:border-[#A62BFF] focus:outline-none rounded-xl px-3 py-2 text-xs text-white"
          />
        </div>

        <div>
          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#C9BEDB] mb-1">
            Rich Card Description
          </label>
          <textarea
            rows={3}
            value={rcsCardDesc}
            onChange={(e) => setRcsCardDesc(e.target.value)}
            className="w-full bg-[#1E0A35] border border-[#bf7bfd]/30 focus:border-[#A62BFF] focus:outline-none rounded-xl p-3 text-xs text-white resize-none"
          />
        </div>

        <button
          onClick={handleSendRcsCard}
          disabled={isRcsSending}
          className={`w-full bg-[#A62BFF] hover:bg-[#b347ff] text-white text-xs font-bold rounded-xl py-3 px-4 shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isRcsSending ? "opacity-50 cursor-not-allowed" : "active:scale-98"
          }`}
        >
          <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
          {isRcsSending ? "Sending Card..." : "Send RCS Rich Card 🚀"}
        </button>
      </div>
    </div>
  );

  return <>{children(controls, phone)}</>;
}
