import {getTranslations} from "next-intl/server";
import {FirstPerson, SecondPerson, ThirdPerson} from "@/assets/images";

export default async function getCustomerReviewData (locale: string) {
  const translations = await getTranslations({ locale, namespace: 'testimonials' })

  return [
    {
      image: FirstPerson,
      name: locale === 'uk' ? 'Стівен' : 'Steven',
      reviewText: translations('list.first')
    },
    {
      image: SecondPerson,
      name: locale === 'uk' ? 'Джон' : 'John',
      reviewText: translations('list.second')
    },
    {
      image: ThirdPerson,
      name: locale === 'uk' ? 'Іван' : 'Ivan',
      reviewText: translations('list.third')
    },
  ]
}
