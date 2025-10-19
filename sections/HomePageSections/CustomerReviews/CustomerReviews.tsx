import {SectionName, SharedSwiper} from "@/components";

export const CustomerReviews = () => {
  return (
    <section className="px-4 pb-[100px]">
      <SectionName heading={'Відгуки'} postsCount={'(06)'} />
      <h2 className="mt-8 mb-10">Що кажуть <br />наші клієнти</h2>
      <p>Більше 90% клієнтів <span className="text-green">рекомендують нас.</span></p>
      <p className="mt-2">А решта 10% ще просто не встигли цього зробити.</p>
      <SharedSwiper />
    </section>
  )
}