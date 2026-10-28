import { useState, useEffect, useRef, type ReactNode } from "react";
import { Smartphone, Sparkles } from "lucide-react";
import { SMSMessage } from "../../types/playground";

const INDUSTRY_CONFIGS: Record<string, {
  badge: string;
  campaignName: string;
  smsTargetList: string;
  smsText: string;
}> = {
  order: {
    badge: "Transactional API",
    campaignName: "Order Confirmations",
    smsTargetList: "Active Buyers (4,200)",
    smsText: "TURIYA: Thank you for shopping! Your order #TX-88401 has been confirmed. Track: yourbrand.in/t/88401"
  },
  otp: {
    badge: "Security Gateway",
    campaignName: "OTP Auth Alerts",
    smsTargetList: "Login Attempts (1,850)",
    smsText: "TURIYA: Your secure verification code is 582914. Valid for 5 minutes. Do not share this OTP."
  },
  appointment: {
    badge: "Workflow Automation",
    campaignName: "Booking Reminders",
    smsTargetList: "Scheduled Leads (310)",
    smsText: "TURIYA: Your appointment tomorrow at 11:30 AM is confirmed. Prep instructions: yourbrand.in/p/113"
  },
  support: {
    badge: "Helpdesk AI",
    campaignName: "Support Responses",
    smsTargetList: "Open Tickets (120)",
    smsText: "TURIYA HELP: An available engineer has been assigned to ticket #9481. Chat live: yourbrand.in/chat/948"
  },
  lead: {
    badge: "Conversion Engine",
    campaignName: "Demo Lead Sync",
    smsTargetList: "Qualified Leads (1,500)",
    smsText: "TURIYA: Ready to see our communication APIs in action? Book a live demo: yourbrand.in/demo"
  },
  payment: {
    badge: "Revenue Recovery",
    campaignName: "Outstanding Notices",
    smsTargetList: "Pending Accounts (840)",
    smsText: "TURIYA BILLING: Account ID #ACC-5819 statement is due. Pay securely via UPI link: yourbrand.in/pay/5819"
  }
};

interface SmsSimulatorProps {
  selectedIndustry: "order" | "otp" | "appointment" | "support" | "lead" | "payment";
  children: (controls: ReactNode, phone: ReactNode) => ReactNode;
}

export default function SmsSimulator({
  selectedIndustry,
  children
}: SmsSimulatorProps) {
  const config = INDUSTRY_CONFIGS[selectedIndustry] || INDUSTRY_CONFIGS.order;

  const [campaignName, setCampaignName] = useState(config.campaignName);
  const [smsTargetList, setSmsTargetList] = useState(config.smsTargetList);
  const [smsText, setSmsText] = useState(config.smsText);
  const [smsMessages, setSmsMessages] = useState<SMSMessage[]>([]);
  const [isSmsLaunching, setIsSmsLaunching] = useState(false);
  const [smsProgress, setSmsProgress] = useState({ sent: 0, total: 1500 });
  const [smsDeliveryRate, setSmsDeliveryRate] = useState(100.0);

  // Sync settings when industry changes
  useEffect(() => {
    setCampaignName(config.campaignName);
    setSmsTargetList(config.smsTargetList);
    setSmsText(config.smsText);
    setSmsMessages([
      {
        id: "init-sms",
        sender: "TURIYA-TX",
        text: `Welcome to Turiya gateway. ${config.badge} campaign sandbox is initialized.`,
        time: "Now"
      }
    ]);
    setIsSmsLaunching(false);
    setSmsProgress({ sent: 0, total: 1500 });
    setSmsDeliveryRate(100.0);
  }, [selectedIndustry, config]);

  // Track running timers so they are cleared if the simulator unmounts mid-campaign
  const timersRef = useRef<{ timeout?: ReturnType<typeof setTimeout>; interval?: ReturnType<typeof setInterval> }>({});
  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      clearTimeout(timers.timeout);
      clearInterval(timers.interval);
    };
  }, []);

  const handleLaunchCampaign = () => {
    if (isSmsLaunching) return;

    setIsSmsLaunching(true);
    setSmsProgress({ sent: 0, total: 1500 });
    setSmsDeliveryRate(100.0);

    // Simulate SMS message incoming in the virtual phone
    timersRef.current.timeout = setTimeout(() => {
      setSmsMessages((prev) => [
        ...prev,
        {
          id: `sms-${Date.now()}`,
          sender: "TURIYA-TX",
          text: smsText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    }, 1500);

    let currentSent = 0;
    const interval = setInterval(() => {
      currentSent += Math.floor(Math.random() * 150) + 50;
      if (currentSent >= 1500) {
        currentSent = 1500;
        clearInterval(interval);
        setIsSmsLaunching(false);
        setSmsProgress({ sent: 1500, total: 1500 });
        setSmsDeliveryRate(99.98);
      } else {
        setSmsProgress({ sent: currentSent, total: 1500 });
        const currentRate = 100.0 - (currentSent / 1500) * 0.05;
        setSmsDeliveryRate(parseFloat(currentRate.toFixed(2)));
      }
    }, 400);
    timersRef.current.interval = interval;
  };

  const phone = (
    <div className="flex-1 pt-8 bg-slate-900 flex flex-col h-full text-slate-100 relative">
      {/* iOS-like Messages App Header */}
      <div className="bg-slate-800/90 border-b border-slate-700/60 px-3 py-2 flex items-center gap-2 relative z-10">
        <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-white font-extrabold text-xs">
          T
        </div>
        <div>
          <h6 className="text-[11px] font-bold text-slate-100 leading-tight">TURIYA-TX</h6>
          <span className="text-[8px] text-indigo-400 font-mono">Operational Gateway</span>
        </div>
      </div>

      {/* SMS conversation list */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 relative z-10 scrollbar-none">
        {smsMessages.map((sms) => (
          <div key={sms.id} className="space-y-1 self-start max-w-[85%]">
            <div className="bg-slate-800 text-slate-200 text-xs sm:text-[13px] p-3 rounded-2xl rounded-tl-none border border-slate-700/60 shadow-xs leading-relaxed">
              <p>{sms.text}</p>
              <span className="block text-[9px] text-slate-500 text-right mt-1 font-mono">
                {sms.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Simulated SMS Input placeholder */}
      <div className="bg-slate-800 p-2 border-t border-slate-700/60 text-center relative z-10">
        <span className="text-[8px] font-mono text-slate-500">
          -- Direct Gateway Sandbox Readonly Session --
        </span>
      </div>
    </div>
  );

  const controls = (
    <div className="space-y-5">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#A62BFF]/15 border border-[#A62BFF]/35 px-3 py-1 text-[10px] font-bold text-[#F3E9FF]">
        <Smartphone className="h-3.5 w-3.5 text-[#bf7bfd]" />
        High-Volume Outbound SMS Router
      </span>

      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight font-display">
        SMS Campaign Manager
      </h3>

      <p className="text-[#C9BEDB] text-xs sm:text-sm leading-relaxed font-light">
        Configure promotional blasts or high-speed OTP alerts. Launch campaigns in real-time to watch carrier delivery speeds on the right.
      </p>

      {/* Form Config */}
      <div className="space-y-3 pt-3 border-t border-[#A62BFF]/20">
        <div>
          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#C9BEDB] mb-1">
            Campaign Identifier
          </label>
          <input
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            className="w-full bg-[#1E0A35] border border-[#bf7bfd]/30 focus:border-[#A62BFF] focus:outline-none rounded-xl px-3 py-2 text-xs text-white"
          />
        </div>

        <div>
          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#C9BEDB] mb-1">
            Recipient Group
          </label>
          <select
            value={smsTargetList}
            onChange={(e) => setSmsTargetList(e.target.value)}
            className="w-full bg-[#1E0A35] border border-[#bf7bfd]/30 focus:border-[#A62BFF] focus:outline-none rounded-xl px-3 py-2 text-xs text-white cursor-pointer"
          >
            <option>VIP Club Members (1,500)</option>
            <option>Active Portal Logins (8,400)</option>
            <option>Cart Abandonment Lead Pool (420)</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#C9BEDB] mb-1">
            SMS Broadcast Message
          </label>
          <textarea
            rows={3}
            value={smsText}
            onChange={(e) => setSmsText(e.target.value)}
            className="w-full bg-[#1E0A35] border border-[#bf7bfd]/30 focus:border-[#A62BFF] focus:outline-none rounded-xl p-3 text-xs text-white resize-none"
          />
        </div>

        <button
          onClick={handleLaunchCampaign}
          disabled={isSmsLaunching}
          className={`w-full bg-[#A62BFF] hover:bg-[#b347ff] text-white text-xs font-bold rounded-xl py-3 px-4 shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isSmsLaunching ? "opacity-50 cursor-not-allowed" : "active:scale-98"
          }`}
        >
          <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
          {isSmsLaunching ? `Dispatching... (${smsProgress.sent}/${smsProgress.total})` : "Launch Campaign Blast 🚀"}
        </button>
      </div>

      {/* Progress metrics */}
      {isSmsLaunching && (
        <div className="bg-[#1E0A35]/60 border border-[#bf7bfd]/20 rounded-xl p-3.5 space-y-2 mt-2">
          <div className="flex justify-between text-[11px] font-mono text-[#C9BEDB]">
            <span>Delivered Outbound:</span>
            <span className="text-white font-bold">{smsProgress.sent} / {smsProgress.total}</span>
          </div>
          <div className="w-full bg-[#1E0A35] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#A62BFF] h-full transition-all duration-300"
              style={{ width: `${(smsProgress.sent / smsProgress.total) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-[9px] font-mono text-[#C9BEDB]/60 pt-1">
            <span>Carrier SLA: {smsDeliveryRate}%</span>
            <span>Active Gateway ID: TURIYA-CH04</span>
          </div>
        </div>
      )}
    </div>
  );

  return <>{children(controls, phone)}</>;
}
