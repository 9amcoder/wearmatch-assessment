"use client";
import React, { useEffect, useState } from "react";
import SiteContainer from "@/components/dashboard/content/SiteContainer";

import { useRouter } from "next/navigation";
import useMediaQuery from "@/hooks/useMediaQuery";
import useSiteStore from "@/store/listingStore";
import TOKEN from "@/constant/Auth/AUTH_TOKEN";

const Dashboard: React.FC = () => {
  const { sites, sitesLoading, error, fetchSites, currentPage, totalPages } =
    useSiteStore();
  const [page, setPage] = useState(currentPage);
  const [sort, setSort] = useState("createdAt");
  const [order, setOrder] = useState("asc");
  const router = useRouter();
  const { isMobile } = useMediaQuery();

  useEffect(() => {
    fetchSites(TOKEN);
  }, [fetchSites, page, sort, order]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSortChange = (newSort: string, newOrder: string) => {
    setSort(newSort);
    setOrder(newOrder);
  };

  return (
    <div className="mt-2 ml-2">
      <h1 className="text-center pb-2 text-md md:text-2xl bold"> Sites </h1>
      <SiteContainer
        sites={sites}
        siteLoading={sitesLoading}
        error={error}
        currentPage={currentPage}
        totalPages={totalPages}
        router={router}
        isMobile={isMobile}
        onPageChange={handlePageChange}
        onSortChange={handleSortChange}
      />
    </div>
  );
};

export default Dashboard;