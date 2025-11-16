import {Contacts} from "@/sections";

export default async function ContactsPage ({params}: PageProps<'/[locale]'>) {
  const { locale } = await params

  return (
    <>
     <Contacts
       hasPaddingTop
       paddingTop={179}
     />
    </>
  )
}