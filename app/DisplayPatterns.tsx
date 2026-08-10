import type { ReactNode } from "react";
import { ArrowLink } from "./components";
import { ConcentricGraphic } from "./ConcentricGraphic";

export function MetroStrip({ compact = false }: { compact?: boolean }) {
  const steps = [
    { label: "Discover", platform: "WordPress" },
    { label: "Submit and review", platform: "Pretalx", note: compact ? undefined : "Operational · user testing" },
    { label: "Register and pay", platform: "Pretix", note: compact ? undefined : "Operational · user testing" },
    { label: "Publish", platform: "Open Journal Systems" },
  ];

  return (
    <div className={`metroStrip${compact ? " metroStripCompact" : ""}`} aria-label="ILS operational journey">
      <div className="metroTrack">
        {steps.map((step, index) => (
          <div className="metroStep" key={step.platform}>
            {index > 0 ? <span className="metroConnector" aria-hidden="true" /> : null}
            <div className="metroNode">
              <span className="metroLabel">{step.label}</span>
              <strong>{step.platform}</strong>
              {step.note ? <em>{step.note}</em> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function JourneyMap() {
  const primary = [
    { stage: "Discover", platform: "WordPress", detail: "Public site and conference discovery" },
    { stage: "Submit and review", platform: "Pretalx", detail: "Abstract submission and peer review" },
    { stage: "Register and pay", platform: "Pretix", detail: "Registration and payment workflows" },
    { stage: "Publish", platform: "Open Journal Systems", detail: "Proceedings and academic archive" },
  ];
  const satellites = ["Google Workspace", "YouTube", "Uptime Kuma", "n8n"];
  const future = ["Venueless", "Researcher portal", "CRM", "SSO"];

  return (
    <div className="journeyMap" aria-label="ILS connected conference and publication process">
      <div className="journeyPrimary">
        {primary.map((step, index) => (
          <div className="journeyStage" key={step.platform}>
            {index > 0 ? <span className="journeyLine" aria-hidden="true" /> : null}
            <div className="journeyNode">
              <span>{step.stage}</span>
              <strong>{step.platform}</strong>
              <p>{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="journeySatellites">
        <span className="journeyRowLabel">Supporting systems</span>
        <div className="journeyTags">
          {satellites.map((item) => (
            <b key={item}>{item}</b>
          ))}
        </div>
      </div>
      <div className="journeyFuture">
        <span className="journeyRowLabel">Future roadmap</span>
        <div className="journeyTags">
          {future.map((item) => (
            <b key={item}>{item}</b>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OperationalBoard() {
  const columns = [
    {
      title: "Operational",
      type: "live",
      items: [
        { name: "Open Journal Systems", detail: "Proceedings and publication workflows" },
        { name: "WordPress", detail: "Conference discovery and public site" },
        { name: "Google Workspace", detail: "Organisational email and documents" },
        { name: "VPS infrastructure", detail: "Hostinger Linux environment" },
        { name: "Uptime Kuma", detail: "Availability monitoring" },
      ],
    },
    {
      title: "User testing",
      type: "testing",
      items: [
        { name: "Pretalx", detail: "Abstract submission, peer review, programmes" },
        { name: "Pretix", detail: "Registration and payment workflows" },
      ],
    },
    {
      title: "Developing",
      type: "build",
      items: [{ name: "n8n", detail: "Administrative automation" }],
    },
    {
      title: "Roadmap",
      type: "next",
      items: [
        { name: "Venueless", detail: "Connected online-event experience" },
        { name: "Researcher portal · CRM · SSO", detail: "Unified researcher services" },
      ],
    },
  ];

  return (
    <div className="operationalBoard" aria-label="ILS system status">
      {columns.map((column) => (
        <div className="boardColumn" key={column.title}>
          <h4>{column.title}</h4>
          <ul>
            {column.items.map((item) => (
              <li key={item.name}>
                <span className={`status ${column.type}`}>
                  {column.title === "User testing" ? "Operational · user testing" : column.title === "Developing" ? "Installed · developing" : column.title === "Roadmap" ? (item.name === "Venueless" ? "Roadmap" : "Future roadmap") : "Operational"}
                </span>
                <strong>{item.name}</strong>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ResponsibilityIndex() {
  const items = [
    "Conference delivery · onsite, online and hybrid",
    "Platform administration · Pretalx, Pretix, OJS, WordPress",
    "Infrastructure · VPS, nginx, PostgreSQL, Redis, SSL",
    "People journeys · presenter, reviewer, registrant, organiser",
    "Media · social, video, YouTube",
    "User testing · validate complete process before expansion",
  ];

  return (
    <ul className="responsibilityIndex">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function OwnershipPanels() {
  const panels = [
    {
      title: "The constraint",
      copy: "Joe needs to add work, replace images, update his CV and change details as his photography business grows. He should not need Git, code or developer support for routine updates.",
    },
    {
      title: "The decision",
      copy: "React, TinaCMS, GitHub and Cloudflare Pages create a Git-backed publishing system with version history, automated deployment, and no database administration.",
    },
    {
      title: "The result",
      copy: "I hid technical fields, protected system settings, added plain-English guidance and changed Save to Update My Website to match his mental model.",
    },
  ];

  return (
    <div className="ownershipPanels">
      {panels.map((panel) => (
        <article key={panel.title}>
          <span>{panel.title}</span>
          <p>{panel.copy}</p>
        </article>
      ))}
    </div>
  );
}

export function LearningLoop() {
  const steps = ["Weekly Topic", "Grammar Help", "Scenarios", "Review"];

  return (
    <div className="learningLoop" aria-label="Say It Your Way learning loop">
      <div className="loopRing">
        {steps.map((step, index) => (
          <div className="loopStep" key={step} style={{ ["--i" as string]: index }}>
            <strong>{step}</strong>
          </div>
        ))}
        <div className="loopCentre">
          <span>People</span>
          <p>Teacher-supported · local QR · no accounts</p>
        </div>
      </div>
      <ul className="loopNotes">
        <li>Audio-first and practical Romanian learning</li>
        <li>Dyslexia and ADHD-informed design</li>
        <li>Privacy-focused progress storage and PWA capability</li>
      </ul>
    </div>
  );
}

export function SkillsClusters() {
  const clusters = [
    {
      title: "English communication",
      accent: "lime",
      items: "Professional English · lesson development · proofreading · interview preparation · DevAccelerator",
    },
    {
      title: "Conference operations",
      accent: "coral",
      items: "Pretalx · Pretix · hybrid delivery · documentation · social media · YouTube · Canva",
    },
    {
      title: "Academic and publication platforms",
      accent: "coral",
      items: "Open Journal Systems · WordPress · Google Workspace for Nonprofits · proceedings workflows",
    },
    {
      title: "Infrastructure and monitoring",
      accent: "coral",
      items: "Hostinger · Linux VPS · nginx · PostgreSQL · Redis · Uptime Kuma · n8n",
    },
    {
      title: "CRM and system administration",
      accent: "ivory",
      items: "Salesforce administration · configuration · Flows · reporting · access · user support",
    },
    {
      title: "Product and interface development",
      accent: "lime",
      items: "React · TypeScript · Vite · TinaCMS · GitHub · Cloudflare · PWA",
    },
  ];

  return (
    <div className="skillsClusters">
      {clusters.map((cluster) => (
        <article className={`skillsCluster skillsCluster${cluster.accent}`} key={cluster.title}>
          <h3>{cluster.title}</h3>
          <p>{cluster.items}</p>
        </article>
      ))}
    </div>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return <blockquote className="pullQuote">{children}</blockquote>;
}

export function CaseTurn({ label, title, href }: { label: string; title: string; href: string }) {
  return (
    <a className="caseTurn" href={href}>
      <span>{label}</span>
      <strong>{title}</strong>
      <em aria-hidden="true">↓</em>
    </a>
  );
}

export function FlagshipCard() {
  return (
    <article className="workCardFlagship workCardFlagshipWide">
      <ConcentricGraphic className="workCardWatermark" />
      <p className="cardMeta">Flagship ecosystem · Nonprofit</p>
      <h3>International Linguistic Society</h3>
      <p>International conference operation and the connected academic platform behind it.</p>
      <MetroStrip compact />
      <div className="cardLinks">
        <ArrowLink href="/projects#ils">Case study</ArrowLink>
      </div>
    </article>
  );
}
