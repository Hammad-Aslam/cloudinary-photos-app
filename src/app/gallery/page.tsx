"use client";
import { Button } from "@/components/ui/button";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import React from "react";

function Gallerypage() {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <Button asChild>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
              />
            </svg>

            <CldUploadButton
              uploadPreset="fqeqmrqv"
              onUpload={(result: CldUploadWidgetResults) => {
                // setImageId(result.info.public_id);
              }}
            />
          </div>
        </Button>
      </div>
    </section>
  );
}

export default Gallerypage;
