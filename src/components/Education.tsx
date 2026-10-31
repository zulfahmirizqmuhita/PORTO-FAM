import { education } from "@/data";
import { cn } from "@/utils/cn";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="pendidikan" className="border-t border-white/5 bg-ink-2/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal">
          <SectionHeading index="06" title="Pendidikan" />
        </div>
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {education.map((e, i) => (
            <div
              key={e.school}
              className={cn(
                "reveal relative overflow-hidden rounded-lg border p-7 transition duration-500 hover:-translate-y-1",
                e.current ? "border-gold/50 bg-gradient-to-br from-gold/15 via-ink-3 to-ink-3" : "border-white/8 bg-ink-3/60 hover:border-white/20"
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl text-zinc-700">{String(i + 1).padStart(2, "0")}</span>
                {e.current && (
                  <span className="rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                    Sekarang
                  </span>
                )}
              </div>
              <p className="mt-8 font-display text-2xl tracking-wide text-gold">{e.years}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-white">{e.school}</h3>
              <p className="mt-2 text-sm text-zinc-400">{e.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
