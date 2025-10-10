import {GreenButton, SectionName} from "@/components";
import {ButtonType} from "@/components/GreenButton";

export const MoreThanJustWood = () => {
  return (
    <section className="pb-[100px] px-4">
      <SectionName heading={'Галерея'} postsCount={'(25+)'} />
      <h2 className="mt-8 mb-10">Щось більше <br /> ніж просто <span className="text-green">дерево</span></h2>
      <GreenButton buttonType={ButtonType.Outlined} buttonText={'Переглянути всю галерею'} />
    </section>
  )
}