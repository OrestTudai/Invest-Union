import {
  AboutUsHero, Contacts,
  History,
  ProductionPower,
  QuestionsAndAnswers,
  ReadMoreInteresting,
  TeamValues,
  WhyInvestUnionIsLeader
} from "@/sections";

export default async function AboutUsPage({params}: PageProps<'/[locale]'>) {
  const { locale } = await params

  return (
    <>
      <AboutUsHero locale={locale} />
      <History locale={locale} />
      <TeamValues locale={locale} />
      <WhyInvestUnionIsLeader locale={locale} />
      <ProductionPower locale={locale} />
      <QuestionsAndAnswers locale={locale} />
      {/*<ReadMoreInteresting />*/}
      <Contacts />
    </>
  )
}