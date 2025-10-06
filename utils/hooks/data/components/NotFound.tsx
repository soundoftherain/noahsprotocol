import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center px-6 pb-24 pt-24 md:px-8">
      <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-aurora">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-secondary">
          Signal lost
        </span>
        <h1 className="section-heading text-balance text-5xl md:text-6xl">
          Ark coordinate not found
        </h1>
        <p className="text-lg text-muted-foreground">
          The path you attempted to access drifts beyond the mapped Noah&apos;s Art universe. Return to the main portal and continue shaping the myth.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary via-primary to-accent px-6 py-3 text-sm font-semibold text-background shadow-aurora transition-transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home portal
          </Link>
          <Link
            to="/universe"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/15"
          >
            Visit lore journal
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
