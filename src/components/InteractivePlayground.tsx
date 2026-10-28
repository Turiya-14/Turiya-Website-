import { useState, type ReactNode } from "react";
import { Sliders, RotateCcw, MessageSquare, Smartphone, Sparkles, PhoneCall, Briefcase } from "lucide-react";
import { motion } from "motion/react";

// Import modular simulator subcomponents
import WhatsAppSimulator from "./playground/WhatsAppSimulator";
import SmsSimulator from "./playground/SmsSimulator";
import RcsSimulator from "./playground/RcsSimulator";
import VoiceSimulator from "./playground/VoiceSimulator";

export default function InteractivePlayground() {
  const [activeTab, setActiveTab] = useState<"whatsapp" | "sms" | "rcs" | "voice">("whatsapp");
  const [selectedIndustry, setSelectedIndustry] = useState<"order" | "otp" | "appointment" | "support" | "lead" | "payment">("order");
  const [resetCounter, setResetCounter] = useState(0);

  const handleResetSandbox = () => {
    // Bumping the key remounts the active simulator with a fresh conversation
    setResetCounter((prev) => prev + 1);
  };

  // A single simulator instance owns both the control panel and the phone screen,
  // so actions in the left panel are reflected on the phone.
  const renderLayout = (controls: ReactNode, phone: ReactNode) => (
    <div className="grid lg:grid-cols-12 items-stretch">
      {/* Left Side: Contextual Control Panels */}
      <div className="lg:col-span-5 bg-primary text-white p-5 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-12 right-0 w-48 h-48 bg-[#A62BFF]/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="space-y-6 relative z-10 flex-1 flex flex-col justify-between"
        >
          {controls}
        </motion.div>

        <div className="pt-8 text-[11px] text-slate-300 flex items-center gap-1.5 border-t border-accent/20 mt-8 relative z-10 font-sans">
          <span className="text-accent font-bold">●</span> Live interactive demo — no signup required.
        </div>
      </div>

      {/* Right Side: Smartphone Device */}
      <div className="lg:col-span-7 bg-slate-50/50 p-6 sm:p-8 md:p-10 flex items-center justify-center border-l border-slate-100">
        <div className="w-full max-w-[390px] sm:max-w-[440px] h-[640px] sm:h-[720px] rounded-[48px] bg-slate-900 border-[12px] border-slate-800 shadow-2xl overflow-hidden relative flex flex-col">
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4 rounded-full bg-slate-800 z-30 flex items-center justify-center">
            <span className="w-10 h-1 bg-slate-700 rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-slate-950 rounded-full ml-2"></span>
          </div>
          {phone}
        </div>
      </div>
    </div>
  );

  const simulatorKey = `${activeTab}-${resetCounter}`;

  return (
    <div className="w-full rounded-3xl bg-white border border-border-subtle shadow-xl shadow-slate-100/50 overflow-hidden" id="whatsapp-simulator-root">
      
      {/* Premium Tab Selector Bar */}
      <div className="bg-primary-hover px-4 sm:px-6 py-3.5 sm:py-4 border-b border-primary flex flex-col md:flex-row md:items-center justify-between gap-3.5 sm:gap-4 transition-all duration-300">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <Sliders className="h-4 w-4 text-accent" />
          <h4 className="text-[10px] sm:text-xs font-bold font-mono tracking-wider text-slate-300 uppercase text-center sm:text-left transition-all duration-300">
            Live CPaaS Simulator
          </h4>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap bg-primary-hover/50 p-1 rounded-xl border border-primary/60 w-full md:w-auto justify-start gap-1 transition-all duration-300">
          <button
            type="button"
            onClick={() => setActiveTab("whatsapp")}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
              activeTab === "whatsapp"
                ? "bg-accent text-white shadow-md shadow-accent/25"
                : "bg-transparent text-slate-300 hover:text-white"
            }`}
          >
            <MessageSquare className="h-3.5 w-3.5" />
            WhatsApp API
          </button>
          
          <button
            type="button"
            onClick={() => setActiveTab("sms")}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
              activeTab === "sms"
                ? "bg-accent text-white shadow-md shadow-accent/25"
                : "bg-transparent text-slate-300 hover:text-white"
            }`}
          >
            <Smartphone className="h-3.5 w-3.5" />
            SMS Gateway
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("rcs")}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
              activeTab === "rcs"
                ? "bg-accent text-white shadow-md shadow-accent/25"
                : "bg-transparent text-slate-300 hover:text-white"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            RCS Hub
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("voice")}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
              activeTab === "voice"
                ? "bg-accent text-white shadow-md shadow-accent/25"
                : "bg-transparent text-slate-300 hover:text-white"
            }`}
          >
            <PhoneCall className="h-3.5 w-3.5" />
            AI Voice Agent
          </button>
        </div>
      </div>

      {/* Developer Sandbox Control Strip */}
      <div className="bg-primary-hover/60 px-4 sm:px-6 py-4 border-b border-primary/60 flex flex-col md:flex-row items-center justify-between gap-4 text-white transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4.5 w-4.5 text-orange-accent" />
            <span className="text-[11px] sm:text-xs md:text-sm font-extrabold font-mono text-slate-300 uppercase tracking-wider">Demo Scenario:</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {(["order", "otp", "appointment", "support", "lead", "payment"] as const).map((ind) => (
              <button
                key={ind}
                onClick={() => {
                  setSelectedIndustry(ind);
                }}
                className={`px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-black font-mono transition-all uppercase tracking-wider border-2 cursor-pointer ${
                  selectedIndustry === ind
                    ? "bg-accent border-accent text-white shadow-md shadow-accent/30"
                    : "bg-transparent border-accent/30 text-slate-300 hover:text-white hover:border-accent/60"
                }`}
              >
                {ind === "order" ? "Order Conf" :
                 ind === "otp" ? "OTP Auth" :
                 ind === "appointment" ? "Appointment" :
                 ind === "support" ? "Support" :
                 ind === "lead" ? "Lead Qual" : "Payment"}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleResetSandbox}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-accent/15 hover:bg-accent/25 border-2 border-accent/45 hover:border-accent text-purple-100 hover:text-white rounded-xl text-xs font-extrabold font-mono uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-sm"
          title="Reset simulator conversation history"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset Sandbox
        </button>
      </div>

      {activeTab === "whatsapp" && (
        <WhatsAppSimulator key={simulatorKey} selectedIndustry={selectedIndustry}>{renderLayout}</WhatsAppSimulator>
      )}
      {activeTab === "sms" && (
        <SmsSimulator key={simulatorKey} selectedIndustry={selectedIndustry}>{renderLayout}</SmsSimulator>
      )}
      {activeTab === "rcs" && (
        <RcsSimulator key={simulatorKey} selectedIndustry={selectedIndustry}>{renderLayout}</RcsSimulator>
      )}
      {activeTab === "voice" && (
        <VoiceSimulator key={simulatorKey} selectedIndustry={selectedIndustry}>{renderLayout}</VoiceSimulator>
      )}
    </div>
  );
}
