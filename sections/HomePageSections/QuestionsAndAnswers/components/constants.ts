import { getTranslations } from "next-intl/server";

export async function getQuestionsAndAnswersData(locale: string) {
  const translations = await getTranslations({ locale, namespace: "faq" });

  const itemsCount = translations.raw("items").length;

  const result = [];

  for (let i = 0; i < itemsCount; i++) {
    result.push({
      heading: translations(`items.${i}.question`),
      paragraph: translations(`items.${i}.answer`)
    });
  }

  return result;
}
