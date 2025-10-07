import React from "react";
import { characters, memeCoins, upcomingDrops } from "../noahs-art";
import { cn } from "../utils/cn";

const Universe = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground px-6 pt-24 md:px-12">
      {/* Characters */}
      <section className="max-w-6xl mx-auto space-y-12">
        <h1 className="section-heading text-5xl mb-6">Characters & NFT Coins</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {characters.map((char) => (
            <div
              key={char.name}
              className={cn(
                "coin-card p-6 rounded-3xl shadow-aurora text-center",
                char.auraGradient
              )}
            >
              <h2 className="text-2xl font-semibold mb-1">{char.name}</h2>
              <h3 className="text-lg font-medium mb-2 text-secondary">{char.epithet}</h3>
              <p className="mb-2">{char.bio}</p>
              <span className="text-sm text-muted-foreground">Coin: {char.coinSymbol} – ${char.coinPrice.toFixed(2)}</span>
              <p className="mt-2 text-sm italic">{char.signature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meme Coins */}
      <section className="mt-20 max-w-6xl mx-auto space-y-8">
        <h1 className="section-heading text-4xl mb-6">Meme Coins</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {memeCoins.map((coin) => (
            <div
              key={coin.symbol}
              className={cn(
                "coin-card p-6 rounded-3xl shadow-aurora",
                coin.accent
              )}
            >
              <h2 className="text-xl font-semibold mb-1">{coin.name}</h2>
              <span className="text-sm text-muted-foreground">{coin.symbol} – ${coin.price}</span>
              <p className="mt-2 text-sm">{coin.utility}</p>
              <span className="mt-1 text-xs text-muted-foreground">24h change: {coin.change}% • Volume: {coin.volume}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Drops */}
      <section className="mt-20 max-w-6xl mx-auto space-y-8">
        <h1 className="section-heading text-4xl mb-6">Upcoming NFT Episodes</h1>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {upcomingDrops.map((drop) => (
            <div
              key={drop.episode}
              className="coin-card p-6 rounded-3xl shadow-aurora"
            >
              <h2 className="text-xl font-semibold mb-1">{drop.episode} – {drop.title}</h2>
              <span className="text-sm text-muted-foreground">Release Date: {drop.release}</span>
              <p className="mt-2">{drop.synopsis}</p>
              <span className="mt-2 text-sm font-medium text-accent">Aura / Access: {drop.vibe} NFT</span>
              <button className="mt-3 w-full rounded-full bg-gradient-to-r from-secondary via-primary to-accent px-4 py-2 text-sm font-semibold text-background shadow-aurora hover:-translate-y-0.5 transition-transform">
                Buy NFT
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Universe;

