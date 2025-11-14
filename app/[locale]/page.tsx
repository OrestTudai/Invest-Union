import {
  AboutInvestUnion, Contacts,
  CustomerReviews,
  DevelopBusiness,
  HomeHero,
  MoreThanJustWood, QuestionsAndAnswers, ReadMoreInteresting,
  WhyInvestUnionIsLeader
} from "@/sections";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutInvestUnion />
      <WhyInvestUnionIsLeader />
      <MoreThanJustWood />
      <CustomerReviews />
      <DevelopBusiness />
      <QuestionsAndAnswers />
      <ReadMoreInteresting />
      <Contacts />
    </>
  );
}
