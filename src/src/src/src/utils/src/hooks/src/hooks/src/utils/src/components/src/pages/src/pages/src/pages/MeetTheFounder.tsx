import React from "react";

const MeetTheFounder = () => {
  return (
    <section className="min-h-screen bg-background text-foreground p-8 md:p-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="section-heading text-5xl md:text-6xl">
            Noah Moses — Creator of Noah’s Art & Founder of Noah’s Protocol
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Singer, songwriter, and programmer. Bringing a living universe of music, story, and blockchain technology to life.
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-6">
          <p>
            Hello, my name is Noah Moses. I’m a singer, songwriter, and programmer, and the creator of Noah’s Art — a living universe of characters expressed through music, story, and blockchain technology. From Feathers, the blues-wailing peacock channeling the soul of Muddy Waters and Howlin’ Wolf, to Hoodlum, a rooster with a husky, poetic flow all his own — every character carries a unique sound, message, and energy. Each song, episode, and visual element expands a world that is alive — evolving through community, creativity, and code.
          </p>
        </div>

        {/* Vision Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">The Vision — Noah’s Protocol</h2>
          <p>
            What began as art is becoming a protocol — a decentralized ecosystem called Noah’s Protocol, where music, story, and technology merge. The foundation of this protocol is a new model of value called Proof of Help → Proof of Behavior. Instead of rewarding power or capital, the network rewards service, consistency, and contribution. Those who create, secure, and uplift others in the system rise through the Guardian Network, earning reputation, influence, and lasting wealth.
          </p>
        </div>

        {/* Coins Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">The Memetic Economy — Coins with Purpose</h2>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <strong>🦉 Guardian Coin:</strong> Security layer of Noah’s Protocol. Powered by PQC, it protects the network and anchors governance.
            </li>
            <li>
              <strong>🐎 Knight Coin:</strong> Represents speed, trust, and delivery — transaction layer for safe and efficient interactions.
            </li>
            <li>
              <strong>🐘 Elephant Token:</strong> Memory layer (in development). Will enable decentralized storage of art, music, and culture.
            </li>
            <li>
              <strong>Additional Coins:</strong> Falcon (quantum security) and Owl Eyes (analytics) will expand the ecosystem as it matures.
            </li>
          </ul>
        </div>

        {/* Purpose & Invitation */}
        <div className="space-y-4">
          <p>
            The immediate goal is to produce high-quality albums and visual episodes for Noah’s Art — bringing these characters and their worlds to life. The long-term mission reaches far beyond music: Noah’s Protocol is a platform for all creators, allowing musicians, writers, and builders to launch their own coins, NFTs, and digital worlds.
          </p>
          <p>
            We are forming Noah’s Art DAO, a decentralized creative guild dedicated to building the infrastructure, content, and technology of this vision. <em>We believe the future belongs to those who help build it — not those who wait for it. If you feel called to create, protect, or innovate — you already belong here.</em>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <a
            href="https://discord.gg/yourlink"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-background rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Join the DAO
          </a>
          <a
            href="mailto:noahmoses@proton.me"
            className="px-6 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-background transition-colors"
          >
            Contact Noah
          </a>
          <a
            href="https://juicebox.money/noahsart"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-secondary text-background rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Support Early Production
          </a>
        </div>

        {/* Arrival Concept */}
        <div className="space-y-2 mt-12">
          <h2 className="text-3xl font-semibold">Arrival Concept</h2>
          <p>
            In the mythology of Noah’s Protocol, all who enter arrive through a wormhole that finds them across multiverses — drawn by resonance, not by chance. Future characters and collectors will appear as beings from distant galaxies, each carrying their own art, ideas, and technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounder;
