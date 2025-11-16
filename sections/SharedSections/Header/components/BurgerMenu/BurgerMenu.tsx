"use client"

import Image from "next/image";
import { CrossIcon, LogoColoredBlack } from "@/assets/svg";
import Link from "next/link";
import { GreenButton } from "@/components";
import { ButtonType } from "@/components/GreenButton";
import {usePathname} from "next/navigation";
import {useTranslations} from "next-intl";

type Props = {
  toggleMenu: () => void;
  locale: string;
  enSwitchClick: () => void;
  ukSwitchClick: () => void;
};

export const BurgerMenu = ({ toggleMenu, locale, enSwitchClick, ukSwitchClick }: Props) => {
  const pathname = usePathname();
  const translations = useTranslations('footer')

  return (
    <section className="fixed inset-0 z-20 flex flex-col w-full h-screen bg-white">
      <div className="flex items-center justify-between pb-5 px-4 pt-5 shrink-0">
        <Image src={LogoColoredBlack} alt="Burger menu logo" />
        <button onClick={toggleMenu}>
          <Image src={CrossIcon} alt="Close burger menu" />
        </button>
      </div>

      <div className="overflow-auto flex-1 px-4">
        <div className="flex items-center gap-1 mt-10">
          <button
            onClick={ukSwitchClick}
            className={`p-2 uppercase ${locale === 'uk' ? 'text-darkGray' : 'text-gray'}`}
          >
            ua
          </button>
          <div className="h-6 w-[1px] bg-darkGray" />
          <button
            onClick={enSwitchClick}
            className={`p-2 uppercase ${locale === 'en' ? 'text-darkGray' : 'text-gray'}`}
          >
            en
          </button>
        </div>

        <ul className="flex flex-col gap-2 mt-10 mb-12 text-[18px]">
          <li>
            <Link
              onClick={toggleMenu}
              className={`w-fit py-2 ${pathname === `/${locale}` && "text-green"}`}
              href={`/${locale}`}
            >
              {locale === 'uk' ? 'Головна' : 'Home'}
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              className={`w-fit py-2 ${pathname === `/${locale}/about-us` && "text-green"}`}
              href={`/${locale}/about-us`}
            >
              {locale === 'uk' ? 'Про нас' : 'About us'}
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              className={`w-fit py-2 ${pathname === `/${locale}/gallery` && "text-green"}`}
              href={`/${locale}/gallery`}
            >
              {locale === 'uk' ? 'Галерея' : 'Gallery'}
            </Link>
          </li>
          {/*<li>*/}
          {/*  <Link*/}
          {/*    onClick={toggleMenu}*/}
          {/*    className={`w-fit py-2 ${pathname === "/news" && "text-green"}`}*/}
          {/*    href={`/${locale}/news`}*/}
          {/*  >*/}
          {/*    {locale === 'uk' ? 'Новини' : 'News'}*/}
          {/*  </Link>*/}
          {/*</li>*/}
          <li>
            <Link
              onClick={toggleMenu}
              className={`w-fit py-2 ${pathname === `/${locale}/contacts` && "text-green"}`}
              href={`/${locale}/contacts`}
            >
              {locale === 'uk' ? 'Контакти' : 'Contacts'}
            </Link>
          </li>
        </ul>
      </div>

      <div className="shrink-0 pt-10 pb-12 px-4 bg-black">
        <GreenButton
          buttonType={ButtonType.Filled}
          buttonText={translations('buttonText')}
        />
        <div className="flex items-start justify-between mt-10">
          <div className="flex flex-col gap-3">
            <span className="text-white underline">{translations('phone')}</span>
            <span className="text-white">ltd.invest.union@gmail.com</span>
          </div>
          <div className="flex flex-col">
            <Link className="w-fit p-2 text-white" href="/">Facebook</Link>
            <Link className="w-fit p-2 text-white" href="/">Instagram</Link>
          </div>
        </div>
        <span className="block mt-10 text-white">
          {translations('address')}
        </span>
      </div>
    </section>
  );
};
