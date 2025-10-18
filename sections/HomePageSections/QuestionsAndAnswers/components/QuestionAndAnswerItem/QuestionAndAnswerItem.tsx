'use client'

import { useState } from "react";
import {ArrowRight, CrossIcon} from "@/assets/svg";
import Image from "next/image";

type Props = {
  heading: string;
  paragraph: string;
};

export const QuestionAndAnswerItem = ({ heading, paragraph }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-lightGray">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 px-2 text-left active:bg-[#80907433]"
      >
        <h4 className={`max-w-[275px] ${isOpen && 'text-green'}`}>{heading}</h4>
        {isOpen ? (
          <Image src={CrossIcon} alt={'Close question and answer item'} />
        ) : (
          <Image src={ArrowRight} alt={'Open question and answer item'} />
        )}
      </button>

      {isOpen && (
        <p className="max-w-[275px] mt-6 ml-2 text-darkGray transition-all duration-300">
          {paragraph}
        </p>
      )}
    </div>
  );
};
