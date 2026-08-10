import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowLink, SiteFooter, SiteNav } from "../components";

export const metadata: Metadata = {
  title: "Projects | Katie Pirsoaga",
  description:
    "ILS conference platform, Joe Poon Photography and Say It Your Way Romanian: operations, infrastructure and product case studies.",
  openGraph: {
    title: "Projects | Katie Pirsoaga",
    description:
      "ILS conference platform, Joe Poon Photography and Say It Your Way Romanian: operations, infrastructure and product case studies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Katie Pirsoaga",
    description:
      "ILS conference platform, Joe Poon Photography and Say It Your Way Romanian: operations, infrastructure and product case studies.",
  },
};

const Status = ({ children, type = "live" }: { children: ReactNode; type?: "live" | "testing" | "build" | "next" }) => (
  <span className={`status ${type}`}>{children}</span>
);

export default function Projects() {
  return (
    <main id="top">
      <SiteNav dark active="projects" />
      <header className="pageHero sectionPad">
        <p className="kicker">Projects</p>
        <h1>Systems built around<br />real constraints.</h1>
        <p>Three substantial examples of operations, architecture and human-centred product decisions.</p>
      </header>

      <nav className="sectionNav" aria-label="Project navigation"><span>Projects</span><a href="#ils">ILS Ecosystem</a><a href="#joe">Joe Poon</a><a href="#romanian">Say It Your Way</a><a href="#top">Top ↑</a></nav>

      <section className="projectCase ilsCase sectionPad" id="ils">
        <div className="caseHeader"><div><p className="kicker lightText">01 · Flagship case study</p><h2>International Linguistic Society</h2></div><p>Nonprofit operations and academic platform architecture</p></div>
        <div className="caseLead"><p>I run the Society&rsquo;s international conference operation and administer the complete digital environment behind it, connecting conference delivery, academic publishing, communications and infrastructure. This includes administration of the Hostinger environment, VPS and the individual services that support ILS. Earlier conference-operations work at EXLING/ISEL preceded the current ILS role.</p><div><ArrowLink href="https://linguistic-society.com" external>Visit ILS</ArrowLink><ArrowLink href="https://publications.linguistic-society.com" external>View proceedings</ArrowLink></div></div>
        <div className="caseFacts"><div><strong>6</strong><span>international conferences supported in 2026</span></div><div><strong>800+</strong><span>abstracts structured in the proceedings library</span></div><div><strong>3</strong><span>delivery formats: on-site, online and hybrid</span></div></div>

        <div className="caseSplit">
          <div><p className="kicker lightText">Operational ownership</p><h3>The conference and the platform are one responsibility.</h3></div>
          <div><p>I manage conference delivery across onsite, online and hybrid formats, including six international conferences in 2026. In Paris and Athens I was onsite, managing delivery while running online sessions for remote presenters and participants.</p><p>I configure and manage Pretalx and Pretix, manage Open Journal Systems, administer WordPress and Google Workspace for Nonprofits, manage the Hostinger Linux VPS (nginx, PostgreSQL, Redis), domains and SSL, monitor services through Uptime Kuma, and maintain social media and YouTube conference content.</p><p>I connect operational requirements to platform decisions, conduct user testing, and validate presenter, reviewer, registration, participant and organiser journeys before expanding automation and researcher services.</p></div>
        </div>

        <div className="architecturePanel">
          <div className="architectureHead"><div><p className="kicker">Operational lifecycle</p><h3>One connected academic conference and publication process.</h3></div><p>The ecosystem covers conference discovery, abstract submission, peer review, registration, payments, programmes, presenter and participant workflows, academic publication, proceedings, organisational documents, conference media, monitoring, automation and future researcher services.</p></div>
          <div className="lifecycleGrid">
            <article><span>Conference discovery</span><h4>WordPress</h4><p>Public website and conference discovery layer.</p></article>
            <article><span>Abstract submission &amp; peer review</span><h4>Pretalx</h4><p>Open-source conference management.</p></article>
            <article><span>Registration &amp; payments</span><h4>Pretix</h4><p>Open-source registration and payment layer.</p></article>
            <article><span>Programmes &amp; presenter workflows</span><h4>Pretalx &amp; connected processes</h4><p>Programme delivery and presenter coordination.</p></article>
            <article><span>Publication &amp; proceedings</span><h4>Open Journal Systems</h4><p>Academic publication and proceedings archive.</p></article>
            <article><span>Documents &amp; storage</span><h4>Google Workspace &amp; Drive</h4><p>Organisational documents and shared storage.</p></article>
            <article><span>Conference media</span><h4>YouTube</h4><p>Conference video and media archive.</p></article>
            <article><span>Monitoring</span><h4>Uptime Kuma</h4><p>Service and infrastructure monitoring.</p></article>
            <article><span>Automation</span><h4>n8n</h4><p>Installed and developing administrative automation.</p></article>
            <article><span>Future attendance</span><h4>Venueless</h4><p>Roadmap: connected online-event experience.</p></article>
            <article><span>Future researcher services</span><h4>Portal · CRM · SSO</h4><p>Future roadmap: unified researcher experience.</p></article>
          </div>
        </div>

        <div className="caseSplit">
          <div><p className="kicker lightText">Why this architecture</p><h3>Built for a nonprofit that needs control, not subscriptions.</h3></div>
          <div><p>The International Linguistic Society is a non-profit organisation. The ecosystem maintains organisational ownership, retains control of data, reduces dependence on recurring software subscriptions, avoids vendor lock-in, and uses mature open-source applications with one clear responsibility per system.</p><p>The strategy is to select mature open-source applications, self-host and administer them, configure them around ILS requirements, connect them into one operational ecosystem, validate the complete process, and extend the platform only when real operational requirements justify it.</p></div>
        </div>

        <div className="caseDecision"><div><b>Open-source foundation</b><p>Pretalx for conference management, Pretix for registration and payments, Open Journal Systems for publication, WordPress for discovery, Uptime Kuma for monitoring, and n8n for developing automation. These were selected for mature specialist capabilities while retaining control over infrastructure, data and workflows.</p></div><div><b>Platform logic</b><p>One platform composed of specialist services. One responsibility per system. One source of truth for each type of data. Modular, maintainable and upgrade-safe. Evidence-led development with user testing before expansion.</p></div><div><b>Current validation stage</b><p>Pretalx, Pretix and Open Journal Systems are operational. Complete user journeys are being tested across presenter, reviewer, registrant, participant, organiser and publication workflows. Validate the complete process before expanding the feature set.</p></div></div>

        <div className="architecturePanel">
          <div className="architectureHead"><div><p className="kicker">System status</p><h3>Operational services and roadmap.</h3></div><p>Researchers, reviewers, presenters and organisers should experience the International Linguistic Society Platform as one coherent process, not a collection of unrelated applications.</p></div>
          <div className="systemGrid">
            <article><Status type="testing">Operational · user testing</Status><h4>Pretalx</h4><p>Conference management, abstract submission, peer review, programmes and presenter workflows.</p></article>
            <article><Status type="testing">Operational · user testing</Status><h4>Pretix</h4><p>Registration and payment workflows connected to the conference process.</p></article>
            <article><Status>Operational</Status><h4>Open Journal Systems</h4><p>Proceedings, publication workflows, DOI structures and the academic archive.</p></article>
            <article><Status>Operational</Status><h4>WordPress</h4><p>Public website, conference discovery and published conference information.</p></article>
            <article><Status>Operational</Status><h4>Google Workspace</h4><p>Organisational email, documents and nonprofit administration.</p></article>
            <article><Status>Operational</Status><h4>VPS infrastructure</h4><p>Hostinger Linux environment: nginx, PostgreSQL, Redis, domains and SSL.</p></article>
            <article><Status>Operational</Status><h4>Uptime Kuma</h4><p>Availability monitoring, production checks and infrastructure visibility.</p></article>
            <article><Status type="build">Installed · developing</Status><h4>n8n</h4><p>Administrative automation for reminders, publishing support and operational workflows.</p></article>
            <article><Status type="next">Roadmap</Status><h4>Venueless</h4><p>Future attendance, recordings and connected event experience.</p></article>
            <article><Status type="next">Future roadmap</Status><h4>Researcher portal · CRM · SSO</h4><p>Future unified researcher services and single sign-on.</p></article>
          </div>
        </div>

        <div className="projectPager"><span>01 / 03</span><a href="#joe">Next: Joe Poon ↓</a></div>
      </section>

      <section className="projectCase lightCase sectionPad" id="joe">
        <div className="caseHeader darkLine"><div><p className="kicker">02 · Product case study</p><h2>Joe Poon Photography</h2></div><p>Production release · v1.0.1</p></div>
        <div className="caseLead darkLead"><p>A professional portfolio Joe genuinely owns, without permanent website-builder subscriptions, vendor lock-in or a complicated editing interface.</p><div><ArrowLink href="https://g-o-g.pages.dev/" external>View live website</ArrowLink><ArrowLink href="https://github.com/KPirsoaga/G.O.G" external>View GitHub</ArrowLink></div></div>
        <div className="projectNarrative">
          <article><span>Constraint</span><h3>A visual business without technical burden.</h3><p>Joe needs to add work, replace images, update his CV and change details as his photography business grows. He should not need Git, code or developer support for routine updates.</p></article>
          <article><span>Architecture</span><h3>Ownership that remains portable.</h3><p>React, TinaCMS, GitHub and Cloudflare Pages create a Git-backed publishing system with version history, automatic deployment via Cloudflare Pages, and no database administration.</p></article>
          <article><span>User experience</span><h3>The software adapts to Joe.</h3><p>I hid technical fields, protected system settings, added plain-English guidance and changed Save to Update My Website to match his mental model.</p></article>
        </div>
        <div className="stackLine"><b>React 18</b><b>TypeScript</b><b>Vite</b><b>Tailwind CSS</b><b>TinaCMS</b><b>GitHub</b><b>Cloudflare Pages</b></div>
        <div className="projectPager darkPager"><a href="#ils">↑ Previous: ILS</a><span>02 / 03</span><a href="#romanian">Next: Say It Your Way ↓</a></div>
      </section>

      <section className="projectCase softCase sectionPad" id="romanian">
        <div className="caseHeader darkLine"><div><p className="kicker">03 · Product case study</p><h2>Say It Your Way Romanian</h2></div><p>Stable architecture · active content</p></div>
        <div className="caseLead darkLead"><p>A mobile-first learning platform built because conventional language apps did not fit how I learn, or how my teacher and I actually work together.</p><div><ArrowLink href="https://say-it-your-way-romanian.pages.dev/" external>Open live app</ArrowLink><ArrowLink href="https://github.com/KPirsoaga/Say_It_Your_Way_Romanian" external>View GitHub</ArrowLink></div></div>
        <div className="projectNarrative">
          <article><span>Constraint</span><h3>Accessibility changes the learning model.</h3><p>Dyslexia and ADHD make random lessons, spelling pressure, punitive streaks and crowded interfaces actively unhelpful.</p></article>
          <article><span>Learning design</span><h3>Reinforcement, not testing.</h3><p>Weekly Topics carry the same language through vocabulary, reading, grammar, exercises, conversation and review instead of constantly replacing it.</p></article>
          <article><span>Teacher authority</span><h3>Technology supports the relationship.</h3><p>Mihaela validates the Romanian. Review and progress move through local QR exchange with no accounts, central database or AI pretending to be the teacher. Learner flags for pronunciation or translation are recorded without interrupting the learning flow.</p></article>
        </div>
        <div className="stackLine"><b>React</b><b>TypeScript</b><b>Vite</b><b>PWA</b><b>Cloudflare Pages</b><b>Web Speech API</b><b>Local storage</b><b>QR exchange</b></div>
        <p className="caseNote">Offline-first, privacy-focused and account-free. Content is separated from a reusable learning engine.</p>
        <div className="projectPager darkPager"><a href="#joe">↑ Previous: Joe Poon</a><span>03 / 03</span><a href="#top">Back to top ↑</a></div>
      </section>
      <section className="nextPage sectionPad"><p className="kicker">Continue</p><h2>The experience behind the work.</h2><ArrowLink href="/experience">View full experience</ArrowLink></section>
      <SiteFooter />
    </main>
  );
}
