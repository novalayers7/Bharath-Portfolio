import { Link, Navigate, useParams } from "react-router-dom";
import { useReveal } from "../motion";
import { projects } from "../data";
import SplitWords from "../components/SplitWords";
import ProjectVisual from "../components/ProjectVisual";
import { ConnectCTA } from "../components/Sections";

export default function ProjectDetail() {
  const { slug } = useParams();
  const idx = projects.findIndex((p) => p.slug === slug);
  const ref = useReveal<HTMLDivElement>();
  if (idx < 0) return <Navigate to="/work" replace />;
  const p = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <div ref={ref} className="serhii-wrap page-top" key={p.slug}>
      <article className="serhii section">
        <div className="frame-pad">
          <Link to="/work" className="back" data-fade>← All work</Link>
          <h1 className="giant sm" data-words>
            <span className="s-line"><SplitWords text={p.title.toUpperCase()} /></span>
          </h1>
          <div className="detail-overview" data-fade>
            <h2 className="mini">Overview</h2>
            <p className="lead">{p.summary}</p>
          </div>
          <div className="detail-meta" data-stagger>
            <div><span>Category</span><p>{p.category}</p></div>
            <div><span>Role</span><p>{p.role}</p></div>
            <div><span>Website</span><p><a href={p.url} target="_blank" rel="noreferrer">{p.url.replace("https://", "")} ↗</a></p></div>
          </div>
          <div className="detail-hero-shot" data-clip>
            <ProjectVisual project={p} index={0} ratio="16 / 10" />
          </div>
          <div className="two-col detail-copy">
            <div data-stagger>
              <h2 className="mini detail-subhead">My Role</h2>
              <p>{p.role}</p>
            </div>
            <div data-stagger>
              <h2 className="mini">Development &amp; Features</h2>
              {p.highlight && <div className="project-highlight"><span>Featured functionality</span><p>{p.highlight}</p></div>}
              <ul className="dash">{p.contributions.map((c) => <li key={c}>{c}</li>)}</ul>
              <h2 className="mini detail-subhead">Technology Stack</h2>
              <ul className="detail-stack">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              <a className="btn-solid" href={p.url} target="_blank" rel="noreferrer">Visit live website ↗</a>
            </div>
          </div>
          {p.images.length > 1 && (
            <section className="detail-gallery" aria-label={`${p.title} project screenshots`}>
              <h2 className="mini">Project Gallery</h2>
              <div className="detail-gallery-grid">
                {p.images.slice(1).map((_, index) => (
                  <figure className="detail-gallery-item" data-clip key={p.images[index + 1]}>
                    <ProjectVisual project={p} index={index + 1} />
                  </figure>
                ))}
              </div>
            </section>
          )}
          <nav className="pn" aria-label="Project navigation">
            <Link to={`/work/${prev.slug}`}><span>← Previous</span><b>{prev.title}</b></Link>
            <Link to={`/work/${next.slug}`}><span>Next →</span><b>{next.title}</b></Link>
          </nav>
        </div>
      </article>
      <ConnectCTA />
    </div>
  );
}
