import {SectionContainer, SectionName} from "@/components";
import QuestionAndAnswerItem from "@/sections/HomePageSections/QuestionsAndAnswers/components/QuestionAndAnswerItem";
import {
  getQuestionsAndAnswersData,
} from "@/sections/HomePageSections/QuestionsAndAnswers/components/constants";

type Props = {
  locale: string;
}

export const QuestionsAndAnswers = async ({ locale }: Props) => {
  const QuestionsAndAnswersData = await getQuestionsAndAnswersData(locale)
  return (
    <section className="py-[100px] px-4 md:py-[180px] md:px-10 xl:py-[200px]">
      <SectionContainer>
        <SectionName
          sectionName={
            <h2 className="hidden xl:block">
              Відповіді на всі <br className="hidden md:block" />популярні питання
            </h2>
          }
          heading={'Питання-відповідь'}
          postsCount={'(05)'}
        />
        <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:hidden">Відповіді на всі <br className="hidden md:block" />популярні питання</h2>
        <div className="xl:mt-20 xl:max-w-[900px] xl:ml-auto">
          {QuestionsAndAnswersData.map((item, index) => (
            <QuestionAndAnswerItem
              key={`question-and-answer-${index}`}
              heading={item.heading}
              paragraph={item.paragraph}
              index={index}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}