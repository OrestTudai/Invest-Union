import {DevelopBusinessBg} from "@/assets/gifs";
import {GreenButton} from "@/components";
import {ButtonType} from "@/components/GreenButton";
import {getTranslations} from "next-intl/server";

type Props = {
  locale: string;
}

export const DevelopBusiness = async ({ locale }: Props) => {
  const translations = await getTranslations({ locale: locale, namespace: 'developBusiness' });

  return (
    <section
      className="py-[288px] px-4 bg-cover md:py-[420px] md:px-10 xl:py-[249px]"
      style={{ backgroundImage: `url(${DevelopBusinessBg.src})` }}
    >
      <h2 className="text-white text-center text-[32px] md:!text-[68px] xl:!text-[72px]">
        {translations('heading.line1')} <br className="hidden xl:block" /> {translations('heading.line2')}
      </h2>
      <h4 className="mt-6 text-center text-white md:max-w-[490px] md:mx-auto md:mt-2 xl:!text-[20px]">{translations('paragraph')}</h4>
      <GreenButton className="mt-8 md:mt-12 md:max-w-[277px] md:mx-auto md:block" buttonType={ButtonType.Filled} buttonText={translations('buttonText')} />
    </section>
  )
}