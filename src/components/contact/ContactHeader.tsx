import SectionEyebrow from "../SectionEyebrow";

export default function ContactHeader() {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
      <SectionEyebrow label="Get in Touch" className="justify-center" />
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary font-display">
        Let's Build Your Digital Communication System
      </h1>
      <p className="text-slate-800 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
        Whether you want to run WhatsApp campaigns, send SMS alerts, launch RCS communication, build a chatbot, develop healthcare software, or create a custom business application, Turiya Infotech can help you build the right solution.
      </p>
    </div>
  );
}
