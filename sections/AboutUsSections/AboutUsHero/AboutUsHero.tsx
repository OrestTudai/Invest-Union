import Image from "next/image";
import { AboutUsInvestUnionWoodBg } from "@/assets/images";
import { ArrowsButton } from "@/assets/svg";
import { SectionContainer } from "@/components";
import { getTranslations } from "next-intl/server";

type Props = {
  locale: string;
};

export const AboutUsHero = async ({ locale }: Props) => {
  const translations = await getTranslations({
    locale,
    namespace: "historyHero",
  });

  return (
    <section className="relative bg-cover bg-center overflow-hidden">
      <Image
        src={AboutUsInvestUnionWoodBg}
        alt="About us background hero"
        fill
        priority
        className="object-cover object-center"
      />

      <SectionContainer className="relative z-10 flex flex-col items-center pt-[260px] pb-12 px-4 md:px-10 md:pt-[520px] md:pb-[100px] xl:pt-[322px]">
        <h1 className="font-libre text-center text-[#F5F5F5] !text-[90px] leading-none md:hidden">
          Invest Union
        </h1>

        {/* Desktop Title */}
        <h1 className="hidden font-libre text-center text-[#F5F5F5] !text-[98px] leading-none md:block">
          Invest-Union
        </h1>

        <h4
          className="mt-6 text-center text-white max-w-[900px] md:mt-10 md:max-w-[664px]"
          style={{
            textShadow: "3.94px 3.94px 7.87px rgba(0, 0, 0, 0.5)",
          }}
        >
          {translations("paragraph")}
        </h4>

        <Image
          className="mt-[156px] md:mt-[262px] md:w-[86px] md:h-[72px] xl:mt-[222px] xl:w-[106px] xl:h-[88px]"
          src={ArrowsButton}
          alt="About us arrows bottom"
        />
      </SectionContainer>
    </section>
  );
};
