import { AboutUsInvestUnionWoodBg } from "@/assets/images";
import Image from "next/image";
import { ArrowsButton } from "@/assets/svg";

export const AboutUsHero = () => {
  return (
    <section
      className="flex flex-col items-center pt-[260px] pb-12 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${AboutUsInvestUnionWoodBg.src})` }}
    >
      <h1 className="text-center text-[#F5F5F5] !text-[90px] leading-none">
        Invest Union
      </h1>

      <h4
        className="mt-6 text-center text-white max-w-[900px]"
        style={{
          textShadow: "3.94px 3.94px 7.87px rgba(0, 0, 0, 0.5)",
        }}
      >
        Виробники трьохшарової меблевої панелі з старого, столітнього, амбарного
        дуба та хвої за європейським стандартом
      </h4>

      <Image
        className="mt-[156px]"
        src={ArrowsButton}
        alt="About us arrows bottom"
      />
    </section>
  );
};
