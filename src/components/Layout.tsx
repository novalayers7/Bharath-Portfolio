import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { gsap, ScrollTrigger, MOTION_OK } from "../motion";
import { person } from "../data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="header-pill">
        <Link to="/" className="brand" aria-label="Bharath Kumar C — home">
          <img className="brand-mark" src="/img/avatar%201.png" alt="" />
          <span className="brand-name">Bharath <b>Kumar C</b></span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => (isActive || (l.to === "/work" && pathname.startsWith("/work")) ? "active" : "")}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn-outline header-cta">
          HIRE ME
        </Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <i /><i />
        </button>
      </div>
      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        {links.map((l, i) => (
          <Link key={l.to} to={l.to} style={{ ["--i" as string]: i }}>
            {l.label}
          </Link>
        ))}
        <a href={`mailto:${person.email}`} className="mobile-mail">{person.email}</a>
      </div>
    </header>
  );
}

export function Footer() {
  const socials = [
    { name: "Email", href: `mailto:${person.email}`, icon: "email" },
    { name: "WhatsApp", href: person.whatsapp, icon: "whatsapp" },
    { name: "Instagram", href: person.instagram, icon: "instagram" },
    { name: "LinkedIn", href: person.linkedin, icon: "linkedin" },
  ];
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-tag">
          {person.name} | {person.title}
          <br />
          Building modern digital experiences with code, creativity, and technology.
        </p>
        <nav aria-label="Footer" className="footer-nav">
          {links.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </nav>
        <div className="footer-links" aria-label="Social media and contact links">
          {socials.map(({ name, href, icon }) => (
            <a key={name} href={href} aria-label={name} title={name} target={icon === "email" ? undefined : "_blank"} rel={icon === "email" ? undefined : "noopener noreferrer"}>
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                {icon === "email" && <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>}
                {icon === "whatsapp" && <><path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20l.9-4.8a8.4 8.4 0 1 1 16.6-3.5Z"/><path d="M8.2 7.8c.3-.6.6-.6 1-.6h.4c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.1-.7 1.5-.5.5-1.2.7-2 .5-1.1-.3-2.5-.9-3.8-2.2-1.5-1.4-2.2-3-2.4-4-.1-.8.3-1.4 1-1.6Z"/></>}
                {icon === "instagram" && <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.7" r=".8" className="icon-fill"/></>}
                {icon === "linkedin" && <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4"/></>}
              </svg>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-big" aria-hidden="true">BHARATH KUMAR</div>
      <div className="footer-bottom">
        <span>© 2026 {person.name}. All rights reserved.</span>
        <span>Made with creativity and code.</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  const curtain = useRef<HTMLDivElement>(null);
  const lenis = useRef<Lenis | null>(null);

  // Smooth scrolling (disabled for reduced-motion visitors), wired into ScrollTrigger.
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const l = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      lenis.current = l;
      l.on("scroll", ScrollTrigger.update);
      const tick = (t: number) => l.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      return () => {
        gsap.ticker.remove(tick);
        l.destroy();
        lenis.current = null;
      };
    });
    return () => mm.revert();
  }, []);

  // Page-entry curtain on every route change.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    lenis.current?.scrollTo(0, { immediate: true });
    document.title = pathname === "/" ? "Bharath Kumar C — Web Developer & Vibe Coder" : `${pathname.split("/")[1].replace(/^./, (c) => c.toUpperCase())} — Bharath Kumar C`;
    const el = curtain.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(el, { yPercent: 0, display: "block" }, { yPercent: -100, duration: 0.9, ease: "expo.inOut", onComplete: () => { gsap.set(el, { display: "none" }); } });
    return () => { gsap.killTweensOf(el); };
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <div className="curtain" ref={curtain} aria-hidden="true" />
    </>
  );
}
