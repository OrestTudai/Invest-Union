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
      <HomeHero locale={locale} />
      <AboutInvestUnion locale={locale} />
      <WhyInvestUnionIsLeader locale={locale} />
      <MoreThanJustWood locale={locale} />
      <CustomerReviews locale={locale} />
      <DevelopBusiness locale={locale} />
      <QuestionsAndAnswers locale={locale} />
      {/*<ReadMoreInteresting />*/}
      <Contacts locale={locale} />
    </>
  );
}
