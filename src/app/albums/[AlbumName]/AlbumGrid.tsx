"use client";

import CloudinaryImages from "@/app/gallery/CloudinaryImages";
import { SearchResult } from "@/app/gallery/page";
import { ImageGrid } from "@/components/imageGrid";

export default function AlbumGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImages
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
          />
        );
      }}
    />
  );
}
