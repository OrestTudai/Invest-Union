import {GreenButton, SectionName} from "@/components";
import {ButtonType} from "@/components/GreenButton";
import {MoreThanJustWoodData} from "@/sections/MoreThanJustWood/constants";
import MoreThanJustWoodCard from "@/sections/MoreThanJustWood/components/MoreThanJustWoodCard";

export const MoreThanJustWood = () => {
  return (
    <section className="pb-[100px] px-4">
      <SectionName heading={'Галерея'} postsCount={'(25+)'} />
      <h2 className="mt-8 mb-10">Щось більше <br /> ніж просто <span className="text-green">дерево</span></h2>
      <div className="flex flex-col gap-6 mb-6">
        {MoreThanJustWoodData.map((item, index) => (
          <MoreThanJustWoodCard
            paragraph={item.paragraph}
            image={item.image}
            key={`more-than-just-wood-${index}`}
          />
        ))}
      </div>
      <GreenButton buttonType={ButtonType.Outlined} buttonText={'Переглянути всю галерею'} />
    </section>
  )
}