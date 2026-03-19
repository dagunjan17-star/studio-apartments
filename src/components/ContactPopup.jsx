"use client";

import { useState } from "react";

export default function ContactPopup({ isOpen, onClose, propertyTitle }) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

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

    setError("");

    if (formData.phone.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    try {

      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          propertyTitle,
          source: "Popup Studio Enquiry",
        }),
      });

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();

      if (data.success) {

        setFormData({ name: "", phone: "", message: "" });

        alert("Enquiry Submitted Successfully!");

        onClose();

      } else {

        setError("Something went wrong. Please try again.");

      }

    } catch (err) {

      setError("Server error. Please try again later.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative border border-gray-100">

        {/* CLOSE BUTTON */}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#3BC1A8] text-xl transition"
        >
          ×
        </button>

        {/* HEADING */}

        <h3 className="text-2xl font-semibold text-gray-900">
          Get Best Price Details
        </h3>

        <p className="text-sm text-gray-600 mt-3 mb-7 leading-relaxed">

          Enquiry for:

          <span className="block font-medium text-[#3BC1A8] mt-1">
            {propertyTitle}
          </span>

        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}

          <input
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl
            bg-white text-gray-900 placeholder-gray-400
            focus:ring-2 focus:ring-[#3BC1A8] focus:border-[#3BC1A8]
            outline-none transition"
          />

          {/* PHONE */}

          <input
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl
            bg-white text-gray-900 placeholder-gray-400
            focus:ring-2 focus:ring-[#3BC1A8] focus:border-[#3BC1A8]
            outline-none transition"
          />

          {/* MESSAGE */}

          <textarea
            name="message"
            rows="4"
            placeholder="Your Requirement (Budget / Location / ROI)"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl
            bg-white text-gray-900 placeholder-gray-400
            focus:ring-2 focus:ring-[#3BC1A8] focus:border-[#3BC1A8]
            outline-none resize-none transition"
          />

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3
            bg-gradient-to-r from-[#3BC1A8] to-[#249E94]
            hover:opacity-90
            text-white font-semibold rounded-xl
            transition shadow-md disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Get Callback"}
          </button>

        </form>

        {/* TRUST LINE */}

        <p className="text-xs text-gray-400 mt-4 text-center">
          🔒 Secure • No Spam • Instant Response
        </p>

      </div>

    </div>

  );

}