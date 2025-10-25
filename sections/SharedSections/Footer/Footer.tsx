import Image from "next/image";
import {LogoColored} from "@/assets/svg";
import {GoToTopButton} from "@/sections/SharedSections/Footer/components";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 px-4 pt-10 pb-[48px] bg-black text-white md:pt-[72px] md:pb-10 md:px-10">
      <div className="flex justify-between items-center">
        <Image src={LogoColored} alt={'Invest Union colored logotype'} />
        <p className="md:!text-[20px]">1901 Thornridge Cir. Shiloh, <br/>Hawaii 81063</p>
        <GoToTopButton />
      </div>
      <p className="md:hidden">1901 Thornridge Cir. Shiloh, <br/>Hawaii 81063</p>
      <div className="flex flex-col gap-10 md:flex-row md:w-[433px] md:ml-auto">
        <div className="flex flex-col text-lightGray">
          <Link className="w-fit p-2" href="/">Головна</Link>
          <Link className="w-fit p-2" href="/about-us">Про нас</Link>
          <Link className="w-fit p-2" href="/gallery">Галерея</Link>
          <Link className="w-fit p-2" href="/news">Новини</Link>
          <Link className="w-fit p-2" href="/contacts">Контакти</Link>
        </div>
        <div className="flex flex-col text-lightGray">
          <Link className="w-fit p-2" href="/">Facebook</Link>
          <Link className="w-fit p-2" href="/">Instagram</Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-lightGray md:w-[433px] md:ml-auto">
        <Link className="w-fit underline" href="/">(907) 555-0101</Link>
        <Link className="w-fit underline" href="/">(907) 555-0101</Link>
        <Link className="w-fit underline" href="/">example@teamwebflow.com</Link>
      </div>
      <div className="flex flex-col gap-4 text-lightGray md:w-[433px] md:ml-auto">
        <Link className="w-fit" href={'/'}>Політика конфіденційності</Link>
        <span>© 2025 Invest-Union. Всі права захищено.</span>
      </div>
    </footer>
  )
}