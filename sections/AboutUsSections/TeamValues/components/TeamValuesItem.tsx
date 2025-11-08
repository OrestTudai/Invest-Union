type Props = {
  number: string;
  heading: string;
  paragraph: string;
}

export const TeamValuesItem = ({ number, heading, paragraph }: Props) => {
  return (
    <div className="flex flex-col gap-6 p-4 md:max-w-[322px] md:gap-5 md:px-2 xl:max-w-[440px]">
      <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4 xl:flex-row xl:items-center">
        <h3 className="text-gray md:!text-[20px]">{number}</h3>
        <h3 className="md:!text-[32px]">{heading}</h3>
      </div>
      <p className="text-darkGray">
        {paragraph}
      </p>
    </div>
  )
}