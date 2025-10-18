import { GalleryData } from "@/sections/GallerySections/Gallery/constants";
import Image from "next/image";

export const Gallery = () => {
  return (
    <section className="pt-[179px] pb-[100px] px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] font-semibold">Галерея</h1>
        <span className="text-[14px] font-medium">(25)</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {GalleryData.map((item, index) => (
          <div
            key={`gallery-item-${index}`}
            className="flex flex-col gap-2"
          >
            <div className="relative w-full h-[340px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.paragraph}
                fill
                className="object-cover"
              />
            </div>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
