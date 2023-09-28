"use client";
import Heart from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import setAsFavoriteActions from "./actions";
import { useTransition } from "react";
import { SearchResult } from "./page";
import FullHeart from "@/components/icons/fullheart";

function CloudinaryImages(
  props: any & { imageData: SearchResult; path: string }
) {
  const [transition, startTransition] = useTransition();
  const { imageData } = props;
  const isFavorite = imageData.tags.includes("favorite");

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorite ? (
        <FullHeart
          className="absolute top-2 right-2 hover:text-white text-red-700 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setAsFavoriteActions(imageData.public_id, false, props.path);
            });
          }}
        />
      ) : (
        <Heart
          className="absolute top-2 right-2 hover:text-red-700 cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setAsFavoriteActions(imageData.public_id, true, props.path);
            });
          }}
        />
      )}
    </div>
  );
}

export default CloudinaryImages;
