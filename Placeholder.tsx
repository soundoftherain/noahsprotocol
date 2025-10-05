import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
  badge?: string;
  description: string;
  ctaLabel?: string;
}

export default function Placeholder({
  title,
  badge,
  description,
  ctaLabel = "Return home",
}: PlaceholderProps) {
  return (
    <section className="relative px-6 pb-24 pt-24 md:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-aurora">
        {badge ? (
          <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-secondary">
            {badge}
          </span>
        ) : null}
        <div className="space-y-4">
          <h1 className="section-heading text-balance text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary via-primary to-accent px-6 py-3 text-sm font-semibold text-background shadow-aurora transition-transform hover:-translate-y-0.5"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
