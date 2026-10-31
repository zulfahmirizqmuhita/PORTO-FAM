import type { ComponentType, SVGProps } from "react";
import { skills, type Skill } from "@/data";
import { cn } from "@/utils/cn";
import SectionHeading from "./SectionHeading";
import { IconArrow, IconDesign, IconDrive, IconEdit, IconPhoto, IconTeam, IconVideo } from "./Icons";

const iconMap: Record<Skill["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  design: IconDesign,
  photo: IconPhoto,
  video: IconVideo,
  edit: IconEdit,
  team: IconTeam,
};

export default function Skills() {
  return (
    <section id="keahlian" className="relative border-t border-white/5 bg-ink-2/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="02"
            title="Keahlian"
            subtitle="Lima bidang utama yang saya tekuni. Klik kartu untuk membuka folder karya di Google Drive."
          />
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">Portofolio · Google Drive</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => {
            const Icon = iconMap[s.icon];
            const Tag = s.link ? "a" : "div";
            return (
              <Tag
                key={s.title}
                {...(s.link ? { href: s.link, target: "_blank", rel: "noreferrer" } : {})}
                className={cn(
                  "reveal group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-lg border border-white/8 bg-ink-3/60 p-7 transition duration-500",
                  s.link && "cursor-pointer hover:-translate-y-1 hover:border-gold/50 hover:bg-ink-3",
                  i === 4 && "sm:col-span-2 lg:col-span-1"
                )}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/0 blur-3xl transition duration-700 group-hover:bg-gold/15" />
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-md border border-gold/30 bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-3xl text-zinc-700 transition group-hover:text-gold/70">{s.index}</span>
                </div>
                <div>
                  <h3 className="font-display text-3xl tracking-wide text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
                  {s.link ? (
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      <IconDrive className="h-4 w-4" />
                      Lihat Karya
                      <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  ) : (
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Soft Skill
                    </span>
                  )}
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
