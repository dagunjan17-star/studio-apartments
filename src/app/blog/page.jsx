import React from "react";
import BlogList from "./BlogList";

export const metadata = {
  title: "Studio Apartments in Gurgaon Blog | Investment & ROI Guides",

  description:
    "Explore expert insights on studio apartments in Gurgaon, including rental income, ROI, best locations, and smart property investment strategies.",

  keywords: [
    "studio apartments in Gurgaon",
    "Gurgaon property investment blog",
    "rental income Gurgaon apartments",
    "ROI on studio apartments Gurgaon",
    "best areas to invest in Gurgaon",
    "Gurgaon real estate insights",
  ],

  alternates: {
    canonical: "www.studioapartmentsingurgaon.com/blog", // 👉 apna domain daal dena
  },
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E6FFFA]">
      <BlogList />
    </div>
  );
};

export default Page;