"use client";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

function EditPage({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) {
  const [transformation, setTransformation] = useState<
    undefined | "generative-fill" | "blur" | "pixelate" | "tint"
  >();

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">{publicId}</h1>
        </div>
        <div className="flex flex-4">
          <Button
            variant="ghost"
            onClick={() => {
              setTransformation(undefined);
            }}
            className={`${
              transformation === undefined
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            } hover:bg-blue-600 px-4 py-2 rounded-md mr-2`}
          >
            Clear All
          </Button>
          <Button
            onClick={() => {
              setTransformation("generative-fill");
            }}
            className={`${
              transformation === "generative-fill"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            } hover:bg-blue-600 px-4 py-2 rounded-md mr-2`}
          >
            Apply Fill
          </Button>
          <Button
            onClick={() => {
              setTransformation("blur");
            }}
            className={`${
              transformation === "blur"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            } hover:bg-blue-600 px-4 py-2 rounded-md mr-2`}
          >
            Apply Blur
          </Button>
          <Button
            onClick={() => {
              setTransformation("pixelate");
            }}
            className={`${
              transformation === "generative-fill"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            } hover:bg-blue-600 px-4 py-2 rounded-md mr-2`}
          >
            Apply Pixelate
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <CldImage src={publicId} height={400} width={300} alt="Image" />
          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              height={400}
              width={300}
              alt="Image"
              crop="pad"
              fillBackground
            />
          )}
          {transformation === "blur" && (
            <CldImage
              src={publicId}
              height={400}
              width={300}
              alt="Image"
              crop="pad"
              blur="1200"
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              height={400}
              width={300}
              alt="Image"
              crop="pad"
              pixelate
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default EditPage;
