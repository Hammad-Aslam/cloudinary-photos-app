"use client";
import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";
import CloudinaryImages from "../gallery/CloudinaryImages";
import { useEffect, useState } from "react";
import { createSecureContext } from "tls";

function FavoriteList({
  intialResources,
}: {
  intialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(intialResources || []);
  useEffect(() => {
    setResources(intialResources);
  }, [intialResources]);
  return (
    <div className="grid grid-cols-4 gap-4">
      {resources.map((result) => (
        <CloudinaryImages
          key={result.public_id}
          width="400"
          height="300"
          imageData={result}
          alt="images"
          onUnheart={(unheartResource) => {
            setResources((currentResources) =>
              currentResources.filter(
                (resource) => resource.public_id !== unheartResource.public_id
              )
            );
          }}
        />
      ))}
    </div>
  );
}

export default FavoriteList;
