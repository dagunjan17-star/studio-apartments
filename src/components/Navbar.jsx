"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex items-center justify-between h-[70px]">

            {/* LOGO */}

            <Link
              href="/"
              className="text-lg sm:text-xl font-semibold tracking-tight"
            >
              <span className="text-gray-900">Studio Apartments</span>{" "}
              <span className="text-[#3BC1A8]">Gurgaon</span>
            </Link>

            {/* ================= DESKTOP LINKS ================= */}

            <div className="hidden md:flex items-center gap-8">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-sm font-medium text-gray-600 hover:text-[#3BC1A8] transition"
                >
                  {link.name}
                </Link>
              ))}

              {/* CTA BUTTON */}

              <Link
                href="/contact"
                className="ml-4 px-5 py-2 rounded-md text-sm font-medium
                bg-[#3BC1A8]
                text-white
                hover:bg-[#249E94]
                transition shadow-md"
              >
                Get Callback
              </Link>

            </div>

            {/* ================= MOBILE TOGGLE ================= */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>

        </div>

      </nav>

      {/* ================= MOBILE MENU ================= */}

      {isOpen && (
        <div className="fixed top-[70px] left-0 w-full z-40 md:hidden bg-white border-t border-gray-200">

          <div className="flex flex-col gap-6 p-6">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-[#3BC1A8] transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-2 px-5 py-3 rounded-md text-sm font-medium
              bg-[#3BC1A8] text-white hover:bg-[#249E94] transition text-center"
            >
              Get Callback
            </Link>

          </div>

        </div>
      )}

    </>
  );
};

export default Navbar;