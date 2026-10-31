import profileImg from "@/assets/profile.jpg";
import { profile } from "@/data";
import SectionHeading from "./SectionHeading";

const stats = [
  { v: "4", l: "Bidang Keahlian" },
  { v: "8+", l: "Pengalaman & Pelatihan" },
  { v: "6", l: "Software Dikuasai" },
];

export default function About() {
  return (
    <section id="tentang" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="reveal md:col-span-4">
          <SectionHeading index="01" title="Tentang Saya" />
          <div className="relative mt-10 hidden md:block">
            <div className="aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-sm grayscale transition duration-700 hover:grayscale-0">
              <img src={profileImg} alt="Zulfahmi Rizq Aldiansyah" className="h-full w-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full max-w-[300px] border border-gold/40" />
          </div>
        </div>

        <div className="reveal md:col-span-8" style={{ transitionDelay: "120ms" }}>
          <p className="font-display text-3xl leading-tight text-white md:text-5xl">
            “Senang mengeksplorasi ide kreatif, mempelajari hal baru, serta mengubah ide menjadi{" "}
            <span className="text-gold">karya visual</span> yang menarik dan komunikatif.”
          </p>
          <div className="mt-10 space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg">
            <p>{profile.about1}</p>
            <p>{profile.about2}</p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="font-display text-4xl text-gold md:text-5xl">{s.v}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-500">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
