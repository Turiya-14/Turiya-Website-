/**
 * Sends a website form submission.
 *
 * Default: Netlify Forms. The matching hidden form definitions live in index.html so
 * Netlify detects them at deploy time; submissions appear under Site → Forms, where
 * email notifications to business@turiyainfotech.com can be switched on.
 *
 * Other hosts: set VITE_FORM_ENDPOINT at build time to any JSON form backend
 * (e.g. Formspree, Web3Forms, Getform) and submissions are POSTed there instead.
 */
type FormName = "contact" | "demo-request";

const CUSTOM_ENDPOINT: string | undefined = import.meta.env.VITE_FORM_ENDPOINT;

export async function submitForm(formName: FormName, fields: Record<string, string>): Promise<void> {
  const payload = { "form-name": formName, ...fields };

  const response = CUSTOM_ENDPOINT
    ? await fetch(CUSTOM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      })
    : await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString()
      });

  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }
}

export const FORM_FALLBACK_MESSAGE =
  "We couldn't send your message right now. Please email business@turiyainfotech.com or WhatsApp +91 70202 62435 and we'll respond quickly.";
