/**
 * Website enquiries are sent straight to Turiya's WhatsApp: the form builds a ready-made
 * message and opens WhatsApp (app on phones, WhatsApp Web on desktop) with it pre-filled.
 * The visitor only has to tap Send. No server, database or form service is involved.
 */
const WHATSAPP_NUMBER = "917020262435";

/** Builds a wa.me link with the message pre-filled. */
function whatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats an enquiry as a WhatsApp message. Empty fields are left out.
 * WhatsApp renders *text* as bold and _text_ as italic.
 */
export function buildEnquiryMessage(
  title: string,
  fields: [label: string, value: string | undefined][],
  message?: string
): string {
  const lines = [`*${title}*`, ""];
  for (const [label, value] of fields) {
    const clean = value?.trim();
    if (clean) lines.push(`*${label}:* ${clean}`);
  }
  if (message?.trim()) lines.push("", "*Message:*", message.trim());
  lines.push("", "_Sent from turiyainfotech.com_");
  return lines.join("\n");
}

/**
 * Opens WhatsApp with the message. Must be called directly from a click/submit handler
 * so browsers don't treat the new tab as a pop-up.
 */
export function openWhatsApp(message: string): string {
  const url = whatsAppLink(message);
  const win = window.open(url, "_blank");
  if (win) {
    win.opener = null;
  } else {
    // Pop-up blocked: open in the same tab instead
    window.location.href = url;
  }
  return url;
}
