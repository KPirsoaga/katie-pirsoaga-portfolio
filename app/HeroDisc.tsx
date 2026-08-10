export function HeroDisc({ className = "" }: { className?: string }) {
  return (
    <div className={`heroDisc ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 800 800" role="presentation" preserveAspectRatio="xMidYMid slice">
        <circle cx="400" cy="400" r="395" fill="var(--coral)" />
        <circle cx="400" cy="400" r="320" fill="none" stroke="rgba(23, 25, 22, 0.22)" strokeWidth="2" />
        <circle cx="400" cy="400" r="250" fill="none" stroke="rgba(23, 25, 22, 0.18)" strokeWidth="1.5" />
        <circle cx="400" cy="400" r="180" fill="none" stroke="rgba(23, 25, 22, 0.14)" strokeWidth="1.5" />
        <circle cx="400" cy="400" r="110" fill="none" stroke="rgba(23, 25, 22, 0.12)" strokeWidth="1" />
        <circle cx="400" cy="400" r="52" fill="var(--black)" />
      </svg>
      <ul className="heroDiscLabels">
        <li className="discLabelEnglish">English</li>
        <li className="discLabelConferences">Conferences</li>
        <li className="discLabelSystems">Systems</li>
        <li className="discLabelPeople">People</li>
      </ul>
    </div>
  );
}
