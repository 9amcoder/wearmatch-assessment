"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarArrowDown } from "lucide-react";

interface DropdownFilterProps {
  onSortChange: (sort: string, order: string) => void;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ onSortChange }) => {
  const handleSortChange = (value: string) => {
    const [sort, order] = value.split(",");
    onSortChange(sort, order);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="px-4">
          <CalendarArrowDown /> <span className="px-3">Sort</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup onValueChange={handleSortChange}>
          <DropdownMenuRadioItem value="createdAt,asc">
            Created At (Asc)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="createdAt,desc">
            Created At (Desc)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="updatedAt,asc">
            Updated At (Asc)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="updatedAt,desc">
            Updated At (Desc)
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownFilter;
