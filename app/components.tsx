import type { ReactNode } from "react";
import { MobileNav } from "./MobileNav";

const Arrow = () => <span aria-hidden="true">↗</span>;

export function SiteNav({ dark = false, active = "" }: { dark?: boolean; active?: "home" | "projects" | "experience" | "" }) {
  return (
    <nav className={`siteNav${dark ? " navDark" : ""}`} aria-label="Primary navigation">
      <a className="brand" href="/">KP</a>
      <div className="siteLinks">
        <a className={active === "home" ? "active" : ""} href="/">Home</a>
        <a className={active === "projects" ? "active" : ""} href="/projects">Projects</a>
        <a className={active === "experience" ? "active" : ""} href="/experience">Experience</a>
        <a href="/#about">About</a>
      </div>
      <MobileNav dark={dark} active={active} />
      <a className="contactButton" href="mailto:kpirsoaga@protonmail.com">Contact <Arrow /></a>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <span>KP</span>
      <p>English · conference operations · digital systems</p>
      <p>© 2026 Katie Pirsoaga · <a href="#top">Back to top ↑</a></p>
    </footer>
  );
}

export function ArrowLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  return <a className="arrowLink" href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>{children} <Arrow /></a>;
}
