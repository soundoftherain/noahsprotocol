export interface TimelineEvent {
  id: string;
  era: string;
  title: string;
  description: string;
  timestamp: string;
  polarity: "dawn" | "dusk";
}

export interface CharacterProfile {
  name: string;
  epithet: string;
  bio: string;
  alignment: string;
  coinSymbol: string;
  coinPrice: number;
  auraGradient: string;
  signature: string;
}

export interface MemeCoin {
  name: string;
  symbol: string;
  price: number;
  change: number;
  volume: string;
  utility: string;
  accent: string;
}

export interface UpcomingDrop {
  episode: string;
  title: string;
  release: string;
  synopsis: string;
  vibe: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "01",
    era: "Genesis Wave",
    title: "Ark Signal Detected",
    description:
      "Deep-space receivers echo with an impossible harmony. The Ark awakens and broadcasts coordinates hidden inside a spectrum no human eye has seen.",
    timestamp: "Episode 00: Signal",
    polarity: "dawn",
  },
  {
    id: "02",
    era: "Fractal Current",
    title: "Meme Coin Bloom",
    description:
      "Each character crystallises into a living manifesto. Their emotions mint coins backed by Ark energy, letting collectors steer narrative arcs in real time.",
    timestamp: "Episode 03: Bloom",
    polarity: "dusk",
  },
  {
    id: "03",
    era: "Chromatic Rift",
    title: "Splintered Alliances",
    description:
      "The Ark splits into mirrored realities. Holders must choose alignments, funding missions that alter the very physics of Noah's Art.",
    timestamp: "Episode 06: Rift",
    polarity: "dawn",
  },
  {
    id: "04",
    era: "Aurora Assembly",
    title: "Ark Council Convenes",
    description:
      "Ark Coin validators gather in orbit over a liquid prism sea, drafting the treaty that will either converge or shatter the universe's destinies.",
    timestamp: "Episode 09: Convergence",
    polarity: "dusk",
  },
];

export const characters: CharacterProfile[] = [
  {
    name: "Astra Nova",
    epithet: "Architect of Echoes",
    bio: "Speaks in ultraviolet equations that bend memory. Astra designs resonance corridors that store entire lifetimes inside a single pulse.",
    alignment: "Resonant",
    coinSymbol: "NOVA",
    coinPrice: 2.94,
    auraGradient: "from-primary/50 via-primary/30 to-secondary/40",
    signature: "Calibrates timelines by weaving sonic lattices across nebulae.",
  },
  {
    name: "Miro Tide",
    epithet: "Tidal Syndicate",
    bio: "A shapeshifting curator who sculpts water into memory glyphs. Miro trades liquid futures that predict meme currents days before they surge.",
    alignment: "Fluid",
    coinSymbol: "TIDE",
    coinPrice: 1.28,
    auraGradient: "from-secondary/60 via-secondary/40 to-primary/40",
    signature: "Floods markets with liquidity while shielding fragile stories.",
  },
  {
    name: "Nyx Prisma",
    epithet: "Shadow Cartographer",
    bio: "Maps the negative space between constellations, revealing pathways for outlier collectors. Nyx wraps truths inside mischievous riddles.",
    alignment: "Liminal",
    coinSymbol: "PRISMA",
    coinPrice: 3.67,
    auraGradient: "from-accent/50 via-accent/30 to-primary/40",
    signature: "Encrypts lore drops in refracted mirrors to reward the curious.",
  },
  {
    name: "Vanta Flux",
    epithet: "Silhouette Broker",
    bio: "A guardian coded from dark photons. Vanta slips between shadow markets, arbitraging rare emotions to restabilise volatile episodes.",
    alignment: "Umbral",
    coinSymbol: "FLUX",
    coinPrice: 4.12,
    auraGradient: "from-black/40 via-slate-900/40 to-primary/30",
    signature: "Negotiates treaties between light and absence inside the Ark core.",
  },
  {
    name: "Lumen Ark",
    epithet: "Pulse Oracle",
    bio: "An empathic intelligence who forecasts collective feeling. Lumen weaves Ark Coin staking rituals into immersive synesthetic rites.",
    alignment: "Harmonic",
    coinSymbol: "LUMA",
    coinPrice: 2.41,
    auraGradient: "from-secondary/50 via-primary/40 to-accent/40",
    signature: "Guides pilgrimages into the Ark chambers during eclipse cycles.",
  },
];

export const memeCoins: MemeCoin[] = [
  {
    name: "Ark Coin",
    symbol: "ARK",
    price: 5.93,
    change: 8.3,
    volume: "12.4M",
    utility: "Universal currency powering portal jumps and validator governance.",
    accent: "from-secondary/70 via-primary/50 to-accent/50",
  },
  {
    name: "Nova Resonance",
    symbol: "NOVA",
    price: 2.94,
    change: 4.1,
    volume: "3.8M",
    utility: "Amplifies Astra's echo chambers, unlocking hidden resonance paths.",
    accent: "from-primary/60 via-primary/40 to-secondary/40",
  },
  {
    name: "Tidal Current",
    symbol: "TIDE",
    price: 1.28,
    change: -1.9,
    volume: "1.6M",
    utility: "Boosts liquidity pools for Miro's adaptive market rituals.",
    accent: "from-secondary/60 via-secondary/40 to-primary/40",
  },
  {
    name: "Prisma Veil",
    symbol: "PRISMA",
    price: 3.67,
    change: 12.6,
    volume: "5.1M",
    utility: "Decrypts Nyx's hidden portals and grants access to liminal vaults.",
    accent: "from-accent/60 via-primary/40 to-secondary/35",
  },
  {
    name: "Flux Shadow",
    symbol: "FLUX",
    price: 4.12,
    change: 6.4,
    volume: "6.4M",
    utility: "Stabilises dark markets and negotiates safe passage across rifts.",
    accent: "from-slate-900/70 via-primary/40 to-accent/40",
  },
];

export const upcomingDrops: UpcomingDrop[] = [
  {
    episode: "Episode 10",
    title: "Chorus of Mirrors",
    release: "Aug 02, 2025",
    synopsis:
      "Collectors co-compose a ritual chant that splinters into eight mirror-verses, deciding which realities collapse and which remain.",
    vibe: "Refraction",
  },
  {
    episode: "Episode 11",
    title: "Arkfall Bazaar",
    release: "Sep 13, 2025",
    synopsis:
      "A floating marketplace over the Prism Sea where meme coins materialise as living familiars ready to guide new investors.",
    vibe: "Marketplace",
  },
  {
    episode: "Episode 12",
    title: "The Silent Orbit",
    release: "Oct 21, 2025",
    synopsis:
      "Ark validators go offline for twelve minutes, letting holders steer the ship alone. The universe listens to collective intent.",
    vibe: "Resonance",
  },
];
