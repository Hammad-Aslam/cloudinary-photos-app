import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";
import CloudinaryImages from "../gallery/CloudinaryImages";

async function Favorites() {
  const searchResult = await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute();

  const results: SearchResult[] = searchResult.resources; // Ensure results is an array

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorite Images</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.map((result) => (
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

export default Favorites;
