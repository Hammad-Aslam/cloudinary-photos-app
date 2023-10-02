import * as React from "react";
import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Menu from "../icons/menu";
import FolderPlus from "../icons/folderplus";
import { AddToAlbumDialog } from "./addtoalbum";
import { SearchResult } from "@/app/gallery/page";
import Link from "next/link";
import { Pencil } from "lucide-react";

type Checked = DropdownMenuCheckboxItemProps[];

export function ImageMenu({ image }: { image: SearchResult }) {
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondry" className="w-8 h-8 p-0 flex items-center">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-42">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog image={image} />
          </DropdownMenuItem>
          <div className="flex items-center">
            <DropdownMenuLabel asChild>Add to Album</DropdownMenuLabel>
          </div>
          <DropdownMenuItem asChild>
            <Button
              className="cursor-pointer flex justify-start items-center pl-4 text-blue-500 hover:text-blue-700"
              asChild
              variant="ghost"
            >
              <Link
                href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}
              >
                <Pencil className="mr-2 w-4 h-4" />
                Edit
              </Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
