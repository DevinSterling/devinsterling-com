import Project from '../../model/project.ts';
import * as language from '../languages.ts';
import Image from '../../model/Image.ts';

const images: Image[] = [
  {
    src: '/images/rbook/rbook.png',
    alt: 'The rbook library.'
  }
]

export const RBOOK: Project = {
  name: 'rbook',
  link: 'https://github.com/devinsterling/rbook',
  languages: [language.Rust],
  technologies: [],
  introduction: 'A fast lightweight ebook parsing library written in Rust with epub 2 and 3 support.',
  synopsis:
    `Parses an epub file or directory to retrieve details with access to 
     metadata (title, author, identifiers), manifest (all resources), spine (reading order), landmarks (navigation hints), and table of contents.
     Optional features include multi-thread support, reader functionality, and statistics (word/character count).`,
  thumbnail: images[0],
  images,
};

export default RBOOK;