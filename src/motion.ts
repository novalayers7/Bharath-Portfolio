import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };

export const NO_MOTION = "(prefers-reduced-motion: reduce)";
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

/**
 * Scroll-reveal system driven by data attributes inside the returned ref's element:
 *  data-words  — word-by-word masked rise (use with <SplitWords/>)
 *  data-fade   — fade + rise
 *  data-stagger— children fade + rise in sequence
 *  data-clip   — image mask reveal (wipe up) with inner scale settle
 *  data-line   — hairline draws left to right
 * Nothing is hidden when the visitor prefers reduced motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(setup?: (root: T, mm: gsap.MatchMedia) => void) {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add(MOTION_OK, () => {
        const q = <E extends HTMLElement>(s: string) => gsap.utils.toArray<E>(s, root);
        const trig = (el: Element, start = "top 88%") => ({ trigger: el, start, once: true });

        q("[data-words]").forEach((el) => {
          gsap.fromTo(el.querySelectorAll(".w > span"), { yPercent: 115 }, { yPercent: 0, duration: 1.1, ease: "expo.out", stagger: 0.055, scrollTrigger: trig(el) });
        });
        q("[data-fade]").forEach((el) => {
          gsap.fromTo(el, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: trig(el, "top 90%") });
        });
        q("[data-stagger]").forEach((el) => {
          gsap.fromTo(el.children, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.09, scrollTrigger: trig(el, "top 85%") });
        });
        q("[data-clip]").forEach((el) => {
          const inner = el.firstElementChild;
          gsap.fromTo(el, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.inOut", scrollTrigger: trig(el, "top 90%") });
          if (inner) gsap.fromTo(inner, { scale: 1.25 }, { scale: 1, duration: 1.8, ease: "expo.out", scrollTrigger: trig(el, "top 90%") });
        });
        q("[data-line]").forEach((el) => {
          gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", duration: 1.2, ease: "expo.inOut", scrollTrigger: trig(el, "top 92%") });
        });
        setup?.(root, mm);
      });
    }, root);
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}
