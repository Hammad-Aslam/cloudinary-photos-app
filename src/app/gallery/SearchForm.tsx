"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SearchForm({ initialSearch }: { initialSearch: string }) {
  const [tagName, settagName] = useState("");
  const router = useRouter();
  useEffect(() => {
    settagName(initialSearch);
  }, [initialSearch]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
        router.refresh();
      }}
    >
      <Label htmlFor="tag-name" className="text-left">
        Search By tag
      </Label>
      <div className="flex gap-2">
        <Input
          onChange={(e) => settagName(e.target.value)}
          id="album name"
          value={tagName}
          defaultValue="family"
          className="col-span-3"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}

export default SearchForm;
