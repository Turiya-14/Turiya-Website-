import { getClientLogoPath } from "../data/clientData";

interface ClientLogoProps {
  name: string;
  className?: string;
}

export default function ClientLogo({ name, className = "h-12 w-auto" }: ClientLogoProps) {
  const logoSrc = getClientLogoPath(name);

  if (logoSrc) {
    // Drishtee's logo is white-on-navy, so it sits on its brand-colour plate
    if (logoSrc.includes("drishtee")) {
      return (
        <div className="drishtee-logo-frame">
          <img src={logoSrc} alt="Drishtee logo" decoding="async" />
        </div>
      );
    }
    return (
      <img
        src={logoSrc}
        alt={`${name} logo`}
        className={`${className} object-contain`}
        decoding="async"
      />
    );
  }

  // Text badge for clients without a logo file
  return (
    <div className="flex flex-col items-center justify-center p-2.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-100 rounded-lg group cursor-default transition-all duration-200">
      <span className="font-display font-extrabold text-xs text-slate-700 tracking-wide group-hover:text-primary transition-colors text-center uppercase">
        {name}
      </span>
    </div>
  );
}
