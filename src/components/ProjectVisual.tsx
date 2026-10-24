import type { Project } from "../data";

/**
 * Shows the local screenshot when `project.images[index]` exists. Otherwise renders a clearly labelled,
 * easily replaceable placeholder.
 */
export default function ProjectVisual({ project, index = 0, ratio = "4 / 3" }: { project: Project; index?: number; ratio?: string }) {
  const src = project.images[index];
  const imageRatio = project.imageRatios?.[index] ?? ratio;
  return (
    <div className={`pv pv-${project.tone}`} style={{ aspectRatio: imageRatio }}>
      {src ? (
        <img src={src} alt={index === 0 ? `${project.title} primary website screenshot` : `${project.title} website screenshot ${index}`} loading="lazy" decoding="async" />
      ) : (
        <div className="pv-ph" role="img" aria-label={`${project.title} — screenshot placeholder`}>
          <span className="pv-title">{project.title}</span>
          <span className="pv-note">Screenshot placeholder</span>
        </div>
      )}
    </div>
  );
}
