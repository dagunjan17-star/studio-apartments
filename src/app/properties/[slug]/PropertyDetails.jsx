"use client";

import ContactPopup from "@/components/ContactPopup";
import PropertyCard from "@/components/PropertyCard";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { useProperty } from "@/contextapi/propertycontext";

export default function PropertyDetails({ propertyy }) {

  const [open, setOpen] = useState(false);
  const [relatedLoading, setRelatedLoading] = useState(true);

  const { properties: allProperties } = useProperty();

  /* ================= SHUFFLE ================= */

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  /* ================= RELATED ================= */

  const relatedProperties = useMemo(() => {
    if (!allProperties?.length) return [];

    const filtered = allProperties.filter(
      (p) =>
        p._id !== propertyy._id &&
        p.city?.toLowerCase() === propertyy.city?.toLowerCase()
    );

    return shuffleArray(filtered).slice(0, 30);
  }, [allProperties, propertyy]);

  /* ================= LOADING ================= */

  useEffect(() => {
    if (allProperties?.length > 0) {
      const timer = setTimeout(() => {
        setRelatedLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [allProperties]);

  return (

    <div className="bg-gradient-to-b from-white to-[#E6FFFA] text-gray-900 px-4 sm:px-6 py-14">

      <div className="max-w-7xl mx-auto">

        {/* ================= TOP GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-14 items-start">

          {/* IMAGE */}

          <div className="relative w-full h-[340px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">

            {propertyy?.media?.url ? (

              <Image
                src={propertyy.media.url}
                alt={propertyy?.title}
                fill
                priority
                className="object-cover transition duration-500 group-hover:scale-105"
              />

            ) : (

              <div className="flex items-center justify-center w-full h-full bg-[#E6FFFA] text-[#3BC1A8]">
                No Image Available
              </div>

            )}

          </div>

          {/* RIGHT CONTENT */}

          <div className="flex flex-col justify-between h-full">

            <div>

              <h1 className="text-3xl font-semibold text-gray-900">
                {propertyy?.title}
              </h1>

              <p className="text-gray-500 mt-2">
                {propertyy?.locality}
              </p>

              {/* META GRID */}

              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 text-sm border-t border-[#B2F5EA] pt-6">

                <Meta label="Category" value={propertyy?.propertyCategory} />
                <Meta label="Property Type" value={propertyy?.propertyType} />
                <Meta label="Listing Type" value={propertyy?.listingType} />
                <Meta label="City" value={propertyy?.city} />
                <Meta label="State" value={propertyy?.state} />

                {propertyy?.bedrooms > 0 && (
                  <Meta label="Bedrooms" value={propertyy?.bedrooms} />
                )}

                {propertyy?.bathrooms > 0 && (
                  <Meta label="Bathrooms" value={propertyy?.bathrooms} />
                )}

              </div>

            </div>

            {/* CTA */}

            <div className="mt-10">

              <button
                onClick={() => setOpen(true)}
                className="bg-gradient-to-r from-[#3BC1A8] to-[#249E94]
                hover:opacity-90
                text-white px-8 py-3 rounded-full text-sm font-medium
                shadow-lg transition"
              >
                Get Price Details
              </button>

            </div>

          </div>

        </div>

        {/* ================= DESCRIPTION ================= */}

        <section className="mt-20 border-t border-[#B2F5EA] pt-10">

          <h2 className="text-xl font-semibold text-gray-900">
            Studio Apartment Description
          </h2>

          <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed max-w-4xl">

            {propertyy?.description?.length > 0 ? (
              propertyy.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))
            ) : (
              <p>
                Premium studio apartment offering modern amenities, high rental yield,
                and excellent connectivity in Gurgaon’s prime location.
              </p>
            )}

          </div>

        </section>

        {/* ================= RELATED ================= */}

        <section className="mt-24">

          <h2 className="text-2xl font-semibold text-gray-900 mb-10">
            Related Studio Apartments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {relatedLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : relatedProperties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}

          </div>

        </section>

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={propertyy?.title}
      />

    </div>
  );
}

/* ================= META ================= */

function Meta({ label, value }) {
  return (
    <div>
      <div className="text-gray-400 text-xs uppercase tracking-wider">
        {label}
      </div>
      <div className="mt-1 font-medium text-gray-900">
        {value || "—"}
      </div>
    </div>
  );
}

/* ================= SKELETON ================= */

function SkeletonCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 animate-pulse shadow-sm">
      <div className="h-44 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-8 bg-gray-200 rounded mt-4"></div>
    </div>
  );
}