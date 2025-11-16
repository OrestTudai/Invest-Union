import {SectionContainer, SectionName, SharedSwiper} from "@/components";
import {getTranslations} from "next-intl/server";
import getCustomerReviewData from "@/sections/HomePageSections/CustomerReviews/constants";

type Props = {
  locale: string;
}

export const CustomerReviews = async ({ locale }: Props) => {
  const translations = await getTranslations({ locale, namespace: 'testimonials' });
  const CustomerReviewsData = await getCustomerReviewData(locale)

  return (
    <section className="px-4 pb-[100px] md:px-10 md:pb-[180px] xl:pb-[200px]">
      <SectionContainer>
        <SectionName
          sectionName={<h2 className="hidden xl:block">{translations('heading.line1')} <br />{translations('heading.line2')}</h2>}
          heading={translations('title')}
          postsCount={'(06)'}
        />
        <div className="flex flex-col mt-8 md:flex-row md:justify-between md:mt-10 xl:hidden">
          <h2 className="mb-10 md:mb-[60px]">{translations('heading.line1')} <br />{translations('heading.line2')}</h2>
          <div className="md:max-w-[244px]">
            <p>{translations('moreClients.line1')} <span className="text-green">{translations('moreClients.line2')}</span></p>
            <p className="mt-2 mb-10">{translations('moreClients.line3')}</p>
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
                  </div>
                </div>
                <p className="text-darkGray !text-[16px]">{review.reviewText}</p>
              </div>
            ))}
          />
        </div>
        <div className="hidden items-end justify-between xl:flex xl:mt-20">
          <div className="md:max-w-[244px]">
            <p>{translations('moreClients.line1')} <span className="text-green">{translations('moreClients.line2')}</span></p>
            <p className="mt-2">{translations('moreClients.line3')}</p>
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