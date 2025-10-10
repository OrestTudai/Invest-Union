type Props = {
  heading: string;
  postsCount?: string;
}

export const SectionName = ({ heading, postsCount }: Props) => {
  return (
    <div className="flex justify-between items-center text-[14px] text-darkGray font-medium">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green"></div>
        <span>{heading}</span>
      </div>
      {postsCount && (<span>{postsCount}</span>)}
    </div>
  )
}