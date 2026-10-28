import { Zap, ShieldCheck, AreaChart, Smile, Activity, Server, Clock, Briefcase, ShieldAlert } from "lucide-react";

export default function WhyChooseUs() {
  const highlights = [
    {
      id: "fast",
      title: "Fast Deployment",
      desc: "Go live in days. Our APIs are ready for immediate scale.",
      icon: Zap,
      color: "text-accent bg-accent/10"
    },
    {
      id: "security",
      title: "Compliant Security",
      desc: "Secure transmission that complies with global data protection standards.",
      icon: ShieldCheck,
      color: "text-primary bg-primary/10"
    },
    {
      id: "analytics",
      title: "Detailed Analytics",
      desc: "Track real-time delivery rates and customer engagement metrics.",
      icon: AreaChart,
      color: "text-accent bg-accent/10"
    },
    {
      id: "business",
      title: "Business-Focused",
      desc: "Tools built to simplify business workflows.",
      icon: Briefcase,
      color: "text-primary bg-primary/10"
    },
    {
      id: "support",
      title: "24/7 Support",
      desc: "Technical assistance is available around the clock.",
      icon: ShieldAlert,
      color: "text-accent bg-accent/10"
    }
  ];

  const stats = [
    { label: "Clients Served", val: "100+", icon: Smile, color: "text-primary bg-primary/5" },
    { label: "Uptime Guarantee", val: "99.9%", icon: Server, color: "text-accent bg-accent/10" },
    { label: "Messages Delivered", val: "50 Million+", icon: Activity, color: "text-primary bg-primary/5" },
    { label: "Support Resolution", val: "24/7", icon: Clock, color: "text-accent bg-accent/10" }
  ];

  return (
    <section className="py-16 md:py-24 bg-warm-bg border-y border-border-subtle" id="why-us-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column - Narratives */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3 font-sans">
              <h2 className="text-3xl font-semibold tracking-tight text-primary font-display">
                Why Businesses Trust Us
              </h2>
              <p className="text-grey text-base leading-relaxed max-w-xl">
                We build reliable, compliant messaging tools that grow with your business.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex gap-4 items-start group font-sans">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-md ${item.color} flex-shrink-0 transition-transform group-hover:scale-105 shadow-xs`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-bold text-charcoal text-sm sm:text-base group-hover:text-primary transition-colors font-display">
                        {item.title}
                      </h3>
                      <p className="text-grey text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 lg:pl-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-border-subtle p-6 rounded-md flex flex-col justify-between items-center text-center shadow-xs hover:shadow-md transition-shadow h-[140px]"
                >
                  <span className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${stat.color}`}>
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  
                  <div className="space-y-0.5 font-sans">
                    <div className="text-2xl sm:text-3xl font-black text-primary tracking-tight font-display">
                      {stat.val}
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-grey uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
