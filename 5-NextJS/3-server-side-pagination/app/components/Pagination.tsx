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
    <div className="join">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`join-item btn ${
            currentPage === index + 1 ? "btn-active" : ""
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
