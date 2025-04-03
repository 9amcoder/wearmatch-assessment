import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface PaginationContainerProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize?: number; // customizable page size
}

const PaginationContainer: React.FC<PaginationContainerProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  pageSize = 5, // Default value is 5
}) => {
  const [pageRange, setPageRange] = useState([1, pageSize]);

  useEffect(() => {
    const start = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
    const end = Math.min(start + pageSize - 1, totalPages);
    setPageRange([start, end]);
  }, [currentPage, totalPages, pageSize]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = pageRange[0]; i <= pageRange[1]; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === currentPage}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pages;
  };

  return (
    <Pagination className="mt-3">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>
        {renderPageNumbers()}
        {pageRange[1] < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationContainer;