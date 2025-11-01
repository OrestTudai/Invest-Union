import {ReactNode} from "react";

type Props = {
  heading: string;
  postsCount?: string;
  sectionName?: ReactNode;
}

export const SectionName = ({ heading, postsCount, sectionName }: Props) => {
  return (
    <div className="flex justify-between items-center text-[14px] text-darkGray font-medium xl:items-start">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green"></div>
        <span>{heading}</span>
      </div>
      {sectionName}
      {postsCount ? (<span>{postsCount}</span>) : (<span className="w-4 h-4" />)}
    </div>
  )
}