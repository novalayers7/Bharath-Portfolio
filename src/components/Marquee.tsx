export default function Marquee({ items, variant = "dark" }: { items: string[]; variant?: "dark" | "outline" }) {
  const run = (k: string) => (
    <div className="marquee-run" aria-hidden={k === "b"} key={k}>
      {items.map((t, i) => (
        <span key={i}>
          {t}
          <b className="marquee-star">✺</b>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`marquee marquee-${variant}`} role="presentation">
      <div className="marquee-track">
        {run("a")}
        {run("b")}
      </div>
    </div>
  );
}
