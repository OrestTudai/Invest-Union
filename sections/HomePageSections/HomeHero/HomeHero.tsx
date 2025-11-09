import {HomeHeroBgSm, WatchVideoButtonBgMd, WatchVideoButtonBgSm, WatchVideoButtonBgXl} from "@/assets/images";
import Image from "next/image";
import {PlayIcon} from "@/assets/svg";
import {SectionContainer} from "@/components";

export const HomeHero = () => {
  return (
    <section
      className="pb-[134px] bg-cover bg-center text-white md:px-10 md:pb-[138px]"
      style={{ backgroundImage: `url(${HomeHeroBgSm.src})` }}
    >
      <SectionContainer>
        <div className="flex justify-between xl:justify-start">
          <h1 className="text-[65px]! px-4 mt-[194px] md:mt-[253px] md:!text-[98px] md:px-0">Invest<br />Union</h1>
          <button className="flex flex-col justify-end items-center h-[390px] w-[95px] gap-20 pb-8 bg-cover md:hidden" style={{ backgroundImage: `url(${WatchVideoButtonBgSm.src})` }}>
            <span className="block rotate-[-90deg] text-nowrap opacity-70">Дивитись відео</span>
            <Image src={PlayIcon} alt={'Play icon'} />
          </button>
          <button className="hidden md:flex flex-col justify-end items-center h-[330px] w-[95px] gap-20 pb-8 bg-cover mt-[130px] xl:hidden" style={{ backgroundImage: `url(${WatchVideoButtonBgMd.src})` }}>
            <span className="block rotate-[-90deg] text-nowrap opacity-70">Дивитись відео</span>
            <Image src={PlayIcon} alt={'Play icon'} />
          </button>
          <button className="hidden flex-col ml-[220px] justify-end items-center h-[475px] w-[95px] gap-20 pb-8 bg-cover xl:flex" style={{ backgroundImage: `url(${WatchVideoButtonBgXl.src})` }}>
            <span className="block rotate-[-90deg] text-nowrap opacity-70">Дивитись відео</span>
            <Image src={PlayIcon} alt={'Play icon'} />
          </button>
          <p className="hidden ml-auto px-4 mt-[45px] leading-[100%] md:px-0 md:mt-10 md:!text-[52px] xl:block xl:mt-[253px]">
            Відроджений матеріал <br className="hidden md:block" />для довговічних рішень: <br />
            <span className="font-medium">амбарна деревина</span>
          </p>
        </div>
        <p className="px-4 mt-[45px] text-[34px] leading-[100%] md:px-0 md:mt-10 md:!text-[52px] xl:hidden">
          Відроджений матеріал <br className="hidden md:block" />для довговічних рішень: <br />
          <span className="font-medium">амбарна деревина</span>
        </p>
        <div className="max-w-[277px] ml-auto mt-[64px] py-5 px-4 rounded-[2px] bg-[#FFFFFF1A] backdrop-blur-xs shadow-[0_0_8px_rgba(0,0,0,0.36)] md:max-w-[322px] md:py-8 md:px-5 xl:px-[28px] xl:mt-[100px]">
          <p className="text-right md:!text-[20px]">
            Єдині в Україні <span className="font-medium">виробники трьохшарової меблевої панелі</span> з амбарного дуба та хвої за європейським стандартом
          </p>
        </div>
      </SectionContainer>
    </section>
  );
};
