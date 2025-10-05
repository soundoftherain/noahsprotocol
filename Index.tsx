import { useCallback } from "react";
import {
  Activity,
  ArrowRight,
  Play,
  Sparkles,
  Wallet,
  Zap,
} from "lucide-react";
import {
  characters,
  memeCoins,
  timelineEvents,
  upcomingDrops,
} from "@/data/noahs-art";

const stats = [
  { label: "Active collectors", value: "84,190" },
  { label: "Meme coins in orbit", value: "27" },
  { label: "Artists contributing", value: "112" },
  { label: "Ark Coin validators", value: "3,204" },
];

const featurePillars = [
  {
    title: "Cinematic Storyline",
    description:
      "Vote on branching narratives, unlock hidden arcs, and mint your own interludes as the tale unfolds in real time.",
    icon: Play,
  },
  {
    title: "Immersive Collectibles",
    description:
      "Every character holds a meme coin keyed to their emotions—stake them to commission original, living art moments.",
    icon: Sparkles,
  },
  {
    title: "Web3 Native Economy",
    description:
      "Ark Coin fuels every trade. Stake to access vault drops, liquidity rituals, and cross-reality travel documents.",
    icon: Wallet,
  },
];

const formatChange = (value: number) =>
  `${value > 0 ? "+" : ""}${value.toFixed(1)}%`;

export default function Index() {
  const scrollToId = useCallback((hash: string) => {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="relative space-y-24 overflow-hidden pb-24">
      <section
        id="universe"
        className="relative isolate px-6 pb-24 pt-24 md:px-8 lg:pt-32"
      >
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.45em] text-secondary shadow-aurora">
              Episode 09 streaming now
              <span className="rounded-full bg-secondary/40 px-2 py-0.5 text-[0.7rem] text-white">
                Live
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="section-heading text-balance text-6xl md:text-7xl">
                Noah&apos;s Art: a living universe of characters powered by Ark Coin
              </h1>
              <p className="section-subtitle text-lg md:text-xl">
                Enter a multilayered saga where art, lore, and finance collide. Collectors fund new episodes, meme coins embody each character, and Ark Coin lets you steer the myth in real time.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToId("#timeline")}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary via-primary to-accent px-7 py-3 text-sm font-semibold text-background shadow-aurora transition-transform hover:-translate-y-0.5"
              >
                Explore timeline
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToId("#ark-coin")}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Buy with Ark Coin
                <Zap className="h-4 w-4 text-secondary" />
              </button>
            </div>
            <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-semibold text-white md:text-4xl">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col gap-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-aurora">
            <div className="absolute inset-x-12 top-6 h-24 bg-gradient-to-b from-white/10 via-transparent to-transparent blur-3xl" />
            <div className="flex flex-col gap-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/15 via-primary/10 to-secondary/10 p-6 text-white">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                    Ark Coin Vault
                  </p>
                  <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs text-secondary">
                    Live price feed
                  </span>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-4xl font-semibold">$5.93</p>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                      ARK / ETH
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-secondary">+8.3% today</p>
                    <p className="text-xs text-white/60">12.4M volume</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 text-xs text-white/70">
                  <p>Ark Coin powers every transaction, portal jump, and lore unlock within Noah&apos;s Art. Stake to access validator channels.</p>
                  <p>Liquidity pools rebalance hourly based on collector sentiment. Vote with ARK to influence new character mints.</p>
                </div>
              </div>
              <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
                <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.35em] text-white/60">
                  <span>Ark Coin Utility</span>
                  <span>Futureproofed</span>
                </div>
                <div className="grid gap-3">
                  {featurePillars.map(({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="glass-panel flex items-start gap-4 rounded-2xl border-none bg-white/5 p-4 shadow-none"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/40 via-primary/40 to-accent/40 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-white">{title}</h3>
                        <p className="text-xs text-white/70">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="relative px-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-secondary">
                Story evolution
              </p>
              <h2 className="section-heading text-balance">Dynamic timeline</h2>
              <p className="section-subtitle">
                Vote, stake, and intervene. Every collector move pushes the story
                forward. Track pivotal episodes and decide the next divergence.
              </p>
            </div>
            <button
              onClick={() => scrollToId("#ark-coin")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-white/25 hover:bg-white/10"
            >
              Go to Ark Coin
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="relative mt-12 grid gap-10">
            <div
              aria-hidden="true"
              className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-secondary/40 via-white/20 to-primary/40 md:left-1/2"
            />
            {timelineEvents.map((event, index) => {
              const alignRight = index % 2 === 1;
              return (
                <article
                  key={event.id}
                  className={`relative grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-white/20 hover:shadow-aurora lg:grid-cols-[auto,1fr] ${
                    alignRight ? "md:ml-auto md:max-w-[48%]" : "md:mr-auto md:max-w-[48%]"
                  }`}
                >
                  <span className="absolute -left-4 top-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-background text-xs font-semibold text-white md:-left-12">
                    {event.id}
                  </span>
                  <div className="space-y-3">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-secondary">
                      {event.era}
                    </span>
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground md:text-base">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    <span>{event.timestamp}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] text-white/70">
                      {event.polarity === "dawn" ? "Dawn" : "Dusk"} phase
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="characters" className="relative px-6 md:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-secondary">
                Character atlas
              </p>
              <h2 className="section-heading text-balance">
                Meet the Ark-bound legends
              </h2>
              <p className="section-subtitle">
                Each persona fuels a meme coin with their archetype, emotion, and
                artistic resonance. Choose wisely—your coins rewrite the canon.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
              Spotlighted {characters.length} of 27
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {characters.map((character) => (
              <div
                key={character.coinSymbol}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-aurora"
              >
                <div
                  aria-hidden="true"
                  className={`absolute -top-20 right-0 h-52 w-52 rounded-full bg-gradient-to-br ${character.auraGradient} opacity-30 blur-3xl`}
                />
                <div className="relative flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-white">
                      {character.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {character.epithet}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-secondary">
                      {character.coinSymbol} • {character.coinPrice.toFixed(2)}Ξ
                    </p>
                    <p className="text-xs text-white/60">{character.alignment}</p>
                  </div>
                </div>
                <p className="relative mt-6 text-sm text-white/70">
                  {character.bio}
                </p>
                <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
                  <span className="uppercase tracking-[0.35em] text-white/60">
                    Signature
                  </span>
                  <p className="text-right text-white/80">
                    {character.signature}
                  </p>
                </div>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:border-secondary/40 hover:bg-secondary/10">
                  Browse {character.coinSymbol} coin
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ark-coin" className="relative px-6 md:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-secondary">
                Ark coin portal
              </p>
              <h2 className="section-heading text-balance">
                Fuel the universe with Ark Coin
              </h2>
              <p className="section-subtitle">
                Stake to unlock validator channels, fund new character arcs, and
                secure rare drops. Ark Coin is the lifeblood of Noah&apos;s Art.
              </p>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
              <Activity className="h-4 w-4 text-secondary" />
              Liquidity synced hourly
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/15 p-6 text-white">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                      Validator access
                    </p>
                    <p className="mt-2 text-3xl font-semibold">Guardian tier staking</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-secondary">
                    10,000 ARK lock
                  </div>
                </div>
                <div className="mt-6 grid gap-4 text-sm text-white/75">
                  <p>Cast weighted votes on episode direction, unlock closed-door transmissions, and guide the Ark Council decisions.</p>
                  <p>Connect your preferred wallet to start. Ark Coin pairs with ETH, USDC, and cross-chain bridges across the Ark collective.</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary via-primary to-accent px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-background shadow-aurora transition hover:-translate-y-0.5">
                    Connect wallet
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-white/25 hover:bg-white/15">
                    Read audit
                  </button>
                </div>
              </div>
              <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
                  How Ark Coin flows
                </h3>
                <div className="grid gap-4 text-sm text-white/70 md:grid-cols-2">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.35em] text-secondary">
                      01 • Mint
                    </p>
                    <p className="text-white/90">
                      Mint Ark Coin or trade for hero meme coins powering
                      characters.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.35em] text-secondary">
                      02 • Stake
                    </p>
                    <p className="text-white/90">
                      Stake in resonance pools to earn episode shards and early
                      access art proofs.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.35em] text-secondary">
                      03 • Influence
                    </p>
                    <p className="text-white/90">
                      Vote on story divergences, unlock hidden lore, commission
                      live performances.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.35em] text-secondary">
                      04 • Harvest
                    </p>
                    <p className="text-white/90">
                      Redeem episode rewards, physical artefacts, and backstage
                      transmissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  Meme coin marketplace
                </p>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-secondary">
                  Live offers
                </span>
              </div>
              <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
                {memeCoins.map((coin) => (
                  <div
                    key={coin.symbol}
                    className={`coin-card min-w-[260px] flex-1 rounded-[1.5rem] border border-white/10 p-5 text-white`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-semibold">{coin.name}</p>
                        <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                          {coin.symbol}
                        </p>
                      </div>
                      <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/70">
                        {formatChange(coin.change)}
                      </div>
                    </div>
                    <div className="mt-6 flex items-baseline gap-2">
                      <p className="text-3xl font-semibold">{coin.price.toFixed(2)}Ξ</p>
                      <p className="text-xs text-white/60">Volume {coin.volume}</p>
                    </div>
                    <p className="mt-4 text-xs text-white/70">{coin.utility}</p>
                    <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:border-secondary/40 hover:bg-secondary/10">
                      Buy with ARK
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-secondary/20 via-primary/15 to-accent/15 p-6 text-sm text-white/80">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Sneak peek
                </p>
                <p className="mt-2 text-white/90">
                  Ark Coin flows between chains via the Ark Bridge. Swap from
                  ETH, SOL, and BASE in one click—bridges open every four hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="episodes" className="relative px-6 md:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-secondary">
              Upcoming transmissions
            </p>
            <h2 className="section-heading text-balance">
              Sneak peeks of next episodes
            </h2>
            <p className="section-subtitle">
              Secure Ark Coin to access premiere streams, IRL installations, and
              community-only alt endings. Holders shape these drops in advance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {upcomingDrops.map((drop) => (
              <div
                key={drop.episode}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-aurora"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative space-y-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-secondary">
                    {drop.episode}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-white">
                      {drop.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                      Releasing {drop.release}
                    </p>
                    <p className="text-sm text-white/70">{drop.synopsis}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
                    <span>{drop.vibe} aura</span>
                    <span className="inline-flex items-center gap-1 text-secondary">
                      Reserve access
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 md:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-secondary/30 via-primary/30 to-accent/20 p-10 text-center text-white shadow-aurora">
          <h2 className="text-balance text-4xl font-semibold md:text-5xl">
            Become a steward of Noah&apos;s Art
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Join the Ark Council, shape the myth, and commission the artworks
            that will echo across realities.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => scrollToId("#ark-coin")}
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-secondary shadow-aurora transition hover:-translate-y-0.5"
            >
              Acquire Ark Coin
            </button>
            <button
              onClick={() => scrollToId("#characters")}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Explore characters
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
