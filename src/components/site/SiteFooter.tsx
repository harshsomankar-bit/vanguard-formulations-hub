import { Link } from "@tanstack/react-router";
import { Phone, Mail, User } from "lucide-react";
import { company, products } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 lg:px-8 py-14 md:grid-cols-3">
        <div>
          <Link
            to="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="inline-block mb-4 group"
            aria-label="Redition Pharma Home"
          >
            <img
              src="/images/redition-pharma-logo-white.png"
              alt="Redition Pharma"
              width={480}
              height={124}
              className="h-10 sm:h-11 w-auto object-contain transition-opacity group-hover:opacity-90"
              loading="lazy"
            />
          </Link>
          <p className="mt-1 max-w-sm text-sm text-navy-foreground/70">
            WHO-GMP Schedule M certified manufacturer of institutional hospital
            formulations and authenticated healthcare portfolios.
          </p>
          <p className="mt-4 text-sm text-navy-foreground/70">{company.address}</p>
        </div>
        <div>
          <p className="label-caps text-teal">Formulations</p>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            {products.map((p) => (
              <li key={p.id}>
                <Link to="/product/$productId" params={{ productId: p.id }} className="hover:text-teal">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-caps text-teal">Trade Desk</p>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/80">
            <li className="inline-flex items-center gap-2 text-white font-medium">
              <User className="h-3.5 w-3.5 text-teal shrink-0" />
              <span>Founder: {company.founder}</span>
            </li>
            <li>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="hover:text-teal inline-flex items-center gap-2 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-teal shrink-0" />
                <span>{company.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="hover:text-teal inline-flex items-center gap-2 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-teal shrink-0" />
                <span>{company.email}</span>
              </a>
            </li>
            <li className="pt-2">
              <a
                href="/#faq"
                className="hover:text-teal text-xs inline-flex items-center gap-1 font-semibold text-teal"
              >
                Institutional FAQs →
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Verified Plant & Regulatory Accreditations Strip */}
      <div className="border-t border-navy-foreground/10 bg-black/20 py-5">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal">
              Verified Manufacturing &amp; Licensing:
            </span>
            <div className="flex items-center gap-2 rounded-lg bg-white p-1.5 shadow-2xs">
              <img
                src="/images/certifications/wyyne-healthcare-whogmp-badge.png"
                alt="Wyyne Healthcare (WHO-GMP) An ISO 9001:2015 & IAF Certified Company"
                width={492}
                height={98}
                className="h-7 sm:h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5 shadow-2xs">
              <img
                src="/images/certifications/fssai-logo.png"
                alt="FSSAI"
                width={180}
                height={88}
                className="h-6 sm:h-7 w-auto object-contain"
                loading="lazy"
              />
              <span className="border-l border-slate-300 pl-2 font-mono text-[11px] font-bold text-slate-900">
                Lic. {company.fssai}
              </span>
            </div>
          </div>
          <p className="text-[11px] text-navy-foreground/60">
            WHO-GMP · Revised Schedule M · ISO 9001:2015 · IAF Accredited
          </p>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <p className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-5 text-xs text-navy-foreground/60">
          © 2026 Redition Pharma. All rights reserved. WHO-GMP Schedule M
          certified manufacturing facility. Information is intended for registered
          medical practitioners and institutional buyers only.
        </p>
      </div>
    </footer>
  );
}
