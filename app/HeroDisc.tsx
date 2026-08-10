const DISC_CX = 400;
const DISC_CY = 400;
/** ~22% inset from outer edge — labels sit on the same ring level */
const LABEL_RADIUS = 218;

type DiscLabel = {
  id: string;
  text: string;
  x: number;
  y: number;
  variant?:
    | "people-desktop"
    | "people-mobile"
    | "english-desktop"
    | "english-mobile"
    | "conferences-desktop"
    | "conferences-mobile";
};

const labels: DiscLabel[] = [
  {
    id: "english-desktop",
    text: "English",
    x: DISC_CX,
    y: DISC_CY - LABEL_RADIUS,
    variant: "english-desktop",
  },
  {
    id: "english-mobile",
    text: "English",
    x: DISC_CX,
    y: DISC_CY - LABEL_RADIUS - 52,
    variant: "english-mobile",
  },
  {
    id: "people-desktop",
    text: "People",
    x: DISC_CX - LABEL_RADIUS,
    y: DISC_CY,
    variant: "people-desktop",
  },
  {
    id: "people-mobile",
    text: "People",
    x: 310,
    y: 528,
    variant: "people-mobile",
  },
  {
    id: "conferences-desktop",
    text: "Conferences",
    x: DISC_CX + LABEL_RADIUS,
    y: DISC_CY,
    variant: "conferences-desktop",
  },
  {
    id: "conferences-mobile",
    text: "Conferences",
    x: 554,
    y: 554,
    variant: "conferences-mobile",
  },
  {
    id: "systems",
    text: "Systems",
    x: DISC_CX,
    y: DISC_CY + LABEL_RADIUS,
  },
];

const variantClass: Record<NonNullable<DiscLabel["variant"]>, string> = {
  "english-desktop": "heroDiscLabelEnglishDesktop",
  "english-mobile": "heroDiscLabelEnglishMobile",
  "people-desktop": "heroDiscLabelPeopleDesktop",
  "people-mobile": "heroDiscLabelPeopleMobile",
  "conferences-desktop": "heroDiscLabelConferencesDesktop",
  "conferences-mobile": "heroDiscLabelConferencesMobile",
};

export function HeroDisc({ className = "" }: { className?: string }) {
  return (
    <div className={`heroDisc ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 800 800" role="presentation" preserveAspectRatio="xMidYMid slice">
        <circle cx={DISC_CX} cy={DISC_CY} r="395" fill="var(--coral)" />
        <circle cx={DISC_CX} cy={DISC_CY} r="320" fill="none" stroke="rgba(23, 25, 22, 0.22)" strokeWidth="2" />
        <circle cx={DISC_CX} cy={DISC_CY} r="250" fill="none" stroke="rgba(23, 25, 22, 0.18)" strokeWidth="1.5" />
        <circle cx={DISC_CX} cy={DISC_CY} r="180" fill="none" stroke="rgba(23, 25, 22, 0.14)" strokeWidth="1.5" />
        <circle cx={DISC_CX} cy={DISC_CY} r="110" fill="none" stroke="rgba(23, 25, 22, 0.12)" strokeWidth="1" />
        <circle cx={DISC_CX} cy={DISC_CY} r="52" fill="var(--black)" />
        {labels.map((label) => (
          <text
            key={label.id}
            x={label.x}
            y={label.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className={[
              "heroDiscLabel",
              label.variant && variantClass[label.variant],
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {label.text}
          </text>
        ))}
      </svg>
    </div>
  );
}
