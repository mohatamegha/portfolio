import { SectionHeading } from "./SectionHeading";

import {
  GraduationCap,
  BookHeart,
  Sparkles,
} from "lucide-react";

const education = [
  {
    degree: "10th · ICSE",
    place: "school life arc",
    period: "97.6%",
    icon: BookHeart,
    bullets: [
      "Commerce with computers",
      "Probably the best days of my life",
      "Started discovering my love for problem solving & tech",
    ],
    tag: "the beginning",
  },

  {
    degree: "12th · ISC",
    place: "commerce + maths + economics",
    period: "96.5%",
    icon: Sparkles,
    bullets: [
      "Took commerce with maths & economics",
      "Realised my passion for computers mattered more than anything else",
      "Decided to pursue BCA and properly step into tech",
    ],
    tag: "turning point",
  },

  {
    degree: "BCA · Techno India",
    place: "college life + skill building",
    period: "8.44 CGPA",
    icon: GraduationCap,
    bullets: [
      "Learnt so many things both inside and outside classrooms",
      "Met incredible people and explored new experiences",
      "Spent most of my time juggling academics, DSA, development & self-learning",
    ],
    tag: "growth era",
  },

  {
    degree: "MCA · IGDTUW",
    place: "currently pursuing",
    period: "9.62 CGPA",
    icon: Sparkles,
    bullets: [
      "Working on increasing the depth of my knowledge",
      "Exploring backend systems, architecture & scalable development",
      "Trying to become a better engineer while also growing as a person",
    ],
    tag: "current chapter",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="relative py-24 px-4"
    >
      <div className="max-w-[1250px] mx-auto">
        <SectionHeading
          eyebrow="education"
          title={
            <>
              where i{" "}
              <span className="text-gradient">
                learnt & grew
              </span>
            </>
          }
          emoji={
            <GraduationCap className="inline-block size-8 text-primary ml-2" />
          }
        />

        <ol className="relative border-l-2 border-dashed border-primary/20 ml-4 mt-14 space-y-14">
          {education.map((e, i) => {
            const Icon = e.icon;

            return (
              <li
                key={e.degree}
                className="pl-10 relative"
                style={{
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {/* timeline dot */}
                <span className="absolute -left-[15px] top-2 size-7 rounded-full bg-white border-[5px] border-pink-300 shadow-soft flex items-center justify-center">
                  <Icon className="size-3.5 text-primary" />
                </span>

                {/* card */}
                <div className="relative bg-white/90 border border-pink-100 rounded-[2rem] p-6 shadow-soft hover:-translate-y-1 transition-transform duration-300">
                  {/* tape */}
                  <div className="tape w-20 h-5 rotate-[-5deg] top-[-10px] left-10" />

                  {/* top row */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="font-display text-[2rem] leading-none">
                      {e.degree}
                    </h3>

                    <span className="font-mono text-xs text-primary">
                      {e.place}
                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {e.tag}
                    </span>
                  </div>

                  {/* marks */}
                  <div className="font-mono text-xs text-muted-foreground mt-2">
                    {e.period}
                  </div>

                  {/* bullets */}
                  <ul className="mt-5 space-y-2.5 text-muted-foreground">
                    {e.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3"
                      >
                        <span className="text-primary mt-[2px]">
                          ✦
                        </span>

                        <span className="leading-relaxed">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}