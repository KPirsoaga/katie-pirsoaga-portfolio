"use client";

import { useEffect, useState } from "react";

type SectionLink = {
  id: string;
  label: string;
};

export function SectionNav({
  label,
  links,
}: {
  label: string;
  links: SectionLink[];
}) {
  const [activeId, setActiveId] = useState(links[0]?.id ?? "");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  return (
    <nav className="sectionNav" aria-label={`${label} section navigation`}>
      <span>{label}</span>
      <div className="sectionNavLinks">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeId === link.id ? "active" : ""}
            aria-current={activeId === link.id ? "true" : undefined}
          >
            {link.label}
          </a>
        ))}
        <a href="#top">Top</a>
      </div>
    </nav>
  );
}
