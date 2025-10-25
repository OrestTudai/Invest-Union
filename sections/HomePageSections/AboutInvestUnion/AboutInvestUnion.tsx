import {GreenButton, SectionName} from "@/components";
import Image from "next/image";
import {AboutInvestUnionWood} from "@/assets/images";
import {ButtonType} from "@/components/GreenButton";

export const AboutInvestUnion = () => {
  return (
    <section className="py-[100px] px-4 md:px-10 md:py-[180px]">
      <SectionName heading={'Про Invest Union'} />
      <h3 className="mt-8 mb-10 md:mt-10 md:mb-[60px]">
        Ми пропонуємо комплексні рішення – від виробництва тришарових панелей та меблевих заготовок до створення унікальних інтер’єрів із recycled wood
      </h3>
      <div className="flex flex-col md:flex-row md:gap-5">
        <Image className="md:w-[207px] md:h-[221px]" src={AboutInvestUnionWood} alt={'About Invest Union wood picture'} />
        <div>
          <p className="mb-6 mt-10 md:mt-0 md:mb-5">
            Morbi morbi arcu neque volutpat in. A lorem aliquam id pulvinar enim ac lectus pretium. Elit ante enim lectus scelerisque sit vestibulum. Dignissim morbi mi proin egestas ac ultrices varius.
            Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet. Facilisi egestas in dictum gravida at tincidunt.
            Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet.
          </p>
          <div className="md:max-w-[245px]">
            <GreenButton buttonType={ButtonType.Outlined} buttonText={'Детальніше про нас'} />
          </div>
        </div>
      </div>
    </section>
  )
}