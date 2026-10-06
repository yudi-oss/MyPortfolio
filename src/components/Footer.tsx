"use client";

import { useEffect, useState } from "react";
import { data } from "@/lib/data";

export default function Footer() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kathmandu",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="footer">
      <a href="#top" className="footer__giant" aria-label="Back to top">
        <span>{data.name}</span>
      </a>

      <div className="footer__bar">
        <span>© 2026 — Built &amp; designed by {data.name}</span>
        <span className="footer__time">
          <span className="pulse" aria-hidden />
          Kathmandu {time ?? "--:--:--"}
        </span>
        <a href="#top" className="footer__top">
          Back to top <span aria-hidden>↑</span>
        </a>
      </div>
    </footer>
  );
}
