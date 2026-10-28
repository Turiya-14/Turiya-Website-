import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useLocation, useNavigate, useParams, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ServiceSuite from "./components/ServiceSuite";
import BookDemoModal from "./components/BookDemoModal";
import StickyMobileCTA from "./components/StickyMobileCTA";
import LoadingFallback from "./components/LoadingFallback";
import NotFoundPage from "./components/NotFoundPage";
import { servicesData } from "./data/servicesData";

// Lazy-loaded pages for code-splitting
const AboutUsPage = React.lazy(() => import("./components/AboutUsPage"));
const ContactPage = React.lazy(() => import("./components/ContactPage"));
const IndustriesPage = React.lazy(() => import("./components/IndustriesPage"));
const BlogsPage = React.lazy(() => import("./components/BlogsPage"));
const FaqsPage = React.lazy(() => import("./components/FaqsPage"));
const ClientsPage = React.lazy(() => import("./components/ClientsPage"));
const PartnersPage = React.lazy(() => import("./components/PartnersPage"));
const ServicePage = React.lazy(() => import("./components/ServicePage"));
const PrivacyPolicyPage = React.lazy(() => import("./components/PrivacyPolicyPage"));

const SITE_NAME = "Turiya Infotech";
const DEFAULT_TITLE = "Turiya Infotech | Smarter Digital Systems & Business Communication";
const DEFAULT_DESC =
  "Adopt smarter digital systems with WhatsApp Business API, SMS Solutions, RCS Messaging, Chatbots, and Custom Software Development by Turiya Infotech.";

const PAGE_META: Record<string, { title: string; desc: string }> = {
  about: {
    title: `About Us | ${SITE_NAME}`,
    desc: "Learn more about Turiya Infotech, our vision to simplify digital communication, automate workflows, and empower organizations through smart solutions."
  },
  contact: {
    title: `Contact Us | ${SITE_NAME}`,
    desc: "Let's build your digital communication system. Reach out to our technology specialists for WhatsApp API, chatbots, and custom software enquiry."
  },
  services: {
    title: `Services | ${SITE_NAME}`,
    desc: "WhatsApp Business API, SMS, RCS, chatbot development, healthcare software, campaign communication and custom software development by Turiya Infotech."
  },
  industries: {
    title: `Industries We Serve | ${SITE_NAME}`,
    desc: "Discover communication templates and system automation tailored for Healthcare, Education, Political Campaigns, Retail, Real Estate, and more."
  },
  clients: {
    title: `Our Clients | ${SITE_NAME}`,
    desc: "Meet the brands, educational institutions, and healthcare providers that trust Turiya Infotech with their digital campaigns and communication systems."
  },
  partners: {
    title: `Channel & Growth Partners | ${SITE_NAME}`,
    desc: "Join forces with Turiya Infotech's integration, reseller, and technology partner ecosystem to deploy enterprise digital systems."
  },
  blogs: {
    title: `Blogs & Knowledge Resources | ${SITE_NAME}`,
    desc: "Read the latest guides, tips, and articles about WhatsApp Business API, chatbots, RCS, SMS marketing, and system integrations."
  },
  faqs: {
    title: `Frequently Asked Questions | ${SITE_NAME}`,
    desc: "Get instant answers about WhatsApp Business verification, chatbot automation, messaging pricing, custom integrations, and more."
  },
  privacy: {
    title: `Privacy Policy | ${SITE_NAME}`,
    desc: "Read our Privacy Policy to understand how Turiya Infotech collects, processes, and protects your business and client data."
  }
};

function getPageMeta(pathname: string): { title: string; desc: string } {
  const path = pathname.replace(/^\/+|\/+$/g, "");
  if (path === "" || path === "home") return { title: DEFAULT_TITLE, desc: DEFAULT_DESC };

  if (path.startsWith("services/")) {
    const service = servicesData.find((s) => s.slug === path.slice("services/".length));
    if (service) return { title: `${service.title} | ${SITE_NAME}`, desc: service.shortIntro };
    return { title: `Page Not Found | ${SITE_NAME}`, desc: DEFAULT_DESC };
  }

  const section = path.split("/")[0];
  return PAGE_META[section] || { title: `Page Not Found | ${SITE_NAME}`, desc: DEFAULT_DESC };
}

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

interface ServiceRouteProps {
  onNavigate: (view: string) => void;
  onNavigateToContact: (serviceSlug: string) => void;
}

function ServiceRoute({ onNavigate, onNavigateToContact }: ServiceRouteProps) {
  const { slug = "" } = useParams<{ slug: string }>();
  if (!servicesData.some((s) => s.slug === slug)) {
    return <NotFoundPage onNavigate={onNavigate} />;
  }
  return <ServicePage slug={slug} onNavigateToContact={onNavigateToContact} />;
}

function BlogRoute({ onNavigate }: { onNavigate: (view: string) => void }) {
  const { slug } = useParams<{ slug: string }>();
  return <BlogsPage slug={slug} onNavigate={onNavigate} />;
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  // Header highlight key, e.g. "home", "about", "services/rcs-messaging"
  const path = location.pathname.replace(/^\/+|\/+$/g, "");
  const currentView = path === "" || path === "home" ? "home" : path;

  // Per-route document title and meta description
  useEffect(() => {
    const { title, desc } = getPageMeta(location.pathname);
    document.title = title;
    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', desc);
    setMeta('meta[property="og:url"]', `https://turiyainfotech.com${location.pathname}`);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', desc);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `https://turiyainfotech.com${location.pathname === "/" ? "/" : location.pathname.replace(/\/+$/, "")}`);
  }, [location.pathname]);

  // Scroll to the top on page change, or to the #anchor when one is present
  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      let attempts = 0;
      // Lazy-loaded pages may need a moment to mount before the anchor exists
      const timer = window.setInterval(() => {
        const el = document.getElementById(id);
        if (el || ++attempts > 40) {
          window.clearInterval(timer);
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
      return () => window.clearInterval(timer);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);

  const openBookDemo = useCallback(() => setIsBookDemoOpen(true), []);
  const closeBookDemo = useCallback(() => setIsBookDemoOpen(false), []);

  // Maps view keys used by child components ("home", "about", "services/x", "industries#retail") to routes
  const handleNavigate = useCallback(
    (view: string) => {
      navigate(view === "home" ? "/" : `/${view}`);
    },
    [navigate]
  );

  const handleNavigateToContact = useCallback(
    (serviceSlug: string) => {
      navigate(`/contact?service=${encodeURIComponent(serviceSlug)}`);
    },
    [navigate]
  );

  return (
    <div className="min-h-screen bg-surface-bg text-text-primary selection:bg-primary/20 flex flex-col justify-between" id="app-root">
      <Header currentView={currentView} onNavigate={handleNavigate} onOpenBookDemo={openBookDemo} />

      <main className="flex-grow pt-16" id="main-content">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage onOpenBookDemo={openBookDemo} onNavigate={handleNavigate} />} />
            <Route path="/home" element={<HomePage onOpenBookDemo={openBookDemo} onNavigate={handleNavigate} />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/blogs" element={<BlogRoute onNavigate={handleNavigate} />} />
            <Route path="/blogs/:slug" element={<BlogRoute onNavigate={handleNavigate} />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/services" element={<ServiceSuite onNavigate={handleNavigate} allServices={true} />} />
            <Route
              path="/services/:slug"
              element={<ServiceRoute onNavigate={handleNavigate} onNavigateToContact={handleNavigateToContact} />}
            />
            <Route path="*" element={<NotFoundPage onNavigate={handleNavigate} />} />
          </Routes>
        </Suspense>
      </main>

      <Footer onNavigate={handleNavigate} />

      <StickyMobileCTA onContactClick={() => handleNavigate("contact")} />

      <BookDemoModal isOpen={isBookDemoOpen} onClose={closeBookDemo} />
    </div>
  );
}
