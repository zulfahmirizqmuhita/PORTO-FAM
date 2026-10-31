import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#showreel", label: "Showreel" },
  { href: "#software", label: "Software" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#pendidikan", label: "Pendidikan" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-gold/40 bg-gold/10 font-display text-lg text-gold">
            ZR
          </span>
          <span className="hidden font-display text-xl tracking-[0.2em] text-white sm:block">
            ZULFAHMI<span className="text-gold">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium uppercase tracking-[0.18em] text-zinc-400 transition hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="rounded-full border border-gold/60 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-ink"
          >
            Kontak
          </a>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className={cn("absolute h-[2px] w-6 bg-white transition-all", open ? "rotate-45" : "-translate-y-2")} />
          <span className={cn("absolute h-[2px] w-6 bg-white transition-all", open && "opacity-0")} />
          <span className={cn("absolute h-[2px] w-6 bg-white transition-all", open ? "-rotate-45" : "translate-y-2")} />
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-b border-white/5 bg-ink/95 backdrop-blur-md transition-all duration-500 md:hidden",
          open ? "max-h-[420px]" : "max-h-0 border-b-0"
        )}
      >
        <div className="flex flex-col px-6 py-4">
          {[...links, { href: "#kontak", label: "Kontak" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 font-display text-2xl tracking-[0.15em] text-zinc-200 last:border-0 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
