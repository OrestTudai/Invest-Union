import {GreenButton, SectionContainer, SectionName} from "@/components";
import Image from "next/image";
import {AboutInvestUnionWood} from "@/assets/images";
import {ButtonType} from "@/components/GreenButton";

export const AboutInvestUnion = () => {
  return (
    <section className="py-[100px] px-4 md:px-10 md:py-[180px] xl:py-[200px]">
      <SectionContainer>
        <div className="xl:flex justify-between items-start xl:mb-20">
          <SectionName heading={'Про Invest Union'} />
          <h3 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:max-w-[900px] xl:mb-0 xl:mt-0">
            Ми пропонуємо комплексні рішення – від виробництва тришарових панелей та меблевих заготовок до створення унікальних інтер’єрів із recycled wood
          </h3>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5 xl:gap-0">
          <Image className="md:w-[207px] md:h-[221px] xl:w-[322px] xl:h-[206px]" src={AboutInvestUnionWood} alt={'About Invest Union wood picture'} />
          <p className="hidden xl:block max-w-[440px] ml-auto">
            Morbi morbi arcu neque volutpat in. A lorem aliquam id pulvinar enim ac lectus pretium. Elit ante enim lectus scelerisque sit vestibulum. Dignissim morbi mi proin egestas ac ultrices varius.
            Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet. Facilisi egestas in dictum gravida at tincidunt.
          </p>
          <div className="xl:ml-5">
            <p className="mb-6 mt-10 md:mt-0 md:mb-5 xl:hidden">
              Morbi morbi arcu neque volutpat in. A lorem aliquam id pulvinar enim ac lectus pretium. Elit ante enim lectus scelerisque sit vestibulum. Dignissim morbi mi proin egestas ac ultrices varius.
              Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet. Facilisi egestas in dictum gravida at tincidunt.
              Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet.
            </p>
            <p className="hidden xl:block max-w-[440px]">
              Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet.
            </p>
            <div className="md:max-w-[245px] xl:mt-[66px]">
              <GreenButton buttonType={ButtonType.Outlined} buttonText={'Детальніше про нас'} />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}