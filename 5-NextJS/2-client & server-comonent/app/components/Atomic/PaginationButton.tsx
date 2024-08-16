import React from "react";

interface PaginationButtonProps {
  pageNumber: number;
  isActive: boolean;
  onClick: (pageNumber: number) => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  pageNumber,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`mx-1 px-3 py-1 border rounded ${
        isActive
          ? "bg-red-500 text-white"
          : "bg-white text-blue-500 border-blue-500"
      }`}
      onClick={() => onClick(pageNumber)}
    >
      {pageNumber}
    </button>
  );
};

export default PaginationButton;
