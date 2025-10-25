import {NewsCard, SectionName, SharedSwiper} from "@/components";
import {ReadMoreInterestingData} from "@/sections/HomePageSections/ReadMoreInteresting/constants";

export const ReadMoreInteresting = () => {
  return (
    <section className="pb-[100px] px-4 md:pb-[180px] md:px-10">
      <SectionName heading={'Новини'} postsCount={'(21)'} />
      <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px]">Читайте <br className="hidden md:block" /> ще більше <br className="md:hidden" />цікавого</h2>
      <div className="md:hidden">
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
      </div>
      <div className="hidden md:block">
        <SharedSwiper
          linkText={'ВСІ СТАТТІ'}
          href={'/news'}
          slidesPerView={2.1}
          spaceBetween={20}
          slides={ReadMoreInterestingData.map((readMore, index) => (
            <div key={`read-more-slide-${index}`} className="max-w-[340px]">
              <NewsCard
                heading={readMore.heading}
                paragraph={readMore.paragraph}
              />
            </div>
          ))}
        />
      </div>
    </section>
  )
}