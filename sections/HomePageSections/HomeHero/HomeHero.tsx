import {HomeHeroBgSm, WatchVideoButtonBgSm} from "@/assets/images";
import Image from "next/image";
import {PlayIcon} from "@/assets/svg";

export const HomeHero = () => {
  return (
    <section
      className="pb-[134px] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${HomeHeroBgSm.src})` }}
    >
      <div className="flex justify-between">
        <h1 className="text-[65px]! px-4 mt-[194px]">Invest<br />Union</h1>
        <button className="flex flex-col justify-end items-center h-[390px] w-[95px] gap-20 pb-8 bg-cover" style={{ backgroundImage: `url(${WatchVideoButtonBgSm.src})` }}>
          <span className="block rotate-[-90deg] text-nowrap opacity-70">Дивитись відео</span>
          <Image src={PlayIcon} alt={'Play icon'} />
        </button>
      </div>
      <p className="px-4 mt-[45px] text-[34px] leading-[100%]">
        Відроджений матеріал для довговічних рішень: <br />
        <span className="font-medium">амбарна деревина</span>
      </p>
      <div className="max-w-[277px] ml-auto mt-[64px] py-5 px-4 rounded-[2px] bg-[#FFFFFF1A] backdrop-blur-xs shadow-[0_0_8px_rgba(0,0,0,0.36)]">
        <p className="text-right">
          Єдині в Україні <span className="font-medium">виробники трьохшарової меблевої панелі</span> з амбарного дуба та хвої за європейським стандартом
        </p>
      </div>
    </section>
  );
};
