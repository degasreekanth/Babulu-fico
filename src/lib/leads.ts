import { isSupabaseConfigured, supabase } from "./supabase";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  mode: string;
  message: string;
};

// Paste a deployed Google Apps Script web app URL here to store every demo
// request in a Google Sheet. VITE_LEAD_WEBHOOK_URL takes precedence when set.
const DEFAULT_LEAD_WEBHOOK_URL = "";

const LEAD_WEBHOOK_URL = (
  import.meta.env.VITE_LEAD_WEBHOOK_URL || DEFAULT_LEAD_WEBHOOK_URL
).trim();

export function hasLeadWebhook() {
  return LEAD_WEBHOOK_URL.length > 0;
}

export function isLeadDeliveryConfigured() {
  return hasLeadWebhook() || isSupabaseConfigured();
}

export function buildGmailComposeUrl(lead: LeadPayload, to: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
    su: `New Free Demo Request — ERPWorld`,
    body: [
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Phone / WhatsApp: ${lead.phone}`,
      `Interested In: ${lead.interest || "Not specified"}`,
      `Preferred Mode: ${lead.mode || "Not specified"}`,
      "",
      `Message: ${lead.message || "N/A"}`,
    ].join("\n"),
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export async function submitLead(lead: LeadPayload) {
  if (hasLeadWebhook()) {
    // Google Apps Script web apps do not answer CORS preflights, so send a
    // simple text/plain request and treat an opaque response as delivered.
    await fetch(LEAD_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        ...lead,
        source: "erpworld-website",
        submittedAt: new Date().toISOString(),
      }),
      keepalive: true,
    });
    return "sheet" as const;
  }

  if (isSupabaseConfigured() && supabase) {
    const { error } = await supabase.from("contact_inquiries").insert({
      name: lead.name,
      email: lead.email,
      phone: lead.phone || null,
      company: lead.mode || null,
      service: lead.interest || null,
      message: lead.message || "No additional message",
    });
    if (error) throw new Error(error.message);
    return "supabase" as const;
  }

  return "none" as const;
}
