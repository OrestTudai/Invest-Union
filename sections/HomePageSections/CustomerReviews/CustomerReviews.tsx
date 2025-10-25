import {SectionName, SharedSwiper} from "@/components";
import {CustomerReviewsData} from "@/sections/HomePageSections/CustomerReviews/constants";

export const CustomerReviews = () => {
  return (
    <section className="px-4 pb-[100px]">
      <SectionName heading={'Відгуки'} postsCount={'(06)'} />
      <h2 className="mt-8 mb-10">Що кажуть <br />наші клієнти</h2>
      <p>Більше 90% клієнтів <span className="text-green">рекомендують нас.</span></p>
      <p className="mt-2 mb-10">А решта 10% ще просто не встигли цього зробити.</p>
      <SharedSwiper
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
    </section>
  )
}