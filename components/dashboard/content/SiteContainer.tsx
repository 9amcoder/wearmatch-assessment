import React from "react";
import SiteTable from "./SiteTable";
import SkeltonLoader from "../ui/SkeletonLoader";
import PaginationContainer from "../ui/Pagination";
import DropdownFilter from "../ui/DropdownFilter";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Listing } from "@/constant/interfaces/listing";

interface SiteContainerProps {
  sites: Listing[];
  siteLoading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  router: AppRouterInstance;
  isMobile?: boolean;
  onPageChange: (page: number) => void;
  onSortChange: (sort: string, order: string) => void;
}

const SiteContainer: React.FC<SiteContainerProps> = ({
  sites,
  siteLoading,
  error,
  currentPage,
  totalPages,
  router,
  isMobile,
  onPageChange,
  onSortChange,
}) => {
  if (siteLoading) {
    return <SkeltonLoader />;
  }

  if (error) {
    return <div>Error: {error}</div>; // Provide more context if needed
  }

  if (!sites || sites.length === 0) {
    return <div>No sites available</div>;
  }

  return (
    <>
      <div className="text-left pb-2">
        <DropdownFilter onSortChange={onSortChange} />
      </div>
      <div className="pb-10">
        <SiteTable listings={sites} router={router} isMobile={isMobile} />
        <PaginationContainer
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          pageSize={isMobile ? 3 : 5}
        />
      </div>
    </>
  );
};

export default SiteContainer;
