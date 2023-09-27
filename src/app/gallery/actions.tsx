"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
async function setAsFavoriteActions(publicId: string, isFavorite: Boolean) {
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  }
  revalidatePath("/gallery");
}

export default setAsFavoriteActions;
