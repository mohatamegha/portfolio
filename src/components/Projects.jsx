import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

import {
  Brain,
  Trophy,
  Rocket,
  Database,
  Globe2,
  Cpu,
  Sparkles,
  ChevronRight,
  Code2,
} from "lucide-react";

const skills = [
  "Java",
  "C",
  "Python",
  "SQL",
  "Spring Boot",
  "ReactJS",
  "REST APIs",
  "Git",
  "PostgreSQL",
];

const exploring = [
  "Machine Learning",
  "GenAI",
  "Spec-driven development",
  "AI",
  "Docker",
];

const achievements = [
  "Rank 1 in VITMEE",
  "Rank 3 in IGDTUW CET",
  "Rank 3 in BCA Dept in 2nd year",
  "Knight (Top 5%) on LeetCode",
  "Finalist at WeIgnite Hackathon",
];

const projects = [
  {
    title: "Nomadly",
    link: "https://github.com/mohatamegha/Nomadly-Frontend", 
    icon: Globe2,
    stack:
      "Spring Boot · PostgreSQL · ReactJS",
    desc:
      "a travel discovery platform with realtime chat, swipe interactions and dreamy UI vibes.",
    note:
    "needed a group to travel with, so i built this with my best friend <3",
    points: [
      "JWT auth + REST APIs",
      "Realtime group chat",
      "Cloudinary integration",
    ],
    color:
      "from-pink-100 via-rose-50 to-orange-50",
  },

  {
    title: "NeuroInsight AI",
    link: "https://github.com/mohatamegha/NeuroInsight",
    icon: Brain,
    stack:
      "Flask · TensorFlow · Gemini API",
    desc:
      "an AI-powered healthcare platform for Alzheimer’s detection using MRI scans.",
    points: [
      "93% accuracy",
      "Ensemble deep learning",
      "AI care recommendations",
    ],
    color:
      "from-purple-100 via-pink-50 to-fuchsia-50",
  },

  {
    title:
      "E-Commerce Microservices",
    link: "https://github.com/mohatamegha/ecommerce-microservices",
    icon: Database,
    stack:
      "Spring Boot · Docker · Keycloak",
    desc:
      "a backend playground exploring scalable microservices architecture.",
    points: [
      "Dockerized setup",
      "API Gateway",
      "Secure auth systems",
    ],
    color:
      "from-sky-100 via-cyan-50 to-blue-50",
  },

  {
    title: "FinanceQuest",
    link: "https://finance-quest-sandy.vercel.app/",
    icon: Rocket,
    stack:
      "ReactJS · Tailwind · Framer Motion",
    desc:
      "a gamified finance learning app built to make finance jargons less scary for beginners.",
    note:
      "sleepless hackathon nights are full of ideas, creativity and struggle.",
    points: [
      "Budgeting + investing",
      "Interactive UI",
      "Beginner friendly",
    ],
    color:
      "from-yellow-100 via-orange-50 to-pink-50",
  },

  {
    title:
      "Data Centre Leak Detector",
    link: "https://github.com/mohatamegha/data-center-leak-detector",
    icon: Cpu,
    stack:
      "FastAPI · ML · Monitoring",
    desc:
      "an intelligent backend system that detects crypto-mining and misuse attacks.",
    points: [
      "Realtime monitoring",
      "Anomaly detection",
      "ML-powered backend",
    ],
    color:
      "from-green-100 via-emerald-50 to-teal-50",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-3 overflow-hidden"
    >
      {/* subtle dev grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#ec4899 1px, transparent 1px), linear-gradient(to right, #ec4899 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* blobs */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-pink-200/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[340px] h-[340px] bg-purple-200/20 rounded-full blur-3xl" />

      {/* doodles */}
      <div className="absolute top-32 left-10 font-mono text-pink-100 text-xs rotate-[-10deg] hidden lg:block">
        {"<build cool things />"}
      </div>

      <div className="absolute bottom-32 right-10 font-mono text-pink-100 text-xs rotate-[8deg] hidden lg:block">
        {"const megha = tooCurious()"}
      </div>

      <div className="absolute top-[40%] left-[6%] text-pink-100 text-4xl hidden lg:block">
        ✦
      </div>

      <div className="absolute top-[20%] right-[8%] text-purple-100 text-3xl hidden lg:block">
        ♡
      </div>

      <div className="max-w-[1450px] mx-auto relative z-10">
        <SectionHeading
          eyebrow="projects"
          title={
            <>
              projects + skills +{" "}
              <span className="text-gradient">
                achievements
              </span>
            </>
          }
        />

        {/* top cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {/* skills */}
          <div className="relative rounded-[2rem] border border-pink-100 bg-white p-6 shadow-soft overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(236,72,153,0.12)] transition-all duration-300">
            <div className="absolute top-4 right-5 text-pink-200 text-sm">
              ✦
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="size-11 rounded-2xl bg-pink-100 flex items-center justify-center">
                <Code2 className="size-5 text-primary" />
              </div>

              <div>
                <h3 className="font-display text-3xl leading-none">
                  skills
                </h3>

                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mt-1">
                  things i build with
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-3 py-2 rounded-xl bg-pink-50 border border-pink-100 text-sm font-medium hover:bg-pink-100 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* exploring */}
          <div className="relative rounded-[2rem] border border-pink-100 bg-white p-6 shadow-soft overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(236,72,153,0.12)] transition-all duration-300">
            <div className="absolute bottom-4 right-5 font-mono text-[10px] text-pink-200">
              // currently obsessed with
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="size-11 rounded-2xl bg-purple-100 flex items-center justify-center">
                <Sparkles className="size-5 text-primary" />
              </div>

              <div>
                <h3 className="font-display text-3xl leading-none">
                  exploring
                </h3>

                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mt-1">
                  my unsettling mind
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {exploring.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="size-2 rounded-full bg-primary" />

                  <span className="text-[15px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* achievements */}
          <div className="relative rounded-[2rem] border border-pink-100 bg-white p-6 shadow-soft overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(236,72,153,0.12)] transition-all duration-300">
            <div className="absolute top-4 right-5 text-yellow-300 text-lg">
              ★
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="size-11 rounded-2xl bg-yellow-100 flex items-center justify-center">
                <Trophy className="size-5 text-primary" />
              </div>

              <div>
                <h3 className="font-display text-3xl leading-none">
                  achievements
                </h3>

                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mt-1">
                  tiny proud moments
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {achievements.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 text-[15px] leading-relaxed"
                >
                  <span className="text-primary">
                    ✦
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* projects grid */}
        <div className="grid lg:grid-cols-2 gap-6 mt-7">
          {projects.map(
            (project, index) => {
              const Icon =
                project.icon;

              return (
                <a
                  key={project.title}
                  href={project.link}
                  className={`group relative overflow-hidden rounded-[2.4rem] border border-pink-100 bg-white shadow-soft hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)] transition-all duration-500`}                
                >
                  {/* bg gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}
                  />

                  {/* doodle */}
                  <div className="absolute top-5 right-6 text-pink-200 text-sm">
                    ✦
                  </div>

                  {/* content */}
                  <div className="relative z-10 p-7">
                    {/* top */}
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex items-start gap-4">
                        <div className="size-14 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-card">
                          <Icon className="size-6 text-primary" />
                        </div>

                        <div>
                          <h3 className="font-display text-[2rem] leading-none">
                            {project.title}
                          </h3>

                          <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary mt-2 whitespace-nowrap overflow-hidden text-ellipsis">
                            {project.stack}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* desc */}
                    <p className="mt-5 text-[15px] leading-relaxed text-foreground/80 max-w-xl">
                      {project.desc}
                    </p>

                    {/* points */}
                    <div className="flex flex-wrap gap-3 mt-5">
                      {project.points.map(
                        (point) => (
                          <div
                            key={point}
                            className="px-4 py-2 rounded-xl bg-white/70 backdrop-blur-sm border border-white/70 text-[13px] font-medium"
                          >
                            {point}
                          </div>
                        )
                      )}
                    </div>

                    {project.note && (
                      <div className="absolute right-5 top-5 z-20 pointer-events-none">
                        {/* tape */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                          <div className="w-20 h-5 rounded-sm bg-pink-200/70 border border-pink-100 rotate-[-2deg]" />
                        </div>

                        {/* note */}
                        <div
                          className="
                            relative
                            w-[170px]
                            bg-[#f7ecff]/95
                            border border-purple-100
                            rounded-[1rem]
                            px-4
                            py-4
                            shadow-[0_15px_30px_rgba(0,0,0,0.08)]
                          "
                        >
                          {/* doodles */}
                          <div className="absolute top-3 right-4 text-xl opacity-70">
                            ♡
                          </div>

                          <div className="absolute bottom-3 right-4 text-lg opacity-60">
                            ☺
                          </div>

                          {/* text */}
                          <p
                            className="
                              font-['Pacifico']
                              text-[0.72rem]
                              text-[#7a6890]
                              pr-3
                            "
                          >
                            {project.note}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </a>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}