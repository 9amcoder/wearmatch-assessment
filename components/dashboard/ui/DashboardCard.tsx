import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Listing } from "@/constant/interfaces/listing";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

interface CardProps {
  site: Listing | null;
  isMobile?: boolean;
}

const CardComponent: React.FC<CardProps> = ({ site }) => {
  const router = useRouter();

  // Get the main contact (first contact in the array)
  const mainContact = site?.contacts?.[0];

  return (
    <Card className="relative flex flex-col items-center mt-5 md:mt-10 mx-5 md:mx-20">
      <Button
        size="icon"
        variant="outline"
        className="absolute top-1 left-1 md:top-2 md:left-2"
        onClick={() => router.back()}
      >
        <ArrowLeft size={20} />
      </Button>
      <CardHeader className="text-center w-50 md:w-full">
        <CardTitle className="text-lg md:text-xl">
          <div className="flex items-center justify-center">
            {site?.ListingName || "No Listing Name"}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <div className="w-full max-w-md">
          <Separator className="mt-5 w-full" />
          <div className="flex items-center justify-center">
            <MapPin className="mr-2" />
            {site?.Location || "No Address"}
          </div>
          <Separator className="mt-5 w-full" />
          <div className="flex items-center justify-center">
            <Phone className="mr-2" />
            {mainContact?.phone_number || "No Phone Number"}
          </div>
          <Separator className="mt-5 w-full" />
          <div className="flex items-center justify-center">
            <Mail className="mr-2" />
            {mainContact?.email || "No Email"}
          </div>
          <Separator className="mt-5 w-full" />
          <div className="mt-5 flex flex-col md:flex-row md:justify-center md:items-start w-full">
            {/* Product Types */}
            <div className="md:w-1/2 md:pr-4 text-center">
              <h3 className="text-md font-bold flex items-center justify-center">
                Product Types
              </h3>
              <ul className="flex flex-wrap gap-2 justify-center text-xs md:text-sm">
                {site?.product_types?.length
                  ? site.product_types.map((type, index) => (
                      <li key={index} className="inline-block">
                        {type}
                      </li>
                    ))
                  : "No Product Types Available"}
              </ul>
            </div>

            {/* Amenities */}
            <div className="md:w-1/2 md:pl-4 text-center">
              <h3 className="text-md font-bold flex items-center justify-center">
                Amenities
              </h3>
              <ul className="flex flex-wrap gap-2 justify-center text-xs md:text-sm">
                {site?.amenities?.length
                  ? site.amenities.map((amenity, index) => (
                      <li key={index} className="inline-block">
                        {amenity}
                      </li>
                    ))
                  : "No Amenities Available"}
              </ul>
            </div>
          </div>
          <Separator className="mt-5 w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
