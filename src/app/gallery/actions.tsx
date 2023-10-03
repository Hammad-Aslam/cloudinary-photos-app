"use server";
import cloudinary from "cloudinary";
async function setAsFavoriteActions(publicId: string, isFavorite: Boolean) {
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  }
}

export default setAsFavoriteActions;
