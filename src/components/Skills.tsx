import { data } from "@/lib/data";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__head">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__mark" aria-hidden>↳</span> Toolbox
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2>
            Skills &amp; <em>technologies</em>
          </h2>
        </Reveal>
      </div>

      <Stagger className="skills__grid" gap={0.08}>
        {data.skills.map((group, i) => (
          <StaggerItem key={group.title} className="skill-card">
            <div className="skill-card__top">
              <span className="skill-card__num">0{i + 1}</span>
              <h3>{group.title}</h3>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
