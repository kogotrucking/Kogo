// Vercel Serverless Function — Node runtime
// Receives the contact form payload and sends it via Resend.
// Set RESEND_API_KEY (and optionally CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL)
// in the Vercel project's Environment Variables.

import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  mcNumber: z.string().trim().min(1, "MC Number is required").max(50),
  truck: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2000),
});

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body: unknown = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: "Invalid JSON body" });
    }
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
  }
  const data = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "Email service is not configured. RESEND_API_KEY is missing.",
    });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "kogotrucking@gmail.com";
  
  // Since the user attached their own domain to Resend, sending FROM a verified domain is much better for deliverability.
  // Using onboarding@resend.dev works only if sending to the registered email in Resend, but providing a custom from email ensures it uses their custom domain properly.
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "KOGO Contact <noreply@kogodispatchers.com>"; // assuming their domain is kogodispatchers.com. It's safe to use onboarding@resend.dev fallback if they haven't verified a specific from-address, but Resend prefers using your own domain like noreply@yourdomain.com

  const html = `
    <h2>New Contact Form Submission — KOGO Dispatchers</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
      <tr><td style="padding:6px 12px;font-weight:bold;">Name:</td><td style="padding:6px 12px;">${escapeHtml(data.name)}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Email:</td><td style="padding:6px 12px;">${escapeHtml(data.email)}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Phone:</td><td style="padding:6px 12px;">${escapeHtml(data.phone || "—")}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">MC Number:</td><td style="padding:6px 12px;">${escapeHtml(data.mcNumber || "—")}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Truck Type:</td><td style="padding:6px 12px;">${escapeHtml(data.truck || "—")}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;vertical-align:top;">Message:</td><td style="padding:6px 12px;white-space:pre-wrap;">${escapeHtml(data.message)}</td></tr>
    </table>
  `;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.email,
        subject: `New contact: ${data.name}${data.truck ? ` (${data.truck})` : ""}`,
        html,
      }),
    });

    if (!r.ok) {
      const errText = await r.text();
      console.error("Resend error:", r.status, errText);
      return res.status(502).json({ error: `Failed to send email (${r.status})` });
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return res.status(500).json({ error: err?.message || "Unexpected error" });
  }
}
