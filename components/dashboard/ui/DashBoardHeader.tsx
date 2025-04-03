"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams, usePathname } from "next/navigation";

const DashBoardNav: React.FC = () => {
  let pathname = usePathname();
  const params = useParams();

  // Check if params contain an ID
  if (params.id) {
    // Remove the ID from the pathname
    const pathParts = pathname.split('/');
    pathname = pathParts.slice(0, pathParts.length - 1).join('/');
  }

  return (
    <div className="hidden sm:flex items-center justify-between p-4 w-full md:border border-none bg-gradient-to-r from-emerald-50 to-green-100">
      <div className="font-bold text-xl ">
        {pathname.replace("/", "").charAt(0).toUpperCase() +
          pathname.replace("/", "").slice(1).toLowerCase()}
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-[#282458]">
          Hello, User!
        </div>
        <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DashBoardNav;