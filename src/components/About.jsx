import { SectionHeading } from "./SectionHeading";
import { WavingCat } from "./WavingCat";
import { TbFlowerFilled } from "react-icons/tb";

import {
  Coffee,
  Headphones,
  Sparkles,
  Gamepad2,
  Flower2,
} from "lucide-react";

export function About() {
  const cards = [
    {
      icon: Coffee,
      title: "coffee",
      value: "classic coffee, please.",
    },
    {
      icon: Headphones,
      title: "now playing",
      value: "bollywood, pop & 90's songs!",
    },
    {
      icon: Gamepad2,
      title: "side kick",
      value: "board games & cafe hopping",
    },
    {
      icon: Sparkles,
      title: "fav stack",
      value: "spring boot · react",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* blobs */}
      <div className="absolute top-10 left-[-120px] size-[320px] rounded-full bg-pink-200/20 blur-3xl animate-blob" />

      <div className="absolute bottom-0 right-[-100px] size-[280px] rounded-full bg-purple-200/20 blur-3xl animate-blob [animation-delay:2s]" />

      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        <SectionHeading
          eyebrow="about me"
          title={
            <>
              a little{" "}
              <span className="text-gradient">
                more
              </span>{" "}
              about me
            </>
          }
          emoji={
            <TbFlowerFilled className="inline-block size-8 text-primary ml-2" />
          }
        />

        <div className="grid lg:grid-cols-[1.15fr_0.95fr] gap-10 items-start">
          {/* LEFT */}
          <div className="space-y-8">
            {/* main card */}
            <div className="relative rounded-[2.2rem] border border-pink-100 bg-white/80 backdrop-blur-md p-6 shadow-soft overflow-hidden">
              <div className="tape w-24 h-7 rotate-[-6deg] top-[-10px] left-12" />

              <div className="space-y-4 text-[16px] leading-[1.95] text-foreground/90">
                <p>
                  I'm a developer who loves
                  building projects, learning
                  new things, and exploring
                  ideas out of curiosity.
                </p>

                <p>
                  <span className="marker">
                    DSA and problem-solving
                  </span>{" "}
                  are things I genuinely
                  enjoy, there's something
                  really satisfying about how
                  it tickles my brain.
                </p>

                <p>
                  Most of my projects start
                  with curiosity but somehow
                  end with me adjusting
                  shadows by{" "}
                  <span className="font-mono text-primary">
                    2px
                  </span>{" "}
                  :)
                </p>

                <p>
                  Lately, I've been getting
                  my hands dirty with backend
                  development and exploring
                  how things work behind the
                  scenes.
                </p>

                <p>
                  When I'm not on my laptop,
                  I'm probably out with
                  friends exploring cafés and
                  new places around the city
                  or trying to convince them
                  to try new board games.
                </p>
              </div>

            </div>

            {/* currently note */}
            <div className="relative max-w-sm ml-8">
              <div className="tape w-20 h-6 rotate-[8deg] top-[-12px] left-10" />

              <div className="bg-[#fff9f6] border border-[#f3d9e4] shadow-soft rounded-[1.8rem] p-5 rotate-[-2deg]">
                <div className="font-display text-[1.5rem] text-primary mb-3">
                  currently...
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  learning backend
                  architecture, system
                  design, and building
                  projects that feel both
                  aesthetic and functional.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative min-h-[600px]">
            {/* cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {cards.map(
                (
                  {
                    icon: Icon,
                    title,
                    value,
                  },
                ) => (
                  <div
                    key={title}
                    className={`relative rounded-[2rem] px-5 bg-white border border-pink-100 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1`}
                  >

                    <Icon className="size-5 text-pink-500 mb-2" />

                    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                      {title}
                    </div>

                    <div className="text-[1.3rem] leading-snug font-small text-foreground">
                      {value}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* floating cat */}
            <WavingCat className="absolute top-[-30px] right-0 w-28 hover:scale-105 hover:transition-transform group" />

            {/* tiny goal */}
            <div className="absolute bottom-0 left-10 rotate-[-5deg]">
              <div className="tape w-16 h-5 rotate-[10deg] top-[-8px] left-10" />

              <div className="bg-[#ffd9ee] border border-pink-200 px-6 py-5 rounded-[1.5rem] shadow-card max-w-[240px]">
                <div className="font-display text-2xl text-primary mb-2">
                  tiny goal
                </div>

                <p className="text-sm leading-relaxed text-foreground/80">
                  build projects that people
                  remember not just for how
                  they work, but for how they
                  feel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}