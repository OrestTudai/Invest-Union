'use client'

import { useState } from "react";

type Props = {
  placeholder: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  name?: string;
}

export const FormInput = ({ placeholder, error, value, onChange, onBlur, name }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative pt-[29px] pb-[23px]">
      {isActive && (
        <span className={`absolute top-0 left-0 pb-3 text-gray text-[14px] font-medium ${error ? '!text-error' : ''}`}>
          {placeholder}
        </span>
      )}
      <input
        name={name}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onBlur={() => {
          setIsActive(false);
          if (onBlur) {
            onBlur();
          }
        }}
        onFocus={() => setIsActive(true)}
        className={`w-full py-[5px] px-[6px] text-[18px] text-black border-b-[1px] border-b-gray placeholder:opacity-100 placeholder-gray ${error ? 'text-error border-b-error !placeholder-error' : ''}`}
        placeholder={placeholder}
      />
      {error && (
        <span className="absolute bottom-0 left-0 text-error text-[12px]">
          {error}
        </span>
      )}
    </div>
  )
}
