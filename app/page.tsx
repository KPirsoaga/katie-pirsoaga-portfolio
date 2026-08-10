import { ArrowLink, SiteFooter, SiteNav } from "./components";
import { ConcentricGraphic } from "./ConcentricGraphic";
import { ProcessStrip } from "./ProcessStrip";

export default function Home() {
  return (
    <main>
      <SiteNav active="home" />
      <header className="homeHero sectionPad" id="top">
        <div className="heroTop">
          <p className="heroIdentity">Katie Pirsoaga</p>
          <p className="heroLocation">British · Based in Romania · Working internationally</p>
        </div>
        <div className="heroMain">
          <div className="heroCopy">
            <p className="kicker kickerHero">English communication · Conference operations · Digital systems</p>
            <h1>
              <span>I make complicated</span>
              <span className="heroAccent"><em>work.</em></span>
            </h1>
            <p className="heroSummary">
              I teach and coach professional English, run international conference operations and build human-centred digital systems around the people who use them.
            </p>
            <ArrowLink href="/projects">Explore the work</ArrowLink>
          </div>
          <ConcentricGraphic className="heroGraphic" />
        </div>
      </header>

      <section className="homeStatement sectionPad">
        <p className="kicker">How I work</p>
        <div className="statementGrid">
          <h2>I do not separate the system from the work.</h2>
          <p>I learn how an organisation or person actually operates, find where the friction lives, and build something they can control, understand and sustain.</p>
        </div>
      </section>

      <section className="homePillars sectionPad">
        <div className="sectionTop"><p className="kicker">Three professional pillars</p><p>Current practice</p></div>
        <div className="pillarList">
          <article>
            <span className="pillarNumber">01</span>
            <div className="pillarBody">
              <h3>English communication and education</h3>
              <p>Professional English designed around real conversations, workplaces and learners.</p>
            </div>
          </article>
          <article>
            <span className="pillarNumber">02</span>
            <div className="pillarBody">
              <h3>International conference operations</h3>
              <p>Connected delivery across academic programmes, people, platforms and publishing.</p>
            </div>
          </article>
          <article>
            <span className="pillarNumber">03</span>
            <div className="pillarBody">
              <h3>Human-centred digital systems</h3>
              <p>Owned and maintainable products shaped around how people actually work.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="homeJourney sectionPad">
        <div className="sectionTop"><p className="kicker">ILS operational journey</p><p>International Linguistic Society</p></div>
        <div className="journeyGrid">
          <div>
            <h2>One connected conference process.</h2>
            <p>Pretalx and Pretix are operational and currently undergoing user testing as part of one connected conference and publication process.</p>
            <ArrowLink href="/projects#ils">Read the full case study</ArrowLink>
          </div>
          <ProcessStrip />
        </div>
      </section>

      <section className="homeWork sectionPad">
        <div className="sectionTop"><p className="kicker">Selected work</p><ArrowLink href="/projects">View all work</ArrowLink></div>
        <div className="workCards">
          <article className="workCardFlagship">
            <p className="cardMeta">Flagship ecosystem · Nonprofit</p>
            <h3>International Linguistic Society</h3>
            <p>International conference operation and the connected academic platform behind it.</p>
            <div className="cardLinks"><ArrowLink href="/projects#ils">Case study</ArrowLink></div>
          </article>
          <article>
            <p className="cardMeta">Client-owned website · Production</p>
            <h3>Joe Poon Photography</h3>
            <p>A professional portfolio with true ownership and a simple editing workflow.</p>
            <div className="cardLinks"><ArrowLink href="/projects#joe">Case study</ArrowLink><ArrowLink href="https://g-o-g.pages.dev/" external>Live site</ArrowLink></div>
          </article>
          <article>
            <p className="cardMeta">Accessible learning platform · Stable core</p>
            <h3>Say It Your Way Romanian</h3>
            <p>A teacher-supported PWA designed around dyslexia, ADHD and repeated weekly learning.</p>
            <div className="cardLinks"><ArrowLink href="/projects#romanian">Case study</ArrowLink><ArrowLink href="https://say-it-your-way-romanian.pages.dev/" external>Live app</ArrowLink></div>
          </article>
          <article>
            <p className="cardMeta">Professional English programme · Current</p>
            <h3>DevAccelerator</h3>
            <p>Conversational and professional English for data engineers and technical teams.</p>
            <div className="cardLinks"><ArrowLink href="/projects#devaccelerator">Programme</ArrowLink><ArrowLink href="https://devaccelerator.io/" external>Visit site</ArrowLink></div>
          </article>
        </div>
      </section>

      <section className="homeAbout sectionPad" id="about">
        <p className="kicker">About</p>
        <div className="aboutGrid">
          <h2>I am useful where there are too many moving parts.</h2>
          <p>My career crosses education, international operations, business management, academic conferences and digital products. The thread is not unrelated jobs. It is understanding how people, processes, communication and systems must work together.</p>
          <ArrowLink href="/experience">Explore my experience</ArrowLink>
        </div>
      </section>

      <section className="contactSection sectionPad" id="contact">
        <p className="kicker">Contact</p>
        <p className="contactContext">English coaching, conference operations, or digital systems.</p>
        <h2>Have something complicated?</h2>
        <a className="contactLink" href="mailto:kpirsoaga@protonmail.com">Let&rsquo;s talk <span aria-hidden="true">↗</span></a>
        <p className="contactMeta"><a href="https://www.linkedin.com/in/katie-pirsoaga">LinkedIn ↗</a> · Pitești, Romania</p>
      </section>
      <SiteFooter />
    </main>
  );
}
