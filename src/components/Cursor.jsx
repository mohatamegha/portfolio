import { useEffect, useState } from "react";

export function Cursor() {
  const [sparks, setSparks] =
    useState([]);

  useEffect(() => {
    if (
      typeof window === "undefined"
    )
      return;

    if (
      window.matchMedia(
        "(pointer: coarse)"
      ).matches
    )
      return;

    let id = 0;
    let last = 0;

    const shapes = [
      "✦",
      "✧",
      "★",
      "✶",
      "✹",
    ];

    const onMove = (e) => {
      const now =
        performance.now();

      if (now - last < 65) return;

      last = now;

      const spark = {
        id: id++,
        x: e.clientX,
        y: e.clientY,
        s: shapes[
          Math.floor(
            Math.random() *
              shapes.length
          )
        ],
      };

      setSparks((prev) => [
        ...prev.slice(-14),
        spark,
      ]);

      setTimeout(() => {
        setSparks((prev) =>
          prev.filter(
            (p) =>
              p.id !== spark.id
          )
        );
      }, 1400);
    };

    window.addEventListener(
      "mousemove",
      onMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        onMove
      );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="absolute select-none text-pink-300/80"
          style={{
            left: s.x,
            top: s.y,
            animation:
              "fade-out 1.8s ease-out forwards",
            fontSize:
              s.s === "·"
                ? "14px"
                : "18px",
          }}
        >
          {s.s}
        </span>
      ))}
    </div>
  );
}