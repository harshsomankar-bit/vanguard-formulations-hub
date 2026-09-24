export function MedicalTechHeroAnimation() {
  return (
    <div className="relative flex w-full h-full max-w-[440px] items-center justify-center">
      {/* Animation Canvas */}
      <div className="relative aspect-square w-full mix-blend-multiply select-none">
        <img
          src="/pharmacy-counter-static.jpg"
          alt="Redition Pharma Pharmacy Dispensing Consultation"
          width={440}
          height={440}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-contain"
        />

        {/* Crisp counter sign overlay correcting typo to PHARMACY */}
        <svg
          viewBox="0 0 450 450"
          className="pointer-events-none absolute inset-0 h-full w-full select-none"
          aria-hidden="true"
        >
          {/* Desk Pharmacy Sign with Medical Cross Emblem */}
          <rect x="325" y="282" width="112" height="24" fill="#ffffff" />

          {/* Medical Cross in Circle */}
          <circle cx="338" cy="294" r="7.5" stroke="#059669" strokeWidth="1.5" fill="#ecfdf5" />
          <path
            d="M 338 290.5 L 338 297.5 M 334.5 294 L 341.5 294"
            stroke="#059669"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Crisp PHARMACY text in Deep Clinical Navy */}
          <text
            x="391"
            y="298"
            fontFamily="Manrope, ui-sans-serif, system-ui, sans-serif"
            fontSize="11"
            fontWeight="800"
            fill="#0f172a"
            letterSpacing="1.3"
            textAnchor="middle"
          >
            PHARMACY
          </text>
        </svg>
      </div>
    </div>
  );
}
