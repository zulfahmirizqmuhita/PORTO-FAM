import { cn } from "@/utils/cn";

type Props = {
  index: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({ index, title, subtitle, align = "left", className }: Props) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <p className={cn("inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold")}>
        <span className="h-px w-8 bg-gold" />
        {index}
        {align === "center" && <span className="h-px w-8 bg-gold" />}
      </p>
      <h2 className="mt-3 font-display text-5xl leading-none tracking-wide text-white md:text-6xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-xl text-sm text-zinc-400 md:text-base">{subtitle}</p>}
    </div>
  );
}
