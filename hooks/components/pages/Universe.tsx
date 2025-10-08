import React from "react";
import { timelineEvents, characters, memeCoins, upcomingDrops } from "../noahs-art";

const Universe = () => {
  return (
    <div>
      <h1>Universe Overview</h1>
      <h2>Timeline Events</h2>
      {timelineEvents.map((e) => (
        <div key={e.id}>
          <h3>{e.title}</h3>
          <p>{e.description}</p>
          <p>{e.timestamp} – {e.polarity}</p>
        </div>
      ))}
    </div>
  );
};

export default Universe;
