import { Link } from "react-router-dom";
import { useReveal } from "../motion";
import { person, approach, services } from "../data";
import SplitWords from "../components/SplitWords";
import { Arrow } from "./Home";
import { Experience, WhyWork, ConnectCTA, Heading } from "../components/Sections";
import SkillsMarquee from "../components/SkillsMarquee";

export default function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      {/* Matthew-style opener */}
      <section className="about-b about-page-hero" aria-labelledby="ab-h">
        <div className="about-top">
          <h1 id="ab-h" className="about-title" data-words><SplitWords text="/ABOUT ME" /></h1>
        </div>
        <div className="about-body about-body-split">
          <figure className="about-photo" data-clip>
            <img src="/img/about-me%20image.png" width={1371} height={1147} alt="Bharath Kumar C" loading="eager" />
          </figure>
          <div className="about-copy" data-stagger>
            <p className="about-lead">{person.summary}</p>
            <p>{person.summaryLong}</p>
            <div className="about-achievements" aria-label="Professional achievements">
              <div className="achievement-badge"><strong>1+</strong>{" "}<span>Year of Experience</span></div>
              <div className="achievement-badge"><strong>10+</strong>{" "}<span>Projects</span></div>
              <div className="achievement-badge"><strong>5+</strong>{" "}<span>Independent Projects</span></div>
            </div>
            <p className="about-current-work">I work as a Web Developer at Nova Layers while taking on freelance web development and continuing to build independent projects.</p>
            <p className="about-now">{person.motto}</p>
          </div>
        </div>
        <Arrow />
      </section>

      <div className="serhii-wrap">
        {/* Philosophy */}
        <section className="serhii section" aria-labelledby="phil-h">
          <div className="frame-pad two-col">
            <div><span id="phil-h" className="sr-only">Development philosophy</span><Heading solid="MY" outline="PHILOSOPHY" /></div>
            <div data-stagger>
              <p className="lead">{person.philosophy}</p>
              <p className="motto">{person.motto}</p>
            </div>
          </div>
        </section>

        <Experience alignHeading="right" />

        {/* Approach */}
        <section className="serhii section" aria-labelledby="app-h">
          <div className="frame-pad">
            <span id="app-h" className="sr-only">Working approach</span>
            <Heading solid="MY WORKING" outline="APPROACH" />
            <ol className="steps" data-stagger>
              {approach.map((a) => (
                <li key={a.n}><span>{a.n}</span><h3>{a.name}</h3><p>{a.text}</p></li>
              ))}
            </ol>
          </div>
        </section>

        {/* Skills */}
        <section className="serhii section" aria-labelledby="sk-h">
          <div className="frame-pad">
            <span id="sk-h" className="sr-only">Skills and expertise</span>
            <Heading solid="SKILLS AND" outline="EXPERTISE" />
            <SkillsMarquee />
          </div>
        </section>

        {/* Services */}
        <section className="serhii section" aria-labelledby="sv-h">
          <div className="frame-pad">
            <span id="sv-h" className="sr-only">Services</span>
            <Heading solid="HOW CAN" outline="I HELP?" />
            <div className="services" data-stagger>
              {services.map((s) => (
                <div key={s.name}><h3>{s.name}</h3><p>{s.text}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="serhii section" aria-labelledby="ed-h">
          <div className="frame-pad two-col">
            <div><span id="ed-h" className="sr-only">Education</span><Heading solid="EDUCATION" /></div>
            <div data-stagger>
              <p className="lead">{person.education.degree}</p>
              <p>{person.education.school} · Graduation year: {person.education.year}</p>
              <div className="school-entry">
                <h3>Jai Saradha Matriculation School</h3>
                <p className="school-location">Tiruppur</p>
                <ul className="education-qualifications">
                  <li>Secondary School Leaving Certificate (SSLC)</li>
                  <li>Higher Secondary Certificate (HSC)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <WhyWork cardLayout />
        <section className="serhii section instagram-showcase" aria-labelledby="instagram-h">
          <div className="frame-pad instagram-layout">
            <div className="instagram-preview" aria-label="Replaceable Instagram profile image placeholder">
              <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="5" width="38" height="38" rx="11" fill="none" stroke="currentColor" strokeWidth="2.5"/><circle cx="24" cy="24" r="9" fill="none" stroke="currentColor" strokeWidth="2.5"/><circle cx="35.5" cy="12.5" r="2" fill="currentColor"/></svg>
              <span>Instagram profile image</span>
              <small>Replace with a profile screenshot</small>
            </div>
            <div className="instagram-copy" data-fade>
              <p className="eyebrow">A little more beyond the work</p>
              <h2 id="instagram-h" className="s-title"><span className="s-line">LET'S CONNECT</span><span className="s-line outline">ON INSTAGRAM</span></h2>
              <p>Follow along for what I’m building, exploring, and sharing.</p>
              <a className="btn-solid" href={person.instagram} target="_blank" rel="noopener noreferrer" aria-label="Connect with me on Instagram (opens in a new tab)">Connect with me on Instagram ↗</a>
            </div>
          </div>
        </section>
        <div className="frame-pad"><Link to="/work" className="btn-solid" data-fade>See the work ↗</Link></div>
        <ConnectCTA />
      </div>
    </div>
  );
}
