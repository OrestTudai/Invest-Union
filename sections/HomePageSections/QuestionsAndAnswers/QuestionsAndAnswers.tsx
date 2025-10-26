import {SectionName} from "@/components";
import QuestionAndAnswerItem from "@/sections/HomePageSections/QuestionsAndAnswers/components/QuestionAndAnswerItem";
import {QuestionsAndAnswersData} from "@/sections/HomePageSections/QuestionsAndAnswers/components/constants";

export const QuestionsAndAnswers = () => {
  return (
    <section className="py-[100px] px-4 md:py-[180px] md:px-10">
      <SectionName heading={'Птання-відповідь'} postsCount={'(05)'} />
      <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px]">Відповіді на всі <br className="hidden md:block" />популярні питання</h2>
      {QuestionsAndAnswersData.map((item, index) => (
        <QuestionAndAnswerItem
          key={`question-and-answer-${index}`}
          heading={item.heading}
          paragraph={item.paragraph}
          index={index}
        />
      ))}
    </section>
  )
}