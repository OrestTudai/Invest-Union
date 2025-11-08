import { GalleryData } from "@/sections/GallerySections/Gallery/constants";
import Image from "next/image";

export const Gallery = () => {
  return (
    <section className="pt-[179px] pb-[100px] px-4 md:pb-[180px] md:px-10">
      <div className="flex items-center justify-between mb-10 md:mb-[60px] xl:mb-20">
        <h1 className="text-[32px] font-semibold">Галерея</h1>
        <span className="text-[14px] font-medium">(25)</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:hidden">
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

      <div
        className="flex flex-col gap-2 w-fit mb-8 md:ml-auto xl:w-2/3"
      >
        <div className="relative w-[334px] h-[340px] overflow-hidden xl:w-full xl:h-[435px]">
          <Image
            src={GalleryData[0].image}
            alt={GalleryData[0].paragraph}
            fill
            className="object-cover"
          />
        </div>
        <p className="max-w-[334px] xl:max-w-full">{GalleryData[0].paragraph}</p>
      </div>

      <div className="hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 md:grid xl:hidden">
        {GalleryData.slice(1).map((item, index) => (
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
      <div className="hidden xl:flex gap-5 mt-10">
        {GalleryData.slice(1, 4).map((item, index) => (
          <div
            key={`gallery-item-${index}`}
            className="flex flex-col gap-2 w-full"
          >
            <div className="relative w-full h-[440px] overflow-hidden">
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
      <div className="hidden xl:flex gap-5 mt-10">
        <div
          className="flex flex-col gap-2 w-[calc(66%+40px)]"
        >
          <div className="relative w-full h-[440px] overflow-hidden">
            <Image
              src={GalleryData[4].image}
              alt={GalleryData[4].paragraph}
              fill
              className="object-cover"
            />
          </div>
          <p>{GalleryData[4].paragraph}</p>
        </div>
        <div
          className="flex flex-col gap-2 w-1/3"
        >
          <div className="relative w-full h-[440px] overflow-hidden">
            <Image
              src={GalleryData[5].image}
              alt={GalleryData[5].paragraph}
              fill
              className="object-cover"
            />
          </div>
          <p>{GalleryData[5].paragraph}</p>
        </div>
      </div>
      <div className="hidden xl:flex gap-5 mt-10">
        {GalleryData.slice(6, 9).map((item, index) => (
          <div
            key={`gallery-item-${index}`}
            className="flex flex-col gap-2 w-full"
          >
            <div className="relative w-full h-[440px] overflow-hidden">
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
      <div className="hidden xl:flex gap-5 mt-10">
        <div
          className="flex flex-col gap-2 w-1/3"
        >
          <div className="relative w-full h-[440px] overflow-hidden">
            <Image
              src={GalleryData[9].image}
              alt={GalleryData[9].paragraph}
              fill
              className="object-cover"
            />
          </div>
          <p>{GalleryData[9].paragraph}</p>
        </div>
        <div
          className="flex flex-col gap-2 w-[calc(66%+40px)]"
        >
          <div className="relative w-full h-[440px] overflow-hidden">
            <Image
              src={GalleryData[10].image}
              alt={GalleryData[10].paragraph}
              fill
              className="object-cover"
            />
          </div>
          <p>{GalleryData[10].paragraph}</p>
        </div>
      </div>
    </section>
  );
};
