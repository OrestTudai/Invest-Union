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
    <section className={`${hasPaddingTop && `pt-[${paddingTop}px]`} pb-[100px] px-4 md:pb-[180px] md:px-10 xl:pb-[200px]`}>
      <SectionName
        sectionName={
          <h2 className="hidden xl:block">
            Готові створити проект <br /> зі 100-річного дуба?
          </h2>
        }
        heading={'Контакти'}
      />
      <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:hidden">Готові створити проект зі 100-річного дуба?</h2>
      <div className="block items-center gap-[72px] xl:flex xl:mt-20">
        <div>
          <p className="pb-4 md:pb-[38px] md:max-w-[387px] xl:pb-[54px] xl:w-[387px]">
            Ми — єдині в Україні, хто виробляє тришарову меблеву панель з амбарного дуба за європейським стандартом. Залиште заявку, і ми допоможемо створити унікальний інтер’єр.
          </p>
          <div className="flex items-center gap-5">
            <Image src={Mail} alt={'Email'} />
            <span>example@teamwebflow.com</span>
          </div>
          <div className="flex items-start gap-5 mt-2 md:mt-4">
            <Image src={Phone} alt={'Phone'} />
            <div className="flex flex-col gap-2">
              <span>+38 (090) 380 30 80</span>
              <span>+38 (090) 380 30 80</span>
            </div>
          </div>
        </div>
        <div className="xl:w-full">
          <form className="flex flex-col gap-3 pt-4 mb-4 md:mb-6">
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <FormInput placeholder={'І’мя'} />
              <FormInput placeholder={'Назва компанії'} />
              <FormInput placeholder={'Електронна пошта'} />
              <FormInput placeholder={'Телефон'} />
            </div>
            <FormInput placeholder={'Повідомлення'} />
          </form>
          <GreenButton className="md:block md:max-w-[271px] md:ml-auto" buttonType={ButtonType.Filled} buttonText={'Отримати пропозицію'} />
        </div>
      </div>
    </section>
  )
}