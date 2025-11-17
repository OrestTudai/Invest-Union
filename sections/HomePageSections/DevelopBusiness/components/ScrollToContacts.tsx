"use client"

import {ButtonType} from "@/components/GreenButton";
import {GreenButton} from "@/components";

type Props = {
  buttonText: string;
}

export const ScrollToContacts = ({ buttonText }: Props) => {
  const scrollToContacts = () => {
    const el = document.getElementById("contacts");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <GreenButton
      onClick={scrollToContacts}
      className="mt-8 md:mt-12 md:max-w-[277px] md:mx-auto md:block"
      buttonType={ButtonType.Filled}
      buttonText={buttonText}
    />
  )
}