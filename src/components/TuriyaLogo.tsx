import { motion } from "motion/react";

interface TuriyaLogoProps {
  variant?: "full" | "icon" | "footer";
  className?: string;
  iconClassName?: string;
}

export default function TuriyaLogo({
  variant = "full",
  className = "",
  iconClassName = "h-8"
}: TuriyaLogoProps) {
  // Respect the 10-15% size reduction and SaaS minimalist look
  let sizeClass = iconClassName;
  
  // If the user specified a large height, map it to a sleeker height
  if (sizeClass.includes("h-11") || sizeClass.includes("h-12")) {
    sizeClass = sizeClass.replace(/h-(11|12)/, "h-9");
  } else if (sizeClass.includes("h-10")) {
    sizeClass = sizeClass.replace("h-10", "h-8.5");
  }

  // Filter out any hardcoded width classes to prevent squashing
  const cleanedIconClassName = sizeClass
    .split(" ")
    .filter((c) => !c.startsWith("w-"))
    .join(" ") + " w-auto object-contain";

  // Minimalist Premium SaaS Hover: slight scale 1.02, smooth transition, no translation, no glow, no bounce
  const hoverAnimation = {
    scale: 1.02,
    transition: { 
      duration: 0.2, 
      ease: "easeInOut" as const
    }
  };

  const tapAnimation = {
    scale: 0.98,
    transition: { duration: 0.1 }
  };

  // Icon only variant: Cropping the SVG's left 23% part (icon) and hiding the text part using pure CSS object-position
  if (variant === "icon") {
    // Standardize height for icon
    const hClass = sizeClass.match(/h-\[?[a-zA-Z0-9.%]+\]?/) ? sizeClass.match(/h-\[?[a-zA-Z0-9.%]+\]?/)?.[0] : "h-8";
    
    return (
      <motion.div 
        className={`inline-flex items-center justify-center overflow-hidden cursor-pointer ${hClass} aspect-[1000/1340] ${className}`}
        id="turiya-icon-logo"
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
      >
        <img
          src="/turiya-logo.svg"
          alt="Turiya"
          className="h-full w-full object-cover object-left"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    );
  }

  // Footer logo variant: cleanly presented inside a minimalist card
  if (variant === "footer") {
    return (
      <motion.div 
        className={`inline-flex items-center bg-white px-3.5 py-2 rounded-lg border border-slate-200/50 cursor-pointer ${className}`} 
        id="turiya-footer-logo"
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
      >
        <img
          src="/turiya-logo.svg"
          alt="Turiya Infotech"
          className="h-7 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    );
  }

  // Default / Full brand logo: renders icon + text unified perfectly
  return (
    <motion.div 
      className={`inline-flex items-center cursor-pointer ${className}`} 
      id="turiya-brand-logo"
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
    >
      <img
        src="/turiya-logo.svg"
        alt="Turiya Infotech"
        className={cleanedIconClassName}
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}

