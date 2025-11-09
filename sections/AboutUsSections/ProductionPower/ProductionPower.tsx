import {GreenButton, SectionContainer, SectionName} from "@/components";
import { ButtonType } from "@/components/GreenButton";
import { ProductionPowerData } from "@/sections/AboutUsSections/ProductionPower/constants";
import Image from "next/image";

export const ProductionPower = () => {
  return (
    <section className="px-4">
      <SectionContainer>
        <SectionName
          sectionName={
            <h2 className="hidden mb-20 xl:block">
              Виробничі потужності <br className="hidden md:block" />
              <span className="text-green">Invest-Union</span>
            </h2>
          }
          heading="Виробництво"
          postsCount="(07)"
        />

        <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:hidden">
          Виробничі потужності <br className="hidden md:block" />{" "}
          <span className="text-green">Invest-Union</span>
        </h2>

        <div className="flex flex-col gap-6 mb-6 md:hidden xl:hidden">
          {ProductionPowerData.map((item, index) => (
            <div
              className="flex flex-col gap-2"
              key={`production-power-data-${index}`}
            >
              <div className="relative w-full h-[340px] overflow-hidden">
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

        <div className="hidden md:grid grid-cols-2 gap-5 xl:hidden">
          {ProductionPowerData.slice(0, 3).map((item, index) => {
            if (index === 1) return null;

            return (
              <div
                className="flex flex-col gap-4"
                key={`production-power-data-${index}`}
              >
                <div className="relative w-full h-[340px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.paragraph}
                    fill
                    className="object-cover"
                  />
                </div>
                <p>{item.paragraph}</p>
              </div>
            );
          })}
        </div>

        <div className="hidden flex-col gap-4 my-8 md:flex xl:hidden">
          <div className="relative w-full h-[340px] overflow-hidden">
            <Image
              src={ProductionPowerData[1].image}
              alt={ProductionPowerData[1].paragraph}
              fill
              className="object-cover"
            />
          </div>
          <p>{ProductionPowerData[1].paragraph}</p>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-x-5 gap-y-8 xl:hidden">
          {ProductionPowerData.slice(3).map((item, index) => {
            if (index === 6) return null;

            return (
              <div
                className="flex flex-col gap-4"
                key={`production-power-data-${index}`}
              >
                <div className="relative w-full h-[340px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.paragraph}
                    fill
                    className="object-cover"
                  />
                </div>
                <p>{item.paragraph}</p>
              </div>
            );
          })}
        </div>
        <div className="hidden xl:flex gap-5">
          <div
            className="flex flex-col gap-4 w-1/3"
          >
            <div className="relative h-[435px] w-full overflow-hidden">
              <Image
                src={ProductionPowerData[0].image}
                alt={ProductionPowerData[0].paragraph}
                fill
                className="object-cover"
              />
            </div>
            <p>{ProductionPowerData[0].paragraph}</p>
          </div>
          <div
            className="flex flex-col gap-4 w-2/3"
          >
            <div className="relative h-[435px] w-full overflow-hidden">
              <Image
                src={ProductionPowerData[1].image}
                alt={ProductionPowerData[1].paragraph}
                fill
                className="object-cover"
              />
            </div>
            <p>{ProductionPowerData[1].paragraph}</p>
          </div>
        </div>
        <div className="hidden xl:flex gap-5 mt-10">
          <div
            className="flex flex-col gap-4 w-1/3"
          >
            <div className="relative h-[435px] w-full overflow-hidden">
              <Image
                src={ProductionPowerData[3].image}
                alt={ProductionPowerData[3].paragraph}
                fill
                className="object-cover"
              />
            </div>
            <p>{ProductionPowerData[3].paragraph}</p>
          </div>
          <div
            className="flex flex-col gap-4 w-1/3"
          >
            <div className="relative h-[435px] w-full overflow-hidden">
              <Image
                src={ProductionPowerData[4].image}
                alt={ProductionPowerData[4].paragraph}
                fill
                className="object-cover"
              />
            </div>
            <p>{ProductionPowerData[4].paragraph}</p>
          </div>
          <div
            className="flex flex-col gap-4 w-1/3"
          >
            <div className="relative h-[435px] w-full overflow-hidden">
              <Image
                src={ProductionPowerData[2].image}
                alt={ProductionPowerData[2].paragraph}
                fill
                className="object-cover"
              />
            </div>
            <p>{ProductionPowerData[2].paragraph}</p>
          </div>
        </div>
        <div className="hidden xl:flex gap-5 mt-10">
          <div
            className="flex flex-col gap-4 w-2/3"
          >
            <div className="relative h-[435px] w-full overflow-hidden">
              <Image
                src={ProductionPowerData[5].image}
                alt={ProductionPowerData[5].paragraph}
                fill
                className="object-cover"
              />
            </div>
            <p>{ProductionPowerData[5].paragraph}</p>
          </div>
          <div
            className="flex flex-col gap-4 w-1/3"
          >
            <div className="relative h-[435px] w-full overflow-hidden">
              <Image
                src={ProductionPowerData[6].image}
                alt={ProductionPowerData[6].paragraph}
                fill
                className="object-cover"
              />
            </div>
            <p>{ProductionPowerData[6].paragraph}</p>
          </div>
        </div>

        <GreenButton
          className="md:hidden xl:hidden"
          buttonType={ButtonType.Outlined}
          buttonText="Переглянути всю галерею"
        />
      </SectionContainer>
    </section>
  );
};
