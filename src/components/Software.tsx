import { software } from "@/data";
import SectionHeading from "./SectionHeading";

export default function Software() {
  return (
    <section id="software" className="border-t border-white/5 bg-ink-2/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal">
          <SectionHeading
            index="04"
            title="Software"
            subtitle="Tools yang saya gunakan sehari-hari untuk mendesain, mengolah foto, dan mengedit video."
            align="center"
            className="mx-auto flex flex-col items-center"
          />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {software.map((s, i) => (
            <div
              key={s.name}
              className="reveal group relative flex flex-col items-center gap-4 rounded-lg border border-white/8 bg-ink-3/60 px-4 py-8 transition duration-500 hover:-translate-y-1 hover:border-white/20"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-lg opacity-0 blur-2xl transition duration-700 group-hover:opacity-30"
                style={{ background: `radial-gradient(circle at 50% 30%, ${s.tint}, transparent 60%)` }}
              />
              <div className="relative grid h-16 w-16 place-items-center">
                <img
                  src={s.logo}
                  alt={s.name}
                  className="h-14 w-14 object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition duration-500 group-hover:scale-110"
                  style={s.name === "Canva" ? { filter: "invert(62%) sepia(66%) saturate(2419%) hue-rotate(141deg) brightness(97%) contrast(101%)" } : undefined}
                />
              </div>
              <p className="relative text-center text-xs font-medium uppercase tracking-[0.15em] text-zinc-300">{s.name}</p>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center font-display text-lg tracking-[0.3em] text-zinc-500">
          Canva · Adobe Lightroom · Adobe Premiere Pro · Figma · Adobe Illustrator · CapCut
        </p>
      </div>
    </section>
  );
}
