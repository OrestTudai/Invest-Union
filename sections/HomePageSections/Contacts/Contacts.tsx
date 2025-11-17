import {GreenButton, SectionContainer, SectionName} from "@/components";
import Image from "next/image";
import {AddressIcon, Mail, Phone} from "@/assets/svg";
import {ButtonType} from "@/components/GreenButton";
import FormInput from "@/sections/HomePageSections/Contacts/components/FormInput";
import {getTranslations} from "next-intl/server";

type Props = {
  locale: string;
  useSecondHeading?: boolean;
  hasPaddingTop?: boolean;
  paddingTop?: number;
}

export const Contacts = async ({ locale, useSecondHeading = false, hasPaddingTop = false, paddingTop = 100 }: Props) => {
  const footerTranslations = await getTranslations({ locale, namespace: 'footer' })
  const contactsTranslations = await getTranslations({ locale, namespace: 'contacts' })

  return (
    <section id="contacts" className={`${hasPaddingTop && `pt-[${paddingTop}px]`} pb-[100px] px-4 md:pb-[180px] md:px-10 xl:pb-[200px]`}>
      <SectionContainer>
        <SectionName
          sectionName={
            <h2 className="hidden xl:block">
              {useSecondHeading ? (
                <>
                  {contactsTranslations('secondHeading.line1')}{' '}
                  {contactsTranslations('secondHeading.line2')}{' '}
                  <span className="text-green">{contactsTranslations('secondHeading.line3')}</span>
                  {contactsTranslations('secondHeading.line4')}
                  <br />
                  {contactsTranslations('secondHeading.line5')}
                </>
              ) : (
                <>
                  {contactsTranslations('heading.line1')} <br />
                  {contactsTranslations('heading.line2')}
                </>
              )}
            </h2>
          }
          heading={contactsTranslations('title')}
        />
        <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:hidden">
          {useSecondHeading ? (
            <>
              {contactsTranslations('secondHeading.line1')}{' '}
              {contactsTranslations('secondHeading.line2')}{' '}
              <span className="text-green">{contactsTranslations('secondHeading.line3')}</span>
              {contactsTranslations('secondHeading.line4')}{' '}
              {contactsTranslations('secondHeading.line5')}
            </>
          ) : (
            <>
              {contactsTranslations('heading.line1')} {contactsTranslations('heading.line2')}
            </>
          )}
        </h2>
        <div className={`block ${useSecondHeading ? 'items-start' : 'items-center'} gap-[72px] xl:flex xl:mt-20`}>
          {useSecondHeading ? (
            <div className="xl:mt-12">
              <div>
                <div className="flex items-center gap-5">
                  <Image src={Phone} alt={'Phone'} />
                  <span className="font-medium">{contactsTranslations('phoneField')}</span>
                </div>
                <span className="mt-1">{footerTranslations('phone')}</span>
              </div>
              <div className="mt-2 md:mt-4">
                <div className="flex items-center gap-5">
                  <Image src={Mail} alt={'Email'} />
                  <span className="font-medium">{contactsTranslations('emailField')}</span>
                </div>
                <span className="mt-1">ltd.invest.union@gmail.com</span>
              </div>
              <div className="mt-2 md:mt-4">
                <div className="flex items-center gap-5">
                  <Image src={AddressIcon} alt={'Address'} />
                  <span className="font-medium">{contactsTranslations('address')}</span>
                </div>
                <span className="mt-1">{footerTranslations('address')}</span>
              </div>
            </div>
          ) : (
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
          )}
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
            <GreenButton
              className="md:block md:max-w-[271px] md:ml-auto"
              buttonType={ButtonType.Filled}
              buttonText={contactsTranslations('buttonText')}
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}