import {
  AboutUsHero, Contacts,
  History,
  ProductionPower,
  QuestionsAndAnswers,
  ReadMoreInteresting,
  TeamValues,
  WhyInvestUnionIsLeader
} from "@/sections";
import {getTranslations} from "next-intl/server";

export default async function AboutUsPage({params}: PageProps<'/[locale]'>) {
  const { locale } = await params

  return (
    <>
      <AboutUsHero locale={locale} />
      <History />
      <TeamValues locale={locale} />
      <WhyInvestUnionIsLeader locale={locale} />
      <ProductionPower />
      <QuestionsAndAnswers locale={locale} />
      {/*<ReadMoreInteresting />*/}
      <Contacts />
    </>
  )
}