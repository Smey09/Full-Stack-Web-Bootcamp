import React from "react";
import PaginationControls from "../Molecule/PaginationControls";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

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

  const handlePageChange = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <PaginationControls
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export default Pagination;
