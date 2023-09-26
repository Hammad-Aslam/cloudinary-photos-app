"use client";
import Image from "next/image";
import { CldUploadButton, CldImage } from "next-cloudinary";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton uploadPreset="fqeqmrqv" />
      <CldImage
        width="960"
        height="600"
        src="cld-sample-5"
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
