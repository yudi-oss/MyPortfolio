"use client";

import { motion } from "motion/react";
import { data } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section__head">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__mark" aria-hidden>↳</span> Journey
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2>Experience &amp; education</h2>
        </Reveal>
      </div>

      <div className="timeline">
        <div className="timeline__line" aria-hidden>
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {data.background.map((entry, i) => (
          <Reveal key={entry.title + i} delay={i * 0.08}>
            <article className={`timeline__item timeline__item--${entry.kind}`}>
              <span className="timeline__dot" aria-hidden />
              <div className="timeline__meta">
                <span className="timeline__period">{entry.period}</span>
                <span className="timeline__kind">{entry.kind}</span>
              </div>
              <div className="timeline__body">
                <h3>{entry.title}</h3>
                <p className="timeline__place">{entry.place}</p>
                <ul>
                  {entry.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
