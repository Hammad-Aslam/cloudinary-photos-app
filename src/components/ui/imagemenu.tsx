"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

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

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function ImageMenu() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondry" className="w-8 h-8 p-0 flex items-center">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-42">
          <div className="flex items-center">
            <FolderPlus className="mr-2" />
            <DropdownMenuLabel asChild>Add to Album</DropdownMenuLabel>
            <AddToAlbumDialog />
          </div>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
