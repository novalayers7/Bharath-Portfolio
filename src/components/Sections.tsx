import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "../motion";
import { jobs, projects, values, person, type Project } from "../data";
import SplitWords from "./SplitWords";
import ProjectVisual from "./ProjectVisual";
import Marquee from "./Marquee";

export function Heading({ solid, outline }: { solid: string; outline?: string }) {
  return (
    <h2 className="s-title" data-words>
      <span className="s-line"><SplitWords text={solid} /></span>
      {outline && <span className="s-line outline"><SplitWords text={outline} /></span>}
    </h2>
  );
}

export function Experience({ alignHeading = "left" }: { alignHeading?: "left" | "right" }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const railRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const list = listRef.current;
    const rail = railRef.current;
    const progress = progressRef.current;
    if (!track || !list || !rail || !progress) return;
    const items = Array.from(list.querySelectorAll<HTMLElement>(".journey-item"));
    const markers = Array.from(list.querySelectorAll<HTMLElement>(".journey-marker"));
    const mm = gsap.matchMedia();

    const markerCenter = (marker: HTMLElement) => {
      const dot = marker.firstElementChild as HTMLElement;
      return dot.getBoundingClientRect().top + dot.offsetHeight / 2;
    };
    const markerPositions = () => {
      const trackTop = track.getBoundingClientRect().top;
      return markers.map((marker) => markerCenter(marker) - trackTop);
    };
    const alignRail = () => {
      const positions = markerPositions();
      if (positions.length) gsap.set(rail, { top: positions[0], bottom: Math.max(0, track.clientHeight - positions[positions.length - 1]) });
    };

    // The page may add a pin above this child in its own layout effect. Initialize
    // after that effect so ScrollTrigger measures this timeline in final document flow.
    const frame = window.requestAnimationFrame(() => {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const update = () => {
          const positions = markerPositions();
          const bounds = track.getBoundingClientRect();
          const anchor = window.innerHeight * 0.5;
          const lineProgress = gsap.utils.clamp(0, 1, (anchor - bounds.top - positions[0]) / (positions[positions.length - 1] - positions[0]));
          gsap.set(progress, { scaleY: lineProgress });

          let activeIndex = 0;
          markers.forEach((marker, index) => {
            if (markerCenter(marker) <= anchor) activeIndex = index;
          });
          items.forEach((item, index) => {
            const active = index === activeIndex;
            item.classList.toggle("is-active", active);
            if (active) item.setAttribute("aria-current", "step");
            else item.removeAttribute("aria-current");
          });
        };
        const trigger = ScrollTrigger.create({
          trigger: list,
          start: "top 68%",
          end: "bottom 50%",
          onEnter: update,
          onEnterBack: update,
          onLeaveBack: update,
          onUpdate: update,
          onRefresh: () => { alignRail(); update(); },
        });
        alignRail();
        update();
        return () => trigger.kill();
      });
    });
    alignRail();
    return () => {
      window.cancelAnimationFrame(frame);
      mm.revert();
    };
  }, []);

  return (
    <section className={`serhii section${alignHeading === "right" ? " experience-heading-right" : ""}`} aria-labelledby="exp-h">
      <div className="frame-pad">
        <div className="exp-head">
          <span id="exp-h" className="sr-only">Experience</span>
          <Heading solid="THE JOURNEY" outline="SO FAR" />
        </div>
        <div className="journey-track" ref={trackRef}>
          <span className="journey-rail" aria-hidden="true" ref={railRef}><span className="journey-progress" ref={progressRef} /></span>
          <ol className="journey-timeline" ref={listRef}>
            {jobs.map((j, i) => (
              <li key={j.org} className={`journey-item${i === 0 ? " is-active" : ""}`} aria-current={i === 0 ? "step" : undefined}>
                <span className="journey-marker" aria-hidden="true"><i /></span>
                <div className="journey-content">
                  <div className="journey-heading">
                    <div>
                      <span className="journey-stage">STAGE {String(i + 1).padStart(2, "0")}</span>
                      <h3>{j.title ?? <>{j.org}{j.role && <> <em>&mdash; {j.role}</em></>}</>}</h3>
                    </div>
                    {j.period && <span className="journey-period">{j.period}</span>}
                  </div>
                  {j.place && <p className="journey-place">{j.place}</p>}
                  <p>{j.blurb}</p>
                  {j.points.length > 0 && <ul className="dash">{j.points.map((point) => <li key={point}>{point}</li>)}</ul>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ p, ratio = "4 / 3", index, imageSrc }: { p: Project; ratio?: string; index?: number; imageSrc?: string }) {
  const visualProject = imageSrc ? { ...p, images: [imageSrc] } : p;
  return (
    <Link to={`/work/${p.slug}`} className="pcard" aria-label={`${p.title} — ${p.category}`}>
      <div className="pcard-top">
        <h3>{p.title}</h3>
        <div className="pills">{p.tech.slice(0, 2).map((t) => <span key={t}>{t}</span>)}</div>
      </div>
      <p className="pcard-cat">{index !== undefined ? `${String(index + 1).padStart(2, "0")} — ` : ""}{p.category}</p>
      <div className="pcard-img" data-clip>
        <div className="pcard-inner"><ProjectVisual project={visualProject} ratio={ratio} /></div>
        <span className="pcard-view" aria-hidden="true">VIEW<br />PROJECT ↗</span>
      </div>
    </Link>
  );
}

export function SelectedWorks() {
  const featured = projects.slice(0, 4);
  const images: Record<string, { src: string; ratio: string }> = {
    sheraera: { src: "/img/works/shera%20homepage.png", ratio: "1896 / 949" },
    "elysian-aether": { src: "/img/works/elysianaether%20homepage.png", ratio: "1896 / 949" },
    "70mm-teez-studio": { src: "/img/works/70mmteez%20homepage.png", ratio: "1903 / 934" },
    novalayers: { src: "/img/works/novalayers%20homepage.png", ratio: "1897 / 949" },
  };
  return (
    <section className="serhii section works" aria-labelledby="works-h">
      <Marquee items={["MY WORKS", "MY WORKS", "MY WORKS"]} variant="outline" />
      <div className="frame-pad">
        <h2 id="works-h" className="sr-only">Selected works</h2>
        <div className="works-grid">
          {featured.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} imageSrc={images[p.slug]?.src} ratio={images[p.slug]?.ratio} />)}
        </div>
        <div className="works-more" data-fade>
          <p>{person.projects} projects in total across Shopify, WordPress, React and Next.js.</p>
          <Link to="/work" className="btn-solid">View all work ↗</Link>
        </div>
      </div>
    </section>
  );
}

export function WhyWork({ cardLayout = false }: { cardLayout?: boolean }) {
  return (
    <section className="serhii section" aria-labelledby="why-h">
      <div className="frame-pad">
        <span id="why-h" className="sr-only">Why work with me</span>
        <Heading solid="WHY WORK" outline="WITH ME" />
        <div className={`values${cardLayout ? " values-cards" : ""}`} data-stagger>
          {values.map((v, i) => (
            <div key={v.name} className={`value${cardLayout ? " value-card" : ""}`}>
              <span className="value-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{v.name}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConnectCTA() {
  return (
    <section className="serhii section connect" aria-labelledby="connect-h">
      <div className="frame-pad">
        <p className="eyebrow" data-fade>Have an idea? Let's build something great.</p>
        <h2 id="connect-h" className="giant" data-words>
          <span className="s-line"><SplitWords text="LET'S" /></span>
          <span className="s-line outline"><SplitWords text="CONNECT" /></span>
        </h2>
        <div className="connect-row" data-stagger>
          <p>{person.connect}</p>
          <div className="connect-actions">
            <a className="btn-solid" href={`mailto:${person.email}`}>{person.email}</a>
            <Link className="btn-ghost" to="/contact">Send a message ↗</Link>
          </div>
        </div>
        <p className="connect-note" data-fade>Let's turn ideas into reality.</p>
      </div>
    </section>
  );
}
