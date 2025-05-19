import Project from '../model/project.ts';
import * as language from './languages.ts';
import * as technology from './technologies.ts';

// Projects
import BASED_FX from './projects/basedfx.ts';
import CLAW from './projects/claw.ts';
import GOLDMAN_STACKS from './projects/goldmanstacks.ts';
import KURUMA from './projects/kuruma.ts';
import LOCALIZE from './projects/localize.ts';
import MEDIA_F from './projects/mediaframework.ts'
import RBOOK from './projects/rbook.ts';
import RECOGNIZER from './projects/recognizer.ts';
import URFOOD from './projects/urfood.ts'
import VIRAL from './projects/viral.ts';

export const HOTEL: Project = {
  name: 'Hotel',
  link: 'https://github.com/devinsterling/Kuruma',
  languages: [language.PHP, language.JAVASCRIPT, language.SQL],
  technologies: [technology.BOOTSTRAP],
  introduction: 'Platform to rent hotel rooms',
  synopsis: '',
  thumbnail: {
    src: '/tmp/2.jpeg',
    alt: ''
  },
  images: [{
    src: '/tmp/1.jpeg',
    alt: 'Majestic scenery of a cultivated landscape2'
  }, {
    src: '/tmp/2.jpeg',
    alt: 'Majestic scenery of a cultivated landscape3'
  }, {
    src: '/tmp/3.jpeg',
    alt: 'Majestic scenery of a cultivated landscape4'
  }, {
    src: '/tmp/4.jpeg',
    alt: 'Majestic scenery of a cultivated landscape5'
  }],
};

const ALL_PROJECTS: Project[] = [
  RBOOK,
  LOCALIZE,
  RECOGNIZER,
  CLAW,
  VIRAL,
  BASED_FX,
  URFOOD,
  GOLDMAN_STACKS,
  KURUMA,
  HOTEL,
  MEDIA_F
];

export default ALL_PROJECTS;
