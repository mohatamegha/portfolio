import { useState } from "react";

import {
  Music2,
  X,
  ExternalLink,
  Play,
} from "lucide-react";

const songs = [
  {
    title: "It Ain't Me",
    artist: "Kygo & Selena Gomez",
    embed:
      "https://open.spotify.com/embed/track/7BKLCZ1jbUBVqRi2FVlTVw?utm_source=generator",
  },

  {
    title: "Stupid",
    artist: "Tate McRae",
    embed:
      "https://open.spotify.com/embed/track/3jjujdWJ72nww5eGnfs2E7?utm_source=generator",
  },

  {
    title: "Ahista",
    artist: "Pankaj Udhas",
    embed:
      "https://open.spotify.com/embed/track/0f9XJ7w0t4QwqzvWlA9dQf?utm_source=generator",
  },

  {
    title: "Like I Can",
    artist: "Sam Smith",
    embed:
      "https://open.spotify.com/embed/track/0zMAvsQmaQ4DGsmXtKixpn?utm_source=generator",
  },

  {
    title: "Kasoor",
    artist: "Prateek Kuhad",
    embed:
      "https://open.spotify.com/embed/track/76vZsA2mBdeSS2E6jR2R8k?utm_source=generator",
  },
];

export function MusicPlayer() {
  const [open, setOpen] =
    useState(false);

  const [activeSong, setActiveSong] =
    useState(songs[0]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-3">
      {/* popup */}
      {open && (
        <div className="w-[340px] rounded-[2rem] border border-pink-100 bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(236,72,153,0.18)] overflow-hidden animate-pop">
          {/* top */}
          <div className="relative px-5 pt-5 pb-4 border-b border-pink-100">
            <button
              onClick={() =>
                setOpen(false)
              }
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="size-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="size-12 rounded-2xl bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center shadow-soft">
                <Music2 className="size-5 text-white" />
              </div>

              <div>
                <div className="font-display text-2xl leading-none">
                  playlist
                </div>

                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mt-1">
                  coding + late night vibes
                </div>
              </div>
            </div>
          </div>

          {/* spotify embed */}
          <div className="p-4">
            <iframe
              style={{
                borderRadius: "18px",
              }}
              src={activeSong.embed}
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />

            {/* song pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {songs.map((song) => {
                const active =
                  activeSong.title ===
                  song.title;

                return (
                  <button
                    key={song.title}
                    onClick={() =>
                      setActiveSong(
                        song
                      )
                    }
                    className={`px-3 py-2 rounded-full text-xs transition-all duration-300 flex items-center gap-2 border ${
                      active
                        ? "bg-pink-100 border-pink-200 text-primary"
                        : "bg-white border-pink-100 hover:bg-pink-50"
                    }`}
                  >
                    <Play className="size-3 fill-current" />

                    <span className="font-medium">
                      {song.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* footer */}
            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              open in spotify

              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      )}

      {/* floating button */}
      <button
        onClick={() =>
          setOpen((o) => !o)
        }
        className="group relative size-14 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 text-white shadow-[0_10px_35px_rgba(236,72,153,0.35)] flex items-center justify-center hover:scale-105 transition-all duration-300"
      >
        {/* glow */}
        <div className="absolute inset-0 rounded-full bg-pink-300 blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />

        <Music2 className="relative size-5" />
      </button>
    </div>
  );
}