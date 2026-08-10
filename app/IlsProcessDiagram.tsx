const primary = [
  { stage: "Discover", platform: "WordPress" },
  { stage: "Submit and review", platform: "Pretalx", status: "Operational · user testing" },
  { stage: "Register and pay", platform: "Pretix", status: "Operational · user testing" },
  { stage: "Programme and participants", platform: "Pretalx and connected processes" },
  { stage: "Publish", platform: "Open Journal Systems", status: "Operational" },
];

const supporting = [
  { label: "Documents", platform: "Google Workspace and Google Drive", status: "Operational" },
  { label: "Media", platform: "YouTube", status: "Operational" },
  { label: "Monitoring", platform: "Uptime Kuma", status: "Operational" },
  { label: "Automation", platform: "n8n", status: "Installed · developing" },
];

const future = [
  { label: "Future connected event experience", platform: "Venueless", status: "Roadmap" },
  { label: "Future researcher experience", platform: "Portal, CRM and SSO", status: "Future roadmap" },
];

export function IlsProcessDiagram() {
  return (
    <div className="ilsProcessDiagram" aria-label="ILS connected conference and publication process">
      <div className="processPrimary">
        {primary.map((step, index) => (
          <div className="processPrimaryStep" key={step.platform + step.stage}>
            {index > 0 ? <span className="processArrow" aria-hidden="true">→</span> : null}
            <div className="processNode processNodeWide">
              <span>{step.stage}</span>
              <strong>{step.platform}</strong>
              {step.status ? <em>{step.status}</em> : null}
            </div>
          </div>
        ))}
      </div>
      <div className="processSupporting">
        <p className="processGroupLabel">Supporting services</p>
        <ul>
          {supporting.map((item) => (
            <li key={item.platform}>
              <span>{item.label}</span>
              <strong>{item.platform}</strong>
              <em>{item.status}</em>
            </li>
          ))}
        </ul>
      </div>
      <div className="processFuture">
        <p className="processGroupLabel">Future services</p>
        <ul>
          {future.map((item) => (
            <li key={item.platform}>
              <span>{item.label}</span>
              <strong>{item.platform}</strong>
              <em>{item.status}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
