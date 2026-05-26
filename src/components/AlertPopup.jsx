"use client";

import { CheckCircle2, XCircle, X } from "lucide-react";

export default function AlertPopup({
  open,
  type = "success",
  message,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#041614]/75 backdrop-blur-xl px-4">

      {/* Popup */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[42px] border border-white/10 bg-white shadow-[0_35px_120px_rgba(59,193,168,0.35)] animate-popup">

        {/* Top Gradient */}
        <div className="h-2 w-full bg-gradient-to-r from-[#3BC1A8] via-[#5fe0c8] to-[#b9fff1]" />

        {/* Decorative Glow */}
        <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-[#3BC1A8]/15 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-[#5fe0c8]/15 blur-3xl"></div>

        {/* Floating Shine */}
        <div className="absolute top-0 left-[-120%] h-full w-[75%] rotate-12 bg-white/20 blur-2xl animate-shine"></div>

        {/* Floating Shapes */}
        <div className="absolute top-16 right-10 h-5 w-5 rounded-full bg-[#3BC1A8]/20"></div>
        <div className="absolute bottom-20 left-10 h-4 w-4 rounded-full bg-[#5fe0c8]/30"></div>

        <div className="relative p-8">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#3BC1A8]/10 bg-[#3BC1A8]/10 text-[#25a18c] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#3BC1A8] hover:to-[#5fe0c8] hover:text-white hover:rotate-90 hover:scale-110 cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Icon Box */}
          <div className="flex justify-center">
            <div
              className={`relative flex h-32 w-32 items-center justify-center rounded-[36px] rotate-6 shadow-2xl ${
                type === "success"
                  ? "bg-gradient-to-br from-[#effffb] via-[#d8fff7] to-[#b9fff1]"
                  : "bg-gradient-to-br from-red-100 to-red-200"
              }`}
            >

              {/* Pulse Ring */}
              <div className="absolute inset-0 rounded-[36px] border-[5px] border-[#3BC1A8]/20 animate-ping"></div>

              {/* Glow */}
              <div
                className={`absolute inset-4 rounded-[28px] blur-3xl opacity-40 ${
                  type === "success"
                    ? "bg-[#3BC1A8]"
                    : "bg-red-500"
                }`}
              />

              {/* Glass Layer */}
              <div className="absolute inset-[10px] rounded-[28px] border border-white/50 bg-white/20 backdrop-blur-lg"></div>

              {type === "success" ? (
                <CheckCircle2
                  size={66}
                  className="relative z-10 text-[#25a18c] drop-shadow-lg"
                />
              ) : (
                <XCircle
                  size={66}
                  className="relative z-10 text-red-600"
                />
              )}
            </div>
          </div>

          {/* Title */}
          <h2 className="mt-8 text-center text-4xl font-black tracking-tight bg-gradient-to-r from-[#25a18c] via-[#3BC1A8] to-[#8ff5e2] bg-clip-text text-transparent">
            {type === "success" ? "Success!" : "Error!"}
          </h2>

          {/* Message */}
          <p className="mt-4 text-center text-[16px] leading-7 text-gray-600">
            {message}
          </p>

          {/* Divider */}
          <div className="mt-7 flex items-center justify-center">
            <div className="h-[2px] w-20 rounded-full bg-gradient-to-r from-transparent to-[#3BC1A8]/40"></div>

            <div className="mx-3 h-3 w-3 rounded-full bg-[#3BC1A8] shadow-[0_0_18px_#3BC1A8]"></div>

            <div className="h-[2px] w-20 rounded-full bg-gradient-to-l from-transparent to-[#3BC1A8]/40"></div>
          </div>

          {/* Button */}
          <button
            onClick={onClose}
            className={`group relative mt-8 w-full overflow-hidden rounded-2xl py-4 text-[16px] font-black tracking-[2px] text-white shadow-[0_15px_45px_rgba(59,193,168,0.35)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.96] cursor-pointer ${
              type === "success"
                ? "bg-gradient-to-r from-[#25a18c] via-[#3BC1A8] to-[#5fe0c8]"
                : "bg-gradient-to-r from-red-600 to-red-700"
            }`}
          >
            {/* Shine Effect */}
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>

            <span className="relative z-10">OK, GOT IT</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-popup {
          animation: popupAnimation 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes popupAnimation {
          0% {
            opacity: 0;
            transform: scale(0.55) rotate(-8deg) translateY(70px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg) translateY(0);
          }
        }

        @keyframes shine {
          0% {
            left: -120%;
          }
          100% {
            left: 130%;
          }
        }

        .animate-shine {
          animation: shine 3.5s linear infinite;
        }
      `}</style>
    </div>
  );
}