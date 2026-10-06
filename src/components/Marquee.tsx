import { data } from "@/lib/data";

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee__track" aria-hidden={hidden || undefined}>
      {data.marquee.map((item) => (
        <span className="marquee__item" key={item}>
          {item}
          <i aria-hidden>✦</i>
        </span>
      ))}
    </div>
  );
}

export default function Marquee({
  reverse = false,
  speed = 40,
}: {
  reverse?: boolean;
  speed?: number;
}) {
  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""}`}
      style={{ ["--speed" as string]: `${speed}s` }}
    >
      <div className="marquee__row">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
