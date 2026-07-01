"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "What is a studio apartment and how is it different from a 1BHK in Gurgaon?",
    answer:
      "A studio apartment is a single open-plan room combining the sleeping, living, and kitchen areas without a separate bedroom wall. A 1BHK has a distinctly separate bedroom. Studios are smaller (300-500 sq ft) and generally cheaper than 1BHKs.",
  },
  {
    question:
      "What is the price of a studio apartment for sale in Gurgaon?",
    answer:
      "Studio apartments for sale in Gurgaon range from ₹20-30 lakh in affordable peripheral sectors to ₹60-1.2 crore for premium or serviced studios near DLF Cyber City, Golf Course Road, or MG Road.",
  },
  {
    question:
      "What is the rent for a studio apartment in Gurgaon?",
    answer:
      "Studio apartment rents in Gurgaon start at ₹10,000-14,000/month in basic sectors and go up to ₹40,000-70,000/month for fully furnished, premium serviced studios near corporate hubs.",
  },
  {
    question:
      "Are studio apartments in Gurgaon a good investment?",
    answer:
      "Yes. Studio apartments deliver the highest rental yields in Gurgaon's residential market (5-7% annually) due to strong demand from single professionals, low entry price, and high occupancy rates near corporate zones.",
  },
  {
    question:
      "Which areas in Gurgaon have the best studio apartments?",
    answer:
      "Best studio apartment locations include sectors near DLF Cyber City, MG Road, Golf Course Road, Sector 49-50, Sohna Road mid-segment zones, and areas near HUDA City Centre metro station.",
  },
  {
    question:
      "Are furnished studio apartments available for rent in Gurgaon?",
    answer:
      "Yes, fully furnished studio apartments are widely available in Gurgaon, especially as serviced apartments and professionally managed residential units near corporate offices. These are ideal for short-term and corporate tenants.",
  },
  {
    question:
      "Can I live comfortably in a studio apartment in Gurgaon?",
    answer:
      "Absolutely, if you're a single professional or a couple without children. Modern studio apartments in Gurgaon are intelligently designed with efficient storage, modular kitchens, and multi-functional furniture to maximise comfort.",
  },
  {
    question:
      "Are studio apartments allowed in all residential zones in Gurgaon?",
    answer:
      "Studio apartments are permitted in group housing projects approved for multi-unit residential development. Some older residential sectors may restrict very small unit sizes. Always check DTCP and RERA approvals for any studio project.",
  },
  {
    question:
      "What amenities should I look for in a studio apartment project in Gurgaon?",
    answer:
      "Priority amenities for studio apartment dwellers include high-speed Wi-Fi infrastructure, laundry room or in-unit washer-dryer provision, 24/7 security, power backup, gym access, and proximity to metro, food delivery hubs, and daily needs stores.",
  },
  {
    question:
      "Can I sublet a studio apartment in Gurgaon on Airbnb or short-term platforms?",
    answer:
      "Short-term subletting via Airbnb in Gurgaon is technically possible but requires explicit landlord permission and may be restricted by society bylaws. MCG regulations on short-term commercial use of residential properties may also apply.",
  },
];

export default function GurgaonRealEstateSection() {
  const [openIndex, setOpenIndex] = useState(0);
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
  return (
    <>
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
   <section className="relative overflow-hidden bg-white py-10 px-4 sm:px-6">

  {/* Background Lights */}
  <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#3BC1A8]/10 blur-3xl" />

  <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#3BC1A8]/10 blur-3xl" />

  {/* Border Circles */}
  <div className="absolute top-16 left-10 h-24 w-24 rounded-full border border-[#3BC1A8]/20" />

  <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full border border-[#3BC1A8]/10" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Main Content Box */}
    <div className="rounded-[34px] border border-blue-100 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/70 p-8 md:p-14 shadow-[0_20px_60px_rgba(0,70,255,0.08)]">

      {/* Heading */}
      <h2 className="text-xl md:text-4xl font-bold leading-tight text-gray-900 max-w-5xl">
        About
        <span className="text-[#3BC1A8]">
          {" "}Gurgaon Real Estate
        </span>
      </h2>

      {/* Paragraphs */}
      <div className="mt-8 space-y-7">

        <p className="text-lg leading-9 text-gray-600">
Studio apartments represent one of the fastest-growing residential property segments in Gurgaon, a development driven by the city's evolving demographic profile and changing lifestyle preferences. The substantial influx of single working professionals from across India — drawn by Gurgaon's unmatched corporate employment opportunities — has created robust demand for compact, self-contained living spaces that prioritise location and convenience over size. Developer response to this demand has been swift: studio and 1BHK compact apartment projects have been launched across micro-markets including Sector 49, 50, 65, and the DLF Phase 2-3 periphery, as well as in serviced apartment formats catering to corporate tenants. Studio apartments in Gurgaon are available in multiple formats: traditional open-plan studios, loft-style studios in newer developments, and serviced studios within managed buildings offering hotel-like amenities. Rents range from ₹10,000-15,000/month in peripheral locations to ₹35,000-60,000/month for premium furnished studios near Cyber City or Golf Course Road. From an investment perspective, studio apartments in Gurgaon offer the highest rental yield in the residential segment (often 5-7%), given their relatively low purchase price and consistently strong demand. As Gurgaon's population continues to grow and the professional workforce expands, studio apartments are positioned as both a lifestyle product and a high-performing investment asset.        </p>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="mt-14">

      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h3>

        <p className="mt-2 text-gray-500">
          Everything you need to know before renting a flat in Gurgaon.
        </p>
      </div>

      <div className="space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                isOpen
                  ? "border-[#3BC1A8]/30 shadow-[0_10px_40px_rgba(0,70,255,0.10)]"
                  : "border-gray-200 hover:border-[#3BC1A8]/20"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <h4
                  className={`text-base md:text-lg font-semibold transition ${
                    isOpen
                      ? "text-[#3BC1A8]"
                      : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h4>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-[#3BC1A8] rotate-180"
                      : "bg-[#3BC1A8]/10"
                  }`}
                >
                  <ChevronDown
                    size={18}
                    className={`${
                      isOpen
                        ? "text-white"
                        : "text-[#3BC1A8]"
                    }`}
                  />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-6 py-5 text-gray-600 leading-7 bg-gradient-to-b from-[#3BC1A8]/[0.03] to-transparent">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </div>
</section>
</>
  );
}