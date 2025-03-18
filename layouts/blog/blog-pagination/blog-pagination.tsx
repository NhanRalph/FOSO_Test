import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const BlogPagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);

    const pages = new Set<number>();

    pages.add(1); // Trang đầu tiên
    pages.add(totalPages); // Trang cuối cùng
    pages.add(currentPage); // Trang hiện tại

    if (currentPage > 2) pages.add(currentPage - 1);
    if (currentPage > 3) pages.add(currentPage - 2);
    if (currentPage < totalPages - 1) pages.add(currentPage + 1);
    if (currentPage < totalPages - 2) pages.add(currentPage + 2);

    return [...pages].sort((a, b) => a - b);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="mt-4 flex w-4/5 mx-auto justify-between items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex gap-2 items-center px-3 py-2 text-gray-600 hover:text-green-600 disabled:hover:text-gray-600 disabled:opacity-50"
      >
        <ArrowLeft size={20} />
        Trang trước
      </button>

      <div className="flex space-x-2 items-end">
        {pageNumbers.map((page, index) => (
          <React.Fragment key={page}>
            {index > 0 && pageNumbers[index - 1] !== page - 1 && <span className="px-2">...</span>}
            <button
              onClick={() => onPageChange(page)}
              className={`px-3 py-2 rounded-md ${
                currentPage === page ? "bg-green-200 text-black" : ""
              } hover:bg-green-300`}
            >
              {page.toString().padStart(2, "0")}
            </button>
          </React.Fragment>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex gap-2 items-center px-3 py-2 text-gray-600 hover:text-green-600 disabled:hover:text-gray-600 disabled:opacity-50"
      >
        Trang sau
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default BlogPagination;
