import type { Metadata } from "next";
import { ArrowLink, PageLocator, SiteFooter, SiteNav } from "../components";
import {
  CaseTurn,
  JourneyMap,
  LearningLoop,
  OperationalBoard,
  OwnershipPanels,
  PullQuote,
  ResponsibilityIndex,
  SkillsClusters,
} from "../DisplayPatterns";
import { SectionNav } from "../SectionNav";

export const metadata: Metadata = {
  title: "Work | Katie Pirsoaga",
  description:
    "ILS conference platform, Joe Poon Photography and Say It Your Way Romanian: operations, infrastructure and product case studies.",
  openGraph: {
    title: "Work | Katie Pirsoaga",
    description:
      "ILS conference platform, Joe Poon Photography and Say It Your Way Romanian: operations, infrastructure and product case studies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Katie Pirsoaga",
    description:
      "ILS conference platform, Joe Poon Photography and Say It Your Way Romanian: operations, infrastructure and product case studies.",
  },
};

const workSections = [
  { id: "ils", label: "ILS ecosystem" },
  { id: "joe", label: "Joe Poon" },
  { id: "romanian", label: "Say It Your Way Romanian" },
];

export default function Projects() {
  return (
    <main id="top">
      <SiteNav active="projects" />
      <header className="pageHero sectionPad">
        <PageLocator parent={{ href: "/", label: "Home" }} current="Work" />
        <h1>Systems built around real constraints.</h1>
        <p className="pageHeroLead">Three substantial examples of operations, architecture and human-centred product decisions.</p>
      </header>

      <SectionNav parentHref="/projects" parentLabel="Work" links={workSections} />

      <section className="projectCase ilsCase sectionPad" id="ils">
        <div className="caseHeader"><div><p className="kicker">01 · Flagship case study</p><h2>International Linguistic Society</h2></div><p>Nonprofit operations and academic platform architecture</p></div>
        <div className="caseLead"><p>I run the Society&rsquo;s international conference operation and administer the complete digital environment behind it, connecting conference delivery, academic publishing, communications and infrastructure. This includes administration of the Hostinger environment, VPS and the individual services that support ILS. Earlier conference-operations work at EXLING/ISEL preceded the current ILS role.</p><div><ArrowLink href="https://linguistic-society.com" external>Visit ILS</ArrowLink><ArrowLink href="https://publications.linguistic-society.com" external>View proceedings</ArrowLink></div></div>
        <div className="caseFacts"><div><strong>6</strong><span>international conferences supported in 2026</span></div><div><strong>800+</strong><span>abstracts structured in the proceedings library</span></div><div><strong>3</strong><span>delivery formats: on-site, online and hybrid</span></div></div>

        <div className="caseSplit">
          <div><p className="kicker">Operational ownership</p><h3>The conference and the platform are one responsibility.</h3></div>
          <div><p>I manage conference delivery across onsite, online and hybrid formats, including six international conferences in 2026. In Paris and Athens I was onsite, managing delivery while running online sessions for remote presenters and participants.</p><p>I configure and manage Pretalx and Pretix, manage Open Journal Systems, administer WordPress and Google Workspace for Nonprofits, manage the Hostinger Linux VPS (nginx, PostgreSQL, Redis), domains and SSL, monitor services through Uptime Kuma, and maintain social media and YouTube conference content.</p></div>
        </div>

        <div className="architecturePanel">
          <div className="architectureHead"><div><p className="kicker">Operational lifecycle</p><h3>One connected academic conference and publication process.</h3></div><p>The ecosystem covers conference discovery, abstract submission, peer review, registration, payments, programmes, presenter and participant workflows, academic publication, proceedings, organisational documents, conference media, monitoring, automation and future researcher services.</p></div>
          <JourneyMap />
        </div>

        <div className="caseSplit">
          <div><p className="kicker">Why this architecture</p><h3>Built for a nonprofit that needs control, not subscriptions.</h3></div>
          <div><p>The International Linguistic Society is a non-profit organisation. The ecosystem maintains organisational ownership, retains control of data, reduces dependence on recurring software subscriptions, avoids vendor lock-in, and uses mature open-source applications with one clear responsibility per system.</p><p>The strategy is to select mature open-source applications, self-host and administer them, configure them around ILS requirements, connect them into one operational ecosystem, validate the complete process, and extend the platform only when real operational requirements justify it.</p></div>
        </div>

        <PullQuote>Validate the complete process before expanding the feature set.</PullQuote>

        <div className="caseDecision"><div><b>Open-source foundation</b><p>Pretalx for conference management, Pretix for registration and payments, Open Journal Systems for publication, WordPress for discovery, Uptime Kuma for monitoring, and n8n for developing automation. These were selected for mature specialist capabilities while retaining control over infrastructure, data and workflows.</p></div><div><b>Platform logic</b><p>One platform composed of specialist services. One responsibility per system. One source of truth for each type of data. Modular, maintainable and upgrade-safe. Evidence-led development with user testing before expansion.</p></div><div><b>Current validation stage</b><p>Pretalx, Pretix and Open Journal Systems are operational. Complete user journeys are being tested across presenter, reviewer, registrant, participant, organiser and publication workflows.</p></div></div>

        <div className="architecturePanel">
          <div className="architectureHead"><div><p className="kicker">System status</p><h3>Operational services and roadmap.</h3></div><p>Researchers, reviewers, presenters and organisers should experience the International Linguistic Society Platform as one coherent process, not a collection of unrelated applications.</p></div>
          <OperationalBoard />
        </div>

        <div className="caseSplit">
          <div><p className="kicker">What Katie actually does</p><h3>Responsibility across people, platforms and delivery.</h3></div>
          <div><ResponsibilityIndex /></div>
        </div>

        <CaseTurn label="Next case study" title="Joe Poon Photography" href="#joe" />
      </section>

      <section className="projectCase joeCase sectionPad" id="joe">
        <div className="caseHeader"><div><p className="kicker">02 · Product case study</p><h2>Joe Poon Photography</h2></div><p>Production release · v1.0.1</p></div>
        <div className="caseLead"><p>A professional photography portfolio with true client ownership, no permanent website-builder subscription, and a deliberately uncomplicated editing interface that can grow with the business.</p><div><ArrowLink href="https://g-o-g.pages.dev/" external>View live website</ArrowLink><ArrowLink href="https://github.com/KPirsoaga/G.O.G" external>View GitHub</ArrowLink></div></div>
        <OwnershipPanels />
        <div className="stackLine"><b>React 18</b><b>TypeScript</b><b>Vite</b><b>Tailwind CSS</b><b>TinaCMS</b><b>GitHub</b><b>Cloudflare Pages</b></div>
        <CaseTurn label="Next case study" title="Say It Your Way Romanian" href="#romanian" />
      </section>

      <section className="projectCase romanianCase sectionPad" id="romanian">
        <div className="caseHeader"><div><p className="kicker">03 · Product case study</p><h2>Say It Your Way Romanian</h2></div><p>Stable architecture · active content</p></div>
        <div className="caseLead"><p>A mobile-first learning platform built because conventional language apps did not fit how I learn, or how my teacher and I actually work together.</p><div><ArrowLink href="https://say-it-your-way-romanian.pages.dev/" external>Open live app</ArrowLink><ArrowLink href="https://github.com/KPirsoaga/Say_It_Your_Way_Romanian" external>View GitHub</ArrowLink></div></div>
        <LearningLoop />
        <div className="caseSplit">
          <div><p className="kicker">Learning design</p><h3>Weekly Topics, Grammar Help and scenarios.</h3></div>
          <div><p>Weekly Topics carry the same language through vocabulary, reading, grammar, exercises, conversation and review. Grammar Help, scenarios and practical exercises support real-life Romanian rather than isolated drills.</p><p>Mihaela validates the Romanian. Review and progress move through local QR exchange with no accounts or central database. Learner and teacher feedback continues to shape development.</p></div>
        </div>
        <div className="stackLine"><b>React</b><b>TypeScript</b><b>Vite</b><b>PWA</b><b>Cloudflare Pages</b><b>Web Speech API</b><b>Local storage</b><b>QR exchange</b></div>
        <p className="caseNote">Offline-first, privacy-focused and account-free. Content is separated from a reusable learning structure with local progress storage and PWA capability.</p>
        <a className="caseTurn caseTurnTop" href="#top"><span>Back to top</span><strong>Work overview</strong><em aria-hidden="true">↑</em></a>
      </section>

      <section className="skillsBlock sectionPad">
        <div className="sectionTop"><p className="kicker">Skills and applications</p><p>Current capability in context</p></div>
        <SkillsClusters />
      </section>

      <section className="nextPage"><p className="kicker">Continue</p><h2>The experience behind the work.</h2><ArrowLink href="/experience">View full experience</ArrowLink></section>
      <SiteFooter />
    </main>
  );
}
