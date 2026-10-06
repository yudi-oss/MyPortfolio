"use client";

import Image from "next/image";
import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { data } from "@/lib/data";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section__head">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__mark" aria-hidden>↳</span> About
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2>{data.about.title}</h2>
        </Reveal>
      </div>

      <div className="about__grid">
        <Reveal className="about__media">
          <div className="photo arch about__photo">
            <Image
              src={data.about.image}
              alt={data.name}
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className="about__caption">
            <em>{data.role}</em> — {data.location}
          </span>
        </Reveal>

        <div className="about__copy">
          {data.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <p>{p}</p>
            </Reveal>
          ))}

          <Stagger className="stats" gap={0.1}>
            {data.about.stats.map((s) => (
              <StaggerItem key={s.label} className="stat">
                <strong>
                  <Counter to={s.value} suffix={s.suffix} />
                </strong>
                <span>{s.label}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
