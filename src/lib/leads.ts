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

const LEAD_EMAIL = "erpwondersapfi@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${LEAD_EMAIL}`;

export function hasLeadWebhook() {
  return LEAD_WEBHOOK_URL.length > 0;
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
        source: "erpwonder-website",
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

  // Default delivery: FormSubmit emails the enquiry without leaving the page.
  // Its first request emails a one-time activation link to LEAD_EMAIL.
  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      interest: lead.interest || "Not specified",
      mode: lead.mode || "Not specified",
      message: lead.message || "No additional message",
      _subject: `New Free Demo Request — ${lead.name}`,
      _replyto: lead.email,
      _template: "table",
      _captcha: "false",
    }),
  });
  if (!response.ok) {
    throw new Error(`Lead delivery failed with status ${response.status}`);
  }
  const result = (await response.json().catch(() => null)) as {
    success?: string;
  } | null;
  if (result && String(result.success) !== "true") {
    throw new Error("Lead delivery was rejected");
  }
  return "email" as const;
}
