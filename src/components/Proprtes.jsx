"use client";

import { useState } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import ViewDetailsButton from "./ViewDetailsButton";
import NearbyLocations from "./NearbyLocations";
import { useClickLimit } from "@/hooks/useClickLimit"; // Hook import

export default function Properties() {
  const { properties, loading, error, page, setPage, totalItems, itemsPerPage } = useProperty();
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  // Hook initialize
  const { handlePropertyClick } = useClickLimit();

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#E6FFFA]">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-[#B2F5EA]"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#3BC1A8] border-r-[#249E94] animate-spin"></div>
        </div>
        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">Loading Premium Studio Apartments...</p>
      </div>
    );
  }

  if (error) return <p className="text-center py-20 text-red-500">Something went wrong while loading properties.</p>;

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800">No Studio Apartments Available in Gurgaon</h2>
      </div>
    );
  }

  return (
    <section className="bg-[#F0FDFA] px-4 py-16">
      
      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Premium Studio Apartments in Gurgaon</h2>
        <p className="mt-4 text-gray-500 max-w-2xl">Discover high-return studio apartments in Gurgaon’s prime locations.</p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#3BC1A8] to-[#249E94] mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {properties.map((property, index) => {
            // Slug logic for "Explore More"
            const typeSlug = property.propertyType ? property.propertyType.toLowerCase().trim().replace(/[\s\W-]+/g, '-') : "studio-apartment";
            const exploreLink = `https://www.dealacres.com/properties/${typeSlug}-for-sale-in-gurgaon`;

            return (
              <div key={property._id}>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 md:h-[280px]">
                  <div className="flex flex-col md:flex-row h-full">
                    
                    {/* IMAGE */}
                    <div className="relative md:w-[35%] overflow-hidden">
                      <Image
                        src={property?.media?.url || "/no-image.png"}
                        unoptimized alt={property.title} width={600} height={400}
                        className="w-full h-60 md:h-full object-cover"
                      />
                      <span onClick={() => { handlePropertyClick(); setSelectedProperty(property.title); setOpen(true); }}
                        className="absolute top-4 left-0 bg-gradient-to-r from-[#3BC1A8] to-[#249E94] text-white text-xs md:text-sm px-3 py-1 font-semibold shadow-lg rounded-r-full cursor-pointer">
                        {property.propertyType}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold text-gray-900">{property.title}</h2>
                       <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243A8 8 0 1117.657 16.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    {property.locality}
                  </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 border-b pb-4">
                        <p className="text-sm text-gray-500">STATUS : <span className="font-semibold text-[#3BC1A8]">Available</span></p>
                        <p className="text-sm text-gray-500">TYPE : <span className="font-semibold text-gray-800">{property.propertyCategory}</span></p>
                      </div>

                     <div className="flex flex-col md:flex-row justify-between items-center  mt-w pt-4 gap-4">

                    <button
                      onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                      className="border border-[#3BC1A8] text-[#3BC1A8] px-5 py-2 rounded-lg hover:bg-[#E6FFFA] transition w-full md:w-auto font-medium cursor-pointer"
                    >
                      Get Price Details
                    </button>
                    <ViewDetailsButton className="bg-gradient-to-r from-[#3BC1A8] to-[#249E94] text-white px-6 py-2 rounded-lg hover:opacity-90 transition w-full md:w-auto text-center font-medium"

                      slug={property.slug}
                      href={`https://www.dealacres.com/property/${property.slug}`}/>
                   

                  </div>

                      {/* EXPLORE MORE & FREE SELL */}
                      <div className="border-t border-gray-100 mt-5 pt-4 flex justify-between items-center text-sm text-gray-500 font-medium">
                        <Link href={exploreLink} target="_blank" onClick={handlePropertyClick} className="group flex items-center gap-1">
                          <h4 className="font-semibold text-gray-700 group-hover:text-[#249E94] transition-colors underline-offset-2 hover:underline">Explore more</h4>
                          <span className="text-[#249E94] group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <div className="h-4 w-px bg-gray-300 mx-2"></div>
                        <Link href="https://www.dealacres.com/sell-property" target="_blank" onClick={handlePropertyClick} className="group flex items-center gap-1">
                          <h4 className="font-semibold text-gray-700 group-hover:text-[#249E94] transition-colors underline-offset-2 hover:underline">Free Property Post</h4>
                          <span className="text-[#249E94] group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {(index + 1) % 10 === 0 && <NearbyLocations blockIndex={Math.floor(index / 10)} />}
              </div>
            );
          })}

          <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} currentPage={page} 
            onPageChange={(p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-1 sticky top-28">
          <SidebarEnquiryForm />
        </div>
      </div>
      <ContactPopup isOpen={open} onClose={() => setOpen(false)} propertyTitle={selectedProperty} />
    </section>
  );
}