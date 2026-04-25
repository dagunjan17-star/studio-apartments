"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-[#E6FFFA] px-4 py-24">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              About{" "}
              <span className="text-[#3BC1A8]">
                Studio Apartments Gurgaon
              </span>
            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed text-lg max-w-xl">
              Discover premium studio apartments in Gurgaon with high rental
              returns, modern amenities, and excellent connectivity. Whether
              you're a first-time buyer or a smart investor, explore the best
              opportunities in Gurgaon’s fastest-growing locations.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/"
                className="px-6 py-3 rounded-full text-sm font-semibold
                bg-gradient-to-r from-[#3BC1A8] to-[#249E94]
                text-white shadow-lg hover:opacity-90 transition"
              >
                Explore Apartments
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full text-sm font-semibold
                border border-[#3BC1A8] text-[#3BC1A8]
                hover:bg-[#E6FFFA] transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT STATS CARD */}
          <div className="bg-white border border-[#B2F5EA] rounded-3xl p-12 shadow-xl">

            <h3 className="text-4xl font-bold text-[#249E94]">
              1000+
            </h3>
            <p className="text-gray-600 mt-2">
              Verified Studio Apartments Listed
            </p>

            <div className="h-px bg-[#B2F5EA] my-8"></div>

            <h3 className="text-4xl font-bold text-[#249E94]">
              150+
            </h3>
            <p className="text-gray-600 mt-2">
              Premium Builder Projects
            </p>

            <div className="h-px bg-[#B2F5EA] my-8"></div>

            <h3 className="text-4xl font-bold text-[#249E94]">
              3000+
            </h3>
            <p className="text-gray-600 mt-2">
              Happy Investors & Buyers
            </p>

          </div>
        </div>


        {/* OUR MISSION */}
        <div className="text-center max-w-4xl mx-auto mb-28">

          <h2 className="text-3xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            Studio apartments in Gurgaon are one of the fastest-growing real
            estate investment opportunities today. Our mission is to help buyers
            and investors discover high-return properties with verified listings
            and trusted guidance.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            From affordable investment units to premium serviced apartments in
            key locations like Golf Course Extension Road, Sohna Road, and
            Dwarka Expressway — we bring you the best opportunities in Gurgaon.
          </p>

        </div>


        {/* WHY CHOOSE US */}
        <div className="mb-32">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white rounded-2xl p-10 border border-[#B2F5EA] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                High ROI Investment Options
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Discover studio apartments with strong rental demand and
                excellent return on investment in Gurgaon’s prime locations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-[#B2F5EA] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Verified Listings & Trusted Deals
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All listings are verified for authenticity, helping you make
                safe and confident property investment decisions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-[#B2F5EA] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Expert Guidance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our property experts help you choose the right investment based
                on budget, location, and expected rental returns.
              </p>
            </div>

          </div>

        </div>


        {/* CTA */}
        <div className="bg-gradient-to-r from-[#3BC1A8] to-[#249E94] rounded-3xl p-16 text-center text-white shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find the Perfect Studio Apartment
          </h2>

          <p className="text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Explore premium studio apartments in Gurgaon with high rental
            returns, modern lifestyle amenities, and excellent connectivity.
          </p>

          <Link
            href="/"
            className="bg-white text-[#249E94] px-8 py-3 rounded-full font-semibold
            hover:bg-gray-100 transition shadow-md"
          >
            Explore Now
          </Link>

        </div>

      </div>
    </section>
  );
}