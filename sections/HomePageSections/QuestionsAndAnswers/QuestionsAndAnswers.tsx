import {SectionContainer, SectionName} from "@/components";
import QuestionAndAnswerItem from "@/sections/HomePageSections/QuestionsAndAnswers/components/QuestionAndAnswerItem";
import {
  getQuestionsAndAnswersData,
} from "@/sections/HomePageSections/QuestionsAndAnswers/components/constants";
import {getTranslations} from "next-intl/server";

type Props = {
  locale: string;
}

export const QuestionsAndAnswers = async ({ locale }: Props) => {
  const QuestionsAndAnswersData = await getQuestionsAndAnswersData(locale)
  const translations = await getTranslations({ locale, namespace: 'faq' })

  return (
    <section className="py-[100px] px-4 md:py-[180px] md:px-10 xl:py-[200px]">
      <SectionContainer>
        <SectionName
          sectionName={
            <h2 className="hidden xl:block">
              {translations('heading.line1')} <br className="hidden md:block" />{translations('heading.line2')}
            </h2>
          }
          heading={translations('title')}
          postsCount={'(05)'}
        />
        <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:hidden">{translations('heading.line1')} <br className="hidden md:block" />{translations('heading.line2')}</h2>
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