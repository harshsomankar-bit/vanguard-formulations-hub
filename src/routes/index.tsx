import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContactForm } from "@/components/site/ContactForm";
import { MedicalTechHeroAnimation } from "@/components/site/MedicalTechHeroAnimation";
import { InstitutionalFaq, institutionalFaqs } from "@/components/site/InstitutionalFaq";
import { FlaskConical, CheckCircle2, Clock, ShieldCheck, Building2, Network, Microscope, Phone, Mail, MapPin, User, MessageCircle } from "lucide-react";
import { company, products, SITE_URL } from "@/data/products";

const title =
  "Redition Pharma Ltd. | WHO-GMP Schedule M Certified Pharmaceutical Formulations";
const description =
  "Institutional hospital supply and direct healthcare distribution of WHO-GMP certified formulations by Redition Pharma Ltd.";
const keywords =
  "redition pharma, adnosine 108 tablets, macsine 109 tablets, predy nt tablets, qlong gold, adnocar ds syrup, l-carnosine dha epa syrup, pediatric neurodevelopment syrup, adenosine 5-monophosphate tablets, pregabalin sustained release nortriptyline, alpha lipoic acid benfotiamine, WHO-GMP Schedule M, hospital supply, institutional pharma, Surat pharma company, neuropathic pain formulations, hospital tenders India, pharmaceutical exporter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/images/pharma-packaging-line.jpg` },
      { property: "og:image:alt", content: "Redition Pharma WHO-GMP Automated Packaging & Formulations Facility" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Redition Pharma Ltd." },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}/images/pharma-packaging-line.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "MedicalOrganization"],
          name: company.name,
          alternateName: ["Redition Pharma", "Redition Pharma Ltd."],
          founder: {
            "@type": "Person",
            name: company.founder,
            jobTitle: "Founder & Managing Director",
          },
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.svg`,
          image: `${SITE_URL}/images/pharma-packaging-line.jpg`,
          telephone: company.phone,
          email: company.email,
          description: description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "101, 1st Floor, Bhumi Park Society, Punagam Chorasi Bombay Market",
            addressLocality: "Surat",
            addressRegion: "Gujarat",
            postalCode: "395010",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 21.2036,
            longitude: 72.8625,
          },
          hasMap: "https://maps.google.com/maps?q=Bombay+Market,+Punagam+Chorasi,+Surat,+Gujarat+395010",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "18:30",
            },
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: company.phone,
            contactType: "sales and institutional trade",
            areaServed: "IN",
            availableLanguage: ["en", "hi", "gu"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Redition Pharma Core Formulations",
          description: "WHO-GMP validated therapeutic formulations and dosage monographs",
          itemListElement: products.map((prod, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: {
              "@type": "Product",
              name: prod.name,
              url: `${SITE_URL}/product/${prod.id}`,
              description: prod.shortDescription,
              image: `${SITE_URL}${prod.image}`,
              offers: {
                "@type": "Offer",
                price: prod.price.toFixed(2),
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              },
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: institutionalFaqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const capabilities = [
  {
    k: "01",
    t: "WHO-GMP Schedule M Facility",
    d: "Cleanroom manufacturing blocks with validated HVAC, differential pressure monitoring and revised Schedule M documentation.",
    icon: Building2,
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
  {
    k: "02",
    t: "Institutional Hospital Supply",
    d: "Rate-contract fulfilment for hospitals, trusts and government tenders with batch traceability and COA on every consignment.",
    icon: FlaskConical,
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    iconColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  {
    k: "03",
    t: "Pan-India Supply & Logistics",
    d: "Direct dispatch corridors, robust cold-chain logistics, and dedicated batch reservation for institutional partners nationwide.",
    icon: Network,
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    iconColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  },
  {
    k: "04",
    t: "Analytical Quality Control",
    d: "HPLC, UV-Vis, dissolution and ICP-MS heavy-metal screening with real-time and accelerated stability chambers.",
    icon: Microscope,
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    iconColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  },
];

function Index() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          if (hash === "contact" || hash === "contact-form") {
            const input = document.getElementById("cf-name") as HTMLInputElement | null;
            input?.focus();
          }
        }, 150);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden border-b border-border bg-gradient-to-b from-slate-50 via-teal-50/15 to-blue-50/20">
        <div id="overview" className="sr-only" aria-hidden="true" />
        {/* Subtle grid lines background overlay */}
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            {/* Left Column (FIRST / UP): Headline, Narrative, CTAs & 3 Metrics */}
            <div className="order-1 lg:col-span-6 flex flex-col justify-center">
              {/* Overline with accent dash */}
              <div className="flex items-center gap-2.5">
                <span className="h-0.5 w-6 bg-teal rounded-full" />
                <span className="label-caps text-teal text-xs font-bold tracking-wider">
                  WHO-GMP CERTIFIED B2B SUPPLIER
                </span>
              </div>

              {/* Prominent Headline */}
              <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-extrabold leading-[1.12] tracking-tight text-navy">
                Next-Generation Molecular Formulations for Precision Healthcare
              </h1>

              {/* Narrative Subtitle */}
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
                Redition Pharma Ltd. specializes in developing and delivering high-potency molecular formulations like <strong className="text-navy font-semibold">ADNOSINE-108</strong>, <strong className="text-navy font-semibold">MACSINE-109</strong>, <strong className="text-navy font-semibold">PREDY-NT</strong>, <strong className="text-navy font-semibold">QLONG-GOLD</strong>, and <strong className="text-navy font-semibold">ADNOCAR-DS Syrup</strong> across India.
              </p>

              {/* Dual Action Buttons Matching Website Theme (Navy & Clinical Accent) */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-clinical hover:shadow-lg cursor-pointer"
                >
                  <span>Explore Formulations</span>
                  <span className="text-base">→</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => {
                      document.getElementById("cf-name")?.focus();
                    }, 350);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy text-navy bg-white px-6 py-3.5 text-sm font-bold shadow-xs transition-all hover:bg-navy hover:text-white cursor-pointer"
                >
                  <span>Make an Enquiry</span>
                </a>
              </div>

              {/* 3 Metric Counters Matching User Reference */}
              <div className="mt-8 pt-6 border-t border-border/80 grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-black text-navy tracking-tight">5+</p>
                  <p className="mt-0.5 text-[10px] sm:text-[11px] font-bold text-muted-foreground uppercase tracking-wider leading-tight">
                    CORE FORMULATIONS
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-black text-navy tracking-tight">100%</p>
                  <p className="mt-0.5 text-[10px] sm:text-[11px] font-bold text-muted-foreground uppercase tracking-wider leading-tight">
                    COA VALIDATED
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-black text-navy tracking-tight">Pan-India</p>
                  <p className="mt-0.5 text-[10px] sm:text-[11px] font-bold text-muted-foreground uppercase tracking-wider leading-tight">
                    COLD CHAIN SUPPLY
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (SECOND / DOWN): Pharmacy Dispensing Animation in Styled Card */}
            <div className="order-2 lg:col-span-6 flex items-center justify-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/80 bg-white shadow-xl p-4 sm:p-6 flex items-center justify-center">
                <MedicalTechHeroAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Institutional Capabilities */}
      <section className="border-b border-border bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <p className="label-caps text-teal text-xs">WHO-GMP &amp; Schedule M Certified</p>
            <h2 className="mt-1 font-display text-xl sm:text-2xl font-extrabold text-navy sm:text-3xl">
              Institutional Manufacturing Infrastructure
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.k}
                  className="group relative rounded-xl border border-border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md bg-gradient-to-b from-slate-50/80 to-white"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-muted-foreground">
                      {c.k}
                    </span>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg border ${c.iconColor}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="mt-3 font-display text-sm sm:text-base font-bold text-navy">
                    {c.t}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {c.d}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products / Formulations Portfolio */}
      <section id="products" className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 scroll-mt-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <p className="label-caps text-teal text-xs">Formulations Portfolio</p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-navy sm:text-3xl">
              Formulations portfolio with complete dossiers
            </h2>
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            {products.length} Active Institutional Formulations
          </span>
        </div>

        {/* Formulation Cards with Consistent Corporate Styling */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {products.map((p) => {
            return (
              <Link
                key={p.id}
                to="/product/$productId"
                params={{ productId: p.id }}
                className="group relative flex flex-col rounded-2xl border border-border/80 bg-gradient-to-b from-slate-50/50 via-white to-white p-4 transition-all duration-300 hover:border-teal/60 hover:shadow-lg hover:shadow-teal-900/5 hover:-translate-y-0.5"
              >
                {/* Product Packshot Frame with Soft Pedestal */}
                <div className="relative flex h-40 sm:h-44 w-full items-center justify-center p-2">
                  <div className="absolute inset-x-4 bottom-2 h-14 rounded-xl bg-slate-100/70 border border-border/50 -z-0" />
                  <img
                    src={p.image}
                    alt={`${p.name} (${p.composition}) — Redition Pharma Formulations`}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="relative z-10 h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  {p.images && p.images.length > 1 && (
                    <span className="absolute top-2 right-2 z-20 rounded-full bg-navy/80 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur shadow-2xs">
                      {p.images.length} Views
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="mt-3 flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal">
                      {p.strength}
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground">{p.type}</span>
                  </div>

                  <h3 className="mt-2 font-display text-base font-extrabold text-navy group-hover:text-clinical transition-colors leading-snug">
                    {p.name}
                  </h3>

                  <p className="mt-0.5 text-[11px] font-medium text-muted-foreground truncate">
                    {p.category}
                  </p>

                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {p.shortDescription}
                  </p>

                  {/* View Full Monograph & RFQ Button */}
                  <div className="mt-auto pt-4">
                    <span className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-teal/30 bg-teal/5 py-2 px-2 text-center text-xs font-semibold text-teal transition-all group-hover:bg-teal group-hover:text-white group-hover:border-teal">
                      <span>View Monograph &amp; RFQ</span>
                      <span className="text-sm">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Tender & Rate Contract Inquiry Banner Matching Clinical Navy & Teal Theme */}
        <div className="mt-10 rounded-2xl border border-teal-700/40 bg-gradient-to-r from-navy via-slate-900 to-teal-950 p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6">
            <div className="max-w-2xl">
              <p className="label-caps text-teal-300 text-xs font-bold">
                Institutional Tender Desk
              </p>
              <h3 className="mt-2 font-display text-lg sm:text-xl md:text-2xl font-bold text-white">
                Have a specific tender requirement or rate contract inquiry?
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
                Our regulatory and institutional sales desk responds within one working day with CTD dossiers, batch availability and COA documentation.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => {
                    document.getElementById("cf-name")?.focus();
                  }, 350);
                }}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-teal-400 hover:text-navy cursor-pointer"
              >
                <span>Contact Trade Desk</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy & Assurance Section (Matches Reference Design & Formulations Analysis) */}
      <section id="quality" className="border-t border-border bg-white scroll-mt-16 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left: Cleanroom Manufacturing Image with Floating Quality Badge */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-md">
                <div className="relative aspect-4/3 sm:aspect-1/1 w-full overflow-hidden">
                  <img
                    src="/images/pharma-packaging-line.jpg"
                    alt="Redition Pharma WHO-GMP Certified High-Speed Cleanroom & Blister Packaging Line"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle cleanroom overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Badge at Bottom (Matches image) */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 rounded-xl border border-white/60 bg-white/95 p-3 shadow-lg backdrop-blur-md">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-xs">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-display text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                          WHO-GMP Certified
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
                          100% Tested &amp; Safe Formulations
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-[10px] sm:text-xs font-bold text-emerald-800">
                      Govt Approved
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quality Promise Narrative & 4 Formulations Analysis Commitments */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="flex items-center gap-2 font-display text-xs sm:text-sm font-bold tracking-widest uppercase text-emerald-700">
                  <span className="h-0.5 w-6 bg-emerald-600 rounded-full" />
                  <span>OUR QUALITY PROMISE</span>
                  <span className="h-0.5 w-6 bg-emerald-600 rounded-full" />
                </p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                  How We Ensure Safe &amp; Effective Medicines
                </h2>
                <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
                  At Redition Pharma, quality is simple and transparent — every single medicine is made with tested pure ingredients in certified clean plants and verified before dispatch.
                </p>
              </div>

              {/* 4 Steps Tailored to Redition Medicines Analysis */}
              <div className="space-y-4 pt-1">
                {/* 01: Ingredients Analysis */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <span className="font-mono text-lg sm:text-xl font-black text-emerald-600 shrink-0 mt-0.5">
                    01
                  </span>
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-slate-900">
                      100% Tested Pure Ingredients &amp; Bioactive Assay
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600">
                      We check and test all raw materials and active pharmaceutical ingredients — including Adenosine 5-Monophosphate (AMP), Decarboxylated L-Arginine, Pregabalin, EPA/DHA, and Benfotiamine — in our laboratory before manufacturing starts, ensuring maximum purity and potency.
                    </p>
                  </div>
                </div>

                {/* 02: Clean & Automated Manufacturing */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <span className="font-mono text-lg sm:text-xl font-black text-emerald-600 shrink-0 mt-0.5">
                    02
                  </span>
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-slate-900">
                      Clean &amp; Automated Manufacturing
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600">
                      Produced in sterile WHO-GMP certified cleanrooms with positive-pressure HVAC filtration, automatic rotary tablet compression, and humidity-barrier Alu-Alu blister packaging to completely avoid contamination.
                    </p>
                  </div>
                </div>

                {/* 03: Every Batch Lab-Tested */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <span className="font-mono text-lg sm:text-xl font-black text-emerald-600 shrink-0 mt-0.5">
                    03
                  </span>
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-slate-900">
                      Every Batch Lab-Tested Before Dispatch
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600">
                      Finished tablets and oral pediatric liquid formulations (ADNOSINE-108, MACSINE-109, PREDY-NT, QLONG-GOLD, and ADNOCAR-DS) are thoroughly tested via HPLC assay, dissolution rate, and Zone IVb shelf-life stability before commercial release.
                    </p>
                  </div>
                </div>

                {/* 04: Government Approved with COA */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <span className="font-mono text-lg sm:text-xl font-black text-emerald-600 shrink-0 mt-0.5">
                    04
                  </span>
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-slate-900">
                      Government Approved with Test Reports (COA)
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600">
                      Full compliance with FDA, revised Schedule M, and FSSAI statutory standards. We provide official Certificate of Analysis (COA) batch test reports, heavy metal screen, and microbial clearance with every order.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons matching Reference Image */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => {
                      const select = document.getElementById("cf-enquiry") as HTMLSelectElement | null;
                      if (select) select.value = "COA & Batch Analysis Report";
                      document.getElementById("cf-name")?.focus();
                    }, 350);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg cursor-pointer"
                >
                  <span>Request Quality Test Report (COA)</span>
                  <span>→</span>
                </a>

                <a
                  href="https://wa.me/917987779819?text=Hello%20Redition%20Pharma,%20I%20would%20like%20to%20request%20a%20Quality%20Test%20Report%20(COA)%20and%20monograph%20dossier."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors py-2"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366] fill-[#25D366]/20" />
                  <span>Ask Quality Desk on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated About Us Section */}
      <section id="about" className="border-t border-border bg-slate-50/70 scroll-mt-16 py-8 sm:py-10 md:py-12">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Top Row: Narrative & 4 Infrastructure Capabilities */}
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 items-start">
            {/* Left: Narrative & CTA */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <p className="label-caps text-teal text-xs font-semibold">
                  WHO-GMP &amp; Schedule M Certified Manufacturing Plant
                </p>
                <h2 className="mt-1.5 font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-navy leading-snug">
                  Advancing Pharmaceutical Precision from Vadodara to Pan-India Healthcare
                </h2>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Founded and led by <strong>{company.founder}</strong>, Redition Pharma Ltd. delivers precision solid oral dosage tablets and pediatric healthcare formulations under computerized HVAC air classification, automated blister packaging, and dedicated analytical quality release.
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-teal/20 bg-teal/5 px-3 py-1.5 text-xs text-navy">
                  <User className="h-3.5 w-3.5 text-teal shrink-0" />
                  <span><strong>Founder:</strong> {company.founder}</span>
                </div>
              </div>

              {/* Plant Audit / Inquiry CTA */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => {
                      document.getElementById("cf-name")?.focus();
                    }, 350);
                  }}
                  className="inline-flex items-center gap-2 bg-navy px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-clinical cursor-pointer shadow-xs"
                >
                  <span>Request Facility Audit &amp; Rate Contract</span>
                  <span>→</span>
                </a>
                <span className="text-[11px] text-muted-foreground">
                  Audits welcome by institutional appointment.
                </span>
              </div>
            </div>

            {/* Right: 4 Capabilities (Compact 2x2 Grid) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-border bg-background p-3.5 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-teal">01</span>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-navy">Class 100 Cleanrooms</h4>
                </div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  HEPA 0.3µm filtration, differential pressure zoning, and continuous temperature/RH tracking.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-background p-3.5 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-blue-600">02</span>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-navy">100,000L Compounding</h4>
                </div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  Electropolished SS 316L reactors with high-shear homogenization and closed-loop transfer.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-background p-3.5 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-indigo-600">03</span>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-navy">Analytical QA/QC Lab</h4>
                </div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  In-house HPLC assay, UV-Vis spectrophotometry, ICP-MS heavy metals, and bioburden testing.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-background p-3.5 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-amber-600">04</span>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-navy">Dossiers &amp; 100% COA</h4>
                </div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  Full CTD dossier support, Zone IVb stability testing (24–36 months), and batch COA release.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row: 2 Facility Photos Side-by-Side (Optimized Aspect Ratio & Spacing) */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Photo 1: Automated High-Speed Blister Packaging Line */}
            <div className="overflow-hidden rounded-xl border border-border bg-background shadow-xs">
              <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/pharma-packaging-line.jpg"
                  alt="Redition Pharma Automated Blister Packaging & Inspection Line"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-3 sm:p-3.5">
                <p className="font-display text-xs font-bold text-navy">
                  Automated High-Speed Blister Packaging &amp; Inspection Line
                </p>
                <p className="mt-0.5 text-[11px] text-muted-foreground leading-snug">
                  Automated multi-station thermoforming, blister packing, and computerized optical inspection.
                </p>
              </div>
            </div>

            {/* Photo 2: QC Lab */}
            <div className="overflow-hidden rounded-xl border border-border bg-background shadow-xs">
              <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/pharma-qc-lab.jpg"
                  alt="Redition Pharma Analytical Quality Control & Stability Laboratory"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-3 sm:p-3.5">
                <p className="font-display text-xs font-bold text-navy">
                  In-House Pharmacopoeial Monograph Testing
                </p>
                <p className="mt-0.5 text-[11px] text-muted-foreground leading-snug">
                  Equipped with High Performance Liquid Chromatography (HPLC) and continuous stability chambers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional FAQs */}
      <InstitutionalFaq />

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-gradient-to-b from-slate-50 via-teal-50/15 to-blue-50/20 scroll-mt-16 py-8 sm:py-10">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="label-caps text-teal text-xs font-semibold">Direct Trade Desk</p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-navy sm:text-3xl">
              Send an institutional enquiry
            </h2>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Complete the form and our regulatory and sales desk will respond
              within one working day with dossiers, COAs, rate contracts or
              territory details as required.
            </p>

            <div className="mt-6 space-y-3 border-t border-border pt-5">
              <div className="flex items-start gap-3">
                <User className="h-4 w-4 text-clinical shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Founder &amp; Managing Director</p>
                  <p className="font-display text-sm font-bold text-navy">
                    {company.founder}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-clinical shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Direct Sales &amp; Dispatch Line</p>
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="font-display text-sm font-bold text-navy hover:text-clinical transition-colors">
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-clinical shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Regulatory Dossiers &amp; RFQ</p>
                  <a href={`mailto:${company.email}`} className="font-display text-sm font-bold text-navy hover:text-clinical transition-colors">
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-clinical shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Registered Corporate Office</p>
                  <p className="text-xs text-navy font-medium leading-relaxed">
                    {company.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Location Map - Bombay Market, Surat */}
            <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card shadow-xs">
              <div className="flex items-center justify-between border-b border-border bg-surface/80 px-3.5 py-2 text-xs">
                <span className="flex items-center gap-1.5 font-semibold text-navy">
                  <MapPin className="h-3.5 w-3.5 text-teal shrink-0" />
                  <span>Office Location Map (Bombay Market, Surat)</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Bombay+Market,+Punagam+Chorasi,+Surat,+Gujarat+395010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-semibold text-clinical hover:underline text-[11px]"
                >
                  <span>Open Full Map</span>
                  <span>↗</span>
                </a>
              </div>
              <div className="relative aspect-16/9 w-full min-h-[190px] sm:min-h-[220px]">
                <iframe
                  title="Redition Pharma Registered Office Location - Bombay Market, Surat"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Bombay+Market,+Punagam+Chorasi,+Surat,+Gujarat+395010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
