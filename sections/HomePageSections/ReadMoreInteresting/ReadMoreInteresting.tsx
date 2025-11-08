import {GreenButton, NewsCard, SectionName, SharedSwiper} from "@/components";
import {ReadMoreInterestingData} from "@/sections/HomePageSections/ReadMoreInteresting/constants";
import {ButtonType} from "@/components/GreenButton";

export const ReadMoreInteresting = () => {
  return (
    <section className="pb-[100px] px-4 md:pb-[180px] md:px-10 xl:pb-[200px]">
      <SectionName
        sectionName={
          <h2 className="hidden mb-10 md:mb-20 xl:block">
            Читайте <br className="hidden md:block" /> ще більше <br className="md:hidden" />цікавого
          </h2>
        }
        heading={'Новини'}
        postsCount={'(21)'}
      />
      <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:hidden">Читайте <br className="hidden md:block" /> ще більше <br className="md:hidden" />цікавого</h2>
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
      <div className="hidden md:block xl:hidden">
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
      <div className="hidden grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 md:gap-x-5 md:gap-y-8 xl:grid">
        {ReadMoreInterestingData.slice(0, 3).map((readMore, index) => (
          <div key={`read-more-slide-${index}`}>
            <NewsCard
              heading={readMore.heading}
              paragraph={readMore.paragraph}
            />
          </div>
        ))}
      </div>
      <GreenButton
        className="hidden max-w-[150px] mx-auto mt-12 xl:block"
        buttonType={ButtonType.Outlined}
        buttonText={'ВСІ СТАТТІ'}
      />
    </section>
  )
}