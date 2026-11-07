import { useState, useCallback } from "react";

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
  /** Called with valid values, synchronously inside the submit event (needed to open WhatsApp). */
  onSubmit: (values: ContactFormValues) => void;
}

export function useContactForm({
  initialValues,
  validateOnBlur = true,
  onSubmit
}: UseContactFormOptions) {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const validateField = useCallback((field: keyof ContactFormValues, val: string | undefined): string => {
    const strVal = (val || "").toString().trim();
    
    switch (field) {
      case "fullName":
        if (!strVal) return "Full name is required.";
        if (strVal.length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email": {
        if (!strVal) return ""; // Optional: the enquiry arrives on WhatsApp
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(strVal)) return "Please enter a valid email address.";
        return "";
      }
      case "mobile": {
        if (!strVal) return ""; // Optional: WhatsApp already shows the sender's number
        const digits = strVal.replace(/\D/g, "");
        if (digits.length < 10) return "Please enter a valid mobile number with at least 10 digits.";
        return "";
      }
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
    setSubmitStatus("idle");
  }, [initialValues]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<Record<keyof ContactFormValues, string>> = {};
    (Object.keys(values) as (keyof ContactFormValues)[]).forEach((field) => {
      const error = validateField(field, values[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const touchedAll: Partial<Record<keyof ContactFormValues, boolean>> = {};
      (Object.keys(values) as (keyof ContactFormValues)[]).forEach((field) => {
        touchedAll[field] = true;
      });
      setTouched(touchedAll);
      // Move focus to the first invalid field for keyboard and screen-reader users
      const form = e.currentTarget as HTMLFormElement;
      requestAnimationFrame(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }

    setErrors({});
    onSubmit(values);
    setSubmitStatus("success");
  }, [values, validateField, onSubmit]);

  return {
    values,
    errors,
    touched,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  };
}
