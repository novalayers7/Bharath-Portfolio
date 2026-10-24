import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger, useReveal } from "../motion";
import { ddd, person } from "../data";
import Marquee from "../components/Marquee";
import { Experience, SelectedWorks, WhyWork, ConnectCTA } from "../components/Sections";
import Testimonials from "../components/Testimonials";

const NAME = "BHARATH KUMAR C";

export function Arrow() {
  return (
    <svg className="big-arrow" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <path d="M14 86 L78 22 M30 18 H82 V70" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="butt" strokeLinejoin="miter" />
    </svg>
  );
}

export default function Home() {
  const dddCard = useRef<HTMLDivElement>(null);

  const ref = useReveal<HTMLDivElement>((root, mm) => {
    // ---- Hero entrance (Matthew-style): name rises letter by letter, portrait wipes up, small copy fades in.
    const tl = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.55 });
    tl.fromTo(".hero-name .c", { yPercent: 105 }, { yPercent: 0, duration: 1.4, stagger: 0.04 }, 0)
      .fromTo(".hero-img", { clipPath: "inset(100% 0% 0% 0%)", yPercent: 6 }, { clipPath: "inset(0% 0% 0% 0%)", yPercent: 0, duration: 1.5, ease: "expo.inOut" }, 0.15)
      .fromTo(".hero-role > *, .hero-scroll, .hero-arcs", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, 0.9);

    // ---- Hero scroll: the portrait lags behind (layered parallax).
    gsap.to(".hero-img", { scale: 1.04, transformOrigin: "50% 80%", ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 } });
    gsap.to(".hero-arcs", { rotate: 25, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 } });

    // ---- About: giant "/ABOUT" slides in, arrow draws in.
    gsap.fromTo(".about-title span.run", { xPercent: -14 }, { xPercent: 0, ease: "none", scrollTrigger: { trigger: ".about-b", start: "top bottom", end: "top 25%", scrub: 0.6 } });
    gsap.fromTo(".about-b .big-arrow", { opacity: 0, x: -40, y: 40 }, { opacity: 1, x: 0, y: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: ".about-body", start: "top 80%", once: true } });

    // ---- Define / Design / Deliver: pinned on desktop, active word steps with scroll.
    mm.add("(min-width: 900px)", () => {
      const card = dddCard.current!;
      const words = gsap.utils.toArray<HTMLElement>(".ddd-words li", card);
      const texts = gsap.utils.toArray<HTMLElement>(".ddd-text", card);
      const panels = gsap.utils.toArray<HTMLElement>(".ddd-panel", card);
      card.classList.add("pinned");
      let current = -1;
      const set = (i: number) => {
        if (i === current) return;
        current = i;
        words.forEach((w, k) => w.classList.toggle("active", k === i));
        texts.forEach((t, k) => t.classList.toggle("active", k === i));
        panels.forEach((p, k) => p.classList.toggle("on", k <= i));
      };
      set(0);
      const st = ScrollTrigger.create({
        trigger: ".ddd",
        start: "top top",
        end: "+=230%",
        pin: ".ddd-pin",
        onUpdate: (self) => set(Math.min(2, Math.floor(self.progress * 3))),
      });
      return () => {
        st.kill();
        card.classList.remove("pinned");
      };
    });
  });

  return (
    <div ref={ref}>
      {/* A — HERO (Matthew reference) */}
      <section className="hero" aria-label="Introduction">
        <h1 className="sr-only">{person.name} — {person.title}</h1>
        <svg className="hero-arcs" viewBox="0 0 800 800" aria-hidden="true">
          <circle cx="400" cy="400" r="380" /><circle cx="560" cy="520" r="260" />
        </svg>
        <div className="hero-name" aria-hidden="true">
          <div className="hero-name-track">
            {[0, 1].map((copy) => (
              <span className={`run${copy ? " hero-name-copy" : ""}`} key={copy}>
                {NAME.split("").map((ch, i) => (
                  <span className="c" key={i}>{ch === " " ? "\u00A0" : ch}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <img className="hero-img" src="/img/portrait.webp" width={1371} height={1147} alt="Portrait of Bharath Kumar C, wearing glasses and a navy shirt" fetchPriority="high" />
        <div className="hero-role">
          <p>Web Developer</p>
          <p>&amp; Vibe Coder</p>
        </div>
        <a className="hero-scroll" href="#about-intro" onClick={(e) => { e.preventDefault(); document.getElementById("about-intro")?.scrollIntoView({ behavior: "smooth" }); }}>
          <span>Scroll down</span>
          <svg viewBox="0 0 24 40" aria-hidden="true"><path d="M12 0v36M3 27l9 10 9-10" fill="none" stroke="currentColor" strokeWidth="2.4" /></svg>
        </a>
      </section>

      {/* B — ABOUT INTRO (Matthew reference) */}
      <section className="about-b" id="about-intro" aria-labelledby="about-h">
        <div className="about-top">
          <h2 id="about-h" className="about-title"><span className="run">/ABOUT</span></h2>
        </div>
        <div className="about-body">
          <Arrow />
          <div className="about-copy" data-stagger>
            <p className="about-lead">{person.summary}</p>
            <p>{person.summaryLong}</p>
            <div className="about-achievements" aria-label="Achievements and location">
              <div className="achievement-badge"><strong>1+</strong>{" "}<span>Year of Experience</span></div>
              <div className="achievement-badge"><strong>10+</strong>{" "}<span>Projects</span></div>
              <div className="achievement-badge"><strong>5+</strong>{" "}<span>Independent Projects</span></div>
              <div className="achievement-badge achievement-badge-location"><span>Tiruppur, Tamil Nadu, India</span></div>
            </div>
            <p className="about-now">Web Developer at Nova Layers, with ongoing freelance web development alongside independent projects.</p>
            <Link to="/about" className="btn-light">More about me ↗</Link>
          </div>
        </div>
      </section>
      <Marquee items={["BHARATH KUMAR C", "WEB DEVELOPER & VIBE CODER", "SHOPIFY · WORDPRESS · REACT · NEXT.JS"]} />

      {/* C — DEFINE / DESIGN / DELIVER (Matthew reference) */}
      <section className="ddd" aria-labelledby="ddd-h">
        <div className="ddd-pin">
          <h2 id="ddd-h" className="sr-only">Define, Design, Deliver</h2>
          <div className="ddd-card" ref={dddCard}>
            <div className="ddd-left">
              <ul className="ddd-words" aria-hidden="true">
                {ddd.map((d, i) => <li key={d.word} className={i === 0 ? "active" : ""}>{d.word.toUpperCase()}</li>)}
              </ul>
              <div className="ddd-texts">
                {ddd.map((d, i) => (
                  <div key={d.word} className={`ddd-text${i === 0 ? " active" : ""}`}>
                    <h3 className="ddd-h3">{d.word}</h3>
                    <p>{d.text}</p>
                    <p className="ddd-steps">{d.steps.map((s) => <span key={s}>{s}</span>)}</p>
                    <img className="ddd-stage-image" src={`/img/define-design-deliver%20image%20${i + 1}.png`} alt="" loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            </div>
            <div className="ddd-right" aria-hidden="true">
              {ddd.map((d, i) => (
                <div key={d.word} className={`ddd-panel p${i}${i === 0 ? " on" : ""}`}>
                  <img src={`/img/define-design-deliver%20image%20${i + 1}.png`} alt="" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* D–G — Serhii reference */}
      <div className="serhii-wrap">
        <Experience />
        <SelectedWorks />
        <WhyWork cardLayout />
        <Testimonials />
        <ConnectCTA />
      </div>
    </div>
  );
}
