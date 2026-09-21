import { useState } from "react";
import { ChevronDown, ShieldCheck, FileCheck, Truck, Users2, FlaskConical, Clock, HelpCircle } from "lucide-react";

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  icon: typeof HelpCircle;
}

export const institutionalFaqs: FaqItem[] = [
  {
    id: "certifications",
    category: "Regulatory & Standards",
    question: "What certifications and regulatory standards govern Vanguard's manufacturing facility?",
    answer:
      "Vanguard Therapeutics operates a WHO-GMP and revised Schedule M certified liquid manufacturing facility in GIDC Industrial Estate, Vadodara, Gujarat. Our production blocks feature cleanrooms with differential pressure monitoring, validated HVAC systems with HEPA air handling, water-for-injection (WFI) generation loops, and rigorous compliance with IP/USP pharmacopoeial monographs.",
    icon: ShieldCheck,
  },
  {
    id: "coa-release",
    category: "Quality Assurance",
    question: "Is batch-wise Certificate of Analysis (COA) provided with commercial consignments?",
    answer:
      "Yes. 100% of dispatched consignments are released strictly with batch-specific Certificates of Analysis. Testing covers active ingredient assay via HPLC, microbiological bioburden screening, heavy-metal profiling via ICP-MS, and physical stability checks. Full regulatory dossiers and 24–36 month stability data are available for institutional buyers.",
    icon: FileCheck,
  },
  {
    id: "moq-tenders",
    category: "Institutional Procurement",
    question: "What are your minimum order quantities (MOQ) for hospital tenders and institutional supply?",
    answer:
      "For hospitals, trusts, and institutional tender contractors, we provide flexible batch allocations linked to formal supply agreements and rate contracts. For PCD franchise distribution, commercial minimums start from standard master shipper cartons per formulation with pan-India dispatch within 24–48 hours.",
    icon: Truck,
  },
  {
    id: "pcd-monopoly",
    category: "PCD & Franchise",
    question: "Do you offer PCD pharma franchise and exclusive territory monopoly rights?",
    answer:
      "Yes. We allot exclusive district and regional territory rights to qualified PCD distribution partners across India. Franchise partners receive protected institutional pricing, product monographs, visual aids, marketing materials, and guaranteed non-compete commercial protection in their designated areas.",
    icon: Users2,
  },
  {
    id: "contract-manufacturing",
    category: "Contract Manufacturing",
    question: "Does Vanguard undertake third-party contract manufacturing for liquid formulations?",
    answer:
      "Yes. We undertake specialized contract manufacturing and loan licensing for oral solutions, pediatric syrups, suspensions, and calibrated drops. We offer complete formulation scaling, primary packaging in amber PET/glass bottles, labeling compliance, and analytical testing under revised Schedule M protocols.",
    icon: FlaskConical,
  },
  {
    id: "storage-shelf-life",
    category: "Stability & Logistics",
    question: "What is the validated shelf life and recommended storage for Vanguard oral formulations?",
    answer:
      "All liquid formulations undergo validated real-time and accelerated stability testing (Zone IVb conditions) providing 24 to 36 months of shelf life. Products should be stored in their original outer carton in a cool, dry area below 25°C protected from direct sunlight and freezing.",
    icon: Clock,
  },
];

export function InstitutionalFaq() {
  const [openId, setOpenId] = useState<string | null>("certifications");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 scroll-mt-16">
      <div id="quality" className="sr-only" aria-hidden="true" />
      <div className="mb-4 sm:mb-5">
        <h2 className="font-display text-xl sm:text-2xl font-extrabold text-navy sm:text-3xl">
          FAQs
        </h2>
      </div>

      <div className="divide-y divide-border border border-border bg-background shadow-xs">
        {institutionalFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          const Icon = faq.icon;

          return (
            <div key={faq.id} className="transition-colors hover:bg-surface/50">
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer"
              >
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center border transition-colors ${
                      isOpen
                        ? "border-teal/30 bg-teal/10 text-teal"
                        : "border-border bg-surface text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-navy leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                </div>

                <div
                  className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
                    isOpen
                      ? "border-teal bg-teal text-white rotate-180"
                      : "border-border bg-background text-muted-foreground"
                  }`}
                >
                  <ChevronDown className="h-3.5 w-3.5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pl-14 sm:pl-16 text-xs sm:text-sm leading-relaxed text-muted-foreground animate-in fade-in duration-200">
                  <p className="max-w-3xl">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
