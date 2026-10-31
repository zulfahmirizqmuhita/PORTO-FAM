import { profile } from "@/data";
import SectionHeading from "./SectionHeading";
import { IconArrow, IconMail, IconWhatsApp } from "./Icons";

export default function Contact() {
  const waText = encodeURIComponent("Halo Zulfahmi, saya tertarik untuk berkolaborasi / memakai jasa Anda.");
  return (
    <section id="kontak" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gold/10 blur-[160px]" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal">
          <SectionHeading index="07" title="Mari Terhubung" align="center" className="mx-auto flex flex-col items-center" />
        </div>

        <div className="reveal mx-auto mt-10 max-w-3xl text-center" style={{ transitionDelay: "100ms" }}>
          <p className="font-display text-3xl leading-tight text-white md:text-5xl">
            Punya proyek kreatif atau ingin <span className="text-gold">berkolaborasi?</span>
          </p>
          <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
            Saya terbuka untuk pekerjaan dan kolaborasi di bidang desain grafis, fotografi, videografi,
            dokumentasi acara, serta editing video.
          </p>
        </div>

        <div className="reveal mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2" style={{ transitionDelay: "200ms" }}>
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-4 rounded-lg border border-white/10 bg-ink-3/60 p-5 transition hover:-translate-y-1 hover:border-gold/50"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-gold/30 bg-gold/10 text-gold">
              <IconMail className="h-6 w-6" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500">Email</span>
              <span className="block truncate text-sm font-medium text-white group-hover:text-gold">{profile.email}</span>
            </span>
            <IconArrow className="h-4 w-4 text-zinc-500 transition group-hover:text-gold" />
          </a>
          <a
            href={`https://wa.me/${profile.whatsappIntl}?text=${waText}`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-lg border border-white/10 bg-ink-3/60 p-5 transition hover:-translate-y-1 hover:border-emerald-400/50"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
              <IconWhatsApp className="h-6 w-6" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500">WhatsApp</span>
              <span className="block text-sm font-medium text-white group-hover:text-emerald-300">{profile.whatsapp}</span>
            </span>
            <IconArrow className="h-4 w-4 text-zinc-500 transition group-hover:text-emerald-300" />
          </a>
        </div>

        <div className="reveal mt-10 text-center" style={{ transitionDelay: "300ms" }}>
          <a
            href={`https://wa.me/${profile.whatsappIntl}?text=${waText}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-gold-2"
          >
            Hubungi Saya
            <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
