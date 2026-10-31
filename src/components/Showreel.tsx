import { useRef, useState } from "react";
import videoSrc from "@/assets/video.mp4";
import poster from "@/assets/video-poster.jpg";
import { profile } from "@/data";
import { cn } from "@/utils/cn";
import SectionHeading from "./SectionHeading";
import { IconArrow, IconPause, IconPlay } from "./Icons";

export default function Showreel() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };

  return (
    <section id="showreel" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/8 blur-[160px]" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="03"
            title="Showreel"
            subtitle="Cuplikan videografi & editing video — opsi B: diputar langsung di halaman ini."
          />
          <span className="inline-flex w-max items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Opsi B · Video
          </span>
        </div>

        <div className="reveal mt-14" style={{ transitionDelay: "120ms" }}>
          <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_40px_120px_-30px_rgba(242,181,68,0.25)]">
            {/* cinematic bars */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-black/70 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="relative aspect-video w-full">
              <video
                ref={ref}
                src={videoSrc}
                poster={poster}
                playsInline
                preload="metadata"
                muted={muted}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                onTimeUpdate={(e) => {
                  const v = e.currentTarget;
                  if (v.duration) setProgress((v.currentTime / v.duration) * 100);
                }}
                onClick={toggle}
                className="h-full w-full cursor-pointer object-contain"
              />

              {/* big play button */}
              <button
                onClick={toggle}
                aria-label={playing ? "Pause" : "Play"}
                className={cn(
                  "absolute left-1/2 top-1/2 z-20 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/60 bg-ink/60 text-gold backdrop-blur-md transition duration-500 hover:scale-105 hover:bg-gold hover:text-ink",
                  playing && "pointer-events-none scale-75 opacity-0"
                )}
              >
                <IconPlay className="ml-1 h-9 w-9" />
              </button>
            </div>

            {/* controls */}
            <div className="absolute inset-x-0 bottom-0 z-20 flex items-center gap-4 px-5 pb-4 pt-6">
              <button
                onClick={toggle}
                aria-label={playing ? "Pause" : "Play"}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-gold hover:text-ink"
              >
                {playing ? <IconPause className="h-4 w-4" /> : <IconPlay className="ml-0.5 h-4 w-4" />}
              </button>
              <div
                className="relative h-1 flex-1 cursor-pointer overflow-hidden rounded-full bg-white/15"
                onClick={(e) => {
                  const v = ref.current;
                  if (!v || !v.duration) return;
                  const r = e.currentTarget.getBoundingClientRect();
                  v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
                }}
              >
                <div className="absolute inset-y-0 left-0 bg-gold" style={{ width: `${progress}%` }} />
              </div>
              <button
                onClick={() => setMuted((m) => !m)}
                className="shrink-0 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur transition hover:bg-gold hover:text-ink"
              >
                {muted ? "Unmute" : "Mute"}
              </button>
            </div>

            {/* corner label */}
            <div className="absolute left-5 top-5 z-20 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
              <span className={cn("h-2 w-2 rounded-full", playing ? "animate-pulse bg-red-500" : "bg-white/40")} />
              {playing ? "Playing" : "Showreel"}
            </div>
          </div>

          <div className="mx-auto mt-6 flex max-w-5xl flex-col items-start justify-between gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center">
            <p>
              Videografi & Editing Video · <span className="text-zinc-300">Zulfahmi Rizq A.</span>
            </p>
            <a
              href={profile.videoLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
            >
              Buka di Google Photos
              <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
