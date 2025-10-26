import {Contacts, DevelopBusiness, Gallery} from "@/sections";

export default function GalleryPage() {
  return (
    <>
      <Gallery />
      <DevelopBusiness />
      <section className="md:pt-[180px]">
        <Contacts hasPaddingTop />
      </section>
    </>
  )
}