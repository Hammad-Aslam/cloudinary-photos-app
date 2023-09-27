import UploadButton from "./UploadButton";
import cloudinary from "cloudinary";
import CloudinaryImages from "./CloudinaryImages";

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
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <CloudinaryImages
              key={result.public_id}
              src={result.public_id}
              width="400"
              height="300"
              imageData={result}
              alt="images"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallerypage;
