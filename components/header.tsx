"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Copy } from "@/lib/content";
import { languageOptions, languagePath, languages, sectionIds, type Language, type SectionId } from "@/lib/locales";

type HeaderProps = {
  brand: ReactNode;
  language: Language;
  text: Copy["navigation"];
};

export function Header({ brand, language, text }: HeaderProps) {
  const [active, setActive] = useState<SectionId>("home");
  const [isOpen, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = sectionIds.flatMap((id) => {
      const element = document.getElementById(id);
      return element ? [{ id, element }] : [];
    });

    let pending = 0;
    const sync = () => {
      pending = 0;
      const marker = (header.current?.offsetHeight ?? 0) + Math.min(innerHeight * 0.22, 150);
      let current: SectionId = "home";
      for (const section of sections) {
        if (section.element.getBoundingClientRect().top > marker) break;
        current = section.id;
      }
      const bottom = Math.ceil(scrollY + innerHeight) >= document.documentElement.scrollHeight - 2;
      setActive(bottom && scrollY > 0 ? "contacts" : current);
    };
    const schedule = () => {
      if (!pending) pending = requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      cancelAnimationFrame(pending);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const desktop = window.matchMedia("(min-width: 960px)");
    const closeOnWideScreen = () => {
      if (desktop.matches) setOpen(false);
    };
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    desktop.addEventListener("change", closeOnWideScreen);
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", escape);
    return () => {
      desktop.removeEventListener("change", closeOnWideScreen);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", escape);
    };
  }, [isOpen]);

  const focusSection = (id: SectionId) => {
    const section = document.getElementById(id);
    if (section) section.focus({ preventScroll: true });
    setOpen(false);
  };

  return (
    <header ref={header} className="site-header">
      <div className="container header-inner">
        <div className="header-brand">{brand}</div>
        <nav className="desktop-nav" aria-label={text.primary}>
          {sectionIds.map((id) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>
              {text.labels[id]}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <nav className="language-switch" aria-label={text.siteLanguage}>
            {languageOptions.map((option) => (
              <a
                key={option}
                href={languagePath(option) + (active === "home" ? "" : `#${active}`)}
                hrefLang={option}
                lang={option}
                aria-label={languages[option].label}
                aria-current={option === language ? "page" : undefined}
              >
                {option.toUpperCase()}
              </a>
            ))}
          </nav>
          <a href="#contacts" className="button button-primary header-cta" onClick={() => focusSection("contacts")}>
            {text.contact}
          </a>
          <button
            type="button"
            className="menu-toggle"
            ref={menuButton}
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? text.menuClose : text.menuOpen}
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label={text.mobile} hidden={!isOpen}>
        <div className="container mobile-nav-links">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => focusSection(id)}
            >
              {text.labels[id]}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
