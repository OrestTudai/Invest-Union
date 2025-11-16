import {HomeHeroBgSm} from "@/assets/images";
import {SectionContainer} from "@/components";
import {ShowVideoButton} from "@/sections/HomePageSections/HomeHero/components";
import {getTranslations} from "next-intl/server";

type Props = {
  locale: string;
}

export const HomeHero = async ({ locale }: Props) => {
  const translations = await getTranslations({ locale, namespace: 'heroHome' })

  return (
    <section
      className="pb-[134px] bg-cover bg-center text-white md:px-10 md:pb-[138px]"
      style={{ backgroundImage: `url(${HomeHeroBgSm.src})` }}
    >
      <SectionContainer>
        <div className="flex justify-between xl:justify-start">
          <h1 className="font-libre! text-[65px]! px-4 mt-[194px] md:mt-[253px] md:!text-[98px] md:px-0">Invest<br />Union</h1>
          <ShowVideoButton buttonText={translations('buttonText')} />
          <p className="hidden ml-auto px-4 mt-[45px] leading-[100%] md:px-0 md:mt-10 md:!text-[52px] xl:block xl:mt-[253px]">
            {translations('title.line1')} <br className="hidden md:block" />{translations('title.line2')} <br />
            <span className="font-medium">{translations('title.line3')}</span>
          </p>
        </div>
        <p className="px-4 mt-[45px] text-[34px] leading-[100%] md:px-0 md:mt-10 md:!text-[52px] xl:hidden">
          {translations('title.line1')} <br className="hidden md:block" />{translations('title.line2')} <br />
          <span className="font-medium">{translations('title.line3')}</span>
        </p>
        <div className="max-w-[277px] ml-auto mt-[64px] py-5 px-4 rounded-[2px] bg-[#FFFFFF1A] backdrop-blur-xs shadow-[0_0_8px_rgba(0,0,0,0.36)] md:max-w-[322px] md:py-8 md:px-5 xl:px-[28px] xl:mt-[100px]">
          <p className="text-right md:!text-[20px]">
            {translations('onlyOne.line1')} <span className="font-medium">{translations('onlyOne.line2')}</span> {translations('onlyOne.line3')}
          </p>
        </div>
      </SectionContainer>
    </section>
  );
};
