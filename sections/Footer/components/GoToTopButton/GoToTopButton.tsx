"use client"
import Image from "next/image";
import {ArrowTop} from "@/assets/svg";

export const GoToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button onClick={scrollToTop} className="p-3 border-[1px] border-white bg-[#FFFFFF14]">
      <Image src={ArrowTop} alt={'Go to top button arrow'} />
    </button>
  )
}