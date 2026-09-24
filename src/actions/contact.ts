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

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EMAIL DELIVERY via FormSubmit.co (FREE — no signup / no API key)
// First form submission triggers a one-time email confirmation.
// After confirming, all submissions go to reditionpharma@gmail.com
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${company.email}`;

export const sendContactEnquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return contactEnquirySchema.parse(data);
  })
  .handler(async ({ data }): Promise<ContactEnquiryResponse> => {
    const timestamp = new Date().toISOString();
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const referenceId = `RP-2026-ENQ-${randomHex}`;

    const tradeDeskEmail = company.email;

    console.log("=================================================");
    console.log(`[REDITION TRADE DESK] NEW ENQUIRY RECEIVED: ${referenceId}`);
    console.log(`Timestamp:    ${timestamp}`);
    console.log(`From Client:  ${data.fullName} <${data.email}>`);
    console.log(`Organisation: ${data.organisation}`);
    console.log(`Phone:        ${data.phone || "Not provided"}`);
    console.log(`Enquiry Type: ${data.enquiryType}`);
    console.log(`Message:      ${data.message}`);
    console.log(`Routed to:    ${tradeDeskEmail}`);
    console.log("=================================================");

    let deliveryStatus: "sent" | "simulated" = "simulated";

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Trade Desk Enquiry] ${data.enquiryType} - ${data.organisation} (${referenceId})`,
          _replyto: data.email,
          _template: "table",
          "Reference ID": referenceId,
          "Client Name": data.fullName,
          Organisation: data.organisation,
          "Client Email": data.email,
          Phone: data.phone || "Not provided",
          "Enquiry Type": data.enquiryType,
          "Requirement Details": data.message,
          "Submitted At": timestamp,
        }),
      });

      const result = (await res.json()) as { success?: string };
      if (result.success === "true" || res.ok) {
        deliveryStatus = "sent";
        console.log(
          `[REDITION] ✅ Email sent via FormSubmit.co to ${tradeDeskEmail}`,
        );
      } else {
        console.error("[REDITION] FormSubmit response:", result);
      }
    } catch (err) {
      console.error("[REDITION] Failed to send via FormSubmit.co:", err);
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
