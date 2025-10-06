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
  nftAccess?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "01",
    era: "Genesis Wave",
    title: "Ark Signal Detected",
    description: "Deep-space receivers echo with an impossible harmony. The Ark awakens and broadcasts coordinates hidden inside a spectrum no human eye has seen.",
    timestamp: "Episode 00: We Gotta Run to the Rainbow – 10-minute musical NFT by Noah Moses",
    polarity: "dawn",
  },
  {
    id: "02",
    era: "Fractal Current",
    title: "Meme Coin Bloom",
    description: "Each character crystallizes into a living manifesto. Their emotions mint meme coins backed by Ark energy, letting collectors steer narrative arcs, unlock early lore, and secure NFT-gated content.",
    timestamp: "Episode 01: The Rhythm of Chaos – Feathers + Hoodlum performance",
    polarity: "dusk",
  },
  {
    id: "03",
    era: "Chromatic Rift",
    title: "Splintered Alliances",
    description: "The Ark splits into mirrored realities. Holders must choose alignments, funding missions that alter the very physics of Noah's Art, while staking Ark Coin to unlock additional interactive elements.",
    timestamp: "Episode 02: Eyes in the Dark – Guardian oversees Ark security, prepares PQC network layer",
    polarity: "dawn",
  },
  {
    id: "04",
    era: "Aurora Assembly",
    title: "Ark Council Convenes",
    description: "Ark Coin validators gather in orbit over a liquid prism sea, drafting the treaty that will either converge or shatter the universe's destinies.",
    timestamp: "Episode 03: Gallop of Insight – Knight delivers speed and adventure to the network",
    polarity: "dusk",
  },
];

export const upcomingDrops: UpcomingDrop[] = [
  {
    episode: "Episode 10",
    title: "Chorus of Mirrors",
    release: "Aug 02, 2025",
    synopsis: "Collectors co-compose a ritual chant that splinters into eight mirror-verses. Decisions determine which realities survive and which collapse, while early NFT holders gain exclusive musical variations and visual art drops.",
    vibe: "Refraction",
    nftAccess: "Refraction NFT",
  },
  {
    episode: "Episode 11",
    title: "Arkfall Bazaar",
    release: "Sep 13, 2025",
    synopsis: "A floating marketplace over the Prism Sea where meme coins manifest as living familiars. Collectors can interact, trade, and stake coins to influence market flows and story progression.",
    vibe: "Marketplace",
    nftAccess: "Marketplace NFT",
  },
  {
    episode: "Episode 12",
    title: "The Silent Orbit",
    release: "Oct 21, 2025",
    synopsis: "For twelve minutes, Ark validators go offline, letting holders pilot the Ark alone. Collectors’ collective choices ripple across the multiverse, determining narrative outcomes. Exclusive episode NFTs unlock bonus lore and musical compositions.",
    vibe: "Resonance",
    nftAccess: "Resonance NFT",
  },
];
