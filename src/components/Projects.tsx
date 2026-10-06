"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { data } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section className="section work" id="work">
      <div className="section__head section__head--split">
        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow__mark" aria-hidden>↳</span> Portfolio
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2>{data.workTitle}</h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="section__note">
            Selected projects — source code lives on GitHub.
          </p>
        </Reveal>
      </div>

      <div className="projects">
        {data.work.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <article className="project">
              <a
                className="project__media"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
              >
                <div className="photo arch">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 60vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span className="project__overlay" aria-hidden>
                  <em>View project</em>
                  <i>↗</i>
                </span>
                <span className="project__index" aria-hidden>
                  0{i + 1}
                </span>
              </a>

              <div className="project__info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.caption}</p>
                </div>
                <ul className="project__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>

              <motion.a
                className="project__link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                View project <span aria-hidden>→</span>
              </motion.a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
