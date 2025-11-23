import {Contacts, DevelopBusiness, Gallery} from "@/sections";

export default async function GalleryPage({params}: PageProps<'/[locale]'>) {
  const { locale } = await params

  return (
    <>
      <Gallery />
      <DevelopBusiness locale={locale} />
      <section className="md:pt-[180px]">
        <Contacts hasPaddingTop />
      </section>
    </>
  )
}