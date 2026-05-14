export function WavingCat({
  className = "",
}) {
  return (
    <svg
      viewBox="0 0 120 110"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient
          id="catFur"
          cx="50%"
          cy="40%"
          r="60%"
        >
          <stop
            offset="0%"
            stopColor="#ffffff"
          />
          <stop
            offset="70%"
            stopColor="#f6f1ee"
          />
          <stop
            offset="100%"
            stopColor="#e3dcd6"
          />
        </radialGradient>

        <radialGradient
          id="catBody"
          cx="50%"
          cy="30%"
          r="80%"
        >
          <stop
            offset="0%"
            stopColor="#ffffff"
          />
          <stop
            offset="100%"
            stopColor="#dcd3cc"
          />
        </radialGradient>
      </defs>

      <g className="cat-body">
        {/* tail */}
        <path
          d="M86 80 C 108 74, 114 54, 102 40"
          stroke="#e8e1db"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        {/* body */}
        <ellipse
          cx="55"
          cy="80"
          rx="33"
          ry="22"
          fill="url(#catBody)"
          stroke="#cfc6bf"
          strokeWidth="0.8"
        />

        {/* head */}
        <ellipse
          cx="48"
          cy="50"
          rx="27"
          ry="24"
          fill="url(#catFur)"
          stroke="#cfc6bf"
          strokeWidth="0.8"
        />

        {/* ears */}
        <path
          d="M28 34 L32 12 L48 30 Z"
          fill="url(#catFur)"
          stroke="#cfc6bf"
          strokeWidth="0.8"
        />

        <path
          d="M68 30 L64 10 L48 28 Z"
          fill="url(#catFur)"
          stroke="#cfc6bf"
          strokeWidth="0.8"
        />

        <path
          d="M32 30 L34 18 L42 28 Z"
          fill="#f4bfd0"
        />

        <path
          d="M64 28 L62 16 L54 26 Z"
          fill="#f4bfd0"
        />

        {/* eyes */}
        <ellipse
          cx="40"
          cy="50"
          rx="2.8"
          ry="3.4"
          fill="#1a1020"
        />

        <ellipse
          cx="56"
          cy="50"
          rx="2.8"
          ry="3.4"
          fill="#1a1020"
        />

        <circle
          cx="41"
          cy="49"
          r="0.9"
          fill="white"
        />

        <circle
          cx="57"
          cy="49"
          r="0.9"
          fill="white"
        />

        {/* nose */}
        <path
          d="M47 58 Q48 59.5 49 58"
          stroke="#a35d6a"
          strokeWidth="1.2"
          fill="#f7cad6"
          strokeLinecap="round"
        />

        {/* smile */}
        <path
          d="M44 58 Q46 62 48 60"
          stroke="#1a1020"
          strokeWidth="0.9"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M52 58 Q50 62 48 60"
          stroke="#1a1020"
          strokeWidth="0.9"
          fill="none"
          strokeLinecap="round"
        />

        {/* blush */}
        <ellipse
          cx="33"
          cy="57"
          rx="3.5"
          ry="1.8"
          fill="#f7bfd1"
          opacity="0.7"
        />

        <ellipse
          cx="63"
          cy="57"
          rx="3.5"
          ry="1.8"
          fill="#f7bfd1"
          opacity="0.7"
        />

        {/* whiskers */}
        <path
          d="M30 54 Q24 53 20 51"
          stroke="#8a7f78"
          strokeWidth="0.6"
          fill="none"
        />

        <path
          d="M30 57 Q24 58 20 59"
          stroke="#8a7f78"
          strokeWidth="0.6"
          fill="none"
        />

        <path
          d="M66 54 Q72 53 76 51"
          stroke="#8a7f78"
          strokeWidth="0.6"
          fill="none"
        />

        <path
          d="M66 57 Q72 58 76 59"
          stroke="#8a7f78"
          strokeWidth="0.6"
          fill="none"
        />

        {/* bow */}
        <g transform="translate(60 22) rotate(-10)">
          <path
            d="M-8 0 Q-10 -6 -2 -2 Q0 0 -2 2 Q-10 6 -8 0 Z"
            fill="#f48fb1"
          />

          <path
            d="M8 0 Q10 -6 2 -2 Q0 0 2 2 Q10 6 8 0 Z"
            fill="#f48fb1"
          />

          <circle
            cx="0"
            cy="0"
            r="1.6"
            fill="#ec5c95"
          />
        </g>

        {/* waving paw */}
        <g
          className="cat-paw"
          style={{
            transformBox:
              "fill-box",
            transformOrigin:
              "20% 100%",
          }}
        >
          <path
            d="M28 72 C 18 62, 14 48, 18 36"
            stroke="url(#catBody)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />

          <circle
            cx="18"
            cy="34"
            r="7"
            fill="url(#catFur)"
            stroke="#cfc6bf"
            strokeWidth="0.6"
          />

          <ellipse
            cx="16"
            cy="36"
            rx="1.4"
            ry="1"
            fill="#f7bfd1"
          />
        </g>
      </g>

      {/* hi bubble */}
      <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ellipse
          cx="98"
          cy="20"
          rx="17"
          ry="11"
          fill="white"
          stroke="#f48fb1"
          strokeWidth="1.5"
        />

        <text
          x="98"
          y="24"
          textAnchor="middle"
          fontSize="11"
          fontFamily="DM Serif Display"
          fill="#b54773"
        >
          hi! ♡
        </text>

        <path
          d="M88 26 L82 32 L92 28 Z"
          fill="white"
          stroke="#f48fb1"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}