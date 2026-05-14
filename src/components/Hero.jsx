import avatar from "../assets/avatar.png";
import avatar2 from "../assets/avatar2.png.jpeg";
import avatar3 from "../assets/avatar3.jpeg";

import { GoDotFill } from "react-icons/go";

import {
  ArrowDown,
  Code2,
  Star,
  Heart,
  Flower2,
  Sparkles,
} from "lucide-react";

import {
  WavyText,
  RotatingWord,
  ScrambleText,
} from "./InteractiveText";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 pb-20 px-6 overflow-hidden grid-paper"
    >
      {/* blobs */}
      <div className="absolute -top-20 -left-20 size-[420px] bg-girly opacity-40 animate-blob blur-3xl pointer-events-none" />

      {/* doodles */}
  
      <Sparkles className="absolute bottom-40 left-[8%] size-7 text-pink-300 animate-float-slow opacity-70" />

      {/* main */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.75fr] gap-10 lg:gap-6 items-center">
        {/* LEFT */}
        <div className="space-y-7 relative">
          {/* availability */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-full bg-white font-mono text-xs shadow-card"> 
            <GoDotFill className="text-pink-400 fill-pink-400" />
            <ScrambleText text="available_for_cute_projects" />
          </div>

          {/* heading */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.7rem] leading-[0.92] tracking-[-0.04em]">
            <span className="block">
              hi, i'm{" "}
              <span className="text-gradient">
                <WavyText>Megha</WavyText>
              </span>
            </span>

            <span className="block mt-2">
              a{" "}
              <span className="marker italic">
                girly
              </span>
            </span>

            <span className="block mt-2">
              geek who{" "}
              <RotatingWord
                words={[
                  "codes",
                  "builds",
                  "dreams",
                  "ships",
                ]}
              />{" "}
            </span>
          </h1>

          {/* intro */}
          <div className="relative max-w-lg">
            <svg
              className="absolute -top-4 -left-4 w-24 text-pink-300"
              viewBox="0 0 120 20"
              fill="none"
            >
              <path
                d="M2 10 C20 0, 40 20, 60 10 S100 0,118 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              software engineer & creative developer.
              i build{" "}
              <span className="squiggle">
                playful interfaces
              </span>
              , aesthetic web experiences, and
              projects that are fun and meaningful.
            </p>
          </div>

          {/* buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-girly text-white font-medium shadow-soft hover:scale-[1.03] transition-all"
            >
              {/* add navigation here */}
              see my work

              <Star className="size-4 group-hover:rotate-90 transition-transform" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-pink-100 hover:border-pink-300 font-medium transition-colors shadow-card"
            >
              <Code2 className="size-4" />
              about me
            </a>
          </div>

          {/* scroll */}
          <div className="flex items-center gap-4 pt-2 font-mono text-xs text-muted-foreground">
            <span>
              scroll for sparkles
            </span>

            <ArrowDown className="size-4 animate-bounce text-primary" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[520px] sm:h-[560px]">
          {/* polaroid */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 polaroid rounded-sm w-[78%] max-w-[320px] -rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
            {/* tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 tape w-20 h-5 -rotate-2 rounded-[2px]" />

            {/* image */}
            <div className="aspect-[4/5] bg-girly rounded-sm overflow-hidden relative">
              <img
                src={avatar2}
                alt="avatar"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* caption */}
            <div className="font-display text-center mt-3 text-2xl flex items-center justify-center gap-2">
              Megha

              <Heart className="size-4 fill-primary text-primary" />
            </div>
          </div>

          {/* stack card */}
          <div className="absolute top-12 -right-2 sm:right-0 w-44 p-4 rotate-[5deg] z-10 sticker rounded-2xl bg-white border border-pink-100 shadow-card">
            <div className="font-mono text-[10px] uppercase tracking-wider text-primary">
              // stack
            </div>

            <div className="flex flex-wrap gap-1 mt-2 font-mono text-[10px]">
              {[
                "java",
                "react",
                "spring",
                "tailwind",
              ].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full bg-pink-50"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* note */}
          <div
            className="absolute bottom-6 -left-2 sm:left-0 w-56 p-5 rotate-[-6deg] z-10 sticker rounded-sm"
            style={{
              background:
                "linear-gradient(180deg,#ffd9ef,#ffcbe8)",
            }}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 tape w-16 h-4 rotate-3 rounded-[2px]" />

            <div className="font-display text-2xl leading-tight flex items-center gap-2">
              hey there

              <Sparkles className="size-4 text-primary" />
            </div>

            <p className="font-mono text-[11px] mt-2 leading-relaxed text-foreground/80">
              i love building things that feel
              delightful, expressive, and a little
              magical on screen.
            </p>
          </div>

          {/* tiny floating heart */}
          <div className="absolute bottom-44 right-8 text-primary animate-float-slow">
            <Heart className="size-6 fill-pink-300 text-pink-300" />
          </div>
        </div>
      </div>
    </section>
  );
}