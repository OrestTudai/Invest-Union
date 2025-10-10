import {SectionName} from "@/components";
import {ReasonsData} from "@/sections/WhyInvestUnionIsLeader/constants";
import ReasonCard from "@/sections/WhyInvestUnionIsLeader/components/ReasonCard";

export const WhyInvestUnionIsLeader = () => {
  return (
    <section className="pb-[100px]">
      <div className="px-4">
        <SectionName heading={'Переваги'} postsCount={'(04)'} />
        <h2 className="mt-8 mb-10">Що робить Invest-Union <span className="text-green">лідером галузі</span></h2>
      </div>
      <div className="flex flex-col gap-[1px]">
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