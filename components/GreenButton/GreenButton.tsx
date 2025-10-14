import {ButtonType} from "@/components/GreenButton/types";

type Props = {
  buttonType: ButtonType;
  buttonText: string;
  className?: string;
  onClick?: () => void;
}

export const GreenButton = ({ buttonType, buttonText, className, onClick }: Props) => {
  if (buttonType === ButtonType.Outlined) {
    return (
      <button onClick={onClick} className={`py-4 border-[1px] border-green uppercase text-green text-center w-full ${className}`}>
        {buttonText}
      </button>
    )
  }

  if (buttonType === ButtonType.Filled) {
    return (
      <button onClick={onClick} className={`py-4 bg-green uppercase text-white text-center w-full ${className}`}>
        {buttonText}
      </button>
    )
  }
}