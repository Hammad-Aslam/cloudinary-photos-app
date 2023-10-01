"use server";
import { SearchResult } from "@/app/gallery/page";
import cloudinary from "cloudinary";
export async function CreateFolder(image: SearchResult, folder: string) {
  const existingFolder = await cloudinary.v2.api.create_folder(folder);
  await cloudinary.v2.uploader.rename(
    image.public_id,
    `${folder}/${image.public_id}`
  );
}
