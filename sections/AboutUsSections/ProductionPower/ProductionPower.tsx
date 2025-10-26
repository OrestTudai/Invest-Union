import { GreenButton, SectionName } from "@/components";
import { ButtonType } from "@/components/GreenButton";
import { ProductionPowerData } from "@/sections/AboutUsSections/ProductionPower/constants";
import Image from "next/image";

export const ProductionPower = () => {
  return (
    <section className="px-4">
      <SectionName heading="Виробництво" postsCount="(07)" />
      <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px]">
        Виробничі потужності <br className="hidden md:block" /> <span className="text-green">Invest-Union</span>
      </h2>

      <div className="flex flex-col gap-6 mb-6 md:hidden">
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
      <div className="hidden md:grid grid-cols-2 gap-5">
        {ProductionPowerData.slice(0, 3).map((item, index) => {
          if (index === 1) {
            return
          }

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
          )
        })}
      </div>
      <div
        className="hidden flex-col gap-4 my-8 md:flex"
      >
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
      <div className="hidden md:grid grid-cols-2 gap-x-5 gap-y-8">
        {ProductionPowerData.slice(3).map((item, index) => {
          if (index === 6) {
            return
          }

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
          )
        })}
      </div>

      <GreenButton
        className="md:hidden"
        buttonType={ButtonType.Outlined}
        buttonText="Переглянути всю галерею"
      />
    </section>
  );
};
