import { getTranslations } from "next-intl/server";
import ScrollToContacts from "@/sections/HomePageSections/DevelopBusiness/components";

type Props = {
  locale: string;
};

export const DevelopBusiness = async ({ locale }: Props) => {
  const translations = await getTranslations({
    locale,
    namespace: "developBusiness",
  });

  return (
    <section className="relative overflow-hidden py-[288px] px-4 md:py-[420px] md:px-10 xl:py-[249px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/factory.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center text-white">
        <h2 className="text-[32px] md:!text-[68px] xl:!text-[72px]">
          {translations("heading.line1")}{" "}
          <br className="hidden xl:block" />
          {translations("heading.line2")}
        </h2>

        <h4 className="mt-6 text-white md:max-w-[490px] md:mx-auto md:mt-2 xl:!text-[20px]">
          {translations("paragraph")}
        </h4>

        <ScrollToContacts
          buttonText={translations("buttonText")}
        />
      </div>
    </section>
  );
};
