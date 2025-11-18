import {Contacts} from "@/sections";

export default async function ContactsPage ({params}: PageProps<'/[locale]'>) {
  const { locale } = await params

  return (
    <>
     <Contacts
       useSecondHeading
       hasPaddingTop
       paddingTop={179}
     />
    </>
  )
}