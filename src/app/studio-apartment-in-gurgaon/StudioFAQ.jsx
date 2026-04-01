"use client";
import { useState } from "react";

export default function StudioFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "1. Is buying a studio apartment in Gurgaon a good investment?",
      a: "Yes, it is a good investment because demand is high. Many working professionals prefer small homes. A studio apartment in Gurgaon can give good rental income and future price growth.",
    },
    {
      q: "2. What is the average price of a studio apartment in Gurgaon?",
      a: "Prices vary by location and size. Prime areas are costly, while new areas are affordable. You can compare multiple affordable studio apartment Gurgaon listings on our platform.",
    },
    {
      q: "3. Can I buy a studio apartment without a broker?",
      a: "Yes, our platform allows direct buyer-seller interaction. This means no middleman and no extra charges when buying a studio flat in Gurgaon.",
    },
    {
      q: "4. What types of studio apartments are available?",
      a: "You can find furnished, semi-furnished, and unfurnished options. Choose based on your need when searching for a fully furnished studio apartment Gurgaon.",
    },
    {
      q: "5. Are studio apartments good for rental income?",
      a: "Yes, they are very popular among tenants. A ready to move studio apartment Gurgaon can give steady rental income.",
    },
    {
      q: "6. How do I verify a property listing?",
      a: "Always use a trusted platform with verified listings. Visit the property and check documents before buying a studio apartment in Gurgaon.",
    },
    {
      q: "7. Which areas are best for studio apartments in Gurgaon?",
      a: "Areas like Sohna Road and Sector 57 are popular. These locations have high demand for compact apartments in Gurgaon.",
    },
    {
      q: "8. What documents are needed to buy a studio apartment?",
      a: "You need a sale deed, ID proof, and property papers. Always verify everything before buying a studio apartment in Gurgaon.",
    },
    {
      q: "9. Can I sell my studio apartment for free?",
      a: "Yes, you can use free property listing on our platform. This helps you connect with buyers easily for your studio apartment for sale in Gurgaon.",
    },
    {
      q: "10. Why should I choose your platform?",
      a: "Because we offer trusted listings, direct contact, no middleman, and simple process. You can find all properties in one place and make a safe decision.",
    },
  ];

  return (
    <section className="bg-[#F0FDFA] py-4 px-4 md:px-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#249E94]">
          FAQs – Studio Apartment in Gurgaon
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`border border-teal-200 rounded-xl px-4 py-3 cursor-pointer transition-all duration-300
                ${
                  isOpen
                    ? "bg-teal-100 shadow-md"
                    : "bg-white hover:shadow-lg"
                }`}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-black">
                    {faq.q}
                  </span>

                  <span
                    className={`text-black transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}