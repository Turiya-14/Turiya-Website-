import ContactHeader from "./contact/ContactHeader";
import ContactDirectConnect from "./contact/ContactDirectConnect";
import ContactForm from "./contact/ContactForm";

export default function ContactPage() {
  return (
    <div id="contact-main" className="pt-10 pb-16 md:pt-16 md:pb-24 bg-warm-bg text-left font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ContactHeader />

        {/* Direct contact details (left) and enquiry form (right) */}
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          <ContactDirectConnect />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
