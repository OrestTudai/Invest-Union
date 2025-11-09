import {NewsCard, SectionContainer} from "@/components";
import {NewsItemsData} from "@/sections/NewsSections/News/constants";


export const News = () => {
  return (
    <section className="pt-[179px] pb-[100px] px-4 md:pb-[180px] md:pt-[203px] md:px-10">
      <SectionContainer>
        <div className="flex items-center justify-between">
          <h1 className="text-[32px] md:!text-[52px]">Новини</h1>
          <span className="text-[14px] font-medium">(25)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:gap-x-5 md:gap-y-8">
          {NewsItemsData.map((item, index) => (
            <NewsCard
              key={index}
              heading={item.heading}
              paragraph={item.paragraph}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}