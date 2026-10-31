import profileImg from "@/assets/profile.jpg";
import { profile } from "@/data";
import { IconArrow } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 md:pt-32">
      {/* backdrop glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-10 px-5 md:grid-cols-12 md:px-10">
        {/* Text */}
        <div className="hero-anim md:col-span-7 md:pb-16">
          <p className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Portofolio · Siswa DKV
          </p>
          <h1 className="font-display text-[clamp(3.6rem,11vw,9.5rem)] leading-[0.88] tracking-tight text-white">
            ZULFAHMI
            <br />
            RIZQ <span className="outline-text">A.</span>
          </h1>
          <p className="mt-6 font-display text-2xl tracking-[0.35em] text-zinc-300 md:text-3xl">
            DESAIN <span className="text-gold">·</span> FOTO <span className="text-gold">·</span> VIDEO
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
            Mengubah ide menjadi karya visual yang menarik dan komunikatif — dari desain grafis,
            fotografi, videografi, hingga editing video.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#keahlian"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold-2"
            >
              Lihat Karya
              <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="relative md:col-span-5">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px] md:ml-auto">
            {/* frame accents */}
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-gold/70" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-gold/70" />
            <div className="absolute inset-0 overflow-hidden rounded-sm bg-ink-3">
              <img
                src={profileImg}
                alt="Zulfahmi Rizq Aldiansyah"
                className="h-full w-full object-cover object-top"
                style={{ filter: "contrast(1.05) saturate(0.92)" }}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
            </div>
            {/* label card */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-md border border-white/10 bg-ink/70 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Zulfahmi Rizq Aldiansyah</p>
                <p className="mt-0.5 text-xs text-zinc-300">{profile.school} · DKV</p>
              </div>
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            </div>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="mt-14 border-y border-white/5 bg-ink-2/60 py-3">
        <div className="flex w-max animate-marquee whitespace-nowrap font-display text-lg tracking-[0.3em] text-zinc-500">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex">
              {["DESAIN GRAFIS", "FOTOGRAFI", "VIDEOGRAFI", "EDITING VIDEO", "DOKUMENTASI ACARA", "LEADERSHIP"].map((t) => (
                <span key={t} className="mx-6 flex items-center gap-6">
                  {t} <span className="text-gold">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
