import {ButtonType} from "@/components/GreenButton/types";
import Link from "next/link";

type Props = {
  buttonType: ButtonType;
  type?: 'submit' | 'button';
  link?: string;
  buttonText: string;
  className?: string;
  onClick?: () => void;
}

export const GreenButton = ({ buttonType, type = 'button', buttonText, className, onClick, link }: Props) => {
  if (buttonType === ButtonType.Outlined) {
    if (link) {
      return (
        <Link className={`flex justify-center items-center py-4 border-[1px] border-green uppercase text-green text-center min-w-full !w-full ${className}`} href={link}>
          {buttonText}
        </Link>
      )
    }

    return (
      <button type={type} onClick={onClick} className={`py-4 border-[1px] border-green uppercase text-green text-center w-full ${className}`}>
        {buttonText}
      </button>
    )
  }

  if (buttonType === ButtonType.Filled) {
    if (link) {
      return (
        <Link className={`flex justify-center items-center py-4 bg-green uppercase text-white text-center !w-full min-w-full ${className}`} href={link}>
          {buttonText}
        </Link>
      )
    }
    return (
      <button type={type} onClick={onClick} className={`py-4 bg-green uppercase text-white text-center w-full ${className}`}>
        {buttonText}
      </button>
    )
  }
}