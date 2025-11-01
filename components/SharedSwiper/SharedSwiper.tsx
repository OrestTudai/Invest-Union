"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowSwiperButton } from "@/assets/images";
import Link from "next/link";

interface SharedSwiperProps {
  slides: React.ReactNode[];
  spaceBetween?: number;
  slidesPerView?: number;
  href?: string;
  linkText?: string;
}

export const SharedSwiper: React.FC<SharedSwiperProps> = ({
  slides,
  spaceBetween = 30,
  slidesPerView = 1,
  href,
  linkText,
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  return (
    <section className="block xl:flex xl:flex-row-reverse xl:max-w-[1100px] xl:gap-5">
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onInit={(swiper) => {
          setTimeout(() => {
            if (prevRef.current && nextRef.current) {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
            setIsPrevDisabled(swiper.isBeginning);
            setIsNextDisabled(swiper.isEnd);
          });
        }}
        onSlideChange={(swiper) => {
          setIsPrevDisabled(swiper.isBeginning);
          setIsNextDisabled(swiper.isEnd);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between items-center mt-6 md:mt-10 xl:justify-end xl:items-end">
        {href && linkText && (
          <Link
            className="w-fit px-8 py-4 text-[14px] text-green border-[1px] border-green rounded-[2px]"
            href={href}
          >
            {linkText}
          </Link>
        )}
        <div className="flex items-center gap-4 w-fit xl:min-w-[120px]">
          <button
            ref={prevRef}
            disabled={isPrevDisabled}
            className={`p-[10px] border-[1px] border-solid rounded-[2px] border-darkGray bg-[#FFFFFF14] shadow-[1px_1px_4px_rgba(0,0,0,0.08)] transition-opacity ${
              isPrevDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <Image
              className="rotate-180"
              src={ArrowSwiperButton}
              alt="Go previous slide"
            />
          </button>

          <button
            ref={nextRef}
            disabled={isNextDisabled}
            className={`p-[10px] border-[1px] border-solid rounded-[2px] border-darkGray bg-[#FFFFFF14] shadow-[1px_1px_4px_rgba(0,0,0,0.08)] transition-opacity ${
              isNextDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <Image src={ArrowSwiperButton} alt="Go next slide" />
          </button>
        </div>
      </div>
    </section>
  );
};
