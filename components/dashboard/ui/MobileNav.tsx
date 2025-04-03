"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams, usePathname } from "next/navigation";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ROUTES } from "@/constant/routes/routeLabel";

type MobileNavProps = {
  companyName?: string;
};

const MobileNav: React.FC<MobileNavProps> = ({ companyName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Remove the ID from the pathname if it exists
  const cleanPathname = params.id ? pathname.replace(/\/[^/]+$/, "") : pathname;

  const formattedPathname =
    cleanPathname.replace("/", "").charAt(0).toUpperCase() +
    cleanPathname.replace("/", "").slice(1).toLowerCase();

  return (
    <nav className="bg-white w-full border-b md:border-0 md:mt-5 md:hidden">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className="md:hidden">
            <Button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              variant="ghost"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <Menu />
            </Button>
          </div>
          {formattedPathname}
          <Button variant="ghost" size="icon">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-1">
            {ROUTES.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-yellow-500 hover:bg-white/10 rounded-lg transition",
                  pathname === route.href
                    ? "text-yellow-500 bg-black/10"
                    : "text-black"
                )}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
            {isOpen && <h1 className="text-sm text-black">{companyName}</h1>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
