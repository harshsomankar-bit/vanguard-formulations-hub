import { Link } from "@tanstack/react-router";
import { company } from "@/data/products";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden border-b border-border bg-navy text-navy-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 label-caps">
          <span>WHO-GMP · Schedule M Certified Manufacturing</span>
          <span className="flex gap-6">
            <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-clinical bg-clinical text-clinical-foreground font-display text-lg font-extrabold">
            V
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-extrabold tracking-tight text-navy">
              VANGUARD THERAPEUTICS
            </span>
            <span className="block text-[11px] tracking-[0.18em] text-muted-foreground">
              INSTITUTIONAL FORMULATIONS
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-navy lg:flex">
          <Link to="/" hash="overview" className="hover:text-clinical">
            Corporate Overview
          </Link>
          <Link to="/" hash="products" className="hover:text-clinical">
            Formulations
          </Link>
          <Link to="/" hash="quality" className="hover:text-clinical">
            Quality Compliance
          </Link>
          <Link to="/" hash="supply" className="hover:text-clinical">
            Institutional Supply
          </Link>
        </nav>
        <a
          href={`mailto:${company.email}`}
          className="hidden bg-navy px-5 py-2.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-clinical sm:inline-block"
        >
          Request Quotation
        </a>
      </div>
    </header>
  );
}
