"use client";
import CardComponent from "@/components/dashboard/ui/DashboardCard";
import SkeltonLoader from "@/components/dashboard/ui/SkeletonLoader";
import TOKEN from "@/constant/Auth/AUTH_TOKEN";
import useMediaQuery from "@/hooks/useMediaQuery";
import useSiteStore from "@/store/listingStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const SiteDetailsPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const { site, siteLoading, error, fetchSite } = useSiteStore();
  const { isMobile } = useMediaQuery();

  useEffect(() => {
    fetchSite(params.id, TOKEN);
  }, [fetchSite, params.id]);

  if (siteLoading) {
    return <SkeltonLoader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="text-center mt-5">
        <h1 className="text-md md:text-lg">Main Contact</h1>
      </div>
      <CardComponent site={site} isMobile={isMobile} />
    </div>
  );
};

export default SiteDetailsPage;
