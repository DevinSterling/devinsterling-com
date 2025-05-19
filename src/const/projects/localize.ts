import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: '/images/localize/localize.png',
    alt: 'The Localize library.',
  }
]

export const LOCALIZE: Project = {
  name: 'Localize',
  link: 'https://github.com/devinsterling/localize',
  languages: [language.JAVA],
  technologies: [technology.JAVAFX],
  introduction: 'A lightweight Java localization library alongside an optional JavaFX integration module.',
  synopsis:
    `Simplifies management of locale changes during runtime for internationalized applications.
     Uses registered providers to retrieve resource bundles when the locale changes.
     Additionally, includes support for parameterization (named and numbered arguments), pluralization, 
     and more through the default ICU4J processor.`,
  thumbnail: images[0],
  images,
};

export default LOCALIZE;