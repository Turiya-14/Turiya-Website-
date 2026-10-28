import { ArrowLeft } from "lucide-react";

interface NotFoundPageProps {
  onNavigate: (view: string) => void;
}

export default function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="pt-16 pb-28 bg-warm-bg text-center font-sans" id="not-found-page">
      <div className="mx-auto max-w-xl px-6 space-y-5">
        <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-mono">Error 404</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary font-display">
          We couldn't find that page
        </h1>
        <p className="text-grey text-sm sm:text-base leading-relaxed">
          The link may be outdated or the address may have a typo. Head back to the homepage or get in touch and we'll point you in the right direction.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary hover:bg-primary-hover px-6 py-3 text-xs font-bold text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </button>
          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className="rounded-md border border-primary/25 text-primary hover:bg-primary/5 px-6 py-3 text-xs font-bold transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
