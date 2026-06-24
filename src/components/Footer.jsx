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

  // 🔥 mobile pe kam data dikha
  const initialCount = 19;

  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

  return (
    <footer className="bg-[#0b1120] py-10 px-4 border-t border-[#1a2238]">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 HEADING */}
        <div className="mb-8  sm:text-left sm:mx-0 mx-auto sm:w-auto w-full">

  <h2 className="text-xl sm:text-3xl font-bold text-white sm:text-left ">
    Studio Apartments in{" "}
    <span className="text-[#3BC1A8]">Gurgaon</span>
  </h2>

  <p className="text-gray-400 mt-2 text-sm sm:text-base sm:text-left ">
    Find studio apartments in prime Gurgaon locations.
  </p>

</div>

        {/* 🔥 GRID */}
        <div className="mb-8">
          <div className="
            grid 
            grid-cols-1
            sm:grid-cols-2 
            md:grid-cols-3 
            gap-x-4 gap-y-2
            text-sm
          ">

            {visibleLocations.map((loc, index) => (
              <Link
               
key={index}
  href={`https://www.dealacres.com/properties/studio-apartments-in-${createSlug(loc)}-gurgaon`}
  target="_blank"
  rel="noopener noreferrer"               
    className="text-gray-400 hover:text-[#3BC1A8] transition truncate"
              >
                {/* 🔥 SHORT TEXT */}
               Studio Apartments in {loc}
              </Link>
            ))}

          {locations.length > initialCount && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[#3BC1A8] text-sm hover:underline"
              >
                {showAll ? "View Less" : "View More"}
              </button>
            </div>
          )}
          </div>

          {/* 🔥 BUTTON */}
        </div>

        {/* 🔥 NAV */}
        <div className="border-t border-[#1a2238] pt-6 mb-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm">

            <Link href="/about" className="text-gray-400 hover:text-[#3BC1A8]">
              About
            </Link>

            <Link href="/blog" className="text-gray-400 hover:text-[#3BC1A8]">
              Blog
            </Link>

            <Link href="/contact" className="text-gray-400 hover:text-[#3BC1A8]">
              Contact
            </Link>

            <Link href="/how-it-works" className="text-gray-400 hover:text-[#3BC1A8]">
              How It Works
            </Link>

          </div>
        </div>

        {/* 🔥 COPYRIGHT */}
        <div className="border-t border-[#1a2238] pt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">

          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Studio Apartments In Gurgaon
          </p>

          <Link
            href="https://www.parcharmanch.com/"
            target="_blank"
            className="text-xs sm:text-sm text-[#3BC1A8]"
          >
           Desgined By:- Parchar Manch
          </Link>

        </div>

      </div>
    </footer>
  );
}