type Step = {
  action: string;
  platform: string;
  note?: string;
};

const homeSteps: Step[] = [
  { action: "Discover", platform: "WordPress" },
  { action: "Submit and review", platform: "Pretalx", note: "Operational · user testing" },
  { action: "Register and pay", platform: "Pretix", note: "Operational · user testing" },
  { action: "Publish", platform: "Open Journal Systems" },
];

export function ProcessStrip({ steps = homeSteps }: { steps?: Step[] }) {
  return (
    <div className="processStrip" aria-label="Operational journey">
      {steps.map((step, index) => (
        <div className="processStep" key={step.platform}>
          {index > 0 ? <span className="processArrow" aria-hidden="true">→</span> : null}
          <div className="processNode">
            <span>{step.action}</span>
            <strong>{step.platform}</strong>
            {step.note ? <em>{step.note}</em> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
