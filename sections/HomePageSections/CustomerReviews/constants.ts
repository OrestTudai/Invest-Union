import {getTranslations} from "next-intl/server";

export default async function getCustomerReviewData (locale: string) {
  const translations = await getTranslations({ locale, namespace: 'testimonials' })

  return [
    {
      image: '',
      name: locale === 'uk' ? 'Стівен' : 'Steven',
      reviewText: translations('list.first')
    },
    {
      image: '',
      name: locale === 'uk' ? 'Джон' : 'John',
      reviewText: translations('list.second')
    },
    {
      image: '',
      name: locale === 'uk' ? 'Іван' : 'Ivan',
      reviewText: translations('list.third')
    },
  ]
}
