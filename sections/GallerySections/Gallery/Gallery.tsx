"use client";

import { useState } from "react";
import { GalleryData } from "@/sections/GallerySections/Gallery/constants";
import Image from "next/image";
import { SectionContainer } from "@/components";
import { useTranslations } from "next-intl";
import {PaginationArrow} from "@/assets/svg";

export const Gallery = () => {
  const translations = useTranslations("gallery");

  const ITEMS_PER_PAGE = 11;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(GalleryData.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const data = GalleryData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const imageBaseClasses =
    "object-cover transition-transform duration-500 will-change-transform group-hover:scale-105";

  const containerBaseClasses = "relative overflow-hidden group";

  return (
    <section className="pt-[179px] pb-[100px] px-4 md:pb-[180px] md:px-10">
      <SectionContainer>
        <div className="flex items-center justify-between mb-10 md:mb-[60px] xl:mb-20">
          <h1 className="text-[32px] font-semibold">
            {translations("title")}
          </h1>
          <span className="text-[14px] font-medium">
            ({GalleryData.length})
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:hidden">
          {data.map((item, index) => (
            <div key={`gallery-item-${index}`} className="flex flex-col gap-2">
              <div className={`${containerBaseClasses} w-full h-[340px]`}>
                <Image
                  src={item.image}
                  alt={item.paragraph}
                  fill
                  className={imageBaseClasses}
                />
              </div>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>

        {data[0] && (
          <div className="flex flex-col gap-2 w-fit mb-8 md:ml-auto xl:w-2/3">
            <div
              className={`${containerBaseClasses} w-[334px] h-[340px] xl:w-full xl:h-[435px]`}
            >
              <Image
                src={data[0].image}
                alt={data[0].paragraph}
                fill
                className={imageBaseClasses}
              />
            </div>
            <p className="max-w-[334px] xl:max-w-full">
              {data[0].paragraph}
            </p>
          </div>
        )}

        <div className="hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 md:grid xl:hidden">
          {data.slice(1).map((item, index) => (
            <div key={`gallery-item-md-${index}`} className="flex flex-col gap-2">
              <div className={`${containerBaseClasses} w-full h-[340px]`}>
                <Image
                  src={item.image}
                  alt={item.paragraph}
                  fill
                  className={imageBaseClasses}
                />
              </div>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>

        <div className="hidden xl:flex gap-5 mt-10">
          {data.slice(1, 4).map((item, index) => (
            <div key={`gallery-row1-${index}`} className="flex flex-col gap-2 w-full">
              <div className={`${containerBaseClasses} w-full h-[440px]`}>
                <Image
                  src={item.image}
                  alt={item.paragraph}
                  fill
                  className={imageBaseClasses}
                />
              </div>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>

        <div className="hidden xl:flex gap-5 mt-10">
          {data[4] && (
            <div className="flex flex-col gap-2 w-[calc(66%+40px)]">
              <div className={`${containerBaseClasses} w-full h-[440px]`}>
                <Image
                  src={data[4].image}
                  alt={data[4].paragraph}
                  fill
                  className={imageBaseClasses}
                />
              </div>
              <p>{data[4].paragraph}</p>
            </div>
          )}

          {data[5] && (
            <div className="flex flex-col gap-2 w-1/3">
              <div className={`${containerBaseClasses} w-full h-[440px]`}>
                <Image
                  src={data[5].image}
                  alt={data[5].paragraph}
                  fill
                  className={imageBaseClasses}
                />
              </div>
              <p>{data[5].paragraph}</p>
            </div>
          )}
        </div>

        <div className="hidden xl:flex gap-5 mt-10">
          {data.slice(6, 9).map((item, index) => (
            <div key={`gallery-row3-${index}`} className="flex flex-col gap-2 w-full">
              <div className={`${containerBaseClasses} w-full h-[440px]`}>
                <Image
                  src={item.image}
                  alt={item.paragraph}
                  fill
                  className={imageBaseClasses}
                />
              </div>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>

        <div className="hidden xl:flex gap-5 mt-10">
          {data[9] && (
            <div className="flex flex-col gap-2 w-1/3">
              <div className={`${containerBaseClasses} w-full h-[440px]`}>
                <Image
                  src={data[9].image}
                  alt={data[9].paragraph}
                  fill
                  className={imageBaseClasses}
                />
              </div>
              <p>{data[9].paragraph}</p>
            </div>
          )}

          {data[10] && (
            <div className="flex flex-col gap-2 w-[calc(66%+40px)]">
              <div className={`${containerBaseClasses} w-full h-[440px]`}>
                <Image
                  src={data[10].image}
                  alt={data[10].paragraph}
                  fill
                  className={imageBaseClasses}
                />
              </div>
              <p>{data[10].paragraph}</p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center mt-14">
          <div className="flex items-center h-10 px-3 gap-4">
            {page !== 1 && (
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="w-10 h-10 flex items-center justify-center bg-[#C6C5C24D] hover:opacity-70 text-xl"
              >
                <Image
                  className="rotate-180"
                  src={PaginationArrow}
                  alt={"Pagination Prev Arrow"}
                />
              </button>
            )}

            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;

              if (
                pageNum === 1 ||
                pageNum === totalPages ||
                Math.abs(pageNum - page) <= 1
              ) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`flex flex-col items-center w-10 h-10 justify-center text-[18px] hover:bg-[#C6C5C233] transition ${
                      pageNum === page
                        ? "text-green font-semibold"
                        : "text-darkGray"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              }

              const prevDots = i === 1 && page > 3;
              const nextDots = i === totalPages - 2 && page < totalPages - 2;

              if (prevDots || nextDots) {
                return (
                  <span key={`dots-${i}`} className="text-gray-500 text-[18px]">
                    …
                  </span>
                );
              }

              return null;
            })}

            {page !== totalPages && (
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="w-10 h-10 flex items-center justify-center bg-[#C6C5C24D] hover:opacity-70 text-xl"
              >
                <Image src={PaginationArrow} alt={"Pagination Next Arrow"} />
              </button>
            )}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
