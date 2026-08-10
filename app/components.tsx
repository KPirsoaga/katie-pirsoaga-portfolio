import type { ReactNode } from "react";
import { MobileNav } from "./MobileNav";

const Arrow = () => <span aria-hidden="true">↗</span>;

export function SiteNav({ active = "" }: { active?: "home" | "projects" | "experience" | "" }) {
  return (
    <nav className="siteNav" aria-label="Primary navigation">
      <a className="brand" href="/">KP.</a>
      <div className="siteLinks">
        <a className={active === "projects" ? "active" : ""} href="/projects">Work</a>
        <a className={active === "experience" ? "active" : ""} href="/experience">Experience</a>
        <a href="/#about">About</a>
      </div>
      <MobileNav active={active} />
      <a className="contactButton desktopOnly" href="mailto:kpirsoaga@protonmail.com">Let&rsquo;s talk <Arrow /></a>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerBrand">KP.</div>
      <nav className="footerNav" aria-label="Footer navigation">
        <a href="/">Home</a>
        <a href="/projects">Work</a>
        <a href="/experience">Experience</a>
        <a href="mailto:kpirsoaga@protonmail.com">Contact</a>
        <a href="#top">Back to top</a>
      </nav>
      <p className="footerMeta">© 2026 Katie Pirsoaga · English · conference operations · digital systems</p>
    </footer>
  );
}

export function ArrowLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      className="arrowLink"
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children} <Arrow />
    </a>
  );
}
