import { useState, useRef, useEffect, type ReactNode } from "react";
import { PhoneCall, PhoneOff, User, Volume2 } from "lucide-react";

const VOICE_CALL_SCRIPTS: Record<string, { sender: "caller" | "agent"; text: string }[]> = {
  order: [
    { sender: "agent", text: "Hello, thank you for calling support. I see your recent order is out for delivery today. Is there anything specific I can help you with?" },
    { sender: "caller", text: "Hi! Can you let me know if it requires a signature upon arrival?" },
    { sender: "agent", text: "No, a signature is not required. Our delivery partner can leave it at your doorstep or with security if you prefer. Shall I notify them?" },
    { sender: "caller", text: "Yes, please ask them to leave it with the security desk." },
    { sender: "agent", text: "Perfect. I have updated your delivery note. A confirmation SMS has been dispatched. Have a great day!" }
  ],
  otp: [
    { sender: "agent", text: "Thank you for calling our verification helpline. To proceed with authenticating your login attempt, would you like me to trigger a new security code?" },
    { sender: "caller", text: "Yes, please. I didn't receive the previous one." },
    { sender: "agent", text: "Sending a high-priority 6-digit OTP to your registered device now... I've routed it via our direct carrier route. Did you receive it?" },
    { sender: "caller", text: "Yes, I got it. It is five eight two nine one four." },
    { sender: "agent", text: "Success! Code verified. Your active session is now fully unlocked. Goodbye!" }
  ],
  appointment: [
    { sender: "agent", text: "Thank you for calling. I can see you have an upcoming appointment scheduled with Dr. Shah tomorrow at 11:30 AM. Would you like to confirm or reschedule?" },
    { sender: "caller", text: "I'd like to reschedule it to Friday afternoon if possible." },
    { sender: "agent", text: "Let me check available slots... Yes, we have Friday at 2:00 PM open. Does that work for you?" },
    { sender: "caller", text: "Yes, that is perfect." },
    { sender: "agent", text: "Excellent. I have updated your booking. A fresh confirmation with prep guidelines and our clinic location map has been sent to your WhatsApp. Goodbye!" }
  ],
  support: [
    { sender: "agent", text: "Welcome to Turiya Support. I can help you with login issues, API connectivity, or live engineering routing. What's the trouble?" },
    { sender: "caller", text: "Hi, I'm getting a connection failure when integrating your API into my CRM." },
    { sender: "agent", text: "I'd be happy to guide you. I'm assigning a senior integration engineer to your active ticket #9481 right now. Would you like to connect with them on chat?" },
    { sender: "caller", text: "Yes, connecting on chat would be great." },
    { sender: "agent", text: "Understood. The live engineer has been notified, and a direct WhatsApp chat invitation is arriving on your screen now. Thank you!" }
  ],
  lead: [
    { sender: "agent", text: "Thank you for contacting Turiya's automation specialists. Are you looking to explore pricing tiers, integrate APIs, or book a live demo?" },
    { sender: "caller", text: "I'd love to schedule a live product demo to see how WhatsApp automation works." },
    { sender: "agent", text: "We would love to show you. We have slots open tomorrow on Tuesday, as well as Wednesday and Thursday. Which day suits you best?" },
    { sender: "caller", text: "Let's do Tuesday tomorrow." },
    { sender: "agent", text: "Done! I have booked your live product demo for Tuesday. A calendar invite with details has been sent to your mobile. Have a wonderful day!" }
  ],
  payment: [
    { sender: "agent", text: "Hello, thank you for calling Turiya Billing. I see an outstanding balance of four thousand eight hundred and fifty rupees on account ID 5819. Would you like me to send a direct UPI payment link?" },
    { sender: "caller", text: "Yes, please send the UPI link so I can pay it right away." },
    { sender: "agent", text: "Absolutely. I've just sent a secure UPI payment link to your mobile. You can tap to pay instantly using GPay or PhonePe." },
    { sender: "caller", text: "Got it, I see the link now. Thank you!" },
    { sender: "agent", text: "You're welcome. Once paid, your ERP ledger will automatically reconcile. Goodbye!" }
  ]
};

interface VoiceSimulatorProps {
  selectedIndustry: "order" | "otp" | "appointment" | "support" | "lead" | "payment";
  children: (controls: ReactNode, phone: ReactNode) => ReactNode;
}

export default function VoiceSimulator({
  selectedIndustry,
  children
}: VoiceSimulatorProps) {
  const [isVoiceCalling, setIsVoiceCalling] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState<{ sender: "caller" | "agent"; text: string }[]>([]);
  const voiceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const script = VOICE_CALL_SCRIPTS[selectedIndustry] || VOICE_CALL_SCRIPTS.order;

  useEffect(() => {
    // Clear calls if industry changes during an active call
    return () => {
      if (voiceTimerRef.current) {
        clearTimeout(voiceTimerRef.current);
      }
    };
  }, [selectedIndustry]);

  const handleStartVoiceCall = () => {
    if (isVoiceCalling) return;
    setIsVoiceCalling(true);
    setVoiceTranscript([{ sender: script[0].sender, text: script[0].text }]);

    let currentIndex = 0;

    const runStep = () => {
      currentIndex++;
      if (currentIndex < script.length) {
        setVoiceTranscript((prev) => [...prev, script[currentIndex]]);

        const delay = script[currentIndex].text.length * 35 + 1600;
        voiceTimerRef.current = setTimeout(runStep, delay);
      } else {
        setIsVoiceCalling(false);
      }
    };

    const delay = script[0].text.length * 35 + 1600;
    voiceTimerRef.current = setTimeout(runStep, delay);
  };

  const handleStopVoiceCall = () => {
    setIsVoiceCalling(false);
    if (voiceTimerRef.current) {
      clearTimeout(voiceTimerRef.current);
    }
    setVoiceTranscript((prev) => [...prev, { sender: "agent", text: "[Call Terminated by User]" }]);
  };

  const phone = (
    <div className="flex-1 pt-8 bg-slate-900 flex flex-col h-full text-slate-100 relative overflow-hidden">
      {/* Dynamic voice calling state overlay/background */}
      <div className="bg-slate-950/80 p-4 border-b border-slate-800 text-center relative z-10 flex flex-col items-center justify-center space-y-1.5 shadow-md">
        <div className="w-10 h-10 rounded-full bg-[#A62BFF]/10 border border-[#A62BFF]/30 flex items-center justify-center text-white relative">
          <User className="h-5 w-5 text-[#A62BFF]" />
          {isVoiceCalling && <span className="absolute inset-0 rounded-full bg-[#A62BFF]/30 animate-ping" />}
        </div>
        <div>
          <h6 className="text-[11px] font-bold tracking-wide">Turiya Voice Stream Node</h6>
          <p className="text-[8px] text-slate-400 font-mono">
            {isVoiceCalling ? "Active SIP Call Connected (G.711)" : "SIP Gateway Ready • Idle"}
          </p>
        </div>

        {/* Audio Waveform animation if calling */}
        {isVoiceCalling && (
          <div className="flex items-center justify-center gap-0.5 h-6 pt-1.5">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="bg-[#A62BFF] w-1 rounded-full animate-bounce"
                style={{
                  height: `${[40, 90, 60, 100, 50, 80, 40, 70, 30][i]}%`,
                  animationDuration: `${[0.6, 0.4, 0.5, 0.3, 0.7, 0.5, 0.4, 0.6, 0.3][i]}s`
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Transcript Screen */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3 z-10 scrollbar-none flex flex-col">
        {voiceTranscript.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center text-slate-500 space-y-2">
            <Volume2 className="h-8 w-8 text-slate-700 animate-pulse" />
            <p className="text-[10px] max-w-[80%] font-light leading-relaxed">
              No active call. Click "Initiate Call Simulation" to launch the real-time AI conversation and view live transcripts.
            </p>
          </div>
        ) : (
          voiceTranscript.map((t, idx) => (
            <div
              key={idx}
              className={`max-w-[85%] rounded-2xl p-2.5 text-[9px] leading-relaxed border transition-all duration-300 ${
                t.sender === "agent"
                  ? "bg-[#3A0E5C]/60 text-slate-200 self-start border-[#A62BFF]/20"
                  : t.sender === "caller"
                  ? "bg-slate-800 text-slate-200 self-end border-slate-700/60"
                  : "bg-rose-950/20 text-rose-300 border-rose-900/30 self-center text-center w-full"
              }`}
            >
              <div className="font-mono text-[7px] text-slate-400 mb-0.5 uppercase tracking-wider">
                {t.sender === "agent" ? "🤖 TURIYA VOICE AI" : "👤 VISITOR (YOU)"}
              </div>
              <p>{t.text}</p>
            </div>
          ))
        )}
      </div>

      {/* End Call / Status Strip */}
      <div className="bg-slate-950 border-t border-slate-800 py-2.5 text-center text-[8px] font-mono text-slate-500 relative z-10 flex items-center justify-center gap-2">
        {isVoiceCalling ? (
          <button
            onClick={handleStopVoiceCall}
            className="px-4 py-1 bg-rose-950/60 hover:bg-rose-900 text-rose-300 rounded-full border border-rose-500/20 flex items-center gap-1 cursor-pointer border-none"
          >
            <PhoneOff className="h-2.5 w-2.5" /> Terminate Call
          </button>
        ) : (
          <span>-- Waiting for outbound trigger --</span>
        )}
      </div>
    </div>
  );

  const controls = (
    <div className="space-y-5">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#A62BFF]/15 border border-[#A62BFF]/35 px-3 py-1 text-[10px] font-bold text-[#F3E9FF]">
        <PhoneCall className="h-3.5 w-3.5 text-[#bf7bfd]" />
        AI-Powered Conversational Voice SIP
      </span>

      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight font-display">
        Interactive Voice AI
      </h3>

      <p className="text-[#C9BEDB] text-xs sm:text-sm leading-relaxed font-light">
        Initiate an outbound virtual voice call to experience Turiya's real-time, low-latency conversational AI. It processes natural language, retrieves CRM records, and speaks dynamically.
      </p>

      <div className="space-y-4 pt-4 border-t border-[#A62BFF]/20">
        <div className="bg-[#1E0A35]/50 border border-[#bf7bfd]/20 rounded-xl p-3.5 space-y-2 text-xs">
          <div className="flex justify-between text-[#C9BEDB]">
            <span>Selected Voice Accent:</span>
            <span className="text-amber-300 font-bold font-mono">Neural English (In-1)</span>
          </div>
          <div className="flex justify-between text-[#C9BEDB]">
            <span>Maximum SIP Latency:</span>
            <span className="text-emerald-400 font-mono">~180ms Ultra-Low</span>
          </div>
          <div className="flex justify-between text-[#C9BEDB]">
            <span>Speech Recognition:</span>
            <span className="text-slate-200">Whisper Native Pipeline</span>
          </div>
        </div>

        {!isVoiceCalling ? (
          <button
            onClick={handleStartVoiceCall}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl py-3 px-4 shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 animate-pulse"
          >
            <PhoneCall className="h-4 w-4" />
            Initiate Call Simulation 📞
          </button>
        ) : (
          <button
            onClick={handleStopVoiceCall}
            className="w-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl py-3 px-4 shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
          >
            <PhoneOff className="h-4 w-4" />
            Hang Up Call 🔴
          </button>
        )}
      </div>
    </div>
  );

  return <>{children(controls, phone)}</>;
}
