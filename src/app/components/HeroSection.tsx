// import React from 'react'

// const HeroSection = () => {
//   return (
//     <div>
//       <div></div>
//       <div></div>
//     </div>
//   )
// }

// export default HeroSection
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-20 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left - Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full shadow-2xl">
            {/* <Image
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
              alt="Event hero"
              fill
              className="object-cover"
              priority
            /> */}
            {/* Overlay gradient */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" /> */}
          </div>
        </div>

        {/* Right - Text */}
        <div className="flex flex-col gap-8">
          {/* Tag */}
          <span className="inline-flex w-fit items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold px-4 py-2 rounded-full tracking-widest uppercase">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Live Events Near You
          </span>

          {/* Heading */}
          <h1 className="text-5xl">
            Discover Events That Move You
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-md">
            From intimate concerts to massive festivals — find, register, and
            experience events curated just for you. Your next unforgettable
            moment is one click away.
          </p>

        

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/explore-events"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
            >
              Explore Events
            </Link>
            <Link
              href="/create-event"
              className="border border-white/20 hover:border-orange-500 text-white hover:text-orange-400 font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Host an Event
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}