import { ArrowLink } from "./components";

function JourneyVisual() {
  return (
    <svg className="catalogueVisual" viewBox="0 0 120 48" aria-hidden="true">
      <line x1="8" y1="24" x2="112" y2="24" stroke="var(--coral)" strokeWidth="1" />
      {[8, 40, 72, 104].map((x) => (
        <circle key={x} cx={x} cy="24" r="5" fill="var(--black)" stroke="var(--coral)" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

function FrameVisual() {
  return (
    <svg className="catalogueVisual" viewBox="0 0 120 48" aria-hidden="true">
      <rect x="8" y="8" width="104" height="32" fill="none" stroke="var(--coral)" strokeWidth="1" />
      <rect x="16" y="16" width="48" height="8" fill="rgba(243,240,231,0.08)" stroke="var(--line)" />
      <rect x="16" y="28" width="88" height="4" fill="rgba(243,240,231,0.05)" />
    </svg>
  );
}

function LoopVisual() {
  return (
    <svg className="catalogueVisual" viewBox="0 0 120 48" aria-hidden="true">
      <path d="M24 24 H96" stroke="var(--lime)" strokeWidth="1" fill="none" />
      <path d="M96 24 C108 24 108 36 96 36 H24 C12 36 12 24 24 24" stroke="var(--lime)" strokeWidth="1" fill="none" />
      <circle cx="24" cy="24" r="4" fill="var(--lime)" />
    </svg>
  );
}

function ConversationVisual() {
  return (
    <svg className="catalogueVisual" viewBox="0 0 120 48" aria-hidden="true">
      <path d="M16 20 Q30 8 44 20 T72 20 T100 20" stroke="var(--coral)" strokeWidth="1" fill="none" />
      <circle cx="16" cy="20" r="3" fill="var(--coral)" />
      <circle cx="100" cy="20" r="3" fill="var(--lime)" />
    </svg>
  );
}

const entries = [
  {
    number: "01",
    name: "International Linguistic Society",
    type: "Connected academic conference and publication ecosystem",
    purpose:
      "International conference operations and a connected nonprofit platform covering discovery, submission, review, registration, payment and publication.",
    status: "Operational · complete-process user testing",
    href: "#ils",
    linkLabel: "Read case study",
    Visual: JourneyVisual,
  },
  {
    number: "02",
    name: "Joe Poon Photography",
    type: "Client-owned publishing platform",
    purpose:
      "A professional photography portfolio designed for ownership, simple editing and subscription-free growth.",
    status: "Production",
    href: "#joe",
    linkLabel: "Read case study",
    Visual: FrameVisual,
  },
  {
    number: "03",
    name: "Say It Your Way Romanian",
    type: "Accessible language-learning product",
    purpose:
      "A teacher-supported learning application designed around practical Romanian, dyslexia, ADHD and repeated use.",
    status: "Stable core · continuing development",
    href: "#romanian",
    linkLabel: "Read case study",
    Visual: LoopVisual,
  },
  {
    number: "04",
    name: "DevAccelerator",
    type: "Professional English programme",
    purpose:
      "Conversational and professional English designed around the real communication needs of data engineers and technical teams.",
    status: "Current",
    href: "#devaccelerator",
    linkLabel: "View programme",
    Visual: ConversationVisual,
  },
];

export function WorkCatalogue() {
  return (
    <section className="workCatalogue sectionPad" id="catalogue">
      <p className="kicker">Catalogue</p>
      <h2 className="catalogueHeading">A catalogue of systems, products and programmes built around real people.</h2>
      <div className="catalogueList">
        {entries.map((entry) => (
          <article className="catalogueRow" key={entry.number}>
            <span className="catalogueNumber">{entry.number}</span>
            <div className="catalogueBody">
              <div className="catalogueMeta">
                <span>{entry.type}</span>
                <span>{entry.status}</span>
              </div>
              <h3>{entry.name}</h3>
              <p>{entry.purpose}</p>
              <entry.Visual />
              <ArrowLink href={entry.href}>{entry.linkLabel}</ArrowLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
