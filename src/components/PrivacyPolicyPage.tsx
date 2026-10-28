import { useState } from "react";
import { Shield, Mail, MapPin, User, FileText, Calendar, ArrowUp } from "lucide-react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("scope");

  const lastUpdatedDate = "July 21, 2026";

  const sections = [
    {
      id: "scope",
      title: "1. Scope of this Policy",
      content: (
        <div className="space-y-4">
          <p>
            This Policy applies to information collected through our Website, client dashboards, APIs, and any WhatsApp Business API, SMS, RCS, chatbot, or campaign management services we provide (collectively, the <strong>&lsquo;Services&rsquo;</strong>).
          </p>
          <p>
            This Policy applies both to our direct clients (businesses that use our Platform to run communication campaigns) and, to the extent described below, to end-users who receive messages sent by our clients through our Platform.
          </p>
          <p>
            This Policy does not apply to third-party websites, applications, or services that may be linked from our Platform; such third parties are governed by their own privacy policies.
          </p>
        </div>
      ),
    },
    {
      id: "collect",
      title: "2. Information We Collect",
      content: (
        <div className="space-y-4">
          <p>We may collect the following categories of information:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>
              <strong>Account and contact information:</strong> Name, business name, designation, email address, phone number, billing and GST details, provided when you register as a client or contact us.
            </li>
            <li>
              <strong>Communication content and metadata:</strong> Message templates, campaign content, delivery status, timestamps, and engagement data (such as read receipts or click-throughs) processed on behalf of clients through the WhatsApp Business API, SMS, RCS, or chatbot services.
            </li>
            <li>
              <strong>End-user data processed on behalf of clients:</strong> Phone numbers, opt-in/opt-out status, and message interaction data supplied by our clients for the purpose of sending communications; this data is processed by us strictly as a service provider acting on client instructions.
            </li>
            <li>
              <strong>Technical and usage data:</strong> IP address, browser type, device identifiers, log files, and analytics data collected when you use our Website or dashboard.
            </li>
            <li>
              <strong>Payment information:</strong> Billing address and transaction details processed through our payment partners; we do not store complete card or bank details on our servers.
            </li>
            <li>
              <strong>Voluntary contributions:</strong> Any other information you voluntarily provide to us, such as through support tickets, emails, or forms.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "use",
      title: "3. How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>To provide, operate, and maintain the Services, including delivering WhatsApp, SMS, and RCS messages and operating chatbots on behalf of our clients.</li>
            <li>To create and manage client accounts, process payments, and provide billing and invoicing.</li>
            <li>To communicate with you regarding your account, service updates, support requests, and administrative notices.</li>
            <li>To monitor, analyse, and improve the performance, security, and reliability of the Platform and Services.</li>
            <li>To comply with applicable law, regulatory requirements, and requests from governmental or judicial authorities.</li>
            <li>To detect, prevent, and address fraud, unauthorized use, or violations of our Terms of Use.</li>
            <li>For any other purpose disclosed to you at the time the information is collected, or with your consent.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "behalf",
      title: "4. Data Processed on Behalf of Clients",
      content: (
        <div className="space-y-4">
          <p>
            Where we process end-user data (such as phone numbers and message content) on behalf of a client in connection with WhatsApp Business API, SMS, RCS, or chatbot campaigns, we act as a service provider/data processor.
          </p>
          <p>
            The client remains responsible for ensuring it has the necessary consent and legal basis to send communications to its end-users, including compliance with opt-in requirements under applicable law and the policies of WhatsApp/Meta and telecom regulators (including TRAI regulations on commercial communications in India). We process such data only as instructed by the client and for the duration necessary to provide the Services.
          </p>
        </div>
      ),
    },
    {
      id: "share",
      title: "5. Sharing and Disclosure of Information",
      content: (
        <div className="space-y-4">
          <p>We may share your information with:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>
              <strong>Service providers and sub-processors:</strong> Third parties who assist us in operating the Platform (e.g., cloud hosting, payment gateways, analytics providers), bound by confidentiality and data protection obligations.
            </li>
            <li>
              <strong>Communication channel partners:</strong> Communication networks including Meta/WhatsApp, telecom operators, and SMS/RCS aggregators, to the extent necessary to deliver messages.
            </li>
            <li>
              <strong>Legal and regulatory compliance:</strong> Governmental authorities, law enforcement, or regulators where required by law, legal process, or to protect our rights, property, or safety, or that of our users or the public.
            </li>
            <li>
              <strong>Corporate restructuring:</strong> A successor entity in connection with a merger, acquisition, or sale of assets, subject to equivalent privacy protections.
            </li>
          </ul>
          <p>We do not sell your personal data to third parties for their independent marketing purposes.</p>
        </div>
      ),
    },
    {
      id: "cookies",
      title: "6. Cookies and Tracking Technologies",
      content: (
        <p>
          Our Website may use cookies and similar tracking technologies to enhance user experience, remember preferences, and analyse traffic. You may configure your browser to refuse cookies; however, this may affect the functionality of certain features of the Website.
        </p>
      ),
    },
    {
      id: "security",
      title: "7. Data Security",
      content: (
        <p>
          We implement reasonable security practices and procedures, including administrative, technical, and physical safeguards, appropriate to the sensitivity of the information, to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>
      ),
    },
    {
      id: "retention",
      title: "8. Data Retention",
      content: (
        <p>
          We retain personal data for as long as necessary to fulfil the purposes described in this Privacy Policy, to comply with our legal and contractual obligations (including obligations under client agreements), and to resolve disputes. Data processed on behalf of clients is retained in accordance with the terms of the applicable client agreement and deleted or anonymized thereafter, unless a longer retention period is required by law.
        </p>
      ),
    },
    {
      id: "rights",
      title: "9. Your Rights and Choices",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>You may access, correct, or update your account information by logging into your client dashboard or contacting us.</li>
            <li>You may withdraw consent to marketing communications from us at any time by using the unsubscribe/opt-out mechanism provided, or by contacting us directly.</li>
            <li>End-users who wish to stop receiving messages sent by our clients should use the opt-out mechanism provided within those messages, or contact the relevant client directly, as we act as a service provider to such clients.</li>
            <li>You may request deletion of your personal data, subject to our legal, regulatory, and legitimate business retention requirements.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "children",
      title: "10. Children's Privacy",
      content: (
        <p>
          Our Services are intended for use by businesses and individuals who are at least 18 years of age or the age of majority in their jurisdiction. We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected personal data from a child, we will take steps to delete such information.
        </p>
      ),
    },
    {
      id: "links",
      title: "11. Third-Party Links",
      content: (
        <p>
          The Website and Services may contain links to third-party websites or platforms. This Privacy Policy does not apply to such third-party websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
      ),
    },
    {
      id: "changes",
      title: "12. Changes to this Privacy Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. The updated version will be indicated by a revised &lsquo;Last Updated&rsquo; date and will be effective as soon as it is published on the Platform. We encourage you to review this Policy periodically.
        </p>
      ),
    },
    {
      id: "grievance",
      title: "13. Grievance Officer",
      content: (
        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-4 font-sans text-sm text-slate-600">
          <p>
            In accordance with the Information Technology Act, 2000 and rules made thereunder, the name and contact details of the Grievance Officer are provided below. Any complaints, abuse, or concerns regarding the violation of this Policy or the Terms of Use may be addressed to the Grievance Officer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-2.5">
              <User className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Name</span>
                <span className="font-medium text-slate-800">Aditya Adhav</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Shield className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Designation</span>
                <span className="font-medium text-slate-800">Founder</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</span>
                <a href="mailto:aditya@turiyainfotech.com" className="text-accent hover:underline font-medium">
                  aditya@turiyainfotech.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Address</span>
                <span className="font-medium text-slate-800">Nashik, Maharashtra &ndash; 422101</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "law",
      title: "14. Governing Law and Jurisdiction",
      content: (
        <p>
          This Privacy Policy and any dispute or claim relating to it shall be governed by and construed in accordance with the laws of India. All disputes arising out of or in connection with this Policy shall be subject to the exclusive jurisdiction of the courts in Nashik, Maharashtra.
        </p>
      ),
    },
    {
      id: "contact",
      title: "15. Contact Us",
      content: (
        <div className="bg-primary/5 border border-primary/10 p-5 rounded-2xl space-y-4 font-sans text-sm text-slate-600">
          <p>
            For any questions, concerns, or requests relating to this Privacy Policy or your personal data, please contact us at:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</span>
                <a href="mailto:aditya@turiyainfotech.com" className="text-primary hover:underline font-medium">
                  aditya@turiyainfotech.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Address</span>
                <span className="font-medium text-slate-800">Nashik, Maharashtra &ndash; 422101</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <FileText className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Website</span>
                <a href="https://www.turiyainfotech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  www.turiyainfotech.com
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-slate-50/50 min-h-screen pt-8 pb-12 sm:pt-12 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Hero card */}
        <div className="relative rounded-3xl bg-primary text-white p-8 md:p-12 shadow-xl shadow-primary/5 overflow-hidden mb-12">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-primary-light text-xs font-semibold">
              <Shield className="h-3.5 w-3.5" />
              Trust & Security
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
              Privacy Policy
            </h1>
            <p className="text-primary-light text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              At Turiya Infotech, we value your privacy. This policy describes how we collect, use, process, and protect your information when using our Website and Services.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 pt-2 font-mono">
              <Calendar className="h-3.5 w-3.5 text-accent" />
              <span>LAST UPDATED: {lastUpdatedDate.toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Quick-links Left Sticky Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-100 rounded-2xl p-5 space-y-4 shadow-sm">
              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-primary border-b border-slate-100 pb-3">
                Policy Navigation
              </h3>
              <nav className="space-y-1.5 text-xs text-left" aria-label="Privacy policy navigation">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-all duration-150 ${
                      activeSection === sec.id
                        ? "bg-primary/5 text-primary font-semibold border-l-2 border-accent pl-2.5"
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-50/50"
                    }`}
                  >
                    {sec.title.split(". ")[1] || sec.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Pane */}
          <div className="lg:col-span-3 bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10 text-left">
            
            {/* Regulatory context introduction */}
            <div className="space-y-4 pb-8 border-b border-slate-100 text-sm leading-relaxed text-slate-500 font-sans">
              <p className="italic bg-slate-50/80 border-l-4 border-slate-200 p-4 rounded-r-xl">
                This document is an electronic record in terms of the Information Technology Act, 2000 and rules made thereunder, as applicable, and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signature.
              </p>
              <p>
                This Privacy Policy is published in accordance with Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011 and Rule 4 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, which require publishing the rules and regulations, privacy policy, and Terms of Use for access or usage of the domain <strong>www.turiyainfotech.com</strong> (&lsquo;Website&rsquo;/&lsquo;Platform&rsquo;), including any related mobile site, mobile application, and communication services offered through it.
              </p>
              <p>
                The Platform is owned and operated by <strong>TURIYA INFOTECH</strong> (&lsquo;Company&rsquo;, &lsquo;Platform Owner&rsquo;, &lsquo;we&rsquo;, &lsquo;us&rsquo;, &lsquo;our&rsquo;), a communications platform-as-a-service (CPaaS) provider offering WhatsApp Business API solutions, SMS, RCS, chatbot development, and campaign management services, with its registered office in Nashik, Maharashtra &ndash; 422101.
              </p>
              <p>
                This Privacy Policy describes how we collect, use, process, and disclose your information, including personal data, when you use our Website and our Services. By accessing, browsing, or otherwise using the Platform or Services, you agree to the practices described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the Platform or the Services.
              </p>
            </div>

            {/* Individual Sections */}
            <div className="space-y-12">
              {sections.map((sec) => (
                <div key={sec.id} id={sec.id} className="scroll-mt-28 space-y-4 text-left">
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-primary tracking-tight">
                    {sec.title}
                  </h2>
                  <div className="text-sm sm:text-base leading-relaxed text-slate-600 font-sans space-y-4">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Back to top helper */}
            <div className="pt-8 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-primary transition-colors font-sans"
              >
                <ArrowUp className="h-3.5 w-3.5" />
                Back to Top
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
