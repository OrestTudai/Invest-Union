import {Contacts} from "@/sections";

export default async function ContactsPage ({params}: PageProps<'/[locale]'>) {
  const { locale } = await params

  return (
    <>
     <Contacts
       useSecondHeading
       locale={locale}
       hasPaddingTop
       paddingTop={179}
     />
    </>
  )
}