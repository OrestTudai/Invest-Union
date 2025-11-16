import { getTranslations } from "next-intl/server";
import { FirstLeadReasonBgSm, FourthLeadReasonBgSm, SecondLeadReasonBgSm, ThirdLeadReasonBgSm } from "@/assets/images";

export async function getReasonsData(locale: string) {
  const translations = await getTranslations({ locale, namespace: "advantages" });

  return [
    {
      heading: translations("items.eco.title"),
      paragraph: translations("items.eco.text"),
      image: FirstLeadReasonBgSm,
    },
    {
      heading: translations("items.quality.title"),
      paragraph: translations("items.quality.text"),
      image: SecondLeadReasonBgSm,
    },
    {
      heading: translations("items.recycling.title"),
      paragraph: translations("items.recycling.text"),
      image: ThirdLeadReasonBgSm,
    },
    {
      heading: translations("items.international.title"),
      paragraph: translations("items.international.text"),
      image: FourthLeadReasonBgSm,
    },
  ];
}
