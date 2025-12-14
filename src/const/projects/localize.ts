import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: '/images/localize/localize.png',
    alt: 'The Localize library',
  }
]

const LOCALIZE: Project = {
  name: 'Localize',
  link: 'https://github.com/devinsterling/localize',
  languages: [language.JAVA],
  technologies: [technology.JAVAFX],
  introduction: 'A lightweight threadsafe Java localization library alongside an optional JavaFX integration module.',
  synopsis:
    `Localize simplifies management of locale changes during runtime for internationalized 
     applications, utilizing registered providers to automate resource bundle retrieval when the locale changes.
     In addition, support for parameterization (named and numbered arguments), pluralization, 
     and more through the default ICU4J processor.`,
  thumbnail: images[0],
  color: '#79ff90',
  images,
};

export default LOCALIZE;