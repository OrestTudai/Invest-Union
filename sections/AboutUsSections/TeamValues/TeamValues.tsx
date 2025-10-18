import {SectionName} from "@/components";
import TeamValuesItem from "@/sections/AboutUsSections/TeamValues/components";
import {TeamValuesData} from "@/sections/AboutUsSections/TeamValues/constants";

export const TeamValues = () => {
  return (
    <section className="pb-[100px] px-4">
      <SectionName heading={'Цінності'} postsCount={'(05)'} />
      <h2 className="mt-8 mb-10">Цінності команди<br />Invest-Union</h2>
      <div className="flex flex-col gap-5">
        {TeamValuesData.map(item => (
          <TeamValuesItem
            key={item.heading}
            number={item.number}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </section>
  )
}