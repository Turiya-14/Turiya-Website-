import { useState, useRef, useEffect, FormEvent, type ReactNode } from "react";
import { Send, Check, CheckCheck, ShieldCheck, ArrowRight, MessageSquare, Sparkles, Database } from "lucide-react";
import { ChatMessage } from "../../types/playground";

const INDUSTRY_FLOWS: Record<string, {
  name: string;
  badge: string;
  welcomeText: string;
  buttons: { label: string; query: string; icon: any }[];
  responses: Record<string, { text: string; buttons?: string[] }>;
}> = {
  order: {
    name: "Order Confirmation",
    badge: "Transactional API",
    welcomeText: "Thank you for shopping! 🛒\nYour order has been confirmed. Automate order receipts, real-time shipment updates, and returns over WhatsApp.\n\nTry managing your order below:",
    buttons: [
      { label: "Track Shipment", query: "track_shipment", icon: Sparkles },
      { label: "Download Invoice", query: "download_invoice", icon: ShieldCheck },
      { label: "Change Delivery Time", query: "change_time", icon: ArrowRight },
      { label: "Request Refund", query: "refund", icon: Database }
    ],
    responses: {
      track_shipment: {
        text: "📦 *Shipment Status Update*:\n\n*Order*: #TX-88401\n*Carrier*: BlueDart\n*Status*: Out for delivery 🚚\n\nYour package is expected by 6:00 PM today. Tracking link: `https://yourbrand.in/t/88401`",
        buttons: ["Download Invoice", "Change Delivery Time"]
      },
      download_invoice: {
        text: "📄 *Invoice Download*:\n\n*Invoice ID*: #INV-2026-9041\n*Amount*: ₹1,249.00\n*Payment Method*: UPI (Success) ✅\n\nYour tax invoice has been generated. Tap to view and print: `https://yourbrand.in/inv/9041`",
        buttons: ["Track Shipment", "Request Refund"]
      },
      change_time: {
        text: "⏰ *Delivery Preference*:\n\nWe noted your request to update delivery details. Would you like to reschedule or request contactless drop-off?",
        buttons: ["Reschedule Tomorrow", "Leave at Doorstep"]
      },
      refund: {
        text: "💸 *Return & Refund Portal*:\n\nWe're sorry the item didn't work out. To initiate a free return pickup, please reply with your reason:\n\n1. *Size/Fit issue*\n2. *Defective item*\n3. *Changed mind*",
        buttons: ["1. Size/Fit", "2. Defective", "3. Changed mind"]
      }
    }
  },
  otp: {
    name: "OTP Verification",
    badge: "Security Gateway",
    welcomeText: "Verify accounts and safeguard transactions. Turiya delivers secure, high-priority OTP notifications globally in under 2 seconds. 🔑\n\nTrigger a verification code:",
    buttons: [
      { label: "Request OTP Code", query: "request_otp", icon: Sparkles },
      { label: "Check OTP Delivery Status", query: "otp_status", icon: ShieldCheck }
    ],
    responses: {
      request_otp: {
        text: "🔑 *Secure OTP Code*:\n\nYour Turiya verification code is *582914*. It is valid for exactly 5 minutes.\n\n_Never share your OTP with anyone for security purposes._",
        buttons: ["Check OTP Delivery Status", "Request OTP Code"]
      },
      otp_status: {
        text: "📊 *Real-time OTP Analytics*:\n\n• *Delivery Latency*: 1.4 seconds ⚡\n• *Carrier Route*: Direct Tier-1 Interconnect\n• *Status*: Delivered & Handed Over ✅",
        buttons: ["Request OTP Code"]
      }
    }
  },
  appointment: {
    name: "Appointment Reminder",
    badge: "Workflow Automation",
    welcomeText: "Eliminate no-shows. Automatically send interactive schedule reminders, maps, and pre-visit guidelines over WhatsApp. 📅\n\nManage your slot:",
    buttons: [
      { label: "Confirm Slot", query: "confirm_appt", icon: Sparkles },
      { label: "Reschedule Slot", query: "reschedule_appt", icon: ArrowRight },
      { label: "Pre-visit Prep", query: "prep_instructions", icon: Database }
    ],
    responses: {
      confirm_appt: {
        text: "✅ *Appointment Confirmed*:\n\nYour booking for tomorrow at 11:30 AM with Dr. Shah has been successfully locked in.\n\n📍 *Location*: 2nd Floor, Clinic Wing A\n\nWe look forward to seeing you!",
        buttons: ["Pre-visit Prep", "Reschedule Slot"]
      },
      reschedule_appt: {
        text: "🗓️ *Reschedule Appointment*:\n\nWe can move your appointment. Please choose a new timing:\n\n1. *Friday, 2:00 PM*\n2. *Saturday, 10:00 AM*\n3. *Monday, 4:30 PM*",
        buttons: ["1. Friday 2PM", "2. Sat 10AM", "3. Mon 4:30PM"]
      },
      prep_instructions: {
        text: "📝 *Pre-visit Preparation Guidelines*:\n\n• Please arrive 10 minutes prior for paperwork.\n• Carry your previous reports if any.\n• For lab tests, maintain an 8-hour fast.",
        buttons: ["Confirm Slot", "Reschedule Slot"]
      }
    }
  },
  support: {
    name: "Customer Support",
    badge: "Helpdesk AI",
    welcomeText: "Resolve inquiries instantly. Turiya's AI and agent routing help desks scale customer satisfaction with rich media, fast replies, and live handoffs. 💬\n\nTry a support category:",
    buttons: [
      { label: "Technical Support", query: "tech_support", icon: Sparkles },
      { label: "Billing & Accounts", query: "billing_support", icon: ShieldCheck },
      { label: "Talk to Live Human", query: "live_human", icon: MessageSquare }
    ],
    responses: {
      tech_support: {
        text: "🛠️ *Technical Helpdesk*:\n\nLet's resolve this. Please specify the issue:\n\n1. *Login / Password recovery*\n2. *API connection failure*\n3. *Integration setup assistance*",
        buttons: ["1. Password Recovery", "2. API Failure", "3. Integration Help"]
      },
      billing_support: {
        text: "💳 *Billing Support Portal*:\n\nFor invoice queries, pricing tiers, or payment method updates, our billing console is ready.\n\nYou can manage subscription details at: `https://yourbrand.in/billing`",
        buttons: ["Talk to Live Human", "Technical Support"]
      },
      live_human: {
        text: "🧑‍💻 *Live Support Handoff*:\n\nRouting to an available engineer. You are number 1 in queue. A live team member will respond here in under 60 seconds.",
        buttons: ["Technical Support", "Billing & Accounts"]
      }
    }
  },
  lead: {
    name: "Lead Qualification",
    badge: "Conversion Engine",
    welcomeText: "Engage visitors instantly. Qualify incoming inquiries automatically with interactive questions and custom profiling. 🚀\n\nStart your qualification:",
    buttons: [
      { label: "Explore Plans", query: "explore_plans", icon: Sparkles },
      { label: "Request Pricing Quote", query: "request_quote", icon: ShieldCheck },
      { label: "Schedule Demo", query: "schedule_demo", icon: ArrowRight }
    ],
    responses: {
      explore_plans: {
        text: "📦 *Turiya Platform Plans*:\n\n• *Starter*: Ideal for small startups needing pay-as-you-go APIs.\n• *Growth*: For scaling teams needing dedicated throughput.\n• *Enterprise*: Custom SLAs, dedicated infrastructure, 24/7 support.\n\nWhich matches your monthly volume?",
        buttons: ["Under 50k messages", "50k to 500k", "Over 500k"]
      },
      request_quote: {
        text: "💰 *Custom Pricing Calculator*:\n\nLet's find the best rate. What is your primary country of delivery?\n\n1. *India (Domestic)*\n2. *North America / Europe*\n3. *Middle East / Asia*",
        buttons: ["1. India", "2. NA / EU", "3. MEA / Asia"]
      },
      schedule_demo: {
        text: "🗓️ *Live Demo Booking*:\n\nWe'd love to show you a live demo of Turiya CPaaS. Please choose your preferred day:\n\n• *Tuesday (Tomorrow)*\n• *Wednesday*\n• *Thursday*",
        buttons: ["Tuesday", "Wednesday", "Thursday"]
      }
    }
  },
  payment: {
    name: "Payment Reminder",
    badge: "Revenue Recovery",
    welcomeText: "Recover outstanding revenue gently. Automate payment notices, invoice summaries, and direct, secure UPI payment links over WhatsApp. 💳\n\nSelect a billing option:",
    buttons: [
      { label: "View Outstanding Bill", query: "view_bill", icon: Sparkles },
      { label: "Pay Bill Instantly", query: "pay_now", icon: ShieldCheck },
      { label: "Payment Extension", query: "extension", icon: ArrowRight }
    ],
    responses: {
      view_bill: {
        text: "📑 *Outstanding Statement Summaries*:\n\n*Account ID*: #ACC-5819\n*Bill Cycle*: June 2026\n*Due Date*: 25-July-2026\n*Total Due*: ₹4,850.00",
        buttons: ["Pay Bill Instantly", "Payment Extension"]
      },
      pay_now: {
        text: "⚡ *Instant Secure Payment Gateway*:\n\nUse our secure UPI link to pay instantly using GPAY, PhonePe, or Paytm: `upi://pay?pa=turiya@axis&pn=Turiya&am=4850.00`",
        buttons: ["View Outstanding Bill", "Payment Extension"]
      },
      extension: {
        text: "🤝 *Request Payment Extension*:\n\nNeed extra time? We can extend your due date by up to 7 days. Would you like to apply for a 7-day grace period?",
        buttons: ["Apply 7-Day Grace", "Pay Bill Instantly"]
      }
    }
  }
};

interface WhatsAppSimulatorProps {
  selectedIndustry: "order" | "otp" | "appointment" | "support" | "lead" | "payment";
  children: (controls: ReactNode, phone: ReactNode) => ReactNode;
}

export default function WhatsAppSimulator({
  selectedIndustry,
  children
}: WhatsAppSimulatorProps) {
  const [waInput, setWaInput] = useState("");
  const [waMessages, setWaMessages] = useState<ChatMessage[]>([]);
  const [isWaTyping, setIsWaTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const flow = INDUSTRY_FLOWS[selectedIndustry] || INDUSTRY_FLOWS.order;

  // Initialize messages based on the selected industry
  useEffect(() => {
    setWaMessages([
      {
        id: "system-1",
        text: "🔒 Messages and calls are end-to-end encrypted. This is a simulated demo conversation.",
        sender: "system",
        time: "10:00 AM"
      },
      {
        id: "welcome-1",
        text: flow.welcomeText,
        sender: "bot",
        time: "10:01 AM",
        buttons: flow.buttons.map((b) => b.label)
      }
    ]);
    setIsWaTyping(false);
    setWaInput("");
  }, [selectedIndustry, flow]);

  // Scroll to bottom helper
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [waMessages, isWaTyping]);

  const sendWaMessage = (text: string) => {
    if (!text.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "sending"
    };

    setWaMessages((prev) => [...prev, newMsg]);

    // Simulate tick updates
    setTimeout(() => {
      setWaMessages((prev) =>
        prev.map((m) => (m.id === newMsg.id ? { ...m, status: "sent" } : m))
      );
    }, 400);

    setTimeout(() => {
      setWaMessages((prev) =>
        prev.map((m) => (m.id === newMsg.id ? { ...m, status: "delivered" } : m))
      );
    }, 900);

    setTimeout(() => {
      setWaMessages((prev) =>
        prev.map((m) => (m.id === newMsg.id ? { ...m, status: "read" } : m))
      );

      triggerWhatsAppReply(text);
    }, 1400);
  };

  const triggerWhatsAppReply = (userQuery: string) => {
    setIsWaTyping(true);
    const query = userQuery.toLowerCase().trim();

    let matchedResponse = null;

    for (const [key, val] of Object.entries(flow.responses)) {
      const normalizedKey = key.toLowerCase();
      if (
        query.includes(normalizedKey) ||
        normalizedKey.includes(query) ||
        (query.includes("1") && normalizedKey.includes("1")) ||
        (query.includes("2") && normalizedKey.includes("2")) ||
        (query.includes("3") && normalizedKey.includes("3")) ||
        (query.includes("4") && normalizedKey.includes("4")) ||
        (query.includes("appt") && normalizedKey.includes("appt")) ||
        (query.includes("report") && normalizedKey.includes("report")) ||
        (query.includes("sched") && normalizedKey.includes("reschedule")) ||
        (query.includes("price") && normalizedKey.includes("price")) ||
        (query.includes("catalog") && normalizedKey.includes("prop")) ||
        (query.includes("visit") && normalizedKey.includes("visit")) ||
        (query.includes("agent") && normalizedKey.includes("agent")) ||
        (query.includes("admiss") && normalizedKey.includes("admiss"))
      ) {
        matchedResponse = val;
        break;
      }
    }

    if (!matchedResponse) {
      if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
        matchedResponse = {
          text: `Hello! Welcome to our Turiya ${flow.name} portal. 👋\n\nHow can we help optimize your transactional workflows today? Please click one of the quick replies:`,
          buttons: flow.buttons.map((b) => b.label)
        };
      } else {
        matchedResponse = {
          text: `Thank you for contacting Turiya ${flow.name} Support. Our direct-to-carrier gateway is active with sub-second SLA latencies.\n\nSelect a flow to preview:`,
          buttons: flow.buttons.map((b) => b.label)
        };
      }
    }

    setTimeout(() => {
      setIsWaTyping(false);
      const replyId = (Date.now() + 1).toString();
      setWaMessages((prev) => [
        ...prev,
        {
          id: replyId,
          text: matchedResponse!.text,
          sender: "bot",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          buttons: matchedResponse!.buttons
        }
      ]);

    }, 1800);
  };

  const handleWaSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (waInput.trim()) {
      sendWaMessage(waInput);
      setWaInput("");
    }
  };

  const phone = (
    <div className="flex-1 pt-8 bg-[#efeae2] flex flex-col h-full relative">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23128c7e' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Chat Header */}
      <div className="bg-[#075e54] text-white px-3 py-2.5 flex items-center justify-between relative z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#075e54] font-black text-xs shadow-sm relative">
            T
            <span className="absolute -bottom-0.5 -right-0.5 bg-[#25d366] text-white rounded-full h-3 w-3 flex items-center justify-center border border-white">
              <svg viewBox="0 0 24 24" className="h-2 w-2 fill-white stroke-white stroke-[2]" xmlns="http://www.w3.org/2000/svg">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <h6 className="text-[11px] font-bold tracking-tight">Turiya Infotech</h6>
            </div>
            <span className="text-[8px] text-emerald-100 flex items-center gap-0.5 leading-none mt-0.5">
              <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse"></span>
              Official Business Account
            </span>
          </div>
        </div>

        <div className="bg-[#128c7e] rounded-full p-1 border border-teal-400/20">
          <ShieldCheck className="h-3 w-3 text-emerald-400" />
        </div>
      </div>

      {/* Messages list */}
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-3 space-y-2.5 flex flex-col z-10 scrollbar-none">
        {waMessages.map((msg) => {
          if (msg.sender === "system") {
            return (
              <div
                key={msg.id}
                className="self-center bg-[#ffeec2] text-[#553b00] rounded-lg px-3 py-1.5 text-[10px] sm:text-[11px] text-center max-w-[90%] font-semibold leading-normal shadow-xs border border-yellow-200/50"
              >
                {msg.text}
              </div>
            );
          }

          const isUser = msg.sender === "user";
          return (
            <div key={msg.id} className="space-y-1.5 max-w-[85%] self-start" style={{ alignSelf: isUser ? "flex-end" : "flex-start" }}>
              <div
                className={`rounded-xl p-3 text-xs sm:text-[13px] relative shadow-xs leading-normal ${
                  isUser
                    ? "bg-[#d9fdd3] text-slate-800 rounded-tr-none"
                    : "bg-white text-slate-800 rounded-tl-none border border-slate-100"
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.text}</p>
                <div className="text-[9px] sm:text-[10px] text-right text-slate-400 mt-1 flex items-center justify-end gap-0.5 font-mono">
                  {msg.time}
                  {isUser && (
                    <span>
                      {msg.status === "sending" && <span className="text-slate-300">...</span>}
                      {msg.status === "sent" && <Check className="h-2 w-2 text-slate-400" />}
                      {msg.status === "delivered" && <CheckCheck className="h-2 w-2 text-slate-400" />}
                      {msg.status === "read" && <CheckCheck className="h-2 w-2 text-sky-500" />}
                    </span>
                  )}
                </div>
              </div>

              {!isUser && msg.buttons && msg.buttons.length > 0 && (
                <div className="flex flex-col gap-1.5 mt-1.5 pl-1">
                  {msg.buttons.map((btn, bidx) => (
                    <button
                      key={bidx}
                      onClick={() => sendWaMessage(btn)}
                      className="bg-white/95 hover:bg-white text-primary hover:text-primary-hover font-bold border border-slate-200 rounded-xl py-2 px-3.5 text-[11px] sm:text-xs text-center transition-colors shadow-xs active:scale-98 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>{btn}</span>
                      <ArrowRight className="h-2.5 w-2.5 opacity-55" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {isWaTyping && (
          <div className="self-start bg-white rounded-lg rounded-tl-none p-2 shadow-xs flex items-center gap-1 text-slate-400 z-10 border border-slate-100">
            <span className="h-1 w-1 rounded-full bg-[#128c7e] animate-bounce"></span>
            <span className="h-1 w-1 rounded-full bg-[#128c7e] animate-bounce [animation-delay:0.2s]"></span>
            <span className="h-1 w-1 rounded-full bg-[#128c7e] animate-bounce [animation-delay:0.4s]"></span>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleWaSubmit} className="bg-[#f0f0f0] p-2 flex items-center gap-1.5 border-t border-slate-200 relative z-10">
        <input
          type="text"
          value={waInput}
          onChange={(e) => setWaInput(e.target.value)}
          placeholder="Type a message (e.g. 'pricing', 'security')..."
          className="flex-1 bg-white rounded-full px-3 py-1.5 text-[9px] text-slate-800 placeholder-slate-400 focus:outline-none shadow-inner border border-slate-200"
        />
        <button
          type="submit"
          className="w-7 h-7 rounded-full bg-[#128c7e] hover:bg-[#075e54] text-white flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <Send className="h-3 w-3" />
        </button>
      </form>
    </div>
  );

  // Render Control panel
  const controls = (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#A62BFF]/15 border border-[#A62BFF]/35 px-3 py-1 text-[10px] font-bold text-[#F3E9FF]">
          Meta Authorized API Stack
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#A62BFF]/15 border border-[#A62BFF]/35 px-3 py-1 text-[10px] font-bold text-[#F3E9FF]">
          Verified Green Badge
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#A62BFF]/15 border border-[#A62BFF]/35 px-3 py-1 text-[10px] font-bold text-[#F3E9FF]">
          Live Webhook Synced Logs
        </span>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight font-display">
        Automated Customer Conversions
      </h3>

      <p className="text-[#C9BEDB] text-xs sm:text-sm leading-relaxed font-light">
        Interact with the phone simulator on the right. Tap a quick reply button or type inquiries like "pricing", "security", or "otp" to experience our zero-latency automated workflows.
      </p>

      <div className="space-y-3 pt-4 border-t border-[#A62BFF]/20">
        <h5 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C9BEDB]">
          Quick Testing Prompts ({flow.name})
        </h5>
        <div className="flex flex-wrap gap-2">
          {flow.buttons.map((preset) => {
            const IconComponent = preset.icon || MessageSquare;
            return (
              <button
                key={preset.query}
                onClick={() => sendWaMessage(preset.query)}
                className="bg-[#1E0A35] hover:bg-[#250B42] border border-[#bf7bfd]/30 hover:border-[#A62BFF] text-white font-medium text-xs rounded-xl px-3.5 py-2 flex items-center gap-2 transition-all cursor-pointer"
              >
                <IconComponent className="h-3.5 w-3.5 text-[#bf7bfd]" />
                <span>{preset.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return <>{children(controls, phone)}</>;
}
