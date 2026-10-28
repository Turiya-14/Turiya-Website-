import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, Building, User, HelpCircle, ShieldCheck } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";
import { submitForm } from "../utils/submitForm";

export default function ContactSection() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    honeypot,
    setHoneypot,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  } = useContactForm({
    initialValues: {
      fullName: "",
      email: "",
      company: "",
      industry: "Select Industry",
      message: ""
    },
    onSubmit: (formValues) =>
      submitForm("contact", {
        fullName: formValues.fullName,
        email: formValues.email,
        company: formValues.company,
        industry: formValues.industry,
        message: formValues.message,
        source: "Home page"
      })
  });

  const industries = [
    "Healthcare",
    "Education",
    "Retail & E-commerce",
    "Finance & Banking",
    "Real Estate",
    "Hospitality",
    "Logistics & Fleet",
    "Enterprise Solutions",
    "Other"
  ];

  return (
    <section className="py-16 md:py-24 bg-warm-bg relative overflow-hidden scroll-mt-16" id="contact-section" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Get in Touch info */}
          <div className="lg:col-span-5 space-y-8 text-left font-sans">
            <div className="space-y-3">
              <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight text-primary font-display">
                Get in Touch
              </h2>
              <p className="text-grey text-base leading-relaxed max-w-sm">
                Prefer direct communication? Reach out to us through any of these verified corporate channels.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4 items-start group">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/5 text-primary border border-primary/10 transition-transform group-hover:scale-105">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-semibold text-primary/60 uppercase tracking-wider">
                    Email Us
                  </div>
                  <a
                    href="mailto:business@turiyainfotech.com"
                    className="text-charcoal font-bold hover:text-primary transition-colors text-sm sm:text-base font-display focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    business@turiyainfotech.com
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex gap-4 items-start group">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/5 text-primary border border-primary/10 transition-transform group-hover:scale-105">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-semibold text-primary/60 uppercase tracking-wider">
                    Call Us
                  </div>
                  <a
                    href="tel:+917020262435"
                    className="text-charcoal font-bold hover:text-primary transition-colors text-sm sm:text-base font-display focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    +91 7020262435
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex gap-4 items-start group">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent border border-accent/20 transition-transform group-hover:scale-105">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-semibold text-primary/60 uppercase tracking-wider">
                    Office
                  </div>
                  <address className="text-charcoal font-bold not-italic text-sm sm:text-base font-display">
                    Nashik, Maharashtra &ndash; 422101
                  </address>
                </div>
              </div>
            </div>

            {/* Compliance Badge */}
            <div className="p-4 bg-white border border-slate-200 rounded-md max-w-sm space-y-2 text-xs">
              <div className="flex items-center gap-1.5 font-semibold text-charcoal">
                <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Your details stay private</span>
              </div>
              <p className="text-grey leading-relaxed text-[11px]">
                Enquiries are sent over an encrypted (HTTPS) connection and used only to respond to you. We never sell your data to third parties.
              </p>
            </div>
          </div>

          {/* Right Column: Send a Message Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-md p-6 md:p-8 relative">
            <div className="space-y-1 mb-6 text-left font-sans">
              <h3 className="font-bold text-primary text-lg font-display">Send a Message</h3>
              <p className="text-grey text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            {submitStatus === "success" ? (
              // Success layout instead of overlay for maximum convenience
              <div className="text-center py-10 space-y-4 animate-in zoom-in duration-200 font-sans" role="status" aria-live="polite">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 text-primary ring-8 ring-primary/5">
                  <CheckCircle2 className="h-8 w-8 stroke-[2] text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary font-display">Message sent. Thank you!</h4>
                  <p className="text-xs text-grey mt-1 max-w-md mx-auto">
                    Thanks, <span className="font-semibold text-charcoal">{values.fullName}</span>. Our team will reply to <span className="font-semibold text-charcoal">{values.email}</span> within one business day.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-md bg-primary hover:bg-primary-hover text-white px-5 py-2 text-xs font-semibold transition-colors font-sans focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left font-sans" noValidate>
                {errors.global && (
                  <div className="p-3 bg-red-50 border border-red-100 rounded-md text-red-600 text-xs flex items-start gap-2" role="alert">
                    <span>{errors.global}</span>
                  </div>
                )}

                {/* Honeypot field (hidden visually, used to catch automated bots) */}
                <div className="absolute left-[-9999px] top-[-9999px] hidden" aria-hidden="true">
                  <label htmlFor="sec_verify_section">Verify Website Security - Do not fill</label>
                  <input
                    id="sec_verify_section"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label htmlFor="section_fullName" className="block text-xs font-semibold text-charcoal">
                      Full Name <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="section_fullName"
                        name="fullName"
                        type="text"
                        required
                        value={values.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        onBlur={() => handleBlur("fullName")}
                        placeholder="Sagar Shelar"
                        aria-invalid={touched.fullName && !!errors.fullName ? "true" : "false"}
                        aria-describedby={touched.fullName && errors.fullName ? "section_fullName-error" : undefined}
                        className={`w-full rounded-md border px-3 py-2 pl-9 text-sm focus:outline-none focus:ring-1 bg-white text-charcoal focus:border-primary focus:ring-primary ${
                          touched.fullName && errors.fullName ? "border-red-500" : "border-slate-200"
                        }`}
                      />
                      <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                    </div>
                    {touched.fullName && errors.fullName && (
                      <p id="section_fullName-error" className="text-red-500 text-[11px]" role="alert">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1">
                    <label htmlFor="section_email" className="block text-xs font-semibold text-charcoal">
                      Work Email <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="section_email"
                        name="email"
                        type="email"
                        required
                        value={values.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        placeholder="sagar@company.com"
                        aria-invalid={touched.email && !!errors.email ? "true" : "false"}
                        aria-describedby={touched.email && errors.email ? "section_email-error" : undefined}
                        className={`w-full rounded-md border px-3 py-2 pl-9 text-sm focus:outline-none focus:ring-1 bg-white text-charcoal focus:border-primary focus:ring-primary ${
                          touched.email && errors.email ? "border-red-500" : "border-slate-200"
                        }`}
                      />
                      <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                    </div>
                    {touched.email && errors.email && (
                      <p id="section_email-error" className="text-red-500 text-[11px]" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1">
                    <label htmlFor="section_company" className="block text-xs font-semibold text-charcoal">
                      Company
                    </label>
                    <div className="relative">
                      <input
                        id="section_company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        onBlur={() => handleBlur("company")}
                        placeholder="MakeMyCampaign (MMC)"
                        aria-invalid={touched.company && !!errors.company ? "true" : "false"}
                        aria-describedby={touched.company && errors.company ? "section_company-error" : undefined}
                        className={`w-full rounded-md border px-3 py-2 pl-9 text-sm focus:outline-none focus:ring-1 bg-white text-charcoal focus:border-primary focus:ring-primary ${
                          touched.company && errors.company ? "border-red-500" : "border-slate-200"
                        }`}
                      />
                      <Building className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                    </div>
                    {touched.company && errors.company && (
                      <p id="section_company-error" className="text-red-500 text-[11px]" role="alert">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Industry Select */}
                  <div className="space-y-1">
                    <label htmlFor="section_industry" className="block text-xs font-semibold text-charcoal">
                      Industry <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="section_industry"
                        name="industry"
                        value={values.industry}
                        onChange={(e) => handleChange("industry", e.target.value)}
                        onBlur={() => handleBlur("industry")}
                        aria-invalid={touched.industry && !!errors.industry ? "true" : "false"}
                        aria-describedby={touched.industry && errors.industry ? "section_industry-error" : undefined}
                        className={`w-full rounded-md border px-3 py-2 pl-9 text-sm text-charcoal focus:outline-none focus:ring-1 bg-white focus:border-primary focus:ring-primary ${
                          touched.industry && errors.industry ? "border-red-500" : "border-slate-200"
                        }`}
                      >
                        <option disabled value="Select Industry">Select Industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                      <HelpCircle className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400 pointer-events-none" aria-hidden="true" />
                    </div>
                    {touched.industry && errors.industry && (
                      <p id="section_industry-error" className="text-red-500 text-[11px]" role="alert">
                        {errors.industry}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message text */}
                <div className="space-y-1">
                  <label htmlFor="section_message" className="block text-xs font-semibold text-charcoal">
                    Message <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="section_message"
                    name="message"
                    required
                    value={values.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    placeholder="How can we help you?"
                    rows={4}
                    aria-invalid={touched.message && !!errors.message ? "true" : "false"}
                    aria-describedby={touched.message && errors.message ? "section_message-error" : undefined}
                    className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 bg-white text-charcoal resize-none focus:border-primary focus:ring-primary ${
                      touched.message && errors.message ? "border-red-500" : "border-slate-200"
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p id="section_message-error" className="text-red-500 text-[11px]" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-md bg-primary hover:bg-primary-hover py-3 text-xs font-semibold text-white shadow-md shadow-primary/20 transition-all cursor-pointer font-sans focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-accent" aria-hidden="true" />
                        Sending your message...
                      </>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                        Submit Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
