import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: "/images/basedfx/basedfx_ui_1.png",
    alt: "Performing a binary calculation"
  }, {
    src: "/images/basedfx/basedfx_ui_2.png",
    alt: "Calculating different bases"
  }
];

const BASED_FX: Project = {
  name: 'BasedFX',
  link: 'https://github.com/devinsterling/BasedFX',
  languages: [language.JAVA],
  technologies: [technology.JAVAFX],
  introduction: 'An easy-to-use educational tool about the different number base systems (Base 2 to 36).',
  synopsis:
    `Supports calculating different bases simultaneously,
     converting very large numbers between different bases,
     bulk addition/removal of entries for a specific base,
     and dynamic calculations on input change.`,
  thumbnail: images[0],
  color: '#fff',
  images,
};

export default BASED_FX;