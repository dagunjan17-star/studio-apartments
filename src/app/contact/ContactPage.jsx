"use client"

import { useState } from "react"
import Image from "next/image"
import AlertPopup from "@/components/AlertPopup"
import Breadcrumb from "@/components/Breadcrumb";
export default function Page() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : ""

  const handleChange = (e) => {

    const { name, value } = e.target

    if (name === "phone") {

      if (!/^\d*$/.test(value)) return

      if (value.length > 10) return

    }

    setFormData({
      ...formData,
      [name]: value,
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (formData.phone.length !== 10) {

      setPopup({
        open: true,
        type: "error",
        message: "Phone number must be 10 digits",
      })

      return

    }

    setLoading(true)

    try {

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          website,
        }),
      })

      const result = await res.json()

      if (result.success) {

        setPopup({
          open: true,
          type: "success",
          message: "Your enquiry has been submitted!",
        })

        setFormData({
          name: "",
          phone: "",
          message: "",
        })

      } else {

        setPopup({
          open: true,
          type: "error",
          message: "Something went wrong. Please try again.",
        })

      }

    } catch (err) {

      setPopup({
        open: true,
        type: "error",
        message: "Server error. Please try later.",
      })

    } finally {

      setLoading(false)

    }

  }

  return (

    <>

      <section className="bg-gradient-to-b from-white to-[#E6FFFA] py-20 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto">
<div className="py-3">
        <Breadcrumb/>
      </div>
          {/* HEADING */}

          <div className=" mb-16">

            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">

              Let’s Discuss Your{" "}
              <span className="text-[#3BC1A8]">
                Investment Goals
              </span>

            </h1>

            <p className="mt-6 text-gray-600 max-w-2xl ">

              Looking for <strong>studio apartments in Gurgaon</strong>? Whether you're
              investing for rental income or buying your first property,
              our experts will guide you with the best deals, verified listings,
              and high ROI options.

            </p>

            <div className="w-20 h-1 bg-gradient-to-r from-[#3BC1A8] to-[#249E94]  mt-6 rounded-full"></div>

          </div>

          {/* FORM + IMAGE */}

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* FORM CARD */}

            <div className="bg-white border border-[#B2F5EA]
            rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-500">

              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                Enquire Now
              </h3>

              <p className="text-gray-500 mb-8 text-sm">
                Fill your details & get instant callback from property expert.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}

                <div>

                  <label className="text-sm text-gray-600">
                    Full Name*
                  </label>

                  <input
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-[#F0FDFA]
                    border border-[#B2F5EA] text-gray-900 placeholder-gray-400
                    focus:ring-2 focus:ring-[#3BC1A8] outline-none transition"
                  />

                </div>

                {/* PHONE */}

                <div>

                  <label className="text-sm text-gray-600">
                    Phone*
                  </label>

                  <input
                    name="phone"
                    required
                    inputMode="numeric"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-[#F0FDFA]
                    border border-[#B2F5EA] text-gray-900 placeholder-gray-400
                    focus:ring-2 focus:ring-[#3BC1A8] outline-none transition"
                  />

                </div>

                {/* MESSAGE */}

                <div>

                  <label className="text-sm text-gray-600">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Your Requirement (Budget / Location / ROI)"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-[#F0FDFA]
                    border border-[#B2F5EA] text-gray-900 placeholder-gray-400
                    focus:ring-2 focus:ring-[#3BC1A8] outline-none resize-none transition"
                  />

                </div>

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full font-semibold
                  bg-gradient-to-r from-[#3BC1A8] to-[#249E94]
                  hover:opacity-90
                  text-white transition shadow-lg cursor-pointer
                  disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Get Callback"}
                </button>

              </form>

              {/* TRUST LINE */}

              <p className="text-xs text-gray-400 mt-4 text-center">
                🔒 100% Secure • No Spam • Quick Response
              </p>

            </div>

            {/* IMAGE */}

            <div className="relative h-[520px] rounded-3xl overflow-hidden border border-[#B2F5EA] shadow-xl">

              <Image
                src="https://images.presentationgo.com/2025/06/business-partnership-handshake.jpg"
                alt="Property Consultant"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            </div>

          </div>

          {/* MAP */}

          <div className="mt-24 rounded-3xl overflow-hidden border border-[#B2F5EA] shadow-xl">

            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=28.4595,77.0266&z=14&output=embed"
              className="w-full h-[500px] border-0"
              loading="lazy"
            />

          </div>

        </div>

      </section>

      {/* ALERT POPUP */}

      <AlertPopup
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={() =>
          setPopup({
            ...popup,
            open: false,
          })
        }
      />

    </>

  )

}