import { StaticImageData } from "next/image";

type Props = {
  heading: string;
  paragraph: string;
  image: StaticImageData;
};

export const ReasonCard = ({ heading, paragraph, image }: Props) => {
  return (
    <div
      className="relative overflow-hidden group
                 pt-[140px] px-10 pb-[42px] text-center bg-cover text-white
                 md:bg-center xl:py-[188px] xl:px-8 xl:min-h-[520px]"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="absolute inset-0 bg-black/20 xl:group-hover:bg-black/50 transition-colors duration-500 hidden xl:block" />

      <div className="relative z-10 flex flex-col items-center">
        <h3
          className="mb-6 text-2xl font-semibold
                     xl:transition-transform xl:duration-700 xl:ease-out
                     xl:translate-y-0 xl:group-hover:-translate-y-4"
        >
          {heading}
        </h3>

        <p
          className="text-base transition-all duration-700 ease-out
                     md:opacity-100 md:translate-y-0
                     xl:opacity-0 xl:translate-y-8 xl:group-hover:opacity-100 xl:group-hover:translate-y-0"
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};
