import {ButtonType} from "@/components/GreenButton/types";

type Props = {
  buttonType: ButtonType;
  buttonText: string;
}

export const GreenButton = ({ buttonType, buttonText }: Props) => {
  if (buttonType === ButtonType.Outlined) {
    return (
      <button className="py-4 border-[1px] border-green uppercase text-green text-center w-full">
        {buttonText}
      </button>
    )
  }

  if (buttonType === ButtonType.Filled) {
    return (
      <button className="py-4 bg-green uppercase text-white text-center w-full">
        {buttonText}
      </button>
    )
  }
}