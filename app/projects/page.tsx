import type { ReactNode } from "react";
import { ArrowLink, SiteFooter, SiteNav } from "../components";

const Status = ({ children, type = "live" }: { children: ReactNode; type?: "live" | "build" | "next" }) => <span className={`status ${type}`}>{children}</span>;

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
        <div className="caseLead"><p>What began as conference administration at EXLING became responsibility for the operational, digital and communications foundation of ILS.</p><div><ArrowLink href="https://linguistic-society.com" external>Visit ILS</ArrowLink><ArrowLink href="https://publications.linguistic-society.com" external>View proceedings</ArrowLink></div></div>
        <div className="caseFacts"><div><strong>6</strong><span>international conferences supported in 2026</span></div><div><strong>800+</strong><span>abstracts structured in the proceedings library</span></div><div><strong>3</strong><span>delivery formats: on-site, online and hybrid</span></div></div>

        <div className="caseSplit">
          <div><p className="kicker lightText">My responsibility</p><h3>The operation and the system are one job.</h3></div>
          <div><p>I manage calls for papers, abstracts, peer review, speakers, programmes, participant support, registration administration, certificates, proceedings and post-conference communication.</p><p>I also coordinate academic partners, administer Google Workspace for Nonprofits, prepare formal documentation, run social media and produce conference footage for YouTube.</p><p>In Paris and Athens I was physically on site, managing delivery while running the online sessions for remote presenters and participants.</p></div>
        </div>

        <div className="architecturePanel">
          <div className="architectureHead"><div><p className="kicker">Platform architecture</p><h3>One journey. One responsibility per system.</h3></div><p>ILS retains control of its infrastructure and data without becoming dependent on expensive subscriptions for every operational need.</p></div>
          <div className="systemGrid">
            <article><Status>Live</Status><h4>Pretalx</h4><p>Conference management, abstract submission, peer review, programmes and presenter workflows.</p></article>
            <article><Status>Live</Status><h4>Open Journal Systems</h4><p>Proceedings, publication workflows, DOI structures and the academic archive.</p></article>
            <article><Status>Live</Status><h4>VPS foundation</h4><p>Linux, nginx, PostgreSQL, Redis, domains, SSL and service-level control.</p></article>
            <article><Status>Live</Status><h4>Monitoring</h4><p>Uptime Kuma, production checks and infrastructure visibility.</p></article>
            <article><Status type="build">Installed · developing</Status><h4>n8n</h4><p>Future reminders, publishing, certificates and administrative automation.</p></article>
            <article><Status type="next">Next</Status><h4>Pretix</h4><p>Self-managed registration and payment workflows connected to Pretalx.</p></article>
            <article><Status type="next">Roadmap</Status><h4>Venueless</h4><p>Attendance, recordings and the connected event experience.</p></article>
            <article><Status type="next">Roadmap</Status><h4>Researcher services</h4><p>Certificates, researcher accounts, CRM and single sign-on.</p></article>
          </div>
        </div>

        <div className="caseDecision"><div><b>Build confidence, not features</b><p>The current phase is end-to-end validation of presenter, reviewer and organiser journeys before expanding the platform.</p></div><div><b>Evidence-driven evolution</b><p>The architecture grows from real conference delivery rather than a speculative software wish list.</p></div><div><b>Control without lock-in</b><p>Open-source, modular services keep the nonprofit&rsquo;s options open and ongoing costs manageable.</p></div></div>
        <div className="projectPager"><span>01 / 03</span><a href="#joe">Next: Joe Poon ↓</a></div>
      </section>

      <section className="projectCase lightCase sectionPad" id="joe">
        <div className="caseHeader darkLine"><div><p className="kicker">02 · Product case study</p><h2>Joe Poon Photography</h2></div><p>Production release · v1.0.1</p></div>
        <div className="caseLead darkLead"><p>A professional portfolio Joe genuinely owns—without permanent website-builder subscriptions, vendor lock-in or a complicated editing interface.</p><div><ArrowLink href="https://g-o-g.pages.dev/" external>View live website</ArrowLink><ArrowLink href="https://github.com/KPirsoaga/G.O.G" external>View GitHub</ArrowLink></div></div>
        <div className="projectNarrative">
          <article><span>Constraint</span><h3>A visual business without technical burden.</h3><p>Joe needs to add work, replace images, update his CV and change details as his photography business grows. He should not need Git, code or developer support for routine updates.</p></article>
          <article><span>Architecture</span><h3>Ownership that remains portable.</h3><p>React, TinaCMS, GitHub and Cloudflare Pages create a Git-backed publishing system with version history, automatic deployment and no database administration.</p></article>
          <article><span>User experience</span><h3>The software adapts to Joe.</h3><p>I hid technical fields, protected system settings, added plain-English guidance and changed “Save” to “Update My Website” to match his mental model.</p></article>
        </div>
        <div className="stackLine"><b>React 18</b><b>TypeScript</b><b>Vite</b><b>Tailwind CSS</b><b>TinaCMS</b><b>GitHub</b><b>Cloudflare Pages</b></div>
        <div className="projectPager darkPager"><a href="#ils">↑ Previous: ILS</a><span>02 / 03</span><a href="#romanian">Next: Say It Your Way ↓</a></div>
      </section>

      <section className="projectCase softCase sectionPad" id="romanian">
        <div className="caseHeader darkLine"><div><p className="kicker">03 · Product case study</p><h2>Say It Your Way Romanian</h2></div><p>Stable architecture · active content</p></div>
        <div className="caseLead darkLead"><p>A mobile-first learning platform built because conventional language apps did not fit how I learn—or how my teacher and I actually work together.</p><div><ArrowLink href="https://say-it-your-way-romanian.pages.dev/" external>Open live app</ArrowLink><ArrowLink href="https://github.com/KPirsoaga/Say_It_Your_Way_Romanian" external>View GitHub</ArrowLink></div></div>
        <div className="projectNarrative">
          <article><span>Constraint</span><h3>Accessibility changes the learning model.</h3><p>Dyslexia and ADHD make random lessons, spelling pressure, punitive streaks and crowded interfaces actively unhelpful.</p></article>
          <article><span>Learning design</span><h3>Reinforcement, not testing.</h3><p>Weekly Topics carry the same language through vocabulary, listening, grammar, practice, conversation and review instead of constantly replacing it.</p></article>
          <article><span>Teacher authority</span><h3>Technology supports the relationship.</h3><p>Mihaela validates the Romanian. Review and progress move through local QR exchange—no accounts, central database or AI pretending to be the teacher.</p></article>
        </div>
        <div className="stackLine"><b>React</b><b>TypeScript</b><b>Vite</b><b>PWA</b><b>Cloudflare Pages</b><b>Web Speech API</b><b>Local storage</b><b>QR exchange</b></div>
        <div className="projectPager darkPager"><a href="#joe">↑ Previous: Joe Poon</a><span>03 / 03</span><a href="#top">Back to top ↑</a></div>
      </section>
      <section className="nextPage sectionPad"><p className="kicker">Continue</p><h2>The experience behind the work.</h2><ArrowLink href="/experience">View full experience</ArrowLink></section>
      <SiteFooter />
    </main>
  );
}
