import {
  AboutUsHero, Contacts,
  History,
  ProductionPower,
  QuestionsAndAnswers,
  ReadMoreInteresting,
  TeamValues,
  WhyInvestUnionIsLeader
} from "@/sections";

export default function AboutUsPage() {
  return (
    <>
      <AboutUsHero />
      <History />
      <TeamValues />
      <WhyInvestUnionIsLeader />
      <ProductionPower />
      <QuestionsAndAnswers />
      {/*<ReadMoreInteresting />*/}
      <Contacts />
    </>
  )
}