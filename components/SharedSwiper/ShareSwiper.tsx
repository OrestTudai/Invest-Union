"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const testimonials = [
  {
    name: "Ім’я",
    company: "Компанія",
    text: "Amet quam nunc volutpat sapien mauris. Amet orci vivamus imperdiet dis diam dui leo nec. Vivamus urna erat magna neque adipiscing mattis cras. Feugiat diam amet euismod massa turpis mi a sit iaculis. At ligula neque nunc egestas accumsan auctor. Amet quam nunc volutpat sapien mauris. Amet orci vivamus imperdiet dis diam dui leo nec.",
    image: "/images/person1.jpg",
  },
  {
    name: "Інше ім’я",
    company: "Компанія 2",
    text: "Vivamus urna erat magna neque adipiscing mattis cras. Feugiat diam amet euismod massa turpis mi a sit iaculis.",
    image: "/images/person2.jpg",
  },
  {
    name: "Ще одне ім’я",
    company: "Компанія 3",
    text: "Amet orci vivamus imperdiet dis diam dui leo nec. Vivamus urna erat magna neque adipiscing mattis cras.",
    image: "/images/person3.jpg",
  },
];

export const SharedSwiper = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-4xl mx-auto relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-start">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-[64px] h-[64px] rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold">{item.name}</h3>
                    <p className="text-gray-400 text-[14px]">{item.company}</p>
                  </div>
                </div>
                <p className="text-[16px] text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-0 right-0 flex gap-2 mt-4">
          <button
            ref={prevRef}
            className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
          >
            prev
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 border border-gray-800 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
          >
            next
          </button>
        </div>
      </div>
    </section>
  );
};
