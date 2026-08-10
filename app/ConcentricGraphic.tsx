export function ConcentricGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={`concentricGraphic ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 420 420" role="presentation">
        <circle cx="210" cy="210" r="198" fill="none" stroke="var(--coral)" strokeWidth="1.5" opacity="0.95" />
        <circle cx="210" cy="210" r="152" fill="none" stroke="var(--coral)" strokeWidth="1.5" opacity="0.78" />
        <circle cx="210" cy="210" r="106" fill="none" stroke="var(--coral)" strokeWidth="1.5" opacity="0.62" />
        <circle cx="210" cy="210" r="60" fill="none" stroke="var(--coral)" strokeWidth="1.5" opacity="0.48" />
        <circle cx="210" cy="210" r="14" fill="var(--coral)" opacity="0.9" />
      </svg>
      <ul className="concentricLabels">
        <li className="labelEnglish">English</li>
        <li className="labelConferences">Conferences</li>
        <li className="labelSystems">Systems</li>
        <li className="labelPeople">People</li>
      </ul>
    </div>
  );
}
