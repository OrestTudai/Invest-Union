import {NewsCard} from "@/components";


export const News = () => {
  return (
    <section className="pt-[179px] pb-[100px] px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] font-semibold">Новини</h1>
        <span className="text-[14px] font-medium">(25)</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {NewsItemsData.map((item, index) => (
          <NewsCard
            key={index}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </section>
  )
}