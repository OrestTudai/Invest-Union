import {
  GalleryEighteenthImage,
  GalleryEighthImage,
  GalleryEleventhImage,
  GalleryFifteenthImage,
  GalleryFifthImage,
  GalleryFirstImage,
  GalleryFourteenthImage,
  GalleryFourthImage,
  GalleryNineteenthImage,
  GalleryNinethImage,
  GallerySecondImage,
  GallerySeventeenthImage,
  GallerySeventhImage,
  GallerySixteenthImage,
  GallerySixthImage,
  GalleryTenthImage,
  GalleryThirdImage,
  GalleryThirteenthImage,
  GalleryTwelfthImage,
  GalleryTwentiethImage,
  GalleryTwentyFirstImage,
  GalleryTwentySecondImage
} from "@/assets/images";
import { getTranslations } from "next-intl/server";
import {useTranslations} from "next-intl";

const imagesOrder = [
  GalleryFirstImage,
  GalleryFourthImage,
  GallerySecondImage,
  GalleryThirdImage,
  GalleryFifthImage,
  GallerySixthImage,
  GallerySeventhImage,
  GalleryEighthImage,
  GalleryNinethImage,
  GalleryTenthImage,
  GalleryEleventhImage,
  GalleryTwelfthImage,
  GalleryThirteenthImage,
  GalleryFourteenthImage,
  GalleryFifteenthImage,
  GallerySixteenthImage,
  GallerySeventeenthImage,
  GalleryEighteenthImage,
  GalleryNineteenthImage,
  GalleryTwentiethImage,
  GalleryTwentyFirstImage,
  GalleryTwentySecondImage,
];

const paragraphKeys = [
  "firstPictureText",
  "secondPictureText",
  "thirdPictureText",
  "fourthPictureText",
  "fifthPictureText",
  "sixthPictureText",
];

export const useGetGalleryData = () => {
  const translations = useTranslations("gallery");

  return imagesOrder.map((image, index) => {
    const obj: { image: typeof image; paragraph?: string } = { image };
    if (index < paragraphKeys.length) {
      obj.paragraph = translations(paragraphKeys[index]);
    }
    return obj;
  });
}
