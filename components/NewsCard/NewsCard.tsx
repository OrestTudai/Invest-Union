import Image from "next/image";
import {ArrowTop} from "@/assets/svg";
import Link from "next/link";

type Props = {
  heading: string;
  paragraph: string;
}

export const NewsCard = ({ heading, paragraph }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-[340px] bg-[#565656]">
        <Link
          className="absolute bottom-4 right-4 p-3 border-solid border-[1px] rounded-[2px] border-[#FFFFFF] bg-[#FFFFFF14]"
          href="/news"
        >
          <Image
            className="rotate-90"
            src={ArrowTop}
            alt={'Go to news post'}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-medium">{heading}</h4>
        <p className="text-darkGray">{paragraph}</p>
      </div>
    </div>
  )
}