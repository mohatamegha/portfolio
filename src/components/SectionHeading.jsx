export function SectionHeading({
  eyebrow,
  title,
  emoji,
}) {
  return (
    <div className="mb-14 relative">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">
        // {eyebrow}
      </div>

      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl relative inline-block">
        {title}

        {emoji && (
          <span className="inline-block animate-float-slow ml-2">
            {emoji}
          </span>
        )}

        <svg
          className="absolute -bottom-4 left-0 w-32 text-primary/40"
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
      </h2>
    </div>
  );
}