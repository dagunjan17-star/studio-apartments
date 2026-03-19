import React from "react";
import { headers } from "next/headers";
import BlogList from "./BlogList";

export async function generateMetadata() {

  const h = await headers();
  const domain = h.get("host") || "localhost";

  // remove www
  const cleanDomain = domain.replace(/^www\./, "");

  return {

    title: "Studio Apartments in Gurgaon Blog | Investment & ROI Guides",

    description:
      "Explore expert insights on studio apartments in Gurgaon, including rental income, ROI, best locations, and smart property investment strategies.",

    keywords: [
      "studio apartments in Gurgaon",
      "Gurgaon property investment blog",
      "rental income Gurgaon apartments",
      "ROI on studio apartments Gurgaon",
      "best areas to invest in Gurgaon",
      "Gurgaon real estate insights"
    ],

    alternates: {
      canonical: `https://${cleanDomain}/blog`
    },

  };
}

const page = () => {

  return (

    <div className="min-h-screen bg-gradient-to-b from-white to-[#E6FFFA]">

      <BlogList />

    </div>

  );

};

export default page;