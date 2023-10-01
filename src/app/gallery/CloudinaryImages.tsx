"use client";
import Heart from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import setAsFavoriteActions from "./actions";
import { useState, useTransition } from "react";
import { SearchResult } from "./page";
import FullHeart from "@/components/icons/fullheart";
import { ImageMenu } from "@/components/ui/imagemenu";

function CloudinaryImages(
  props: {
    imageData: SearchResult;
    onUnheart?: (usheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();
  const { imageData, onUnheart } = props;
  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes("favorite")
  );

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          className="absolute top-2 left-2 hover:text-white text-red-700 cursor-pointer"
          onClick={() => {
            onUnheart?.(imageData);
            setIsFavorited(false);
            startTransition(() => {
              setAsFavoriteActions(imageData.public_id, false);
            });
          }}
        />
      ) : (
        <Heart
          className="absolute top-2 left-2 hover:text-red-700 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setIsFavorited(true);
              setAsFavoriteActions(imageData.public_id, true);
            });
          }}
        />
      )}
      <ImageMenu image={imageData} />
    </div>
  );
}

export default CloudinaryImages;
