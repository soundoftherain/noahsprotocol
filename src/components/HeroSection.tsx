import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-beige min-h-[70vh] flex flex-col justify-center items-center px-4 py-16">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-kelly">
          Noah’s Art & The Vision of Noah’s Protocol
        </h1>
        <p className="text-brown text-lg mb-6">
          Noah’s Art is a Web3 entertainment universe where musicals, drama, and music live on the blockchain.
          Powered by Noah’s Protocol, it’s more than a story — it’s a decentralized creative ecosystem where NFTs, meme coins, and community-driven characters bring art to life.
        </p>
        <p className="text-neutral-800 text-base mb-10">
          <span className="font-semibold text-kelly">Creativity becomes community.</span> Artists, fans, and builders can collaborate, earn, and co-own the future of storytelling and music in a truly decentralized way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-kelly text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-kelly/90 transition">
            Join Noah’s Art DAO
          </button>
          <button className="bg-kelly text-white font-bold px-6 py-3 rounded-lg shadow opacity-60 cursor-not-allowed" disabled>
            Support Us on Juicebox (Coming Soon)
          </button>
        </div>
        <div className="flex justify-center gap-6 mb-8">
          {/* Placeholder icons. Swap with real icons if available */}
          <a href="#" title="Discord" className="inline-flex items-center justify-center w-10 h-10 bg-white text-kelly rounded-full shadow hover:scale-105 transition">
            <span className="sr-only">Discord</span>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 15s1-1 4-1 4 1 4 1" />
            </svg>
          </a>
          <a href="#" title="Twitter/X" className="inline-flex items-center justify-center w-10 h-10 bg-white text-kelly rounded-full shadow hover:scale-105 transition">
            <span className="sr-only">Twitter/X</span>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 4.01c-.77.35-1.6.58-2.47.69A4.15 4.15 0 0021.4 2.15a8.23 8.23 0 01-2.62 1c-.74-.8-1.8-1.3-2.98-1.3C11.6 1.85 9.79 3.7 10 5.76A11.7 11.7 0 013 2.6c-.38.66-.6 1.42-.6 2.23 0 1.54.79 2.9 2.01 3.7a4.13 4.13 0 01-1.88-.51v.05c0 2.15 1.52 3.94 3.53 4.34-.37.1-.75.16-1.15.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.96 2.97A8.32 8.32 0 012 19.54c-.65 0-1.27-.04-1.9-.11A11.76 11.76 0 006.29 21.5c7.55 0 11.7-6.26 11.7-11.7 0-.18 0-.36-.01-.54A8.18 8.18 0 0024 5.5a8.22 8.22 0 01-2.36.65 4.11 4.11 0 001.81-2.26z" />
            </svg>
          </a>
        </div>
        <p className="text-brown text-md">
          <span className="font-semibold text-kelly">Why Join?</span> Shape the future of music, storytelling, and community — and own a piece of it.
        </p>
      </div>
    </section>
  );
}