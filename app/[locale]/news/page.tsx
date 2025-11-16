import {News} from "@/sections";

export default async function NewsPage ({params}: PageProps<'/[locale]'>) {
  const { locale } = await params

  return (
    <>
      <News />
    </>
  )
}