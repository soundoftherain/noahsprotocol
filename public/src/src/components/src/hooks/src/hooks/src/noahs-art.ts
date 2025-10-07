export type Episode = {
  id: number;
  title: string;
  releaseDate: string;
  description: string;
  aura: string;
  phase: string;
};

export const episodes: Episode[] = [
  {
    id: 1,
    title: "Genesis Wave",
    releaseDate: "Released",
    description:
      "Ark Signal Detected — Deep-space receivers echo with an impossible harmony. The Ark awakens and broadcasts coordinates hidden inside a spectrum no human eye has seen.\n\nEpisode 00: We Gotta Run to the Rainbow – 10-minute musical NFT by Noah Moses.\nDawn phase.",
    aura: "Dawn",
    phase: "Genesis Phase",
  },
  {
    id: 2,
    title: "Fractal Current",
    releaseDate: "Released",
    description:
      "Meme Coin Bloom — Each character crystallizes into a living manifesto. Their emotions mint meme coins backed by Ark energy, letting collectors steer narrative arcs, unlock early lore, and secure NFT-gated content.\n\nEpisode 01: The Rhythm of Chaos – Feathers + Hoodlum performance.\nDusk phase.",
    aura: "Dusk",
    phase: "Fractal Phase",
  },
  {
    id: 3,
    title: "Chromatic Rift",
    releaseDate: "Released",
    description:
      "Splintered Alliances — The Ark splits into mirrored realities. Holders must choose alignments, funding missions that alter the very physics of Noah’s Art, while staking Ark Coin to unlock additional interactive elements.\n\nEpisode 02: Eyes in the Dark – Guardian oversees Ark security, prepares PQC network layer.\nDawn phase.",
    aura: "Dawn",
    phase: "Rift Phase",
  },
  {
    id: 4,
    title: "Aurora Assembly",
    releaseDate: "Released",
    description:
      "Ark Council Convenes — Ark Coin validators gather in orbit over a liquid prism sea, drafting the treaty that will either converge or shatter the universe's destinies.\n\nEpisode 03: Gallop of Insight – Knight delivers speed and adventure to the network.\nDusk phase.",
    aura: "Dusk",
    phase: "Aurora Phase",
  },
  {
    id: 10,
    title: "Chorus of Mirrors",
    releaseDate: "Aug 02, 2025",
    description:
      "Collectors co-compose a ritual chant that splinters into eight mirror-verses. Decisions determine which realities survive and which collapse, while early NFT holders gain exclusive musical variations and visual art drops.",
    aura: "Refraction NFT",
    phase: "Reserve access",
  },
  {
    id: 11,
    title: "Arkfall Bazaar",
    releaseDate: "Sep 13, 2025",
    description:
      "A floating marketplace over the Prism Sea where meme coins manifest as living familiars, each representing a character’s personality. Collectors can interact, trade, and stake coins to influence market flows and story progression.",
    aura: "Marketplace NFT",
    phase: "Reserve access",
  },
  {
    id: 12,
    title: "The Silent Orbit",
    releaseDate: "Oct 21, 2025",
    description:
      "For twelve minutes, Ark validators go offline, letting holders pilot the Ark alone. Collectors’ collective choices ripple across the multiverse, determining narrative outcomes. Exclusive episode NFTs unlock bonus lore and musical compositions.",
    aura: "Resonance NFT",
    phase: "Reserve access",
  },
];

export const siteInfo = {
  title: "Noah’s Ark: A Universe Where Memes Evolve, Coins Connect, and Culture Comes Alive",
  tagline: "Built on Ethereum, sailing toward Guardian seas.",
  hero: {
    headline: "Welcome to Noah’s Ark",
    subtext:
      "A decentralized world of art, music, and myth — where characters become memes, and memes become value.",
    cta: {
      label: "Explore the Ark",
      link: "/episodes",
    },
  },
  founder: {
    name: "Noah Moses",
    title: "Singer, Songwriter, and Creator of Noah’s Art",
    bio: `Hello, my name is Noah Moses. I am a singer-songwriter and programmer, and I created Noah’s Art — a living universe of characters with a wide range of musical styles and personalities. From Feathers, a blues-wailing peacock inspired by legends like Muddy Waters and Howlin’ Wolf, to Hoodlum, a rooster with a deep, husky rap style that’s uniquely his own, each character has a story and a sound that comes to life through music and narrative.

I am raising funds through Juicebox.money for the early rounds of production to bring albums and episodes to the quality I’ve envisioned. Within Noah’s ecosystem, several characters are represented as meme coins that provide both utility and collectible value.

Guardian Coin, represented by the watchful owl, contributes to network security through quantum protection. Knight Coin, the black stallion, delivers speed and efficiency through staking and governance.

The vision of Noah’s Protocol is to expand into a collaborative network — a platform where artists and innovators can launch their own characters, coins, and ideas. Together, we’re building a living digital mythology.

Join the DAO via Discord or contact: noahmoses@proton.me.`,
  },
};
