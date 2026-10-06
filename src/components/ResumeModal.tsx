"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { data } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const experience = data.background.filter((b) => b.kind === "work");
const education = data.background.filter((b) => b.kind === "education");

function Entry({ item }: { item: (typeof data.background)[number] }) {
  return (
    <div className="entry">
      <span className="entry__date">{item.period}</span>
      <div className="entry__body">
        <h4>{item.title}</h4>
        <p className="entry__where">{item.place}</p>
        <ul>
          {item.items.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [hasPdf, setHasPdf] = useState<boolean | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    let cancelled = false;
    fetch(data.resume.file, { method: "HEAD" })
      .then((r) => !cancelled && setHasPdf(r.ok))
      .catch(() => !cancelled && setHasPdf(false));

    return () => {
      cancelled = true;
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="resume-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${data.name} — Resume`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            className="resume-modal__backdrop"
            aria-label="Close resume"
            onClick={onClose}
          />

          <motion.div
            className="resume-modal__sheet"
            initial={{ opacity: 0, y: 40, rotate: -0.6 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 24, rotate: -0.4 }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="resume-modal__bar">
              <span className="resume-modal__label">Resume</span>
              <button
                type="button"
                className="resume-modal__close"
                onClick={onClose}
                aria-label="Close resume"
              >
                Close <span aria-hidden>✕</span>
              </button>
            </div>

            {hasPdf === false ? (
            <article className="paper">
              <header className="paper__head">
                <p className="paper__hello">Hi, I&apos;m {data.name.split(" ")[0]} —</p>
                <h2 className="paper__name">{data.name}</h2>
                <p className="paper__role">
                  {data.role} in {data.location}
                </p>
                <p className="paper__reach">
                  <a href={`mailto:${data.email}`}>{data.email}</a>
                  <span aria-hidden> · </span>
                  {data.phone}
                  <span aria-hidden> · </span>
                  {data.socials[0] && (
                    <>
                      <a href={data.socials[0].href} target="_blank" rel="noreferrer">
                        {data.socials[0].label}
                      </a>
                      <span aria-hidden> · </span>
                    </>
                  )}
                  {data.location}
                </p>
              </header>

              <p className="paper__intro">{data.resume.intro}</p>

              <section className="paper__block">
                <h3>Where I&apos;ve worked</h3>
                {experience.map((job) => (
                  <Entry key={job.title + job.period} item={job} />
                ))}
              </section>

              <section className="paper__block">
                <h3>Where I&apos;ve studied</h3>
                {education.map((ed) => (
                  <Entry key={ed.title + ed.period} item={ed} />
                ))}
              </section>

              <section className="paper__block">
                <h3>What I work with</h3>
                <dl className="paper__skills">
                  {data.skills.map((g) => (
                    <div key={g.title}>
                      <dt>{g.title}</dt>
                      <dd>{g.items.join(", ")}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section className="paper__block">
                <h3>Things I&apos;ve built</h3>
                {data.work.map((p) => (
                  <div className="entry" key={p.title}>
                    <span className="entry__date">{p.tags.join(", ")}</span>
                    <div className="entry__body">
                      <h4>{p.title}</h4>
                      <p className="entry__note">{p.caption}</p>
                    </div>
                  </div>
                ))}
              </section>

              <footer className="paper__sign">
                <p>Thanks for reading — I&apos;d love to hear what you&apos;re working on.</p>
                <span>{data.name}</span>
              </footer>
            </article>
            ) : (
              <div className="resume-modal__pdf">
                <iframe
                  src={`${data.resume.file}#view=FitH`}
                  title={`${data.name} — Resume`}
                />
              </div>
            )}

            <div className="resume-modal__actions">
              <button type="button" className="btn btn--solid" onClick={() => window.print()}>
                <span>Print / Save as PDF</span>
              </button>
              {hasPdf && (
                <a className="btn" href={data.resume.file} target="_blank" rel="noreferrer">
                  <span>Open PDF</span>
                </a>
              )}
              {hasPdf && (
                <a className="btn" href={data.resume.file} download>
                  <span>Download</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
