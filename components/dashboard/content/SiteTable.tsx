import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GalleryVerticalEnd } from "lucide-react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Listing } from "@/constant/interfaces/listing";

interface TableProps {
  listings: Listing[];
  router?: AppRouterInstance;
  isMobile?: boolean;
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const SiteTable: React.FC<TableProps> = ({ listings, router }) => {
  const subleaseListings = listings.filter(
    (listing) => listing.listing_type === "sublease"
  );
  const threePLListings = listings.filter(
    (listing) => listing.listing_type === "3PL"
  );

  const renderListings = (listings: Listing[], category: string) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map((site) => (
          <Card key={site.id} className="shadow-md">
            <CardHeader>
              <Avatar>
                <AvatarImage
                  src={site.images?.[0]?.image_url || ""}
                  alt="Site Image"
                />
                <AvatarFallback>N/A</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <div>
                <strong>Title:</strong>{" "}
                <Tooltip>
                  <TooltipTrigger>
                    {truncateText(site.ListingName || "No Title", 20)}
                  </TooltipTrigger>
                  <TooltipContent>{site.ListingName}</TooltipContent>
                </Tooltip>
              </div>
              <div>
                <strong>Address:</strong>{" "}
                <Tooltip>
                  <TooltipTrigger>
                    {truncateText(site.Location || "No Address", 30)}
                  </TooltipTrigger>
                  <TooltipContent>{site.Location}</TooltipContent>
                </Tooltip>
              </div>
              <div>
                <strong>Contact:</strong> {site.contacts?.[0]?.name || "N/A"}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                onClick={() => router?.push(`/listing/${site.id}`)}
              >
                <GalleryVerticalEnd size={15} className="mr-2" />
                Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {renderListings(subleaseListings, "Sublease Listings")}
      {renderListings(threePLListings, "3PL Listings")}
    </div>
  );
};

export default SiteTable;
