import { GreenButton, SectionContainer, SectionName } from "@/components";
import { ButtonType } from "@/components/GreenButton";
import { ProductionPowerData } from "@/sections/AboutUsSections/ProductionPower/constants";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

type Props = {
  locale: string;
};

export const ProductionPower = async ({ locale }: Props) => {
  const translations = await getTranslations({
    locale,
    namespace: "productionPower",
  });

  // Hover scale only on XL screens
  const imageBaseClasses =
    "object-cover w-full h-full transition-transform duration-500 will-change-transform xl:group-hover:scale-105";

  return (
    <section className="px-4">
      <SectionContainer>
        <SectionName
          sectionName={
            <h2 className="hidden mb-20 xl:block">
              {translations("heading")} <br className="hidden md:block" />
              <span className="text-green">Invest-Union</span>
            </h2>
          }
          heading={translations("title")}
          postsCount="(07)"
        />

        <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:hidden">
          {translations("heading")} <br className="hidden md:block" />
          <span className="text-green">Invest-Union</span>
        </h2>

        <div className="flex flex-col gap-6 mb-6 md:hidden xl:hidden">
          {ProductionPowerData.map((item, index) => (
            <div className="flex flex-col gap-2" key={`production-power-data-${index}`}>
              <div className="relative w-full h-[340px] overflow-hidden group">
                {typeof item.image === "string" && item.image.endsWith(".mp4") ? (
                  <video
                    src={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={imageBaseClasses}
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.paragraph}
                    fill
                    className={imageBaseClasses}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 gap-5 xl:hidden">
          {ProductionPowerData.slice(0, 3).map((item, index) => {
            if (index === 1) return null;
            return (
              <div className="flex flex-col gap-4" key={`production-power-data-${index}`}>
                <div className="relative w-full h-[340px] overflow-hidden group">
                  {typeof item.image === "string" && item.image.endsWith(".mp4") ? (
                    <video
                      src={item.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={imageBaseClasses}
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.paragraph}
                      fill
                      className={imageBaseClasses}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden flex-col gap-4 my-4 md:flex xl:hidden">
          <div className="relative w-full h-[340px] overflow-hidden group">
            {typeof ProductionPowerData[1].image === "string" &&
            ProductionPowerData[1].image.endsWith(".mp4") ? (
              <video
                src={ProductionPowerData[1].image}
                autoPlay
                loop
                muted
                playsInline
                className={imageBaseClasses}
              />
            ) : (
              <Image
                src={ProductionPowerData[1].image}
                alt={ProductionPowerData[1].paragraph}
                fill
                className={imageBaseClasses}
              />
            )}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-x-5 gap-y-5 xl:hidden">
          {ProductionPowerData.slice(3).map((item, index) => {
            if (index === 6) return null;
            return (
              <div className="flex flex-col gap-4" key={`production-power-data-${index}`}>
                <div className="relative w-full h-[340px] overflow-hidden group">
                  {typeof item.image === "string" && item.image.endsWith(".mp4") ? (
                    <video
                      src={item.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={imageBaseClasses}
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.paragraph}
                      fill
                      className={imageBaseClasses}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden xl:flex gap-5">
          <div className="flex flex-col gap-4 w-1/3">
            <div className="relative h-[435px] w-full overflow-hidden group">
              {typeof ProductionPowerData[0].image === "string" &&
              ProductionPowerData[0].image.endsWith(".mp4") ? (
                <video
                  src={ProductionPowerData[0].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={imageBaseClasses}
                />
              ) : (
                <Image
                  src={ProductionPowerData[0].image}
                  alt={ProductionPowerData[0].paragraph}
                  fill
                  className={imageBaseClasses}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[calc(66%+32px)]">
            <div className="relative h-[435px] w-full overflow-hidden group">
              {typeof ProductionPowerData[1].image === "string" &&
              ProductionPowerData[1].image.endsWith(".mp4") ? (
                <video
                  src={ProductionPowerData[1].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={imageBaseClasses}
                />
              ) : (
                <Image
                  src={ProductionPowerData[1].image}
                  alt={ProductionPowerData[1].paragraph}
                  fill
                  className={imageBaseClasses}
                />
              )}
            </div>
          </div>
        </div>

        <div className="hidden xl:flex gap-5 mt-5">
          {[3, 4, 2].map((i) => (
            <div key={i} className="flex flex-col gap-4 w-1/3">
              <div className="relative h-[435px] w-full overflow-hidden group">
                {typeof ProductionPowerData[i].image === "string" &&
                ProductionPowerData[i].image.endsWith(".mp4") ? (
                  <video
                    src={ProductionPowerData[i].image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={imageBaseClasses}
                  />
                ) : (
                  <Image
                    src={ProductionPowerData[i].image}
                    alt={ProductionPowerData[i].paragraph}
                    fill
                    className={imageBaseClasses}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden xl:flex gap-5 mt-5">
          <div className="flex flex-col gap-4 w-[calc(66%+32px)]">
            <div className="relative h-[435px] w-full overflow-hidden group">
              {typeof ProductionPowerData[5].image === "string" &&
              ProductionPowerData[5].image.endsWith(".mp4") ? (
                <video
                  src={ProductionPowerData[5].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={imageBaseClasses}
                />
              ) : (
                <Image
                  src={ProductionPowerData[5].image}
                  alt={ProductionPowerData[5].paragraph}
                  fill
                  className={imageBaseClasses}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 w-1/3">
            <div className="relative h-[435px] w-full overflow-hidden group">
              {typeof ProductionPowerData[6].image === "string" &&
              ProductionPowerData[6].image.endsWith(".mp4") ? (
                <video
                  src={ProductionPowerData[6].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={imageBaseClasses}
                />
              ) : (
                <Image
                  src={ProductionPowerData[6].image}
                  alt={ProductionPowerData[6].paragraph}
                  fill
                  className={imageBaseClasses}
                />
              )}
            </div>
          </div>
        </div>

        <GreenButton
          className="md:hidden xl:hidden"
          buttonType={ButtonType.Outlined}
          buttonText={translations("buttonText")}
        />
      </SectionContainer>
    </section>
  );
};
