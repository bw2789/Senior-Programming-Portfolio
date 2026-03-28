'use client';
import React from 'react';
import { LetterCollision } from '../components/LetterCollision'; // adjust path if needed

export default function Home() {
  return (
    <div className="overflow-x-hidden min-h-[200vh] flex flex-col items-start justify-start pt-40 px-8 md:px-16 bg-white dark:bg-black">
      <LetterCollision />
      {/* You can add more sections, hero images, or content below */}
      <section className="mt-32 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Welcome to My Portfolio
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Scroll down to see each letter animate individually with GSAP + ScrollTrigger.
        </p>
      </section>
    </div>
  );
}