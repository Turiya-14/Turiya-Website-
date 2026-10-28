import ClientLogo from "./ClientLogo";
import SectionEyebrow from "./SectionEyebrow";
import { MARQUEE_BRANDS } from "../data/clientData";

export default function ClientMarquee() {
  // We duplicate the list to ensure infinite, seamless scrolling
  const marqueeItems = [...MARQUEE_BRANDS, ...MARQUEE_BRANDS];

  const stats = [
    { value: "100+", label: "Business Clients" },
    { value: "50 Million+", label: "Messages Delivered" },
    { value: "10+", label: "Industries Served" },
    { value: "99.9%", label: "Platform Uptime" }
  ];

  return (
    <div className="w-full bg-white relative">
      {/* Dynamic Style injection for highly optimized, GPU-accelerated marquee animation */}
      <style>{`
        @keyframes custom-marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-custom-marquee {
          animation: custom-marquee 48s linear infinite;
        }
        .custom-marquee-container:hover .animate-custom-marquee {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-custom-marquee {
            animation: none !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            transform: none !important;
          }
          .custom-marquee-container {
            overflow: visible !important;
          }
        }
      `}</style>

      {/* Margins & Content Spacing */}
      <div className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SectionEyebrow number="02" label="Client Ecosystem" className="justify-center" />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#3A0E5C] font-display">
            Trusted by Organizations Across Industries
          </h2>
          <p className="text-[#6B6478] text-xs sm:text-sm font-sans font-medium max-w-2xl mx-auto leading-relaxed">
            Businesses across healthcare, education, retail, manufacturing, and enterprises trust Turiya Infotech for reliable, secure, and enterprise-grade communication solutions.
          </p>
        </div>

        {/* Marquee Outer Wrapper with Fade Masks on Left and Right Edges */}
        <div className="relative w-full overflow-hidden py-10 select-none custom-marquee-container">
          
          {/* Subtle Linear Gradient Fade Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Lane */}
          <div className="flex w-max hover:[&>div]:[animation-play-state:paused]">
            <div className="flex items-start gap-16 sm:gap-20 md:gap-24 px-6 sm:px-8 animate-custom-marquee will-change-transform">
              {marqueeItems.map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="group flex flex-col items-center justify-center text-center transition-all duration-300 cursor-default w-40 sm:w-48 md:w-56"
                  title={`${brand.name} (${brand.category})`}
                  aria-hidden={index >= MARQUEE_BRANDS.length ? true : undefined}
                >
                  {/* Logo Container (Increased in size by ~35%) */}
                  <div className="h-16 sm:h-20 md:h-24 w-full flex items-center justify-center filter grayscale opacity-70 contrast-[0.85] group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 group-hover:scale-[1.05] transition-all duration-300 ease-out">
                    <ClientLogo 
                      name={brand.name} 
                      className="h-full w-auto max-w-full max-h-12 sm:max-h-16 md:max-h-20 object-contain" 
                    />
                  </div>

                  {/* Company Details */}
                  <div className="mt-4 space-y-0.5 pointer-events-none transition-all duration-300 group-hover:translate-y-0.5">
                    <p className="text-sm sm:text-base font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-300 line-clamp-1">
                      {brand.name}
                    </p>
                    <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                      {brand.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Static Trust Statistics Block */}
        <div className="mt-20 border-t border-slate-100 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="space-y-1 p-4 bg-slate-50/40 rounded-2xl border border-slate-100/50 hover:bg-[#F3E9FF]/10 hover:border-[#6B21A8]/10 transition-colors duration-300"
              >
                <div className="flex items-center justify-center gap-1.5">
                  <p className="text-xl sm:text-2xl font-black text-[#3A0E5C] font-sans tracking-tight">
                    {stat.value}
                  </p>
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-[#6B6478] uppercase tracking-wider font-mono">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
