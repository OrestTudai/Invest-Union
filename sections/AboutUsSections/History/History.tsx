import {SectionContainer, SectionName} from "@/components";
import Image from "next/image";
import {AboutImageWood, AboutImageWorkers} from "@/assets/images";
import {getTranslations} from "next-intl/server";

type Props = {
  locale: string;
}

export const History = async ({ locale }: Props) => {
  const translations = await getTranslations({ locale, namespace: 'history' })
  const year = new Date().getFullYear();

  return (
    <section className="py-[100px] px-4 md:py-[180px] md:px-10 xl:py-[200px]">
      <SectionContainer>
        <SectionName
          heading={translations('title')}
          sectionName={
            <h2 className="hidden mb-10 md:mb-20 xl:block">{translations('heading')}</h2>
          }
          postsCount={`(2000-${year - 1})`}
        />
        <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:hidden">{translations('heading')}</h2>
        <div className="flex flex-col md:flex-row md:gap-4 md:mb-10 xl:justify-between xl:mb-[100px]">
          <Image className="md:w-[207px] md:h-[144px] xl:w-[322px] xl:h-[206px]" src={AboutImageWood} alt={'About image wood'} />
          <p className="my-6 text-darkGray md:my-0 xl:hidden">
            {translations('text_part_1')} {translations('text_part_2')}
          </p>
          <div className="hidden xl:flex gap-5">
            <p className="max-w-[440px] text-darkGray">
              {translations('text_part_1')}
            </p>
            <p className="max-w-[440px] text-darkGray">
              {translations('text_part_2')}
            </p>
          </div>
        </div>
        <Image
          className="md:h-[301px] md:object-cover xl:h-[460px] xl:w-[900px] xl:ml-auto"
          src={AboutImageWorkers}
          alt={'About image workers'}
        />
      </SectionContainer>
    </section>
  )
}