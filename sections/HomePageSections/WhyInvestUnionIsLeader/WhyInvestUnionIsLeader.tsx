import {SectionName} from "@/components";
import {ReasonsData} from "@/sections/HomePageSections/WhyInvestUnionIsLeader/constants";
import ReasonCard from "@/sections/HomePageSections/WhyInvestUnionIsLeader/components/ReasonCard";

export const WhyInvestUnionIsLeader = () => {
  return (
    <section className="pb-[100px] md:pb-[180px] xl:pb-[200px]">
      <div className="px-4 md:px-10">
        <SectionName
          sectionName={
            <h2 className="hidden mb-10 md:mb-[60px] max-w-[600px] xl:block">
              Що робить Invest-Union <span className="text-green">лідером галузі</span>
            </h2>
          }
          heading={'Переваги'}
          postsCount={'(04)'}
        />
      </div>
      <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:hidden">
        Що робить Invest-Union <span className="text-green">лідером галузі</span>
      </h2>
      <div className="flex flex-col gap-[1px] md:grid md:grid-cols-2 xl:flex xl:flex-row xl:mt-20">
        {ReasonsData.map(reason => (
          <ReasonCard
            key={reason.heading}
            heading={reason.heading}
            image={reason.image}
            paragraph={reason.paragraph}
          />
        ))}
      </div>
    </section>
  )
}