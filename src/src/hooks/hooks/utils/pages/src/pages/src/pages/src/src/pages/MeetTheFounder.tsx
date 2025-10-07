import React from "react";

const MeetTheFounder = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground px-6 pt-24 md:px-12">
      <section className="max-w-4xl mx-auto space-y-6 text-center">
        <h1 className="section-heading text-5xl">Noah Moses – Singer, Songwriter, and Creator of Noah’s Art</h1>
        <p className="text-lg text-muted-foreground">
          Hello, my name is Noah Moses. I am a singer-songwriter and programmer, and I created Noah’s Art, a living universe of characters with a wide range of musical styles and personalities.
        </p>
        <p className="text-lg text-muted-foreground">
          From Feathers, a blues-wailing peacock inspired by legends like Muddy Waters and Howlin’ Wolf, to Hoodlum, a rooster with a deep, husky rap style, each character has a story and a sound that comes to life through music and narrative.
        </p>
        <p className="text-lg text-muted-foreground">
          I am raising funds through Juicebox.money for early production rounds to bring albums and episodes to the quality I’ve envisioned. Funding will allow fully immersive, high-quality experiences for all characters.
        </p>
        <p className="text-lg text-muted-foreground">
          Within Noah’s ecosystem, several characters are represented as meme coins that provide utility and collectible value. Guardian Coin and Knight Coin are functional coins that help with staking, governance, and network interactions.
        </p>
        <p className="text-lg text-muted-foreground">
          The long-term vision is to expand Noah’s Protocol to welcome other creators with their own coins and ideas. Join Noah’s Art DAO to participate in building content, technology, and infrastructure together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="https://discord.gg/YOUR_DAO_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary via-primary to-accent px-6 py-3 text-sm font-semibold text-background shadow-aurora hover:-translate-y-0.5 transition-transform"
          >
            Join the DAO: Discord
          </a>
          <a
            href="mailto:noahmoses@proton.me"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:border-white/25 hover:bg-white/15 transition"
          >
            Contact Noah
          </a>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Arrival Concept: All who enter Noah’s Protocol arrive via a wormhole that finds them across multiverses. Future characters will be imagined animals from distant galaxies. You don’t find the wormhole — the wormhole finds you.
        </p>
      </section>
    </main>
  );
};

export default MeetTheFounder;
