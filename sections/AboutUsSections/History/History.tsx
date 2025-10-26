import {SectionName} from "@/components";
import Image from "next/image";
import {AboutImageWood, AboutImageWorkers} from "@/assets/images";

export const History = () => {
  return (
    <section className="py-[100px] px-4 md:py-[180px] md:px-10">
      <SectionName heading={'Про Invest-Union'} postsCount={'(2000-2055)'} />
      <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px]">Наша історія</h2>
      <div className="flex flex-col md:flex-row md:gap-4 md:mb-10">
        <Image className="md:w-[207px] md:h-[144px]" src={AboutImageWood} alt={'About image wood'} />
        <p className="my-6 text-darkGray md:my-0">
          Morbi morbi arcu neque volutpat in. A lorem aliquam id pulvinar enim ac lectus pretium. Elit ante enim lectus scelerisque sit vestibulum. Dignissim morbi mi proin egestas ac ultrices varius.
          Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet. Facilisi egestas in dictum gravida at tincidunt.
          Morbi morbi arcu neque volutpat in. A lorem aliquam id pulvinar enim ac lectus pretium. Elit ante enim lectus scelerisque sit vestibulum. Dignissim morbi mi proin egestas ac ultrices varius.
          Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet. Facilisi egestas in dictum gravida at tincidunt.
        </p>
      </div>
      <Image className="md:h-[301px] md:object-cover" src={AboutImageWorkers} alt={'About image workers'} />
    </section>
  )
}