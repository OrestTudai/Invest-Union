"use client";

import { useEffect, useState } from "react";
import { Burger, BurgerBlack, Logo, LogoColoredBlack } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "@/sections/SharedSections/Header/components/BurgerMenu";
import { usePathname } from "next/navigation";
import {SectionContainer} from "@/components";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
          <Link href={"/"}>
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
                  href="/"
                >
                  Головна
                </Link>
              </li>
              <li>
                <Link
                  className={`w-fit py-2 px-2 ${pathname === "/about-us" && "text-green"}`}
                  href="/about-us"
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  className={`w-fit py-2 px-2 ${pathname === "/gallery" && "text-green"}`}
                  href="/gallery"
                >
                  Галерея
                </Link>
              </li>
              <li>
                <Link
                  className={`w-fit py-2 px-2 ${pathname === "/news" && "text-green"}`}
                  href="/news"
                >
                  Новини
                </Link>
              </li>
              <li>
                <Link
                  className={`w-fit py-2 px-2 ${pathname === "/contacts" && "text-green"}`}
                  href="/contacts"
                >
                  Контакти
                </Link>
              </li>
            </ul>
            <div className="hidden md:flex items-center gap-1">
              <button className={`p-2 uppercase ${shouldNotBeWhite ? 'text-white' : 'text-darkGray'}`}>ua</button>
              <div className={`h-6 w-[1px] ${shouldNotBeWhite ? 'bg-white' : 'bg-darkGray'}`} />
              <button className="p-2 uppercase text-gray">en</button>
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
