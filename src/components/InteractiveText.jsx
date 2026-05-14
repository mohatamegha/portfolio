import { useEffect, useRef, useState } from "react";

export function WavyText({
  children,
  className = "",
}) {
  return (
    <span
      className={`iword inline-block ${className}`}
    >
      {children.split("").map((ch, i) => (
        <span
          key={i}
          className="iletter"
          style={{
            transitionDelay: `${i * 18}ms`,
          }}
        >
          {ch === " "
            ? "\u00A0"
            : ch}
        </span>
      ))}
    </span>
  );
}

const CHARS =
  "!<>-_\\/[]{}—=+*^?#________";

export function ScrambleText({
  text,
  className = "",
}) {
  const [out, setOut] = useState(text);

  const raf = useRef(null);

  const run = () => {
    let frame = 0;

    const queue = text
      .split("")
      .map((to, i) => ({
        to,
        start: Math.floor(
          Math.random() * 12
        ),
        end:
          Math.floor(
            Math.random() * 18
          ) +
          12 +
          i,
      }));

    const tick = () => {
      let done = 0;

      const next = queue
        .map((q) => {
          if (frame >= q.end) {
            done++;
            return q.to;
          }

          if (frame < q.start)
            return "";

          return CHARS[
            Math.floor(
              Math.random() *
                CHARS.length
            )
          ];
        })
        .join("");

      setOut(next);

      frame++;

      if (done < queue.length) {
        raf.current =
          requestAnimationFrame(
            tick
          );
      }
    };

    if (raf.current) {
      cancelAnimationFrame(
        raf.current
      );
    }

    tick();
  };

  useEffect(() => {
    return () => {
      if (raf.current) {
        cancelAnimationFrame(
          raf.current
        );
      }
    };
  }, []);

  return (
    <span
      className={`font-mono ${className}`}
      onMouseEnter={run}
    >
      {out}
    </span>
  );
}

export function RotatingWord({
  words,
  className = "",
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI(
        (x) => (x + 1) % words.length
      );
    }, 2200);

    return () => clearInterval(t);
  }, [words.length]);

  return (
    <span
      className={`relative inline-block align-baseline text-gradient ${className}`}
    >
      <span
        key={i}
        className="inline-block animate-pop"
      >
        {words[i]}
      </span>
    </span>
  );
}