"use client";

import { useState } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";

export default function Properties() {

  const { properties, loading, error } = useProperty();

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 150;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentProperties = properties?.slice(indexOfFirst, indexOfLast);

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#E6FFFA]">

        <div className="relative w-14 h-14">

          <div className="absolute inset-0 rounded-full border-4 border-[#B2F5EA]"></div>

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#3BC1A8] border-r-[#249E94] animate-spin"></div>

        </div>

        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading Premium Studio Apartments...
        </p>

      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-500">
        Something went wrong while loading properties.
      </p>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">

        <h2 className="text-2xl font-semibold text-gray-800">
          No Studio Apartments Available in Gurgaon
        </h2>

        <p className="text-gray-500 mt-2">
          New premium listings will be updated soon.
        </p>

      </div>
    );
  }

  return (

    <section className="bg-[#F0FDFA] px-4 py-16">

      {/* ================= HEADING ================= */}

      <div className="max-w-7xl mx-auto mb-14">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Premium Studio Apartments in Gurgaon
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl">
          Discover high-return studio apartments in Gurgaon’s prime locations.
          Ideal for investors seeking rental income and professionals looking
          for modern, fully furnished living spaces.
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-[#3BC1A8] to-[#249E94] mt-6 rounded-full"></div>

      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ================= LEFT LIST ================= */}

        <div className="lg:col-span-2 space-y-10">

          {currentProperties.map((property) => (

            <div
              key={property._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 md:h-[250px]"
            >

              <div className="flex flex-col md:flex-row h-full">

                {/* IMAGE */}

                <div className="relative md:w-[35%] overflow-hidden">

                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    unoptimized
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-60 md:h-full object-cover"
                  />

                  {/* Ribbon */}

                  <span
                    onClick={() => {
                      setSelectedProperty(property.title);
                      setOpen(true);
                    }}
                    className="
                    absolute top-4 left-0
                    bg-gradient-to-r from-[#3BC1A8] to-[#249E94]
                    text-white
                    text-xs md:text-sm
                    px-3 py-1
                    font-semibold
                    shadow-lg
                    rounded-r-full
                    tracking-wide cursor-pointer
                  "
                  >
                    {property.propertyType}
                  </span>

                </div>

                {/* CONTENT */}

                <div className="p-6 flex-1 flex flex-col">

                  <h2 className="text-xl font-bold text-gray-900">
                    {property.title}
                  </h2>

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

                  {/* DETAILS */}

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 relative">

                    <div className="relative">

                      <p className="text-sm text-gray-500">
                        STATUS :{" "}
                        <span className="font-semibold text-[#3BC1A8] text-md">
                          Available
                        </span>
                      </p>

                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gray-300"></div>

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        TYPE :
                        <span className="font-semibold text-gray-800 text-md">
                          {" "}
                          {property.propertyCategory}
                        </span>
                      </p>

                    </div>

                  </div>

                  {/* <p className="text-gray-500 text-sm mt-4 line-clamp-2 leading-relaxed">
                    {property.description ||
                      "Premium studio apartment with high rental yield, located in a prime Gurgaon area with excellent connectivity."}
                  </p> */}

                  <div className="flex-1"></div>

                  {/* BUTTONS */}

                  <div className="flex flex-col md:flex-row justify-between items-center border-t mt-6 pt-4 gap-4">

                    <button
                      onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                      className="border border-[#3BC1A8] text-[#3BC1A8] px-5 py-2 rounded-lg hover:bg-[#E6FFFA] transition w-full md:w-auto font-medium cursor-pointer"
                    >
                      Get Price Details
                    </button>

                    <Link
                      href={`/properties/${property.slug}`}
                      className="bg-gradient-to-r from-[#3BC1A8] to-[#249E94] text-white px-6 py-2 rounded-lg hover:opacity-90 transition w-full md:w-auto text-center font-medium"
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          ))}

          {/* ================= PAGINATION ================= */}

          <Pagination
            totalItems={properties.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />

        </div>

        {/* ================= SIDEBAR ================= */}

        <div className="lg:col-span-1 sticky top-28">
          <SidebarEnquiryForm />
        </div>

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />

    </section>
  );
}