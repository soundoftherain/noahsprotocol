import React from "react";
import { timelineEvents, upcomingDrops } from "../data/noahs-art";
import NftButton from "../components/NftButton";

const Home: React.FC = () => {
  return (
    <main className="p-8 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Noah’s Ark: a universe where memes evolve, coins connect, and culture comes alive.</h1>
        <p className="text-xl text-muted-foreground">Built on Ethereum, sailing toward Guardian seas.</p>
      </header>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Timeline & Episodes</h2>
        <div className="space-y-6">
          {timelineEvents.map((event) => (
            <div key={event.id} className="p-6 border rounded-xl bg-card text-card-foreground">
              <h3 className="font-bold text-xl">{event.title}</h3>
              <p className="mt-2">{event.description}</p>
              <p className="mt-1 italic">{event.timestamp}</p>
              <p className="mt-1">Phase: {event.polarity}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Upcoming NFT Episodes</h2>
        <div className="space-y-6">
          {upcomingDrops.map((drop) => (
            <div key={drop.episode} className="p-6 border rounded-xl bg-card text-card-foreground space-y-2">
              <h3 className="font-bold text-xl">{drop.episode} – {drop.title}</h3>
              <p>{drop.release}</p>
              <p>{drop.synopsis}</p>
              {drop.nftAccess && <p className="font-semibold">Aura / Access: {drop.nftAccess}</p>}
              <NftButton onClick={() => alert(`Buy ${drop.episode} NFT placeholder`)} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
