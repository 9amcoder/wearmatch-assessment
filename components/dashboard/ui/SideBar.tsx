"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/constant/routes/routeLabel";

type SideBarProps = {
  companyName?: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
};

const SideBar: React.FC<SideBarProps> = ({
  companyName,
  logo = "/logo1.webp",
  logoWidth = 200,
  logoHeight = 200,
}) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white text-black border drop-shadow-2xl">
      <div className="px-3 py-2 flex-1">
        <Link href="/listing" className="flex items-center pl-3 mb-14">
          <div className="relative w-50 h-50 mr-4">
            <Image
              src={logo}
              width={logoWidth}
              height={logoHeight}
              alt="logo"
            />
          </div>
          <h1 className="text-md font-bold text-black">{companyName} </h1>
        </Link>
        <div className="space-y-1">
          {ROUTES.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-yellow-500 hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-gray-800 font-bold bg-white/10"
                  : "text-gray-600"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
