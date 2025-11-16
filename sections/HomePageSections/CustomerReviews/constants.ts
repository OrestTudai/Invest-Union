import {getTranslations} from "next-intl/server";

export default async function getCustomerReviewData (locale: string) {
  const translations = await getTranslations({ locale, namespace: 'testimonials' })

  return [
    {
      image: '',
      name: locale === 'uk' ? 'Ім’я 1' : 'Name 1',
      reviewText: translations('list.first')
    },
    {
      image: '',
      name: locale === 'uk' ? 'Ім’я 2' : 'Name 2',
      reviewText: translations('list.second')
    },
    {
      image: '',
      name: locale === 'uk' ? 'Ім’я 3' : 'Name 3',
      reviewText: translations('list.third')
    },
  ]
}
