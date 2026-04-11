"use client";

import { useState } from "react";
import Link from "next/link";

import { locations } from "../data/locations";

const createSlug = (location) => {
  return location
    .replace(", Gurgaon", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {

  const [showAll, setShowAll] = useState(false);
  const initialCount = 40;

  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

  return (

    <footer className="bg-[#0b1120] pt-16 pb-8 px-4 border-t border-[#1a2238]">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
{/* 🔥 TOP HEADING */}
<div className="mb-12 ">

  <h2 className="text-2xl sm:text-3xl font-bold text-white">
    Explore Studio Apartments in{" "}
    <span className="text-[#3BC1A8]">Gurgaon</span>
  </h2>

  <p className="text-gray-400 mt-3 max-w-2xl  text-sm sm:text-base">
    Discover modern studio apartments in prime Gurgaon locations,
    ideal for working professionals and smart investments.
  </p>

  <div className="w-20 h-1 bg-[#3BC1A8]  mt-5 rounded-full"></div>

</div>
        <div className="mb-10 ">

          <h3 className="text-2xl font-semibold text-white">
            Explore Studio Apartments by Location
          </h3>

          

        </div>

        

        <div className="mb-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-sm">

            {visibleLocations.map((loc, index) => (

              <div key={index} className="relative group">

                <Link
                  href={`/studio-apartments-in-${createSlug(loc)}-gurgaon`}
                  className="block truncate text-gray-400 hover:text-[#3BC1A8] transition duration-300"
                >
                  Studio Apartments in {loc},Gurgaon
                </Link>

                {/* TOOLTIP */}

                <div className="
                absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                transition-all duration-200 whitespace-nowrap
                bg-[#111827] text-white text-xs
                px-3 py-1.5 rounded-md shadow-lg
                border border-[#3BC1A8]/40 z-[9999]
                pointer-events-none">

                  Studio Apartments in {loc},Gurgaon

                </div>

              </div>

            ))}

            {/* VIEW MORE / LESS */}

            {!showAll && locations.length > initialCount && (

              <div>
                <span
                  onClick={() => setShowAll(true)}
                  className="block cursor-pointer text-[#3BC1A8] hover:underline"
                >
                  View More...
                </span>
              </div>

            )}

            {showAll && locations.length > initialCount && (

              <div>
                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-[#3BC1A8] hover:underline"
                >
                  View Less...
                </span>
              </div>

            )}

          </div>

        </div>

        {/* FOOTER BOTTOM */}
{/* 🔥 Bottom Navigation Buttons - CENTER */}
<div className="border-t border-[#1a2238] pt-6 mt-10 mb-6">
  <div className="flex justify-center items-center">

    <div className="flex flex-wrap gap-6 justify-center text-sm">
      <Link
        href="/about"
        className="text-gray-400 hover:text-[#3BC1A8] transition"
      >
        About
      </Link>

      <Link
        href="/blog"
        className="text-gray-400 hover:text-[#3BC1A8] transition"
      >
        Blog
      </Link>

      <Link
        href="/contact"
        className="text-gray-400 hover:text-[#3BC1A8] transition"
      >
        Contact
      </Link>

      <Link
        href="/how-it-works"
        className="text-gray-400 hover:text-[#3BC1A8] transition"
      >
        How It's Work
      </Link>
    </div>

  </div>
</div>
        <div className="border-t border-[#1a2238] pt-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Studio Apartments Gurgaon - All rights reserved
          </p>

          <p className="text-sm text-gray-500 mt-3 md:mt-0">
            Designed By - {" "}
            <Link
              href="https://www.parcharmanch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3BC1A8] hover:underline"
            >
              Parchar Manch
            </Link>
          </p>

        </div>

      </div>

    </footer>

  );

}