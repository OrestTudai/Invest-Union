import {
  GalleryEleventhImage,
  GalleryFifthImage,
  GalleryFirstImage,
  GalleryFourthImage,
  GallerySecondImage,
  GallerySixthImage,
  GalleryThirdImage,
} from "@/assets/images";
import { getTranslations } from "next-intl/server";

const imagesOrder = [
  GalleryFourthImage,
  GalleryFirstImage,
  GallerySecondImage,
  GalleryThirdImage,
  GalleryFifthImage,
  GallerySixthImage,
];

const imagesOrderXl = [
  GalleryFourthImage,
  GalleryFirstImage,
  GallerySecondImage,
  GalleryThirdImage,
  GalleryFifthImage,
  GalleryEleventhImage,
  GallerySixthImage,
];

export async function getMoreThanJustWoodData(locale: string) {
  const translations = await getTranslations({
    locale,
    namespace: "about",
  });

  const itemsCount = imagesOrder.length;

  const result = [];
  for (let i = 0; i < itemsCount; i++) {
    result.push({
      image: imagesOrder[i],
      paragraph: translations(`firstPictureText`)
    });
  }

  const paragraphKeys = [
    "firstPictureText",
    "secondPictureText",
    "thirdPictureText",
    "fourthPictureText",
    "fifthPictureText",
    "sixthPictureText",
  ];

  for (let i = 0; i < result.length; i++) {
    result[i].paragraph = translations(paragraphKeys[i]);
  }

  return result;
}

export async function getMoreThanJustWoodDataXl(locale: string) {
  const translations = await getTranslations({
    locale,
    namespace: "about",
  });

  const result = [];
  const paragraphKeys = [
    "firstPictureText",
    "secondPictureText",
    "thirdPictureText",
    "fourthPictureText",
    "fifthPictureText",
    "sixthPictureText",
    "sixthPictureText",
  ];

  for (let i = 0; i < imagesOrderXl.length; i++) {
    result.push({
      image: imagesOrderXl[i],
      paragraph: translations(paragraphKeys[i]),
    });
  }

  return result;
}
