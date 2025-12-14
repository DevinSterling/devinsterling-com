import Project from '../../model/project.ts';
import Image from '../../model/Image.ts';
import * as language from '../languages.ts';
import * as technology from '../technologies.ts';

const images: Image[] = [
  {
    src: '/images/media-framework/media-framework.png',
    alt: 'Media Framework'
  }
]

const MEDIA: Project = {
  name: 'Media Framework',
  link: 'https://github.com/devinsterling/Kuruma',
  languages: [language.JAVA, language.SQL],
  technologies: [technology.JAVAFX, technology.DAGGER],
  introduction: '(Codename: Media Framework) In development cross-platform modular multi-media manager/player framework.',
  synopsis:
    `Consists of three java modules: the standalone core module (Base Functionality), 
     desktop UI module (Desktop Views, Components, etc.), and desktop app module (Desktop Application).
     The core module contains base functionality and manages the lifecycle of dynamic plugins at runtime,
     allowing developers to access a unique plugin context to modify, enhance, and extend base functionality.
     Plugins can include a GraphQL API, additional player adapters (for VLC, MPV, or SVP compatibility),
     event listener registration to trigger specific actions, extend UI module functionality, etc.`,
  thumbnail: images[0],
  color: '#f71942',
  images,
};

export default MEDIA