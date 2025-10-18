import {GreenButton, SectionName} from "@/components";
import Image from "next/image";
import {Mail, Phone} from "@/assets/svg";
import {ButtonType} from "@/components/GreenButton";
import FormInput from "@/sections/HomePageSections/Contacts/components/FormInput";

type Props = {
  hasPaddingTop?: boolean;
  paddingTop?: number;
}

export const Contacts = ({ hasPaddingTop = false, paddingTop = 100 }: Props) => {
  return (
    <section className={`${hasPaddingTop && `pt-[${paddingTop}px]`} pb-[100px] px-4`}>
      <SectionName heading={'Контакти'} />
      <h2 className="mt-8 mb-10">Готові створити проект зі 100-річного дуба?</h2>
      <p className="pb-4">
        Ми — єдині в Україні, хто виробляє тришарову меблеву панель з амбарного дуба за європейським стандартом. Залиште заявку, і ми допоможемо створити унікальний інтер’єр.
      </p>
      <div className="flex items-center gap-5">
        <Image src={Mail} alt={'Email'} />
        <span>example@teamwebflow.com</span>
      </div>
      <div className="flex items-start gap-5 mt-2">
        <Image src={Phone} alt={'Phone'} />
        <div className="flex flex-col gap-2">
          <span>+38 (090) 380 30 80</span>
          <span>+38 (090) 380 30 80</span>
        </div>
      </div>
      <form className="flex flex-col gap-3 pt-4 mb-4">
        <FormInput placeholder={'І’мя'} />
        <FormInput placeholder={'Назва компанії'} />
        <FormInput placeholder={'Електронна пошта'} />
        <FormInput placeholder={'Телефон'} />
        <FormInput placeholder={'Повідомлення'} />
      </form>
      <GreenButton buttonType={ButtonType.Filled} buttonText={'Отримати пропозицію'} />
    </section>
  )
}