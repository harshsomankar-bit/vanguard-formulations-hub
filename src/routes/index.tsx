import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContactForm } from "@/components/site/ContactForm";
import { company, products, SITE_URL } from "@/data/products";

const title =
  "Vanguard Therapeutics Ltd. | WHO-GMP Schedule M Certified Pharmaceutical Formulations";
const description =
  "Institutional hospital supply and PCD distribution of WHO-GMP Schedule M certified formulations manufactured in Vadodara, Gujarat by Vanguard Therapeutics Ltd.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.name,
          url: SITE_URL,
          telephone: company.phone,
          email: company.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot 42, GIDC Industrial Estate",
            addressLocality: "Vadodara",
            addressRegion: "Gujarat",
            postalCode: "390010",
            addressCountry: "IN",
          },
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
  },
  {
    k: "02",
    t: "Institutional Hospital Supply",
    d: "Rate-contract fulfilment for hospitals, trusts and government tenders with batch traceability and COA on every consignment.",
  },
  {
    k: "03",
    t: "PCD & Franchise Distribution",
    d: "Monopoly territory allotment, promotional inputs and protected pricing across pan-India distribution networks.",
  },
  {
    k: "04",
    t: "Analytical Quality Control",
    d: "HPLC, UV-Vis, dissolution and ICP-MS heavy-metal screening with real-time and accelerated stability chambers.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section id="overview" className="relative border-b border-border bg-surface">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="label-caps text-clinical">
            Vanguard Medical · Vanguard Pharma · Est. Vadodara, India
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] text-navy md:text-6xl">
            Certified clinical formulations engineered for institutional supply.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Vanguard Therapeutics Ltd. manufactures WHO-GMP Schedule M compliant
            hematinics, neurology, gastroenterology and vestibular formulations for
            hospitals, institutional buyers and PCD distribution partners.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="products"
              className="bg-navy px-7 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-clinical"
            >
              View Formulations Portfolio
            </Link>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="border border-navy px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-navy-foreground"
            >
              Trade Desk {company.phone}
            </a>
          </div>
          <dl className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["5", "Authenticated formulations"],
              ["100%", "Batch-wise COA release"],
              ["24–36", "Months validated shelf life"],
              ["ICP-MS", "Heavy metal screening"],
            ].map(([v, l]) => (
              <div key={l} className="bg-background px-6 py-7">
                <dt className="font-display text-3xl font-extrabold text-clinical">{v}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-20">
        <p className="label-caps text-teal">Formulations Portfolio</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
          Therapeutic range with full pharmacopoeial dossiers
        </h2>
        <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.id}
              to="/product/$productId"
              params={{ productId: p.id }}
              className="group flex flex-col bg-background p-7 transition-colors hover:bg-surface"
            >
              <div className="flex items-center justify-between">
                <span className="label-caps text-clinical">{p.type}</span>
                <span className="border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {p.legalStatus === "Schedule H Prescription" ? "Rx · Schedule H" : "OTC"}
                </span>
              </div>
              <img
                src={p.image}
                alt={`${p.name} pack shot`}
                loading="lazy"
                width={1024}
                height={1024}
                className="mt-5 aspect-square w-full bg-surface object-contain"
              />
              <h3 className="mt-5 font-display text-xl font-bold text-navy group-hover:text-clinical">
                {p.name}
              </h3>
              <p className="mt-2 text-xs uppercase tracking-wider text-teal">{p.category}</p>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {p.shortDescription}
              </p>
              <div className="mt-auto flex items-end justify-between pt-6">
                <span className="font-display text-lg font-bold text-navy">
                  ₹{p.price.toFixed(2)}
                </span>
                <span className="text-sm font-semibold text-clinical">
                  Technical dossier →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="label-caps text-teal">Quality Compliance</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold text-navy md:text-4xl">
            Documented compliance at every stage of manufacture
          </h2>
          <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.k} className="bg-background p-8">
                <span className="label-caps text-clinical">{c.k}</span>
                <h3 className="mt-3 font-display text-xl font-bold text-navy">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply */}
      <section id="supply" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 border border-border p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="label-caps text-teal">Institutional Supply</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy">
              Trade desk for hospitals, tenders and PCD partners
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Request batch Certificates of Analysis, product dossiers, rate contracts
              or monopoly territory allotment. Our regulatory desk responds to
              institutional enquiries within one working day.
            </p>
          </div>
          <dl className="divide-y divide-border border-t border-border">
            {[
              ["Manufacturing & Corporate Office", company.address],
              ["Institutional Hotline", company.phone],
              ["Regulatory & Sales Email", company.email],
            ].map(([l, v]) => (
              <div key={l} className="py-5">
                <dt className="label-caps text-muted-foreground">{l}</dt>
                <dd className="mt-1 text-base font-medium text-navy">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="label-caps text-teal">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy">
              Send an institutional enquiry
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Complete the form and our regulatory and sales desk will respond
              within one working day with dossiers, COAs, rate contracts or
              territory details as required.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>{company.phone}</li>
              <li>{company.email}</li>
              <li>Mon–Sat · 09:30 – 18:30 IST</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
