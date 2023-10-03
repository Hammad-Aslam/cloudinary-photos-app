"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
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
  const [Pendingprompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");
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
          <div className="flex flex-col gap-4">
            <Button
              onClick={() => {
                {
                  setTransformation("generative-fill");
                  setPrompt(Pendingprompt);
                }
              }}
              className={`${
                transformation === "generative-fill"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              } hover:bg-blue-600 px-4 py-2 rounded-md mr-2`}
            >
              Apply Generative Fill
            </Button>
            <Label>Prompt</Label>
            <Input
              value={Pendingprompt}
              onChange={(e) => setPendingPrompt(e.currentTarget.value)}
            />
          </div>
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
              height={800}
              width={1200}
              alt="Image"
              crop="pad"
              fillBackground={{ prompt }}
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
