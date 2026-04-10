import FilterProperties from "./FilterProperties";
import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";

export default async function Page({ params }) {

  const resolvedParams = await params;
const rawArea = resolvedParams?.area;

// ✅ CLEAN SLUG (IMPORTANT)
const area = rawArea?.replace("studio-apartments-in-", "");

// slug format → sector-9 → Sector 9
const formattedArea = area
  ?.replace(/-/g, " ")
  .replace(/\b\w/g, (c) => c.toUpperCase());

  return (

    <div className="bg-gradient-to-b from-white to-[#E6FFFA] min-h-screen">

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* HEADING */}

        <div className="mb-12">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">

            Studio Apartments in{" "}

            <span className="text-[#3BC1A8]">
              {formattedArea || "Gurgaon"}
            </span>

          </h1>

          <p className="text-gray-600 mt-4 text-base max-w-2xl">
            Discover premium studio apartments in {formattedArea || "Gurgaon"} 
            offering high rental income, modern amenities, and excellent connectivity. 
            Perfect for smart investors and working professionals.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#3BC1A8] to-[#249E94] mt-6 rounded-full"></div>

        </div>


        {/* MAIN GRID */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT */}

          <div className="lg:col-span-8 space-y-8">

            <FilterProperties area={area} />

          </div>


          {/* RIGHT SIDEBAR */}

          <div className="lg:col-span-4">

            <div className="sticky top-28">
              <SidebarEnquiryForm />
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}