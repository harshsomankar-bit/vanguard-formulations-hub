import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, ChevronDown, Pill, ArrowRight } from "lucide-react";
import { company, products } from "@/data/products";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (sectionId: string, focusInput = false) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setMobileProductsOpen(false);

    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (focusInput) {
        setTimeout(() => {
          document.getElementById("cf-name")?.focus();
        }, 350);
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      {/* Running Upper Marquee Ticker Bar Matching Website Navy & Teal Theme */}
      <div className="relative overflow-hidden bg-navy py-2 text-white border-b border-white/10 select-none">
        <div className="flex w-max animate-ticker items-center text-[11px] font-bold uppercase tracking-wider text-white">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="px-4 text-white">WHO-GMP CERTIFIED FORMULATIONS</span>
              <span className="text-teal font-black text-xs">·</span>
              <span className="px-4 text-white">PAN-INDIA COLD-CHAIN LOGISTICS</span>
              <span className="text-teal font-black text-xs">·</span>
              <span className="px-4 text-slate-100">
                AVAILABLE SOON ON LEADING E-COMMERCE PLATFORMS: TATA 1MG, APOLLO 24|7, PHARMEASY, NETMEDS &amp; AMAZON PHARMACY
              </span>
              <span className="text-teal font-black text-xs">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-3 group"
          aria-label="Redition Pharma Home"
        >
          <img
            src="/images/redition-pharma-logo.png"
            alt="Redition Pharma"
            width={480}
            height={124}
            className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Navigation Matching User Request: Home · Products & Formulations v · About Us · Quality Policy · Contact */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-navy md:flex">
          {/* 1. Home */}
          <Link
            to="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="transition-colors hover:text-clinical cursor-pointer"
          >
            Home
          </Link>

          {/* 2. Products & Formulations with Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => handleNavClick("products")}
              className="flex items-center gap-1.5 transition-colors hover:text-clinical cursor-pointer py-1.5"
              aria-expanded={productsDropdownOpen}
            >
              <span>Products &amp; Formulations</span>
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                  productsDropdownOpen ? "rotate-180 text-clinical" : ""
                }`}
              />
            </button>

            {/* Formulations Dropdown Menu */}
            {productsDropdownOpen && (
              <div className="absolute left-0 top-full w-96 rounded-xl border border-border bg-background shadow-2xl p-2.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <div className="py-1 space-y-1">
                  {products.map((p) => (
                    <Link
                      key={p.id}
                      to="/product/$productId"
                      params={{ productId: p.id }}
                      onClick={() => setProductsDropdownOpen(false)}
                      className="group flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-surface"
                    >
                      <div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-200/80 shrink-0 p-1 flex items-center justify-center overflow-hidden shadow-2xs group-hover:border-teal/50 transition-colors">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-xs font-bold text-navy group-hover:text-clinical leading-tight truncate">
                          {p.name}
                        </p>
                        <p className="mt-0.5 text-[11px] text-muted-foreground truncate">{p.strength} · {p.type}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="border-t border-border pt-2 px-3 pb-1">
                  <button
                    type="button"
                    onClick={() => handleNavClick("products")}
                    className="flex w-full items-center justify-between text-xs font-semibold text-clinical hover:underline cursor-pointer"
                  >
                    <span>View All Portfolio Formulations</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 3. Quality Policy */}
          <Link
            to="/"
            hash="quality"
            onClick={(e) => {
              const el = document.getElementById("quality");
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="transition-colors hover:text-clinical cursor-pointer"
          >
            Quality Policy
          </Link>

          {/* 4. About Us */}
          <Link
            to="/"
            hash="about"
            onClick={(e) => {
              const el = document.getElementById("about");
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="transition-colors hover:text-clinical cursor-pointer"
          >
            About Us
          </Link>

          {/* 5. Contact */}
          <Link
            to="/"
            hash="contact"
            onClick={(e) => {
              const el = document.getElementById("contact") || document.getElementById("contact-form");
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => {
                  document.getElementById("cf-name")?.focus();
                }, 400);
              }
            }}
            className="transition-colors hover:text-clinical cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        {/* Right Action CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/"
            hash="contact"
            onClick={(e) => {
              const el = document.getElementById("contact-form") || document.getElementById("contact");
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                setTimeout(() => {
                  const input = document.getElementById("cf-name") as HTMLInputElement | null;
                  input?.focus();
                }, 400);
              }
            }}
            className="bg-navy px-3.5 py-2 font-display text-[11px] font-bold tracking-wide text-navy-foreground transition-colors hover:bg-clinical sm:px-5 sm:py-2.5 sm:text-sm cursor-pointer shadow-xs"
          >
            Request Quotation
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center border border-border bg-card text-navy transition-colors hover:border-teal hover:text-teal md:hidden cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background px-5 py-4 shadow-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-navy">
            {/* 1. Home */}
            <button
              type="button"
              onClick={() => handleNavClick("top")}
              className="text-left font-display text-base font-bold text-navy hover:text-clinical py-1.5 border-b border-border/50 cursor-pointer"
            >
              Home
            </button>

            {/* 2. Products & Formulations with Accordion */}
            <div className="border-b border-border/50 py-1.5">
              <button
                type="button"
                onClick={() => setMobileProductsOpen((prev) => !prev)}
                className="flex w-full items-center justify-between text-left font-display text-base font-bold text-navy hover:text-clinical cursor-pointer"
              >
                <span>Products &amp; Formulations</span>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform ${
                    mobileProductsOpen ? "rotate-180 text-clinical" : ""
                  }`}
                />
              </button>

              {mobileProductsOpen && (
                <div className="mt-2 space-y-1.5 pl-3 border-l-2 border-teal/40 py-1">
                  {products.map((p) => (
                    <Link
                      key={p.id}
                      to="/product/$productId"
                      params={{ productId: p.id }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 py-1 text-xs font-medium text-muted-foreground hover:text-navy"
                    >
                      <div className="h-9 w-9 rounded-lg bg-slate-50 border border-border/80 shrink-0 p-0.5 flex items-center justify-center overflow-hidden shadow-2xs">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-navy truncate">{p.name}</p>
                        <p className="text-[10px] text-teal">{p.strength}</p>
                      </div>
                    </Link>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleNavClick("products")}
                    className="block pt-1 text-xs font-bold text-clinical hover:underline cursor-pointer"
                  >
                    View All Products Section →
                  </button>
                </div>
              )}
            </div>

            {/* 3. Quality Policy */}
            <button
              type="button"
              onClick={() => handleNavClick("quality")}
              className="text-left font-display text-base font-bold text-navy hover:text-clinical py-1.5 border-b border-border/50 cursor-pointer"
            >
              Quality Policy
            </button>

            {/* 4. About Us */}
            <button
              type="button"
              onClick={() => handleNavClick("about")}
              className="text-left font-display text-base font-bold text-navy hover:text-clinical py-1.5 border-b border-border/50 cursor-pointer"
            >
              About Us
            </button>

            {/* 5. Contact */}
            <button
              type="button"
              onClick={() => handleNavClick("contact", true)}
              className="text-left font-display text-base font-bold text-navy hover:text-clinical py-1.5 border-b border-border/50 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Hotline & Email */}
          <div className="mt-4 pt-3 border-t border-border flex flex-col gap-2 text-xs text-muted-foreground">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 font-semibold text-navy hover:text-clinical"
            >
              <Phone className="h-3.5 w-3.5 text-teal" />
              <span>Direct Hotline: {company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 font-semibold text-navy hover:text-clinical"
            >
              <Mail className="h-3.5 w-3.5 text-teal" />
              <span>{company.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
