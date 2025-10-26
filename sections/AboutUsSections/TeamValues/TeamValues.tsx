import {SectionName} from "@/components";
import TeamValuesItem from "@/sections/AboutUsSections/TeamValues/components";
import {TeamValuesData} from "@/sections/AboutUsSections/TeamValues/constants";

export const TeamValues = () => {
  return (
    <section className="pb-[100px] px-4 md:pb-[180px] md:px-10">
      <SectionName heading={'Цінності'} postsCount={'(05)'} />
      <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px]">Цінності команди<br />Invest-Union</h2>
      <div className="flex flex-col gap-5 md:hidden">
        {TeamValuesData.map(item => (
          <TeamValuesItem
            key={item.heading}
            number={item.number}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>
      <div className="hidden justify-end w-full mb-10 md:flex">
        {TeamValuesData.slice(0, 1).map(item => (
          <TeamValuesItem
            key={item.heading}
            number={item.number}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>
      <div className="hidden grid-cols-2 gap-x-5 gap-y-10 md:grid">
        {TeamValuesData.slice(1).map(item => (
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