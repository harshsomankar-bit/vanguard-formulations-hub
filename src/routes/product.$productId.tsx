import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
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
        sku: `VT-${product.id.toUpperCase()}`,
        mpn: `VT-${product.id.replace(/-/g, "").toUpperCase()}`,
        brand: { "@type": "Brand", name: "Vanguard Therapeutics" },
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
        name: `${product.name} | ${product.composition} | Vanguard Therapeutics`,
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
    const title = `${p.name} | ${p.composition} | Vanguard Therapeutics`;
    const description = `Technical dossier for ${p.name} (${p.strength}) by Vanguard Therapeutics. ${p.shortDescription}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: p.keywords },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/product/${p.id}` }],
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
        <div className="border border-border bg-surface p-4 sm:p-6">
          <img
            src={product.image}
            alt={`${product.name} — ${product.composition}`}
            width={1024}
            height={1024}
            className="aspect-square w-full object-contain"
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
            {product.fullDescription}
          </p>

          <div className="mt-8 border border-border bg-surface p-4 sm:p-6">
            <p className="label-caps text-teal">Direct Institutional Supply Desk</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Request batch COA, product dossier and institutional quotation.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                to="/"
                hash="contact"
                className="w-full sm:w-auto bg-navy px-6 py-3 text-center text-sm font-semibold text-navy-foreground transition-colors hover:bg-clinical inline-flex items-center justify-center"
              >
                Request Batch COA & Quotation
              </Link>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="w-full sm:w-auto border border-navy px-6 py-3 text-center text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-navy-foreground inline-flex items-center justify-center"
              >
                {company.phone}
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
            Therapeutic Indications
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
            <Spec label="Therapeutic Class" value={product.therapeuticClass} />
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

      <SiteFooter />
    </div>
  );
}
