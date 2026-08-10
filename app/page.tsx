import { ArrowLink, SiteFooter, SiteNav } from "./components";

export default function Home() {
  return (
    <main>
      <SiteNav dark active="home" />
      <header className="homeHero" id="top">
        <div className="heroIdentity">
          <p>Katie Pirsoaga</p>
          <p>British · Based in Romania · Working internationally</p>
        </div>
        <div className="heroCore">
          <p className="kicker lightText">English communication · Conference operations · Human-centred digital systems</p>
          <h1>I build the structure<br />behind complicated work.</h1>
          <p className="heroSummary">I teach and coach professional English, manage international conference operations and platforms, and build digital products people can own and use.</p>
        </div>
        <div className="heroEvidence">
          <div><strong>6</strong><span>international conferences supported in 2026</span></div>
          <div><strong>800+</strong><span>abstracts structured in the proceedings library</span></div>
          <div><strong>2</strong><span>independently designed digital products</span></div>
          <ArrowLink href="/projects">Explore the work</ArrowLink>
        </div>
      </header>

      <section className="homeStatement sectionPad">
        <p className="kicker">How I work</p>
        <div>
          <h2>I do not separate the system from the work.</h2>
          <p>I learn how an organisation or person actually operates, find where the friction lives, and build something they can control, understand and sustain.</p>
        </div>
      </section>

      <section className="homeCapabilities sectionPad">
        <div className="sectionTop"><p className="kicker">Capabilities</p><p>Four connected areas</p></div>
        <div className="capabilityList">
          <article><span>01</span><h3>Operations &amp; delivery</h3><p>Conference delivery, workflows, documentation, stakeholders, administration and international coordination.</p></article>
          <article><span>02</span><h3>Systems &amp; infrastructure</h3><p>Platform architecture, VPS environments, publishing systems, monitoring and CRM administration.</p></article>
          <article><span>03</span><h3>Product &amp; user experience</h3><p>Requirements, accessible interfaces, content models, testing and maintainable client-owned systems.</p></article>
          <article><span>04</span><h3>Communication &amp; content</h3><p>English education, academic communication, proofreading, social media and video production.</p></article>
        </div>
      </section>

      <section className="homeFeature sectionPad darkSection">
        <div className="sectionTop lightLine"><p className="kicker lightText">Flagship work</p><p>International Linguistic Society · Nonprofit</p></div>
        <div className="featureGrid">
          <div>
            <h2>One researcher journey.<br /><em>Specialist systems underneath.</em></h2>
            <p>I run conference operations and administer the academic platform behind them. Pretalx and Pretix are operational and currently undergoing user testing as part of one connected conference process.</p>
            <ArrowLink href="/projects#ils">Explore the ILS case study</ArrowLink>
          </div>
          <div className="miniArchitecture" aria-label="Simplified ILS operational journey">
            <span>Discover<b>WordPress</b></span><i>↓</i>
            <span>Submit &amp; review<b>Pretalx</b></span><i>↓</i>
            <span>Register &amp; pay<b>Pretix</b></span><i>↓</i>
            <span>Publish<b>OJS</b></span>
          </div>
        </div>
      </section>

      <section className="homeWork sectionPad">
        <div className="sectionTop"><p className="kicker">Selected work</p><ArrowLink href="/projects">View all projects</ArrowLink></div>
        <div className="workCards">
          <article>
            <p className="cardMeta">Client-owned website · Production</p>
            <h3>Joe Poon Photography</h3>
            <p>A professional portfolio with true ownership, no permanent builder subscription and a simple editing workflow.</p>
            <div className="cardLinks"><ArrowLink href="/projects#joe">Case study</ArrowLink><ArrowLink href="https://g-o-g.pages.dev/" external>Live site</ArrowLink><ArrowLink href="https://github.com/KPirsoaga/G.O.G" external>GitHub</ArrowLink></div>
          </article>
          <article>
            <p className="cardMeta">Accessible learning platform · Stable core</p>
            <h3>Say It Your Way Romanian</h3>
            <p>A teacher-supported PWA designed around dyslexia, ADHD, practical speech and repeated weekly learning.</p>
            <div className="cardLinks"><ArrowLink href="/projects#romanian">Case study</ArrowLink><ArrowLink href="https://say-it-your-way-romanian.pages.dev/" external>Live app</ArrowLink><ArrowLink href="https://github.com/KPirsoaga/Say_It_Your_Way_Romanian" external>GitHub</ArrowLink></div>
          </article>
          <article>
            <p className="cardMeta">English education · 2022 to present</p>
            <h3>English for real life and work</h3>
            <p>Personalised English for private learners, professionals, schools and international technical teams.</p>
            <div className="cardLinks"><ArrowLink href="/experience#english">Experience</ArrowLink><ArrowLink href="https://devaccelerator.io/" external>DevAccelerator</ArrowLink></div>
          </article>
        </div>
      </section>

      <section className="homeToolkit sectionPad softSection">
        <div className="toolkitIntro"><p className="kicker">Skills &amp; applications</p><h2>Current systems and tools.</h2></div>
        <div className="compactTools">
          <div><b>Conference and organisational systems</b><p>Pretalx · Pretix · Open Journal Systems · WordPress · Google Workspace · VPS infrastructure · monitoring</p></div>
          <div><b>Products and websites</b><p>GitHub · Cloudflare · React · TypeScript · Vite · TinaCMS · PWA</p></div>
          <div><b>CRM and system administration</b><p>Salesforce administration · configuration · Flows · reporting · access · implementation · user support</p></div>
          <div><b>Developing and roadmap</b><p>n8n: Installed and developing · Venueless: Roadmap</p></div>
        </div>
      </section>

      <section className="homeAbout sectionPad" id="about">
        <p className="kicker">The short version</p>
        <div><h2>I am useful where there are too many moving parts.</h2><p>My background crosses operations, education, business management, academic conferences and digital product development. That range lets me communicate with the person using a system, the person responsible for the outcome and the technical people building it.</p><ArrowLink href="/experience">Explore my experience</ArrowLink></div>
      </section>

      <section className="contactSection sectionPad">
        <p className="kicker">Start a conversation</p>
        <h2>Have something complicated?</h2>
        <a href="mailto:kpirsoaga@protonmail.com">Let&rsquo;s make it work. <span>↗</span></a>
        <div><p>English · conference operations · digital products</p><p><a href="https://www.linkedin.com/in/katie-pirsoaga">LinkedIn ↗</a> · Pitești, Romania</p></div>
      </section>
      <SiteFooter />
    </main>
  );
}
