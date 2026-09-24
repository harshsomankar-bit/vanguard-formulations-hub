import { Link } from "@tanstack/react-router";
import { Phone, Mail, Clock } from "lucide-react";
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
            formulations and PCD distribution portfolios.
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
            <li className="inline-flex items-center gap-2 text-navy-foreground/70">
              <Clock className="h-3.5 w-3.5 text-teal shrink-0" />
              <span>Mon–Sat · 09:30 – 18:30 IST</span>
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
      <div className="border-t border-navy-foreground/10">
        <p className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-5 text-xs text-navy-foreground/60">
          © 2026 Redition Pharma Ltd. All rights reserved. WHO-GMP Schedule M
          certified manufacturing facility. Information is intended for registered
          medical practitioners and institutional buyers only.
        </p>
      </div>
    </footer>
  );
}
