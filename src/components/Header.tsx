import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight, MessageSquare } from "lucide-react";
import TuriyaLogo from "./TuriyaLogo";

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenBookDemo: () => void;
}

export default function Header({ currentView, onNavigate, onOpenBookDemo }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection for sticky background effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesLinks = [
    { name: "WhatsApp Business API", slug: "services/whatsapp-business-api" },
    { name: "SMS Communication", slug: "services/sms-communication" },
    { name: "RCS Messaging", slug: "services/rcs-messaging" },
    { name: "Chatbot Development", slug: "services/chatbot-development" },
    { name: "Custom Software Development", slug: "services/custom-software-development" },
    { name: "Healthcare Software & Automation", slug: "services/healthcare-software" },
    { name: "Campaign Communication", slug: "services/campaign-communication" }
  ];

  const handleLinkClick = (view: string) => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    onNavigate(view);
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    onNavigate("contact");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-border-subtle shadow-sm ${
        isScrolled ? "py-3" : "py-5"
      }`}
      id="app-header"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Wordmark (Left) */}
          <button 
            type="button"
            onClick={() => handleLinkClick("home")} 
            className="flex items-center justify-center py-1 group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary text-left" 
            id="header-logo-link"
            aria-label="Turiya Infotech Home"
          >
            <TuriyaLogo variant="full" iconClassName="h-8 md:h-[34px]" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main navigation">
            <button
              type="button"
              onClick={() => handleLinkClick("home")}
              className={`text-xs font-bold transition-all duration-200 cursor-pointer font-sans uppercase tracking-wider pb-1 border-b-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "home" ? "text-primary border-accent" : "text-primary/80 hover:text-primary border-transparent hover:border-accent/50"
              }`}
            >
              Home
            </button>
            
            <button
              type="button"
              onClick={() => handleLinkClick("about")}
              className={`text-xs font-bold transition-all duration-200 cursor-pointer font-sans uppercase tracking-wider pb-1 border-b-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "about" ? "text-primary border-accent" : "text-primary/80 hover:text-primary border-transparent hover:border-accent/50"
              }`}
            >
              About Us
            </button>

            {/* Services Dropdown (Desktop) */}
            <div className="relative group/dropdown py-2">
              <button
                type="button"
                className={`text-xs font-bold transition-all duration-200 cursor-pointer font-sans uppercase tracking-wider pb-1 border-b-2 flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  currentView.startsWith("services") ? "text-primary border-accent" : "text-primary/80 hover:text-primary border-transparent hover:border-accent/50"
                }`}
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Services</span>
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover/dropdown:rotate-180 text-primary" aria-hidden="true" />
              </button>

              {/* Dropdown Menu block */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover/dropdown:block group-focus-within/dropdown:block bg-white border border-border-subtle shadow-xl rounded-xl w-72 p-2.5 space-y-1 mt-1 animate-in fade-in duration-200 z-50"
                role="menu"
                aria-label="Services dropdown menu"
              >
                {servicesLinks.map((srv) => (
                  <button
                    key={srv.slug}
                    type="button"
                    onClick={() => handleLinkClick(srv.slug)}
                    role="menuitem"
                    className={`w-full text-left rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors duration-150 flex justify-between items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      currentView === srv.slug 
                        ? "bg-primary text-white" 
                        : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                    }`}
                  >
                    <span>{srv.name}</span>
                    <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleLinkClick("industries")}
              className={`text-xs font-bold transition-all duration-200 cursor-pointer font-sans uppercase tracking-wider pb-1 border-b-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "industries" ? "text-primary border-accent" : "text-primary/80 hover:text-primary border-transparent hover:border-accent/50"
              }`}
            >
              Industries
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick("clients")}
              className={`text-xs font-bold transition-all duration-200 cursor-pointer font-sans uppercase tracking-wider pb-1 border-b-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "clients" ? "text-primary border-accent" : "text-primary/80 hover:text-primary border-transparent hover:border-accent/50"
              }`}
            >
              Clients
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick("partners")}
              className={`text-xs font-bold transition-all duration-200 cursor-pointer font-sans uppercase tracking-wider pb-1 border-b-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "partners" ? "text-primary border-accent" : "text-primary/80 hover:text-primary border-transparent hover:border-accent/50"
              }`}
            >
              Partners
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick("blogs")}
              className={`text-xs font-bold transition-all duration-200 cursor-pointer font-sans uppercase tracking-wider pb-1 border-b-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "blogs" ? "text-primary border-accent" : "text-primary/80 hover:text-primary border-transparent hover:border-accent/50"
              }`}
            >
              Blogs
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick("faqs")}
              className={`text-xs font-bold transition-all duration-200 cursor-pointer font-sans uppercase tracking-wider pb-1 border-b-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "faqs" ? "text-primary border-accent" : "text-primary/80 hover:text-primary border-transparent hover:border-accent/50"
              }`}
            >
              FAQs
            </button>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden xl:flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenBookDemo}
              className="rounded-md bg-accent hover:bg-accent-hover text-white px-5 py-2.5 text-sm font-bold shadow-md shadow-accent/15 transition-all cursor-pointer font-sans flex items-center justify-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get a Demo
            </button>
            <button
              type="button"
              onClick={handleContactClick}
              className="rounded-md border border-primary/25 text-primary hover:bg-primary/5 px-5 py-2.5 text-sm font-bold transition-all cursor-pointer font-sans flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden rounded-lg p-2 text-primary hover:bg-slate-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            id="mobile-menu-toggle"
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-border-subtle shadow-xl px-6 py-6 space-y-6 max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-5 duration-200 text-left">
          <nav className="flex flex-col gap-4 font-sans" aria-label="Mobile navigation">
            <button
              type="button"
              onClick={() => handleLinkClick("home")}
              className={`text-left text-sm font-bold py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "home" ? "text-accent border-b border-accent/10" : "text-primary"
              }`}
            >
              Home
            </button>
            
            <button
              type="button"
              onClick={() => handleLinkClick("about")}
              className={`text-left text-sm font-bold py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "about" ? "text-accent border-b border-accent/10" : "text-primary"
              }`}
            >
              About Us
            </button>

            {/* Collapsible Services (Mobile) */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full text-left text-sm font-bold py-1 flex items-center justify-between text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-expanded={isMobileServicesOpen}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-4 border-l-2 border-border-subtle flex flex-col gap-4 py-1 animate-in slide-in-from-left-2 duration-150 text-left">
                  {/* Category: Messaging */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-sans">
                      Messaging
                    </div>
                    <div className="flex flex-col gap-1">
                      {servicesLinks.slice(0, 3).map((srv) => (
                        <button
                          key={srv.slug}
                          type="button"
                          onClick={() => handleLinkClick(srv.slug)}
                          className={`text-left text-xs font-semibold py-1 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                            currentView === srv.slug ? "text-accent" : "text-primary/75 hover:text-primary"
                          }`}
                        >
                          {srv.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category: Build */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-sans">
                      Build
                    </div>
                    <div className="flex flex-col gap-1">
                      {servicesLinks.slice(3, 5).map((srv) => (
                        <button
                          key={srv.slug}
                          type="button"
                          onClick={() => handleLinkClick(srv.slug)}
                          className={`text-left text-xs font-semibold py-1 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                            currentView === srv.slug ? "text-accent" : "text-primary/75 hover:text-primary"
                          }`}
                        >
                          {srv.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category: Industry */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-sans">
                      Industry
                    </div>
                    <div className="flex flex-col gap-1">
                      {servicesLinks.slice(5).map((srv) => (
                        <button
                          key={srv.slug}
                          type="button"
                          onClick={() => handleLinkClick(srv.slug)}
                          className={`text-left text-xs font-semibold py-1 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                            currentView === srv.slug ? "text-accent" : "text-primary/75 hover:text-primary"
                          }`}
                        >
                          {srv.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleLinkClick("industries")}
              className={`text-left text-sm font-bold py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "industries" ? "text-accent border-b border-accent/10" : "text-primary"
              }`}
            >
              Industries
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick("clients")}
              className={`text-left text-sm font-bold py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "clients" ? "text-accent border-b border-accent/10" : "text-primary"
              }`}
            >
              Clients
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick("partners")}
              className={`text-left text-sm font-bold py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "partners" ? "text-accent border-b border-accent/10" : "text-primary"
              }`}
            >
              Partners
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick("blogs")}
              className={`text-left text-sm font-bold py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "blogs" ? "text-accent border-b border-accent/10" : "text-primary"
              }`}
            >
              Blogs
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick("faqs")}
              className={`text-left text-sm font-bold py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                currentView === "faqs" ? "text-accent border-b border-accent/10" : "text-primary"
              }`}
            >
              FAQs
            </button>
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-border-subtle font-sans">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBookDemo();
              }}
              className="w-full text-center rounded-md bg-accent hover:bg-accent-hover py-3 text-sm font-bold text-white shadow-md shadow-accent/15 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get a Demo
            </button>
            <button
              type="button"
              onClick={handleContactClick}
              className="w-full text-center rounded-md bg-transparent hover:bg-primary/5 py-3 text-sm font-bold text-primary transition-all border border-primary/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
