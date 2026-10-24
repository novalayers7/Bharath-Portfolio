import { useReveal } from "../motion";
import { person } from "../data";
import SplitWords from "../components/SplitWords";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="serhii-wrap page-top">
      <section className="serhii section" aria-labelledby="ct-h">
        <div className="frame-pad">
          <h1 id="ct-h" className="giant" data-words>
            <span className="s-line"><SplitWords text="CONTACT" /></span>
            <span className="s-line outline"><SplitWords text="ME" /></span>
          </h1>
          <p className="lead" data-fade>Have an idea? Let's build something great. {person.connect}</p>

          <div className="contact-grid contact-grid-balanced">
            <div className="contact-info contact-info-balanced" data-stagger>
              <div><span>Email</span><a href={`mailto:${person.email}`}>{person.email}</a></div>
              <div><span>Phone</span><a href={`tel:${person.phone.replace(/\s/g, "")}`}>{person.phone}</a></div>
              <div><span>WhatsApp</span><a href={person.whatsapp} target="_blank" rel="noopener noreferrer">Message on WhatsApp ↗</a></div>
              <div><span>LinkedIn</span><a href={person.linkedin} target="_blank" rel="noopener noreferrer">bharathkumarc-cbk ↗</a></div>
              <div><span>Instagram</span><a href={person.instagram} target="_blank" rel="noopener noreferrer">@_bharath_kumarc ↗</a></div>
              <div><span>Location</span><p>Tiruppur, Tamil Nadu, India</p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
