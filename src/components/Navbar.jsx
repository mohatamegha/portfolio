import { useEffect, useState } from "react";
import { LuFlower } from "react-icons/lu";

import {
  Sparkles,
  Flower2,
} from "lucide-react";

import { HiMiniSparkles } from "react-icons/hi2";


const links = [
  { href: "#about", label: "about" },
  // { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#playlist", label: "playlist" },
  { href: "#interests", label: "interests" },
  { href: "#quotes", label: "quotes" },
  { href: "#contact", label: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(
        window.scrollY > 24
      );
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

  return (
    <header
      className={`fixed top-3 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2"
          : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between px-5 py-2 max-w-6xl rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-card"
            : "bg-transparent"
        }`}
      >
        {/* logo */}
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-xl"
        >
          {/* <HiMiniSparkles className="size-5 text-primary" /> */}

          <span className="text-gradient">
            Megha's corner
          </span>
        </a>

        {/* links */}
        <ul className="hidden md:flex items-center gap-1 font-mono text-xs">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* button */}
        <a
          href="#contact"
          className="group font-mono text-xs px-5 py-2.5 rounded-full bg-black text-white hover:bg-primary transition-all duration-300 inline-flex items-center gap-2"
        >
          say hi
          <LuFlower className="ml-1" size={15}/>
        </a>
      </nav>
    </header>
  );
}