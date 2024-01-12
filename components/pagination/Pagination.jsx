"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, hasPrev, hasNext, cat }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <button
        className={`w-[100px] border-none px-[20px] text-white ${
          !hasPrev ? "bg-red-400 cursor-not-allowed" : "bg-red-500 "
        } `}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}&cat=${cat}`)}
      >
        Previous
      </button>

      <button
        className={`w-[100px] border-none p-[16px] text-white ${
          !hasNext
            ? "bg-red-400 cursor-not-allowed" : "bg-red-500 "
        }`}
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}&cat=${cat}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
