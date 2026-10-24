import { useReveal } from "../motion";
import { person, projects } from "../data";
import SplitWords from "../components/SplitWords";
import Marquee from "../components/Marquee";
import { ProjectCard, ConnectCTA } from "../components/Sections";

// Asymmetric editorial rhythm: each entry sets the grid span and image ratio for that project.
const rhythm: { cls: string; ratio: string }[] = [
  { cls: "g-wide", ratio: "16 / 9" },
  { cls: "g-narrow", ratio: "4 / 5" },
  { cls: "g-narrow", ratio: "4 / 5" },
  { cls: "g-wide", ratio: "16 / 9" },
  { cls: "g-half", ratio: "4 / 3" },
  { cls: "g-half", ratio: "4 / 3" },
  { cls: "g-wide", ratio: "16 / 9" },
  { cls: "g-half", ratio: "4 / 3" },
  { cls: "g-half", ratio: "4 / 3" },
];

export default function Work() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="serhii-wrap page-top">
      <section className="serhii section work-hero" aria-labelledby="wk-h">
        <div className="frame-pad">
          <h1 id="wk-h" className="giant" data-words>
            <span className="s-line"><SplitWords text="SELECTED" /></span>
            <span className="s-line outline"><SplitWords text="WORK" /></span>
          </h1>
          <p className="lead" data-fade>{person.projects} projects across Shopify, WordPress, React and Next.js. Select a project to see my role, stack and the live site.</p>
        </div>
      </section>
      <Marquee items={["MY WORKS", "MY WORKS", "MY WORKS"]} variant="outline" />
      <section className="serhii section" aria-label="Project gallery">
        <div className="frame-pad gallery">
          {projects.map((p, i) => (
            <div key={p.slug} className={`g-item ${rhythm[i % rhythm.length].cls}`}>
              <ProjectCard p={p} index={i} ratio={rhythm[i % rhythm.length].ratio} />
            </div>
          ))}
        </div>
      </section>
      <ConnectCTA />
    </div>
  );
}
