import type { Metadata } from "next";
import { ArrowLink, SiteFooter, SiteNav } from "../components";

export const metadata: Metadata = {
  title: "Experience | Katie Pirsoaga",
  description:
    "English communication, ILS conference operations, Salesforce administration, and business-management foundations.",
  openGraph: {
    title: "Experience | Katie Pirsoaga",
    description:
      "English communication, ILS conference operations, Salesforce administration, and business-management foundations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Katie Pirsoaga",
    description:
      "English communication, ILS conference operations, Salesforce administration, and business-management foundations.",
  },
};

export default function Experience() {
  return (
    <main id="top">
      <SiteNav dark active="experience" />
      <header className="pageHero experienceHero sectionPad">
        <p className="kicker">Experience</p>
        <h1>The route was not linear.<br />The pattern is.</h1>
        <p>I repeatedly move from doing the work to improving how the work is organised.</p>
      </header>

      <nav className="sectionNav" aria-label="Experience navigation"><span>Experience</span><a href="#current">Current</a><a href="#english">English</a><a href="#salesforce">Salesforce</a><a href="#legacy">Legacy</a><a href="#earlier">Earlier</a><a href="#foundations">Foundations</a><a href="#education">Education</a><a href="#top">Top ↑</a></nav>

      <section className="currentExperience sectionPad" id="current">
        <div className="sectionTop"><p className="kicker">Current practice</p><p>International · remote · on-site · hybrid</p></div>
        <div className="roleList">
          <article id="english"><time>Jan 2022 to present</time><div><h2>Freelance English Educator, Editor &amp; Communication Coach</h2><h3>International private learners, professionals, schools and teams</h3><p>Long-term conversational English, pronunciation, business and academic communication, interviews, meetings, presentations, immigration assessments, proofreading and tailored educational content. Clients include private learners across Europe, a London school (proofreading and content), and software engineers through DevAccelerator, with work spanning interview preparation, workplace communication, and UK language-based assessments.</p><div className="roleEvidence"><span>Private learners across Europe</span><span>Interview &amp; assessment preparation</span><span>London school proofreading and content</span><span>DevAccelerator technical cohort</span></div><ArrowLink href="https://devaccelerator.io/" external>Visit DevAccelerator</ArrowLink></div></article>
          <article><time>Oct 2024 to present</time><div><h2>Conference Operations &amp; Systems Manager</h2><h3>International Linguistic Society</h3><p>International conference operation and administration of the complete digital environment behind it: Pretalx, Pretix, Open Journal Systems, WordPress, Google Workspace, VPS infrastructure, publishing, communications, social media, documentation and video production.</p><ArrowLink href="/projects#ils">View the ILS case study</ArrowLink></div></article>
          <article><time>Oct 2023 to Oct 2024</time><div><h2>Conference Operations &amp; Systems Manager</h2><h3>International Society of Experimental Linguistics / EXLING</h3><p>Conference coordination, website development, Google Workspace administration, submissions, scheduling, speaker engagement and the foundations that became ILS.</p></div></article>
        </div>
      </section>

      <section className="salesforceExperience sectionPad softSection" id="salesforce">
        <div className="sectionTop"><p className="kicker">Salesforce administration</p><p>Current credential · current capability · verified delivery</p></div>
        <div className="roleList">
          <article><time>Credential</time><div><h2>Salesforce Certified Administrator</h2><p>Katie holds current Salesforce certification and maintains active professional capability in administration, configuration, Flows, reporting, access management, implementation and user support. She is available for future Salesforce work. This is not one of the three primary active workstreams, but it remains a current professional platform skill.</p></div></article>
          <article><time>Feb 2023 to Feb 2024</time><div><h2>Salesforce Administrator → Project Lead</h2><h3>Innerspace</h3><p>Organisation configuration, custom objects and fields, Flows, validation rules, page layouts, reports and dashboards, user access, training and adoption support, and project coordination.</p></div></article>
          <article><time>Nov 2023 to Apr 2025</time><div><h2>Freelance Salesforce Administrator</h2><h3>Bridges, London</h3><p>Organisation review, sandbox analysis, requirements gathering and solution proposals.</p></div></article>
        </div>
      </section>

      <section className="legacyExperience sectionPad darkSection" id="legacy">
        <div className="sectionTop lightLine"><p className="kicker lightText">Historical systems evidence</p><p>Legacy Habitat Management · 2018 to 2022</p></div>
        <div className="legacyHeader"><h2>Business management<br />with measurable results.</h2><p>Led business management across finance, payroll, HR, recruitment, fleet, logistics, suppliers and customers. Administered Sage within the company&rsquo;s finance and accounting operations and improved the accuracy and structure of Sage data. Implemented and rolled out Dayforce HCM for HR and payroll. Managed payroll, benefits and reconciliations, and supported recruitment, training, fleet management and logistics.</p></div>
        <div className="legacyNumbers"><div><strong>90%</strong><span>reduction in the debtor list</span></div><div><strong>£100k+</strong><span>contracts managed</span></div><div><strong>Dayforce</strong><span>implemented and rolled out for HR and payroll</span></div></div>
      </section>

      <section className="careerHistory sectionPad" id="earlier">
        <div className="sectionTop"><p className="kicker">Earlier roles</p><p>People, standards and international responsibility</p></div>
        <div className="historyRows">
          <article><time>Sep 2013 to May 2018</time><div><h3>Barista Maestro &amp; Supervisor</h3><p>Costa Coffee · shifts, people, training, standards, stock, cash, audits and action plans</p></div></article>
          <article><time>Sep 2005 to May 2008</time><div><h3>Au pair</h3><p>Italy · three years of international responsibility, cultural adaptation and communication</p></div></article>
        </div>
      </section>

      <section className="foundations sectionPad softSection" id="foundations">
        <div className="sectionTop"><p className="kicker">Foundations</p><p>Environment, community and access</p></div>
        <div className="foundationCards"><article><h3>Environment &amp; community</h3><p>Organic farming, river stewardship, habitat work, sustainability, risk assessment and public engagement through WWOOF, Heeley City Farm and the River Stewardship Company.</p></article><article><h3>Early opportunities</h3><p>The Prince&rsquo;s Trust, Northern College and work experience at the European Parliament helped shape the route into higher education and management.</p></article></div>
      </section>

      <section className="education sectionPad" id="education">
        <div className="sectionTop"><p className="kicker">Education &amp; credentials</p><p>Academic and professional</p></div>
        <div className="credentialGrid"><article><h3>MSc Environmental Management</h3><p>Sheffield Hallam University · Merit</p></article><article><h3>BA English Literature &amp; History</h3><p>Sheffield Hallam University · 2:1</p></article><article><h3>Salesforce Certified Administrator</h3><p>Current credential</p></article><article><h3>Climate Change &amp; Environmental Awareness</h3><p>NCFE · Level 2</p></article></div>
      </section>

      <section className="nextPage sectionPad"><p className="kicker">See the work</p><h2>Experience translated into systems.</h2><ArrowLink href="/projects">Explore projects</ArrowLink></section>
      <SiteFooter />
    </main>
  );
}
