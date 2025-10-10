import {GreenButton, SectionName} from "@/components";
import Image from "next/image";
import {AboutInvestUnionWood} from "@/assets/images";
import {ButtonType} from "@/components/GreenButton";

export const AboutInvestUnion = () => {
  return (
    <section className="py-[100px] px-4">
      <SectionName heading={'Про Invest Union'} />
      <h3 className="mt-8 mb-10">
        Ми пропонуємо комплексні рішення – від виробництва тришарових панелей та меблевих заготовок до створення унікальних інтер’єрів із recycled wood
      </h3>
      <Image src={AboutInvestUnionWood} alt={'About Invest Union wood picture'} />
      <p className="mt-10 mb-6">
        Morbi morbi arcu neque volutpat in. A lorem aliquam id pulvinar enim ac lectus pretium. Elit ante enim lectus scelerisque sit vestibulum. Dignissim morbi mi proin egestas ac ultrices varius.
        Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet. Facilisi egestas in dictum gravida at tincidunt.
        Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet.
      </p>
      <GreenButton buttonType={ButtonType.Outlined} buttonText={'Детальніше про нас'} />
    </section>
  )
}