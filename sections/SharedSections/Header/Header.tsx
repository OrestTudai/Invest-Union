"use client";

import { useEffect, useState } from "react";
import { Burger, BurgerBlack, Logo, LogoColoredBlack } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "@/sections/SharedSections/Header/components/BurgerMenu";
import {useParams} from "next/navigation";
import {SectionContainer} from "@/components";
import {useLocale} from "use-intl";
import {usePathname, useRouter} from '@/i18n/navigation';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale()
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const shouldNotBeWhite = pathname !== "/gallery" && pathname !== "/contacts" && pathname !== "/news";

  const changeLocale = (locale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      {pathname, params},
      {locale}
    );
  }

  const languageSelectorEnColor =
    locale === 'en' ?
      (shouldNotBeWhite ? 'text-white' : 'text-darkGray')
      : 'text-gray'

  const languageSelectorUkColor = locale === 'uk' ?
    (shouldNotBeWhite ? 'text-white' : 'text-darkGray')
    : 'text-gray'

  return (
    <>
      <header
        className={`fixed w-full px-4 py-5 z-[20] transition-all duration-300 md:px-10 md:py-6 xl:py-[28px] ${
          shouldNotBeWhite
            ? isScrolled
              ? "bg-black/80 backdrop-blur-md"
              : "bg-transparent"
            : "bg-white"
        }`}
        style={pathname === "/gallery" || pathname === "/contacts" || pathname === "/news" ? {
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
        } : {}}
      >
        <SectionContainer className="flex items-center justify-between">
          <Link href={`/${locale}`}>
            <Image
              src={shouldNotBeWhite ? Logo : LogoColoredBlack}
              alt="Invest Union logotype"
            />
          </Link>
          <div className="flex items-center gap-10">
            <ul className={`hidden xl:flex gap-5 text-[16px] ${shouldNotBeWhite && 'text-white'}`}>
              <li>
                <Link
                  className={`w-fit py-2 px-2 ${pathname === "/" && "text-green"}`}
                  href={`/${locale}`}
                >
                  Головна
                </Link>
              </li>
              <li>
                <Link
                  className={`w-fit py-2 px-2 ${pathname === "/about-us" && "text-green"}`}
                  href={`/${locale}/about-us`}
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  className={`w-fit py-2 px-2 ${pathname === "/gallery" && "text-green"}`}
                  href={`/${locale}/gallery`}
                >
                  Галерея
                </Link>
              </li>
              {/*<li>*/}
              {/*  <Link*/}
              {/*    className={`w-fit py-2 px-2 ${pathname === "/news" && "text-green"}`}*/}
              {/*    href={`/${locale}/news`}*/}
              {/*  >*/}
              {/*    Новини*/}
              {/*  </Link>*/}
              {/*</li>*/}
              <li>
                <Link
                  className={`w-fit py-2 px-2 ${pathname === "/contacts" && "text-green"}`}
                  href={`/${locale}/contacts`}
                >
                  Контакти
                </Link>
              </li>
            </ul>
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => changeLocale('uk')}
                className={`p-2 uppercase ${languageSelectorUkColor}`}
              >
                ua
              </button>
              <div className={`h-6 w-[1px] ${shouldNotBeWhite ? 'bg-white' : 'bg-darkGray'}`} />
              <button
                onClick={() => changeLocale('en')}
                className={`p-2 uppercase ${languageSelectorEnColor}`}
              >
                en
              </button>
            </div>
            <button className="xl:hidden" onClick={toggleMenu}>
              <Image
                src={shouldNotBeWhite ? Burger : BurgerBlack}
                alt="Burger menu icon"
              />
            </button>
          </div>
        </SectionContainer>

        {isMenuOpen && <BurgerMenu toggleMenu={toggleMenu} />}
      </header>
    </>
  );
};
