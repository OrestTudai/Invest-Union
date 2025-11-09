import {SectionContainer, SectionName} from "@/components";
import Image from "next/image";
import {AboutImageWood, AboutImageWorkers} from "@/assets/images";

export const History = () => {
  return (
    <section className="py-[100px] px-4 md:py-[180px] md:px-10 xl:py-[200px]">
      <SectionContainer>
        <SectionName
          heading={'Про Invest-Union'}
          sectionName={
            <h2 className="hidden mb-10 md:mb-20 xl:block">Наша історія</h2>
          }
          postsCount={'(2000-2055)'}
        />
        <h2 className="mt-8 mb-10 md:mt-10 md:mb-[60px] xl:hidden">Наша історія</h2>
        <div className="flex flex-col md:flex-row md:gap-4 md:mb-10 xl:justify-between xl:mb-[100px]">
          <Image className="md:w-[207px] md:h-[144px] xl:w-[322px] xl:h-[206px]" src={AboutImageWood} alt={'About image wood'} />
          <p className="my-6 text-darkGray md:my-0 xl:hidden">
            Morbi morbi arcu neque volutpat in. A lorem aliquam id pulvinar enim ac lectus pretium. Elit ante enim lectus scelerisque sit vestibulum. Dignissim morbi mi proin egestas ac ultrices varius.
            Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet. Facilisi egestas in dictum gravida at tincidunt.
            Morbi morbi arcu neque volutpat in. A lorem aliquam id pulvinar enim ac lectus pretium. Elit ante enim lectus scelerisque sit vestibulum. Dignissim morbi mi proin egestas ac ultrices varius.
            Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet. Facilisi egestas in dictum gravida at tincidunt.
          </p>
          <div className="hidden xl:flex gap-5">
            <p className="max-w-[440px] text-darkGray">
              Morbi morbi arcu neque volutpat in. A lorem aliquam id pulvinar enim ac lectus pretium. Elit ante enim lectus scelerisque sit vestibulum. Dignissim morbi mi proin egestas ac ultrices varius.
              Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet. Facilisi egestas in dictum gravida at tincidunt.
            </p>
            <p className="max-w-[440px] text-darkGray">
              Morbi morbi arcu neque volutpat in. A lorem aliquam id pulvinar enim ac lectus pretium. Elit ante enim lectus scelerisque sit vestibulum. Dignissim morbi mi proin egestas ac ultrices varius.
              Urna quam elementum scelerisque purus elit fermentum nulla. Arcu et ultricies purus feugiat duis faucibus nunc. Gravida urna urna sagittis amet pellentesque euismod pellentesque amet. Facilisi egestas in dictum gravida at tincidunt.
            </p>
          </div>
        </div>
        <Image
          className="md:h-[301px] md:object-cover xl:h-[460px] xl:w-[900px] xl:ml-auto"
          src={AboutImageWorkers}
          alt={'About image workers'}
        />
      </SectionContainer>
    </section>
  )
}