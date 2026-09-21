import { useState, useEffect } from "react";
import { Phone, X, MessageCircle, Clock, ShieldCheck, FileText, ArrowRight, ExternalLink } from "lucide-react";
import { company } from "@/data/products";

export function ChatbotSupportWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const cleanPhone = company.phone.replace(/[^0-9+]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone.replace("+", "")}?text=${encodeURIComponent(
    "Hello Vanguard Therapeutics Trade Desk, I would like to request an institutional quotation and batch availability."
  )}`;

  const handleOpenForm = () => {
    setIsOpen(false);
    const formEl = document.getElementById("contact") || document.getElementById("contact-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const input = document.getElementById("cf-name") as HTMLInputElement | null;
        input?.focus();
      }, 400);
    } else {
      window.location.href = "/#contact";
    }
  };

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end font-sans">
      {/* Quick Trade Desk Action Panel */}
      {isOpen && (
        <div className="mb-3 w-[360px] max-w-[calc(100vw-2rem)] border border-border bg-background shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="border-b border-border bg-navy p-4 sm:p-5 text-navy-foreground">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 border border-teal/40 bg-white/5 p-0.5">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                    poster="/support-agent-animation.gif"
                  >
                    <source src="/support-agent-animation.webm" type="video/webm" />
                    <img
                      src="/support-agent-animation.gif"
                      alt="Trade Support Officer"
                      className="h-full w-full object-cover"
                    />
                  </video>
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
                  </span>
                </div>

                <div>
                  <p className="label-caps text-[9px] sm:text-[10px] text-teal">
                    WHO-GMP · Central Dispatch
                  </p>
                  <h3 className="font-display text-sm sm:text-base font-extrabold text-white">
                    Vanguard Trade Desk
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-navy-foreground/75">
                    Vadodara Facility · Quick Support
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="border border-white/10 p-1.5 text-navy-foreground/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
                aria-label="Close Trade Desk"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Operating Info */}
          <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2 text-[10px] sm:text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3 text-teal" />
              09:30–18:30 IST · Mon–Sat
            </span>
            <span className="inline-flex items-center gap-1 text-clinical font-semibold">
              <ShieldCheck className="h-3 w-3" />
              Fast 2-Hour Response
            </span>
          </div>

          {/* Direct Action Buttons */}
          <div className="p-4 sm:p-5 space-y-3">
            {/* Action 1: Official Quotation Form */}
            <button
              type="button"
              onClick={handleOpenForm}
              className="group w-full text-left border border-navy bg-navy p-3.5 text-navy-foreground transition-all hover:bg-clinical hover:border-clinical shadow-sm cursor-pointer block"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-white/10 text-teal">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs sm:text-sm font-bold leading-tight">
                      Request Official Quotation
                    </h4>
                    <p className="mt-0.5 text-[10px] sm:text-[11px] text-navy-foreground/80">
                      Auto reference ID &amp; direct email alert
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-teal transition-transform group-hover:translate-x-1 shrink-0 mt-2" />
              </div>
            </button>

            {/* Action 2: Direct WhatsApp Chat */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="group w-full text-left border border-[#25D366]/30 bg-[#25D366]/5 p-3.5 transition-all hover:bg-[#25D366]/10 hover:border-[#25D366] shadow-xs cursor-pointer block"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#25D366] text-white">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-navy leading-tight">
                      Chat on WhatsApp
                    </h4>
                    <p className="mt-0.5 text-[10px] sm:text-[11px] text-muted-foreground">
                      Instant connection with Vadodara desk
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-[#25D366] transition-transform group-hover:translate-x-0.5 shrink-0 mt-2" />
              </div>
            </a>

            {/* Action 3: Direct Phone Call */}
            <a
              href={`tel:${cleanPhone}`}
              onClick={() => setIsOpen(false)}
              className="group w-full text-left border border-border bg-background p-3.5 transition-all hover:bg-muted/40 hover:border-navy shadow-xs cursor-pointer block"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-border bg-surface text-navy">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-navy leading-tight">
                      Call Trade Hotline
                    </h4>
                    <p className="mt-0.5 font-mono text-[10px] sm:text-[11px] text-clinical font-semibold">
                      {company.phone}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 shrink-0 mt-2" />
              </div>
            </a>
          </div>

          {/* Footer badge */}
          <div className="border-t border-border bg-surface px-4 py-2 text-center text-[10px] text-muted-foreground">
            Schedule M Cleanroom Facility · Pan-India Supply
          </div>
        </div>
      )}

      {/* Floating Trigger Button & Pill */}
      <div className="flex items-center gap-2.5">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group hidden sm:flex items-center gap-2.5 border border-border bg-card/95 px-3.5 py-2 shadow-md backdrop-blur-sm transition-all hover:border-teal cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            <div className="text-left leading-tight">
              <p className="label-caps text-[9px] text-teal tracking-wider">Quick Support</p>
              <p className="font-display text-xs font-bold text-navy tracking-tight group-hover:text-clinical transition-colors">
                Quotation &amp; WhatsApp
              </p>
            </div>
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="group relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center border-2 border-navy bg-navy shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label={isOpen ? "Close trade launcher" : "Open quotation and WhatsApp trade desk"}
        >
          {isOpen ? (
            <div className="flex h-full w-full items-center justify-center bg-navy text-navy-foreground">
              <X className="h-5 w-5 text-teal" />
            </div>
          ) : (
            <>
              <div className="relative h-full w-full overflow-hidden bg-background p-0.5">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  poster="/support-agent-animation.gif"
                >
                  <source src="/support-agent-animation.webm" type="video/webm" />
                  <img
                    src="/support-agent-animation.gif"
                    alt="Support Agent"
                    className="h-full w-full object-cover"
                  />
                </video>
              </div>

              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-navy bg-teal" />
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
