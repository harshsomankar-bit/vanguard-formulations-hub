import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const institutionalFaqs: FaqItem[] = [
  {
    id: "bulk-inquiry",
    question: "How do I place a bulk medicine supply inquiry with Redition Pharma?",
    answer:
      "You can place a bulk medicine supply or hospital rate contract inquiry directly via our Trade Desk inquiry form below, by emailing us at reditionpharma@gmail.com, or by calling our commercial desk at +91 98935 97108. Please mention the desired formulation names (ADNOSINE-108, MACSINE-109, PREDY-NT, QLONG-GOLD, or ADNOCAR-DS Syrup), required batch quantity, delivery destination, and entity type. Our institutional trade team issues formal quotation dossiers within 24 business hours.",
  },
  {
    id: "who-gmp-standards",
    question: "Are Redition Pharma formulations WHO-GMP certified?",
    answer:
      "Yes. 100% of Redition Pharma formulations are manufactured in state-of-the-art facilities compliant with WHO-GMP standards and revised Schedule M guidelines. Our production facilities maintain differential-pressure cleanroom suites, validated HVAC systems with HEPA air filtration, automated blister packaging lines, and strict adherence to validated IP/USP and nutraceutical monographs.",
  },
  {
    id: "institutional-supply",
    question: "What healthcare sectors and supply channels does Redition Pharma cater to?",
    answer:
      "Redition Pharma supplies its authenticated formulations directly to multi-specialty hospitals, institutional healthcare networks, clinical pharmacies, and authorized pharmaceutical distribution partners across India.",
  },
  {
    id: "packaging-delivery",
    question: "What are the packaging and delivery timelines for bulk orders?",
    answer:
      "Standard orders for existing tablet and oral liquid formulations (in Alu-Alu and moisture-barrier blister packs or amber PET bottles with heavy-duty master shipper cartons) are processed and dispatched within 24 to 48 hours of order confirmation. For scheduled hospital tender allocations or institutional deliveries, consignments are fulfilled per the contracted delivery schedule.",
  },
  {
    id: "coa-release",
    question: "Is batch-wise Certificate of Analysis (COA) provided with commercial consignments?",
    answer:
      "Yes. Every commercial dispatch is accompanied by batch-specific Certificates of Analysis. Testing covers active ingredient assay via HPLC, dissolution and disintegration profiling, microbiological bioburden screening, and heavy-metal testing via ICP-MS.",
  },
  {
    id: "storage-shelf-life",
    question: "What is the validated shelf life and recommended storage for Redition formulations?",
    answer:
      "All Redition Pharma formulations undergo validated real-time and accelerated stability testing (Zone IVb climatic conditions) providing 24 to 36 months of shelf life. Products should be stored in their original outer carton in a cool, dry area below 25°C, protected from direct sunlight and excessive humidity.",
  },
];

export function InstitutionalFaq() {
  const [openId, setOpenId] = useState<string | null>("bulk-inquiry");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 scroll-mt-16">

      {/* Header matching user reference */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center gap-3">
          <span className="w-8 h-[2.5px] bg-[#00897B]" />
          <span className="text-[#00897B] font-bold text-xs sm:text-sm tracking-widest uppercase">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <span className="w-8 h-[2.5px] bg-[#00897B]" />
        </div>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#0B3530] tracking-tight">
          B2B Trade &amp; Procurement FAQs
        </h2>
      </div>

      {/* Accordion List Matching User Screenshot */}
      <div className="space-y-4 sm:space-y-5">
        {institutionalFaqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-2 border-[#0284c7] bg-[#F2FBF7] shadow-sm"
                  : "border border-slate-200 bg-white hover:border-[#00897B]/40 shadow-xs"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
              >
                <span className="font-display text-base sm:text-lg font-bold text-[#0B3530] leading-snug">
                  {faq.question}
                </span>

                <div
                  className={`shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="h-5 w-5 text-[#00897B] stroke-[2.5]" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base leading-relaxed text-slate-700 animate-in fade-in duration-200">
                  <p className="border-t border-[#00897B]/15 pt-4 text-slate-600">
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
