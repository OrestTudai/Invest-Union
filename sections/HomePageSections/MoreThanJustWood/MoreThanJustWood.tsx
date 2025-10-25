import {GreenButton, SectionName} from "@/components";
import {ButtonType} from "@/components/GreenButton";
import {MoreThanJustWoodData} from "@/sections/HomePageSections/MoreThanJustWood/constants";
import MoreThanJustWoodCard from "@/sections/HomePageSections/MoreThanJustWood/components/MoreThanJustWoodCard";

export const MoreThanJustWood = () => {
  return (
    <section className="pb-[100px] px-4 md:pb-[180px] md:px-10">
      <SectionName heading={'Галерея'} postsCount={'(25+)'} />
      <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px]">Щось більше <br /> ніж просто <span className="text-green">дерево</span></h2>
      <div className="flex flex-col gap-6 mb-6 md:grid md:grid-cols-2 md:gap-y-8 md:gap-x-5 md:mb-10">
        {MoreThanJustWoodData.map((item, index) => (
          <MoreThanJustWoodCard
            paragraph={item.paragraph}
            image={item.image}
            key={`more-than-just-wood-${index}`}
          />
        ))}
      </div>
      <div className="md:max-w-[305px] md:mx-auto">
        <GreenButton buttonType={ButtonType.Outlined} buttonText={'Переглянути всю галерею'} />
      </div>
    </section>
  )
}