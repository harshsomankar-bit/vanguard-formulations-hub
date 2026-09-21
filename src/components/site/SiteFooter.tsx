import { Link } from "@tanstack/react-router";
import { company, products } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 lg:px-8 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-extrabold">VANGUARD THERAPEUTICS LTD.</p>
          <p className="mt-3 max-w-sm text-sm text-navy-foreground/70">
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
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            <li>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
            </li>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>Mon–Sat · 09:30 – 18:30 IST</li>
            <li className="pt-2 border-t border-navy-foreground/15">
              <a href="/#faq" className="hover:text-teal text-xs inline-flex items-center gap-1 font-semibold">
                Institutional FAQs →
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <p className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-5 text-xs text-navy-foreground/60">
          © 2026 Vanguard Therapeutics Ltd. All rights reserved. WHO-GMP Schedule M
          certified manufacturing facility. Information is intended for registered
          medical practitioners and institutional buyers only.
        </p>
      </div>
    </footer>
  );
}
