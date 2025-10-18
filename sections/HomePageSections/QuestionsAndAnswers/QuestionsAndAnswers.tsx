import {SectionName} from "@/components";
import QuestionAndAnswerItem from "@/sections/HomePageSections/QuestionsAndAnswers/components/QuestionAndAnswerItem";
import {QuestionsAndAnswersData} from "@/sections/HomePageSections/QuestionsAndAnswers/components/constants";

export const QuestionsAndAnswers = () => {
  return (
    <section className="py-[100px] px-4">
      <SectionName heading={'Птання-відповідь'} postsCount={'(05)'} />
      <h2 className="mt-8 mb-10">Відповіді на всі популярні питання</h2>
      {QuestionsAndAnswersData.map((item, index) => (
        <QuestionAndAnswerItem
          key={`question-and-answer-${index}`}
          heading={item.heading}
          paragraph={item.paragraph}
        />
      ))}
    </section>
  )
}