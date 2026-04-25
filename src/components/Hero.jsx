"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      toast.error("Phone must be 10 digits");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Enquiry Submitted!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error("Try again");
      }
    } catch {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
<section className="relative w-full min-h-[75vh] md:min-h-[75vh] flex items-start md:items-center pt-6 pb-10 md:py-6">
      
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
          alt="studio apartments in gurgaon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4">

        
        <div className="text-white">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Studio Apartments <br />
            <span className="text-[#3BC1A8]">in Gurgaon</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-md">
            Invest in premium studio apartments in Gurgaon with assured rental income,
            modern amenities, and prime connectivity. Perfect for investors & working professionals.
          </p>

          <div className="mt-6 flex gap-6 text-sm text-gray-300 flex-wrap">
            <span>✔ Assured Rental Income</span>
            <span>✔ Prime Locations</span>
            <span>✔ Fully Furnished</span>
            <span>✔ High ROI Investment</span>
          </div>
<Link href="/how-it-works">
  <button className="relative overflow-hidden bg-white text-[#3BC1A8] px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105 mt-4 cursor-pointer">
    
    <span className="relative z-10">Learn More</span>

    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
  
  </button>
</Link>
        </div>

        {/* RIGHT FORM */}
        <div className="flex justify-center md:justify-end">

          <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">

            <h2 className="text-xl font-semibold text-gray-900">
              Get Best Investment Deals
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              Fill your details & get instant callback from property expert
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300
                text-gray-900 placeholder-gray-500
                focus:ring-2 focus:ring-[#3BC1A8]
                outline-none"
              />

              <input
                name="phone"
                required
                inputMode="numeric"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300
                text-gray-900 placeholder-gray-500
                focus:ring-2 focus:ring-[#3BC1A8]
                outline-none"
              />

              <textarea
                rows="3"
                name="message"
                placeholder="Your Requirement (Budget / Location)"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300
                text-gray-900 placeholder-gray-500
                focus:ring-2 focus:ring-[#3BC1A8]
                outline-none resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-md font-semibold
                bg-[#3BC1A8] hover:bg-[#249E94]
                text-white transition"
              >
                {loading ? "Submitting..." : "Get Callback"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;