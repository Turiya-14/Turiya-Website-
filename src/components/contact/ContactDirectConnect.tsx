import { Mail, PhoneCall, MessageSquare, ExternalLink, MapPin, ShieldCheck } from "lucide-react";

const TARGET_SALES_EMAIL = "business@turiyainfotech.com";

export default function ContactDirectConnect() {
  return (
    <div className="lg:col-span-5 space-y-8">
      <div className="bg-white border border-slate-150 p-6 md:p-8 rounded-2xl shadow-xs space-y-6">
        <h3 className="font-bold text-primary font-display text-lg">Direct Connect</h3>
        <p className="text-slate-500 text-xs leading-relaxed">
          Skip the form entirely and reach out directly to our technology specialists.
        </p>

        <div className="space-y-4">
          {/* Email Address */}
          <a 
            href={`mailto:${TARGET_SALES_EMAIL}`}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <div className="h-10 w-10 rounded-lg bg-primary/5 border border-primary/10 text-primary flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">SALES & SUPPORT EMAIL</span>
              <span className="block text-sm font-bold text-primary font-display group-hover:text-accent transition-colors">
                {TARGET_SALES_EMAIL}
              </span>
            </div>
          </a>

          {/* Direct Call Mobile */}
          <a 
            href="tel:+917020262435"
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <div className="h-10 w-10 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">CALL OUR EXECUTIVE</span>
              <span className="block text-sm font-bold text-primary font-display group-hover:text-accent transition-colors">
                +91 7020262435
              </span>
            </div>
          </a>

          {/* Instant WhatsApp chat link */}
          <a 
            href="https://wa.me/917020262435?text=Hi%20Turiya%20Infotech%2C%20I%20would%20like%20to%20enquire%20about%20your%20digital%20messaging%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-xl bg-emerald-50/40 border border-emerald-100/50 hover:bg-emerald-50 hover:border-emerald-200 transition-all group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <div className="h-10 w-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/20">
              <MessageSquare className="h-5 w-5 fill-current" aria-hidden="true" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-wider font-mono">INSTANT WHATSAPP CHAT</span>
              <span className="block text-sm font-bold text-emerald-800 font-display flex items-center gap-1.5">
                Chat with us now <ExternalLink className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
              </span>
            </div>
          </a>
        </div>

        {/* Corporate Registered Address */}
        <div className="border-t border-slate-100 pt-6 space-y-3">
          <div className="flex gap-3 items-start">
            <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-left space-y-1">
              <h4 className="font-bold text-primary text-xs uppercase tracking-wider font-mono">Corporate Office Address</h4>
              <address className="text-slate-600 text-xs leading-relaxed font-light not-italic font-sans">
                Turiya Infotech Private Limited, Nashik, Maharashtra &ndash; 422101
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance trust details */}
      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex gap-3 text-xs">
        <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1">
          <span className="font-bold text-primary block">Your details stay private</span>
          <p className="text-slate-500 leading-relaxed text-[11px] font-light font-sans">
            Enquiries are sent over an encrypted (HTTPS) connection and used only to respond to you. Your contact details are never sold to third parties.
          </p>
        </div>
      </div>
    </div>
  );
}
