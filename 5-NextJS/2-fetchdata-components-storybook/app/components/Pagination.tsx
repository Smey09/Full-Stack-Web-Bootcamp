"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  total: number;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({ total, limit }) => {
  const totalPages = Math.ceil(total / limit);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`mx-1 px-3 py-1 border rounded ${
            currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border-blue-500"
          }`}
          onClick={() => createPageURL(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
