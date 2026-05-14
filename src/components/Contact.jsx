import { SectionHeading } from "./SectionHeading";

import {
  Mail,
  Heart,
  Sparkles,
} from "lucide-react";

import { SiLeetcode} from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";




const socials = [
  {
    icon: Mail,
    label: "mail me",
    value: "meghamohata22@gmail.com",
    href: "mailto:meghamohata22@gmail.com",
  },

  {
    icon: FaGithub,
    label: "github",
    value: "github/mohatamegha",
    href: "https://github.com/mohatamegha",
  },

  {
    icon: FaLinkedin,
    label: "linkedin",
    value: "linkedin/megha-mohata-806431254",
    href: "https://www.linkedin.com/in/megha-mohata-806431254/",
  },

  // {
  //   icon: FaInstagram,
  //   label: "instagram",
  //   value: "@megha.jpg",
  //   href: "https://instagram.com",
  // },

  {
    icon: SiLeetcode,
    label: "leetcode",
    value: "leetcode/meghamohata22",
    href: "https://leetcode.com/u/meghamohata22/",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-3 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        <SectionHeading
          eyebrow="contact"
          title={
            <>
              let's build something{" "}
              <span className="text-gradient">
                meaningful
              </span>
            </>
          }
          emoji={
            <Sparkles className="inline-block size-7 text-primary ml-2" />
          }
        />

        {/* main card */}
        <div className="relative mt-4 rounded-[2.5rem] border border-pink-100 bg-white overflow-hidden shadow-soft">
          {/* soft gradients */}
          <div className="absolute -top-20 -left-20 w-[280px] h-[280px] bg-pink-200/30 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-purple-200/20 rounded-full blur-3xl" />

          <div className="relative z-10 px-7 py-12 sm:px-12 sm:py-14 text-center">
            {/* heading */}
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary mb-5">
              currently open to opportunities
            </div>

            <h3 className="font-display text-[2.6rem] sm:text-[3.4rem] leading-[0.95] max-w-4xl mx-auto">
              let's talk ♡
            </h3>

            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-relaxed text-[13px]">
              whether it's development,
              design, collaborations,
              internships, or just sharing
              playlists and ideas — i'd love
              to connect.
            </p>

            {/* email button */}
            <a
              href="mailto:megha@gmail.com"
              className="group inline-flex items-center gap-3 mt-8 px-9 py-3 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white font-display text-[1.5rem] shadow-[0_18px_50px_rgba(236,72,153,0.25)] hover:scale-[1.02] transition-all duration-300"
            >
              say hello
              <Heart className="size-6 fill-white text-white group-hover:scale-110 transition-transform" />
            </a>

            {/* socials */}
            <div className="flex flex-wrap justify-center gap-3 mt-9">
              {socials.map(
                ({
                  icon: Icon,
                  label,
                  value,
                  href,
                }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group px-4 py-3 rounded-[1.3rem] border border-pink-100 bg-white hover:bg-pink-50 transition-all duration-300 shadow-card min-w-[170px]"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="size-9 rounded-lg bg-pink-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>

                      <div className="text-left">
                        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                          {label}
                        </div>

                        <div className="text-[13px] font-medium mt-1">
                          {value}
                        </div>
                      </div>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* footer */}
        <footer className="text-center mt-10 font-mono text-xs text-muted-foreground">
          made with{" "}
          <span className="text-primary">
            ♡
          </span>{" "}
          and a lot of curiosity · ©{" "}
          {new Date().getFullYear()} megha.dev
        </footer>
      </div>
    </section>
  );
}