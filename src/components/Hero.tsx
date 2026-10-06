"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import { data } from "@/lib/data";
import ResumeModal from "@/components/ResumeModal";

const ease = [0.16, 1, 0.3, 1] as const;

const line = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.15 + i * 0.12, ease },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spotX = useSpring(mx, { stiffness: 60, damping: 20 });
  const spotY = useSpring(my, { stiffness: 60, damping: 20 });
  const spotLeft = useTransform(spotX, (v) => `${v * 100}%`);
  const spotTop = useTransform(spotY, (v) => `${v * 100}%`);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="hero"
      id="top"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
    >
      <motion.div
        className="hero__spot"
        aria-hidden
        style={{ left: spotLeft, top: spotTop }}
      />

      <div className="hero__inner">
        <motion.div className="hero__text" style={{ y: textY, opacity: fade }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow__mark" aria-hidden>↳</span> {data.hero.eyebrow}
          </motion.p>

          <h1 className="hero__title">
            {data.hero.lines.map((l, i) => (
              <span className="line" key={l}>
                <motion.span variants={line} custom={i} initial="hidden" animate="show">
                  {l}
                  {i === data.hero.lines.length - 1 && (
                    <span className="hero__accent" aria-hidden>.</span>
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero__blurb"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
          >
            {data.hero.blurb}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
          >
            <a className="btn btn--solid" href="#work">
              <span>View my work</span>
            </a>
            <a className="btn" href="#contact">
              <span>Hire me</span>
            </a>
            <button type="button" className="btn" onClick={() => setResumeOpen(true)}>
              <span>View resume</span>
            </button>
          </motion.div>
        </motion.div>

        <div className="hero__visual">
          <motion.div
            className="hero__photo photo oval"
            style={{ y: photoY }}
            initial={{ opacity: 0, scale: 0.9, rotate: -18 }}
            animate={{ opacity: 1, scale: 1, rotate: -10 }}
            transition={{ duration: 1.1, delay: 0.3, ease }}
          >
            <Image
              src={data.hero.image}
              alt={data.name}
              fill
              priority
              sizes="(max-width: 768px) 80vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          <div className="hero__ring" aria-hidden>
            <svg viewBox="0 0 200 200">
              <defs>
                <path
                  id="badgePath"
                  d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
                />
              </defs>
              <text>
                <textPath href="#badgePath">
                  AVAILABLE FOR WORK • {data.role.toUpperCase()} • AVAILABLE FOR WORK •
                </textPath>
              </text>
            </svg>
          </div>

          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1, ease }}
          >
            <span className="pulse" aria-hidden />
            Open to work
          </motion.div>
        </div>
      </div>

      <motion.div className="hero__foot" style={{ opacity: fade }}>
        <span className="hero__scroll" aria-hidden>
          <i />
          Scroll
        </span>
        <span className="hero__place">{data.location}</span>
        <span className="hero__year">©2026</span>
      </motion.div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
