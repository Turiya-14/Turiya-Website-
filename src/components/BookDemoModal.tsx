import { useState, useEffect, useRef, FormEvent } from "react";
import { X, Calendar, Clock, CheckCircle2, ChevronRight, Building2, User, Mail, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DemoBookingData } from "../types";
import TuriyaLogo from "./TuriyaLogo";
import { submitForm, FORM_FALLBACK_MESSAGE } from "../utils/submitForm";
import { logger } from "../utils/logger";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOLUTIONS = [
  "WhatsApp Business API",
  "Bulk SMS & OTP Gateway",
  "Conversational AI Chatbots",
  "Custom Software Development",
  "Enterprise Web Applications"
];

const TIME_SLOTS = [
  "09:00 AM - 09:30 AM",
  "10:00 AM - 10:30 AM",
  "11:30 AM - 12:00 PM",
  "02:00 PM - 02:30 PM",
  "03:30 PM - 04:00 PM",
  "05:00 PM - 05:30 PM"
];

// Local YYYY-MM-DD (toISOString would shift the date across the UTC boundary)
const toLocalDateKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

// Next 7 calendar days, weekdays only
const getUpcomingWeekdays = () => {
  const days: Date[] = [];
  const today = new Date();
  for (let i = 1; i <= 7; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() + i);
    if (day.getDay() !== 0 && day.getDay() !== 6) days.push(day);
  }
  return days;
};

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedSolution, setSelectedSolution] = useState<string>(SOLUTIONS[0]);
  const [formData, setFormData] = useState<Omit<DemoBookingData, "solutions">>({
    name: "",
    email: "",
    company: "",
    date: toLocalDateKey(getUpcomingWeekdays()[0]),
    timeSlot: TIME_SLOTS[0],
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  // Prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap, Escape close, and Focus recovery
  useEffect(() => {
    if (isOpen) {
      lastActiveElementRef.current = document.activeElement as HTMLElement;

      const timer = setTimeout(() => {
        if (modalRef.current) {
          const focusable = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length > 0) {
            (focusable[0] as HTMLElement).focus();
          } else {
            modalRef.current.focus();
          }
        }
      }, 100);

      return () => clearTimeout(timer);
    } else {
      if (lastActiveElementRef.current) {
        lastActiveElementRef.current.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        if (!modalRef.current) return;
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setSubmitError("Please fill out all required fields.");
      return;
    }
    setIsSubmitting(true);
    setSubmitError("");
    try {
      await submitForm("demo-request", {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        solution: selectedSolution,
        date: formData.date,
        timeSlot: formData.timeSlot,
        notes: formData.notes || ""
      });
      setStep(3);
    } catch (err) {
      logger.error("Demo request submission failed", err);
      setSubmitError(FORM_FALLBACK_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const availableDays = getUpcomingWeekdays();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            aria-describedby="demo-modal-description"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100 focus:outline-none"
            id="demo-modal-container"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50/50">
              <div className="flex items-center gap-2">
                <TuriyaLogo variant="icon" iconClassName="h-8 w-8" />
                <div>
                  <h3 id="demo-modal-title" className="font-semibold text-slate-950">Book a Technical Demo</h3>
                  <p id="demo-modal-description" className="text-xs text-slate-500">Discover what Turiya can do for you</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                id="close-demo-modal"
                aria-label="Close modal dialog"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Steps indicator */}
            {step < 3 && (
              <div className="flex bg-slate-50 border-b border-slate-100 px-6 py-2 text-xs font-medium text-slate-500 justify-between">
                <span className={step === 1 ? "text-primary font-semibold" : ""}>
                  1. Choose Solution
                </span>
                <ChevronRight className="h-3 w-3 self-center text-slate-300" aria-hidden="true" />
                <span className={step === 2 ? "text-primary font-semibold" : ""}>
                  2. Select Date & Contact Info
                </span>
              </div>
            )}

            {/* Body */}
            <div className="p-6">
              {step === 1 && (
                <div className="space-y-4">
                  <div id="solutions-group-label" className="block text-sm font-medium text-slate-700">
                    Which solution are you interested in?
                  </div>
                  <div className="grid gap-2" role="group" aria-labelledby="solutions-group-label">
                    {SOLUTIONS.map((sol) => (
                      <button
                        key={sol}
                        type="button"
                        onClick={() => setSelectedSolution(sol)}
                        aria-pressed={selectedSolution === sol}
                        className={`flex items-center justify-between rounded-xl border p-3 text-left transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                          selectedSolution === sol
                            ? "border-primary bg-primary/5 text-primary ring-2 ring-primary/20 font-medium"
                            : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                        }`}
                      >
                        <span className="text-sm">{sol}</span>
                        {selectedSolution === sol && (
                          <CheckCircle2 className="h-4 w-4 text-primary fill-primary/10" aria-hidden="true" />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 hover:bg-primary-hover transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      id="next-step-demo"
                    >
                      Continue
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <div id="demo-date-label" className="block text-xs font-semibold text-slate-600 mb-1">
                        Select Date
                      </div>
                      <div className="grid grid-cols-5 gap-1" role="group" aria-labelledby="demo-date-label">
                        {availableDays.map((day) => {
                          const dateStr = toLocalDateKey(day);
                          const isSelected = formData.date === dateStr;
                          const formattedLabel = day.toLocaleDateString("en-US", {
                            weekday: "short",
                            day: "numeric"
                          });
                          return (
                            <button
                              key={dateStr}
                              type="button"
                              onClick={() => setFormData({ ...formData, date: dateStr })}
                              aria-pressed={isSelected}
                              className={`rounded-lg border py-1.5 text-center text-[11px] font-medium leading-tight transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary ${
                                isSelected
                                  ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                                  : "border-slate-200 hover:border-slate-300 text-slate-700"
                              }`}
                            >
                              <div>{formattedLabel.split(" ")[0]}</div>
                              <div className="text-xs font-bold">{formattedLabel.split(" ")[1]}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="demo-timeSlot" className="block text-xs font-semibold text-slate-600 mb-1">
                        Available Time Slots
                      </label>
                      <div className="relative">
                        <select
                          id="demo-timeSlot"
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                          {TIME_SLOTS.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                        <Clock className="absolute right-3 top-2.5 h-3.5 w-3.5 text-slate-400 pointer-events-none" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label htmlFor="demo-name" className="block text-xs font-semibold text-slate-600 mb-1">
                        Full Name <span className="text-primary" aria-hidden="true">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="demo-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Sagar Shelar"
                          className="w-full rounded-lg border border-slate-200 px-3 py-2 pl-9 text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        />
                        <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="demo-email" className="block text-xs font-semibold text-slate-600 mb-1">
                        Work Email <span className="text-primary" aria-hidden="true">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="demo-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sagar@company.com"
                          className="w-full rounded-lg border border-slate-200 px-3 py-2 pl-9 text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        />
                        <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="demo-company" className="block text-xs font-semibold text-slate-600 mb-1">
                        Company Name <span className="text-primary" aria-hidden="true">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="demo-company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="MakeMyCampaign (MMC)"
                          className="w-full rounded-lg border border-slate-200 px-3 py-2 pl-9 text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        />
                        <Building2 className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="demo-notes" className="block text-xs font-semibold text-slate-600 mb-1 text-slate-500">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        id="demo-notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us about your needs..."
                        rows={2}
                        className="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      />
                    </div>
                  </div>

                  {submitError && (
                    <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-xs flex items-start gap-2" role="alert">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-primary/20 hover:bg-primary-hover transition-colors disabled:opacity-75 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      id="submit-demo-booking"
                    >
                      {isSubmitting && <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />}
                      {isSubmitting ? "Sending request..." : "Request Demo Call"}
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className="text-center py-6 space-y-4" role="status" aria-live="polite">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 ring-8 ring-emerald-500/5">
                    <CheckCircle2 className="h-10 w-10 stroke-[2]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Demo Request Received!</h3>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                      We'll email <span className="font-semibold text-slate-700">{formData.email}</span> to confirm your slot and share the meeting link.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-left text-xs space-y-2.5 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Solution:</span>
                      <span className="font-semibold text-slate-800">{selectedSolution}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Requested slot:</span>
                      <span className="font-semibold text-slate-800 flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-primary" aria-hidden="true" /> {formData.date} at {formData.timeSlot.split(" - ")[0]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Company:</span>
                      <span className="font-semibold text-slate-800">{formData.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Duration:</span>
                      <span className="font-semibold text-slate-800">30 minutes</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        setStep(1);
                      }}
                      className="w-full rounded-lg bg-slate-900 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Done
                    </button>
                    <p className="text-[10px] text-slate-400">
                      Need a different time? Just reply to our confirmation email.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
