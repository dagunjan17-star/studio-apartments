// app/properties/[slug]/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#E6FFFA]">
      
      <div className="flex flex-col items-center gap-6">

        {/* Premium Dual Ring Spinner */}
        <div className="relative w-16 h-16">

          {/* Outer Soft Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-[#B2F5EA]"></div>

          {/* Spinning Brand Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#3BC1A8] border-r-[#249E94] animate-spin"></div>

          {/* Inner Glow Dot */}
          <div className="absolute inset-4 bg-[#3BC1A8] rounded-full animate-pulse shadow-lg shadow-[#3BC1A8]/50"></div>

        </div>

        {/* Main Text */}
        <p className="text-[#249E94] font-semibold text-lg tracking-wide">
          Loading Studio Apartment Details...
        </p>

        {/* Sub Text */}
        <p className="text-sm text-gray-500 text-center max-w-xs">
          Please wait while we fetch premium studio apartment information for you.
        </p>

      </div>

    </div>
  );
}