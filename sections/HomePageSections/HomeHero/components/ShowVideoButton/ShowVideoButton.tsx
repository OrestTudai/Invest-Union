'use client';

import { useState, useEffect } from "react";
import { WatchVideoButtonBgMd, WatchVideoButtonBgSm, WatchVideoButtonBgXl } from "@/assets/images";
import Image from "next/image";
import { PlayIcon } from "@/assets/svg";

export const ShowVideoButton = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowVideo(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setShowVideo(true)}
        className="flex flex-col justify-end items-center h-[390px] w-[95px] gap-20 pb-8 bg-cover md:hidden"
        style={{ backgroundImage: `url(${WatchVideoButtonBgSm.src})` }}
      >
        <span className="block rotate-[-90deg] text-nowrap opacity-70">Дивитись відео</span>
        <Image src={PlayIcon} alt="Play icon" />
      </button>

      <button
        onClick={() => setShowVideo(true)}
        className="hidden md:flex flex-col justify-end items-center h-[330px] w-[95px] gap-20 pb-8 bg-cover mt-[130px] xl:hidden"
        style={{ backgroundImage: `url(${WatchVideoButtonBgMd.src})` }}
      >
        <span className="block rotate-[-90deg] text-nowrap opacity-70">Дивитись відео</span>
        <Image src={PlayIcon} alt="Play icon" />
      </button>

      <button
        onClick={() => setShowVideo(true)}
        className="hidden flex-col ml-[220px] justify-end items-center h-[475px] w-[95px] gap-20 pb-8 bg-cover xl:flex"
        style={{ backgroundImage: `url(${WatchVideoButtonBgXl.src})` }}
      >
        <span className="block rotate-[-90deg] text-nowrap opacity-70">Дивитись відео</span>
        <Image src={PlayIcon} alt="Play icon" />
      </button>

      {showVideo && (
        <div
          onClick={() => setShowVideo(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#3a3a3a]/90"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#3a3a3a] p-4 rounded-xl shadow-2xl flex flex-col items-center max-w-4xl w-[90%]"
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-5 -right-5 bg-[#4a4a4a] hover:bg-[#5a5a5a] text-white text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            >
              ×
            </button>

            <div className="overflow-hidden rounded-lg w-full aspect-video bg-black">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
              >
                <source src="/videos/factory.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
