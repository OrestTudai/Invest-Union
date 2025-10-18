import Image from "next/image";
import {LogoColored} from "@/assets/svg";
import {GoToTopButton} from "@/sections/SharedSections/Footer/components";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 px-4 pt-10 pb-[48px] bg-black text-white">
      <div className="flex justify-between items-center">
        <Image src={LogoColored} alt={'Invest Union colored logotype'} />
        <GoToTopButton />
      </div>
      <p>1901 Thornridge Cir. Shiloh, <br/>Hawaii 81063</p>
      <div className="flex flex-col text-lightGray">
        <Link className="w-fit p-2" href="/">Головна</Link>
        <Link className="w-fit p-2" href="/">Про нас</Link>
        <Link className="w-fit p-2" href="/">Галерея</Link>
        <Link className="w-fit p-2" href="/">Новини</Link>
        <Link className="w-fit p-2" href="/">Контакти</Link>
      </div>
      <div className="flex flex-col text-lightGray">
        <Link className="w-fit p-2" href="/">Facebook</Link>
        <Link className="w-fit p-2" href="/">Instagram</Link>
      </div>
      <div className="flex flex-col gap-3 text-lightGray">
        <Link className="w-fit underline" href="/">(907) 555-0101</Link>
        <Link className="w-fit underline" href="/">(907) 555-0101</Link>
        <Link className="w-fit underline" href="/">example@teamwebflow.com</Link>
      </div>
      <div className="flex flex-col gap-4 text-lightGray">
        <Link className="w-fit" href={'/'}>Політика конфіденційності</Link>
        <span>© 2025 Invest-Union. Всі права захищено.</span>
      </div>
    </footer>
  )
}