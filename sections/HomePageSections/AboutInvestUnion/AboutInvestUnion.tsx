import {GreenButton, SectionContainer, SectionName} from "@/components";
import Image from "next/image";
import {AboutInvestUnionWood} from "@/assets/images";
import {ButtonType} from "@/components/GreenButton";
import {getTranslations} from "next-intl/server";

type Props = {
  locale: string;
}

export const AboutInvestUnion = async ({ locale }: Props) => {
  const translations = await getTranslations({ locale, namespace: 'about' });

  return (
    <section className="py-[100px] px-4 md:px-10 md:py-[180px] xl:py-[200px]">
      <SectionContainer>
        <div className="xl:flex justify-between items-start xl:mb-20">
          <SectionName heading={translations('title')} />
          <h3 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:max-w-[900px] xl:mb-0 xl:mt-0">
            {translations('bigText')}
          </h3>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5 xl:gap-0">
          <Image className="md:w-[207px] md:h-[221px] xl:w-[322px] xl:h-[206px]" src={AboutInvestUnionWood} alt={'About Invest Union wood picture'} />
          <p className="hidden xl:block max-w-[440px] ml-auto">
            {translations('paragraphs.paragraph1')}
          </p>
          <div className="xl:ml-5">
            <p className="mb-6 mt-10 md:mt-0 md:mb-5 xl:hidden">
              {translations('paragraphs.paragraph1')}
            </p>
            <p className="hidden xl:block max-w-[440px]">
              {translations('paragraphs.paragraph2')}
            </p>
            <div className="md:max-w-[245px] xl:mt-[66px]">
              <GreenButton buttonType={ButtonType.Outlined} buttonText={translations('moreAboutUs')} />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}