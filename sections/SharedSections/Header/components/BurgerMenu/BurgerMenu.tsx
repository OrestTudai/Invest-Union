import Image from "next/image";
import { CrossIcon, LogoColoredBlack } from "@/assets/svg";
import Link from "next/link";
import { GreenButton } from "@/components";
import { ButtonType } from "@/components/GreenButton";

type Props = {
  toggleMenu: () => void;
};

export const BurgerMenu = ({ toggleMenu }: Props) => {
  return (
    <section className="fixed inset-0 z-20 flex flex-col w-full h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between pb-5 px-4 pt-5 shrink-0">
        <Image src={LogoColoredBlack} alt="Burger menu logo" />
        <button onClick={toggleMenu}>
          <Image src={CrossIcon} alt="Close burger menu" />
        </button>
      </div>

      {/* Scrollable middle section */}
      <div className="overflow-auto flex-1 px-4">
        {/* Language switcher */}
        <div className="flex items-center gap-1 mt-10">
          <button className="p-2 uppercase text-darkGray">ua</button>
          <div className="h-6 w-[1px] bg-darkGray" />
          <button className="p-2 uppercase text-gray">en</button>
        </div>

        {/* Navigation links */}
        <ul className="flex flex-col gap-2 mt-10 mb-12 text-[18px]">
          <li>
            <Link className="w-fit py-2" href="/">Головна</Link>
          </li>
          <li>
            <Link className="w-fit py-2" href="/">Про нас</Link>
          </li>
          <li>
            <Link className="w-fit py-2" href="/">Галерея</Link>
          </li>
          <li>
            <Link className="w-fit py-2" href="/">Новини</Link>
          </li>
          <li>
            <Link className="w-fit py-2" href="/">Контакти</Link>
          </li>
        </ul>
      </div>

      {/* Footer (fixed bottom) */}
      <div className="shrink-0 pt-10 pb-12 px-4 bg-black">
        <GreenButton
          buttonType={ButtonType.Filled}
          buttonText="Обговорити співпрацю"
        />
        <div className="flex items-start justify-between mt-10">
          <div className="flex flex-col gap-3">
            <span className="text-white underline">(907) 555-0101</span>
            <span className="text-white underline">(907) 555-0101</span>
            <span className="text-white">example@teamwebflow.com</span>
          </div>
          <div className="flex flex-col">
            <Link className="w-fit p-2 text-white" href="/">Facebook</Link>
            <Link className="w-fit p-2 text-white" href="/">Instagram</Link>
          </div>
        </div>
        <span className="block mt-10 text-white">
          1901 Thornridge Cir. Shiloh, <br /> Hawaii 81063
        </span>
      </div>
    </section>
  );
};
