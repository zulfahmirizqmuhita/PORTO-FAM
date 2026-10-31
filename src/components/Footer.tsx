import { profile } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-10">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-gold/40 bg-gold/10 font-display text-lg text-gold">ZR</span>
          <div>
            <p className="font-display text-xl tracking-[0.2em] text-white">{profile.shortName}</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">{profile.tagline}</p>
          </div>
        </div>
        <p className="text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} {profile.name} · {profile.school} · {profile.major}
        </p>
        <a href="#top" className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400 transition hover:text-gold">
          Kembali ke atas ↑
        </a>
      </div>
    </footer>
  );
}
