import Image, {StaticImageData} from "next/image";

type Props = {
  paragraph: string;
  image: StaticImageData;
}

export const MoreThanJustWoodCard = ({ image, paragraph }: Props) => {
  return (
    <div>
      <Image width={343} height={340} src={image.src} alt={paragraph} />
      <p className="mt-2">{paragraph}</p>
    </div>
  )
}