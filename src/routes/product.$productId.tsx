import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContactForm } from "@/components/site/ContactForm";
import { ProductImageSlider } from "@/components/site/ProductImageSlider";
import { Phone, Mail, MapPin, ShieldCheck, ArrowDown, User, MessageCircle } from "lucide-react";
import { company, getProduct, SITE_URL, type Product } from "@/data/products";

function schema(product: Product) {
  const url = `${SITE_URL}/product/${product.id}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: product.name,
        alternateName: product.alternateNames,
        image: product.images.map((i) => `${SITE_URL}${i}`),
        description: product.shortDescription,
        sku: `RP-${product.id.toUpperCase()}`,
        mpn: `RP-${product.id.replace(/-/g, "").toUpperCase()}`,
        brand: { "@type": "Brand", name: "Redition Pharma" },
        manufacturer: {
          "@type": "Organization",
          name: company.name,
          url: SITE_URL,
        },
        category: product.category,
        offers: {
          "@type": "Offer",
          url,
          priceCurrency: "INR",
          price: product.price.toFixed(2),
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: product.ratingValue,
          reviewCount: product.reviewCount,
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#medicalPage`,
        url,
        name: `${product.name} | ${product.composition} | Redition Pharma`,
        about: {
          "@type": "Drug",
          name: product.name,
          activeIngredient: product.activeIngredient,
          dosageForm: product.dosageForm,
          administrationRoute: "Oral",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Formulations",
            item: `${SITE_URL}/#products`,
          },
          { "@type": "ListItem", position: 3, name: product.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: product.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export const Route = createFileRoute("/product/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => {
    const p = loaderData as Product | undefined;
    if (!p) return {};
    const title = `${p.name} | ${p.composition} | Redition Pharma`;
    const description = `Technical dossier for ${p.name} (${p.strength}) by Redition Pharma. ${p.shortDescription}`;
    const productUrl = `${SITE_URL}/product/${p.id}`;
    const productImageUrl = `${SITE_URL}${p.image}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: p.keywords },
        { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: productUrl },
        { property: "og:image", content: productImageUrl },
        { property: "og:image:alt", content: `${p.name} (${p.composition}) - Redition Pharma Formulations` },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Redition Pharma Ltd." },
        { property: "og:locale", content: "en_IN" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: productImageUrl },
      ],
      links: [{ rel: "canonical", href: productUrl }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(schema(p)) },
      ],
    };
  },
  component: ProductPage,
});

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-border py-4">
      <dt className="label-caps text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-sm leading-relaxed text-navy">{value}</dd>
    </div>
  );
}

function ProductPage() {
  const product = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content">
        <nav className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-3 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-clinical">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link to="/" hash="products" className="hover:text-clinical">
            Formulations
          </Link>
          <span className="px-2">/</span>
          <span className="text-navy">{product.name}</span>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:gap-12 sm:px-6 sm:py-12 lg:grid-cols-2">
        <div>
          <ProductImageSlider
            images={product.images && product.images.length > 0 ? product.images : [product.image]}
            productName={product.name}
            composition={product.composition}
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-foreground">
              {product.legalStatus}
            </span>
            <span className="border border-teal px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-teal">
              {product.category}
            </span>
          </div>
          <h1 className="mt-5 font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-clinical">{product.composition}</p>

          <div className="mt-7 grid grid-cols-2 gap-px border border-border bg-border">
            <div className="bg-background px-4 py-3 sm:px-5 sm:py-4">
              <p className="label-caps text-muted-foreground">Reference MRP</p>
              <p className="mt-1 font-display text-xl sm:text-2xl font-extrabold text-navy">
                ₹{product.price.toFixed(2)}
              </p>
            </div>
            <div className="bg-background px-4 py-3 sm:px-5 sm:py-4">
              <p className="label-caps text-muted-foreground">Standard Packaging</p>
              <p className="mt-1 font-display text-base sm:text-lg font-bold text-navy">
                {product.packaging}
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Verified Manufacturing Facility & FSSAI Verification */}
          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-slate-50/80 p-3">
            <div className="flex items-center gap-2 rounded-lg bg-white p-1.5 shadow-2xs border border-border/80">
              <img
                src="/images/certifications/wyyne-healthcare-whogmp-badge.png"
                alt="Wyyne Healthcare (WHO-GMP) An ISO 9001:2015 & IAF Certified Company"
                width={492}
                height={98}
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5 shadow-2xs border border-border/80">
              <img
                src="/images/certifications/fssai-logo.png"
                alt="FSSAI"
                width={180}
                height={88}
                className="h-6 w-auto object-contain"
                loading="lazy"
              />
              <span className="border-l border-slate-300 pl-2 font-mono text-[11px] font-bold text-navy">
                Lic. {company.fssai}
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border/80 bg-surface/80 p-5 sm:p-6 shadow-2xs">
            <div className="flex items-center gap-2 text-teal">
              <ShieldCheck className="h-4 w-4" />
              <span className="label-caps text-xs font-semibold">Direct Institutional Supply Desk</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Request batch Certificate of Analysis (COA), technical dossier, and institutional rate contracts.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="#enquiry-form"
                className="w-full sm:w-auto rounded-xl bg-navy px-6 py-3 text-center text-sm font-semibold text-navy-foreground transition-all duration-200 hover:bg-clinical hover:shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>Request Batch COA & Quotation</span>
                <ArrowDown className="h-4 w-4 text-teal" />
              </a>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="w-full sm:w-auto rounded-xl border border-navy/30 bg-background px-6 py-3 text-center text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 text-teal" />
                <span>{company.phone}</span>
              </a>
              <a
                href={`https://wa.me/919893597108?text=${encodeURIComponent(`Hello Redition Pharma, I would like to request a quotation and batch COA for ${product.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-xl border border-[#25D366]/40 bg-[#25D366]/5 px-6 py-3 text-center text-sm font-semibold text-navy transition-colors hover:bg-[#25D366] hover:text-white inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp Trade Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-display text-2xl font-extrabold text-navy">
            Pharmacological Advantages & Clinical Evidence
          </h2>
          <ul className="mt-8 grid gap-px border border-border bg-border md:grid-cols-2">
            {product.bulletPoints.map((b, i) => (
              <li key={b} className="flex gap-4 bg-background p-6">
                <span className="label-caps text-clinical">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-navy">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-navy">
            Clinical Indications
          </h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {product.indications.map((i) => (
              <li key={i} className="py-3.5 text-sm text-navy">
                <span className="mr-3 text-teal">—</span>
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-extrabold text-navy">
            Technical Specifications
          </h2>
          <dl className="mt-6 border-t border-border">
            <Spec label="Active Ingredient" value={product.activeIngredient} />
            <Spec label="Dosage Form" value={product.dosageForm} />
            <Spec label="Pharmacopoeial Standard" value={product.pharmacopoeia} />
            <Spec label="Formulation Category" value={product.therapeuticClass} />
            <Spec label="Administration" value={product.dosageGuide} />
            <Spec label="Packaging Format" value={product.packaging} />
            <Spec
              label="Storage & Stability"
              value={`${product.storage} | Shelf life: ${product.shelfLife}`}
            />
          </dl>
        </div>
      </section>

      <section className="border-t border-border bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-display text-2xl font-extrabold">Mechanism of Action</h2>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-navy-foreground/80">
            {product.mechanism}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-display text-2xl font-extrabold text-navy">
          Institutional FAQs
        </h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {product.faqs.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="font-display text-lg font-bold text-navy">{f.q}</h3>
              <p className="mt-2 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Enquiry & Procurement Form */}
      <section id="enquiry-form" className="border-t border-border bg-gradient-to-b from-slate-50 via-teal-50/15 to-blue-50/20 scroll-mt-16 py-12 sm:py-16">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-3.5 py-1 text-xs font-semibold text-teal mb-3">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Direct Formulation RFQ</span>
            </div>
            <h2 className="font-display text-2xl font-extrabold text-navy sm:text-3xl">
              Procurement & Dossier Request for {product.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Submit your hospital tender requirements, rate-contract bids, or Certificate of Analysis (COA) requests. Our regulatory trade desk dispatches validated batch documentation within 24 hours.
            </p>

            <div className="mt-6 rounded-xl border border-border/80 bg-surface/80 p-4 sm:p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Formulation Name:</span>
                <span className="font-bold text-navy">{product.name}</span>
              </div>
              <div className="flex items-center justify-between text-xs border-t border-border/60 pt-2.5">
                <span className="text-muted-foreground">Active Composition:</span>
                <span className="font-semibold text-clinical text-right">{product.composition}</span>
              </div>
              <div className="flex items-center justify-between text-xs border-t border-border/60 pt-2.5">
                <span className="text-muted-foreground">Standard Packaging:</span>
                <span className="font-semibold text-navy">{product.packaging}</span>
              </div>
              <div className="flex items-center justify-between text-xs border-t border-border/60 pt-2.5">
                <span className="text-muted-foreground">Quality Benchmark:</span>
                <span className="font-semibold text-teal">WHO-GMP Monograph Validated</span>
              </div>
            </div>

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
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Direct Sales & Dispatch Line</p>
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="font-display text-sm font-bold text-navy hover:text-clinical transition-colors">
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-clinical shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Regulatory Dossiers & RFQ</p>
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
          </div>

          <ContactForm
            defaultProduct={`${product.name} (${product.strength} - ${product.packaging})`}
            defaultEnquiryType="Product Dossier & COA Request"
            title={`Procurement Request — ${product.name}`}
            subtitle={`Dedicated regulatory desk for batch COAs, tenders, and institutional supply of ${product.name}.`}
          />
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
  );
}
