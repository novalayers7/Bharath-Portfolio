import { useEffect, useRef } from "react";

const testimonials = [
  { company: "Sheraera", logo: "/img/shera.png", body: "The website delivers a polished shopping experience with a clean design and smooth product browsing. The custom Shopify implementation brings the brand's products together in a professional and user-friendly way." },
  { company: "70mm Teez Studio", logo: "/img/70mm%20logo.png", body: "The website has a distinctive visual identity, with a well-structured layout and smooth interactions. The custom Shopify development creates a cohesive experience across desktop and mobile devices." },
  { company: "Elysian Aether", logo: "/img/elysian.png", body: "The website presents aviation courses in a modern and organized way. Its responsive layout and clear content structure make it easier for visitors to explore the courses and understand the available opportunities." },
  { company: "Applied Automation Systems", logo: "/img/applied-automation.png", body: "The website provides a professional online presence with clear content presentation and a straightforward browsing experience. The development work helps communicate the business and its services effectively." },
  { company: "PTSS", logo: "/img/ptss.png", body: "The website offers a clean, responsive experience with a clear layout and accessible information. The focus on usability and professional presentation helps visitors navigate the website more easily." },
];

export default function Testimonials() {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const view = viewport.current;
    const row = track.current;
    if (!view || !row) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previous = 0;
    let resumeTimer = 0;
    let dragging = false;
    let pointerStart = 0;
    let scrollStart = 0;
    let paused = false;
    const pause = () => { paused = true; window.clearTimeout(resumeTimer); };
    const resumeSoon = () => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => { paused = false; }, 1400);
    };
    const animate = (time: number) => {
      if (previous && !paused && !reduceMotion.matches) {
        const loopWidth = row.children[1]?.getBoundingClientRect().left! - row.getBoundingClientRect().left;
        view.scrollLeft += Math.min(time - previous, 40) * 0.018;
        if (loopWidth > 0 && view.scrollLeft >= loopWidth) view.scrollLeft %= loopWidth;
      }
      previous = time;
      frame = window.requestAnimationFrame(animate);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      dragging = true;
      pointerStart = event.clientX;
      scrollStart = view.scrollLeft;
      pause();
      view.classList.add("is-dragging");
      view.setPointerCapture(event.pointerId);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (dragging) view.scrollLeft = scrollStart - (event.clientX - pointerStart);
    };
    const onPointerUp = () => {
      dragging = false;
      view.classList.remove("is-dragging");
      resumeSoon();
    };
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey) {
        event.preventDefault();
        view.scrollLeft += event.shiftKey ? event.deltaY : event.deltaX;
        pause();
        resumeSoon();
      }
    };
    const onInteract = () => { pause(); resumeSoon(); };
    view.addEventListener("pointerdown", onPointerDown);
    view.addEventListener("pointermove", onPointerMove);
    view.addEventListener("pointerup", onPointerUp);
    view.addEventListener("pointercancel", onPointerUp);
    view.addEventListener("wheel", onWheel, { passive: false });
    view.addEventListener("focusin", onInteract);
    view.addEventListener("focusout", resumeSoon);
    view.addEventListener("mouseenter", pause);
    view.addEventListener("mouseleave", resumeSoon);
    frame = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(resumeTimer);
      view.removeEventListener("pointerdown", onPointerDown);
      view.removeEventListener("pointermove", onPointerMove);
      view.removeEventListener("pointerup", onPointerUp);
      view.removeEventListener("pointercancel", onPointerUp);
      view.removeEventListener("wheel", onWheel);
      view.removeEventListener("focusin", onInteract);
      view.removeEventListener("focusout", resumeSoon);
      view.removeEventListener("mouseenter", pause);
      view.removeEventListener("mouseleave", resumeSoon);
    };
  }, []);

  const cards = (hidden = false) => testimonials.map((item) => (
    <article className="testimonial-card" key={item.company} aria-hidden={hidden || undefined}>
      <span className="testimonial-label">Project overview</span>
      <p>{item.body}</p>
      <div className="testimonial-company">
        <img className="testimonial-avatar" src={item.logo} alt={`${item.company} logo`} loading="lazy" />
        <span>{item.company}</span>
      </div>
    </article>
  ));

  return (
    <section className="serhii section testimonials" aria-labelledby="testimonials-h">
      <div className="frame-pad">
        <p className="eyebrow">A note from the people behind the projects</p>
        <h2 id="testimonials-h" className="s-title"><span className="s-line">WHAT PEOPLE</span><span className="s-line outline">SAY</span></h2>
        <p className="testimonials-intro">Proposed testimonial drafts for the listed businesses to review.</p>
        <div className="testimonials-viewport" ref={viewport} role="region" tabIndex={0} aria-label="Project overviews. Scroll or drag horizontally to explore.">
          <div className="testimonials-track" ref={track}>
            <div className="testimonials-set">{cards()}</div>
            <div className="testimonials-set" aria-hidden="true">{cards(true)}</div>
          </div>
        </div>
        <p className="testimonials-hint" aria-hidden="true">Drag or swipe to explore</p>
      </div>
    </section>
  );
}
