import {SectionContainer, SectionName, SharedSwiper} from "@/components";
import {CustomerReviewsData} from "@/sections/HomePageSections/CustomerReviews/constants";

export const CustomerReviews = () => {
  return (
    <section className="px-4 pb-[100px] md:px-10 md:pb-[180px] xl:pb-[200px]">
      <SectionContainer>
        <SectionName
          sectionName={<h2 className="hidden xl:block">Що кажуть <br />наші клієнти</h2>}
          heading={'Відгуки'}
          postsCount={'(06)'}
        />
        <div className="flex flex-col mt-8 md:flex-row md:justify-between md:mt-10 xl:hidden">
          <h2 className="mb-10 md:mb-[60px]">Що кажуть <br />наші клієнти</h2>
          <div className="md:max-w-[244px]">
            <p>Більше 90% клієнтів <span className="text-green">рекомендують нас.</span></p>
            <p className="mt-2 mb-10">А решта 10% ще просто не встигли цього зробити.</p>
          </div>
        </div>
        <div className="block md:hidden">
          <SharedSwiper
            slidesPerView={1}
            slides={CustomerReviewsData.map(review => (
              <div className="flex flex-col gap-4 my-3 mx-2 px-6 py-8 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]" key={review.name}>
                <div className="flex items-center gap-3">
                  <div className="w-[70px] h-[70px] bg-darkGray rounded-full"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-black">{review.name}</span>
                    <span className="text-[#B9B9B9]">{review.company}</span>
                  </div>
                </div>
                <p className="text-darkGray">{review.reviewText}</p>
              </div>
            ))}
          />
        </div>
        <div className="hidden md:block xl:hidden">
          <SharedSwiper
            slidesPerView={1.5}
            slides={CustomerReviewsData.map(review => (
              <div className="flex flex-col max-w-[440px] gap-4 my-3 mx-2 px-6 py-8 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]" key={review.name}>
                <div className="flex items-center gap-3">
                  <div className="w-[70px] h-[70px] bg-darkGray rounded-full"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-black !text-[20px]">{review.name}</span>
                    <span className="text-[#B9B9B9] text-[16px]">{review.company}</span>
                  </div>
                </div>
                <p className="text-darkGray !text-[16px]">{review.reviewText}</p>
              </div>
            ))}
          />
        </div>
        <div className="hidden items-end justify-between xl:flex xl:mt-20">
          <div className="md:max-w-[244px]">
            <p>Більше 90% клієнтів <span className="text-green">рекомендують нас.</span></p>
            <p className="mt-2">А решта 10% ще просто не встигли цього зробити.</p>
          </div>
          <SharedSwiper
            slidesPerView={2}
            spaceBetween={0}
            slides={CustomerReviewsData.map(review => (
              <div className="flex flex-col max-w-[440px] gap-4 my-3 mx-2 px-6 py-8 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]" key={review.name}>
                <div className="flex items-center gap-3">
                  <div className="w-[70px] h-[70px] bg-darkGray rounded-full"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-black !text-[20px]">{review.name}</span>
                    <span className="text-[#B9B9B9] text-[16px]">{review.company}</span>
                  </div>
                </div>
                <p className="text-darkGray !text-[16px]">{review.reviewText}</p>
              </div>
            ))}
          />
        </div>
      </SectionContainer>
    </section>
  )
}