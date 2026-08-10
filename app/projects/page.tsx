import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowLink, SiteFooter, SiteNav } from "../components";
import { IlsProcessDiagram } from "../IlsProcessDiagram";
import { SectionNav } from "../SectionNav";
import { WorkCatalogue } from "../WorkCatalogue";

export const metadata: Metadata = {
  title: "Work | Katie Pirsoaga",
  description:
    "ILS conference platform, Joe Poon Photography, Say It Your Way Romanian and DevAccelerator: operations, products and programmes.",
  openGraph: {
    title: "Work | Katie Pirsoaga",
    description:
      "ILS conference platform, Joe Poon Photography, Say It Your Way Romanian and DevAccelerator: operations, products and programmes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Katie Pirsoaga",
    description:
      "ILS conference platform, Joe Poon Photography, Say It Your Way Romanian and DevAccelerator: operations, products and programmes.",
  },
};

const Status = ({ children, type = "live" }: { children: ReactNode; type?: "live" | "testing" | "build" | "next" }) => (
  <span className={`status ${type}`}>{children}</span>
);

const workSections = [
  { id: "catalogue", label: "Catalogue" },
  { id: "ils", label: "ILS ecosystem" },
  { id: "joe", label: "Joe Poon" },
  { id: "romanian", label: "Say It Your Way Romanian" },
  { id: "devaccelerator", label: "DevAccelerator" },
];

export default function Projects() {
  return (
    <main id="top">
      <SiteNav active="projects" />
      <header className="pageHero sectionPad">
        <p className="kicker">Work</p>
        <h1>Systems built around real constraints.</h1>
        <p className="pageHeroLead">Operations, products and programmes shaped around real people, processes and constraints.</p>
      </header>

      <SectionNav label="Work" links={workSections} />

      <WorkCatalogue />

      <section className="projectCase ilsCase sectionPad" id="ils">
        <div className="caseHeader"><div><p className="kicker">01 · Flagship case study</p><h2>International Linguistic Society</h2></div><p>Nonprofit operations and academic platform architecture</p></div>
        <div className="caseLead"><p>I run the Society&rsquo;s international conference operation and administer the complete digital environment behind it, connecting conference delivery, academic publishing, communications and infrastructure. This includes administration of the Hostinger environment, VPS and the individual services that support ILS. Earlier conference-operations work at EXLING/ISEL preceded the current ILS role.</p><div><ArrowLink href="https://linguistic-society.com" external>Visit ILS</ArrowLink><ArrowLink href="https://publications.linguistic-society.com" external>View proceedings</ArrowLink></div></div>
        <div className="caseFacts"><div><strong>6</strong><span>international conferences supported in 2026</span></div><div><strong>800+</strong><span>abstracts structured in the proceedings library</span></div><div><strong>3</strong><span>delivery formats: on-site, online and hybrid</span></div></div>

        <div className="caseSplit">
          <div><p className="kicker">Operational ownership</p><h3>The conference and the platform are one responsibility.</h3></div>
          <div><p>I manage conference delivery across onsite, online and hybrid formats, including six international conferences in 2026. In Paris and Athens I was onsite, managing delivery while running online sessions for remote presenters and participants.</p><p>I configure and manage Pretalx and Pretix, manage Open Journal Systems, administer WordPress and Google Workspace for Nonprofits, manage the Hostinger Linux VPS (nginx, PostgreSQL, Redis), domains and SSL, monitor services through Uptime Kuma, and maintain social media and YouTube conference content.</p><p>I connect operational requirements to platform decisions, conduct user testing, and validate presenter, reviewer, registration, participant, organiser and publication journeys before expanding automation and researcher services.</p></div>
        </div>

        <div className="architecturePanel">
          <div className="architectureHead"><div><p className="kicker">Operational lifecycle</p><h3>One connected academic conference and publication process.</h3></div><p>The ecosystem covers conference discovery, abstract submission, peer review, registration, payments, programmes, presenter and participant workflows, academic publication, proceedings, organisational documents, conference media, monitoring, automation and future researcher services.</p></div>
          <IlsProcessDiagram />
        </div>

        <div className="caseSplit">
          <div><p className="kicker">Why this architecture</p><h3>Built for a nonprofit that needs control, not subscriptions.</h3></div>
          <div><p>The International Linguistic Society is a non-profit organisation. The ecosystem maintains organisational ownership, retains control of data, reduces dependence on recurring software subscriptions, avoids vendor lock-in, and uses mature open-source applications with one clear responsibility per system.</p><p>The strategy is to select mature open-source applications, self-host and administer them, configure them around ILS requirements, connect them into one operational ecosystem, validate the complete process, and extend the platform only when real operational requirements justify it.</p></div>
        </div>

        <blockquote className="pullQuote">Validate the complete process before expanding the feature set.</blockquote>

        <div className="caseDecision"><div><b>Open-source foundation</b><p>Pretalx for conference management, Pretix for registration and payments, Open Journal Systems for publication, WordPress for discovery, Uptime Kuma for monitoring, and n8n for developing automation. These were selected for mature specialist capabilities while retaining control over infrastructure, data and workflows.</p></div><div><b>Platform logic</b><p>One platform composed of specialist services. One responsibility per system. One source of truth for each type of data. Modular, maintainable and upgrade-safe. Evidence-led development with user testing before expansion.</p></div><div><b>Current validation stage</b><p>Pretalx, Pretix and Open Journal Systems are operational. Complete user journeys are being tested across presenter, reviewer, registrant, participant, organiser and publication workflows.</p></div></div>

        <div className="architecturePanel">
          <div className="architectureHead"><div><p className="kicker">System status</p><h3>Operational services and roadmap.</h3></div><p>Researchers, reviewers, presenters and organisers should experience the International Linguistic Society Platform as one coherent process, not a collection of unrelated applications.</p></div>
          <div className="systemGrid">
            <article><Status type="testing">Operational · user testing</Status><h4>Pretalx</h4><p>Conference management, abstract submission, peer review, programmes and presenter workflows.</p></article>
            <article><Status type="testing">Operational · user testing</Status><h4>Pretix</h4><p>Registration and payment workflows connected to the conference process.</p></article>
            <article><Status>Operational</Status><h4>Open Journal Systems</h4><p>Proceedings, publication workflows, DOI structures and the academic archive.</p></article>
            <article><Status>Operational</Status><h4>WordPress</h4><p>Public website, conference discovery and published conference information.</p></article>
            <article><Status>Operational</Status><h4>Google Workspace for Nonprofits</h4><p>Organisational email, documents and nonprofit administration.</p></article>
            <article><Status>Operational</Status><h4>Uptime Kuma</h4><p>Availability monitoring, production checks and infrastructure visibility.</p></article>
            <article><Status>Operational</Status><h4>VPS infrastructure</h4><p>Hostinger Linux environment: nginx, PostgreSQL, Redis, domains and SSL.</p></article>
            <article><Status type="build">Installed · developing</Status><h4>n8n</h4><p>Administrative automation for reminders, publishing support and operational workflows.</p></article>
            <article><Status type="next">Roadmap</Status><h4>Venueless</h4><p>Future attendance, recordings and connected event experience.</p></article>
            <article><Status type="next">Future roadmap</Status><h4>Researcher portal · CRM · SSO</h4><p>Future unified researcher services and single sign-on.</p></article>
          </div>
        </div>
      </section>

      <section className="projectCase joeCase sectionPad" id="joe">
        <div className="caseHeader"><div><p className="kicker">02 · Product case study</p><h2>Joe Poon Photography</h2></div><p>Production release · v1.0.1</p></div>
        <div className="caseLead"><p>A professional photography portfolio with true client ownership, no permanent website-builder subscription, and a deliberately uncomplicated editing interface that can grow with the business.</p><div><ArrowLink href="https://g-o-g.pages.dev/" external>View live website</ArrowLink><ArrowLink href="https://github.com/KPirsoaga/G.O.G" external>View GitHub</ArrowLink></div></div>
        <div className="ownershipStack">
          <article><span>Constraint</span><h3>A visual business without technical burden.</h3><p>Joe needs to add work, replace images, update his CV and change details as his photography business grows. He should not need Git, code or developer support for routine updates.</p></article>
          <article><span>Product decision</span><h3>Ownership that remains portable.</h3><p>React, TinaCMS, GitHub and Cloudflare Pages create a Git-backed publishing system with version history, automated deployment, and no database administration.</p></article>
          <article><span>Client outcome</span><h3>The software adapts to Joe.</h3><p>I hid technical fields, protected system settings, added plain-English guidance and changed Save to Update My Website to match his mental model.</p></article>
        </div>
        <p className="caseNote">True client ownership, version-controlled content, automated deployment, and a deliberately uncomplicated editing interface that can grow without permanent website-builder subscription.</p>
      </section>

      <section className="projectCase romanianCase sectionPad" id="romanian">
        <div className="caseHeader"><div><p className="kicker">03 · Product case study</p><h2>Say It Your Way Romanian</h2></div><p>Stable architecture · active content</p></div>
        <div className="caseLead"><p>A mobile-first learning platform built because conventional language apps did not fit how I learn, or how my teacher and I actually work together.</p><div><ArrowLink href="https://say-it-your-way-romanian.pages.dev/" external>Open live app</ArrowLink><ArrowLink href="https://github.com/KPirsoaga/Say_It_Your_Way_Romanian" external>View GitHub</ArrowLink></div></div>
        <div className="learningLoop" aria-label="Learning loop">
          <div className="learningLoopSteps">
            <div><strong>Weekly Topic</strong></div>
            <div><strong>Grammar Help</strong></div>
            <div><strong>Scenarios</strong></div>
            <div><strong>Review</strong></div>
          </div>
          <p className="learningLoopCentre">Teacher collaboration · local QR · no accounts</p>
        </div>
        <div className="caseSplit">
          <div><p className="kicker">Learning design</p><h3>Audio-first, practical and teacher-supported.</h3></div>
          <div><p>Dyslexia and ADHD-informed learning design shapes an audio-first, practical product designed for repeated weekly learning. Weekly Topics carry language through vocabulary, reading, grammar, exercises, conversation and review.</p><p>Mihaela validates the Romanian. Review and progress move through local QR exchange with no accounts or central database. Offline-first, privacy-focused, with local progress storage and PWA capability. Learner and teacher feedback continues to shape development.</p></div>
        </div>
      </section>

      <section className="projectCase devCase sectionPad" id="devaccelerator">
        <div className="caseHeader"><div><p className="kicker">04 · Professional programme</p><h2>DevAccelerator</h2></div><p>Current · English communication</p></div>
        <div className="caseLead"><p>Professional and conversational English designed around the real communication needs of data engineers and technical teams, alongside broader English education work with private learners, schools and professionals.</p><div><ArrowLink href="https://devaccelerator.io/" external>Visit DevAccelerator</ArrowLink><ArrowLink href="/experience#english">View English experience</ArrowLink></div></div>
        <div className="programmeGrid">
          <article><span>Focus</span><h3>Real workplace communication</h3><p>Conversation, meetings, presentations, interview practice and communication across professional and cultural contexts.</p></article>
          <article><span>Delivery</span><h3>Repeated weekly sessions</h3><p>Programme and session development shaped around technical teams and learners who need English that works in real professional settings.</p></article>
          <article><span>Scope</span><h3>More than developer coaching</h3><p>Part of broader English communication work spanning private learners, schools, proofreading, interview preparation and professional communication.</p></article>
        </div>
      </section>

      <section className="skillsBlock sectionPad">
        <div className="sectionTop"><p className="kicker">Skills and applications</p><p>Current capability in context</p></div>
        <div className="skillsPillars">
          <article><h3>English communication and education</h3><p>Professional English, lesson development, proofreading, interview preparation and communication coaching.</p></article>
          <article><h3>Conference operations</h3><p>International conference delivery, hybrid events, documentation, social media and YouTube conference content. Tools include Pretalx, Pretix, Canva where appropriate.</p></article>
          <article><h3>Academic and publication platforms</h3><p>Open Journal Systems, WordPress, Google Workspace for Nonprofits and proceedings workflows.</p></article>
          <article><h3>Infrastructure and monitoring</h3><p>Hostinger, Linux VPS, nginx, PostgreSQL, Redis, Uptime Kuma, n8n (installed and developing).</p></article>
          <article><h3>CRM and system administration</h3><p>Salesforce administration, configuration, Flows, reporting, access, implementation and user support.</p></article>
          <article><h3>Product and interface development</h3><p>React, TypeScript, Vite, TinaCMS, GitHub, Cloudflare and PWA delivery.</p></article>
        </div>
      </section>

      <section className="nextPage"><p className="kicker">Continue</p><h2>The experience behind the work.</h2><ArrowLink href="/experience">View full experience</ArrowLink></section>
      <SiteFooter />
    </main>
  );
}
