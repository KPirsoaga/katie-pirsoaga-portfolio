export function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      className="brandMark"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="14" cy="14" r="12" fill="none" stroke="var(--coral)" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="7" fill="none" stroke="var(--coral)" strokeWidth="1.5" opacity="0.65" />
      <circle cx="14" cy="14" r="3" fill="var(--lime)" />
    </svg>
  );
}
