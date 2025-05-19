import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: "/images/basedfx/basedfx_ui_1.png",
    alt: "Performing a binary calculation."
  }, {
    src: "/images/basedfx/basedfx_ui_2.png",
    alt: "Calculating different bases."
  }
];

export const BASED_FX: Project = {
  name: 'BasedFX',
  link: 'https://github.com/devinsterling/BasedFX',
  languages: [language.JAVA],
  technologies: [technology.JAVAFX],
  introduction: 'Educational tool about the different number base systems.',
  synopsis:
    ``,
  thumbnail: images[0],
  images,
};

export default BASED_FX;