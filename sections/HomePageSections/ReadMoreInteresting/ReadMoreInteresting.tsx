import {NewsCard, SectionName, SharedSwiper} from "@/components";
import {ReadMoreInterestingData} from "@/sections/HomePageSections/ReadMoreInteresting/constants";

export const ReadMoreInteresting = () => {
  return (
    <section className="pb-[100px] px-4">
      <SectionName heading={'Новини'} postsCount={'(21)'} />
      <h2 className="mt-8 mb-10">Читайте ще більше <br />цікавого</h2>
      <SharedSwiper
        linkText={'ВСІ СТАТТІ'}
        href={'/news'}
        slides={ReadMoreInterestingData.map((readMore, index) => (
          <NewsCard
            key={`read-more-slide-${index}`}
            heading={readMore.heading}
            paragraph={readMore.paragraph}
          />
        ))}
      />
    </section>
  )
}