import {DevelopBusinessBg} from "@/assets/gifs";
import {GreenButton} from "@/components";
import {ButtonType} from "@/components/GreenButton";

export const DevelopBusiness = () => {
  return (
    <section
      className="py-[288px] px-4 bg-cover"
      style={{ backgroundImage: `url(${DevelopBusinessBg.src})` }}
    >
      <h2 className="uppercase text-white text-center text-[32px]">Розвивайте бізнес з INVEST-UNION</h2>
      <h4 className="mt-6 text-center text-white">Надійне партнерство для дизайнерів, архітекторів та виробників, що обирають якість</h4>
      <GreenButton className="mt-8" buttonType={ButtonType.Filled} buttonText={'Обговорити співпрацю'} />
    </section>
  )
}