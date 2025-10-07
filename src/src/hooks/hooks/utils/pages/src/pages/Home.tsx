import React from "react";
import { Link } from "react-router-dom";
import { timelineEvents } from "../noahs-art";
import { cn } from "../utils/cn";

const Home = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground px-6 pt-24 md:px-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="section-heading text-6xl md:text-7xl">
          Noah’s Ark: a universe where memes evolve, coins connect, and culture comes alive.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Built on Ethereum, sailing toward Guardian seas. Explore characters, NFTs, and stories that shape Noah's universe.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            to="/universe"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary via-primary to-accent px-6 py-3 text-sm font-semibold text-background shadow-aurora hover:-translate-y-0.5 transition-transform"
          >
            Explore the Universe
          </Link>
          <Link
            to="/founder"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:border-white/25 hover:bg-white/15 transition"
          >
            Meet the Founder
          </Link>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="mt-20 max-w-5xl mx-auto space-y-12">
        {timelineEvents.map((event) => (
          <div
            key={event.id}
            className={cn(
              "p-6 rounded-2xl border border-white/10 bg-white/5 shadow-aurora",
              event.polarity === "dawn" ? "bg-gradient-to-r from-primary/10 via-secondary/5" : "bg-gradient-to-r from-secondary/10 via-accent/5"
            )}
          >
            <h2 className="text-2xl font-semibold mb-2">{event.era}</h2>
            <h3 className="text-xl font-medium text-accent mb-1">{event.title}</h3>
            <p className="text-muted-foreground mb-2">{event.description}</p>
            <span className="text-sm text-muted-foreground">{event.timestamp} • {event.polarity} phase</span>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
