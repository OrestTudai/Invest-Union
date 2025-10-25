import {StaticImageData} from "next/image";

type Props = {
  heading: string;
  paragraph: string;
  image: StaticImageData;
}

export const ReasonCard = ({ heading, paragraph, image }: Props) => {
  return (
    <div
      className="pt-[140px] px-10 pb-[42px] text-center bg-cover text-white md:bg-center"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <h3 className="mb-6">{heading}</h3>
      <p>{paragraph}</p>
    </div>
  )
}