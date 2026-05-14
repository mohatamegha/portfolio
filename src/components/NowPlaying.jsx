import { SectionHeading } from "./SectionHeading";

import {
  Play,
  Music2,
  Heart,
  ExternalLink,
} from "lucide-react";

const tracks = [
  {
    t: "It Ain't Me",
    a: "Kygo & Selena Gomez",
    c: "#ffb3c7",
    link:
      "https://open.spotify.com/track/3eR23VReFzcdmS7TYCrhCe",
  },

  {
    t: "Stupid",
    a: "Tate McRae",
    c: "#d9b8ff",
    link:
      "https://open.spotify.com/track/4k3uABcX9iaGlt5pRJhumi",
  },

  {
    t: "Ahista",
    a: "Pankaj Udhas",
    c: "#ffd6a5",
    link:
      "https://open.spotify.com/track/3GIxNehfNB1vsDCTWBoGiU/",
  },

  {
    t: "Like I Can",
    a: "Sam Smith",
    c: "#bde0fe",
    link:
      "https://open.spotify.com/track/2TeLIzFBe3hxkPR5FIQZut",
  },

  {
    t: "Kasoor",
    a: "Prateek Kuhad",
    c: "#caffbf",
    link:
      "https://open.spotify.com/track/08kTa3SL9sV6Iy8KLKtGql",
  },
];

export function NowPlaying() {
  return (
    <section
      id="playlist"
      className="relative py-24 px-3 overflow-hidden"
    >
      {/* blobs */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-pink-200/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-purple-200/20 rounded-full blur-3xl" />

      <div className="max-w-[1350px] mx-auto relative z-10">
        <SectionHeading
          eyebrow="now playing"
          title={
            <>
              what's on my{" "}
              <span className="text-gradient">
                playlist
              </span>
            </>
          }
          emoji={
            <Music2 className="inline-block size-8 text-primary ml-2" />
          }
        />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start mt-14">
          {/* LEFT */}
          <div className="relative bg-white border border-pink-100 rounded-[2.2rem] p-7 shadow-soft overflow-hidden">
            {/* tape */}
            <div className="tape w-24 h-6 rotate-[-5deg] top-[-10px] left-12" />

            {/* heading */}
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
              late night thoughts
            </div>

            <h3 className="font-display text-[3rem] leading-[0.95]">
              music feels like{" "}
              <span className="marker">
                memories
              </span>
            </h3>

            <p className="mt-6 text-muted-foreground leading-relaxed text-[15.5px]">
              my playlists are basically emotional
              archives at this point. every song
              reminds me of a person, a phase, a
              late-night conversation, or a moment
              in my life that i never want to
              forget.
            </p>

            <p className="mt-5 text-muted-foreground leading-relaxed text-[15.5px]">
              music heals me in a way that's hard
              to describe. somehow, i always seem
              to have the perfect song ready for
              every mood, every memory, and every
              little moment in between.
            </p>

            <p className="mt-5 text-muted-foreground leading-relaxed text-[15.5px]">
              Living my life as a constant musical! {" "}
              <span className="text-pink-500 text-lg">
                ♡
              </span>
            </p>

            {/* footer */}
            <div className="mt-8 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="size-2 rounded-full bg-primary animate-pulse" />

              currently looping songs at 2am
            </div>

            {/* heart */}
            <Heart className="absolute bottom-5 right-5 size-14 text-pink-100 fill-pink-100" />
          </div>

          {/* RIGHT */}
          <div className="relative bg-white border border-pink-100 rounded-[2.5rem] p-7 shadow-soft overflow-hidden">
            {/* top */}
            <div className="flex items-center justify-between mb-7">
              <div>
                <div className="font-display text-3xl leading-none">
                  current favorites
                </div>

                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mt-2">
                  bollywood · pop · vibes
                </div>
              </div>

              <div className="size-12 rounded-2xl bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center shadow-soft">
                <Music2 className="size-5 text-white" />
              </div>
            </div>

            {/* tracks */}
            <ul className="space-y-3">
              {tracks.map((tr, i) => (
                <li
                  key={tr.t}
                  className="group"
                >
                  <a
                    href={tr.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-3 rounded-[1.5rem] hover:bg-pink-50 transition-all duration-300"
                  >
                    {/* album */}
                    <div
                      className="size-14 rounded-2xl shrink-0 grid place-items-center shadow-card relative overflow-hidden"
                      style={{
                        background: tr.c,
                      }}
                    >
                      <Play
                        className="size-4 text-white z-10"
                        fill="white"
                      />

                      <div className="absolute inset-0 bg-white/10" />
                    </div>

                    {/* text */}
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-[1.45rem] leading-tight truncate">
                        {tr.t}
                      </div>

                      <div className="font-mono text-[11px] text-muted-foreground mt-1 truncate uppercase tracking-[0.18em]">
                        {tr.a}
                      </div>
                    </div>

                    {/* number */}
                    <div className="flex flex-col items-end gap-2">
                      <div className="font-mono text-[11px] text-muted-foreground">
                        0{i + 1}
                      </div>

                      <ExternalLink className="size-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {/* bottom note */}
            <div className="mt-8 pt-5 border-t border-pink-100 flex items-center gap-3">
              <div className="flex gap-1 items-end h-4">
                {[0, 1, 2, 3].map((b) => (
                  <span
                    key={b}
                    className="w-1 rounded-full bg-primary"
                    style={{
                      height: `${
                        40 + b * 20
                      }%`,
                      animation: `wave 0.9s ease-in-out ${
                        b * 0.12
                      }s infinite`,
                    }}
                  />
                ))}
              </div>

              <span className="font-mono text-xs text-muted-foreground">
                spotify is basically my
                second personality trait
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}