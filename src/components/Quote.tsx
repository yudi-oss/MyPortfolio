import { data } from "@/lib/data";
import Reveal from "./Reveal";

export default function Quote() {
  return (
    <section className="section quote">
      <span className="quote__mark" aria-hidden>
        &ldquo;
      </span>
      <Reveal>
        <p className="quote__text">{data.quote}</p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="quote__by">
          <span aria-hidden>✦</span> {data.name} — {data.role}
        </p>
      </Reveal>
    </section>
  );
}
