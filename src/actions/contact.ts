import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { company } from "@/data/products";

export const contactEnquirySchema = z.object({
  fullName: z.string().trim().min(2, "Full Name is required"),
  organisation: z.string().trim().min(2, "Organisation is required"),
  email: z.string().trim().email("Valid email address is required"),
  phone: z.string().trim().optional().default(""),
  enquiryType: z.string().min(1, "Enquiry type is required"),
  message: z.string().trim().min(5, "Message must be at least 5 characters"),
});

export type ContactEnquiryInput = z.infer<typeof contactEnquirySchema>;

export interface ContactEnquiryResponse {
  success: boolean;
  referenceId: string;
  submittedAt: string;
  tradeDeskEmail: string;
  recipientEmail: string;
  deliveryStatus: "sent" | "simulated";
  message: string;
}

export const sendContactEnquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return contactEnquirySchema.parse(data);
  })
  .handler(async ({ data }): Promise<ContactEnquiryResponse> => {
    const timestamp = new Date().toISOString();
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const referenceId = `VT-2026-ENQ-${randomHex}`;

    const tradeDeskEmail = process.env.CONTACT_EMAIL || company.email;
    const resendApiKey = process.env.RESEND_API_KEY;
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    console.log("=================================================");
    console.log(`[VANGUARD TRADE DESK] NEW ENQUIRY RECEIVED: ${referenceId}`);
    console.log(`Timestamp:    ${timestamp}`);
    console.log(`From Client:  ${data.fullName} <${data.email}>`);
    console.log(`Organisation: ${data.organisation}`);
    console.log(`Phone:        ${data.phone || "Not provided"}`);
    console.log(`Enquiry Type: ${data.enquiryType}`);
    console.log(`Message:      ${data.message}`);
    console.log(`Routed to:    ${tradeDeskEmail}`);
    console.log("=================================================");

    let deliveryStatus: "sent" | "simulated" = "simulated";

    // 1. If Resend API key is provided, send real emails to both client and trade desk
    if (resendApiKey) {
      try {
        // Send email to Trade Desk
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Vanguard Trade Desk <notifications@resend.dev>",
            to: [tradeDeskEmail],
            reply_to: data.email,
            subject: `[Trade Desk Enquiry] ${data.enquiryType} - ${data.organisation} (${referenceId})`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0;">
                <div style="background-color: #0b1a30; color: #ffffff; padding: 16px; margin-bottom: 20px;">
                  <h2 style="margin: 0; font-size: 18px; letter-spacing: 1px;">VANGUARD THERAPEUTICS LTD.</h2>
                  <p style="margin: 4px 0 0 0; font-size: 12px; color: #14b8a6;">INSTITUTIONAL TRADE DESK</p>
                </div>
                <h3 style="color: #0b1a30; margin-top: 0;">New Client Enquiry [Ref: ${referenceId}]</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Reference ID:</td><td style="font-weight: bold; color: #0b1a30;">${referenceId}</td></tr>
                  <tr><td style="padding: 8px 0; color: #64748b;">Client Name:</td><td style="font-weight: bold; color: #0b1a30;">${data.fullName}</td></tr>
                  <tr><td style="padding: 8px 0; color: #64748b;">Organisation:</td><td style="font-weight: bold; color: #0b1a30;">${data.organisation}</td></tr>
                  <tr><td style="padding: 8px 0; color: #64748b;">Email:</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
                  <tr><td style="padding: 8px 0; color: #64748b;">Phone:</td><td>${data.phone || "N/A"}</td></tr>
                  <tr><td style="padding: 8px 0; color: #64748b;">Enquiry Type:</td><td style="color: #0f766e; font-weight: bold;">${data.enquiryType}</td></tr>
                </table>
                <div style="background-color: #f8fafc; border-left: 4px solid #14b8a6; padding: 12px 16px; margin-bottom: 20px;">
                  <strong style="color: #334155; font-size: 13px;">Requirement Details:</strong>
                  <p style="margin: 8px 0 0 0; color: #0f172a; white-space: pre-wrap;">${data.message}</p>
                </div>
                <p style="font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px;">
                  Submitted on ${timestamp} via Vanguard Web Portal.
                </p>
              </div>
            `,
          }),
        });

        // Send confirmation email to the client
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Vanguard Therapeutics <notifications@resend.dev>",
            to: [data.email],
            reply_to: tradeDeskEmail,
            subject: `Enquiry Acknowledgement [${referenceId}] - Vanguard Therapeutics`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0;">
                <div style="background-color: #0b1a30; color: #ffffff; padding: 16px; margin-bottom: 20px;">
                  <h2 style="margin: 0; font-size: 18px; letter-spacing: 1px;">VANGUARD THERAPEUTICS LTD.</h2>
                  <p style="margin: 4px 0 0 0; font-size: 12px; color: #14b8a6;">INSTITUTIONAL TRADE & SUPPLY DESK</p>
                </div>
                <p style="color: #0b1a30; font-size: 15px;">Dear ${data.fullName},</p>
                <p style="color: #334155; line-height: 1.6;">
                  Thank you for contacting Vanguard Therapeutics Ltd. We have officially registered your enquiry under Reference Number <strong>${referenceId}</strong>.
                </p>
                <div style="background-color: #f0fdfa; border: 1px solid #ccfbf1; padding: 14px; margin: 20px 0;">
                  <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: bold; color: #0f766e; text-transform: uppercase;">Enquiry Summary</p>
                  <p style="margin: 3px 0; font-size: 13px; color: #134e4a;"><strong>Organisation:</strong> ${data.organisation}</p>
                  <p style="margin: 3px 0; font-size: 13px; color: #134e4a;"><strong>Enquiry Classification:</strong> ${data.enquiryType}</p>
                  <p style="margin: 3px 0; font-size: 13px; color: #134e4a;"><strong>SLA Response Window:</strong> Within 1 working day (24 hours)</p>
                </div>
                <p style="color: #334155; line-height: 1.6; font-size: 13px;">
                  Our trade desk officer will review your dossier, tender, or commercial supply requirements and follow up with commercial rate-contracts or technical COA documents.
                </p>
                <p style="color: #64748b; font-size: 12px; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 12px;">
                  For urgent hospital supply or urgent tender deadlines, call our direct line: ${company.phone} or reply directly to ${tradeDeskEmail}.
                </p>
              </div>
            `,
          }),
        });

        deliveryStatus = "sent";
      } catch (err) {
        console.error("[VANGUARD] Failed to send email via Resend API:", err);
      }
    }

    // 2. If generic Webhook is configured, forward payload
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            referenceId,
            timestamp,
            ...data,
          }),
        });
      } catch (err) {
        console.error("[VANGUARD] Failed to post to webhook:", err);
      }
    }

    return {
      success: true,
      referenceId,
      submittedAt: timestamp,
      tradeDeskEmail,
      recipientEmail: data.email,
      deliveryStatus,
      message: `Enquiry logged successfully with Reference ID ${referenceId}. Our Trade Desk will follow up within 24 hours.`,
    };
  });
