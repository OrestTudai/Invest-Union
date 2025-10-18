'use client'

import {useState} from "react";

type Props = {
  placeholder: string;
  error?: string;
}

export const FormInput = ({ placeholder, error }: Props) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="relative pt-[29px] pb-[23px]">
      {isActive && (
        <span className="absolute top-0 left-0 pb-3 text-gray text-[14px] font-medium">
        {placeholder}
      </span>
      )}
      <input
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        className={`w-full py-[5px] px-[6px] text-[18px] text-black border-b-[1px] border-b-gray placeholder:opacity-100 placeholder-gray ${error && 'text-error border-b-error! placeholder-error!'}`}
        placeholder={placeholder}
      />
      {error && (
        <span className="absolute bottom-0 left-0 text-error text-[12px] placeholder-error">
          {error}
        </span>
      )}
    </div>
  )
}