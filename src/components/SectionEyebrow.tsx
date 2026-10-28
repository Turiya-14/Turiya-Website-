import { motion } from "motion/react";

interface SectionEyebrowProps {
  label: string;
  number?: string; // Accepted for backward compatibility, but ignored to fully remove numbers
  className?: string; // Standard alignment classes
  labelColorClass?: string; // For customization/reusability
  dividerColorClass?: string; // Ignored in the new design (no dividers)
}

export default function SectionEyebrow({
  label,
  className = "",
  labelColorClass = "text-primary" // Deep primary brand purple
}: SectionEyebrowProps) {
  // Determine if parent is center-aligned
  const isCentered = className.includes("justify-center") || className.includes("text-center") || className.includes("mx-auto");
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`flex items-center gap-2.5 ${isCentered ? "justify-center" : "justify-start"} w-full mb-6 font-sans ${className}`}
    >
      {/* Brand Orange Bullet */}
      <motion.span
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] lg:w-[7.5px] lg:h-[7.5px] rounded-full bg-orange-accent shrink-0 -translate-y-[0.5px]"
        style={{ transformOrigin: "center" }}
      />
      
      {/* Section Label Text */}
      <span
        className={`text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.22em] ${labelColorClass} select-none leading-none`}
      >
        {label}
      </span>
    </motion.div>
  );
}
