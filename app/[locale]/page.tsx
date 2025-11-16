import {
  AboutInvestUnion, Contacts,
  CustomerReviews,
  DevelopBusiness,
  HomeHero,
  MoreThanJustWood, QuestionsAndAnswers, ReadMoreInteresting,
  WhyInvestUnionIsLeader
} from "@/sections";

export default async function Home({params}: PageProps<'/[locale]'>) {
  const { locale } = await params

  return (
    <>
      <HomeHero />
      <AboutInvestUnion />
      <WhyInvestUnionIsLeader locale={locale} />
      <MoreThanJustWood />
      <CustomerReviews />
      <DevelopBusiness />
      <QuestionsAndAnswers locale={locale} />
      {/*<ReadMoreInteresting />*/}
      <Contacts />
    </>
  );
}
