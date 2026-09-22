import { useState } from "react";
import { CheckCircle2, Loader2, Mail, Phone, Building2, Clock, RotateCcw, ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import { sendContactEnquiry, type ContactEnquiryResponse } from "@/actions/contact";
import { company } from "@/data/products";

const enquiryTypes = [
  "Institutional / Hospital Supply",
  "Government Tender",
  "PCD / Franchise Distribution",
  "Product Dossier & COA Request",
  "General Enquiry",
];

interface FormState {
  fullName: string;
  organisation: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
}

export interface ContactFormProps {
  defaultProduct?: string;
  defaultEnquiryType?: string;
  title?: string;
  subtitle?: string;
}

export function ContactForm({
  defaultProduct,
  defaultEnquiryType,
  title,
  subtitle,
}: ContactFormProps = {}) {
  const getInitialState = (): FormState => ({
    fullName: "",
    organisation: "",
    email: "",
    phone: "",
    enquiryType: defaultEnquiryType || enquiryTypes[0],
    message: defaultProduct
      ? `Requesting official quotation, batch Certificate of Analysis (COA), and institutional procurement terms for ${defaultProduct}.`
      : "",
  });

  const [formData, setFormData] = useState<FormState>(getInitialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<{
    response: ContactEnquiryResponse;
    data: FormState;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await sendContactEnquiry({
        data: {
          fullName: formData.fullName.trim(),
          organisation: formData.organisation.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          enquiryType: formData.enquiryType,
          message: formData.message.trim(),
        },
      });

      setSubmissionResult({
        response,
        data: { ...formData },
      });
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Failed to transmit enquiry. Please verify your connection or contact our trade desk directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(getInitialState());
    setSubmissionResult(null);
    setErrorMsg(null);
  };

  if (submissionResult) {
    const { response, data } = submissionResult;
    const cleanPhone = company.phone.replace(/[^0-9+]/g, "");

    // Pre-composed mailto string as fail-safe client confirmation
    const mailtoSubject = encodeURIComponent(`[${response.referenceId}] ${data.enquiryType} - ${data.organisation}`);
    const mailtoBody = encodeURIComponent(
      `Hello Redition Trade Desk,\n\nI have submitted an institutional enquiry on your portal (Ref: ${response.referenceId}).\n\nOrganisation: ${data.organisation}\nContact Person: ${data.fullName}\nPhone: ${data.phone || "N/A"}\nEnquiry Type: ${data.enquiryType}\n\nRequirement Details:\n${data.message}\n\nPlease confirm receipt and provide standard quotation / lead times.\n\nThank you,\n${data.fullName}`,
    );

    return (
      <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-8 md:p-10 shadow-sm animate-in fade-in zoom-in-95 duration-200">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal ring-8 ring-teal/5">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-3.5 py-1 font-mono text-xs font-semibold text-teal tracking-wider uppercase">
            <span>Reference: {response.referenceId}</span>
          </div>

          <h3 className="mt-4 font-display text-2xl font-bold text-navy md:text-3xl">
            Enquiry Dispatched Successfully
          </h3>
          
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Your enquiry has been securely recorded and routed to the Redition Pharma Institutional Trade Desk at{" "}
            <span className="font-semibold text-foreground">{response.tradeDeskEmail}</span>. A confirmation notification has also been prepared for{" "}
            <span className="font-semibold text-foreground">{data.email}</span>.
          </p>
        </div>

        {/* Structured Submission Summary */}
        <div className="mt-8 rounded-xl border border-border/80 bg-background/60 p-5 text-left text-xs sm:text-sm shadow-2xs">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <span className="text-muted-foreground">Organisation:</span>
              <p className="font-semibold text-foreground">{data.organisation}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Contact Person:</span>
              <p className="font-semibold text-foreground">{data.fullName}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Client Email:</span>
              <p className="font-semibold text-foreground">{data.email}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Enquiry Classification:</span>
              <p className="font-semibold text-teal">{data.enquiryType}</p>
            </div>
          </div>
          <div className="mt-3 border-t border-border/60 pt-3">
            <span className="text-muted-foreground">Submitted Requirements:</span>
            <p className="mt-1 font-sans text-xs text-foreground/90 whitespace-pre-wrap">
              {data.message}
            </p>
          </div>
        </div>

        {/* SLA Notice */}
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-teal/20 bg-teal/5 p-4 text-xs text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0 text-teal mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Official SLA Response Time</p>
            <p className="mt-0.5">
              Our Vadodara Trade Desk typically processes hospital tenders, rate contracts, and COA requests within <strong>1 business day</strong>.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${response.tradeDeskEmail}?subject=${mailtoSubject}&body=${mailtoBody}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3 font-display text-xs font-bold tracking-wide text-navy-foreground transition-all duration-200 hover:bg-navy/90 hover:shadow-md"
          >
            <Mail className="h-4 w-4 text-teal" />
            OPEN IN EMAIL CLIENT
          </a>

          <a
            href={`tel:${cleanPhone}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 font-display text-xs font-bold tracking-wide text-foreground transition-colors hover:bg-accent"
          >
            <Phone className="h-4 w-4 text-teal" />
            CALL TRADE DESK ({company.phone})
          </a>

          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-dashed border-border px-6 py-3 font-display text-xs font-bold tracking-wide text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
          >
            <RotateCcw className="h-4 w-4" />
            SUBMIT ANOTHER ENQUIRY
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      className="grid gap-5 rounded-2xl border border-border/80 bg-card p-5 sm:p-8 md:p-10 shadow-sm scroll-mt-24"
      onSubmit={handleSubmit}
    >
      <div className="border-b border-border/80 pb-4">
        <div className="flex items-center gap-2 text-teal">
          <ShieldCheck className="h-4 w-4" />
          <span className="label-caps text-xs">Direct Institutional Trade Desk</span>
        </div>
        <h4 className="mt-1 font-display text-lg font-bold text-navy">
          {title || "Pharmaceutical Supply & Tender Request"}
        </h4>
        <p className="mt-1 text-xs text-muted-foreground">
          {subtitle || "Submissions are dispatched directly to our licensed trade operations officers and registered with a permanent reference ID."}
        </p>
      </div>

      {errorMsg && (
        <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          <p className="font-semibold">Submission Error</p>
          <p className="text-xs mt-1">{errorMsg}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="label-caps text-muted-foreground">
            Full Name *
          </label>
          <input
            id="cf-name"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            disabled={isSubmitting}
            className="mt-2 w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 hover:border-slate-300 focus:border-clinical focus:ring-2 focus:ring-clinical/15 disabled:opacity-50 shadow-2xs"
            placeholder="Dr. / Mr. / Ms."
          />
        </div>
        <div>
          <label htmlFor="cf-org" className="label-caps text-muted-foreground">
            Organisation *
          </label>
          <input
            id="cf-org"
            name="organisation"
            required
            value={formData.organisation}
            onChange={handleChange}
            disabled={isSubmitting}
            className="mt-2 w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 hover:border-slate-300 focus:border-clinical focus:ring-2 focus:ring-clinical/15 disabled:opacity-50 shadow-2xs"
            placeholder="Hospital / Distributor / Institution"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="label-caps text-muted-foreground">
            Client Email *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className="mt-2 w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 hover:border-slate-300 focus:border-clinical focus:ring-2 focus:ring-clinical/15 disabled:opacity-50 shadow-2xs"
            placeholder="name@organisation.com"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="label-caps text-muted-foreground">
            Phone / Mobile
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className="mt-2 w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 hover:border-slate-300 focus:border-clinical focus:ring-2 focus:ring-clinical/15 disabled:opacity-50 shadow-2xs"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-type" className="label-caps text-muted-foreground">
          Enquiry Type *
        </label>
        <div className="relative mt-2">
          <select
            id="cf-type"
            name="enquiryType"
            required
            value={formData.enquiryType}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full appearance-none rounded-xl border border-border/80 bg-background px-4 py-3 pr-10 text-sm font-medium text-foreground outline-none transition-all duration-200 hover:border-slate-300 focus:border-clinical focus:ring-2 focus:ring-clinical/15 disabled:opacity-50 cursor-pointer shadow-2xs"
          >
            {enquiryTypes.map((t) => (
              <option key={t} value={t} className="bg-background text-foreground py-1.5">
                {t}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="cf-msg" className="label-caps text-muted-foreground">
          Enquiry & Product Requirements *
        </label>
        <textarea
          id="cf-msg"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          className="mt-2 w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 hover:border-slate-300 focus:border-clinical focus:ring-2 focus:ring-clinical/15 disabled:opacity-50 shadow-2xs"
          placeholder="Specify product name, required strength, batch volume, delivery location, hospital rate-contract reference, or tender deadline…"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-8 py-4 font-display text-sm font-bold tracking-wide text-navy-foreground transition-all duration-200 hover:bg-navy/90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-75 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-teal" />
              <span>TRANSMITTING ENQUIRY...</span>
            </>
          ) : (
            <>
              <span>SUBMIT ENQUIRY</span>
              <ArrowRight className="h-4 w-4 text-teal" />
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground">
          Intended for registered healthcare professionals & institutional buyers.
        </p>
      </div>
    </form>
  );
}
