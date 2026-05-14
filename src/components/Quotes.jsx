import { useEffect, useState } from "react";

import { SectionHeading } from "./SectionHeading";

import {
  Quote,
  RefreshCw,
  Sparkles,
} from "lucide-react";

const quotes = [
  {
    q: "everything happens for a reason.",
    a: "something i deeply believe in",
  },

  {
    q: "you don't always need a plan. sometimes you just need courage.",
    a: "life lately",
  },

  {
    q: "romanticize your life. you're literally living through memories in the making.",
    a: "main character energy",
  },

  {
    q: "hard work eventually starts looking like talent.",
    a: "for the difficult days",
  },

  {
    q: "be soft. do not let the world make you hard.",
    a: "a gentle reminder",
  },

  {
    q: "there's something beautiful about becoming who you were meant to be.",
    a: "growth",
  },
];

export function Quotes() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI(
        (x) => (x + 1) % quotes.length
      );
    }, 6000);

    return () => clearInterval(t);
  }, []);

  const q = quotes[i];

  return (
    <section
      id="quotes"
      className="relative py-24 px-3 overflow-hidden"
    >
      {/* blobs */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-pink-200/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-purple-200/20 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <SectionHeading
          eyebrow="quotes"
          title={
            <>
              little words i{" "}
              <span className="text-gradient">
                carry with me
              </span>
            </>
          }
          emoji={
            <Sparkles className="inline-block size-7 text-primary ml-2" />
          }
        />

        <div className="relative mt-14 rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(236,72,153,0.18)] border border-pink-100">
          {/* background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-pink-200 to-purple-200" />

          {/* soft glow */}
          <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-white/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-white/10 rounded-full blur-3xl" />

          {/* quote icons */}
          <Quote className="absolute top-8 left-8 size-24 text-white/15" />

          <Quote className="absolute bottom-8 right-8 size-24 text-white/15 rotate-180" />

          {/* content */}
          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-white">
            <div
              key={i}
              className="animate-pop"
            >
              <p className="font-display text-[2.2rem] sm:text-[3.3rem] leading-[1.12] max-w-4xl">
                "{q.q}"
              </p>

              <div className="mt-8 font-mono text-sm uppercase tracking-[0.25em] text-white/80">
                — {q.a}
              </div>
            </div>

            {/* controls */}
            <div className="flex flex-wrap items-center gap-4 mt-12">
              <button
                onClick={() =>
                  setI(
                    (x) =>
                      (x + 1) %
                      quotes.length
                  )
                }
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all duration-300 font-mono text-xs border border-white/20"
              >
                <RefreshCw className="size-3.5" />

                new quote
              </button>

              {/* dots */}
              <div className="flex gap-2">
                {quotes.map(
                  (_, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        setI(idx)
                      }
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === i
                          ? "bg-white w-8"
                          : "bg-white/40 w-2"
                      }`}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}