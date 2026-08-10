"use client";

import { useEffect, useId, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home", key: "home" as const },
  { href: "/projects", label: "Projects", key: "projects" as const },
  { href: "/experience", label: "Experience", key: "experience" as const },
  { href: "/#about", label: "About", key: "about" as const },
];

export function MobileNav({
  dark = false,
  active = "",
}: {
  dark?: boolean;
  active?: "home" | "projects" | "experience" | "" | "about";
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        open &&
        panelRef.current &&
        buttonRef.current &&
        !panelRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className={`mobileNavWrap${dark ? " mobileNavDark" : ""}`}>
      <button
        ref={buttonRef}
        type="button"
        className="mobileNavButton"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div ref={panelRef} id={panelId} className="mobileNavPanel" role="navigation" aria-label="Mobile navigation">
          {links.map((link) => (
            <a
              key={link.href}
              className={active === link.key ? "active" : ""}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
