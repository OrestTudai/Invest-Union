import {GreenButton, SectionContainer, SectionName} from "@/components";
import Image from "next/image";
import {Mail, Phone} from "@/assets/svg";
import {ButtonType} from "@/components/GreenButton";
import FormInput from "@/sections/HomePageSections/Contacts/components/FormInput";
import {getTranslations} from "next-intl/server";

type Props = {
  locale: string;
  hasPaddingTop?: boolean;
  paddingTop?: number;
}

export const Contacts = async ({ locale, hasPaddingTop = false, paddingTop = 100 }: Props) => {
  const footerTranslations = await getTranslations({ locale, namespace: 'footer' })
  const contactsTranslations = await getTranslations({ locale, namespace: 'contacts' })

  return (
    <section className={`${hasPaddingTop && `pt-[${paddingTop}px]`} pb-[100px] px-4 md:pb-[180px] md:px-10 xl:pb-[200px]`}>
      <SectionContainer>
        <SectionName
          sectionName={
            <h2 className="hidden xl:block">
              {contactsTranslations('heading.line1')} <br /> {contactsTranslations('heading.line2')}
            </h2>
          }
          heading={contactsTranslations('title')}
        />
        <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:hidden">
          {contactsTranslations('heading.line1')} {contactsTranslations('heading.line2')}
        </h2>
        <div className="block items-center gap-[72px] xl:flex xl:mt-20">
          <div>
            <p className="pb-4 md:pb-[38px] md:max-w-[387px] xl:pb-[54px] xl:w-[387px]">
              {contactsTranslations('paragraph')}
            </p>
            <div className="flex items-center gap-5">
              <Image src={Mail} alt={'Email'} />
              <span>ltd.invest.union@gmail.com</span>
            </div>
            <div className="flex items-start gap-5 mt-2 md:mt-4">
              <Image src={Phone} alt={'Phone'} />
              <div className="flex flex-col gap-2">
                <span>{footerTranslations('phone')}</span>
              </div>
            </div>
          </div>
          <div className="xl:w-full">
            <form className="flex flex-col gap-3 pt-4 mb-4 md:mb-6">
              <div className="md:grid md:grid-cols-2 md:gap-4">
                <FormInput placeholder={contactsTranslations('nameField')} />
                <FormInput placeholder={contactsTranslations('companyNameField')} />
                <FormInput placeholder={contactsTranslations('emailField')} />
                <FormInput placeholder={contactsTranslations('phoneField')} />
              </div>
              <FormInput placeholder={contactsTranslations('messageField')} />
            </form>
            <GreenButton className="md:block md:max-w-[271px] md:ml-auto" buttonType={ButtonType.Filled} buttonText={contactsTranslations('buttonText')} />
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}