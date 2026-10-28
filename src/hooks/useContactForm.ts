import { useState, useCallback, useEffect } from "react";
import { logger } from "../utils/logger";
import { FORM_FALLBACK_MESSAGE } from "../utils/submitForm";

interface ContactFormValues {
  fullName: string;
  email: string;
  company: string;
  mobile?: string;
  serviceRequired?: string;
  industry: string;
  message: string;
}

interface UseContactFormOptions {
  initialValues: ContactFormValues;
  validateOnBlur?: boolean;
  /** Resolves when the submission was accepted; throws on failure. */
  onSubmit: (values: ContactFormValues) => Promise<void>;
}

export function useContactForm({
  initialValues,
  validateOnBlur = true,
  onSubmit
}: UseContactFormOptions) {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues | "captcha" | "global", string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");

  // Captcha State
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0 });
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const generateCaptcha = useCallback(() => {
    const num1 = Math.floor(Math.random() * 8) + 2; // 2 to 9
    const num2 = Math.floor(Math.random() * 7) + 1; // 1 to 7
    setCaptchaQuestion({ num1, num2 });
    setCaptchaAnswer("");
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const validateField = useCallback((field: keyof ContactFormValues, val: string | undefined): string => {
    const strVal = (val || "").toString().trim();
    
    switch (field) {
      case "fullName":
        if (!strVal) return "Full name is required.";
        if (strVal.length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email":
        if (!strVal) return "Email address is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(strVal)) return "Please enter a valid email address.";
        return "";
      case "mobile":
        if (val === undefined) return ""; // Optional if not part of initialValues
        if (!strVal) return "Mobile number is required.";
        const digits = strVal.replace(/\D/g, "");
        if (digits.length < 10) return "Please enter a valid mobile number with at least 10 digits.";
        return "";
      case "company":
        if (!strVal) return ""; // Optional
        if (strVal.length < 2) return "Company name must be at least 2 characters.";
        return "";
      case "industry":
        if (!strVal || strVal === "Select Industry") return "Please select a valid industry.";
        return "";
      case "message":
        if (!strVal) return "Message is required.";
        if (strVal.length < 10) return "Message must be at least 10 characters.";
        return "";
      default:
        return "";
    }
  }, []);

  const handleChange = useCallback((field: keyof ContactFormValues, value: string) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }));
    // Functional update keeps this callback stable, so effects depending on it don't re-run
    setErrors(prev => (prev[field] ? { ...prev, [field]: "" } : prev));
  }, []);

  const handleBlur = useCallback((field: keyof ContactFormValues) => {
    if (!validateOnBlur) return;
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, values[field]);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  }, [validateOnBlur, validateField, values]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setSubmitStatus("idle");
    setHoneypot("");
    generateCaptcha();
  }, [initialValues, generateCaptcha]);

  const handleSubmit = useCallback(async (e: React.FormEvent, requiresCaptcha = false) => {
    e.preventDefault();

    // Prevent duplicate submission and double clicks
    if (isSubmitting) return;

    // Spam check: Honeypot field must be empty
    if (honeypot) {
      logger.warn("Spam submission blocked.");
      // Pretend to succeed so the bot doesn't retry
      setSubmitStatus("success");
      return;
    }

    // Validate all fields
    const newErrors: Partial<Record<keyof ContactFormValues | "captcha" | "global", string>> = {};
    let hasErrors = false;

    Object.keys(values).forEach((key) => {
      const field = key as keyof ContactFormValues;
      const error = validateField(field, values[field]);
      if (error) {
        newErrors[field] = error;
        hasErrors = true;
      }
    });

    // Captcha Validation
    if (requiresCaptcha) {
      const expectedAnswer = captchaQuestion.num1 + captchaQuestion.num2;
      const parsedAnswer = parseInt(captchaAnswer.trim(), 10);
      if (isNaN(parsedAnswer) || parsedAnswer !== expectedAnswer) {
        newErrors.captcha = "Verification sum is incorrect. Please try again.";
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setErrors(newErrors);
      // Touch all fields to show validation on UI
      const touchedAll: Partial<Record<keyof ContactFormValues, boolean>> = {};
      Object.keys(values).forEach((key) => {
        touchedAll[key as keyof ContactFormValues] = true;
      });
      setTouched(touchedAll);
      
      // Find first error and focus on it for accessibility
      const firstErrorField = Object.keys(newErrors)[0];
      if (firstErrorField) {
        const inputElement = document.getElementById(firstErrorField === "captcha" ? "captcha_input" : firstErrorField);
        if (inputElement) {
          inputElement.focus();
        }
      }
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await onSubmit(values);
      setSubmitStatus("success");
    } catch (err) {
      logger.error("Contact form submission failed", err);
      setSubmitStatus("error");
      setErrors(prev => ({
        ...prev,
        global: FORM_FALLBACK_MESSAGE
      }));
    } finally {
      setIsSubmitting(false);
    }
  }, [values, isSubmitting, honeypot, validateField, captchaQuestion, captchaAnswer, onSubmit]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    honeypot,
    setHoneypot,
    captchaQuestion,
    captchaAnswer,
    setCaptchaAnswer,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  };
}
