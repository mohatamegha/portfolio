import VisionBoard from "../VisionBoard";

export function Interests() {
  return (
    <section
      id="interests"
      className="relative py-28 px-3 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto relative">
        {/* heading */}
        <div className="mb-14 text-center">
          <div className="font-mono text-xs tracking-[0.35em] uppercase text-primary mb-4">
            // interests
          </div>

          <h2 className="font-display text-5xl sm:text-6xl leading-none">
            my little{" "}
            <span className="text-gradient">
              vision board
            </span>
          </h2>

          <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Insights to me: 
            little pieces of my personality,
            things i enjoy, memories,
            aesthetics, goals & moments that
            make me feel like me.
          </p>
        </div>

        {/* scrapbook board */}
        <div
          className="relative rounded-[38px] border border-pink-100 overflow-hidden shadow-soft"
          style={{
            background:
              "linear-gradient(180deg,#fdf7fb,#fff2f8)",
          }}
        >
          {/* dotted pattern */}
          <div
            className="absolute inset-0 opacity-[0.88]"
            style={{
              backgroundImage:
                "radial-gradient(#e7bfd0 1.2px, transparent 1.2px)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* board content */}
          <div className="relative z-10 p-5 sm:p-8 ">
            <VisionBoard />
          </div>
        </div>
      </div>
    </section>
  );
}