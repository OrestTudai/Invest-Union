"use client";

import { useEffect, useState } from "react";
import { Burger, Logo } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed flex items-center justify-between w-full px-4 py-5 z-[10] transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Link href={"/"}>
        <Image src={Logo} alt="Invest Union white logotype" />
      </Link>
      <Image src={Burger} alt="Burger menu icon" />
    </header>
  );
};
