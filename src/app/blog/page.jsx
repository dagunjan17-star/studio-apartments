import React from "react";
import BlogList from "./BlogList";

export const metadata = {
  title: "Blog | Studio Apartments in Gurgaon | Investment Tips & ROI Guides",

  description:
    "Read expert blogs on studio apartments in Gurgaon — investment guides, rental income tips, best locations, ROI insights & market trends for studio flats & 1RK apartments in Gurugram. Stay updated before you invest.",

  keywords: [
   "studio apartment Gurgaon blog", "studio flat investment guide Gurgaon", "1RK apartment tips Gurgaon", "studio apartment ROI Gurgaon", "rental income studio apartment Gurgaon", "best location studio apartment Gurgaon", "studio apartment market trends Gurgaon", "furnished apartment investment blog Gurgaon", "studio flat buying guide Gurugram", "compact apartment tips Gurgaon", "studio apartment price trends Gurgaon", "property investment blog Gurgaon", "studio apartment news Gurugram", "high ROI apartment Gurgaon blog", "real estate studio apartment Gurgaon 2026"
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