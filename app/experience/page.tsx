import { ArrowLink, SiteFooter, SiteNav } from "../components";

export default function Experience() {
  return (
    <main id="top">
      <SiteNav dark active="experience" />
      <header className="pageHero experienceHero sectionPad">
        <p className="kicker">Experience</p>
        <h1>The route was not linear.<br />The pattern is.</h1>
        <p>I repeatedly move from doing the work to improving how the work is organised.</p>
      </header>

      <nav className="sectionNav" aria-label="Experience navigation"><span>Experience</span><a href="#current">Current</a><a href="#english">English</a><a href="#legacy">Legacy</a><a href="#salesforce">Salesforce</a><a href="#foundations">Foundations</a><a href="#education">Education</a><a href="#top">Top ↑</a></nav>

      <section className="currentExperience sectionPad" id="current">
        <div className="sectionTop"><p className="kicker">Current practice</p><p>International · remote · on-site · hybrid</p></div>
        <div className="roleList">
          <article><time>Oct 2024—present</time><div><h2>Conference Operations &amp; Systems Manager</h2><h3>International Linguistic Society</h3><p>Nonprofit operations, international conference delivery, academic platforms, VPS infrastructure, publishing, communications, social media, documentation and video production.</p><ArrowLink href="/projects#ils">View the ILS case study</ArrowLink></div></article>
          <article id="english"><time>Jan 2022—present</time><div><h2>Freelance English Educator, Editor &amp; Communication Coach</h2><h3>International private learners, professionals, schools and teams</h3><p>Long-term conversational English, pronunciation, business and academic communication, interviews, meetings, presentations, immigration assessments, proofreading and tailored educational content.</p><div className="roleEvidence"><span>Private learners across Europe</span><span>Professional and academic English</span><span>London school proofreading and content</span><span>DevAccelerator technical cohort</span></div><ArrowLink href="https://devaccelerator.io/" external>Visit DevAccelerator</ArrowLink></div></article>
          <article><time>Oct 2023—Oct 2024</time><div><h2>Conference Operations &amp; Systems Manager</h2><h3>International Society of Experimental Linguistics / EXLING</h3><p>Conference coordination, website development, Google Workspace administration, submissions, scheduling, speaker engagement and the foundations that became ILS.</p></div></article>
        </div>
      </section>

      <section className="legacyExperience sectionPad darkSection" id="legacy">
        <div className="sectionTop lightLine"><p className="kicker lightText">Operational evidence</p><p>Legacy Habitat Management · 2018—2022</p></div>
        <div className="legacyHeader"><h2>Business management<br />with measurable results.</h2><p>Led work across finance, payroll, HR, recruitment, Sage, fleet, logistics, suppliers and customers while building the internal processes that supported growth.</p></div>
        <div className="legacyNumbers"><div><strong>90%</strong><span>reduction in the debtor list</span></div><div><strong>£100k+</strong><span>contracts managed</span></div><div><strong>Dayforce</strong><span>HCM implementation for HR and payroll</span></div></div>
      </section>

      <section className="careerHistory sectionPad" id="salesforce">
        <div className="sectionTop"><p className="kicker">Career history</p><p>Systems thinking built through practice</p></div>
        <div className="historyRows">
          <article><time>Feb 2023—Feb 2024</time><div><h3>Salesforce Administrator → Project Lead</h3><p>Innerspace · configuration, requirements, implementation and project coordination</p></div></article>
          <article><time>2023—2024</time><div><h3>Freelance Salesforce work</h3><p>Bridges, London · org review, sandbox exploration, requirements and solution proposals</p></div></article>
          <article><time>Sep 2013—May 2018</time><div><h3>Barista Maestro &amp; Supervisor</h3><p>Costa Coffee · shifts, people, training, standards, stock, cash, audits and action plans</p></div></article>
          <article><time>Sep 2005—May 2008</time><div><h3>Au pair</h3><p>Italy · three years of international responsibility, cultural adaptation and communication</p></div></article>
        </div>
      </section>

      <section className="foundations sectionPad softSection" id="foundations">
        <div className="sectionTop"><p className="kicker">Foundations</p><p>Environment, community and access</p></div>
        <div className="foundationCards"><article><h3>Environment &amp; community</h3><p>Organic farming, river stewardship, habitat work, sustainability, risk assessment and public engagement through WWOOF, Heeley City Farm and the River Stewardship Company.</p></article><article><h3>Early opportunities</h3><p>The Prince&rsquo;s Trust, Northern College and work experience at the European Parliament helped shape the route into higher education and management.</p></article></div>
      </section>

      <section className="education sectionPad" id="education">
        <div className="sectionTop"><p className="kicker">Education &amp; credentials</p><p>Academic and professional</p></div>
        <div className="credentialGrid"><article><h3>MSc Environmental Management</h3><p>Sheffield Hallam University · Merit</p></article><article><h3>BA English Literature &amp; History</h3><p>University of Sheffield · 2:1</p></article><article><h3>Salesforce Certified Platform Administrator</h3><p>Certified 2026</p></article><article><h3>Climate Change &amp; Environmental Awareness</h3><p>NCFE · Level 2</p></article></div>
      </section>

      <section className="nextPage sectionPad"><p className="kicker">See the work</p><h2>Experience translated into systems.</h2><ArrowLink href="/projects">Explore projects</ArrowLink></section>
      <SiteFooter />
    </main>
  );
}
