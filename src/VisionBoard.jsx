import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { FaThumbtack } from "react-icons/fa";
import { GiFlowerStar } from "react-icons/gi";

import bg from "./vision-board-compressed/background.png";

// typography
import title from "./vision-board-compressed/Megha's_vision_board.png";
import dreamBig from "./vision-board-compressed/dream_big.png";
import dreamPlan from "./vision-board-compressed/dream_plan_code_travel.png";
import dreamCode from "./vision-board-compressed/dream_plan_code_travel.png";

// music row
import songs from "./vision-board-compressed/Songs_on_repeat.png";
import livedMusic from "./vision-board-compressed/lived_in_music.png";
import vinyl from "./vision-board-compressed/vinyl.png";

// polaroids
import myPeople from "./vision-board-compressed/my_people.png";
import goodVibes from "./vision-board-compressed/good_vibes.png";
import movieNights from "./vision-board-compressed/move_nights.png";
import ifYouFly from "./vision-board-compressed/if_you_fly.png";

// middle
import corporate from "./vision-board-compressed/corporate_girl.png";
import laptop from "./vision-board-compressed/laptop.png";
import myGoals from "./vision-board-compressed/my_goals.png";
import codeBrace from "./vision-board-compressed/code_brace.png";
import codeSnippet from "./vision-board-compressed/code_snippet.png";
import iceland from "./vision-board-compressed/iceland.png";
import greece from "./vision-board-compressed/greece.png";

// right side
import persistence from "./vision-board-compressed/Persistence.png";
import beKind from "./vision-board-compressed/be_kind.png";
import manifesting from "./vision-board-compressed/manifesting.png";
import bestYet from "./vision-board-compressed/the_best_is_yet_to_come.png";

// bottom
import pookoo from "./vision-board-compressed/pookoo.png";
import puppy from "./vision-board-compressed/puppy.png";
import architecture from "./vision-board-compressed/architecture.png";
import sunshine from "./vision-board-compressed/sunshine.png";
import goodMarks from "./vision-board-compressed/good_marks.png";
import csCore from "./vision-board-compressed/cs_core.png";
import cherry from "./vision-board-compressed/cherry_blossoms.png";

// stickers
import rose from "./vision-board-compressed/rose_sticker.png";
import daisy from "./vision-board-compressed/white_flower.png";

const W = 1536;
const H = 1000;

const items = [
  { src: title, x: -10, y: -5, w: 390, z: 6, d: 0.0, tilt: -2 },
  { src: songs, x: 360, y: 5, w: 250, z: 5, d: 0.4, tilt: -1 },
  { src: livedMusic, x: 595, y: 10, w: 215, z: 8, d: 0.7, tilt: 2 },
  { src: myPeople, x: 750, y: 30, w: 285, z: 6, d: 0.2, tilt: -3 },
  { src: goodVibes, x: 960, y: 10, w: 285, z: 5, d: 0.6, tilt: 3 },
  { src: movieNights, x: 1230, y: -10, w: 190, z: 7, d: 1.0, tilt: -2 },
  { src: ifYouFly, x: 1390, y: 0, w: 175, z: 8, d: 0.3, tilt: 5 },

  { src: vinyl, x: 555, y: 220, w: 200, z: 6.5, d: 1.1, tilt: 4 },

  { src: corporate, x: 5, y: 285, w: 240, z: 8, d: 0.5, tilt: -2 },
  { src: laptop, x: 245, y: 340, w: 430, z: 4, d: 0.7, tilt: 1 },
  { src: myGoals, x: 620, y: 380, w: 260, z: 7, d: 0.2, tilt: 2 },
  { src: codeBrace, x: 830, y: 260, w: 235, z: 4, d: 0.4, tilt: -3 },
  { src: codeSnippet, x: 835, y: 420, w: 235, z: 5, d: 0.6, tilt: 2 },
  { src: iceland, x: 1050, y: 305, w: 250, z: 5, d: 0.8, tilt: -2 },
  { src: greece, x: 1080, y: 520, w: 220, z: 5, d: 1.0, tilt: 3 },

  { src: persistence, x: 1270, y: 285, w: 260, z: 9, d: 0.5, tilt: 3 },
  { src: beKind, x: 1285, y: 480, w: 260, z: 9, d: 0.7, tilt: -3 },
  { src: manifesting, x: 1270, y: 650, w: 250, z: 9, d: 0.9, tilt: 4 },
  { src: bestYet, x: 1295, y: 820, w: 250, z: 9, d: 0.3, tilt: -4 },

  { src: pookoo, x: -5, y: 590, w: 225, z: 5, d: 0.6, tilt: -3 },
  { src: puppy, x: 195, y: 680, w: 230, z: 9, d: 0.8, tilt: 2 },
  { src: architecture, x: 410, y: 660, w: 300, z: 4, d: 0.3, tilt: -2 },
  { src: dreamBig, x: 380, y: 615, w: 360, z: 7, d: 1.0, tilt: -1 },
  { src: sunshine, x: 675, y: 570, w: 185, z: 6, d: 0.5, tilt: 3 },
  { src: goodMarks, x: 715, y: 770, w: 145, z: 6, d: 0.4, tilt: -2 },
  { src: csCore, x: 830, y: 695, w: 240, z: 5, d: 0.6, tilt: 2 },
  { src: cherry, x: 1060, y: 770, w: 270, z: 5, d: 0.5, tilt: 3 },

  { src: dreamPlan, x: 175, y: 920, w: 1050, z: 8, d: 1.2, tilt: -1 },

  { src: dreamCode, x: 140, y: 830, w: 650, z: 5, d: 0.5, tilt: 3 },
];

const stickers = [
  { src: rose, x: 150, y: 120, w: 350, tilt: -8, d: 0.2 },
  { src: rose, x: -70, y: 790, w: 290, tilt: 12, d: 0.8 },
  // { src: rose, x: 965, y: 820, w: 150, tilt: -10, d: 0.5 },
  { src: daisy, x: 1290, y: 490, w: 80, tilt: 0, d: 0.9 },
  { src: daisy, x: 725, y: 270, w: 130, tilt: -8, d: 0.6 }
  // { src: daisy, x: 1335, y: 925, w: 70, tilt: 0, d: 1.1 },
];

function Piece({ item, i }) {
  const tilt = item.tilt || 0;

  return (
    <motion.img
      src={item.src}
      draggable={false}
      style={{
        position: "absolute",
        left: item.x,
        top: item.y,
        width: item.w,
        height: "auto",
        zIndex: item.z || 2,
        cursor: "grab",
        userSelect: "none",
        willChange: "transform",
        filter: "drop-shadow(0 6px 10px rgba(80,55,55,0.16))",
      }}
      initial={{ rotate: tilt, opacity: 0 }}
      animate={{ rotate: [tilt, tilt + 0.7, tilt - 0.5, tilt], opacity: 1 }}
      transition={{
        rotate: {
          duration: 6 + ((i * 13) % 5),
          repeat: Infinity,
          ease: "easeInOut",
          delay: item.d || 0,
        },
        opacity: {
          duration: 0.5,
          delay: (item.d || 0) * 0.3,
        },
      }}
      whileHover={{
        scale: 1.05,
        zIndex: 50,
        filter: "drop-shadow(0 14px 22px rgba(60,40,40,0.26))",
        transition: { duration: 0.25 },
      }}
      whileDrag={{
        scale: 1.08,
        zIndex: 99,
        filter: "drop-shadow(0 26px 36px rgba(60,40,40,0.45))",
      }}
      drag
      dragElastic={0.22}
      dragSnapToOrigin
      dragMomentum={false}
      dragTransition={{
        bounceStiffness: 220,
        bounceDamping: 18,
      }}
    />
  );
}

function StickerEl({ s, i }) {
  return (
    <motion.img
      src={s.src}
      draggable={false}
      style={{
        position: "absolute",
        left: s.x,
        top: s.y,
        width: s.w,
        height: "auto",
        zIndex: 10,
        cursor: "grab",
        userSelect: "none",
        willChange: "transform",
        filter: "drop-shadow(0 6px 10px rgba(60,40,40,0.28))",
      }}
      initial={{ rotate: s.tilt, opacity: 0 }}
      animate={{
        rotate: [s.tilt, s.tilt + 1.2, s.tilt - 0.8, s.tilt],
        opacity: 1,
      }}
      transition={{
        rotate: {
          duration: 7 + (i % 4),
          repeat: Infinity,
          ease: "easeInOut",
          delay: s.d,
        },
        opacity: {
          duration: 0.5,
          delay: s.d * 0.3,
        },
      }}
      whileHover={{ scale: 1.1, zIndex: 60 }}
      whileDrag={{ scale: 1.15, zIndex: 99 }}
      drag
      dragElastic={0.25}
      dragSnapToOrigin
      dragMomentum={false}
      dragTransition={{
        bounceStiffness: 240,
        bounceDamping: 18,
      }}
    />
  );
}

export default function VisionBoard() {
  const frameRef = useRef(null);
  const stageRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!frameRef.current || !stageRef.current) return;

    const frame = frameRef.current;
    const stage = stageRef.current;

    const apply = () => {
      stage.style.transform = `scale(${frame.clientWidth / W})`;
    };

    apply();
    setReady(true);

    const ro = new ResizeObserver(apply);
    ro.observe(frame);

    return () => ro.disconnect();
  }, []);

  return (
    <main
      // className="min-h-screen w-full overflow-x-hidden"
      // style={{ background: "#ead9cf" }}
    >
      <div className="mx-auto" style={{ width: "min(92vw, 1400px)" }}>
        <div
          ref={frameRef}
          className="relative mx-auto my-4"
          style={{
            width: "100%",
            aspectRatio: `${W} / ${H}`,
            backgroundImage: `url(${bg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            boxShadow: "0 30px 80px -20px rgba(60,40,40,0.35)",
            borderRadius: 32,
            overflow: "hidden",
          }}
        >
          <div
            ref={stageRef}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: W,
              height: H,
              transformOrigin: "top left",
              visibility: ready ? "visible" : "hidden",
            }}
          >
            <svg
              viewBox={`0 0 ${W} ${H}`}
              style={{
                position: "absolute",
                inset: 0,
                width: W,
                height: H,
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              <path
                d="M 1165 410 C 1230 460, 1230 560, 1170 620"
                fill="none"
                stroke="#b85c5c"
                strokeWidth="3"
                strokeDasharray="2 9"
                strokeLinecap="round"
                opacity="0.75"
              />

              <text
                x="1196"
                y="520"
                fontSize="22"
                fill="#b85c5c"
                opacity="0.85"
              >
                ✈
              </text>

              {[
                [120, 220],
                [340, 540],
                [705, 230],
                [905, 250],
                [1310, 240],
                [505, 880],
                [880, 880],
                [1255, 700],
                [70, 470],
                [1075, 510],
              ].map(([cx, cy], i) => (
                <g key={i} transform={`translate(${cx} ${cy})`} opacity="0.85">
                  <path
                    d="M0 -10 L2.4 -2.4 L10 0 L2.4 2.4 L0 10 L-2.4 2.4 L-10 0 L-2.4 -2.4 Z"
                    fill="#d97a8a"
                  />
                </g>
              ))}

              <path
                d="M 30 175 q 150 18 320 -6"
                fill="none"
                stroke="#b85c5c"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.7"
              />

              <text
                x="455"
                y="270"
                fontSize="26"
                fill="#d96a8a"
                opacity="0.9"
                transform="rotate(-12 455 270)"
              >
                ♡
              </text>

              <text
                x="1295"
                y="465"
                fontSize="22"
                fill="#d96a8a"
                opacity="0.9"
              >
                ♡
              </text>
            </svg>

            <div
              style={{
                position: "absolute",
                left: 1330,
                top: 270,
                width: 250,
                height: 28,
                background:
                  "repeating-linear-gradient(45deg, #f7c8c8 0 10px, #f0a9a9 10px 20px)",
                opacity: 0.7,
                transform: "rotate(-4deg)",
                zIndex: 3,
                boxShadow: "0 4px 8px rgba(60,40,40,0.15)",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: 1020,
                top: 240,
                width: 260,
                zIndex: 8,
                transform: "rotate(-4deg)",
                fontFamily: '"Dancing Script", "Caveat", cursive',
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: "1px",
                color: "#7a2e2e",
                textAlign: "center",
                textShadow: "0 1px 0 rgba(255,255,255,0.6)",
                pointerEvents: "none",
              }}
            >
              places to explore
              <div
                style={{
                  height: 2,
                  background: "#b85c5c",
                  margin: "2px auto 0",
                  width: "70%",
                  borderRadius: 2,
                  opacity: 0.7,
                }}
              />
            </div>
            
            {/* TOP POLAROID TAPES */}

            <div
              style={{
                position: "absolute",
                left: 850,
                top: 25,
                width: 65,
                height: 18,
                background: "#efb7b7",
                opacity: 0.72,
                transform: "rotate(-5deg)",
                zIndex: 40,
                borderRadius: 2,
              }}
            />

            <div
              style={{
                position: "absolute",
                left: 1070,
                top: 5,
                width: 70,
                height: 18,
                background: "#efb7b7",
                opacity: 0.72,
                transform: "rotate(4deg)",
                zIndex: 40,
                borderRadius: 2,
              }}
            />

            {items.map((it, i) => (
              <Piece key={`p-${i}`} item={it} i={i} />
            ))}

            {stickers.map((s, i) => (
              <StickerEl key={`s-${i}`} s={s} i={i} />
            ))}
          </div>
        </div>

        <p
          className="text-center text-sm py-6 italic"
          style={{
            color: "#7a4a4a",
            fontFamily: "serif",
          }}
        >
          drag anything · it springs back home ✿
        </p>
      </div>
    </main>
  );
}