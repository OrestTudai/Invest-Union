import {GreenButton, SectionContainer, SectionName} from "@/components";
import {ButtonType} from "@/components/GreenButton";
import {MoreThanJustWoodData, MoreThanJustWoodDataXl} from "@/sections/HomePageSections/MoreThanJustWood/constants";
import MoreThanJustWoodCard from "@/sections/HomePageSections/MoreThanJustWood/components/MoreThanJustWoodCard";
import Image from "next/image";
import {getTranslations} from "next-intl/server";

type Props = {
  locale: string;
}

export const MoreThanJustWood = async ({ locale }: Props) => {
  const translations = await getTranslations({ locale, namespace: 'gallery' })

  return (
    <section className="pb-[100px] px-4 md:pb-[180px] md:px-10 xl:pb-[200px]">
      <SectionContainer>
        <SectionName
          sectionName={
            <h2 className="hidden xl:block">{translations('heading.line1')} <br /> {translations('heading.line2')} <span className="text-green">{translations('heading.line3')}</span></h2>
          }
          heading={translations('title')}
          postsCount={'(25+)'}
        />
        <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:hidden">{translations('heading.line1')} <br /> {translations('heading.line2')} <span className="text-green">{translations('heading.line3')}</span></h2>
        <div className="flex flex-col gap-6 mb-6 md:grid md:grid-cols-2 md:gap-y-8 md:gap-x-5 md:mb-10 xl:mt-20 xl:hidden">
          {MoreThanJustWoodData.map((item, index) => (
            <MoreThanJustWoodCard
              paragraph={item.paragraph}
              image={item.image}
              key={`more-than-just-wood-${index}`}
            />
          ))}
        </div>
        <div className="hidden xl:flex w-full gap-5 mt-20">
          <div
            className="flex flex-col gap-2 w-1/3"
          >
            <div className="relative w-full h-[440px] overflow-hidden">
              <Image
                src={MoreThanJustWoodDataXl[0].image}
                alt={MoreThanJustWoodDataXl[0].paragraph}
                fill
                className="object-cover"
              />
            </div>
            <p>{MoreThanJustWoodDataXl[0].paragraph}</p>
          </div>
          <div
            className="flex flex-col gap-2 w-[calc(66%+40px)]"
          >
            <div className="relative w-full h-[440px] overflow-hidden">
              <Image
                src={MoreThanJustWoodDataXl[1].image}
                alt={MoreThanJustWoodDataXl[1].paragraph}
                fill
                className="object-cover"
              />
            </div>
            <p>{MoreThanJustWoodDataXl[1].paragraph}</p>
          </div>
        </div>
        <div className="hidden xl:flex w-full gap-5 mt-10">
          {MoreThanJustWoodDataXl.slice(2, 5).map((item, index) => (
            <div
              key={`more-than-just-wood-${index}`}
              className="flex flex-col gap-2 w-1/3"
            >
              <div className="relative w-full h-[440px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.paragraph}
                  fill
                  className="object-cover"
                />
              </div>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
        <div className="hidden xl:flex w-full gap-5 mt-10">
          <div
            className="flex flex-col gap-2 w-[calc(66%+40px)]"
          >
            <div className="relative w-full h-[440px] overflow-hidden">
              <Image
                src={MoreThanJustWoodDataXl[5].image}
                alt={MoreThanJustWoodDataXl[5].paragraph}
                fill
                className="object-cover"
              />
            </div>
            <p>{MoreThanJustWoodDataXl[5].paragraph}</p>
          </div>
          <div
            className="flex flex-col gap-2 w-1/3"
          >
            <div className="relative w-full h-[440px] overflow-hidden">
              <Image
                src={MoreThanJustWoodDataXl[6].image}
                alt={MoreThanJustWoodDataXl[6].paragraph}
                fill
                className="object-cover"
              />
            </div>
            <p>{MoreThanJustWoodDataXl[6].paragraph}</p>
          </div>
        </div>
        <div className="md:max-w-[305px] md:mx-auto xl:mt-12">
          <GreenButton buttonType={ButtonType.Outlined} buttonText={translations('watchAllGallery')} />
        </div>
      </SectionContainer>
    </section>
  )
}