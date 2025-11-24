import Image from "next/image";
import {LogoColored} from "@/assets/svg";
import {GoToTopButton} from "@/sections/SharedSections/Footer/components";
import Link from "next/link";
import {SectionContainer} from "@/components";
import {getTranslations} from "next-intl/server";

type Props = {
  locale: string;
}

export const Footer = async ({ locale }: Props) => {
  const translations = await getTranslations({ locale, namespace: 'footer' })
  const year = new Date().getFullYear()

  return (
    <footer className="px-4 pt-10 pb-[48px] bg-black text-white md:pt-[72px] md:pb-10 md:px-10 xl:pt-[100px] xl:pb-12 xl:px-10">
      <SectionContainer>
        <div className="flex flex-col gap-10 xl:hidden">
          <div className="flex justify-between items-center">
            <Image src={LogoColored} alt={'Invest Union colored logotype'} />
            <p className="hidden px-4 md:!text-[20px] md:block">{translations('address')}</p>
            <GoToTopButton />
          </div>
          <p className="md:hidden">{translations('address')}</p>
          <div className="flex flex-col gap-10 md:flex-row md:w-[433px] md:ml-auto md:justify-between">
            <div className="flex flex-col text-lightGray">
              <Link className="w-fit p-2" href={`/${locale}`}>{locale === 'uk' ? 'Головна' : 'Home'}</Link>
              <Link className="w-fit p-2" href={`/${locale}/about-us`}>{locale === 'uk' ? 'Про нас': 'About us'}</Link>
              <Link className="w-fit p-2" href={`/${locale}/gallery`}>{locale === 'uk' ? 'Галерея' : 'Gallery'}</Link>
              {/*<Link className="w-fit p-2" href="/news">Новини</Link>*/}
              <Link className="w-fit p-2" href={`/${locale}/contacts`}>{locale === 'uk' ? 'Контакти' : 'Contacts'}</Link>
            </div>
            <div className="flex flex-col text-lightGray">
              <Link className="w-fit p-2" href="/">Facebook</Link>
              <Link
                className="w-fit p-2"
                href="https://www.instagram.com/invest_union_ltd?igsh=dnJueGd5cXUzMWE="
              >
                Instagram
              </Link>
              {/*<Link className="w-fit p-2" href="/">Tik Tok</Link>*/}
            </div>
          </div>
          <div className="flex flex-col gap-3 text-lightGray md:w-[433px] md:ml-auto">
            <span className="w-fit underline">{translations('phone')}</span>
            <span className="w-fit underline">invest-union@ukr.net </span>
          </div>
          <div className="flex flex-col gap-4 text-lightGray md:w-[433px] md:ml-auto">
            {/*<Link className="w-fit" href={'/'}>Політика конфіденційності</Link>*/}
            <span>© {year} {translations('rightsReserved')}</span>
          </div>
        </div>
        <div className="hidden xl:flex items-start justify-between">
          <div className="flex justify-between items-start">
            <Image src={LogoColored} alt={'Invest Union colored logotype'} />
            <div className="flex flex-col gap-[130px] ml-[123px]">
              <p className="md:!text-[20px] md:px-2">{translations('address')}</p>
              <div className="flex flex-col gap-3 text-lightGray md:w-[433px] md:ml-auto xl:ml-0">
                <span className="w-fit underline">{translations('phone')}</span>
                <span className="w-fit underline">invest-union@ukr.net</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[38px]">
            <div className="flex flex-col gap-[200px] md:flex-row md:w-[433px]">
              <div className="flex flex-col text-lightGray">
                <Link className="w-fit p-2" href={`/${locale}`}>{locale === 'uk' ? 'Головна' : 'Home'}</Link>
                <Link className="w-fit p-2" href={`/${locale}/about-us`}>{locale === 'uk' ? 'Про нас': 'About us'}</Link>
                <Link className="w-fit p-2" href={`/${locale}/gallery`}>{locale === 'uk' ? 'Галерея' : 'Gallery'}</Link>
                {/*<Link className="w-fit p-2" href="/news">Новини</Link>*/}
                <Link className="w-fit p-2" href={`/${locale}/contacts`}>{locale === 'uk' ? 'Контакти' : 'Contacts'}</Link>
              </div>
              <div className="flex flex-col text-lightGray">
                <Link className="w-fit p-2" href="/">Facebook</Link>
                <Link
                  className="w-fit p-2"
                  href="https://www.instagram.com/invest_union_ltd?igsh=dnJueGd5cXUzMWE="
                >
                  Instagram
                </Link>
                {/*<Link className="w-fit p-2" href="/">Tik Tok</Link>*/}
              </div>
            </div>
            <div className="flex flex-col gap-4 text-lightGray md:w-[433px] md:ml-auto text-[14px]">
              {/*<Link className="w-fit" href={'/'}>Політика конфіденційності</Link>*/}
              <span>© {year} {translations('rightsReserved')}</span>
            </div>
          </div>
          <GoToTopButton />
        </div>
      </SectionContainer>
    </footer>
  )
}