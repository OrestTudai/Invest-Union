import { getTranslations } from "next-intl/server";

export async function getTeamValuesData(locale: string) {
  const translations = await getTranslations({ locale, namespace: "values" });

  const rawItems = translations.raw("items");
  const keys = Object.keys(rawItems);

  return keys.map((key, index) => ({
    number: `(${String(index + 1).padStart(2, "0")})`,
    heading: translations(`items.${key}.title`),
    paragraph: translations(`items.${key}.text`)
  }));
}
