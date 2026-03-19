"use client";

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) {

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const maxVisible = 3;

  const getVisiblePages = () => {

    let start = Math.max(1, currentPage - 1);

    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);

  };

  const visiblePages = getVisiblePages();

  return (

    <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">

      {/* PREV */}

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg border border-[#3BC1A8]/40
        text-[#249E94] disabled:opacity-40
        hover:bg-[#E6FFFA] transition"
      >
        Prev
      </button>

      {/* FIRST PAGE */}

      {visiblePages[0] > 1 && (
        <>

          <button
            onClick={() => onPageChange(1)}
            className="px-4 py-2 rounded-lg border border-[#3BC1A8]/40
            text-[#249E94] hover:bg-[#E6FFFA] transition"
          >
            1
          </button>

          {visiblePages[0] > 2 && (
            <span className="px-2 text-gray-400">...</span>
          )}

        </>
      )}

      {/* PAGE NUMBERS */}

      {visiblePages.map((page) => (

        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg font-medium transition

          ${
            currentPage === page
              ? "bg-gradient-to-r from-[#3BC1A8] to-[#249E94] text-white shadow-md"
              : "border border-[#3BC1A8]/40 text-[#249E94] hover:bg-[#E6FFFA]"
          }

          `}
        >
          {page}
        </button>

      ))}

      {/* LAST PAGE */}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>

          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-2 text-gray-400">...</span>
          )}

          <button
            onClick={() => onPageChange(totalPages)}
            className="px-4 py-2 rounded-lg border border-[#3BC1A8]/40
            text-[#249E94] hover:bg-[#E6FFFA] transition"
          >
            {totalPages}
          </button>

        </>
      )}

      {/* NEXT */}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg border border-[#3BC1A8]/40
        text-[#249E94] disabled:opacity-40
        hover:bg-[#E6FFFA] transition"
      >
        Next
      </button>

    </div>

  );

}