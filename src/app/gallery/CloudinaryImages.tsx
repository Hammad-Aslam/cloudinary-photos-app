"use client";
import { CldImage } from "next-cloudinary";

function CloudinaryImages(props: any) {
  return <CldImage {...props} />;
}

export default CloudinaryImages;
