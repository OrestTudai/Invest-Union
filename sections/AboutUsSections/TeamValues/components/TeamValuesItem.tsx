type Props = {
  number: string;
  heading: string;
  paragraph: string;
}

export const TeamValuesItem = ({ number, heading, paragraph }: Props) => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex items-center gap-3">
        <h3 className="text-gray">{number}</h3>
        <h3>{heading}</h3>
      </div>
      <p className="text-darkGray">
        {paragraph}
      </p>
    </div>
  )
}