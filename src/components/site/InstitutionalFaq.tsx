import { useState } from "react";
import { ChevronDown, ShieldCheck, FileCheck, Truck, Users2, Clock, HelpCircle } from "lucide-react";

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  icon: typeof HelpCircle;
}

export const institutionalFaqs: FaqItem[] = [
  {
    id: "bulk-inquiry",
    category: "Procurement & Inquiry",
    question: "How do I place a bulk medicine supply inquiry with Redition Pharma?",
    answer:
      "You can submit a bulk or institutional supply inquiry directly via our Trade Desk form below, by email at trade@reditionpharma.com, or by contacting our operations desk at +91 98250 12345. Please state the formulation names (ADNOSINE-108, MACSINE-109, PREDY-NT, QLONG-GOLD), required pack quantities, delivery location, and institutional entity type. Our commercial desk responds with formal rate contract quotations and delivery schedules within 24 business hours.",
    icon: HelpCircle,
  },
  {
    id: "who-gmp-standards",
    category: "Regulatory & Standards",
    question: "Are Redition Pharma formulations WHO-GMP certified?",
    answer:
      "Yes. All Redition Pharma formulations are manufactured in state-of-the-art facilities compliant with WHO-GMP standards and revised Schedule M guidelines. Our production blocks feature differential-pressure cleanrooms, validated HVAC systems with HEPA air filtration, computerized blister packing, and strict compliance with IP/USP and validated nutraceutical monographs.",
    icon: ShieldCheck,
  },
  {
    id: "third-party-pcd",
    category: "PCD & Third-Party Manufacturing",
    question: "Does Redition Pharma offer Third-Party Manufacturing or PCD Pharma Franchises?",
    answer:
      "Yes. We offer third-party contract manufacturing, loan licensing, and exclusive PCD pharma franchise distribution across designated territories throughout India. Franchise partners receive exclusive district monopoly rights, promotional inputs, technical dossiers, and assured pan-India dispatch.",
    icon: Users2,
  },
  {
    id: "packaging-delivery",
    category: "Packaging & Logistics",
    question: "What are the packaging and delivery timelines for bulk orders?",
    answer:
      "Standard orders for existing tablet formulations (in Alu-Alu and moisture-barrier blister packs with heavy-duty master shipper cartons) are processed and dispatched within 24 to 48 hours of order confirmation. For customized contract manufacturing batches or institutional tender milestones, deliveries are fulfilled per the contracted delivery schedule.",
    icon: Truck,
  },
  {
    id: "coa-release",
    category: "Quality Assurance",
    question: "Is batch-wise Certificate of Analysis (COA) provided with commercial consignments?",
    answer:
      "Yes. 100% of dispatched commercial consignments are accompanied by batch-specific Certificates of Analysis. Testing covers active ingredient assay via HPLC, dissolution and disintegration profiling, microbiological bioburden screening, and heavy-metal testing via ICP-MS.",
    icon: FileCheck,
  },
  {
    id: "storage-shelf-life",
    category: "Stability & Logistics",
    question: "What is the validated shelf life and recommended storage for Redition formulations?",
    answer:
      "All Redition Pharma tablet formulations undergo validated real-time and accelerated stability testing (Zone IVb climatic conditions) providing 24 to 36 months of shelf life. Products should be stored in their original outer carton in a cool, dry area below 25°C, protected from direct sunlight and excessive humidity.",
    icon: Clock,
  },
];

export function InstitutionalFaq() {
  const [openId, setOpenId] = useState<string | null>("bulk-inquiry");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 scroll-mt-16">
      <div id="quality" className="sr-only" aria-hidden="true" />
      
      {/* Header matching user's reference design */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2.5 text-teal text-xs font-bold tracking-widest uppercase">
          <span className="h-0.5 w-6 bg-teal" />
          <span>Frequently Asked Questions</span>
          <span className="h-0.5 w-6 bg-teal" />
        </div>
        <h2 className="mt-2.5 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
          B2B Trade &amp; Procurement FAQs
        </h2>
      </div>

      {/* Accordion Cards */}
      <div className="space-y-3 sm:space-y-4">
        {institutionalFaqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className={`rounded-xl border transition-all duration-200 ${
                isOpen
                  ? "border-teal/60 bg-emerald-50/20 shadow-xs"
                  : "border-border/80 bg-background hover:border-teal/30 hover:bg-surface/30"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer"
              >
                <span
                  className={`font-display text-sm sm:text-base font-bold leading-snug transition-colors ${
                    isOpen ? "text-teal" : "text-navy"
                  }`}
                >
                  {faq.question}
                </span>

                <div
                  className={`shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-teal" : "text-muted-foreground"
                  }`}
                >
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm leading-relaxed text-muted-foreground animate-in fade-in duration-200">
                  <p className="border-t border-teal/15 pt-3.5 text-slate-600 sm:text-[13.5px]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
