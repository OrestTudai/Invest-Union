'use client'

import { useState } from "react";
import {ArrowRight, ArrowRightMd, CrossIcon} from "@/assets/svg";
import Image from "next/image";

type Props = {
  heading: string;
  paragraph: string;
  index: number;
};

export const QuestionAndAnswerItem = ({ heading, paragraph, index }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-lightGray">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 px-2 text-left active:bg-[#80907433]"
      >
        <span className="hidden text-[20px] font-medium md:block">(0{index + 1})</span>
        <h4 className={`max-w-[275px] ${isOpen && 'text-green'} md:max-w-fit md:ml-10`}>{heading}</h4>
        {isOpen ? (
          <Image className="md:ml-4" src={CrossIcon} alt={'Close question and answer item'} />
        ) : (
          <>
            <Image className="md:hidden" src={ArrowRight} alt={'Open question and answer item'} />
            <Image className="hidden ml-4 md:block" src={ArrowRightMd} alt={'Open question and answer item'} />
          </>
        )}
      </button>

      {isOpen && (
        <p className="max-w-[275px] mt-6 mb-6 ml-2 text-darkGray transition-all duration-300 md:mb-6 md:max-w-[768px]">
          {paragraph}
        </p>
      )}
    </div>
  );
};
