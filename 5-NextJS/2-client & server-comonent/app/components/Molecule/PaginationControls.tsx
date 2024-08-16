import React from "react";
import PaginationButton from "../Atomic/PaginationButton";

interface PaginationControlsProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationButton
          key={index}
          pageNumber={index + 1}
          isActive={currentPage === index + 1}
          onClick={onPageChange}
        />
      ))}
    </div>
  );
};

export default PaginationControls;
