"use client";

import { useEffect, useId, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home", key: "home" as const },
  { href: "/projects", label: "Work", key: "projects" as const },
  { href: "/experience", label: "Experience", key: "experience" as const },
  { href: "/#about", label: "About", key: "about" as const },
];

const contactHref = "mailto:kpirsoaga@protonmail.com";

export function MobileNav({
  active = "",
}: {
  active?: "home" | "projects" | "experience" | "" | "about";
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) {
      document.body.classList.remove("menuOpen");
      return;
    }

    document.body.classList.add("menuOpen");
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusables = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      );

      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("menuOpen");
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div className="mobileNavWrap">
      <button
        ref={buttonRef}
        type="button"
        className="mobileNavButton"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close site navigation" : "Open site navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          className="mobileNavPanel"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {links.map((link, index) => (
            <a
              key={link.href}
              ref={index === 0 ? firstLinkRef : undefined}
              className={active === link.key ? "active" : ""}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            ref={contactRef}
            className="mobileNavContact"
            href={contactHref}
            onClick={closeMenu}
          >
            Let&rsquo;s talk
          </a>
        </div>
      ) : null}
    </div>
  );
}
