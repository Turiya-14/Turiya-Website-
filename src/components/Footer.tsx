import { Linkedin, Instagram, Mail } from "lucide-react";
import TuriyaLogo from "./TuriyaLogo";

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", slug: "home" },
    { name: "About Us", slug: "about" },
    { name: "Services", slug: "services" },
    { name: "Industries", slug: "industries" },
    { name: "Clients", slug: "clients" },
    { name: "Partners", slug: "partners" },
    { name: "Blogs", slug: "blogs" },
    { name: "FAQs", slug: "faqs" },
    { name: "Contact Us", slug: "contact" }
  ];

  const servicesList = [
    { name: "WhatsApp Business API", slug: "services/whatsapp-business-api" },
    { name: "SMS Solutions", slug: "services/sms-communication" },
    { name: "RCS Messaging", slug: "services/rcs-messaging" },
    { name: "Chatbot Development", slug: "services/chatbot-development" },
    { name: "Custom Software Development", slug: "services/custom-software-development" },
    { name: "Healthcare Software", slug: "services/healthcare-software" },
    { name: "Campaign Communication", slug: "services/campaign-communication" }
  ];

  const industriesList = [
    { name: "Healthcare", anchor: "healthcare" },
    { name: "Education", anchor: "education" },
    { name: "Political Campaigns", anchor: "political-public" },
    { name: "Retail", anchor: "retail-consumer" },
    { name: "Restaurants", anchor: "retail-consumer" },
    { name: "Astrology", anchor: "astrology-consultation" },
    { name: "Manufacturing", anchor: "manufacturing-industrial" },
    { name: "Real Estate", anchor: "real-estate" },
    { name: "Events & Associations", anchor: "events-associations" }
  ];

  const handleLinkClick = (slug: string) => {
    onNavigate(slug);
  };

  return (
    <footer className="bg-primary text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-white/10" id="app-footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Upper 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left font-sans">
          
          {/* Column 1: Company Description + Logo */}
          <div className="lg:col-span-4 space-y-5">
            <button 
              type="button"
              onClick={() => handleLinkClick("home")} 
              className="cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
              aria-label="Turiya Infotech Home"
            >
              <TuriyaLogo variant="footer" iconClassName="h-9 w-9" />
            </button>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Turiya Infotech provides WhatsApp Business API, SMS, RCS, chatbot development, campaign communication, and custom software development solutions for businesses, healthcare providers, educational institutions, campaigns, and enterprises.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/company/turiya-infotech/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-white/10 hover:bg-accent text-slate-300 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" 
                title="LinkedIn"
                aria-label="Visit Turiya Infotech on LinkedIn"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a 
                href="https://www.instagram.com/turiya.infotech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded bg-white/10 hover:bg-accent text-slate-300 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" 
                title="Instagram"
                aria-label="Visit Turiya Infotech on Instagram"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a 
                href="https://wa.me/917020262435" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded bg-white/10 hover:bg-accent text-slate-300 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" 
                title="WhatsApp"
                aria-label="Contact Turiya Infotech on WhatsApp"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-2.5 pt-1">
              <a 
                href="mailto:business@turiyainfotech.com" 
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-accent transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
              >
                <Mail className="h-4 w-4 text-slate-500 group-hover:text-accent transition-colors" aria-hidden="true" />
                <span>business@turiyainfotech.com</span>
              </a>
              <a 
                href="https://wa.me/917020262435" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-accent transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
              >
                <svg className="h-4 w-4 text-slate-500 group-hover:text-accent fill-current transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>+91 7020262435</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-bold text-white text-xs uppercase tracking-wider font-display border-l-2 border-accent pl-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.slug)}
                    className="hover:text-accent transition-colors cursor-pointer text-left text-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services list */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-bold text-white text-xs uppercase tracking-wider font-display border-l-2 border-accent pl-2">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesList.map((srv) => (
                <li key={srv.name}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(srv.slug)}
                    className="hover:text-accent transition-colors cursor-pointer text-left text-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
                  >
                    {srv.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries list */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-bold text-white text-xs uppercase tracking-wider font-display border-l-2 border-accent pl-2">
              Industries We Serve
            </h3>
            <ul className="space-y-2.5 text-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-2 gap-y-2.5">
              {industriesList.map((ind) => (
                <li key={ind.name}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(`industries#${ind.anchor}`)}
                    className="hover:text-accent transition-colors cursor-pointer text-left text-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
                  >
                    {ind.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Lower Footer copyright & CTA Line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-sans text-left">
          <div className="space-y-1.5 max-w-xl">
            <p className="text-white font-bold font-display text-sm">
              Ready to build smarter communication for your business? Talk to Turiya Infotech today.
            </p>
            <p className="text-slate-400">
              © {currentYear} Turiya Infotech. All rights reserved.
              <span className="mx-2 text-slate-600">|</span>
              <button
                type="button"
                onClick={() => handleLinkClick("privacy")}
                className="hover:text-accent transition-colors underline cursor-pointer text-slate-400"
              >
                Privacy Policy
              </button>
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <button
              type="button"
              onClick={() => handleLinkClick("contact")}
              className="rounded-md bg-accent text-white hover:bg-accent-hover px-4 py-2 text-xs font-bold transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started Now
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
