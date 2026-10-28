import { PhoneCall, MessageSquare } from "lucide-react";

interface StickyMobileCTAProps {
  onContactClick: () => void;
}

export default function StickyMobileCTA({ onContactClick }: StickyMobileCTAProps) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-35 bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-3.5 shadow-xl flex items-center justify-between gap-4 font-sans">
      <div className="flex flex-col text-left">
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Turiya Communications</span>
        <span className="text-xs font-bold text-primary font-display leading-tight">Need expert advice?</span>
      </div>
      <div className="flex gap-2">
        <a
          href="tel:+917020262435"
          className="h-10 w-10 bg-slate-100 hover:bg-slate-250 text-slate-700 rounded-lg flex items-center justify-center border border-slate-200 transition-colors"
          title="Direct Dial"
        >
          <PhoneCall className="h-4 w-4 text-primary" />
        </a>
        <button
          onClick={onContactClick}
          className="bg-accent hover:bg-accent-hover text-white text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-1.5 shadow-md shadow-accent/15 transition-all cursor-pointer"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          Enquire Now
        </button>
      </div>
    </div>
  );
}
