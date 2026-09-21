import { useState } from "react";

const enquiryTypes = [
  "Institutional / Hospital Supply",
  "Government Tender",
  "PCD / Franchise Distribution",
  "Product Dossier & COA Request",
  "General Enquiry",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-border bg-card p-10 text-center">
        <p className="label-caps text-teal">Enquiry Received</p>
        <h3 className="mt-3 font-display text-2xl font-bold text-navy">
          Thank you — our trade desk will respond within one working day.
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          For urgent rate-contract or tender queries, call the institutional hotline.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5 border border-border bg-card p-8 md:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="label-caps text-muted-foreground">
            Full Name *
          </label>
          <input
            id="cf-name"
            required
            className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-teal"
            placeholder="Dr. / Mr. / Ms."
          />
        </div>
        <div>
          <label htmlFor="cf-org" className="label-caps text-muted-foreground">
            Organisation *
          </label>
          <input
            id="cf-org"
            required
            className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-teal"
            placeholder="Hospital / Distributor / Institution"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="label-caps text-muted-foreground">
            Email *
          </label>
          <input
            id="cf-email"
            type="email"
            required
            className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-teal"
            placeholder="name@organisation.com"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="label-caps text-muted-foreground">
            Phone
          </label>
          <input
            id="cf-phone"
            type="tel"
            className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-teal"
            placeholder="+91"
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-type" className="label-caps text-muted-foreground">
          Enquiry Type *
        </label>
        <select
          id="cf-type"
          required
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-teal"
        >
          {enquiryTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cf-msg" className="label-caps text-muted-foreground">
          Message *
        </label>
        <textarea
          id="cf-msg"
          required
          rows={5}
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-teal"
          placeholder="Product interest, quantity, delivery location, tender reference…"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-navy px-8 py-4 font-display text-sm font-bold tracking-wide text-navy-foreground transition-colors hover:bg-navy/90 sm:w-auto"
      >
        SUBMIT ENQUIRY
      </button>
      <p className="text-xs text-muted-foreground">
        Intended for registered medical practitioners and institutional buyers only.
      </p>
    </form>
  );
}
