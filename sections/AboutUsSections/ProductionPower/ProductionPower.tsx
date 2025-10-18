import { GreenButton, SectionName } from "@/components";
import { ButtonType } from "@/components/GreenButton";
import { ProductionPowerData } from "@/sections/AboutUsSections/ProductionPower/constants";
import Image from "next/image";

export const ProductionPower = () => {
  return (
    <section className="px-4">
      <SectionName heading="Виробництво" postsCount="(07)" />
      <h2 className="mt-8 mb-10">
        Виробничі потужності <span className="text-green">Invest-Union</span>
      </h2>

      <div className="flex flex-col gap-6 mb-6">
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

      <GreenButton
        buttonType={ButtonType.Outlined}
        buttonText="Переглянути всю галерею"
      />
    </section>
  );
};
