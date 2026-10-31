import { experiences, type Experience as Exp } from "@/data";
import { cn } from "@/utils/cn";
import SectionHeading from "./SectionHeading";

const typeStyle: Record<Exp["type"], string> = {
  Dokumentasi: "border-gold/40 text-gold bg-gold/10",
  Pelatihan: "border-sky-400/40 text-sky-300 bg-sky-400/10",
  Kunjungan: "border-emerald-400/40 text-emerald-300 bg-emerald-400/10",
};

export default function Experience() {
  return (
    <section id="pengalaman" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="reveal md:col-span-4">
            <SectionHeading
              index="05"
              title="Pengalaman"
              subtitle="Dokumentasi acara, pelatihan, dan kunjungan industri yang pernah saya ikuti sepanjang 2025."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {(Object.keys(typeStyle) as Exp["type"][]).map((t) => (
                <span key={t} className={cn("rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]", typeStyle[t])}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <ol className="relative md:col-span-8">
            <span className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-white/10 to-transparent" />
            {experiences.map((e, i) => (
              <li
                key={e.title + e.date}
                className="reveal group relative grid grid-cols-[16px_1fr] gap-5 py-5 sm:grid-cols-[16px_1fr_auto]"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="relative mt-2 h-4 w-4">
                  <span className="absolute inset-[4px] rounded-full bg-gold transition group-hover:scale-150" />
                  <span className="absolute inset-0 rounded-full border border-gold/40" />
                </span>
                <div className="border-b border-white/5 pb-5 sm:col-span-2 sm:grid sm:grid-cols-[1fr_auto] sm:gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white transition group-hover:text-gold">{e.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{e.org}</p>
                    <span className={cn("mt-3 inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] sm:hidden", typeStyle[e.type])}>
                      {e.type}
                    </span>
                  </div>
                  <div className="mt-2 text-right sm:mt-0">
                    <p className="font-display text-xl tracking-wide text-zinc-300">{e.date}</p>
                    <span className={cn("mt-2 hidden rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] sm:inline-block", typeStyle[e.type])}>
                      {e.type}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
