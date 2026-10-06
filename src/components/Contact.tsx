"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { data } from "@/lib/data";
import Reveal from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(data.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${data.email}`;
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="section__head">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__mark" aria-hidden>↳</span> Contact
          </p>
        </Reveal>
        <h2 className="contact__title">
          {data.contactTitle.map((line, i) => (
            <span className="line" key={line}>
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.12, ease }}
              >
                {line}
                {i === data.contactTitle.length - 1 && (
                  <span className="hero__accent" aria-hidden>.</span>
                )}
              </motion.span>
            </span>
          ))}
        </h2>
      </div>

      <Reveal delay={0.15}>
        <div className="contact__actions">
          <button type="button" className="btn btn--solid btn--big" onClick={copyEmail}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? "copied" : "email"}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {copied ? "Email copied ✓" : data.email}
              </motion.span>
            </AnimatePresence>
          </button>
          <a className="btn btn--big" href={`mailto:${data.email}`}>
            <span>Send a message</span>
          </a>
        </div>
      </Reveal>

      <div className="contact__grid">
        <Reveal delay={0.1}>
          <div className="contact__cell">
            <strong>Location</strong>
            <p>{data.address}</p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="contact__cell">
            <strong>Phone</strong>
            <p>
              <a href={`tel:${data.phone.replace(/\s/g, "")}`}>{data.phone}</a>
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="contact__cell">
            <strong>Elsewhere</strong>
            <p className="contact__socials">
              {data.socials.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label} <span aria-hidden>↗</span>
                </a>
              ))}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
