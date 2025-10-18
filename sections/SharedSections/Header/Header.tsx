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

  return (
    <>
      <header
        className={`fixed flex items-center justify-between w-full px-4 py-5 z-[10] transition-all duration-300 ${
          pathname !== "/gallery"
            ? isScrolled
              ? "bg-black/80 backdrop-blur-md"
              : "bg-transparent"
            : "bg-white"
        }`}
        style={pathname !== "/gallery" ? {
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
        } : {}}
      >
        <Link href={"/"}>
          <Image
            src={pathname !== "/gallery" ? Logo : LogoColoredBlack}
            alt="Invest Union logotype"
          />
        </Link>

        <button onClick={toggleMenu}>
          <Image
            src={pathname !== "/gallery" ? Burger : BurgerBlack}
            alt="Burger menu icon"
          />
        </button>
      </header>

      {isMenuOpen && <BurgerMenu toggleMenu={toggleMenu} />}
    </>
  );
};
