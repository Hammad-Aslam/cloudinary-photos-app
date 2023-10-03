import UploadButton from "./UploadButton";
import cloudinary from "cloudinary";
import GalleryGrid from "./GalleryGrid";
import SearchForm from "./SearchForm";

export type SearchResult = {
  public_id: string;
  tags: string[];
};
async function Gallerypage({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type: image${search ? ` AND tags=${search}` : ""}`)
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
        <SearchForm initialSearch={search} />
        <GalleryGrid images={results.resources} />
      </div>
    </section>
  );
}

export default Gallerypage;
