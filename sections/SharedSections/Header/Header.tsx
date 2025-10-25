"use client";

import { useEffect, useState } from "react";
import { Burger, BurgerBlack, Logo, LogoColoredBlack } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "@/sections/SharedSections/Header/components/BurgerMenu";
import { usePathname } from "next/navigation";

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
        className={`fixed flex items-center justify-between w-full px-4 py-5 z-[10] transition-all duration-300 md:px-10 md:py-6 ${
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
        <Link href={"/"}>
          <Image
            src={shouldNotBeWhite ? Logo : LogoColoredBlack}
            alt="Invest Union logotype"
          />
        </Link>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-1">
            <button className={`p-2 uppercase ${shouldNotBeWhite ? 'text-white' : 'text-darkGray'}`}>ua</button>
            <div className={`h-6 w-[1px] ${shouldNotBeWhite ? 'bg-white' : 'bg-darkGray'}`} />
            <button className="p-2 uppercase text-gray">en</button>
          </div>
          <button onClick={toggleMenu}>
            <Image
              src={shouldNotBeWhite ? Burger : BurgerBlack}
              alt="Burger menu icon"
            />
          </button>
        </div>
      </header>

      {isMenuOpen && <BurgerMenu toggleMenu={toggleMenu} />}
    </>
  );
};
