import {SectionName} from "@/components";
import Image from "next/image";
import {AboutImageWood, AboutImageWorkers} from "@/assets/images";

export const History = () => {
  return (
    <section className="py-[100px] px-4">
      <SectionName heading={'Про Invest-Union'} postsCount={'(2000-2055)'} />
      <h2 className="mt-8 mb-10">Наша історія</h2>
      <Image src={AboutImageWood} alt={'About image wood'} />
      <p className="my-6 text-darkGray">
        Morbi morbi arcu neque volutpat in. A lorem aliquam id pulvinar enim ac lectus pretium. Elit ante enim lectus scelerisque sit vestibulum. Dignissim morbi mi proin egestas ac ultrices varius.
        Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet. Facilisi egestas in dictum gravida at tincidunt.
        Morbi morbi arcu neque volutpat in. A lorem aliquam id pulvinar enim ac lectus pretium. Elit ante enim lectus scelerisque sit vestibulum. Dignissim morbi mi proin egestas ac ultrices varius.
        Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet. Facilisi egestas in dictum gravida at tincidunt.
      </p>
      <Image src={AboutImageWorkers} alt={'About image workers'} />
    </section>
  )
}