import UploadButton from "./UploadButton";
import cloudinary from "cloudinary";
import CloudinaryImages from "./CloudinaryImages";
import { ImageGrid } from "@/components/imageGrid";
import GalleryGrid from "./GalleryGrid";

export type SearchResult = {
  public_id: string;
  tags: string[];
};
async function Gallerypage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type: image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
        <GalleryGrid images={results.resources} />
      </div>
    </section>
  );
}

export default Gallerypage;
