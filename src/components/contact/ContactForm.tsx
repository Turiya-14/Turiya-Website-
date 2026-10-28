import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2, CheckCircle2, AlertCircle, User, Building, Mail, Phone, HelpCircle, Send } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";
import { submitForm } from "../../utils/submitForm";

const DEFAULT_SERVICE = "WhatsApp Business API";

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service") || "";

  const services = [
    "WhatsApp Business API",
    "SMS Communication",
    "RCS Messaging",
    "Chatbot Development",
    "Custom Software Development",
    "Healthcare Software",
    "Campaign Communication",
    "Other"
  ];

  const industries = [
    "Healthcare",
    "Education",
    "Retail",
    "Political Campaigns",
    "Restaurants",
    "Astrology",
    "Manufacturing",
    "Real Estate",
    "Events & Associations",
    "Other"
  ];

  const serviceParamMap: Record<string, string> = {
    "whatsapp-business-api": "WhatsApp Business API",
    "sms-communication": "SMS Communication",
    "rcs-messaging": "RCS Messaging",
    "chatbot-development": "Chatbot Development",
    "custom-software-development": "Custom Software Development",
    "healthcare-software": "Healthcare Software",
    "campaign-communication": "Campaign Communication",
    "other": "Other"
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    honeypot,
    setHoneypot,
    captchaQuestion,
    captchaAnswer,
    setCaptchaAnswer,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  } = useContactForm({
    initialValues: {
      fullName: "",
      email: "",
      company: "",
      mobile: "",
      serviceRequired: DEFAULT_SERVICE,
      industry: "Healthcare",
      message: ""
    },
    onSubmit: (formValues) =>
      submitForm("contact", {
        fullName: formValues.fullName,
        email: formValues.email,
        company: formValues.company,
        mobile: formValues.mobile || "",
        serviceRequired: formValues.serviceRequired || "",
        industry: formValues.industry,
        message: formValues.message,
        source: "Contact page"
      })
  });

  // Pre-select the service from deep links such as /contact?service=rcs-messaging
  useEffect(() => {
    const matched =
      serviceParamMap[serviceParam.toLowerCase()] ||
      services.find((s) => s.toLowerCase().replace(/\s+/g, "-") === serviceParam.toLowerCase());
    handleChange("serviceRequired", matched || DEFAULT_SERVICE);
    // services/serviceParamMap are static lists defined in this component
  }, [serviceParam, handleChange]);

  const handleMobileChange = (val: string) => {
    const cleanValue = val.replace(/[^0-9+\s-]/g, "");
    handleChange("mobile", cleanValue);
  };

  return (
    <div className="lg:col-span-7 bg-white border border-slate-150 p-6 md:p-8 rounded-3xl shadow-xs">
      <div className="border-b border-slate-100 pb-5 mb-6 text-left space-y-1.5">
        <h3 className="font-bold text-primary text-xl font-display leading-tight">Enquiry Form</h3>
      </div>

      {submitStatus === "success" ? (
        <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-200" role="status" aria-live="polite">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 ring-8 ring-emerald-50/50 border border-emerald-100">
            <CheckCircle2 className="h-10 w-10 stroke-[2] text-accent" aria-hidden="true" />
          </div>

          <div className="space-y-2">
            <h4 className="text-2xl font-extrabold text-primary font-display">Thank you! Your enquiry is in</h4>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto font-light">
              Our team will contact you at <span className="font-semibold text-primary">{values.email}</span> or <span className="font-semibold text-primary">{values.mobile}</span> within one business day.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5 text-left text-xs space-y-3 max-w-md mx-auto font-mono">
            <div className="flex justify-between">
              <span className="text-slate-400">Service:</span>
              <span className="font-semibold text-primary">{values.serviceRequired}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Organisation:</span>
              <span className="font-semibold text-primary">{values.company || "Not Specified"}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-bold px-6 py-3 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={(e) => handleSubmit(e, true)} className="space-y-5 text-left" noValidate>
          {/* Error messages block */}
          {errors.global && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs flex items-start gap-2 animate-in fade-in duration-150" role="alert">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-500" aria-hidden="true" />
              <span>{errors.global}</span>
            </div>
          )}

          {/* Honeypot field */}
          <div className="absolute left-[-9999px] top-[-9999px] hidden" aria-hidden="true">
            <label htmlFor="website_security_verify">Leave this field empty</label>
            <input
              id="website_security_verify"
              name="bot-field"
              type="text"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="block text-xs font-bold text-primary uppercase tracking-wider font-mono">
                Your Name <span className="text-accent" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={values.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  onBlur={() => handleBlur("fullName")}
                  placeholder="Sagar Shelar"
                  aria-invalid={touched.fullName && !!errors.fullName ? "true" : "false"}
                  aria-describedby={touched.fullName && errors.fullName ? "fullName-error" : undefined}
                  className={`w-full rounded-xl border px-3 py-2.5 pl-10 text-xs text-primary focus:outline-none focus:ring-1 focus:border-[#bf7bfd]/50 focus:ring-primary/20 bg-white ${
                    touched.fullName && errors.fullName ? "border-red-500" : "border-slate-200"
                  }`}
                />
                <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" aria-hidden="true" />
              </div>
              {touched.fullName && errors.fullName && (
                <p id="fullName-error" className="text-red-500 text-[11px]" role="alert">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Company/Organisation */}
            <div className="space-y-1.5">
              <label htmlFor="company" className="block text-xs font-bold text-primary uppercase tracking-wider font-mono">
                Company / Organisation Name
              </label>
              <div className="relative">
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={values.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  onBlur={() => handleBlur("company")}
                  placeholder="MakeMyCampaign (MMC)"
                  aria-invalid={touched.company && !!errors.company ? "true" : "false"}
                  aria-describedby={touched.company && errors.company ? "company-error" : undefined}
                  className={`w-full rounded-xl border px-3 py-2.5 pl-10 text-xs text-primary focus:outline-none focus:ring-1 focus:border-[#bf7bfd]/50 focus:ring-primary/20 bg-white ${
                    touched.company && errors.company ? "border-red-500" : "border-slate-200"
                  }`}
                />
                <Building className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" aria-hidden="true" />
              </div>
              {touched.company && errors.company && (
                <p id="company-error" className="text-red-500 text-[11px]" role="alert">
                  {errors.company}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-bold text-primary uppercase tracking-wider font-mono">
                Email ID <span className="text-accent" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="sagar@company.com"
                  aria-invalid={touched.email && !!errors.email ? "true" : "false"}
                  aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                  className={`w-full rounded-xl border px-3 py-2.5 pl-10 text-xs text-primary focus:outline-none focus:ring-1 focus:border-[#bf7bfd]/50 focus:ring-primary/20 bg-white ${
                    touched.email && errors.email ? "border-red-500" : "border-slate-200"
                  }`}
                />
                <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" aria-hidden="true" />
              </div>
              {touched.email && errors.email && (
                <p id="email-error" className="text-red-500 text-[11px]" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Mobile number */}
            <div className="space-y-1.5">
              <label htmlFor="mobile" className="block text-xs font-bold text-primary uppercase tracking-wider font-mono">
                Mobile Number <span className="text-accent" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  value={values.mobile}
                  onChange={(e) => handleMobileChange(e.target.value)}
                  onBlur={() => handleBlur("mobile")}
                  placeholder="e.g. +91 7020262435"
                  aria-invalid={touched.mobile && !!errors.mobile ? "true" : "false"}
                  aria-describedby={touched.mobile && errors.mobile ? "mobile-error" : undefined}
                  className={`w-full rounded-xl border px-3 py-2.5 pl-10 text-xs text-primary focus:outline-none focus:ring-1 focus:border-[#bf7bfd]/50 focus:ring-primary/20 bg-white ${
                    touched.mobile && errors.mobile ? "border-red-500" : "border-slate-200"
                  }`}
                />
                <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" aria-hidden="true" />
              </div>
              {touched.mobile && errors.mobile && (
                <p id="mobile-error" className="text-red-500 text-[11px]" role="alert">
                  {errors.mobile}
                </p>
              )}
            </div>

            {/* Service Required Dropdown */}
            <div className="space-y-1.5">
              <label htmlFor="serviceRequired" className="block text-xs font-bold text-primary uppercase tracking-wider font-mono">
                Service Required <span className="text-accent" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <select
                  id="serviceRequired"
                  name="serviceRequired"
                  value={values.serviceRequired}
                  onChange={(e) => handleChange("serviceRequired", e.target.value)}
                  onBlur={() => handleBlur("serviceRequired")}
                  aria-invalid={touched.serviceRequired && !!errors.serviceRequired ? "true" : "false"}
                  aria-describedby={touched.serviceRequired && errors.serviceRequired ? "serviceRequired-error" : undefined}
                  className={`w-full rounded-xl border px-3 py-2.5 pl-10 text-xs text-primary focus:outline-none focus:ring-1 focus:border-[#bf7bfd]/50 focus:ring-primary/20 bg-white appearance-none ${
                    touched.serviceRequired && errors.serviceRequired ? "border-red-500" : "border-slate-200"
                  }`}
                >
                  {services.map((srv) => (
                    <option key={srv} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>
                <HelpCircle className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500" aria-hidden="true">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              {touched.serviceRequired && errors.serviceRequired && (
                <p id="serviceRequired-error" className="text-red-500 text-[11px]" role="alert">
                  {errors.serviceRequired}
                </p>
              )}
            </div>

            {/* Industry Dropdown */}
            <div className="space-y-1.5">
              <label htmlFor="industry" className="block text-xs font-bold text-primary uppercase tracking-wider font-mono">
                Industry <span className="text-accent" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <select
                  id="industry"
                  name="industry"
                  value={values.industry}
                  onChange={(e) => handleChange("industry", e.target.value)}
                  onBlur={() => handleBlur("industry")}
                  aria-invalid={touched.industry && !!errors.industry ? "true" : "false"}
                  aria-describedby={touched.industry && errors.industry ? "industry-error" : undefined}
                  className={`w-full rounded-xl border px-3 py-2.5 pl-10 text-xs text-primary focus:outline-none focus:ring-1 focus:border-[#bf7bfd]/50 focus:ring-primary/20 bg-white appearance-none ${
                    touched.industry && errors.industry ? "border-red-500" : "border-slate-200"
                  }`}
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
                <Building className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400 pointer-events-none" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500" aria-hidden="true">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              {touched.industry && errors.industry && (
                <p id="industry-error" className="text-red-500 text-[11px]" role="alert">
                  {errors.industry}
                </p>
              )}
            </div>
          </div>

          {/* Message / Requirement textarea */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-bold text-primary uppercase tracking-wider font-mono">
              Message / Requirement <span className="text-accent" aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={values.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onBlur={() => handleBlur("message")}
              placeholder="Describe your requirements, system volumes, integrations needed, etc..."
              rows={4}
              aria-invalid={touched.message && !!errors.message ? "true" : "false"}
              aria-describedby={touched.message && errors.message ? "message-error" : undefined}
              className={`w-full rounded-xl border p-3.5 text-xs text-primary focus:outline-none focus:ring-1 focus:border-[#bf7bfd]/50 focus:ring-primary/20 bg-white resize-none ${
                touched.message && errors.message ? "border-red-500" : "border-slate-200"
              }`}
            />
            {touched.message && errors.message && (
              <p id="message-error" className="text-red-500 text-[11px]" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          {/* CAPTCHA Protection */}
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">SPAM PROTECTION VERIFICATION</span>
              <label htmlFor="captcha_input" className="text-xs text-primary font-bold">
                Please solve: {captchaQuestion.num1} + {captchaQuestion.num2} = ? <span className="text-accent" aria-hidden="true">*</span>
              </label>
            </div>
            <div className="relative w-full sm:w-32">
              <input
                id="captcha_input"
                type="number"
                required
                placeholder="Your Answer"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                aria-invalid={!!errors.captcha ? "true" : "false"}
                aria-describedby={errors.captcha ? "captcha-error" : undefined}
                className={`w-full rounded-lg border px-3 py-2 text-xs text-primary text-center focus:outline-none ${
                  errors.captcha 
                    ? "border-red-400 bg-red-50 focus:border-red-500" 
                    : "border-slate-200 bg-white focus:border-[#bf7bfd]/50"
                }`}
              />
            </div>
          </div>
          {errors.captcha && (
            <p id="captcha-error" className="text-red-500 text-[11px]" role="alert">
              {errors.captcha}
            </p>
          )}

          {/* Submit trigger button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white py-3.5 text-xs font-bold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-all cursor-pointer font-sans focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-accent" aria-hidden="true" />
                  Sending your enquiry...
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  Send Enquiry
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
