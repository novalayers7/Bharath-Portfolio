import { useEffect, useRef } from "react";
import { skills } from "../data";

export default function SkillsMarquee() {
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
        view.scrollLeft += Math.min(time - previous, 40) * 0.025;
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

  const cards = (hidden: boolean) => skills.map((group) => (
    <article className="skill-card" key={group.group} aria-hidden={hidden || undefined}>
      <h3>{group.group}</h3>
      <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  ));

  return (
    <div className="skills-marquee" data-stagger>
      <div className="skills-marquee-viewport" ref={viewport} role="region" tabIndex={0} aria-label="Skills and expertise. Scroll horizontally or use the arrow keys to explore.">
        <div className="skills-marquee-track" ref={track}>
          <div className="skills-marquee-set">{cards(false)}</div>
          <div className="skills-marquee-set" aria-hidden="true">{cards(true)}</div>
        </div>
      </div>
      <p className="skills-marquee-hint" aria-hidden="true">Drag or scroll horizontally to explore</p>
    </div>
  );
}
