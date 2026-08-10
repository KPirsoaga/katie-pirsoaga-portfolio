export function BrandMark({ size = 22 }: { size?: number }) {
  return (
    <svg
      className="brandMark"
      width={size}
      height={size}
      viewBox="0 0 22 22"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="11" cy="11" r="9" fill="none" stroke="var(--coral)" strokeWidth="1.25" />
      <circle cx="11" cy="11" r="2.5" fill="var(--lime)" />
    </svg>
  );
}
