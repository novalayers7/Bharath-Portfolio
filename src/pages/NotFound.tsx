import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="serhii-wrap page-top">
      <section className="serhii section frame-pad">
        <h1 className="giant"><span className="s-line">404</span><span className="s-line outline">NOT FOUND</span></h1>
        <p className="lead">That page doesn't exist.</p>
        <Link to="/" className="btn-solid">Back home ↗</Link>
      </section>
    </div>
  );
}
